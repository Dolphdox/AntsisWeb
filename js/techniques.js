$(document).ready(function(){

    $(".col-right .col").click(function(){
        //获取点击的信息
        var dImg=$(this).children(".img").children().attr("src"),
            h=$(this).children("p").text(),
            dUrl=$(this).data("url");
        //获取父级信息
        var iDTitle=$(this).parent(".col-right").siblings(".col-left").find("iframe").data("title"),
            iDImg=$(this).parent(".col-right").siblings(".col-left").find("iframe").data("img"),
            iSrc=$(this).parent(".col-right").siblings(".col-left").find("iframe").attr("src");
        
        //更改父级消息
        $(this).parent(".col-right").siblings(".col-left").find("iframe").remove();
        $(this).parent(".col-right").siblings(".col-left").children().append("<iframe src='"+dUrl+"' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' data-title='"+h+"' data-img='"+dImg+"'></iframe>")
        
        //更改点击信息
        $(this).children(".img").children().remove();
        $(this).children("p").remove();
        $(this).data("url", iSrc);
        $(this).children(".img").append("<img src='"+iDImg+"'>");
        $(this).append("<p>"+iDTitle+"</p>");
    });
    
    $(window).scroll(function(){
        var top =$(document).scrollTop();
        var menu=$(".menu");
        var item=$(".item");
        var currentId="";
    
        item.each(function(){
            var itemTop=$(this).offset().top-300;
            if(top>itemTop){
                currentId="#"+$(this).attr("id");
            }else{
                return false;
            }
        });
        var currentLink=menu.find(".menu-active");
        if(currentId && currentLink.children().attr("href") != currentId){
            currentLink.removeClass("menu-active");
            menu.find("[href='"+currentId+"']").parent(".menu-item").addClass("menu-active");
        }
    }); 
    //给锚点添加过渡动画
    $(".menu-item>a").click(function(){
        $("html,body").stop(true, true).animate({
            scrollTop: ($($(this).attr('href')).offset().top
            )},500, "swing");
    })
})