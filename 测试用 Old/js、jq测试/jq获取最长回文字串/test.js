$(function(){
	var str="我是我";
	var getStr=[];
	var Count=0;
	for(var i=0;i<str.length;i++){
		var nowStr=str[i];
		// 找出所有回文字符串部分
		for(var b=i+1;b<str.length;b++){
			//回文(顺序倒序相同) 第一个字符和最后一个字符相同
			if(nowStr==str[b]){
				//获取当前查找的字符到当前与该字符相等字符之前的字符（包含） 
				var getStrT=str.substring(i,b+1);
				// 拆分成数组
				var tempA=getStrT.split("");
				// 翻转数组倒序排列
				tempA=tempA.reverse();
				// 数字转换字符串并可在每个值后加上指定符号
				tempA = tempA.join('');
				if(tempA==getStrT){
					getStr[Count]=getStrT;
					Count++;
				}
			}
		}
	}
	var maxStr='';
	// 从结果中循环找出最大长度回文字符串
	for(var i=0;i<getStr.length;i++){
		if(getStr[i].length>maxStr.length){
			maxStr=getStr[i];
		}
	}
	console.dir(maxStr);
})