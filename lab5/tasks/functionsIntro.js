
// // declaration
// let x;
// // definition
// let y = 4;

// function declaration:
// function greet() {
// 	console.log(`Hello World!`);
// };
// // function expression
// let greet2 = function() {
// 	console.log(`Hello World!`);
// };


// function greet( userName ) {
// 	// let userName = 'Maria'
// 	console.log(`Hello ${userName}!`);
// };

// greet( 'Maria' ); // Hello Maria
// greet( 'Pesho' ); // Hello Pesho


let add = function(x,y) {
	return x+y
}

console.log( add(2,3) );

let res = add(2,3) ** 2; // NaN: undefined ** 2
console.log(`res: ${res}`);


// 5
// res: 25

function f(){
	console.log("start");
	return true;
	console.log("end"); // никога няма да се изпълни!
}








