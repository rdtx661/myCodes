$(function(){
	var str="1234561";
	var c=str.length-1;
	var startStr="";
	for(var a=0;a<c;a++){
		startStr+="*";
	}
	var reStr="$1"+startStr;
	var re =new RegExp("(\\d{1})\\d{"+c+"}","g");
	str = str.replace(re, reStr);
	console.info(str);

})