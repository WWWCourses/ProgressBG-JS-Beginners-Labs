function foo(x) {
	console.log(x);
}

function caller(f) {
	f();
}

caller(foo);