$(function(){
	 if($(document).attr("title")=="初始测试模板"){
		sessionStorage.setItem("orderM","cost_price");
		location.href="test3.html";
	 }else{
	 	var aa=JSON.parse('[{"a":"123","b":"321"},{"a2":"112233","b2":"332211"}]');
	 	console.dir(aa);
	 	console.info(JSON.stringify(aa));
		alert(sessionStorage.getItem("orderM"));
	 }
})