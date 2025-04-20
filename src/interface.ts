//code without using interface
// what is interface
//Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development

// function isLegal(user:{
//     name:string,
//     age:number
// }){
// if(user.age>18){
//     return true
// }
// else{
//     return false
// }
// }

// function greet(user:{
//     name:string,
//     age:number
// }){
//     console.log("hello " + user.name)
// }


// let result = isLegal({
//     name:"Pushkar",
//     age:19
// })

// console.log(result)
// greet({
//     name:"Pushkar",
//     age:19
// })



//code with interface

// interface User{
//     name:string,
//     age:number,
//     isUser:boolean,
//     email?:string //email is optional 
// }

// function isLegal(user:User){
//     if(user.age>18){
//         return true
//     }
//     return false
// }

// function greet(user:User){
//     console.log(user.name)
// }
// let obj = {
//     name:"Pushakar",
//     age:19,
//     isUser:true
// }
// greet(obj)
// let result = isLegal(obj)
// console.log(result)




//problem -3
interface User {
    name: string;
    age: number;
    greet(args: number): void;
}

class UserClass implements User {
    name = "pushkar";
    age = 56;

    constructor() {
        console.log("constructor is called");
    }

    greet(args: number): void {
        console.log("your number is " + args);
    }
}

let a = new UserClass();
a.greet(69);
