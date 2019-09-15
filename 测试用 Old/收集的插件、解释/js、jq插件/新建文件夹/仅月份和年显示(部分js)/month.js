$(document).ready(function(){
	//全部时间
	if($(".date_MContainer").parents('.timewarp').length>0){
		$('.date_MContainer .date_Mshow span .yearstr').text('全部时间');
		$('.date_MContainer .date_Mhide').addClass('all_date_Mhide');
		$('.date_MContainer .date_Mhide .bottomdesc').css('display','block');
	}
	$('.date_Mhide .dm_head_year .dm_head_left').click(function(){
		var val=parseInt($(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text());
		var mydate=new Date();
		var y=mydate.getFullYear();
		if($(this).parents('.data_year2').length>0&&val<=y){
			//不能超过当前年
			$(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text(y);
		}else{
			$(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text(val-1);
		}
		var dom=$(this).parents('.date_MContainer').children('.date_Mhide');
		getmonth(dom);
	});
	$('.date_Mhide .dm_head_year .dm_head_right').click(function(){
		var val=parseInt($(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text());
		var mydate=new Date();
		var y=mydate.getFullYear();
		if($(this).parents('.data_year').length>0&&val>=y){
			//不能超过当前年
			$(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text(y);
		}else{
			$(this).parents('.date_MContainer').children('.date_Mhide').children('.dm_head_year').children('.yearnum').text(val+1);
		}
		var dom=$(this).parents('.date_MContainer').children('.date_Mhide');
		getmonth(dom);
	});
	$(".date_MContainer .date_Mshow").click(function(){
		if($(this).parents('.date_MContainer').children('.date_Mhide').css('display')=='none'){
			//打开
			$('.date_MContainer').children('.date_Mhide').css('display','none');
			$(this).parents('.date_MContainer').children('.date_Mhide').css('display','block');
			var dom=$(this).parents('.date_MContainer').children('.date_Mhide');
			getmonth(dom);
		}
	});
	$('body *').click(function(event){
		if($(event.target).parents('.date_MContainer').length<=0){
			$('.date_MContainer .date_Mhide').css('display','none');
		}
	});
});
function getmonth(dom){
	var lilen=$(dom).children('.dm_ctn_month').children('ul').children('li').length;
	var mydate=new Date();
	var y=mydate.getFullYear();
	var val=parseInt($(dom).children('.dm_head_year').children('.yearnum').text());
	var m=mydate.getMonth()+1;
		$(dom).children('.dm_ctn_month').children('ul').children('li').removeClass('nowli');
		$(dom).children('.dm_ctn_month').children('ul').children('li').removeClass('passli');
		for(var i=0;i<lilen;i++){
			var ival=parseInt($(dom).children('.dm_ctn_month').children('ul').children('li:eq('+i+')').text());
			if(val==y){
				if(ival<m){
					$(dom).children('.dm_ctn_month').children('ul').children('li:eq('+i+')').addClass('passli');
				}else if(m==ival){
					if($(dom).parents('.timewarp').length<=0){
						$(dom).children('.dm_ctn_month').children('ul').children('li:eq('+i+')').addClass('nowli');
					}else{
						$(dom).children('.dm_ctn_month').children('ul').children('li:eq('+i+')').addClass('passli');
					}
				}
			}
		}
}