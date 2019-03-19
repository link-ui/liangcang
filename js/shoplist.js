jQuery(".slideBox").slide({
    mainCell:".bd ul",
    effect:"leftLoop",
    autoPlay:true
});

window.onload = function(){
    $(".top").load("top.html");
    $(".footer").load("bottom.html");

    $(".price").hover(
        function () {
            $(this).find("ul").css({display:"block"});
        },
        function () {
            $(this).find("ul").css({display:"none"});
        }
    );

    $.ajax({
        type:"get",
        url:"php/index.php",
        success:function(data){
            createUI(data);
        }
    });
};

function createUI(data) {
    let goodsJson = jQuery.parseJSON(data);
    // console.log(goodsJson);
    for(let i=1;i<=5;i++){
        let j = i-1;
        let str = `
               <div class="item li`+i+`">
                    <img src="`+goodsJson[j].goodsImg+`" alt="">
                    <a href="goods.html?booksId=`+goodsJson[j].goodsId+`">
                        <p class="shop_name"><img src="`+goodsJson[j].beiyong1+`" alt="#"/><span>`+goodsJson[j].goodsName+`</span></p>
                        <p class="shop_price">￥`+goodsJson[j].goodsPrice+`</p>
                        <p class="shop_beiyong2">`+goodsJson[j].beiyong2+`</p>
                        <p class="shop_desc">`+goodsJson[j].goodsDesc+`</p>
                    </a>
                </div>
            `;
        $(".shopListCon").append(str);
    }
}