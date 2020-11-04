function writeInOutput() {
	console.log(`1`);
}

let btnClick = {
	"addEventListener": function (type, listener) {
		console.log(`2. ${typeof listener}`);
		if( type === 'click'){
			listener();
		}
	}
}



btnClick.addEventListener('click', writeInOutput );


// 2 Function
// 1.
