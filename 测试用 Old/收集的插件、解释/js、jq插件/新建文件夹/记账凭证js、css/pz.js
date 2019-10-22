			var str='';
			var str2='';
			var st01;
			var isshow=false;
			//初始位置
			var htop=0;	
			//最上方的位置
			var maxtop=0;
			//最下方的位置
			var minbottom=0;
			//判断滚动条滚动方向(上、下)
			var tempnum=0;
$(document).ready(function(){
				/*$(".vcright .btn_more").click(function(){
					window.location.href="/admin/saas/accounting/account_helper/pingzheng/look";
					// replace无法使用回退 覆盖url
					// window.location.replace("/admin/saas/accounting/account_helper/pingzheng/look");
					// history.go(-1) 回退按钮
				});*/
				//'.edit-btn' 触发显示凭证的类 
				$('.edit-btn').click(function(){
				var geth=$(window).height();
				var getw=$(window).width();
				var edith=parseInt($('.editcontainer').css('height').replace('px',''));
				var editw=parseInt($('.editcontainer').css('width').replace('px',''));
				var sch=$(window).scrollTop();
				var sdh=(geth-edith)/2;
				var sdw=(getw-editw)/2;
				$('.editcontainer').css('top',parseFloat(sdh)+parseFloat(sch)+'px');
				$('.editcontainer').css('left',sdw+'px');
				var dcmh=$(document).height();
				if($(".showblackbg").length>=1){
					$(".showblackbg").remove();
				}
				$('body').append('<div class="showblackbg" style="position:absolute;z-index:998;left:0px;top:0px;width:100%;height:'+dcmh+'px;background-color:rgba(0,0,0,0.3);"></div>');
				// 显示新增科目
				$('.editcontainer').css('opacity',1);
				$('.editcontainer').css('display','block');
			});
			$(".editcontainer .tuichu").click(function(){
				var opc=0;
				var opcgo=1;
				var opcstep=0.05;
				var dom=$(this);
				var fdost=setInterval(function(){
					opcgo=opcgo-opcstep;
					$(dom).parents('.editcontainer').css('opacity',opcgo);
					if(opcgo<=0){
						$(dom).parents('.editcontainer').css('display','none');
						$(".showblackbg").remove();
						clearInterval(fdost);
						return;
					}
				},1);
			});
			$(".editcontainer .btncontainer div .quxiao").click(function(){	
				var opc=0;
				var opcgo=1;
				var opcstep=0.05;
				var dom=$(this);
				var fdost=setInterval(function(){
					opcgo=opcgo-opcstep;
					$(dom).parents('.editcontainer').css('opacity',opcgo);
					if(opcgo<=0){
						$(dom).parents('.editcontainer').css('display','none');
						$(".showblackbg").remove();
						clearInterval(fdost);
						return;
					}
				},1);
			});		
			$(".vch_01 .vch_01_show input").val('002');
			$(".vch_01 .vch_01_show input").focus(function(){
					var getv=$(this).val();
					if(str!=''&&str!=null&&str!=undefined){
						$(this).val(parseInt(getv));
					}
					if(isNaN(getv)&&isshow==false){
						hdshow();
						isshow=true;
					}else{
						$(".vch_01 .vch_01_show .vch_01_hd").css("opactiy",0);
						$(".vch_01 .vch_01_show .vch_01_hd").css("display","none");
						isshow=false;
					}
				}).blur(function(event){
						str=$(this).val();
						str=str.trim();
						if(str!=''&&str!=null&&str!=undefined&&!isNaN($(this).val())&&$(this).val().length<3){
							var tempcount=3-$(this).val().length;
							var tempstr='';
							for(var i=0;i<tempcount;i++){
								tempstr=tempstr+'0';
							}
							tempstr=tempstr+''+$(this).val();
							$(this).val(tempstr);
						}
				});
			$(".vch_01 .vch_01_show input").keydown(function(event) {
				str2=$(this).val();
				var ieKey=event.keyCode;//获得键值，数字形式的
				var realkey=String.fromCharCode(ieKey);
				if(!parseInt(realkey)&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=38&&event.keyCode!=39&&event.keyCode!=40){
					return false;
				}
			});
			$(".vcmainhead .vch_03 input").keydown(function(event){
				str2=$(this).val();
				var str=$(this).val();
				var ieKey=event.keyCode;//获得键值，数字形式的
				var realkey=String.fromCharCode(ieKey);
				if(!parseInt(realkey)&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=38&&event.keyCode!=39&&event.keyCode!=40){
					return false;
				}
			});
			$(".vch_01 .vch_01_show input").keyup(function(event){
				var tsval=$(this).val();
				if(parseFloat(tsval)!=tsval&&tsval!=null&&$.trim(tsval)!=''){
					$(this).val(str2);
					hdshow($(this));
				}else{
					$(this).parents('.hashdshow').children('.vch_msg_hd').css("opactiy",0);
					$(this).parents('.hashdshow').children('.vch_msg_hd').css("display","none");
				}
			});
			$(".vcmainhead .vch_03 input").keyup(function(event){
				var tsval=$(this).val();
				if(parseFloat(tsval)!=tsval&&tsval!=null&&$.trim(tsval)!=''){
					$(this).val(str2);
					hdshow($(this));
				}else{
					$(this).parents('.hashdshow').children('.vch_msg_hd').css("opactiy",0);
					$(this).parents('.hashdshow').children('.vch_msg_hd').css("display","none");
				}
			})
			$(".vch_02_imgwarp").click(function(){
				$(".vch_02 .datawarp").css("display","block");
			});
			$(".vcmoney").on('click',function() {
				$(this).children(".getmoney").children("input").css("opacity","1");
			});
			// 添加方法 一开始让系统生成方法 方法就只写一遍
			$(".vcmoney .getmoney .sgm").focus(function(event) {
				$(this).parents('.getmoney').parents('.vcmoney').parents('.cl_divs_ul').addClass('cl_divs_ul_hv');
				var tval=$(this).val();
				if($.trim(tval)!=''&&tval!=null){
					var tvals=tval.split('.');
					if(tvals.length==1){
						$(this).val(tval+'.00');
					}else if(tvals.length==2){
						if(tvals[1].length==1){
							$(this).val(tval+'0');
						}
						//有小数点没有数字
						if(tvals[1].length<1){
							$(this).val(tval+'00');
						}
					}
				}
			});
			$(".vcmoney .getmoney .sgm").blur(function() {
				sgmblur($(this));
			});
			//阻止输入位数超过9位
				$(".vcmoney .getmoney input").keydown(function(event){
					var dom=$(this);
					var getnum=$(dom).val();
					var len=getnum.length;
					var ishas=getnum.indexOf(".");
					//有小数点
					//负数多一个
					if((len-(ishas+1))>2&&ishas!=-1&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=39){
						if(parseFloat(getnum)>0&&len>=9){
							return false;
						}else if(parseFloat(getnum)<0&&len>=10){
							return false;
						}
					}
					//负数多一个
					//没有小数点
					if(ishas==-1&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=39&&event.keyCode!=190&&event.keyCode!=110){
						if(parseFloat(getnum)>0&&len>=9){
							return false;
						}else if(parseFloat(getnum)<0&&len>=10){
							return false;
						}
					}
					if($(this).val()=='-'){
						if(event.keyCode==189||event.keyCode==109){
							$(this).val('');
							str='';
							return false;
						}
					}
					inputkeydown(dom,event);
				});
			//阻挡输入的非数字或字符
				$(".vcmoney .getmoney input").keyup(function(event){
					if($(this).val()!=null&&$.trim($(this).val())!=''){
						inputkeyup($(this),event);
					}
				});
			vcsliclick($('.maincl_warp .cl_divs:eq(0) .cl_divs_ul .vcsummary .lioverdef'));
			$(".cl_divs .cl_divs_ul .vcsummary .lioverdef").on('click',function(){
				vcsliclick($(this));
			})
			$(".cl_divs .cl_divs_ul .vcstemp .textmore").on('blur',function(){
				vcstextblur($(this));
			})
			$(".cl_divs .cl_divs_ul .nvproj .lioverdef").on('click',function(){
				fc_onclick($(this),'true');
			})
			$(".cl_divs .cl_divs_ul .nvproj .defwarp").on('click',function(){
				fc_onclick($(this),'true');
			})
			$(".cl_divs .cl_divs_ul li .inputarea").keydown(function(event) {
				var dom=$(this);
				if(event.keyCode==9||event.keyCode==32){
					if($(dom).parents('.cl_divs').hasClass('cl_last')&&$(dom).parents('li').hasClass('vcm_last')){
						if(event.keyCode==32){
							inputkeydown01(dom,event);
						}else{
							return false;
						}
					}else{
						inputkeydown01(dom,event);
					}
				}
			})
			$(".cl_divs .cl_divs_ul .nvproj .liover .textmore").keyup(function(event) {
				inputkeyup01($(this),event);
			});
			$(".projselect .selects>div").click(function(event) {
					$('.templi').find('.textmore').val($(this).text());
					fc_change();
			})
			$(".maincl_warp .cl_divs .addulicon").click(function(){
					adddiv($(this));
			});
			$(".maincl_warp").scroll(function(){
				if($('.projselect').css("display")=='block'){		
					msrcoll();
				}
			});
			//====================================================================
			$("body *").mousedown(function(event){
				if($(event.target).parents('.templi').length<=0&&$('.templi').length>0&&$(event.target).parents('.projselect').length<=0){
					cleartempli();
				}
				if($('.vcstemp').length>0){
					if(!$(event.target).parents('li').hasClass('vcstemp')){
						clearvcstemp();
					}
				}
			});
			$(".cl_footdiv .customer .editname .inputname input").focus(function(){
				$(this).parents('.inputname').addClass('inputfocus');
			}).blur(function(){
				$(this).parents('.inputname').removeClass('inputfocus');
			});
			$(".cl_footdiv .customer .md_name").click(function(){
				$('.cl_footdiv .customer .editname').css("display","block");
				$('.cl_footdiv .customer .md_name .editicon').addClass('focusicon');
				//获取用户名
				var footval=$(".cl_footdiv .customer .md_name>span").text();
				$('.cl_footdiv .customer .editname .inputname input').val(footval);
			});
			$(".cl_footdiv .customer .editname .editdesc .delicon").click(function(){
				$('.cl_footdiv .customer .editname').css("display","none");
				$('.cl_footdiv .customer .md_name .editicon').removeClass('focusicon');
			});
});			
			function msrcoll(){
						// var temph=$('.projselect').css('top');
						// tempnum初始默认0
						if($('.maincl_warp').scrollTop()>tempnum){
							//往下
							// $('.projselect').css('top',parseInt(htop)+parseInt($('.maincl_warp').scrollTop()));
							// 当前高度减去当前往下移动的高度
							var prjh=$('.projselect').css('top');
							// 当前下移距离 projselect往上移
							var goh=parseInt($('.maincl_warp').scrollTop()-tempnum);
							if((parseInt(prjh)-goh)>=(parseInt(maxtop)+parseInt(60))){
								$('.projselect').css('top',parseInt(prjh)-goh);
							}else{
								$('.projselect').css('display','none');
								cleartempli();
							}
						}else{
							var goh=parseInt(tempnum-$('.maincl_warp').scrollTop());
							if((parseInt(prjh)+goh)<=minbottom){
								//往上 
								var prjh=$('.projselect').css('top');
								//当前上移距离
								$('.projselect').css('top',parseInt(prjh)+goh);
							}else{
								$('.projselect').css('display','none');
								cleartempli();
							}
						}
							tempnum=$('.maincl_warp').scrollTop();
			}
			function cleartempli(){
						//关闭赋值 
						$('.projselect').css('display','none');
						$('.templi').find('.liover').css("display","none");
						var val=$('.templi .liover .textmore').val();
						$('.templi').find('.defwarp').css("display","block");
						var len=$('.projselect').find('.selects').children('div').length;
						var hasit=false;
						for(var i=0;i<len;i++){
							if($('.projselect').find('.selects').children('div:eq('+i+')').text()==$.trim(val)){
								hasit=true;
							}
						}
						if(hasit){
							$('.templi').find('.typename').text($.trim(val));
							$('.templi').val($.trim(val));
							$('.templi').find('.defwarp').css('display','block');
						}else{
							$('.templi').find('.typename').text('');
							$('.templi').find('.textmore').val('');
							$('.templi').find('.defwarp').css('display','none');
						}
						$('.templi').removeClass('templi');
			}
			function clearvcstemp(){
				$('.vcstemp').find('.liover').css('display','none');
				var val=$('.vcstemp .textmore').val();
				$('.vcstemp').find('.lioverdef').text(val);
				$('.vcstemp').removeClass('vcstemp');
				isblur();
			}
			// 调用生成四次
			function adddiv(dom){
						var cname='cl_divs';
						var len=$(".maincl_warp .cl_divs").length;
						var idx=$(dom).parents('.cl_divs').index();
						if ((len-1)==idx) {
							cname+=" cl_last";
							$(".maincl_warp").find('.cl_last').removeClass('cl_last');
						}
						var str='<div class="';
						str+=cname;
						str+='">';
						str+='<div class="addulicon ulovericon" onclick=adddiv(this)><span></span></div>';
						str+='<ul class="cl_divs_ul">';
						str+='<li class="vcsummary">';
						str+='<div class="lioverdef"></div>';
						str+='<div class="summary_warp liover">';
						str+='<textarea class="inputarea textmore"></textarea>';
						str+='</div>';
						str+='</li>';
						str+='<li class="nvproj">';
						str+='<div class="lioverdef"></div>';
						str+='<div class="defwarp">';
						str+='<div class="typename"></div>';
						str+='<div class="moneynum">';
						str+='余额：<span class="num"></span>';
						str+='</div>';
						str+='</div>';
						str+='<div class="projselect_warp liover">';
						str+='<textarea class="inputarea textmore"></textarea>';
						str+='<div class="moneynum">';
						str+='余额：<span class="num"></span>';
						str+='</div>';
						str+='</div>';
						str+='</li>';
						str+='<li class="vcmoney jie">';
						str+='<div class="getmoney"><input class="inputarea sgm jiefang" type="text" value=""></div>';
						str+='<ul>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="lineblue"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="lineblue"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="linered"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='</ul>';
						str+='</li>';
						str+='<li class="vcmoney vcm_last dai">';
						str+='<div class="getmoney"><input class="inputarea sgm daifang" type="text" value=""></div>';
						str+='<ul>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="lineblue"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="lineblue"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='<li class="linered"></li>';
						str+='<li></li>';
						str+='<li></li>';
						str+='</ul>';
						str+='</li>';
						str+='</ul>';
						str+='<div style="clear:both;"></div>';
						str+='<div class="delulicon ulovericon" onclick="altsmt(this)"><span></span></div>';
						str+='</div>';
						$(dom).parents('.cl_divs').after(str);
						
						$(".vcmoney").on('click',function(){
							$(this).children(".getmoney").children("input").css("opacity","1");
						});
						$(".vcmoney .getmoney .sgm").focus(function(event){
							$(this).parents('.getmoney').parents('.vcmoney').parents('.cl_divs_ul').addClass('cl_divs_ul_hv');
						});
						$(".vcmoney .getmoney .sgm").blur(function(){
							sgmblur($(this));
						});
						//阻止输入位数超过9位
							$(".vcmoney .getmoney input").keydown(function(event){
								var getnum=$(this).val();
								var ishas=getnum.indexOf(".");
								var len=getnum.length;
								//有小数点
								if(ishas!=-1&&ishas>=9&&(len-(ishas+1))>2&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=39){
									return false;
								}
								//没有小数点
								if(ishas==-1&&len>=9&&event.keyCode!=46&&event.keyCode!=8&&event.keyCode!=37&&event.keyCode!=39&&event.keyCode!=190&&event.keyCode!=110){
									return false;
								}
								inputkeydown($(this),event);
							});
						//阻挡输入的非数字或字符
						$(".vcmoney .getmoney input").keyup(function(event){
							if($(this).val()!=null&&$.trim($(this).val())!=''){
								inputkeyup($(this),event);
							}
						});
						$(".cl_divs .cl_divs_ul .vcsummary .lioverdef").on('click',function(){
							vcsliclick($(this));
						})
						$(".cl_divs .cl_divs_ul .vcstemp .textmore").on('blur',function(){
							vcstextblur($(this));
						})
						$(".cl_divs .cl_divs_ul .nvproj .lioverdef").on('click',function(){
							fc_onclick($(this),'true');
						})
						$(".cl_divs .cl_divs_ul .nvproj .defwarp").on('click',function(){
							fc_onclick($(this),'true');
						})
						$(".cl_divs .cl_divs_ul li .inputarea").keydown(function(event) {
							var dom=$(this);
							if(event.keyCode==9||event.keyCode==32){
								if($(dom).parents('.cl_divs').hasClass('cl_last')&&$(dom).parents('li').hasClass('vcm_last')){
									if(event.keyCode==32){
										inputkeydown01(dom,event);
									}else{
										return false;
									}
								}else{
									inputkeydown01(dom,event);
								}
							}
						})
						$(".cl_divs .cl_divs_ul .nvproj .liover .textmore").keyup(function(event) {
							inputkeyup01($(this),event);
						});
						$(".projselect .selects>div").click(function(event) {
								$('.templi').find('.textmore').val($(this).text());
								fc_change();
						})
						$(".maincl_warp").scroll(function(){
							if($('.projselect').css("display")=='block'){		
								msrcoll();
							}
						});
			}
			function altsmt(dom){
					$(dom).parents('.cl_divs').children('li').text('');
					$(dom).parents('.cl_divs').find('.vcmoney').find('li').text('');
					$(dom).parents('.cl_divs').find('.inputarea').val('');
					$(dom).parents('.cl_divs').find('.defwarp').css("display","none");
					$(dom).parents('.cl_divs').find('.defwarp').children('.typename').text('');
					$(dom).parents('.cl_divs').find('.defwarp').find('.num').text('');
					$(dom).parents('.cl_divs').find('.lioverdef').text('');
					var idx=$(dom).parents('.maincl_warp').children('.cl_divs').length;
					if(idx>4){
						$(dom).parents('.cl_divs').remove();
					}
					isblur();
			}
			function fc_change(){
						//点击div关闭
						$('.templi').find('.liover').css("display","none");
						$('.projselect').css("display","none");
						var val=$('.templi').find('.textmore').val();
						var len=$('.projselect').find('.selects').children('div').length;
						var hasit=false;
						for(var i=0;i<len;i++){
							if($('.projselect').find('.selects').children('div:eq('+i+')').text()==$.trim(val)){
								hasit=true;
							}
						}
						if(hasit){
							$('.templi').find('.defwarp').css("display","block");
						}else{
							$('.templi').find('.defwarp').css("display","none");
						}
						// 给选项初始金额赋值
						$('.templi').find('.typename').text($.trim(val));
						$('.templi').find('.moneynum').children('.num').text('1000.00');
						//聚焦下一个框
						//getmoney中是点击了透明的input聚焦点击li显示input
						$('.templi').next().click();
						$('.templi').next().find('.getmoney').children('.sgm').focus();
						$('.templi').removeClass('templi');
			}
			function fc_onclick(temp,str){
				$(temp).parents('.nvproj').children('.liover').css("display","block");
				if(!$(temp).parents('.nvproj').hasClass('templi')){
					$(temp).parents('.nvproj').addClass('templi');
				}
				var val=$(temp).parents('.nvproj').find('.typename').text();
				var len=$('.projselect').find('.selects').children('div').length;
				var hasit=false;
				for(var i=0;i<len;i++){
					if($('.projselect').find('.selects').children('div:eq('+i+')').text()==$.trim(val)){
						hasit=true;
					}
				}
					$('.projselect').find('.selects').find('div').css("display","block");
					$('.projselect').css("display","block");
					var top=$(temp).parents('li').offset().top;
					htop=$('.projselect').offset().top;
					var left=$(temp).parents('li').offset().left;
					maxtop=$('.cl_headdiv').offset().top;
					minbottom=$('.cl_divs_sum').offset().top;
					$('.projselect').css({'top':parseInt(top)+parseInt(60),'left':left-1});
				if(!hasit){
					$(temp).parents('.nvproj').children('.liover').find('.moneynum').css("display","none");
					$('.projselect').removeClass('errorproj');
					$('.projselect').addClass('normalproj');
				}else{
					$(temp).parents('.nvproj').children('.liover').find('.moneynum').css("display","block");
					$(temp).parents('.nvproj').children('.liover').find('.textmore').val(val);
				}
				if(str=='true'){
					$(temp).parents('.nvproj').find('.textmore').focus();
				}
				$(temp).parents('.nvproj').children('.defwarp').css("display","none");
			}
			function hdshow(dom){
					$(dom).parents('.hashdshow').children('.vch_msg_hd').css("opactiy",0);
					$(dom).parents('.hashdshow').children('.vch_msg_hd').css("display","block");
					var golen=0;
					clearInterval(st01);
					st01=setInterval(function(){
						golen=golen+0.02;
						$(dom).parents('.hashdshow').children('.vch_msg_hd').css("opacity",golen);
						if(golen>=1){
							clearInterval(st01);
							return;
						}
					},2);
				}
			function sgmblur(dom){
					$(dom).parents('div').parents('ul').removeClass('cl_divs_ul_hv');
					$(dom).css("opacity","0");	
					//最后一个对最后一个
					var lic=$(dom).parents(".getmoney").parents(".vcmoney").find('li').length;
					var getnum=$(dom).val();
					$(dom).val(parseFloat(getnum));
					getnum=$.trim(getnum);
					var isfushu=false;
					if(getnum<0){
						isfushu=true;
						getnum=parseFloat(getnum)*-1+'';
						$(dom).parents('li').children('ul').addClass('fuzhi');
					}else{
						$(dom).parents('li').children('ul').removeClass('fuzhi');
					}
					var ishas=getnum.indexOf(".");
					//重置为空
					$(dom).parents(".getmoney").parents(".vcmoney").find('li').text('');
					// parseInt(getnum)排除'-'单独出现 getnum排除0
					if(parseInt(getnum)&&getnum!=0){
						$('.cl_btns').addClass('defbtn');
						if(ishas==-1){
							//无小数点
							$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+10+')').text(0);
							$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+9+')').text(0);
							var b=8;
							for(var i=(getnum.length-1);i>=0;i--){
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+b+')').text(getnum[i]);
								b--;
							}
						}else{
							//有小数点 小数点后有几位
							var len=getnum.length;
							var ac=len-(parseInt(ishas)+parseInt(1));
							var getnum=getnum.replace(".","");
							var len=getnum.length;
							var temp=0;
							if(ac==0){
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+10+')').text(0);
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+9+')').text(0);
							}else if(ac==1){
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+10+')').text(0);
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+9+')').text(getnum[len-1]);
								temp=1;
							}else if(ac==2){
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+10+')').text(getnum[len-1]);
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+9+')').text(getnum[len-2]);
								temp=2;
							}
							temp=parseInt(temp)+parseInt(1);
							var b=8;
							for(var i=(len-temp);i>=0;i--){
								$(dom).parents(".getmoney").parents(".vcmoney").children("ul").children('li:eq('+b+')').text(getnum[i]);
								b--;
							}
						}
					}else{
						isblur();
						$(dom).val('');
					}
				}
				function isblur(){
						var tempjdlen=$('.maincl_warp .cl_divs').length;
						var nulljie=true;
						var nulldai=true;
						for(var i=0;i<tempjdlen;i++){
							var tempjie=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul>.jie .getmoney .sgm').val();
							var tempdai=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul>.dai .getmoney .sgm').val();
							if($.trim(tempjie)!=null&&$.trim(tempjie)!=''){
								nulljie=false;
							}
							if($.trim(tempdai)!=null&&$.trim(tempdai)!=''){
								nulldai=false;
							}
						}
						if(nulljie||nulldai){
							$(".cl_divs_sum .cl_divs_ul .vcsummary .vcsummary_heji span").text('');
							if(nulldai){
								$(".cl_divs_sum .cl_divs_ul .dai ul li").text('');
							}
							if(nulljie){
								$(".cl_divs_sum .cl_divs_ul .jie ul li").text('');
							}
							//如果所有借贷都为空则取消掉类defbtn
							if(nulljie&&nulldai){
								$('.cl_btns').removeClass('defbtn');
								$(".cl_divs_sum .cl_divs_ul .vcsummary .vcsummary_heji span").text('零元整');
							}
						}
				}
				function inputkeydown(dom,event){
						// 189 109
						//同级的vcmoney 重置为空
						var dompidx=$(dom).parents('li').index();
						var dompidxs=$(dom).parents('ul').children('li').length;
						for(var i=0;i<dompidxs;i++){
							if($(dom).parents('ul').children('li:eq('+i+')').hasClass('vcmoney')){
								var tempidx=$(dom).parents('ul').children('li:eq('+i+')').index();
									//清空
								if(tempidx!=dompidx){
									$(dom).parents('ul').children('li:eq('+i+')').find('li').text('');
									$(dom).parents('ul').children('li:eq('+i+')').find('.sgm').val('');
								}
							}
						}
						// 如果没有小数点超过九位时 按下除小数点和删除之外的任何代码无效
						// 有小数点超过12位时 按下除删除之外的任何代码无效
						// 位数不包括负号
						str=$(dom).val();
				}
				function inputkeyup(dom,event){
						if($(dom).val()!='-'&&$(dom).val()){
							var getnum=$(dom).val();
							// '-'首个单独出现或不在字符开头被认为是字符
							// 拆分字符串 把所有除'-'和'.'的非数字置空
							var numarr=getnum.split('');
							var tempval='';
							for(var i=0;i<numarr.length;i++){
								// 无法转化为数字的字符
								if(!parseInt(numarr[i])&&numarr[i]!=0){
									//只有一个非数字，但不是'-'或'.'
									if(numarr[i]=='-'||numarr[i]=='.'){
										tempval+=numarr[i];
									}
									if(getnum.length==1&&getnum!='-'&&getnum!='.'){
										tempval='';
									}
								}else{
									tempval+=numarr[i];
								}
							}
							//整理'-'
							// 整理'.'
							var ishas=tempval.split('.');
							var tempval2='';
							//'-'num ||num
							//  有小数点位数
							if(ishas.length>1){
										//且 
										//出现两个及以上的小数点只获取第一个点左右的内容，截断第二个点
										if(ishas.length>2){
											var tempval=tempval.split('.');
											var setpoint=false;
											tempval2=tempval[0]+'.'+tempval[1];
										//否则只出现一次
										}else{
											tempval2=tempval;
										}
										// 获取小数点后的数字
										var tempval=tempval2.split('.');
										var tempfirst=tempval[0].split('');
										var templast=tempval[1].split('');
										// 111111111
										// '-'num.num||num.num
										// tempfirst能转换数字的不超过9位
										// templast能转换数字的不超过2位
										tempval2='';
										var breaknum=0;
										for(var i=0;i<tempfirst.length;i++){
												if(breaknum<=8){
													if(parseInt(tempfirst[i])||tempfirst[i]==0){
														tempval2+=tempfirst[i];
														breaknum++;
													}
												}
												if(tempfirst[i]=='-'){
													tempval2+=tempfirst[i];
												}
										}
										tempval2+='.';
										breaknum=0;
										for(var i=0;i<templast.length;i++){
												if(breaknum<2){
													if(parseInt(templast[i])||templast[i]==0){
														tempval2+=templast[i];
														breaknum++;
													}
												}
												if(templast[i]=='-'){
													tempval2+=templast[i];
												}
										}
										var tempval3=clearnum(str,tempval2);
										$(dom).val(tempval3);
							}else{
								// 失焦转换成浮点保留两位
									var tempval2=clearnum(str,tempval);
									if(tempval2.length>9){
										$(dom).val(str);
									}else{
										$(dom).val(tempval2);
									}
							}

						}
					sumfinal();
				}
				function vcsliclick(dom){
					$(dom).parents('li').find('.liover').css("display","block");
					$(dom).parents('li').addClass('vcstemp');
					var gdom=$(dom);
					var st=setTimeout(function(){
						gdom.parents('li').find('.textmore').focus();
					},50);
				}
				function vcstextblur(dom){
					$(dom).parents('.liover').css('display','none');
					var val=$(dom).val();
					$(dom).parents('.liover').find('.lioverdef').text(val);
				}
				function inputkeydown01(dom,event){
					// 回车和 alt 和 window 和 f1....f12
							if(!$(dom).parents('li').hasClass('vcm_last')){
								//关闭当前
								if($(dom).parents('li').hasClass('nvproj')){
									cleartempli();
								}
								if($(dom).parents('li').next().hasClass('nvproj')){
									$(dom).parents('li').next().addClass('templi');
									var temp=$(dom).parents('li').next().find('.lioverdef');
									fc_onclick(temp,'false');
								}
								//如果li是第一个
								if($(dom).parents('li').hasClass('vcstemp')){
									clearvcstemp();
								}
								//如果当前是sgm
								if($(dom).hasClass('sgm')){
									$(dom).blur();
								}
								//=========================开启下一个======================
								if(event.keyCode==9){
									if($(dom).parents('li').next().find('.inputarea').hasClass('sgm')){
										$(dom).parents('li').next().click();
									}
								}else if(event.keyCode==32){
									if($(dom).parents('li').next().find('.inputarea').hasClass('sgm')){
										$(dom).parents('li').next().click();
										$(dom).parents('li').next().children(".getmoney").children("input").focus();
									}
								}
							}else{
								if(event.keyCode==32){
									if($(dom).parents('li').hasClass('vcm_last')){
										$(dom).parents('li').prev().click();
										$(dom).parents('li').prev().children(".getmoney").children("input").focus();
									}
								}else{
									$(dom).parents('.cl_divs').next().find('.vcsummary').find('.lioverdef').click();
								}
							}
				}
				function inputkeyup01(dom,event){
						var gtv=$(dom).val();
						var gtvlen=gtv.length;
						var len=$('.projselect').find('.selects').children('div').length;
						var hasit=false;
						if(gtvlen==0){
							$('.projselect').find('.selects').children('div').css("display","block");
						}else{
							if($.trim(gtv).length!=0){
								$('.projselect').find('.selects').children('div').css("display","none");
								for(var i=0;i<len;i++){
									var tempstr=$('.projselect').find('.selects').children('div:eq('+i+')').text()
									if(tempstr.indexOf(gtv)!=-1){
										hasit=true;
										$('.projselect').find('.selects').children('div:eq('+i+')').css("display","block");
									}
								}
							}else{
								hasit=false;
							}
						}
						if(!hasit){
							$(dom).parents('.liover').find('.moneynum').css("display","none");
							$('.projselect').removeClass('normalproj');
							$('.projselect').addClass('errorproj');
						}else{
							$(dom).parents('.liover').find('.moneynum').css("display","block");
							$('.projselect').removeClass('errorproj');
							$('.projselect').addClass('normalproj');
						}
						if(gtv.length<=0){
							$('.projselect').removeClass('errorproj');
							$('.projselect').addClass('normalproj');	
						}
				}
				//结算=======================================
				function sumfinal(){
						//循环获取借方金额 贷方金额
						var len=$('.maincl_warp .cl_divs').length;
						//借方金额
						var param01=0;
						//贷方金额
						var param02=0;
						for(var i=0;i<len;i++){
							var templen=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li').length;
							for(var b=0;b<templen;b++){
								if($('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li:eq('+b+')').hasClass('jie')){
									var jietemp=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li:eq('+b+') .getmoney .jiefang').val();
									if($.trim(jietemp)!=null&&$.trim(jietemp)!=''&&jietemp!='-'){
										param01=parseFloat(param01)+parseFloat(jietemp);
									}
								}	
							}
						}
						for(var i=0;i<len;i++){
							var templen=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li').length;
							for(var b=0;b<templen;b++){
								if($('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li:eq('+b+')').hasClass('dai')){
									var daitemp=$('.maincl_warp .cl_divs:eq('+i+') .cl_divs_ul li:eq('+b+') .getmoney .daifang').val();
									if($.trim(daitemp)!=null&&$.trim(daitemp)!=''&&daitemp!='-'){
										param02=parseFloat(param02)+parseFloat(daitemp);
									}
								}
							}
						}
						var haslittle=false;
						param01=parseFloat(param01).toFixed(2)+'';
						param02=parseFloat(param02).toFixed(2)+'';
						var uu=Math.floor(param01);
						// 小数点有值
						if(uu!=param01){
							haslittle=true;
						}
						param01=param01.replace('.','');
						param02=param02.replace('.','');
						//借方和贷方相加为0时，在合计处显示汉字
						//拆分借方和贷方的总金额
						// -101010
						var temparr01='';
						var temparr02='';
						var tempparam01=param01;
						var tempparam02=param02;
						var jiefu=false;
						if(parseInt(param01)<=0){
							jiefu=true;
							param01=parseFloat(param01)*-1;
						}
						var daifu=false;
						if(parseInt(param02)<=0){
							daifu=true;
							param02=parseFloat(param02)*-1;
						}
						if(param01!=null&&param01!=''){
							temparr01=(param01+'').split('');
						}
						if(param02!=null&&param02!=''){
							temparr02=(param02+'').split('');
						}
						if(jiefu){
							$('.cl_divs_sum .cl_divs_ul .jie ul').addClass('fuzhai');
						}else{
							$('.cl_divs_sum .cl_divs_ul .jie ul').removeClass('fuzhai');
						}
						if(parseInt(param01)<=0||temparr01==''||temparr01==null){
							$('.cl_divs_sum .cl_divs_ul .jie ul li').text('');
						}else{
							var jielen=$('.cl_divs_sum .cl_divs_ul .jie ul li').length;
							var tempi2=temparr01.length-1;
							$('.cl_divs_sum .cl_divs_ul .jie ul li').text('');
							for(var i=jielen-1;i>=0;i--){
								$('.cl_divs_sum .cl_divs_ul .jie ul li:eq('+i+')').text(temparr01[tempi2]);
								tempi2--;
							}
						}
						if(daifu){
							$('.cl_divs_sum .cl_divs_ul .dai ul').addClass('fuzhai');
						}else{
							$('.cl_divs_sum .cl_divs_ul .dai ul').removeClass('fuzhai');
						}
						if(parseInt(param02)<=0||temparr02==''||temparr02==null){
							$('.cl_divs_sum .cl_divs_ul .dai ul li').text('');
						}else{
							var dailen=$('.cl_divs_sum .cl_divs_ul .dai ul li').length;
							var tempi2=temparr02.length-1;
							$('.cl_divs_sum .cl_divs_ul .dai ul li').text('');
							for(var i=dailen-1;i>=0;i--){
								$('.cl_divs_sum .cl_divs_ul .dai ul li:eq('+i+')').text(temparr02[tempi2]);
								tempi2--;
							}
						}
						tempstr1='';
							var testarr=(param01+'').split('');
							var len1=testarr.length;
								if(parseInt(tempparam01)==parseInt(tempparam02)&&param01!=0){
									for(var i=0;i<len1;i++){
										var tempdanwei=formfont(testarr.length-i);
										// 个位等于0添加元
										if(tempdanwei.indexOf('角')!=-1){
											if(testarr[i-1]==0){
												tempstr1+='元';
											}
										}
										if(testarr[i]==0&&testarr[i+1]==0){
										
										}else{
											// 最后一个
											if(i+1==len1&&testarr[len1-1]==0){
											}else{
												var getnumfont='';
												var getdanwei='';
												getnumfont=forfont(testarr[i]);
												// 单位‘角’上的数字为0 
												if(testarr[i]==0){
												}else{
												//分 角 元/拾/佰/仟 //万 拾万 佰万 仟万 //亿
													getdanwei=formfont(testarr.length-i);
													if(getdanwei.indexOf('万')!=-1&&(i+1)<len1&&testarr[i+1]!=0){
														var getdanwei2=formfont(testarr.length-(i+1));
														if(getdanwei2.indexOf('万')!=-1){
															var tempdanwei=getdanwei;
															getdanwei=tempdanwei.replace('万','');
														}
													}
												}
												var sstr=getnumfont+getdanwei;
												tempstr1=tempstr1+sstr;
											}
										}
									}
									//没有分就有整
									if(testarr[len1-1]==0){
											tempstr1=tempstr1+'整';
									}
									if(jiefu||daifu){
											tempstr1='负'+tempstr1;
									}
									$(".cl_divs_sum .cl_divs_ul .vcsummary .vcsummary_heji>span").text(tempstr1);
								}else{
									$(".cl_divs_sum .cl_divs_ul .vcsummary .vcsummary_heji>span").text('');
								}
				}

				//转繁体十内汉字
				function forfont(num){
					var num=parseInt(num);
					var backval='';
					switch(num){
						case 0:
							backval='零';
						break;
						case 1:
							backval='壹';
						break;
						case 2:
							backval='贰';
						break;
						case 3:
							backval='叁';
						break;
						case 4:
							backval='肆';
						break;
						case 5:
							backval='伍';
						break;
						case 6:
							backval='陆';
						break;
						case 7:
							backval='柒';
						break;
						case 8:
							backval='捌';
						break;
						case 9:
							backval='玖';
						break;
					}
					return backval;
				}
				//转繁体亿单位汉字
				function formfont(num){
					var num=parseInt(num);
					var backval='';
					//小数点
					//壹分
					//前百室
					//111111 一千一百一十一元一角一分
					switch(num){
						case 1:
							backval='分';
						break;
						case 2:
							backval='角';
						break;
						case 3:
							backval='元';
						break;
						case 4:
							backval='拾';
						break;
						case 5:
							backval='佰';
						break;
						case 6:
							backval='仟';
						break;
						case 7:
							backval='万';
						break;
						case 8:
							backval='拾万';
						break;
						case 9:
							backval='佰万';
						break;
						case 10:
							backval='仟万';
						break;
						case 11:
							backval='亿';
						break;
					}
					return backval;
				}
				function clearnum(beforenum,afternum){
							var iszhengshu=false;
							var reg=/-/g;
							var tempval3='';
							var spcount=beforenum.split('-');
							var spcount2=afternum.split('-');
							if(beforenum==null||$.trim(beforenum)==''){
								afternum=afternum.replace(reg,'');
								if(spcount2.length>1){
									tempval3='-'+afternum;
								}else{
									tempval3=afternum;
								}
							}else if(afternum==null||$.trim(afternum)==''){
								tempval3='';
							}else{
									//str有- str tempval2
									
									if(spcount.length>=2){
											//tempval多了-
											if(spcount.length<spcount2.length){
												iszhengshu=true;
											//tempval没了
											}else if(spcount2.length<=1){
												iszhengshu=true;
											}
									//str 没有-
									}else{
											// tempval也没有
											if(spcount2.length<=1){
												iszhengshu=true;
											}
									}
									//替换所有'-'
									afternum=afternum.replace(reg,'');
									if(iszhengshu){
										tempval3=afternum;
									}else{
										if(afternum!=''){
											tempval3='-'+afternum;
										}
									}
							}
							return tempval3;
				}