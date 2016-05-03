$(function(){
    //返回顶部
    $(window).scroll(function(){
        var wh=$(window).height();
        var st=$("body").scrollTop();
        st>wh?$("#go-btn").show():$("#go-btn").hide();
    });
    //关闭头部
    var closeBtn=$(".closebtn");
    var download=$(".download");
    closeBtn.click(function(){
        download.css("display","none");
    })

});