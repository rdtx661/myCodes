$(function(){

	function aa(){
		console.info("111");
		return "111";
	}
	alert(aa());
	function aa(){
		console.info("222");
		return "222";
	}
	aa();
})