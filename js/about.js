$(document).ready(function(){
    var flag=true;
    // 检测名字是否符合要求
    $("#name").change(function(){
        var name=$(this).val();
        if(name.length<3||name.length>32){
            flag=false;
            $(this).siblings("span").text("名字长度错误").addClass("error-title");
        }else{
            flag=true;
            $(this).siblings("span").text("输入正确").removeClass("error-title");
        }
    });
    //检测邮箱是否符合要求
    $("#email").change(function(){
        var email=$(this).val();
        if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)){
            $(this).siblings("span").text("邮箱格式错误").addClass("error-title");
            flag=false;
        }else{
            flag=true;
            $(this).siblings("span").text("输入正确").removeClass("error-title");
        }
    })
    //使用ajax传递留言, 实现无级刷新留言
    $("#submit").click(function(){
        if(flag){
            $.ajax({
                type: "POST",
                url: "about.php",
                data: {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    broad: $("#broad").val(),
                },
                dataType: "json",
                success: function(data){
                    var str=`
                        <div class='text'>
                            <h4>${data.name}<span>${data.email}</span></h4>
                            <p>${data.broad}</p>
                        </div>
                    `
                    $(".text-wrap").append(str);
                    $(".text").fadeIn(300, "swing");
                },
                error: function(){
                    $(".text-wrap").append("<div class='text2'>错误</div>");
                    $(".text2").fadeOut(2000);
                }
            })
        }else{
            return false;
        }
        
    })



})