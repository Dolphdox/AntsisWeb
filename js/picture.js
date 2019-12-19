$(document).ready(function () {
    isImgLoad(function(){
        waterfall(true);
    }, 100);
    $(window).scroll(function(){
        // if(checkLoadNewImg()){
        //     addImg();
        // };
        throttle(run(), 10000);
    });
    function run(){
        if(checkLoadNewImg()){
            addImg();
        };
    }
    //页面发生变化时,重新执行waterfall函数
    $(window).resize(function () {
        waterfall(false);
    });
    
});
//初始化数据
var t_img,
    isLoad =true,
    //图片总数量
    ImgNumber=50;


function waterfall(flag) {
    var w = $(".main").width(),
        box = $(".main img"),
        boxW = 0,
        allH = [],
        minH = 0,
        minHI = 0,
        col=5,
        screenW = $(window).width();

    if (screenW > 1100) {
        col = 5;
    } else if (screenW > 800) {
        col=4;
    } else if (screenW > 615) {
        col=3;
    } else {
        col=2;
    }
    boxW = (w / col) - 15;
    box.css("width", boxW);
    box.each(function (i) {
        if (i < col) {
            $(this).css("position","");
            allH[i] = $(this).height();
        } else {
            
            minH = Math.min.apply(null, allH);
            minHI = $.inArray(minH, allH);
            if(flag){
                //使用top动画
                $(this).css({
                    "position": "absolute",
                    // "top": minH + 15,
                    "left": box.eq(minHI).position().left,
                }).animate({
                    "top": minH + 15,
                    // "left": box.eq(minHI).position().left,
                }, 1000, "swing");
            }else{
                //不使用
                $(this).css({
                    "position": "absolute",
                    "top": minH + 15,
                    "left": box.eq(minHI).position().left,
                });
                // }).animate({
                //     "top": minH + 15,
                //     // "left": box.eq(minHI).position().left,
                // }, 300, "swing")
            }
            allH[minHI] += $(this).height()+15;
        }
    });
}
//添加后续图片的函数
function addImg(){
    var main=$(".main"),
        boxL=$(".main img").length+1,
        times=0;
    if(boxL==ImgNumber+1){
        return false;
    }
    for(boxL;times<10;boxL++){
        $("<img src='images/waterfall-flow/"+boxL+".jpg'>").appendTo(main);
        times++;
        if(boxL==ImgNumber+1){
            break;
        }
        
    }
    isImgLoad(function(){
        waterfall(true);
    }, 5);
}
//判断图片是否加载完成
function isImgLoad(callback, time) {
    $('.main img').each(function () {
        // 找到为0就将isLoad设为false，并退出each
        if (this.height === 0) {
            isLoad = false;
            return false;
        }
    });
    // 为true，没有发现为0的。加载完毕
    if (isLoad) {
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback();
        // 为false，因为找到了没有加载完成的图，将调用定时器递归
    } else {
        isLoad = true;
        t_img = setTimeout(function () {
            isImgLoad(callback); // 递归扫描
        }, time);
    }
}
//判断是否要加载新的图片
function checkLoadNewImg(){
    var box=$(".main img"),
        scrollTop=$(window).scrollTop();
        screenH=$(window).height();
        allImgHeight=box.last().position().top+Math.floor(box.last().height()/2);
    return (allImgHeight<scrollTop+screenH)?true:false;
}
//节流函数
function throttle(after, wait) {
    /*option说明：after [回调函数]; 
                  wait  [周期性执行回调间隔时间ms]
     */
     var timer;
     var isScroll; //是否正在执行回调
     return function() {
         if (isScroll) return; //在回调函数未执行完以前
         isScroll = true;
         timer && clearTimeout(timer);
         timer = setTimeout(function() {
             after && after();
             isScroll = false;
             timer = null;
         }, wait);
     }
 }