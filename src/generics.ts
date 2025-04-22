function gn<T>(args:T[]){
    return args[0]
}

let value= gn<string>(["Pushkar","Patel"])
console.log(value.toUpperCase())
let value2 = gn<number>([1,2,3,4])
console.log(typeof(value2))
// ⚠️ Example 3: Mixed array - no explicit type provided
let value3 = gn([true, false, null, undefined, 5]);
// ⬆️ TypeScript infers the type T as:
// boolean | null | undefined | number
// So all elements are acceptable in the array
console.log(value3)
















// ------------------------------------
//explanations
// ❌ Step 1: Problem without Generics

// This function accepts an array of strings or numbers
// But allows mixed types in the array, which can be problematic
function getFirstElementWrong(arr: (string | number)[]) {
    return arr[0]; // TypeScript says return type is string | number
}

// This works fine
const el1 = getFirstElementWrong([1, 2, 3]);
console.log(el1); // 1

// ❗ But this also works, even though it's a mix of number and string
const el2 = getFirstElementWrong([1, 2, '3']); 
console.log(el2); // 1, but we allowed mixed types silently

// ❗ And this breaks type inference
const el3 = getFirstElementWrong(["Pushkar", "ramanSingh"]);
//console.log(el3.toLowerCase()); 
// TypeScript shows error: Property 'toLowerCase' does not exist on type 'string | number'
// Because it can't be sure if the result is string or number

//--------------------------------------------------------------//

// ✅ Step 2: Solution using Generics

// This function works with any type T
// and ensures that all elements in the array are of the same type
function getFirstElement<T>(arr: T[]): T {
    return arr[0]; // TypeScript now infers the return type correctly
}

// Calling the function with a string array
const el4 = getFirstElement(["Pushkar", "ramanSingh"]);
console.log(el4.toLowerCase()); // ✅ Works fine, el4 is known to be a string

// Calling the function with a number array
const el5 = getFirstElement([10, 20, 30]);
console.log(el5.toFixed(2)); // ✅ Works fine, el5 is known to be a number

// ❌ This will now throw a TypeScript error
// const el6 = getFirstElement([1, 2, '3']);
// Error: Argument of type '(string | number)[]' is not assignable to parameter of type 'T[]'
// This is good! It enforces type safety

//--------------------------------------------------------------//

/*
🎯 Summary:
- The non-generic version allows mixed types, which is unsafe
- TypeScript can't infer correct return type (string | number)
- Generic version <T> ensures that all items in array are of same type
- It also gives you correct return type (T), avoiding unsafe operations
*/
