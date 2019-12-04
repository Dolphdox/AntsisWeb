$("document").ready(function(){
    //三明治按钮
    $("#navbar-toggler").click(function(){
        //判断#navbar是否有show类
        if($("#navbar").hasClass("show")){
            $("#navbar").removeClass("show");
        }else{
            $("#navbar").addClass("show");
        }
    })
})


//TODO:给导航栏加个动画过渡