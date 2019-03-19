$(function(){
    //search滑动
    var isclick = true;
    $(".icon-fangdajing").click(function(){
        if(isclick){
            $(".search_input").animate({
                left:"0"
            },800);
        }else{
            $(".search_input").animate({
                left:"266"
            },800);
        }
        isclick = !isclick;
    });

    //navFixed导航定位
    $(window).scroll(function() {
        if($(document).scrollTop() >= 56) {
            $(".navDown").addClass("fixed_search");
        } else {
            $(".navDown").removeClass("fixed_search");
        }
    });

    //删除二维码
    $(".remove").click(function(){
        $(".erweima").remove();
    });

    //锚点
    $(window).scroll(function() {
        if($(document).scrollTop() >= 200) {
            $(".scroll").css({
                display:"block"
            });
        } else {
            $(".scroll").css({
                display:"none"
            });
        }
    });
    $(".scroll").click(function(){
        $('html,body').animate({
            scrollTop:0
        },'slow');
    });

    //购物车信息
    $("#goods").mouseenter(function(){
        $(this).css({
            backgroundColor : "#292f34"
        });
        $(".goodsCar").css({
            display:"none"
        });
    });
    $("#goods").mouseleave(function(){
        $(this).css({
            backgroundColor : "#25292e"
        });
        $(".goodsCar").css({
            display:"none"
        });
    });

    //shop
    $(".shop").mouseenter(function(){
        $(".shopDiv").css({
            display:"block"
        });
    });
    $(".shop").mouseleave(function(){
        $(".shopDiv").css({
            display:"none"
        });
    });

    //3级菜单
    $(".jiaju").mouseenter(function(){
        $(".jiajuDiv").css({
            display:"block"
        });
    });
    $(".jiaju").mouseleave(function(){
        $(".jiajuDiv").css({
            display:"none"
        });
    });

    //cookie
    let username = getCookie("name");

    initCookie(username);
    $("#regLi").click(function(){
        removeCookie("name");
        location.href="index.html";
    });
});

function initCookie(username){
    if(username!=null){
        $("#loginA").css("display","none");
        $("#regA").css("display","none");
        $("#loginLi").html(username);
        $("#loginLi").css({color:"white",paddingRight:"10px"});
        $("#regLi").html("注销");
        $("#regLi").css({cursor:"pointer",color:"#999"});
    }else{
        $("#loginA").css("display","block");
        $("#regA").css("display","block");
    }
}