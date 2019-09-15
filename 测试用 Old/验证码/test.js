$(window).on("load",function(){

	    function randomNum(min, max) {
	        return Math.floor(Math.random() * (max - min) + min);
	    }
	    
	    function randomColor(min, max) {
	        var r = randomNum(min, max);
	        var g = randomNum(min, max);
	        var b= randomNum(min, max);
	        return "rgb(" + r + "," + g + "," + b + ")";
	    }
	    // drawPic 绘制， code 是绘制的字符,仅仅用来判断验证码输入
	    var code=drawPic();
	    document.getElementById("changeImg").onclick = function(e) {
	    	window.event.returnValue = false;
	        code=drawPic();
	    }
	    
	    $('button[type="button"]').click(function(event) {
	    	if ($('#captcha').val().toLowerCase() == code.toLowerCase()) {
	    		$('form').submit();
	    	}else{
	    		alert('验证码错误');
	    		code=drawPic();
	    	}
	    });
		    /**绘制验证码图片**/
		    function drawPic(){
		        var canvas = document.getElementById("canvas");
		        var width = canvas.width;
		        var height = canvas.height;
		        var ctx = canvas.getContext('2d'); 
		        ctx.textBaseline ='bottom';
		        ctx.fillStyle = randomColor(180,240);
		        ctx.fillRect(0,0,width,height);
		        /**绘制文字**/
				var str ='ABCEFGHJKLMNPQRSTWXY123456789';
				var code="";
		        for(var i=1;i<=4;i++) {
		            var txt = str[randomNum(0,str.length)];
		            code=code+txt;
		            ctx.fillStyle = randomColor(50,160);
		            ctx.font = randomNum(15,28) +'px SimHei';
		            var x =i *15;
		            var y = randomNum(27,32);
		            var deg = randomNum(-45,45);
		            ctx.translate(x, y); 
		            ctx.rotate(deg * Math.PI /180); 
		            ctx.fillText(txt,0,0);
		            ctx.rotate(-deg * Math.PI /180);
		            ctx.translate(-x, -y);
		        }
		        /**绘制干扰线**/
		        for(var i=0;i<3;i++) {
		            ctx.strokeStyle = randomColor(40, 180);
		            ctx.beginPath();
		            ctx.moveTo(randomNum(0,width/2), randomNum(0,height/2));
		            ctx.lineTo(randomNum(0,width/2), randomNum(0,height));
		            ctx.stroke();
		        }
		        /**绘制干扰点**/
		        for(var i=0;i <50;i++) {
		            ctx.fillStyle = randomColor(0,255);
		            ctx.beginPath();
		            ctx.arc(randomNum(0, width), randomNum(0, height),1,0,2* Math.PI);
		            ctx.fill();
		        }
		        return code;
		    }
});