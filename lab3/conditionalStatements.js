// if the condition is number, condition will be false if the number === 0

// let x = 6 ;
// Do not do this:
// if( x%2 ){
// 	console.log(`Odd`);
// }

// if( !(x%2) ){
// 	console.log(`Even`);
// }

// if( x%2 ){
// 	console.log(`Odd`);
// }else{
// 	console.log(`Even`);
// }


// let x = 8;
// Task:
// '1':  if x is Even and x is divisible by 3  (x = 6, 12, ...)
// '2': if x is Even and x is not divisible by 3  ( x = 4, 8, ...)
// '3': if x is not Even  (x = 1,3,...)

// if( x%2===0 && x%3===0 ){
// 	console.log(`1`);
// }else if( x%2===0 && x%3!==0 ){
// 	console.log(`2`);
// }else {
// 	console.log('3');
// }

// if( x%2 === 0){
// 	if( x%3 === 0){
// 		console.log(`1`);
// 	}else{
// 		console.log(`2`);
// 	}
// }else{
// 	console.log(`3`);
// }

// TASK:
// ако userAge not in [1..100] => 'please, enter a valid Age'
// ако потребителя е пълнолетен => 'аdult'
// ако потребителя е тийнджър => 'teen'
// ако потребителя е дете => 'child'


// if( ){
// 	if(userAge > 17 ){
// 		console.log(`adult`);
// 	}else if( userAge > 12  ){
// 		console.log(`teen`);
// 	}else if( userAge < 13 ){
// 		console.log(`child`);
// 	}
// }


// let userAge = -9;
// if ( !(userAge > 0 && userAge <= 100) ){
// 	console.log(`please, enter a valid Age`);
// }else if(userAge > 17 ){
// 	console.log(`adult`);
// }else if( userAge > 12  ){
// 	console.log(`teen`);
// }else if( userAge < 13 ){
// 	console.log(`child`);
// }

// console.log(`END`);

// ternary operator:
let x = 9;
let res;
// TASK: res = 'even' | 'odd'
if( x%2 ){
	res = 'odd'
}else {
	res = 'even'
}
console.log(`res: ${res}`);

res =  x%2 ? 'odd' : 'even';
console.log(`res: ${res}`);


















