$(function(){
    var size=$(".img li").length;  //首先获取到图片的长度
    for (var i= 1;i<=size;i++){
        var li="<li>"+i+"</li>";
        $(".num").append(li); //动态添加底部小圆点
    }
    $(".num li").eq(0).addClass("active");


    $(".num li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active"); //给你放上的底部圆点添加样式，其它的圆点去掉active样式
        var index=$(this).index();
        i=index;
        $(".img li").eq(index).fadeIn(1000).siblings().fadeOut(1000); //第index个图片淡入，其它的图片淡出
    });
    i=0;
    var t=setInterval(move,2000);// setInterval方法会不停地调用函数,直到 clearInterval() 被调用或窗口被关闭
    function move(){
        i++;
        if(i==size){
            i=0; //达到图片的尾部时，返回开头
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }

    function moveL(){
        i--;
        if(i==-1){
            i=size-1;
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        $(".img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    }

    $(".out").hover(function(){  //鼠标悬停时，停止调用函数
        clearInterval(t);
    },function(){    //鼠标移开之后定时器启动
        t=setInterval(move,2000);
    });

    $(".out .right").click(function(){
        move();
    });
    $(".out .left").click(function(){
        moveL();
    })

});