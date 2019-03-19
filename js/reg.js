window.onload = function(){
    //验证码随机
    $(".yzmBox")[0].onclick = function(){
        let getstr = '';
        for(let i=0;i<4;i++){
            getstr += "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVW"[parseInt(Math.random()*50)];
        }
        $(".yzmBox").html(getstr);
    };

    //用户名正则验证
    $(".regInputPhone").blur(function(){
        let reg = /^1[3-9]\d{9}$/i;
        if(reg.test($(this).val())==false){
            $("#regP").css({display:"block"});
            $("#regP").html("手机号有误！请重新输入");
        }else{
            $("#regP").css({display:"none"});
        }
    });

    //验证码验证
    $(".regInputMa").blur(function(){
        let str = $(".yzmBox").html();
        if($(".regInputMa").val()!=str){
            $("#regM").css({display:"block"});
            $("#regM").html("验证码有误！请重新输入");
        }else{
            $("#regM").css({display:"none"});
        }
    });

    //密码验证
    $(".pw1").blur(function(){
        let reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/i;
        if(reg.test($(this).val())==false){
            $("#regPW1").css({display:"block"});
            $("#regPW1").html("密码有误！请重新输入");
        }else{
            $("#regPW1").css({display:"none"});
        }
    });

    //密码重复验证
    $(".pw2").blur(function(){
        if($(".pw1").val()!=$(".pw2").val()){
            $("#regPW2").css({display:"block"});
            $("#regPW2").html("密码不一致！请重新输入");
        }else{
            $("#regPW2").css({display:"none"});
        }
    });

    //ajax发送注册
    $(".regBtn").click(function(){
        let vipId = $(".regInputPhone").val();
        let vipPw = $(".pw1").val();
        let pwTwo = $(".pw2").val();
        if(vipPw == pwTwo && vipId!=""){
            $.ajax({
                type:"post",
                url:"php/reg.php",
                data:{id:vipId, pw:vipPw},
                success:function(data){
                    console.log(data);
                    if(data=="1"){
                        alert("注册成功！")
                        window.location.href="login.html";
                    }else if(data=="2"){
                        alert("注册失败请重新注册~");
                    }else if(data=="3"){
                        alert("用户名或密码重复，请重新注册~")
                    }
                }
            });
        }
    });
}
