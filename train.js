function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

// Masalan:
console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("hello", "ollhe"));       // true
console.log(checkContent("test", "tent"));         // false


// console.log("Jack Ma maslahatlari");
//const list = [
// 
//  "yaxshi talaba boling", // 0-20
//  "togri boshliq tanlang va koproq hato qiling", //20-30
//  "uzingizga ishlashni boshlang", // 30-40
//  "siz kuchli bolgan narsalarni qiling", //40-50
//  "yoshlarga investitsiya qiling", //50-60
//  "endi dam oling, foydasi yoq endi", //60+
//];

// Callback function

//  function maslahatBering(a, callback) {
//  if(typeof a !=="number") callback("insert a number", null);
//  else if (a <=20) callback(null, list[0]);
//  else if (a>20&& a <= 30) callback(null, list[1]);
//  else if (a>30&& a <= 40) callback(null, list[2]);
//  else if (a>40&& a <= 50) callback(null, list[3]);
//  else if (a>50&& a <= 60) callback(null, list[4]);
//  else {
//  setInterval(function() {
// callback(null, list[5]);

// }, 1000);
// }
// }

// console.log("passed here 0");
// maslahatBering(65,(err,date) =>{
// if(err) console.log("ERROR", err);
// else {
// console.log("javob", date);
//}
//});
//console.log("passsed here 1");

//console.log("next line");
// Asynchronous function

//async function maslahatBering (a) {
//     if(typeof a !== "number") throw new Error("insert number");
//     else if (a <= 20) return list[0];
//     else if(a > 20 && a <=30) return list[1];
//     else if(a > 30 && a <=40) return list[2];
//     else if(a > 40 && a <=50) return list[3];
//     else if(a > 50 && a <=60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });

      
//     }
// };

// call via then/catch
// maslahatBering(65).then(data => {
//     console.log("answer:", data);
// }).catch(err => {
//     console.log("Error:", err);
// });
// console.log("next");


// call via await

// async function run() {
//     let answer = await maslahatBering(70);
//     console.log(answer);
//     answer = await maslahatBering(25);
//     console.log(answer);
//     answer = await maslahatBering(39);
//     console.log(answer);
// }
// run();

// console.log("next");
