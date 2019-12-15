$(document).ready(function () {
    $(".slider").each(function () {
        var c = $(this);
        var width = c.children("img").width() + "px";
        c.find(".img img").css("width", width);
        drags(c.find(".handle"), c.find(".img"), c);
    });
    // 屏幕变化更新图片的大小
    $(window).resize(function () {
        $(".slider").each(function () {
            var c = $(this);
            var width = c.children("img").width() + "px";
            c.find(".img img").css("width", width);
        });
    });
});

function drags(dragElement, resizeElement, container) {
  // 初始化鼠标按下拖动事件.
  dragElement
    .on("mousedown", function(e) {
      dragElement.addClass("draggable");
      resizeElement.addClass("resizable");

      // 得到初始化位置
      var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - e.pageX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();

      // 设置限制
      minLeft = containerOffset + 16;
      maxLeft = containerOffset + containerWidth - dragWidth - 16;

      // 设置鼠标拖动距离的限制
      dragElement.parents().on("mousemove", function(e) {
          leftValue = e.pageX + posX - dragWidth;
          if (leftValue < minLeft) {
            leftValue = minLeft;
          } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
          }
          widthValue =((leftValue + dragWidth / 2 - containerOffset) * 100) / containerWidth +"%";
          // 设置滑块和图片的新值
          // 绑定鼠标移开事件以停止拖动
          $(".draggable").css("left", widthValue).on("mouseup", function() {
              $(this).removeClass("draggable");
              resizeElement.removeClass("resizable");
            });
          $(".resizable").css("width", widthValue);
        })
        .on("mouseup", function() {
          dragElement.removeClass("draggable");
          resizeElement.removeClass("resizable");
        });
      e.preventDefault();
    })
    .on("mouseup", function(e) {
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");
    });
}
