$(function(){
	$(window).scrollTop(1);
	$(window).scrollTop(0);
	$(window).scroll(function(){
		$("body img").each(function(event){						                                      
			// 分上下滚动
			if($("body img").eq(event).attr("data-src")&&$("body img").eq(event).offset().top>(parseInt($(window).scrollTop())-parseInt($(window).height()))
				&&$("body img").eq(event).offset().top<(parseInt($(window).scrollTop())+parseInt($(window).height()*2))){
				var getSrc=$("body img").eq(event).attr("data-src");
				$("body img").eq(event).attr('src',getSrc);
				$("body img").eq(event).removeAttr('data-src');
			}
		});
	});
})