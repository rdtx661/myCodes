$(function(){
  preSet();
  $(window).resize(function(){
      preSet();
  });
  $("#preview .overDiv").mousemove(function(event) {
        var thisW=$(this).width();
        var thisH=$(this).height();
        var imgW=$(".overSmall .jqzoom img").width();
        var imgH=$(".overSmall .jqzoom img").height();

        // 移动块和产品容器的比例必须和外部显示大图片的容器和大图片成比例
      
        // 在outbigImg基础容器中模拟产品图片容器 overSmall与图片之前存在的样式
        // 容器是原产品容器的1.5倍大小（和overDiv相同）
        var outBigW=thisW*1.5;
        var outBigH=thisH*1.5;
        var outBigDW=outBigW/(2/3);
        var outBigDH=outBigH/(2/3);

        var outBigIW=(imgW*1.5)/(2/3);
        var outBigIH=(imgH*1.5)/(2/3);
       $("#outBigImg").width(outBigW);
       $("#outBigImg").height(outBigH);
       $("#outBigImg>div").width(outBigDW);
       $("#outBigImg>div").height(outBigDH);
       $("#outBigImg>div").css("line-height",outBigDH+"px");
       // 图片和容器不同的地方在于图片高度可能是变化的
       $("#outBigImg>div>img").width(outBigIW);
       $("#outBigImg>div>img").height(outBigIH);       

       $("#bigOne").css("display","block");
       $("#outBigImg").css("display","block");
        var bigCW=$("#bigOne").width();
        var bigCH=$("#bigOne").height();
        var getX=event.offsetX;
        var getY=event.offsetY;
        //获取小图中鼠标的宽高比 在大图中显示 
        var wP=getX/thisW;
        var hP=getY/thisH;
        // 获取在outBigImg中的位置
        var bSetX=wP*outBigDW,bSetY=hP*outBigDH;
        var bigT=0;
        var outBigT=0;
        if(getY-bigCH/2<0){
            bigT=0;
            outBigT=0;
        }else if(getY+bigCH/2>thisH){
            bigT=thisH-bigCH;
            // 图片到底 图片高度-容器高度
            outBigT=-(outBigDH-outBigH);
        }else{
          bigT=getY-bigCH/2;
          outBigT=-bSetY+(outBigH/2);
          if(outBigT>0){
              outBigT=0;
          }else if(outBigT<-parseFloat(outBigDH)+thisH){
              outBigT=-outBigDH+thisH;
          }
        }
        var bigL=0;
        var outBigL=0;
        if(getX-bigCW/2<0){
          bigL=0;
          outBigL=0;
        }else if(getX+bigCW/2>thisW){
          bigL=thisW-bigCW;
          outBigL=-(outBigDW-outBigW);
        }else{
          bigL=getX-bigCW/2;
          outBigL=-bSetX+(outBigW/2);
          if(outBigL>0){
              outBigL=0;
          }else if(outBigL<-outBigDW+thisW){
              outBigL=-outBigDW+thisW;
          }
        }
        $("#bigOne").css({"top":bigT,"left":bigL});
        $("#outBigImg>div").css({"top":outBigT,"left":outBigL});
     });
      $("#preview .overDiv").mouseleave(function(event) {
          $("#bigOne").css("display","none");
          $("#outBigImg").css("display","none");
      })
})
function preSet(){
    var preT=$("#preview").offset().top;
    var preL=$("#preview").offset().left;
    var preW=$("#preview").width();
    var preH=$("#preview").height();
    $("#outBigImg").css({"top":preT,"left":parseFloat(preW)+10+parseFloat(preL)});
}