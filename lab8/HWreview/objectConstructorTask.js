// конструктор за обекти от тип Patient:
function Patient( age, firstName, lastName ){
	this.age = age;
	this.firstName = firstName;
	this.lastName= lastName;

	console.log( prototype );

	prototype.printAge = function () {
		console.log(`Foo`);
	}
};

Patient.prototype.id = 1;
Patient.prototype.firstName = "Anonymous";
console.dir(Patient);

Patient.prototype.printAge = function () {
	console.dir(this);
	console.log(this.age);
}
Patient.prototype.printAge();


// създаване и използване на обектите:
var ivan = new Patient( 60, "Иван", "Иванов");
var petyr = new Patient( 74, "Петър", "Петров");
console.dir(ivan);



ivan.printAge();
petyr.printAge();

// // ЗАДАЧА: определяне на по-младия пациент:
// // функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// // в противен случй - връща false:
// function isYounger( patient1, patient2 ){
// 	// ~~~~~~~~~~~~~~~~~~~~~~ //
// 	// --> your code here <-- //
// 	// ~~~~~~~~~~~~~~~~~~~~~~ //
// }

// if ( isYounger(ivan, petyr) ){
// 	console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
// }else{
// 	console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
// };