
$("document").ready(function(){
    //按钮关闭
    $("#close").click(function(){
        $(this).parents("#dialog-container").hide().children().animate({
            width: "20",
            height: "15%",
        }, 200, "swing");
    });

    $("#vx a").each(function(){
        $(this).click(function(){
            //打开对话框
            $("#dialog-container").show().children().animate({
                width: "45%",
                height: "60%",
            }, 200, "swing");
            //填充二维码
            $("<img src='"+")
        })
    });
})
