$(function(){
	let arr=[1,2,3,4,5]
	let a=arr.filter((value,index) => {
		return value===1||value===2
	});
	console.log(a)

})
