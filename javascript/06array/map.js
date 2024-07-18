let arr = [{name:"Ganesh",age:75,clg:"DAVV"},
    {name:"krishna",age:70,clg:"IIPS"},
    {name:"ravi",age:35,clg:"IMS"}
]
// let total = arr.map(val=>val.name +" "+val.age) //first

// let total = arr.map(val=>{
//     return val.name +" "+val.age})
// console.log(total);      //second

let total = arr.map(val=>{
    let str = ""; 
    if (val.name=="krishna") {
        str = val.name +" "+val.age;
    }
    else{
        str = val.name+" kuch"    
    }
    return str;
})
console.log(total);
