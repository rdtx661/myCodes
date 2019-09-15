var onkeyDownV='';
$(function(){
	$(".s_warp input").focus(function(){
		$(this).parents(".s_warp").children(".listWarp").css("display","block");
		$(this).parents(".s_warp").children(".listWarp").children("div").addClass("showDiv");
	});
	$(".s_warp input").keyDown(function(event){
		onkeyDownV=$(this).val();
	});
	$(".s_warp input").keyup(function(event){
		// 只能输入字母
		 var vals=$(this).val();
		 $(this).val(vals.replace(/[^a-zA-Z]/g,''));
		 ipSearch_configGet($(this),event);
	});
	$("body *").click(function(event){
		if($(".s_warp .listWarp").css("display")!="none"){
			if($(event.target).parents(".s_warp").length<=0&&!$(event.target).hasClass(".s_warp")){
				hdFuhao();
			}
		}
	});
	$(".s_warp .listWarp>.fuhaoStr").click(function(){
		var gettext=$(this).text();
		$(this).parents(".s_warp").children("input").val(gettext);
		hdFuhao();
	})
})
// 传入
// <div class="s_warp">
	// <input type="text" placeholder="请输入外币符号" value="">
	// <div class="listWarp">
		// <div class="strDiv"></div>
	// </div>
// </div>
// 格式中的 input和event 键盘松开时调用
// 判断按下的键盘的值
function ipSearch_configGet(dom,event){
	if($(dom).parents(".s_warp").children(".listWarp").css("display")!="inline-block"){
		$(dom).parents(".s_warp").children(".listWarp").css("display","inline-block");
	}
 	$(dom).parents(".s_warp").children(".listWarp").removeClass("notDate");
	 var getVal=$(dom).val();
	 // 获取并遍历listWarp中所有div的内容，找出匹配包含有内容的项获取下标
	 var getTempD=$(dom).parents(".s_warp").children(".listWarp");
	 // 获取当前值，搜索
	 var getC=$(getTempD).children("div").length;
	 var bool=false;
	 // 键盘按下前后值变化才执行
	 if(getVal!=''&&getVal!=onkeyDownV){
		 for(var i=0;i<getC;i++){
		 	var getTval=$(getTempD).children("div:eq("+i+")").text();
		 	getTval=getTval.toUpperCase();
		 	getVal=getVal.toUpperCase();
		 	if(getTval.indexOf(getVal)!=-1){
		 		$(getTempD).children("div:eq("+i+")").addClass("showDiv");
		 		if(bool==false){
				 	$(getTempD).children("div:eq("+i+")").addClass("hasChange");
		 			bool=true;
		 		}
		 	}else{
		 		$(getTempD).children("div:eq("+i+")").removeClass("showDiv");
		 	}
		 }
		 if(bool==false){
		 	$(getTempD).children("div").removeClass("showDiv");
	 		$(dom).parents(".s_warp").children(".listWarp").append('<div class="notDate showDiv" style="text-align:center;color:black;">没有匹配的数据</div>');
		 }
 		 $(dom).parents(".s_warp").children(".listWarp").scrollTop(0);
	 }else if(getVal==''&&getVal!=onkeyDownV){
 		$(getTempD).children("div").addClass("showDiv");
 		$(getTempD).children("div").removeClass("hasChange");
 		$(getTempD).children("div:eq(0)").addClass("hasChange");
	 }
	 // 38上 40下 选择 
	 var getCDiv=$(dom).parents(".s_warp").children(".listWarp").children(".showDiv").length;
  	 var dIndex=$(dom).parents(".s_warp").children(".listWarp").children(".hasChange").index(".showDiv");
	 if(event.keyCode==38){
	 	if(dIndex==0){
	 		// 选择最后一个  
	 		$(dom).parents(".s_warp").children(".listWarp").children("div").removeClass("hasChange");
	 		$(dom).parents(".s_warp").children(".listWarp").children(".showDiv:eq("+(getCDiv-1)+")").addClass("hasChange");
	 		//控制滚动条　35px／div 
	 		var height=getCDiv*35;
	 		$(dom).parents("div").children(".listWarp").scrollTop(height);
	 	}else{
	 		var getPid=parseInt(dIndex)-parseInt(1);
	 		$(dom).parents(".s_warp").children(".listWarp").children("div").removeClass("hasChange");
	 		$(dom).parents(".s_warp").children(".listWarp").children(".showDiv:eq("+getPid+")").addClass("hasChange");
	 		// 如果滚动条内容距离底部
	 		var getSc=$(dom).parents(".s_warp").children(".listWarp").scrollTop();
	 		if(getSc>=getPid*35){
	 			$(dom).parents(".s_warp").children(".listWarp").scrollTop(getPid*35);
	 		}
	 	}
	 	return false;
	 }else if(event.keyCode==40){
	 	if(dIndex==getCDiv-1){
	 		$(dom).parents(".s_warp").children(".listWarp").children("div").removeClass("hasChange");
	 		$(dom).parents(".s_warp").children(".listWarp").children(".showDiv:eq(0)").addClass("hasChange");
	 		$(dom).parents(".s_warp").children(".listWarp").scrollTop(0);
	 	}else{
	 		$(dom).parents(".s_warp").children(".listWarp").children("div").removeClass("hasChange");
	 		var getPid=parseInt(dIndex)+parseInt(1);
	 		$(dom).parents(".s_warp").children(".listWarp").children(".showDiv:eq("+getPid+")").addClass("hasChange");
	 		// 如果滚动条内容距离底部
	 		var getSc=$(dom).parents(".s_warp").children(".listWarp").scrollTop();
	 		if((parseInt(getSc)+parseInt(140))<=(parseInt(getPid)+parseInt(1))*35){
	 			$(dom).parents(".s_warp").children(".listWarp").scrollTop((parseInt(getPid)+parseInt(1))*35-140);
	 		}
	 	}
	 	return false;
	 }else if(event.keyCode==13){
	 	$(dom).parents(".s_warp").children(".listWarp").children(".hasChange").trigger("click");
	 	return false;
 	 }
}
function hdFuhao(){
	$(".s_warp .listWarp .showDiv").removeClass("hasChange");
	$(".s_warp .listWarp>.showDiv:eq(0)").addClass("hasChange");
	$(".s_warp .listWarp").css("display","none");
	$(".s_warp .listWarp").scrollTop(0);
	$(".s_warp .listWarp div").addClass("showDiv");
}