
// console.log( Math.ceil(2.5656567)); //   3
// console.log( Math.floor(2.5656567)); //  2
// console.log( Math.round(2.5656567)); //  3

// generate random integer number in [1..10]:
let userNumber = Math.ceil( Math.random() * 10 );
// console.log(userNumber);

// // generate machine number:
// machineNumber = Math.ceil( Math.random() * 10 );

// let countTry = 1;
// while (userNumber !== machineNumber){
// 	// generate machine number:
//     machineNumber = Math.ceil( Math.random() * 10 );
// }
// console.log(countTry);
// let machineNumber;
// let countTry=0;
// do{
//     countTry++;
//     machineNumber = Math.ceil( Math.random() * 10 );
// }while(userNumber!==machineNumber);

// console.log( countTry );

// let i = 0;
// for(; ;){
// 	console.log(i++);
// 	// break;
// }


//TASK: log in console numbers [1..10], without 5 and 6



// expected output: 1,2,3,4,7,8,9
// for(let i=1;i<=10;i++){
//     if (i!==5 && i!==6){
//         console.log(i);
//     }
// }


// for (let i=1 ; i < 10; i++){
//     if (i === 5 || i === 6){
//         continue;
//     }

//     console.log(i);
// }


// expressions:
2+3;
// let x = 5;
// let x; // statement
// x = 3; // expression

// console.log( x = 8 ); //  8
// console.log( let y ); //  8

let x = 5;
let positive = x>0 ? true:flase; // expression
// if( x>0){
// 	positive = true;
// }else{
// 	positive = false;
// };
console.log(positive);

