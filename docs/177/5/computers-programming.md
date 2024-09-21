---
sidebar_position: 2
---

# Computers and Programming

Computers run on a binary system, which uses only two digits: 0 and 1.

To paraphrase part of [a lesson from Todd McLeod](https://youtu.be/mOu1N7uTXyg?si=YE5DJ9uc3UAphQCa):

Think of porch lights. With one porch light, we can communicate two messages: on or off. With two porch lights, we can communicate four messages: both off, one on, the other on, or both on. With three porch lights, we can communicate eight messages. This pattern continues, doubling the number of messages with each additional light.

This pattern is the basis of binary. Computers use binary to represent data. Each digit in a binary number is called a bit. A bit can be 0 or 1. Eight bits make a byte. A byte can represent 256 different values (2^8). A kilobyte is 1,024 bytes. A megabyte is 1,024 kilobytes. A gigabyte is 1,024 megabytes. A terabyte is 1,024 gigabytes. A petabyte is 1,024 terabytes. An exabyte is 1,024 petabytes. A zettabyte is 1,024 exabytes. A yottabyte is 1,024 zettabytes.

The binary system is the foundation of all computer operations. Computers use binary to represent numbers, text, and other data. The binary system is the basis for all computer programming languages.

Taking this a step further, we have [a reliable system called UTF-8](https://youtu.be/MijmeoH9LT4?si=CytxVNV1NkNkVLix) that maps 'porch lights' to every conceivable character in every conceivable language. This system allows us to represent text in binary. Computers use this system to store and display text. Most importantly, it allows us programmers to communicate with a computer using words and phrases taken from human languages and stitch them together in new ways to create programs.

Programming is the act of constructing a set of precise instructions for computers. Computers are common but complex; programming allows us to make them do unique or open-ended tasks. Programming can be tedious due to computers' pedantic nature, but it's also rewarding. It allows for quick execution of tasks and expands a computer's capabilities.

> Programming is the act of constructing a program—a set of precise instructions telling a computer what to do. Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating.
> [Source](https://eloquentjavascript.net/00_intro.html)

Let's unpack this quote:

- A program is "a set of *precise* instructions **telling a computer what to do**" and writing/"contructing" these instructions is *programming*.
- "Computers are *dumb*, *pedantic* beasts": unlike people, computers cannot "read between the lines" and fill-in implicit, contextual information. A program must have explicit and *formalized* instructions in order to be understood by the computer.
- Because computers only understand explicit, formalized instructions, writing programs is "**tedious** and **frustrating**." Communicating with a computer will be a struggle not only to break-down seemingly simple tasks into even more basic commands, but also to find formal errors involving parentheses, brackets, braces, and other special characters not normally used in everyday communication.

**Programming is made up of patterns that process and respond to data; said data could be discrete or collections.**

## Discrete Data

Discrete data refers to individual values that are distinct and separate. In modern EcmaScript (JavaScript), discrete data types include numbers, strings, and booleans.

### Example

```javascript
const age = 25; // Number
const name = "Alice"; // String
const isStudent = true; // Boolean
```

In this example:

- `age` is a number representing a person's age.
- `name` is a string representing a person's name.
- `isStudent` is a boolean indicating whether the person is a student.

## Collections

Collections are data structures that group multiple values together. In modern EcmaScript, common collections include arrays and objects.

### Arrays

Arrays are ordered collections of values. Each value in an array is called an element, and each element has an index.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

In this example, `fruits` is an array containing three string elements: "apple", "banana", and "cherry".

### Objects

Objects are collections of key-value pairs. Each key is a string, and each value can be any data type.

```javascript
const person = {
  name: "Bob",
  age: 30,
  isStudent: false,
};
```

In this example, `person` is an object with three key-value pairs:

- `name` is a key with the value "Bob".
- `age` is a key with the value 30.
- `isStudent` is a key with the value false.

These examples illustrate how discrete data and collections are used in modern EcmaScript to represent and manage data.
