/*自定义全屏轮播插件*/
$.fn.bannerChange = function(options) {
	var options = $.extend({
		bannerItem      : '.wp-banner li',	//切换的轮播图片
		serialBtn       : '.btn-serial li',	//序列按钮
		showChangeBtn   : true,				//显示prev,next切换按钮
		changeEvent     : 'click',			//触发切换的事件类型:click/hover
		activeClass     : 'hover',			//切换按钮激活(当前)的样式
		playStyle       : 'slide',			//播放模式：淡入淡出/滑动:fade/slide
		slideDirection  : 'horizonal',		//滑动模式-滑动方向:horizonal/vertical
		easing          : 'easeInOutExpo',	//动画方式:推荐 easeOutCubic/easeInOutExpo。更多效果可以参考：http://james.padolsey.com/demos/jquery/easing/
		fadeSpeed       : 1000,				//淡入淡出-图片淡入淡出的速度-毫秒
		slideSpeed      : 500,				//滑动模式-图片左右滑动的速度-毫秒
		autoPlayInterval: 5000				//图片切换间隔-毫秒
	}, options);
	var $bannerWrapper   = $(this),
		$bannerItem      = $(options.bannerItem),
		$serialBtn   = $(options.serialBtn),
		changeEvent		 = options.changeEvent,
		activeClass		 = options.activeClass,
		playStyle        = options.playStyle,
		slideDirection   = options.slideDirection,
		easing           = options.easing,
		fadeSpeed        = options.fadeSpeed,
		slideSpeed       = options.slideSpeed,
		autoPlayInterval = options.autoPlayInterval;

	var $bannerList = $bannerItem.parent();
	var	bannerAutoTimer;
	var self = this;
	// 当前显示的图片的下标 = 有hover样式的切换切换按钮的下标
	var currentIndex = 0;

	// 显示prev、next切换按钮
	if(options.showChangeBtn) {
		var prevBtn = '<a href="javascript:" class="btn-prev"></a>';
		var nextBtn = '<a href="javascript:" class="btn-next"></a>';
		$(this).append(prevBtn).append(nextBtn);
		var t = ($(this).height() - $('.btn-prev').height()) / 2;
		//console.log("t"+t);
		$(this).find(".btn-prev").css({top: t});
		$(this).find(".btn-next").css({top: t});
	}


	/*淡入淡出的切换方式*/
	if(playStyle === 'fade' && $bannerItem.length > 1) {

		var timer;
		// 显示第一张banner
		$bannerItem.css({position: 'absolute'});
		$bannerItem.first().show().siblings().hide();

		// 切换图片-淡入淡出的方法
		var showImg = function(i) {
			$bannerItem.stop(true, true).eq(i).fadeIn(fadeSpeed).siblings().fadeOut(fadeSpeed);
			$serialBtn.eq(i).addClass(activeClass).siblings().removeClass(activeClass);
		}

		// 指针移到序列按钮上时，根据按钮的下标显示对应的图片
		if(changeEvent === 'hover') {
			$serialBtn.bind({
				'mouseenter': function() {
					var $self = $(this);
					timer = setTimeout(function(){
						currentIndex = $self.index();
						$self.addClass(activeClass).siblings().removeClass(activeClass);
						showImg(currentIndex);
					}, 150);
				},
				'mouseleave': function() {
					clearTimeout(timer);
				}
			});
		}else {
			$serialBtn.bind('click', function() {
				var $self = $(this);
				currentIndex = $self.index();
				$self.addClass(activeClass).siblings().removeClass(activeClass);
				showImg(currentIndex);
			});
		}

		// 显示上一个
		this.showPrevBanner = function() {
			currentIndex--;
			currentIndex === $bannerItem.length ? currentIndex = 0 : '';
			currentIndex < 0 ? currentIndex = $bannerItem.length - 1 : '';
			showImg(currentIndex);
		}

		// 自动切换、显示下一个
		this.autoPlay = this.showNextBanner = function() {
			currentIndex++;
			currentIndex === $bannerItem.length ? currentIndex = 0 : '';
			currentIndex < 0 ? currentIndex = $bannerItem.length - 1 : '';
			showImg(currentIndex);
		};
	/*滑动切换的切换方式*/
	}else if(playStyle === 'slide' && $bannerItem.length > 1) {
		// banner图片列表的首尾分别添加一个克隆的对象，这样在自动轮播时，第一张图片与最后一张图片之间可以无间隔的切换
		var $firstBannerItem = $bannerItem.first();
		var $lastBannerItem = $bannerItem.last();
		$lastBannerItem.clone().addClass('clone').prependTo($bannerList);
		$firstBannerItem.clone().addClass('clone').appendTo($bannerList);

		// 切换图片-上下滑动
		if(slideDirection === 'vertical') {
			// 单张图片的高度
			var bannerItemHeight = $bannerItem.height();
			$bannerList.css({top: -(currentIndex + 1) * bannerItemHeight});
			var showImg = function() {
				if(currentIndex === $bannerItem.length) {
					$bannerList.stop(true,false).animate({top: -(currentIndex + 1) * bannerItemHeight}, slideSpeed, easing, function() {
						$bannerList.css({top: -bannerItemHeight});
					});
					currentIndex = 0;
				}else if(currentIndex === -1) {
					$bannerList.stop(true,false).animate({top: -(currentIndex + 1) * bannerItemHeight}, slideSpeed, easing, function() {
						$bannerList.css({top: -bannerItemHeight * $bannerItem.length});
					});
					currentIndex = $bannerItem.length - 1;
				}else {
					$bannerList.stop(true,false).animate({top: -(currentIndex + 1) * bannerItemHeight}, slideSpeed, easing);
				}
				$serialBtn.eq(currentIndex).addClass(activeClass).siblings().removeClass(activeClass);
			}
		// 切换图片-左右滑动
		}else {
			// 单张图片的宽度
			var bannerItemWidth;
			// 计算$bannerList的位置
			var bannerListPosition = function() {
				bannerItemWidth = $bannerWrapper.width();
				// 根据列表中li的个数动态设置滚动列表的宽度
				$bannerList.children('li').css({
					float: 'left',
					width: bannerItemWidth
				});
				$bannerList.css({
					left: -(currentIndex + 1) * bannerItemWidth,
					width: ($bannerItem.length + 2) * bannerItemWidth
				});		
			}
			bannerListPosition();
			// 窗口大小时，重新计算$bannerList的位置
			$(window).resize(function() {
				bannerListPosition();	
			});
		  
			var showImg = function() {
				if(currentIndex === $bannerItem.length) {
					$bannerList.stop(true, false).animate({left: -(currentIndex + 1) * bannerItemWidth}, slideSpeed, easing, function() {
						$bannerList.css({left: -bannerItemWidth});
					});
					currentIndex = 0;
				}else if(currentIndex === -1) {
					$bannerList.stop(true, false).animate({left: -(currentIndex + 1) * bannerItemWidth}, slideSpeed, easing, function() {
						$bannerList.css({left: -bannerItemWidth * $bannerItem.length});
					});
					currentIndex = $bannerItem.length - 1;
				}else {
					$bannerList.stop(true, false).animate({left: -(currentIndex + 1) * bannerItemWidth}, slideSpeed, easing);
				}
				$serialBtn.eq(currentIndex).addClass(activeClass).siblings().removeClass(activeClass);
			}
		}

		$serialBtn.bind(changeEvent, function() {
			currentIndex = $(this).index();
			$(this).addClass(activeClass).siblings().removeClass(activeClass);
			showImg(currentIndex);
		});

		// 显示上一个
		this.showPrevBanner = function() {
			currentIndex--;
			showImg(currentIndex);
		}

		// 自动切换、显示下一个
		this.autoPlay = this.showNextBanner = function() {
			currentIndex++;
			showImg(currentIndex);
		};
	}

	// 自动轮播
	bannerAutoTimer = setInterval(self.autoPlay, autoPlayInterval);
	$bannerWrapper.hover(function() {
		clearInterval(bannerAutoTimer);
		$('.btn-prev, .btn-next').show();
	},function() {
		$('.btn-prev, .btn-next').hide();
		if(bannerAutoTimer) {
			clearInterval(bannerAutoTimer);
		}
		bannerAutoTimer = setInterval(self.autoPlay, autoPlayInterval);
	});

	// 点击切换按钮
	$('.btn-prev').live('click', function() {
		self.showPrevBanner();
	});
	$('.btn-next').live('click', function() {
		self.showNextBanner();
	});
}