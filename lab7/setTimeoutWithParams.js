let greet = function (userName) {
	return function () {
		console.log(`Hello, ${userName} `);
	}
}

// function setTimeout(f, delay) {
// 	// wait dalay
// 	f();
// }

setTimeout( greet('maria') , 2000); //
setTimeout( greet('pesho') , 4000); //





