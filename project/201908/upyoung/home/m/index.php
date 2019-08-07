<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : index.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	$_SESSION['user_card']=null;
?>
<html>
<head>
	<title>後端管理系統</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel=stylesheet type="text/css" href="css/typeset.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script Language = "javascript">
	<!--
	function chk_submit(obj){	
		if(obj.xaccount.value == ""){
			alert("請輸入帳號！");
			return false;
		}
		if(obj.xpassword.value == ""){
			alert("請輸入密碼！");
			return false;
		}
		obj.submit();
		return true;
	}
	$(function (){
		$('#xaccount').keydown(function(event){
			if(event.keyCode == 13)
				$('#xpassword').focus();
		});
		$('#xpassword').keydown(function(event){
			if(event.keyCode == 13)
				$('#Login2').click();
		});
	});
	//-->
	</script>
	<style type="text/css">
	body{font-size:14px;background-color:#FFF;}
	table,td{vertical-align:middle;}
	</style>
</head>
<body onLoad="document.form1.xaccount.focus();">
<form name="form1" method="post" action="login.php" width="100">
  <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" valign="middle">
      <table width="353" cellpadding="5" cellspacing="0" style="border:1px solid #000;">
        <tr style="background:#eeeeee;"> 
          <td height="20" align="center">上洋產業股份有限公司(後端管理系統)</td>
        </tr>
        <tr> 
          <td height="80" align="center">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr> 
                <td height="24" align="right" valign="middle">帳號：</td>
                <td width="190" align="center"><input name="xaccount" id="xaccount" type="text" style="width:180px;height:19px"></td>
                <td>&nbsp;</td>
              </tr>
              <tr> 
                <td height="24" align="right" valign="middle">密碼：</td>
                <td align="center"><input name="xpassword" id="xpassword" type="password" style="width:180px;height:19px"></td>
                <td><input name="Login2" id="Login2" type="button" onClick="chk_submit(this.form);" value="登入"></td>
              </tr>
            </table>
            <font color="#FF0000" size=2><?php
				if( isset($_SESSION['error_id']) && $_SESSION['error_id']==1 )
					echo '帳號或密碼錯誤！';
				else if( isset($_SESSION['error_id']) && $_SESSION['error_id']==2 )
					echo '登入帳號被停用！';
				$_SESSION['error_id']=null;
			?></font>
          </td>
        </tr>
      </table>
      </td>
    </tr>
  </table>
</form>
</body>
</html>