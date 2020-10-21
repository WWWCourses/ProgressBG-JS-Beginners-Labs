// console.log(`x: ${x}`); // undefined

// var x = 5;
// const foo = function () {
// 	let y = 10;
// 	console.log(`foo`);
// }

// console.log(`x: ${x}`); // 5

// // compile time ( creating execution context )
// gobal={
// 	'x' : 0x123,
// 	'foo':0x124
// }

// // run time (execution)
// // undefined
// // x = 5
// // foo = <the code>
// // 5

foo();
bar();

function foo() {
	console.log(`foo`);
}
const bar = function () {
	console.log(`bar`);
}
