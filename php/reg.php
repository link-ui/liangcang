<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$id = $_POST['id'];
	$pw = $_POST['pw'];

	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		//die("连接失败".mysql_error());
		//三、响应
	}else{
		//2、选择数据库
		mysql_select_db("liangcang",$conn);

		//3、执行SQL语句
		//3.1 查询
		$sqlstr="select * from userInfo where userId='$id'";
		$result = mysql_query($sqlstr,$conn);//执行查询SQL语句，返回值是表格
		$rows = mysql_num_rows($result);//返回$result表格有几行。
		if($rows==0){
			//3.2保存
			$sqlstr="insert into userInfo values('$id','$pw')";
			$result = mysql_query($sqlstr,$conn);
			//4、关闭数据库
			mysql_close($conn);
			if($result==1){
				//三、响应
				echo "1";  //注册成功
			}else{
				echo "2";  //注册失败.
			}
		}else{
			echo "3";  //用户名已经存在
		}
	}
?>