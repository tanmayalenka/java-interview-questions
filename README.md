
# Java Interview Questions and Answers

A collection of Java interview questions and answers
for beginners and experienced developers.

This repository covers Core Java, OOP, Collections,
Multithreading, Java 8+, JVM, Spring Boot and more.

## Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Why is String immutable in Java?](#1-why-is-string-immutable-in-java) |
| 2 | [Is String immutable or final in Java?](#2-is-string-immutable-or-final-in-java) |
| 3 | [What is String Constant Pool (SCP) in Java?](#3-what-is-string-constant-pool-scp-in-java) |
| 4 | [String vs StringBuffer vs StringBuilder](#4-string-vs-stringbuffer-vs-stringbuilder) |
<!-- TOC_END -->

# Java Interview Questions

<!-- QUESTIONS_START -->

## Core Java

### 1. Why is String immutable in Java?
String is immutable in Java mainly for security, thread safety, memory optimization, and performance.

- Security: Prevents unexpected modification of sensitive data.

- String Constant Pool: Allows multiple references to safely share the same String object.

- Thread Safety: Multiple threads can share String objects without synchronization.

- HashCode Caching: Its hashCode can be cached because its value never changes.

- Reliability: Prevents unexpected changes in file paths, URLs, and class-loading-related values.


[⬆ Back to Table](#table-of-contents)

### 2. Is String immutable or final in Java?
- `String` is a final class, so it cannot be subclassed.

- Its internal state is designed to be immutable.

- Making the class final prevents subclasses from overriding its behavior and breaking immutability.

[⬆ Back to Table](#table-of-contents)

### 3. What is String Constant Pool (SCP) in Java?
String Constant Pool is a special memory area inside Java Heap Memory that stores and reuses String literals to reduce duplicate object creation and optimize memory usage.
#### Explanation:

- `String s1 = "Java"`: Creates a String object in the String Constant Pool (if it doesn't already exist).

- `String s2 = "Java"`: Reuses the existing String object from the pool.

- `String s3 = new String("Java")`: Explicitly creates a new String object in Heap Memory outside the pool.

- `s3.intern()` returns the canonical pooled reference for "Java".


| Comparison | Output | Reason |
| ---------- | ------ | ------ |
| `s1 == s2` | true | Both references point to the same object. |
| `s1 == s3` | false | Both references point to different objects. |
| `s1.equals(s3)` | true | Both objects contain the same value. |
| `s1 == s3.intern()` | true | Returns the canonical pooled reference |

[⬆ Back to Table](#table-of-contents)

### 4. String vs StringBuffer vs StringBuilder
| Features | String | StringBuffer | StringBuilder |
|----------|--------|--------------|---------------|
| Mutability | Immutable | Mutable | Mutable |
| Thread Safety | Yes (immutable state) | Yes (synchronized methods) | No |
| Synchronization | Not required | Yes | No |
| Performance | Slow for repeated modifications | Slower than StringBuilder generally | Faster generally |
| Memory | New object for changed value | Modifies existing object | Modifies existing object |
| Introduced | Java 1.0 | Java 1.0 | Java 1.5 |
| Storage | String Pool / Heap | Heap | Heap |


[⬆ Back to Table](#table-of-contents)

<!-- QUESTIONS_END -->
