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