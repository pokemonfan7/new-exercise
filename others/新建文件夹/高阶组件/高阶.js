function hello(){
	console.log('hello')
}

function wraphello(fn){
	return function(){
		console.log('start hello')
		fn()
		console.log('end hello')
	}
}

wraphello(hello)();