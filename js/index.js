window.onload = function(){
    $(".top").load("top.html");
    $(".slide").load("slide.html");
    $(".bottom").load("bottom.html");

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
    for(let i=0;i<goodsJson.length;i++){
        let str = `
            <div class="item">
                <div class="imgCon">
                    <img src="`+goodsJson[i].goodsImg+`" alt="#"/>
                    <a href="goods.html?booksId=`+goodsJson[i].goodsId+`">
                        <p class="price1">￥<span>`+goodsJson[i].goodsPrice+`</span></p>
                        <p class="goodsName">`+goodsJson[i].beiyong2+`</p>
                        <p class="pre">`+goodsJson[i].goodsDesc+`</p>
                    </a>
                </div>
                <div class="bar">
                    <a href="" class="who"><img src="`+goodsJson[i].beiyong1+`" alt="">`+goodsJson[i].goodsName+`</a>
                </div>
            </div>
            `;
        $(".goods_menu").append(str);
    }
}