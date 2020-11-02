let str = "ada";
let strObj = (new String(str));

strObj.id = 1;
console.log(strObj.id);// 1

str.id = 1;//
console.log( str.id ); // undefined


// let res = str.toUpperCase();
// // let res = (new String(str)).toUpperCase();
// console.log( str ); // ada
// console.log( res ); // ADA

