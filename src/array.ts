let nums:number[] = [1,2,3,894,5]
console.log(nums)
let words : string[] = ["Pushkar","Patel"]
console.log(words)

function maxInt(args:number[]){
   let max:number =  args[0]
   for(let i=0;i<args.length;i++){
    if(args[i]>max){
        max = args[i]
    }
   }
   return max
}


function result(fn:()=>number){
    let res = fn();
    console.log(res)
}

result(()=>maxInt(nums))


//array of objects

type Usertype = {
    name:string,
    age:number
}


let arrofObject:Usertype[] = [
    {name:"Pushkar",age:69},
    {name:"Pushkar -1",age:9},
    {name:"Pushkar - 2",age:69},
]
console.log(arrofObject)

//filter the arryofobj and return only those element which has age greater than 18 
let filteredop = (args:Usertype[])=>{
   let b =  args.filter((ar)=>ar.age>18)
   console.log(b)
}
filteredop(arrofObject)


//another example
interface User2 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User2[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
} ]));