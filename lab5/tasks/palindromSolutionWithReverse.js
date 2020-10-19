let arr = [1,2,4,5,2,1]; // a palindrom arr
	 //   [1,2,5,4,2,1]

let str = 'madam'; // a palindrom
// console.log( str[0] === str[str.length-1] );

// TODO: make it work with deep copy

let revArr = arr.reverse();
console.log(revArr);
console.log(arr);

let isNotPalindrom = false;
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i], revArr[i]);
	if( arr[i] !== revArr[i]){
		isNotPalindrom = true;
		return;
	}
}
// console.log(`isNotPalindrom: ${isNotPalindrom}`);

if( isNotPalindrom ){
	console.log(`**** Palindrom`);
}






