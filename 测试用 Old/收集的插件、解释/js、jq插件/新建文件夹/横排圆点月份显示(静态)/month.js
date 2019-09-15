$(document).ready(function(){
/*	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();  */
		var mydate=new Date();
		var y=mydate.getFullYear();
		var m=mydate.getMonth()+1;
		// 一共显示12月
		// 当前月是X月 禁用月从x+1月开始
		var startnum=m+1;
		for(i=1;i<=12;i++){
			// 没有循环完禁用月,当前月及之前的九个月都可选
			if(i<=3){
				//过去年禁选月
				$(".view_month li:eq("+i+") .monthnum").text(startnum+'月');
				if($('.view_month').parents('.fapiaoview').length>=1){
					$('.view_month li:eq('+i+') .circle span').addClass('imgspan');	
				}
			}else{
				if(startnum>12){
					startnum=1;
				}
				//当前年可选月
				if(startnum==m){
					//当前年当前月
					$('.view_month li:eq('+i+') .circle span').addClass('nowimgspan');
					$('.view_month li:eq('+i+') .circle span').removeClass('imgspan');
					$(".view_month li:eq("+i+") .monthnum").text(startnum+'月');
				}else{
					//当前年非当前月
					if($('.view_month').parents('.fapiaoview').length>=1){
						$('.view_month li:eq('+i+') .circle span').addClass('imgspan');	
						$('.view_month li:eq('+i+') .circle span').removeClass('cs_imgspan');
					}else{
						$('.view_month li:eq('+i+') .circle span').addClass('cs_imgspan');	
						$('.view_month li:eq('+i+') .circle span').removeClass('imgspan');
					}
					$(".view_month li:eq("+i+") .monthnum").text(startnum+'月');
				}
			}
			// 一月
			if(startnum==1){
				$('.view_month li:eq('+i+')').addClass('nowyear');
				var addhtml='<span class="yearnum">'+y+'</span>';
				$('.view_month li:eq('+i+') .monthnum').prepend(addhtml);
			}
			startnum++;
		}
		$('.view_month li .circle span').click(function(){
			if($(this).hasClass('cs_imgspan')){
				$(this).removeClass('imgspan');
				$('.view_month li .circle span').removeClass('nowimgspan');
				$(this).addClass('nowimgspan');
			}
		});
});