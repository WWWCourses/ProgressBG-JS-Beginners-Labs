function Foo(id){
	// let this = {}
	this.id = id;
	// this.increment = function objFunct () {
	// 	console.log(`Set ID`);
	// }
	// return this
};

// console.dir(Foo);
// console.dir(Foo.prototype);

Foo.prototype.increment = function() {
	console.log(this);
}
Foo.increment = function () {
	console.log(`Hello`);
}

let obj0 = new Foo(0);
let obj1 = new Foo(1);
let obj2 = new Foo(2);
let obj3 = new Foo(3);
let obj4 = new Foo(4);


obj3.increment();          // set ID
Foo.prototype.increment(); //












// let arr = [1,2];
// let arr2 = new Array(1,2);

// let obj = {};
// let obj2 = new Object();



// 			// 	Object
			// Array   Function