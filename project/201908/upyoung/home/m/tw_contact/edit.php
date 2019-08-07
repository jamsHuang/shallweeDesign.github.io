<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 上洋產業股份有限公司
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

	if( isset($_GET[$mpk]) && is_numeric($_GET[$mpk]) )
		$$mpk=$_GET[$mpk];
	else
		$$mpk=0;
	$message_fail='';

	if( $medit==0 && $$mpk!=0 )
		die('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">權限不足');

	if( isset($_POST['vif']) && $_POST['vif']=='1' ){  //修改

		$mmark=De_CSA($_POST['mmark']);
		$mname=De_CSA($_POST['mname']);
		$mnote=De_CSA($_POST['mnote']);
		$now_date=date('Y-m-d H:i:s');
		if( $$mpk!='' ){
			$sql='update '.$mtable.' set mmark=\''.$mmark.'\', mnote=\''.$mnote.'\', date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
			$save_note='修改：'.$$mfname;
		}else{
			echo 'error';
			exit;
		}
		$result->SQLrequest($sql);
		$save_page=$mtitle;
		$save_id=$$mpk;
		$save_table=$mtable;
		include('../stracked/save.php');
		echo '<script language="javascript">
		<!--
		window.parent.click_page(\''.$page_link.'?t_p='.$t_p.'&smhow='.$nmhow.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.');
		window.parent.tb_remove();
		//-->
		</script>';
		exit;

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
			<td align="right">已處理：</td>
			<td><input type="radio" id="mmark" name="mmark" value="1" <?php echo ($record['mmark'])?'checked':'';?>>是 <input type="radio" id="mmark" name="mmark" value="0" <?php echo (!$record['mmark'])?'checked':'';?>>否</td>
		</tr>
		<tr>
			<td align="right">備註：</td>
			<td><textarea id="mnote" name="mnote" rows="4" cols="50"><?php echo stripslashes($record['mnote']);?></textarea></td>
		</tr>
		<tr>
			<td align="right">詢問項目：</td>
			<td><?php echo stripslashes($record['msubject']);?></td>
		</tr>
		<tr>
			<td align="right">E-mail標題：</td>
			<td><?php echo stripslashes($record['mmailtitle']);?></td>
		</tr>
		<tr>
			<td align="right">收件E-mail：</td>
			<td><?php echo stripslashes($record['mmaillist']);?></td>
		</tr>
		<tr>
			<td align="right">姓名：</td>
			<td><?php echo stripslashes($record[$mfname]);?><input type="hidden" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" value="<?php echo stripslashes($record[$mfname]);?>"></td>
		</tr>
		<tr>
			<td align="right">E-mail：</td>
			<td><?php echo stripslashes($record['mmail']);?></td>
		</tr>
		<tr>
			<td align="right">聯絡電話：</td>
			<td><?php echo stripslashes($record['mtel']);?></td>
		</tr>
		<tr>
			<td align="right">聯絡地址：</td>
			<td><?php echo stripslashes($record['mzipcode1']).' '.stripslashes($record['mzipcode2']).' '.stripslashes($record['maddress']);?></td>
		</tr>
		<tr>
			<td valign="middle" align="right">訊息內容：</td>
			<td><?php echo nl2br(stripslashes($record['mmessage']));?></td>
		</tr>
		<tr>
			<td align="right">設備類型：</td>
			<td><?php echo stripslashes($record['mdevice']);?></td>
		</tr>
		<tr>
			<td align="right">設備型號：</td>
			<td><?php echo stripslashes($record['mcode']);?></td>
		</tr>
		<tr>
			<td valign="middle" align="right">詢問日期：</td>
			<td><?php echo nl2br(stripslashes($record['date_create']));?></td>
		</tr>
		<tr>
			<td valign="middle" align="right">修改日期：</td>
			<td><?php echo nl2br(stripslashes($record['date_modify']));?></td>
		</tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>