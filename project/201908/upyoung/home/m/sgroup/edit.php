<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : edit.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', '../php/');

	include('../common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');
	include('mcommon.php');

	decide_online($_SESSION['user_card']);  //判斷有無登入
	$result=new mysql;
	$result->connection($DB_common);

	if( $_GET[$mpk]!='' && is_numeric($_GET[$mpk]) )
		$$mpk=$_GET[$mpk];
	else
		$$mpk=0;

	if( ($medit==0 && $$mpk!=0) || ($madd==0 && $$mpk==0) )
		die('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">權限不足');

	if( isset($_POST['vif']) && $_POST['vif']=='1' ){
		if( $_POST['mlevel'] && is_numeric($_POST['mlevel']) && $_SESSION['user_card'][3]<$_POST['mlevel'] ){

			$$mfname=De_CSA($_POST[$mfname]);
			$mlevel=De_CSA($_POST['mlevel']);
			$mnote=De_CSA($_POST['mnote']);
			$now_date=date('Y-m-d H:i:s');
			$sql='select * from '.$mtable.' where '.$mpk.'!=\''.$$mpk.'\' and '.$mfname.'=\''.$$mfname.'\' ';
			$result->SQLrequest($sql);
			$count=$result->RowNum();
			if( $count==0 ){
				if( $$mpk==0 ){
					$sql='insert into '.$mtable.' ('.$mpk.', '.$mfname.', mnote, mlevel, date_create, date_modify) VALUES ( null, \''.$$mfname.'\', \''.$mnote.'\', \''.$mlevel.'\', \''.$now_date.'\', \''.$now_date.'\')';
					$save_note='新增：'.$$mfname;
				}else{
					$sql='update '.$mtable.' set '.$mfname.'=\''.$$mfname.'\', mlevel=\''.$mlevel.'\', mnote=\''.$mnote.'\', date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
					$save_note='修改：'.$$mfname;
				}
				$result->SQLrequest($sql);
				$save_page=$mtitle;
				if( $$mpk!='' && $$mpk!=0 )
					$save_id=$$mpk;
				else
					$save_id=$result->InsertId();
				$save_table=$mtable;
				include('../stracked/save.php');
				echo '<script language="javascript">
				<!--
				window.parent.click_page(\''.$page_link.'?t_p='.$t_p.'&spaget='.$page_total.'\','.$page_now.');
				window.parent.tb_remove();
				//-->
				</script>';
				exit;
			}else
				$message_fail='群組名稱重覆';

		}else
			$message_fail='權限設定錯誤';
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>website management system</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="../css/typeset.css">
	<script src="../js/jquery.js"></script>
	<script language="javascript">
	<!--
	function psave(){
		if($('#<?php echo $mfname;?>').val()=='' || $('#mlevel').val()=='')
			alert('群組名稱與權限等級為必填，請確實填入');
		else
			$('#cform1').submit();
	}
	//-->
	</script>
</head>
<body>
<?php
	$sql='select * from '.$mtable.' where '.$mpk.'=\''.$$mpk.'\'';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count!=1 && $$mpk!=0 ){
		echo 'error';
		exit;
	}else
		$record=$result->RowArray();
?>
<form id="cform1" name="cform1" method="POST">
	<input type="hidden" id="vif" name="vif" value="1">
	<table>
		<tr>
			<td align="right">群組名稱：</td>
			<td><input type="text" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" value="<?php if( isset($_POST[$mfname]) ){echo $_POST[$mfname];}else{echo stripslashes($record[$mfname]);}?>"></td>
		</tr>
		<tr>
			<td align="right">權限等級：</td>
			<td><input type="text" id="mlevel" name="mlevel" size="4" value="<?php if( isset($_POST['mlevel']) ){echo $_POST['mlevel'];}else{echo stripslashes($record['mlevel']);}?>"><font color="red">*數字愈小權限愈大，只能設定權限小於自已的。<br>目前帳號權限等級為 <?php echo $_SESSION['user_card'][3];?></font></td>
		</tr>
		<tr>
			<td align="right">備註：</td>
			<td><input type="text" id="mnote" name="mnote" value="<?php if( isset($_POST['mnote']) ){echo $_POST['mnote'];}else{echo stripslashes($record['mnote']);}?>"></td>
		</tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( isset($message_fail) && $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>