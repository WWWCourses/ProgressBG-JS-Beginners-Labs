// // Create objects by literals
// let student1 = {
//     "firstName" : "Pesho",
//     "surName" : "Petrov",
//     "greet": function() {
//         console.log(`Hello`);
// 	}
// };


// let student2 = {
//     "firstName" : "Maria",
//     "surName" : "Popova",
//     "greet": function() {
//         console.log(`Hello`);
// 	}
// };


// // Create objects by "factory" function:
// const studentFactory = function (firstName, surName) {
// 	let obj = {};

// 	obj.firstName = firstName;
// 	obj.surName = surName;
// 	obj.greet = function() {
// 		console.log(`Hello`);
// 	}

// 	return obj;
// }

// let student1  = studentFactory("Pesho", "Petrov");
// let student2  = studentFactory("Maria", "Popova");


// (JUST FOR DEMO):
// // Create objects by "constructor" function:
// const Student = function (firstName, surName) {
// 	this.firstName = firstName;
// 	this.surName = surName;
// }
// // Student.prototype.id = 1;
// Student.prototype.greet = function () {
// 	console.log(`Hello ${this.firstName}`);
// }

// let student1  = new Student("Pesho", "Petrov");
// let student2  = new Student("Maria", "Popova");

// student1.greet(); // Hello "Pesho"
// student2.greet(); // Hello "Maria"

// (JUST FOR DEMO):
// // Create objects by "class syntax" :
// class Student{
// 	constructor(firstName, surName) {
// 		this.firstName = firstName;
// 		this.surName = surName;
// 	}
// 	greet(){
// 		console.log(`Hello ${this.firstName}`);
// 	}
// }

// console.log( typeof Student);
// let student1  = new Student("Pesho", "Petrov");
// let student2  = new Student("Maria", "Popova");

// student1.greet(); // Hello "Pesho"
// student2.greet(); // Hello "Maria"




