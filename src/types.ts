// type Usertype = {
//     name:String,
//     age:number,
//     email?:string
// }
// type Greetarg = number | string

// const greet = (args:Greetarg)=>{
//     console.log(args)
// }
// greet("1")
// greet(1)

// function isLegal(args:Usertype){
//     if(args.age>18){
//         return true
//     }
//     return false
// }
// let obj = {
//     name:"Pushkar",
//     age:69
// }
// let result = isLegal(obj)
// console.log(result)


//prob-2
//intersection

type A = {
    name:string,
    starttime:number
}
type B = {
    name:string,
    depttime:number
}

type c = A & B


function fn(args:c){
    console.log(args)
}

const as = {
    name:"Pushkar",
    starttime:56,
    depttime:65
}
fn(as)