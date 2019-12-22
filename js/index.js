$(function(){
    //获取li的长度
    var len=$(".oLi").length;
    //把所有li的宽度算好,赋值给ul当宽度
    $("#banner").width($(".oLi").eq(0).width()*len);
    //id是为了后面的计时器暂停设置的
    var id;
    //index用来统计滚动次数
    var index=0;
    //启动计时器
    id=setInterval(start,3000);
    //给ul(#banner)添加hover选择器事件
    $("#banner").hover(function(){
        //鼠标进入的时候暂停
        clearInterval(id);
    },function(){
        //鼠标离开的时候开始
        id=setInterval(start,3000);
    });
    //计时器中执行的代码块
    function start(){
        //执行的时候次数++
        index++;
        //用animate设置ul的left属性,与左边的距离
        $("#banner").animate({'left':-$(".oLi").eq(0).width()*(index%len)});
        //实现无缝轮播的关键地方
        //判断index%len的值index%len=0的时候表示第一张,那么len-1表示最后一张,
        //最后一张与第一张一模一样,所有直接修改left属性
        if(index%len==(len-1)){
            $("#banner").animate({'left':0},0);
            //同时给index+1跳过第一张图的再次加载
            index++;
        }
        //实际的加载情况就是第一张,第二张,第三张,第四张,第五张(瞬间改变图片为第一张的,是一模一样的替换,不是滚动,看不出来,所以称之为无缝轮播),第二张...
    }
});