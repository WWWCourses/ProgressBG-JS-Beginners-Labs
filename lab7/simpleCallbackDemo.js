let caller = function(f, x) {
	console.log(`Caller is calling f`);
	f(x);
}

let power = function (x) {
	console.log( x ** 2);
}

caller(power, 3); // 9

