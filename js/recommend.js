
$("document").ready(function(){
    
    //按钮关闭
    $("#close").click(function(){
        $(this).parents("#dialog-container").css("background-color","rgb(0, 0, 0, 0)").hide(200).children().animate({
            width: "5%",
            hieght: "10%",
        }, 200, "swing");
        $("#content").html("");
    });
    //公众号按钮
    $("#vx a").click(function(){
        var alt=$(this).siblings(".img").children().attr("alt");
        var src=$(this).siblings(".img").children().attr("src");
        //处理src字符
        var str = src.replace(/.jpg|.png/,"");
        //打开对话框
        $("#dialog-container").css("background-color","rgb(0, 0, 0, 0.9)").show().children().animate({
            width: "60%",
            height: "70%",
        }, 200, "swing");
        //填充二维码
        $("#content").append($("<p>扫描关注公众号</p><div><img src='"+str+"-qrcode.jpg'></div><p>"+alt+"</p>"));
    });

    $("#bup a").click(function(){
            var img=$(this).siblings(".img").children().attr("src");
            var name=$(this).siblings("h3").text();
            var p=$(this).siblings("p").text();
            var url=$(this).data("url");
            //打开对话框
            $("#dialog-container").css("background-color","rgb(0, 0, 0, 0.9)").show().children().animate({
                width: "60%",
                height: "70%",
            }, 200, "swing");
            //填充内容
            $("<div class='row row-2'><div class='col'><div class='img'><img src="+img+"></div></div><div class='col'><h3>"+name+"</h3></div></div>").appendTo("#content");
            $("<div class='row'><div class='col'><p>"+p+"</p></div></div>").appendTo("#content");
            $("<div class'row'><div class='col'><a class='btn' href='"+url+"'><span>前往主页</span></a></div></div>").appendTo("#content");
    })


    $("#youtube a").click(function(){
        var img=$(this).siblings(".img").children().attr("src");
        var name=$(this).siblings("h3").text();
        var p=$(this).siblings("p").text();
        var url=$(this).data("url");
        //打开对话框
        $("#dialog-container").css("background-color","rgb(0, 0, 0, 0.9)").show().children().animate({
            width: "60%",
            height: "70%",
        }, 200, "swing");
        //填充内容
        $("<div class='row row-2'><div class='col'><div class='img'><img src="+img+"></div></div><div class='col'><h3>"+name+"</h3></div></div>").appendTo("#content");
        $("<div class='row'><div class='col'><p>"+p+"</p></div></div>").appendTo("#content");
        $("<div class'row'><div class='col'><a class='btn' href='"+url+"'><span>前往主页</span></a></div></div>").appendTo("#content");
    
    });
    var slider = $(".slider"),
        sC = $(".screen-container"),
        sI = $(".screen-item"),
        bW = $(".bar-wrap"),
        bC = $(".bar-container");
        bI = $(".bar-item"),
        current = 0;
    function moveScreenTo(i){
        sC.css("left", -slider.width() * i);
    }
    function moveBarTo(i){
        bC.css("left", (bW.width() / 2) - (bI.width() / 2) - $(bI[i]).position().left )
    }
    function moveToItem(t){
        var index;
        if(typeof t === "number"){
            index=t;
        }else{
            index=$(t).index();
        }
        current=index;
        moveScreenTo(index);
        moveBarTo(index);
    }
    function setSize(){
        sC.css("width", sC.children().length * slider.width());
        bC.css("width", (bC.children().length * bI.width()) + ((bC.children().length-1) * 10 ));
        moveToItem(current);
    }
    setSize();
    bI.click(function(){
        moveToItem(this);
    });
    $(window).resize(function(){
        setSize();
    })

    // TODO: 写一个定时器
})

