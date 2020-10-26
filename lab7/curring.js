function foo(x) {
	return function(y) {
		console.log(`x: ${x}`);
		console.log(x+y);
	}
}


foo(2)(3); // 5




// let res = 2+3;




