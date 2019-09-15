<?php 
	$this->head(['js'=>'js/date_month/date_month.js']);
	$this->head(['css'=>'css/date_month/date_month.css']);
	$year=date("Y",time());  
	$month=date("m",time());  
?>
	<div class="date_MContainer">
					<!-- 展示部分(input 图标) -->
					<div class="date_Mshow">
						<span>
							<span class="yearstr">&nbsp;<?php echo $year?>-<?php echo $month?></span>
							<img src="<?php echo $this->assetsUri ?>/img/date_month/arrow-select-downadd.png" alt="">
						</span>
					</div>
					<div class="date_Mhide">
							<div class="dm_head_year">
								<span class="dm_head_left">
								<img src="<?php echo $this->assetsUri ?>/img/date_month/data-left.png" alt=""></span>
								<span class="yearnum">2018</span>年
								<span class="dm_head_right">
									<img src="<?php echo $this->assetsUri ?>/img/date_month/data-right.png" alt=""></span>
							</div>
							<div class="dm_ctn_month">
								<ul>
									<li>01</li>
									<li>02</li>
									<li>03</li>
									<li>04</li>
									<li>05</li>
									<li>06</li>
									<li>07</li>
									<li>08</li>
									<li>09</li>
									<li>10</li>
									<li>11</li>
									<li>12</li>
								</ul>
							</div>
							<div class="bottomdesc">全部时间</div>
					</div>
				</div>