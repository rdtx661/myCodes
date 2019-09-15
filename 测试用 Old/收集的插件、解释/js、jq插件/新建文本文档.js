<script src="http://apps.bdimg.com/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="http://cdn.bootcss.com/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
<script>
$(function() {
    var Box_Height = $(".box").outerHeight();
    var content_Height = $(".content").outerHeight();
    var bar_Height = $(".silderBar").outerHeight();
    var isMouseDown = false;
    var distance = 0;
 
    //滚动条初始高度；
    var n = Box_Height / content_Height * bar_Height
    $(".silderBar span").css("height", n)
    $(".silderBar").mousedown(down);
    $(window).mousemove(move);
    $(window).mouseup(up);

    function down(event) {
        isMouseDown = true;
    }

    function move(event) {
        event.preventDefault();
        distance = event.pageY - $(".silderBar").offset().top;
        if (isMouseDown == true) {
            scroll(distance)
        }
    }

    function up() {
        isMouseDown = false;
    }
    // 滚轮事件；
    $(".box").bind('mousewheel', function(event, delta) {
        event.preventDefault()
        var dir = delta > 0 ? 'Up' : 'Down',
            vel = delta
        distance = $(".silderBar span").offset().top - $(".box").offset().top; 
        vel > 0 ? distance -= 10 : distance += 10
        scroll(distance);
    });

    function scroll(distance) {
        if (distance < 0) {
            distance = 0
        } else if (distance > bar_Height - $(".silderBar span").outerHeight()) {
            distance = bar_Height - $(".silderBar span").outerHeight();
        }
        $(".silderBar span").css("top", distance)
        // 滚动距离 = 滑块移动距离 ÷ 窗口高度 x 页面长度
        // var roat = distance / (bar_Height - $(".silderBar span").outerHeight())
        // var scroll_distance = parseInt(roat * (content_Height - Box_Height))
        var scroll_distance = parseInt(distance / Box_Height * content_Height)
        $(".content").css("margin-top", -scroll_distance)
    }
})
</script>