$(function(){
	// (\w)返回查找到的第一个字母
	alert("aaa-bbb-cc".replace(/-(\w)/g,function ($1){return $1.toUpperCase()}));
})