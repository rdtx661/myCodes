<?php 
	$this->head(['js'=>'js/view_month/view_month.js']);
	$this->head(['css'=>'css/view_month/view_month.css']);
?>
<ul class="view_month">
					<!-- 12-2=10 |3 4 5…12 1 2 当前年的月可选择 js获取当前年和当前月份-->
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<img src="<?php echo $this->assetsUri ?>/img/view_month/monthLine_prev_disabled.png" alt="">
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li>
						<span class="monthnum"></span>
						<span class="circle">
							<span class="imgspan"></span>
						</span>
					</li>
					<li class="lastmonth">
						<span class="monthnum"></span>
						<span class="circle">
							<img src="<?php echo $this->assetsUri ?>/img/view_month/monthLine_next_disabled.png" alt="">
						</span>
					</li>
</ul>