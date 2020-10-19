// let arr = [
// 	2,
// 	[1,2,3]
// ];
// console.log( arr[1][2] );

// the sum of arr elements:
let arr = [
	[1,2,3],
	[4,5,6]
];

// sum of each row:
for (let i=0; i<arr.length ;i++){
	let inner = arr[i];
	let sum = 0;

    for (let j=0; j<inner.length ;j++){
        sum += arr[i][j];
	}

	console.log(sum);
};
















