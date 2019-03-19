window.onload = function(){
    $(".loginLC").click(function(){
        let vipId = $(".vipId").val();
        let vipPw = $(".vipPw").val();
        $.ajax({
            type:"get",
            url:"php/login.php",
            data:{vipId:vipId,vipPw:vipPw},
            success:function(data){
                if(data=="1"){
                    alert("账号或密码错误~请重新登陆")
                }else{
                    addCookie("name",vipId,7);
                    alert("登陆成功~");
                    window.location.href="index.html";
                }
            }
        });
    });
}