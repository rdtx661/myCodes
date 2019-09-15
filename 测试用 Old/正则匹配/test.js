$(function(){
	var str='%_123';
	// 匹配出其中数字
	str=str.replace(/^([%])(\d)/,"$1");
	alert(str);
})