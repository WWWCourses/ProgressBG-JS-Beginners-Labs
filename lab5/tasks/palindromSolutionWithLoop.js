let arr = [1,2,4,2,1]; // a palindrom arr

let str = 'madam'; // a palindrom
// console.log( str[0] === str[str.length-1] );

let isPalindrom = true;
for (let i = 0; i < arr.length; i++) {
	if( arr[i] !== arr[arr.length-(i+1)] ){
		isPalindrom = false;
		return
	}
}
if( isPalindrom ){
	console.log(`Palindrom`);
}






