$(function(){
	// 求一个(100-999)三位数，该三位数等于其每位数字的阶乘之和。

	jieC(100,999);

	function jieC(minNum,maxNum){
		for(var i=minNum;i<=maxNum;i++){ 
			// 阶乘和
			var sumGet=0;
			var nowGet=1;
			// 拆分 阶乘 相加
			var n1=i.toString().substring(0,1);
			var n2=i.toString().substring(1,2);
			var n3=i.toString().substring(2,3);
			for(var b=1;b<=n1;b++){
				nowGet=nowGet*b;
				sumGet=nowGet+sumGet;
			}
			sumGet+=nowGet;
			nowGet=1;
			for(var b=1;b<=n2;b++){
				nowGet=nowGet*b;
			}
			sumGet+=nowGet;
			nowGet=1;
			for(var b=1;b<=n3;b++){
				nowGet=nowGet*b;
			}
			sumGet+=nowGet;
			if(sumGet==i){
				console.info(i);
			}
		}
	}
})