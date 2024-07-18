// let key = 9;
// switch (key) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("na");
//         break;
// }

// function getDaysInMonth(month, year) {
//   let days;

//   switch (month) {
//     case 1:
//       days = 31;
//       break; // January
//     case 3:
//       days = 31;
//       break; // March
//     case 5:
//       days = 31;
//       break; // May
//     case 7:
//       days = 31;
//       break; // July
//     case 8:
//       days = 31;
//       break; // August
//     case 10:
//       days = 31;
//       break; // October
//     case 12: // December
//       days = 31;
//       break;
//     case 4:
//         days = 30;
//         break; // April
//     case 6:
//         days = 30;
//         break; // June
//     case 9:
//         days = 30;
//         break; // September
//     case 11:
//       days = 30;
//       break;// November

//     case 2: // February
//       // Check for leap year
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         days = 29;
//       } else {
//         days = 28;
//       }
//       break;


//     default:
//       days = "Invalid month";
//   }

//   return days;
// }

// // Example usage:
// const month = 3; // February
// const year = 2024; // Leap year
// console.log(
//   `Total days in month ${month} of year ${year}: ${getDaysInMonth(month, year)}`
// );

// vowal constant

// switch ("b") {
//     case "a":
//       console.log("vowal");
//       break;

//       case "e":
//       console.log("vowal");
//       break;

//       case "i":
//       console.log("vowal");
//       break;

//       case "o":
//       console.log("vowal");
//       break;

//       case "u":
//       console.log("vowal");
//       break;

//     default:
//       console.log(" b, c, d,f,g,h,j ,k,l ,m ,n,p,q,r,s,t w,x,y,z");
//       break;
//   }

// oddeven
// function oddeven(n) {
//   switch (n/2==0) {
//     case 1:
//       console.log("even");
//       break;

//     default:
//       console.log("odd");
//       break;
//   }
// }
// oddeven(77)


// positive negative

// function posneg(n) {
//   switch (true) {
//     case n > 0:
//       console.log("number is positive");
//       break;
//     case n < 0:
//       console.log("number is negative");
//       break;
//     case n == 0:
//       console.log("number is zero");
//       break;

//     default:
//       console.log("kuch nhi");
//       break;
//   }
// }
// posneg(-14);


