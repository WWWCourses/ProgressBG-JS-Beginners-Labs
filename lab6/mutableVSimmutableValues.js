// primitives are immutable
// let x = 5;
// x = 6;


// global={
// 	'x':0x013
// }

// addres: value
// 0x012: 0101 (5)
// 0x013: 1010 (6)


// object (arrays...) are mutable
let arr = [5];
// global={
// 	'arr':0x012
// }

// addres: value
// 0x012: 0101010101011 ([5])
arr[0] = 6;
// 0x012: 01111110101011 ([6])

