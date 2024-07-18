// for (let i = 0; i <=10 ; i++) {
//     console.log(i*2); 2 ka table
// }



function sum(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sum(5);     //parameter  sum of number

//     without function
//     let sum = 0;
//     for (let i = 0; i <= a; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);




// function averages(a) {
//     let sum = 0;                           //sum = 0
//     let average = 0;                       // i koo 1 kr dege
//     for (let i = 1; i <= a; i++) {
//         sum = sum + i;                      // jese sum ko 0 de rhkha h i ko 1 
//         average = sum / a;                  // unko + krege 1 aayega and fir sum ki 
//     }                                        // value ab 1 ho gyi and i ++ ho gya 
//     console.log(sum);                       // and ab sum 1 h and i ki value 2 he iss type me
//     console.log(average );
// }
// averages(5); 



// table kisi ka bhi
    
//     for (let i = 1; i <= 10; i++) {
//     console.log(i+" *2 ="+i*2); 
//   }
  

///1 to 100 even number
// for (let i = 0; i <= 50; i++) {
//     console.log(i*2); 
//   }

//  cube
// function sum(a){
//     let sum = 0;
//     for (let i = 0; i <= a; i++) {
//         sum = i*i*i;
//     }
//     console.log(sum);
// }
// sum(2);    


// for (let i = 0; i <= 4; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }

// *
// **
// ***
// ****
// *****



// for (let i = 5; i >=1 ; i--) {          //i ko 5 se start kra 
//     let str = "";
//     for (let j = 1; j <= i; j--) {
//         str += "*";
//     }
//     console.log(str);
// }







// for (let i = 0; i <= 4; i++) {
//     let str ="";
//     for (let j = 1; j <= i; j++) {
//        str += "1";
//     }
//     console.log(str);
// }
// 1
// 11
// 111
// 1111


// for (let i = 5; i >=1 ; i--) {          //i ko 5 se start kra 
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }
// ****
// ***
// **
// *





function rightAlignedTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 0; j < n - i; j++) {
            line += ' ';

        }
        for (let k = 0; k < i; k++) {
            line += '1 ';
        }
        console.log(line);
    }
}



rightAlignedTriangle(5);
  
