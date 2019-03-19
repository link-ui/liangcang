
var id;
window.onload = function(){
    $(".top").load("top.html");
    $(".footer").load("bottom.html");


    id = getUrlParam('booksId');
    $.ajax({
        type:"get",
        url:"php/index.php",
        success:function(data){
            createUI(data);
        }
    });
};

function getUrlParam(name){
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    let r = window.location.search.substr(1).match(reg); //匹配目标参数
    if(r!=null){
        return unescape(r[2]);//返回参数值
    }
    return null;
}

function createUI(data){
    let goodsJson = jQuery.parseJSON(data);
    $.each(goodsJson,function (indx,val) {
        if (id == val.goodsId){
            let str = `
                    <div class="goodsMenu">
		<div class="luj">
			<p>良仓 > </p> <p>商店 > </p> <p class="goodsType">`+val.goodsType+` > </p> <p class="beiyong2">`+val.beiyong2+`</p>
		</div>
		<div class="goodsZT">
			<div class="goodsImg">
				<div class="imgFDJ">
					<img src="`+val.beiyong4+`" alt="#" width="440px"/>
					<div class="blocks"></div>
					<div class="showDiv">
						<img src="`+val.beiyong4+`" alt="#"/>
					</div>
				</div>
			</div>
			<ul class="goodsXQ">
				<li class="goodsName">${val.goodsName}</li>
				<li class="goodsBY2">${val.beiyong2}</li>
				<li class="goodsPrice">价格: &nbsp;<span>￥</span><span class="goodsP">`+val.goodsPrice+`</span> &nbsp;<span>元</span></li>
				<li class="goodsZB"><img src="img/zb.jpg" alt=""></li>
				<li class="goodsKS">款式：<p class="goodsTP">`+val.goodsType+`</p></li>
				<li class="goodsCon">数量: <div class="goodsC"><img src="img/goodsJian.jpg" id="jian" alt=""><input type="text" id="num" value="1" /><img src="img/goodsJia.jpg" id="jia" alt=""></div></li>
				<li class="goodsLJ"><input type="button" value="立即购买"/></li>
				<li class="goodsCar"><input type="button" id="car" class="car BT1" value="加入购物车" /><input type="button" class="car BT2" value="分享" /></li>
			</ul>
		</div>
		<div class="goodsJS">
			<img src="`+val.beiyong3+`" alt="#"/>
		</div>
	</div>
                `;
            $(".main").append(str);




            //放大镜
            // 绑定鼠标移入原图窗口事件
            $(".imgFDJ").mouseover(function(e){
                $(".showDiv").css("display","block");
                $(".blocks").css("display","block");
            });
            //绑定鼠标在原图窗口移动的事件
            $('.imgFDJ').mousemove(function(e){
                // 获取鼠标当前的位置
                var x=e.clientX;
                var y=e.clientY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('.imgFDJ').offset().left;
                var sY=$('.imgFDJ').offset().top;
                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;
                // 获取小框框的宽高
                var mw=$('.blocks').width()/2;
                var mh=$('.blocks').height()/2;
                // 鼠标移动后小框框的移动距离
                $('.blocks').css({left:mx-mw+'px',top:my-mh+'px'});
                // 获取小框框的偏移位置
                var lw=$('.blocks').position().left;
                var lh=$('.blocks').position().top;
                // 判断边界（小框框只能在原图窗口范围内移动）
                var maxW=$('.imgFDJ').width()-$('.blocks').width()
                var maxH=$('.imgFDJ').height()-$('.blocks').height()
                // 左边界
                if(lw<=0){$('.blocks').css('left','0px');}
                // 右边界
                if(lw>=maxW){
                    $('.blocks').css('left',maxW+'px');
                }
                // 上边界
                if(lh<=0){$('.blocks').css('top','0px');}
                // 下边界
                if(lh>=maxH){
                    $('.blocks').css('top',maxH+'px');
                }
                // 获取小框框的偏移位置
                var lw=$(".blocks").position().left;
                var lh=$(".blocks").position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                var newX=lw*1.5;
                var newY=lh*1.5;
                $(".showDiv img").css({left:-newX+"px",top:-newY+"px"});
            });
            //绑定鼠标离开原图窗口事件
            $(".imgFDJ").mouseout(function(e){
                $(".showDiv").css("display","none");
                $(".blocks").css("display","none");
            });


            //数量减
            $("#jian").click(function(){
                let count = $("#num").val();
                count--;
                if(count<1){
                    return;
                }else{
                    $("#num").val(count);
                }
            });
            //数量加
            $("#jia").click(function(){
                let count = $("#num").val();
                count++;
                $("#num").val(count);
            });

            //保存购物车
            $("#car").click(function(){
                $.ajax({
                    type: "POST",
                    url: "php/addShoppingCart.php",
                    data: `goodsName=${val.goodsName}&goodsId=${val.goodsId}&goodsImg=${val.goodsImg}&goodsCount=${$("#num").val()}&goodsType=${val.goodsType}&beiyong2=${val.beiyong2}&goodsPrice=${val.goodsPrice}`,
                    success: function(data){
                        if(data=="1"){
                            alert("加入成功！");
                        }
                    }
                });
            });
        }
    });
}