// "use strict"
var x = 5;
var z = 1;

function foo(x) {
	z = 7;
	console.log(`x in foo: ${x}`);
	console.log(`z in foo: ${z}`); //7
}
foo(9);


console.log(`z in main: ${z}`); // 7

// // SCOPES
// global ={
// 	'x': 0001, => 5
// 	'z': 0003, => 1
// 	'foo': 0986
// }

// // created on foo execution, deleted after foo executio
// foo={
// 	'x':0872, => 9
// 	'z':0989 => 7
// }




