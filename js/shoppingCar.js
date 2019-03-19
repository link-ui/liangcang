
window.onload = function(){
    $(".top").load("top.html");
    $(".footer").load("bottom.html");
    $.ajax({
        type:"get",
        url:"php/getGoodsInfo.php",
        success:function(data){
            createUI(data);
        }
    });
};
function createUI(data){
    let goodsJson = jQuery.parseJSON(data);
    for(let i=0;i<goodsJson.length;i++){
        let str = `
                <tr class="list2">
                    <td valign="top"><input type="checkbox" onclick=""/><a href="javascript:;" class="imgcon"><img src="${goodsJson[i].goodsImg}" alt="#"/></a></td>
                    <td class="txt1"><p class="t"><a href="">${goodsJson[i].beiyong2}</a></p><p class="b">类型：${goodsJson[i].goodsType}；</p></td>
                    <td><img src="img/jian.jpg" class="opt jian" alt="#"/><input type="text" class="num2" value="${goodsJson[i].goodsCount}" readonly /><img src="img/jia.jpg" class="opt jia" alt="#"/></td>
                    <td>${goodsJson[i].goodsPrice}</td>
                    <td class="xiaoji">${goodsJson[i].goodsPrice * goodsJson[i].goodsCount}</td>
                    <td><a href="javascript:;" class="blue">删除</a></td>
                </tr>
            `;
        $(".carTab").find("tbody").append(str);
        Totalmoney()
    }

    //购物车的计算
    //加商品
    $(".jia").each(function(){
        $(this).click(function(){
            let count = $(this).prev().val();
            count++;
            $(this).prev().val(count);
            let price = parseFloat($(this).parent().next().text());
            let money = count * price;
            $(this).parent().next().next().text(money);
            Totalmoney()
        });
    });

    //减商品
    $(".jian").each(function(){
        $(this).click(function(){
            let count = $(this).next().val();
            count--;
            if(count<1){
                return;
            }else{
                $(this).next().val(count);
                let price = parseFloat($(this).parent().next().text());
                let money = count * price;
                $(this).parent().next().next().text(money);
                Totalmoney();
            }
        });
    });

    //删商品
    $(".blue").each(function(){
        $(this).click(function(){
            $(this).parent().parent().remove();
            Totalmoney();
        });
    });

    //全选
    $(function(){
        $(".chkbox").click(function(){
            $(".list2 :checkbox").checkAll(this.checked);
        });
    });
}



//计算总价
function Totalmoney(){
    let gpu = 0;
    $(".carTab tr:gt(0)").each(function(){
        gpu += parseFloat($(this).children("td:eq(4)").text());
    });
    $(".price").text(gpu);
}

//全选反选插件
jQuery.fn.extend({
    //全选
    checkAll:function(isCheck){
        // this: this所在函数是对象的方法，this是就是jQuery对象
        this.each(function(){
            // this :循环过程中的每个DOM
            this.checked = isCheck;
        });
    },
    //反选：
    unCheck:function(){
        this.each(function(){
            this.checked = !this.checked;
        });
    }
});