$(function(){
	function numRandomGet(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	}
	function randomColor(min,max){
		var r=numRandomGet(min,max);
		var g=numRandomGet(min,max);
		var b=numRandomGet(min,max);
		return "rgba("+r+","+g+","+b+")";
	}
	function setEwm(){
		var canvas = document.getElementById("canvas");
		var dBoard=canvas.getContext('2d');
		var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456";
		var numSet=4;
		var code='';
		dBoard.fillStyle=randomColor(150,255);
		dBoard.fillRect(0,0,80,35);
		dBoard.strokeStyle=randomColor(80,150);
		for(var i=0;i<numSet;i++){
			// 获取四个字母
			var codePart=str[numRandomGet(0,str.length)];
			var fontSize=numRandomGet(15,25);
			dBoard.font=fontSize+"px 微软雅黑";
			dBoard.lineWidth=1.5;
			code+=codePart;
			var rotate=numRandomGet(-5,5)*Math.PI/180;
			dBoard.rotate(rotate);
			var left=numRandomGet(18*i,18*i+5);
			var top=numRandomGet(20,23);
			dBoard.translate(left,top);
			dBoard.strokeText(codePart,0,0); 
			dBoard.translate(-left,-top);
			dBoard.rotate(-rotate);
		}
		// 绘制杂线
		var MiscellaneousLine_C=3;
		var canvasH=canvas.height;
		var canvasW=canvas.width;
		dBoard.strokeStyle=randomColor(40,180);
		dBoard.lineWidth=1;
		for(var i=0;i<MiscellaneousLine_C;i++){
            dBoard.beginPath();
            var lineW=numRandomGet(0,canvasW/4);
            var lineH=numRandomGet(0,canvasH);
			dBoard.moveTo(lineW,lineH);
			dBoard.lineTo(lineW+numRandomGet(2*canvasW/4,3*canvasW/4),numRandomGet(0,canvasH));
			dBoard.stroke();
		}
		// 绘制杂点
		var pointCount=30;
		for(var i=0;i<pointCount;i++){
			dBoard.fillStyle=randomColor(80,150);
			dBoard.beginPath();
			dBoard.arc(numRandomGet(0,canvasW),numRandomGet(0,canvasH),i%2==0?1:1.5,0,2*Math.PI);
			dBoard.fill();
		}

		return code;
	}
	document.getElementById("canvas").onclick=function(){
		console.info(setEwm());
	};
	console.info(setEwm());
})