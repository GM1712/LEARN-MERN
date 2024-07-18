let arr = [1,2,3,4,5]

// let output = arr.reduce((sum, val)=>{
//         return   sum+ val;
// },0);
let output = arr.reduce((sum, val)=>{
   if (val<3) {
    val = val*3
   }
   return sum +val;
},0);;
console.log(output);