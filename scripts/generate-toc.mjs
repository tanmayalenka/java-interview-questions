
import GitHubSlugger from "github-slugger";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Initialize file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../README.md");

// README markers
const TOC_START_MARKER = "<!-- TOC_START -->";
const TOC_END_MARKER = "<!-- TOC_END -->";

const QUESTIONS_START_MARKER = "<!-- QUESTIONS_START -->";
const QUESTIONS_END_MARKER = "<!-- QUESTIONS_END -->";

// Back to TOC link
const BACK_TO_TOC =
    "[⬆ Back to Table](#table-of-contents)";

// Read README.md
const rawFile = fs.readFileSync(filePath, "utf8");
const fileAsLines = rawFile.split(/\r?\n/);

// Find marker positions
const findMarker = (marker) =>
    fileAsLines.findIndex((line) => line.trim() === marker);

const tocStartIndex = findMarker(TOC_START_MARKER);
const tocEndIndex = findMarker(TOC_END_MARKER);

const questionsStartIndex = findMarker(QUESTIONS_START_MARKER);
const questionsEndIndex = findMarker(QUESTIONS_END_MARKER);

// Validate markers
if (
    [
        tocStartIndex,
        tocEndIndex,
        questionsStartIndex,
        questionsEndIndex,
    ].some((index) => index === -1)
) {
    throw new Error("One or more README markers are missing.");
}

if (
    tocStartIndex >= tocEndIndex ||
    questionsStartIndex >= questionsEndIndex ||
    (tocStartIndex < questionsEndIndex &&
        questionsStartIndex < tocEndIndex)
) {
    throw new Error("Invalid or overlapping README markers.");
}

// Initialize slugger and questions
const slugger = new GitHubSlugger();
const questions = [];

let currentQuestion = 0;

// Extract questions and add numbering
for (
    let i = questionsStartIndex + 1;
    i < questionsEndIndex;
    i++
) {
    const line = fileAsLines[i];

    // Match level-three headings
    const match = line.match(/^###\s+(.+)$/);

    if (!match) continue;

    // Remove existing serial number
    const questionTitle = match[1].replace(/^\d+\.\s*/, "");

    currentQuestion++;

    // Add serial number
    const numberedTitle = `${currentQuestion}. ${questionTitle}`;

    // Update heading
    fileAsLines[i] = `### ${numberedTitle}`;

    // Generate GitHub heading slug
    const slug = slugger.slug(numberedTitle);

    questions.push({
        number: currentQuestion,
        title: questionTitle,
        slug,
    });
}

// Generate Table of Contents
const tableOfContentsLines = [
    "| No. | Questions |",
    "| --- | --------- |",
];

questions.forEach(({ number, title, slug }) => {
    tableOfContentsLines.push(
        `| ${number} | [${title}](#${slug}) |`
    );
});

// Add Back to TOC links after each question's answer.
//
// Process headings from bottom to top so inserting lines
// does not affect the positions of earlier headings.
for (
    let i = questionsEndIndex - 1;
    i > questionsStartIndex;
    i--
) {
    if (!/^###\s+/.test(fileAsLines[i])) continue;

    // Find the next question or section heading
    let nextHeading = i + 1;

    while (
        nextHeading < questionsEndIndex &&
        !/^#{1,3}\s+/.test(fileAsLines[nextHeading])
    ) {
        nextHeading++;
    }

    // Check whether the back link already exists
    const sectionLines = fileAsLines.slice(i + 1, nextHeading);

    const alreadyExists = sectionLines.some(
        (line) => line.trim() === BACK_TO_TOC
    );

    if (!alreadyExists) {
        fileAsLines.splice(
            nextHeading,
            0,
            "",
            BACK_TO_TOC,
            ""
        );
    }
}

// Replace existing TOC
const outputFileLines = [
    ...fileAsLines.slice(0, tocStartIndex + 1),
    ...tableOfContentsLines,
    ...fileAsLines.slice(tocEndIndex),
];

// Write updated README
const outputFile = outputFileLines.join("\n");

fs.writeFileSync(filePath, outputFile, "utf8");

// Display result
console.info(`Generated TOC for ${questions.length} questions.`);
console.info("Back to TOC links generated successfully.");
