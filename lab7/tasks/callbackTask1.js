let caller = function(f) {
    console.log(`Caller is calling f`);
    f();
}

let power = function (x) {
	// let x = 3
	return function() {
		console.log(`x in anonymous: ${x}`); //
	};
}

let cub = function (x) {
	return (x*x*x);
}


// Test

caller( power(3) );

// output:
// Caller is calling f
// 9

