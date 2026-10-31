
# Java Interview Questions and Answers

A collection of Java interview questions and answers
for beginners and experienced developers.

## Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [Why is String immutable in Java?](#1-why-is-string-immutable-in-java) |
| 2 | [Is String immutable or final in Java?](#2-is-string-immutable-or-final-in-java) |
| 3 | [What is String Constant Pool (SCP) in Java?](#3-what-is-string-constant-pool-scp-in-java) |
| 4 | [String vs StringBuffer vs StringBuilder](#4-string-vs-stringbuffer-vs-stringbuilder) |
| 5 | [Why do we need Wrapper Classes in Java?](#5-why-do-we-need-wrapper-classes-in-java) |
| 6 | [What is the Object Class?](#6-what-is-the-object-class) |
| 7 | [Object-Oriented Programming (OOPs) Concepts in Java](#7-object-oriented-programming-oops-concepts-in-java) |
| 8 | [Why Java doesn't support multiple inheritance through classes?](#8-why-java-doesnt-support-multiple-inheritance-through-classes) |
| 9 | [Difference Between Abstract Class and Interface](#9-difference-between-abstract-class-and-interface) |
| 10 | [Use of `super` and `this` keyword in Java](#10-use-of-super-and-this-keyword-in-java) |
| 11 | [Java Reflection API](#11-java-reflection-api) |
| 12 | [Throwable, Exception, RuntimeException, and Error](#12-throwable-exception-runtimeexception-and-error) |
| 13 | [`try`, `catch`, and `finally` in Java](#13-try-catch-and-finally-in-java) |
| 14 | [How many ways can we create a thread in Java?](#14-how-many-ways-can-we-create-a-thread-in-java) |
| 15 | [What is the Executor Framework in Java?](#15-what-is-the-executor-framework-in-java) |
| 16 | [What is ExecutorService in Java?](#16-what-is-executorservice-in-java) |
| 17 | [Runnable vs Callable in Java](#17-runnable-vs-callable-in-java) |
| 18 | [Runnable vs Callable in Java](#18-runnable-vs-callable-in-java) |
| 19 | [What is CompletableFuture in Java?](#19-what-is-completablefuture-in-java) |
| 20 | [What is Virtual Threads (Project Loom) in Java?](#20-what-is-virtual-threads-project-loom-in-java) |
| 21 | [Platform Thread vs Virtual Thread](#21-platform-thread-vs-virtual-thread) |
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

### 5. Why do we need Wrapper Classes in Java?
Wrapper classes are needed to convert primitive data types into objects. They are useful when working with Java Collections, supporting autoboxing and unboxing, converting String values into primitives, using utility methods, Generics, and representing null values.

| Reason | Explanation |
|---|---|
| Collections | To store primitive values in collections `ArrayList<Integer>` |
| Generics | Generics support objects, not primitive types |
| Autoboxing | Automatically converts primitive types into wrapper objects `Integer value = 20` |
| Unboxing | Automatically converts wrapper objects into primitive types `int result = value` |
| String Conversion | Converts String values into primitive types `Integer.parseInt("100")` |
| Utility Methods | Provides useful methods and constants `Integer.MAX_VALUE` |
| Null Support | Allows storing null values `Integer value = null` |

#### Object Caching
In Java, Object Caching is an optimization technique where frequently used objects are reused instead of creating new objects every time. Java maintains a cache of Integer objects for values from -128 to 127 by default.
```java
    {
        Integer a = 100;
        Integer b = 100;

        System.out.println(a == b); // true

        Integer x = 200;
        Integer y = 200;

        System.out.println(x == y); // false
        System.out.println(a.equals(b)); // true
    }
```

[⬆ Back to Table](#table-of-contents)

### 6. What is the Object Class?
In Java, the Object class is the root class of the Java class hierarchy.
- Every class in Java directly or indirectly inherits from the Object class.
- If a class does not explicitly extend another class, it implicitly extends Object.
- The Object class belongs to the java.lang package.
- It provides common methods that can be used by every Java object.

#### Object Class Methods
| Method | Description |
|---|---|
| `toString()` | Returns the string representation of an object. |
| `equals(Object obj)` | Compares two objects for logical equality. |
| `hashCode()` | Returns the hash code of an object. |
| `getClass()` | Returns the runtime class of an object. |
| `clone()` | Creates and returns a copy of an object. |
| `finalize()` | Deprecated method previously used during garbage collection. |
| `wait()` | Causes the current thread to wait. |
| `wait(long timeout)` | Causes the current thread to wait for a specified time. |
| `wait(long timeout, int nanos)` | Causes the current thread to wait for a specified time in milliseconds and nanoseconds. |
| `notify()` | Wakes up one waiting thread. |
| `notifyAll()` | Wakes up all waiting threads. |

Note: finalize() has been deprecated since Java 9 and deprecated for removal since Java 18. It should not be used in modern Java applications.


[⬆ Back to Table](#table-of-contents)

### 7. Object-Oriented Programming (OOPs) Concepts in Java
It is a programming approach in which software is designed using objects and classes.
An object contains:

- __State__: Data or properties (variables).
- __Behavior__: Actions or functionality (methods).
- __Identity__: A unique identity that distinguishes one object from another.

There are four major pillars of OOPs:
#### 1. Encapsulation
Encapsulation is the process of wrapping data (variables) and methods into a single unit (class) and restricting direct access to the data.
- Encapsulation is also known as data hiding, although data hiding is only one aspect of encapsulation.
- It protects data from unauthorized direct access.
- It provides controlled access through methods.
- It improves maintainability and flexibility.

In Java, encapsulation is achieved using:

- Private variables.
- Public getter and setter methods.

#### 2. Inheritance
Inheritance is a mechanism in which one class acquires the properties and behaviors of another class. It promotes code reusability.
- Java supports single, multilevel, and hierarchical inheritance through classes.
- Java does not support multiple inheritance through classes.
- Java supports multiple inheritance through interfaces.
- Constructors are not inherited.
- The `super` keyword is used to access parent-class members and constructors.
- Private members are not directly accessible in subclasses.
- A final class cannot be extended.

#### Terminology
- __Parent Class__: Superclass or Base Class.
- __Child Class__: Subclass or Derived Class.
- `extends`: Keyword used to inherit a class.

#### 3. Polymorphism
Polymorphism means **one name, many forms**. It allows the same method or interface to behave differently depending on the context.

#### i. Compile-Time Polymorphism (Method Overloading)
When multiple methods have the same name but different parameter lists within a class, it is called method overloading.
- Method names must be the same.
- Parameter lists must be different.
- Return type alone cannot distinguish overloaded methods.
- It is resolved at compile time.
- Static methods can also be overloaded.

#### ii. Runtime Polymorphism (Method Overriding)
When a child class provides its own implementation of a method already defined in its parent class, it is called method overriding.
- Method names and parameter lists must match.
- The child class provides a different implementation.
- It requires inheritance or an applicable interface implementation relationship.
- It is resolved at runtime through dynamic method dispatch.
- Static methods are hidden, not overridden.
- Private methods cannot be overridden.
- Final methods cannot be overridden.

#### 4. Abstraction
Abstraction is the process of hiding implementation details and showing only essential functionality to the user.<br>
In Java, abstraction can be achieved using:

#### i. Abstract Class
An abstract class is a class declared using the abstract keyword.<br>
It can contain:
- Abstract methods.
- Concrete methods.
- Constructors.
- Instance variables.
- Static methods.
An abstract class cannot be instantiated directly.

#### ii. Interface
An interface is a reference type that defines a contract that implementing classes agree to follow.
It is declared using the interface keyword.<br>
Interfaces can contain:
- Abstract methods.
- Default methods.
- Static methods.
- Private methods (Java 9 onwards).
- Constants.

[⬆ Back to Table](#table-of-contents)

### 8. Why Java doesn't support multiple inheritance through classes?
Java does not support multiple inheritance through classes because it can create ambiguity, such as the diamond problem, where two parent classes provide the same method implementation.
- Class B inherits from Class A.
- Class C inherits from Class A.
- Class D inherits from both B and C.

If B and C provide different implementations of the same method, which implementation should D use?<br>
This ambiguity is called the Diamond Problem. However, Java supports multiple inheritance of type through interfaces.

[⬆ Back to Table](#table-of-contents)

### 9. Difference Between Abstract Class and Interface
| Abstract Class | Interface |
|---|---|
| Declared using `abstract class` | Declared using `interface` |
| Can have constructors | Cannot have constructors |
| Can have instance variables | Fields are `public`, `static`, and `final` |
| Can contain abstract and concrete methods | Can contain abstract, default, static, and private methods |
| A class can extend only one class | A class can implement multiple interfaces |
| Supports shared state and implementation | Primarily defines a contract |
| Uses `extends` | Uses `implements` |

#### Use Abstract Class When:

- Classes share common state.
- Classes require common implementation.
- You want to provide a base class with constructors.

#### Use Interface When:

- You want to define a contract.
- Unrelated classes should provide common functionality.
- You need multiple inheritance of type.

[⬆ Back to Table](#table-of-contents)

### 10. Use of `super` and `this` keyword in Java
In Java, `super` and `this` are keywords used to refer to the current object and its parent class. They are commonly used in inheritance and constructors.

__i. `this` keyword__: The `this` keyword refers to the current class object.
- To refer to current class instance variables `this.id`.
- To call current class methods `this.value()`.
- To call the current class constructor using `this()`.
- To pass the current object as an argument `value(this)`.

__ii. `super` keyword__: The super keyword refers to the immediate parent class object.
- To access parent class variables `super.id`.
- To call parent class methods `super.value()`.
- To call parent class constructor using `super()`.

#### Important interview points:

- `this()` and `super()` must be the first statement in a constructor.
- You cannot use both `this()` and `super()` in the same constructor.
- Java automatically inserts `super()` if no explicit constructor call is written (provided the parent has an accessible no-argument constructor).


[⬆ Back to Table](#table-of-contents)

### 11. Java Reflection API
The Java Reflection API allows a Java program to inspect and manipulate classes, methods, constructors, fields, and interfaces at runtime.

Reflection is useful when you want to:
- Get class information at runtime.
- Access private variables and methods.
- Create objects dynamically.
- Call methods dynamically.
- Read or modify fields.
- Inspect constructors and interfaces.

#### Real-world Uses of Reflection
- Spring Framework: Dependency injection and bean creation.
- Hibernate: Entity inspection and object mapping.
- JUnit: Discovering and executing test methods.
- Jackson: Mapping Java objects to JSON.
- Maven/Plugins: Dynamic class loading and plugin execution.

[⬆ Back to Table](#table-of-contents)

## Exception Handling

### 12. Throwable, Exception, RuntimeException, and Error
#### __i. Throwable__
`Throwable` is the parent class of all errors and exceptions in Java.<br>
It has two main child classes:
- Exception
- Error
```
Object
   |
Throwable
   |----------|
Exception    Error
   |
RuntimeException
```
#### __ii. Exception__
`Exception` represents conditions that an application may want to handle. There are two main categories:<br>
__a. Checked Exception__<br>
- Checked at compile time. The programmer must handle it using `try-catch` or declare it using `throws`.
- Examples: `IOException`, `SQLException`, `ClassNotFoundException`
```java
try {
        FileReader f = new FileReader("abc.txt");
    } catch (IOException e) {
        System.out.println("File not found");
    }
```
__b. Unchecked Exception__<br>
These are exceptions under `RuntimeException`. The compiler does not require you to handle them.

#### __iii. RuntimeException__
- `RuntimeException` is a child class of `Exception`.
- It represents exceptions that generally occur during program execution.
- Examples: `ArithmeticException`, `NullPointerException`, `NumberFormatException`, `ClassCastException`
```java    
    int a = 10;
    int b = 0;

    System.out.println(a / b); // ArithmeticException
```

#### __iv. RuntimeException__<br>
- Error represents serious problems that applications generally cannot recover from.
- Examples: `OutOfMemoryError`, `StackOverflowError`, `VirtualMachineError`, `AssertionError`


[⬆ Back to Table](#table-of-contents)

### 13. `try`, `catch`, and `finally` in Java

#### __i. `try` block__
- Contains code that might cause an exception.
- Java monitors this code for errors.
- If an exception occurs, control moves to the matching `catch` block.

#### __ii. `catch` block__
- Handles the exception thrown by the `try` block.
- You can have multiple catch blocks to handle different types of exceptions.

#### __iii. finally block__
- Executes whether an exception occurs or not (with a few exceptional termination cases).
- Commonly used for cleanup operations, such as closing files or database connections.

#### Important rules for interviews
- A `try` block must be followed by at least one `catch` or a `finally` block.
- You can use multiple `catch` blocks.
- Only one matching `catch` block executes.
- `finally` generally executes whether an exception occurs or not.
- `finally` is commonly used to release resources.
- A `finally` block may not execute if the JVM terminates abruptly, such as through `System.exit()`.

#### **W.r.t. `return` statement**
**i. Return inside try block**<br> 
If the `try` block has a return statement, the `finally` block executes before the method actually returns.

```java
public class Main {
    static int test() {
        try {
            return 10;
        }
        finally {
            System.out.println("Finally executed");
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}
```

Output:
```
Finally executed
10
```

**ii. Return inside both try and finally**<br>
If both blocks contain return statements, the `finally` return overrides the `try` return.
```java
public class Main {
    static int test() {
        try {
            return 10;
        }
        finally {
            return 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}
```
Output:
```
20
```
**iii. Return inside catch and finally**
```java
public class Main {
    static int test() {
        try {
            int x = 10 / 0;
            return 10;
        }
        catch (Exception e) {
            return 20;
        }
        finally {
            return 30;
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}
```
Output:
```
30
```
**iv. Return inside try, but finally modifies the variable**
```java
public class Main {
    static int test() {
        int a = 10;

        try {
            return a;
        }
        finally {
            a = 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}
```
When Java encounters `return a`, it saves the return value (10). Then the `finally` block changes a to 20, but the saved return value remains 10.

Output:
```
10
```
**v. Return with an object reference**
```java
public class Main {
    static int[] test() {
        int[] arr = {10};

        try {
            return arr;
        }
        finally {
            arr[0] = 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(test()[0]);
    }
}
```
The return value is a reference to the array. The `finally` block modifies the same array object before the method returns.

Output:
```
20
```

[⬆ Back to Table](#table-of-contents)

## Multithreading

### 14. How many ways can we create a thread in Java?
There are two basic ways:
#### **i. Extending the Thread class**
- `Thread` is the predefined Java class.
- `run()` contains the task to execute.
- `start()` starts a new thread and invokes `run()`.
- `run()` executes like a normal method when called directly.
```java
class MyThread extends Thread {

    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {

        MyThread t1 = new MyThread();

        t1.start();
    }
}
```
#### **i. Implementing the Runnable interface**
- Create a class that implements `Runnable` and override its `run()` method.
- Since `Runnable` is a functional interface, we can use a `lambda` expression.

Note: Implementing `Runnable` is generally preferred because Java supports single inheritance, allowing your class to extend another class.
```java
class MyThread implements Runnable {

    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {

        MyThread obj = new MyThread();

        Thread t1 = new Thread(obj);

        t1.start();
    }
}
```

[⬆ Back to Table](#table-of-contents)

#### Life Cycle of a Thread
A Java thread has six states:
| **State** | **Meaning** |
| ----- | ----- |
| NEW | Thread is created |
| RUNNABLE | Thread is ready or running |
| BLOCKED | Waiting to acquire a monitor lock |
| WAITING | Waiting indefinitely for another thread |
| TIMED_WAITING | Waiting for a specified time |
| TERMINATED | Thread execution is completed |

### 15. What is the Executor Framework in Java?
The Executor Framework is a part of the java.util.concurrent package introduced in Java 5.
It provides a higher-level API to manage thread creation, thread execution, and thread lifecycle.
Instead of manually creating threads, we submit tasks to an Executor, which manages their execution.

```
Executor
   |
   v
ExecutorService
   |
   v
ScheduledExecutorService
```

**Benefits**:

- Thread reusability.
- Better resource management.
- Asynchronous task execution.
- Improved application scalability.
- Separation of task submission from task execution.


[⬆ Back to Table](#table-of-contents)

### 16. What is ExecutorService in Java?
`ExecutorService` is an interface extends `Executor` in Java's `java.util.concurrent` package used to manage and execute asynchronous tasks using a pool of threads.

Instead of manually creating and managing threads, ExecutorService handles thread creation, task execution, and thread lifecycle management.

**Types of ExecutorService**
| Type | Description |
|---|---|
| `newFixedThreadPool(5)` | Creates a pool with 5 fixed threads |
| `newCachedThreadPool()` | Creates threads as needed and reuses idle threads |
| `newSingleThreadExecutor()` | Executes tasks sequentially using one thread |
| `newScheduledThreadPool(3)` | Executes tasks after a delay or periodically |

**Important methods**
| Method | Purpose |
|---|---|
| `execute()` | Executes a `Runnable` task |
| `submit()` | Submits a task and returns a `Future` |
| `shutdown()` | Stops accepting new tasks |
| `shutdownNow()` | Attempts to stop running tasks |
| `isShutdown()` | Checks whether shutdown was initiated |
| `isTerminated()` | Checks whether all tasks have completed |
| `awaitTermination()` | Waits for task completion |


[⬆ Back to Table](#table-of-contents)

### 17. Runnable vs Callable in Java
Both `Runnable` and `Callable` are functional interfaces in Java used to represent tasks that can be executed by threads or the Executor Framework.

The main difference is that `Runnable` cannot return a result or throw checked exceptions, whereas `Callable` can do both.


[⬆ Back to Table](#table-of-contents)

### 18. Runnable vs Callable in Java

| Feature | Runnable | Callable |
|---|---|---|
| **Package** | `java.lang` | `java.util.concurrent` |
| **Method** | `run()` | `call()` |
| **Return type** | `void` | Generic type `V` |
| **Returns a result** | No | Yes |
| **Checked exceptions** | Cannot declare checked exceptions | Can throw checked exceptions |
| **Used with** | `Thread`, `ExecutorService` | `ExecutorService` |
| **Result retrieval** | Not directly supported | Through `Future` |

[⬆ Back to Table](#table-of-contents)

### 19. What is CompletableFuture in Java?
`CompletableFuture` is a Java class used for asynchronous and non-blocking programming. It allows you to execute tasks in the background, perform operations after tasks complete, combine multiple asynchronous tasks, and handle exceptions.

| Method | Description | Return Type |
|---|---|---|
| `supplyAsync()` | Executes an asynchronous task and returns a result. | `CompletableFuture<T>` |
| `runAsync()` | Executes an asynchronous task without returning a result. | `CompletableFuture<Void>` |
| `thenApply()` | Transforms the result of the previous task. | `CompletableFuture<U>` |
| `thenApplyAsync()` | Transforms the result asynchronously using an executor. | `CompletableFuture<U>` |
| `thenAccept()` | Consumes the result without returning anything. | `CompletableFuture<Void>` |
| `thenCompose()` | Chains dependent asynchronous tasks and avoids nested `CompletableFuture`. | `CompletableFuture<U>` |
| `thenCombine()` | Combines results of two independent `CompletableFuture` tasks. | `CompletableFuture<V>` |
| `allOf()` | Waits for all supplied `CompletableFuture` tasks to complete. | `CompletableFuture<Void>` |
| `anyOf()` | Completes when any one of the supplied futures completes. | `CompletableFuture<Object>` |
| `exceptionally()` | Handles exceptions and provides a fallback result. | `CompletableFuture<T>` |
| `handle()` | Handles both successful and exceptional completion. | `CompletableFuture<U>` |
| `whenComplete()` | Executes an action after completion without changing the result. | `CompletableFuture<T>` |
| `thenRun()` | Executes an action after the previous task without receiving its result. | `CompletableFuture<Void>` |
| `get()` | Retrieves the result and blocks until completion; throws checked exceptions. | `T` |
| `join()` | Retrieves the result and blocks until completion; throws unchecked exceptions. | `T` |
| `getNow()` | Returns the result if completed; otherwise returns a default value. | `T` |
| `orTimeout()` | Completes exceptionally if the specified timeout expires. | `CompletableFuture<T>` |
| `completeOnTimeout()` | Completes with a fallback value if the specified timeout expires. | `CompletableFuture<T>` |
| `complete()` | Manually completes the future with a given value. | `boolean` |
| `completeExceptionally()` | Manually completes the future exceptionally. | `boolean` |
| `cancel()` | Attempts to cancel the future. | `boolean` |
| `isDone()` | Checks whether the future has completed. | `boolean` |


[⬆ Back to Table](#table-of-contents)

### 20. What is Virtual Threads (Project Loom) in Java?
**Virtual Threads** are lightweight threads introduced in **Java 21** as a permanent feature (Project Loom). They make it easier to build highly concurrent applications without creating thousands of expensive platform (OS) threads.

Virtual Threads can be created by using:
- `Thread.startVirtualThread()`
- `Thread.ofVirtual()`
- `Executors.newVirtualThreadPerTaskExecutor()`

#### i. How Virtual Threads Work internally
Virtual threads run on top of platform threads called Carrier Threads. This allows a small number of platform threads to support a large number of virtual threads.

The execution works like this:

- JVM creates a virtual thread.
- JVM schedules it onto a carrier platform thread.
- The virtual thread executes its task.
- When it performs a supported blocking operation, it can unmount from the carrier thread.
- The carrier thread becomes available to execute another virtual thread.
- When the blocked operation completes, the virtual thread can be scheduled again.

#### ii. Good use cases:

- REST API calls
- Database calls
- Microservices
- HTTP client requests
- File I/O
- Applications handling thousands of concurrent requests

#### iii. Not particularly useful for:

- CPU-intensive calculations
- Image processing
- Heavy mathematical operations
- Tasks that continuously consume CPU

#### iv. Virtual Thread Limitations
- Don't pool virtual threads. Generally, create one per task.
- Don't use virtual threads to increase CPU parallelism.
- Avoid excessive synchronization that can cause thread pinning.
- Be careful with database connection pools: virtual threads don't increase the number of available database connections.
- Virtual threads are daemon threads, so they don't keep the JVM alive by themselves.


[⬆ Back to Table](#table-of-contents)

### 21. Platform Thread vs Virtual Thread

| Feature | Platform Thread | Virtual Thread |
|---|---|---|
| Introduced | Java 1.0 | Java 21 (permanent) |
| Managed by | OS scheduler | JVM scheduler |
| OS mapping | 1:1 | Many:1 |
| Creation cost | Relatively high | Very low |
| Memory consumption | Higher | Lower |
| Context switching | OS-managed | JVM scheduling plus OS scheduling |
| Blocking I/O | Usually blocks OS thread | Usually releases carrier thread |
| Scalability | Comparatively limited | Very high |
| CPU-intensive tasks | Suitable | No special advantage |
| I/O-intensive tasks | Less efficient at high concurrency | Very suitable |

[⬆ Back to Table](#table-of-contents)

<!-- QUESTIONS_END -->
