// const tasks=[];
// const output=(i)=>
// 	new Promise((resolve)=>{
// 		setTimeout(()=>{
// 			console.log(i);
// 			resolve();
// 		},i*1000);
// 	});

// for(var i=0;i<5;i++){
// 	tasks.push(output(i));
// }

// Promise.all(tasks).then(
// 	()=>{
// 		setTimeout(()=>{
// 			console.log(i);
// 		},1000);
// 	}
// );

//每隔1s输出一个
const output=(i)=>new Promise((resolve)=>{
	setTimeout(()=>{console.log(i);resolve();},1000);
});

(async ()=>{
	for(var i=0;i<5;i++){
		await output(i);
	}
	await output(i);
})()

const output=(i)=>new Promise((resolve)=>{
	setTimeout(resolve,1000);
});

(async ()=>{
	for(var i=0;i<5;i++){
		await output(i);console.log(i);
	}
	await output(i);console.log(i);
})()
//输出1隔1s，输出2隔2s。。。
// const output=(i)=>new Promise((resolve)=>{
// 	setTimeout(()=>{console.log(i);resolve();},i*1000);
// });

// (async ()=>{
// 	for(var i=0;i<5;i++){
// 		await output(i);
// 	}
// 	await output(i);
// })()

