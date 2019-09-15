$(document).ready(function(){
	var mydate=new Date();
	var y=mydate.getFullYear();
	//默认当前年后一年 一共显示十年 
	var start=0;
	for(var i=y-8;i<=y+1;i++){
		$('.year_Container ul li:eq('+start+') .datawarp .year_num').text(i);
		if(i==y){
			$('.year_Container ul li:eq('+start+') .datawarp').addClass('nowyear');
		}
		start++;
	}
	$('.year_Container .year_prev').click(function(){
		//全部减一
		var mydate=new Date();
		var y=mydate.getFullYear();
		var lilen=$('.year_Container ul li').length;
		$('.year_Container ul li .datawarp').removeClass('nowyear');
		for(var i=0;i<lilen;i++){
			var lival=parseInt($('.year_Container ul li:eq('+i+') .datawarp .year_num').text());
			if(lival-1==y){
				$('.year_Container ul li:eq('+i+') .datawarp').addClass('nowyear');
			}
			$('.year_Container ul li:eq('+i+') .datawarp  .year_num').text(lival-1);
		}
	});
	$('.year_Container .year_next').click(function(){
		//全部加一
		var mydate=new Date();
		var y=mydate.getFullYear();
		var lilen=$('.year_Container ul li').length;
		$('.year_Container ul li .datawarp').removeClass('nowyear');
		for(var i=0;i<lilen;i++){
			var lival=parseInt($('.year_Container ul li:eq('+i+') .datawarp .year_num').text());
			if(lival+1==y){
				$('.year_Container ul li:eq('+i+') .datawarp').addClass('nowyear');
			}
			$('.year_Container ul li:eq('+i+') .datawarp  .year_num').text(lival+1);
		}
		
	});
});