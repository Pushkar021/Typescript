//so when you create a new pro change rootdir and outdir in tsconfig
//and put dist in gitignore 


// const x:number = 1
// console.log(x)
// let y = 2
// console.log(y)
// let z:string = "hello"
// let c : boolean = true
// console.log(z)
// console.log(c)



//problem 1
// function hello(args:string){
//     console.log("Hello " +args )
// }

// hello("pushkar")


//problem-2
//type inference
//Type inference is the ability of TypeScript to automatically determine the type of a variable, parameter, or expression based on the context and the value assigned to it.
// function sum(a:number,b:number){
//     return a+b
// }
// let result =  sum(12,21)
// console.log(result)

 //problem -3
//  function isLegal(args:number):boolean{
//     if(args>18){
//         return true
//     }else{
//         return false
//     }
//  }
//  let result = isLegal(9)
//  console.log(result?"Yes":"No")


//problem-4
// function first(fn:()=>void){
//     console.log("first")
//     setTimeout(()=>{
//         fn()
//     },1000)
// }
// function second(args:number){
//     console.log(args)
    
// }

// first(()=>second(23));

//second solution

function first(fn:()=>boolean){
    console.log("first")
    setTimeout(() => {
        let x = fn()
        console.log(x)
    }, 1000);
}
function second(args:number):boolean{
    if(args){
        return true
    }else{
        return false
    }
}

first(()=>second(23))

