# TypeScript Documentation

## Links

- [TypeScript Official Website](https://www.typescriptlang.org/)
- [TypeScript GitHub Repository](https://github.com/microsoft/TypeScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Compiler (tsc) Documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces)
- [TypeScript Type Aliases](https://www.typescriptlang.org/docs/handbook/2/objects.html#type-aliases)
- [TypeScript Arrays](https://www.typescriptlang.org/docs/handbook/2/objects.html#arrays)

---

## Setting and Installation

**Step 1 - Install TypeScript Globally:**

```bash
npm install -g typescript
npm list -g
```

- This command installs TypeScript globally on your machine, allowing you to use the `tsc` command anywhere.
- The second command checks the list of installed npm packages.

**Step 2 - Initialize a Node.js Project with TypeScript:**

```bash
mkdir type-app
cd type-app
npm init -y
npx tsc --init
```

- These commands create a new directory (`type-app`), initialize a Node.js project with default settings (`npm init -y`), and generate a `tsconfig.json` file using `npx tsc --init`.

**Step 3 - Create a TypeScript File (a.ts):**

- Create two folders: `dist` (to contain `js` code) and `src` (to contain `ts` code).
- Create a `.gitignore` file and add `dist` to it. This prevents the `js` code from being pushed to GitHub.

**Step 4 - Add `dist` and `src` to `tsconfig.json` file:**

- Search and add:
  - `"rootDir": "./src",`
  - `"outDir": "./dist",`

**Step 5 - Create a TypeScript File `a.ts` inside the `src` folder:**

```tsx
// a.ts
const x: number = 1;
console.log(x);
```

**Step 6 - Compile the TypeScript File to JavaScript:**

```bash
tsc -b    OR    tsc src/a.ts --outDir ./dist/
```

- This will create a `a.js` file inside the `dist` folder.

**Step 7 - Run (`a.js`):**

```bash
node dist/a.js
```

---

## Why TypeScript

- JavaScript is a powerful and widely used programming language, but it has a dynamic typing system, which means variable types are determined at runtime. While dynamic typing provides flexibility, it can lead to runtime errors that are challenging to catch during development.

---

## What is TypeScript

- TypeScript is a superset of JavaScript that adds static typing to the language. It is designed to address some of the limitations of JavaScript by providing developers with a more robust type system.

![TypeScript Overview](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd578419f-7327-4580-9ece-2430f946db42%2FScreenshot_2024-01-28_at_1.00.19_AM.png?table=block&id=b04e253c-04bf-459c-a2a1-bcd33d400cdc&cache=v2)

---

## How TypeScript Works

1. **Static Typing:**
   - TypeScript introduces static typing, allowing developers to declare the types of variables, parameters, and return values at compile-time.

2. **Compatibility with JavaScript:**
   - TypeScript is a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code.

3. **Tooling Support:**
   - TypeScript comes with a rich set of tools and features for development, including code editors (like Visual Studio Code) with built-in TypeScript support.

4. **Enhanced IDE Experience:**
   - IDEs that support TypeScript offer improved code navigation, autocompletion, and better refactoring capabilities.

5. **Interfaces and Type Declarations:**
   - TypeScript introduces concepts like interfaces and type declarations, enabling developers to define clear contracts for their code.

6. **Compilation:**
   - TypeScript code is transpiled to JavaScript during the compilation process, ensuring compatibility with various JavaScript environments and browsers.

---

## Execution of TypeScript Code

- TypeScript code doesn't run natively in browsers or JavaScript environments. Instead, it undergoes a compilation process to generate equivalent JavaScript code.

1. **Writing TypeScript Code:**
   - Developers write TypeScript code using `.ts` or `.tsx` files.

2. **TypeScript Compiler (tsc):**
   - The TypeScript Compiler (`tsc`) processes TypeScript code.

3. **Compilation Process:**
   - The TypeScript Compiler parses and analyzes the TypeScript code, checking for syntax errors and type-related issues.

4. **Generated JavaScript Code:**
   - The output JavaScript code closely resembles the original TypeScript code but lacks TypeScript-specific constructs.

5. **JavaScript Execution:**
   - The generated JavaScript code can now be executed by any JavaScript runtime or browser.

6. **Runtime Environment:**
   - In the chosen runtime environment, the JavaScript code is interpreted or compiled by the JavaScript engine.

7. **Interacting with the DOM (Browser Environments):**
   - In browser environments, the JavaScript code may interact with the Document Object Model (DOM).

![Execution Flow](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9eebffab-c71c-4259-bd0a-d3018f9cbcb6%2FScreenshot_2024-01-28_at_1.06.49_AM.png?table=block&id=c4e38c5b-b88b-420d-8c0b-cae9448be840&cache=v2)

---

## TypeScript Compiler (`tsc`)

- The TypeScript Compiler (`tsc`) is responsible for transpiling TypeScript code into JavaScript.
- It can be installed using tools like npm and allows customization of compilation options.

> In summary, TypeScript code is transformed into JavaScript through the TypeScript Compiler (`tsc`).

---

## Basic Types in TypeScript

1. **Number:**
   ```tsx
   let age: number = 25;
   ```

2. **String:**
   ```tsx
   let name: string = "John";
   ```

3. **Boolean:**
   ```tsx
   let isStudent: boolean = true;
   ```

4. **Null:**
   ```tsx
   let myVar: null = null;
   ```

5. **Undefined:**
   ```tsx
   let myVar: undefined = undefined;
   ```

---

## Problems and Code Implementation

### 1. Hello World Greeting

**Objective:** Learn how to give types to function arguments in TypeScript.

**Task:**
Write a TypeScript function named `greet` that takes a user's first name as an argument and logs a greeting message to the console.

**Function Signature:**

```tsx
function greet(firstName: string): void {
    // Implementation goes here
}
```

**Solution:**

```tsx
function greet(firstName: string): void {
    console.log("Hello " + firstName);
}

// Example Usage
greet("harkirat");
```

### 2. Sum Function

**Objective:** Learn how to assign a return type to a function in TypeScript.

**Task:** Write a TypeScript function named `sum` that takes two numbers as arguments and returns their sum.

**Function Signature:**

```tsx
function sum(a: number, b: number): number {
    // Implementation goes here
}
```

**Solution:**

```tsx
function sum(a: number, b: number): number {
    return a + b;
}

// Example Usage
console.log(sum(2, 3));
```

---

## Enums in TypeScript

In TypeScript, **Enums** are a way to define named constants, either numeric or string-based.

### Example: Enum with Mixed Values

```ts
enum Options {
    "PO",                          // PO = 0
    Up = "sfdss",
    Down = 69,
    "po",                          // po = 70
    Right = "You pressed the right key",
}

function keyPressed(args: Options) {
    if (args == Options.Up) {
        console.log("up here ");
    } else if (args == Options.Right) {
        console.log(Options.Right);
    } else if (args == Options.Down) {
        console.log("down here");
    } else if (args == Options.po) {
        console.log(Options.po);  // This will print 70
    }
}

const direction = Options.po;
keyPressed(direction);  // This prints: 70
```

### Generics in TypeScript

Generics in TypeScript provide a way to create components that work with any data type while maintaining type safety.

```ts
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// Example usage with string array
let value = getFirstElement<string>(["Pushkar", "Patel"]);
console.log(value.toUpperCase());  // Output: PUSHKAR
```

---

## Interfaces, Types, and Arrays in TypeScript

### 1. Interfaces in TypeScript

An interface defines the **shape of an object**.

```ts
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function greetUser (user: User): void {
  console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
}

const user1: User = {
  name: "Pushkar",
  age: 21,
  isAdmin: true,
};

greetUser (user1);
```

### 2. Type Aliases in TypeScript

A `type` is similar to an interface but is more flexible.

```ts
type ID = number | string;

function getUser Id(id: ID): void {
  console.log(`User  ID is: ${id}`);
}

getUser Id(101);      // valid
getUser Id("abc123"); // valid
```

### 3. Arrays in TypeScript

TypeScript supports type-safe arrays.

```ts
let nums: number[] = [1, 2, 3];
let names: string[] = ["A", "B", "C"];

interface Student {
  name: string;
  grade: number;
}

const students: Student[] = [
  { name: "Aarav", grade: 8 },
  { name: "Meera", grade: 9 },
];

students.forEach((student) =>
  console.log(`${student.name} is in grade ${student.grade}`)
);
```

---

## Importing and Exporting Modules in TypeScript

### 1. Constant Exports (Named Exports)

```ts
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
```

### 2. Default Exports

```ts
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}
```

### 3. Importing External Libraries (Using Express)

```bash
npm install express
npm install @types/express
```

```ts
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

### Summary

- **Named Exports**: Export multiple items from a module and import them selectively.
- **Default Export**: Export a single item as default.
- **Importing External Libraries**: TypeScript allows you to import and use third-party libraries after installing them with npm.

--- 

This structured README provides a comprehensive overview of TypeScript, its installation, features, and practical examples, along with useful links for further reading.
