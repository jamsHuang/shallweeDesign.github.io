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

	if( isset($_GET[$mpk]) && is_numeric($_GET[$mpk]) )
		$$mpk=$_GET[$mpk];
	else
		$$mpk=0;
	$message_fail='';

	if( ($medit==0 && $$mpk!=0)  || ($madd==0 && $$mpk==0) )
		die('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">權限不足');

	if( isset($_POST['vif']) && $_POST['vif']=='1' ){  //新增、修改

		$mgid=De_CSA($_POST['mgid']);
		$menable=De_CSA($_POST['menable']);
		$maccount=De_CSA($_POST['maccount']);
		$mpassword = md5(crypt($_POST['mpassword1'],'bz'));
		$pass_str='';
		if( isset($_POST['mchange']) && $_POST['mchange']=='1' )
			$pass_str='mpassword=\''.$mpassword.'\', ';
		$$mfname=De_CSA($_POST[$mfname]);
		$mnote=De_CSA($_POST['mnote']);
		$memail=De_CSA($_POST['memail']);
		$now_date=date('Y-m-d H:i:s');
		$sql='select * from '.$mtable.' where '.$mpk.'!=\''.$$mpk.'\' and maccount=\''.$maccount.'\' ';
		$result->SQLrequest($sql);
		$count=$result->RowNum();
		if( $count==0 ){
			if( $$mpk==0 ){
				$sql='insert into '.$mtable.' ('.$mpk.', gid, menable, maccount, mpassword, '.$mfname.', mnote, memail, date_create, date_modify) VALUES ( null, \''.$mgid.'\', \''.$menable.'\', \''.$maccount.'\', \''.$mpassword.'\', \''.$$mfname.'\', \''.$mnote.'\', \''.$memail.'\', \''.$now_date.'\', \''.$now_date.'\')';
				$save_note='新增：'.$maccount;
			}else{
				$sql='update '.$mtable.' set gid=\''.$mgid.'\', menable=\''.$menable.'\', maccount=\''.$maccount.'\', '.$pass_str.$mfname.'=\''.$$mfname.'\', mnote=\''.$mnote.'\', memail=\''.$memail.'\', date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
				$save_note='修改：'.$maccount;
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
			window.parent.click_page(\''.$page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.');
			window.parent.tb_remove();
			//-->
			</script>';
			exit;
		}else
			$message_fail='帳號重覆';

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
		if($('#mchange').length){
			if($('input[name*=mchange]:radio:checked').val()=='1'){
				if($('#maccount').val()=='' || $('#mpassword1').val()=='' || $('#mpassword2').val()=='' || $('#<?php echo $mfname;?>').val()=='' || $('#memail').val()=='')
					alert('帳號、密碼、確認密碼、姓名、E-mail為必填資料，請確實填入');
				else if($('#mpassword1').val()==$('#mpassword2').val())
					$('#cform1').submit();
				else
					alert('密碼與確認密碼不相同，請重新輸入');
			}else{
				if($('#maccount').val()=='' || $('#<?php echo $mfname;?>').val()=='' || $('#memail').val()=='')
					alert('帳號、姓名、E-mail為必填資料，請確實填入');
				else
					$('#cform1').submit();
			}
		}else{
			if($('#maccount').val()=='' || $('#mpassword1').val()=='' || $('#mpassword2').val()=='' || $('#<?php echo $mfname;?>').val()=='' || $('#memail').val()=='')
				alert('帳號、密碼、確認密碼、姓名、E-mail為必填資料，請確實填入');
			else if($('#mpassword1').val()==$('#mpassword2').val())
				$('#cform1').submit();
			else
				alert('密碼與確認密碼不相同，請重新輸入');
		}
	}
	$(function (){$('input[name*=mchange]:radio').change(function(){if($(this).val()=='1'){$('#dpass1').show();$('#dpass2').show();}else{$('#dpass1').hide();$('#dpass2').hide();}});});
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
	if( $record['menable'] || (isset($_POST['menable']) && $_POST['menable']) ){
		$menable1='checked';
		$menable2='';
	}else{
		$menable1='';
		$menable2='checked';
	}
	if( isset($_POST['mchange']) && $_POST['mchange'] ){
		$mchange1='checked';
		$mchange2='';
	}else{
		$mchange1='';
		$mchange2='checked';
	}
?>
<form id="cform1" name="cform1" method="POST">
	<input type="hidden" id="vif" name="vif" value="1">
	<table>
		<tr>
			<td align="right">啟用：</td>
			<td><label><input type="radio" id="menable" name="menable" value="1" <?php echo $menable1;?>>是</label> <label><input type="radio" id="menable" name="menable" value="0" <?php echo $menable2;?>>否</label></td>
		</tr>
		<tr>
			<td align="right">帳號：</td>
			<td><input type="text" id="maccount" name="maccount" value="<?php if( isset($_POST['maccount']) ){echo $_POST['maccount'];}else{echo stripslashes($record['maccount']);}?>"></td>
		</tr>
<?php
	$dispaly_if=1;
	if( $$mpk!='' && $$mpk!=0 ){
		$dispaly_if=0;
?>
		<tr>
			<td align="right">修改密碼：</td>
			<td><label><input type="radio" id="mchange" name="mchange" value="1" <?php echo $mchange1;?>>是</label> <label><input type="radio" id="mchange" name="mchange" value="0" <?php echo $mchange2;?>>否</label></td>
		</tr>
<?php
		if( $mchange1=='checked' ){$dispaly_if=1;}
	}
?>
		<tr id="dpass1" style="<?php echo ($dispaly_if)?'':'display:none;';?>">
			<td align="right">密碼：</td>
			<td><input type="password" id="mpassword1" name="mpassword1" size="24" maxlength="12"><font color="red"> 最多12個字</font></td>
		</tr>
		<tr id="dpass2" style="<?php echo ($dispaly_if)?'':'display:none;';?>">
			<td align="right">確認密碼：</td>
			<td><input type="password" id="mpassword2" name="mpassword2" size="24" maxlength="12"></td>
		</tr>
		<tr>
			<td align="right">姓名：</td>
			<td><input type="text" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" value="<?php if( isset($_POST[$mfname]) ){echo $_POST[$mfname];}else{echo stripslashes($record[$mfname]);}?>"></td>
		</tr>
		<tr>
			<td align="right">E-mail：</td>
			<td><input type="text" id="memail" name="memail" value="<?php if( isset($_POST['memail']) ){echo $_POST['memail'];}else{echo stripslashes($record['memail']);}?>"></td>
		</tr>
		<tr>
			<td align="right">說明：</td>
			<td><input type="text" id="mnote" name="mnote" value="<?php if( isset($_POST['mnote']) ){echo $_POST['mnote'];}else{echo stripslashes($record['mnote']);}?>"></td>
		</tr>
		<tr>
			<td align="right">群組：</td>
			<td><select id="mgid" name="mgid">
<?php
	$mgid=(isset($_POST['mgid']))?$_POST['mgid']:$record['gid'];
	$sql='select * from '.$table_group.' where mlevel>='.$_SESSION['user_card'][3].' order by mlevel asc ';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
?>
				<option value="<?php echo $record['gid'];?>" <?php echo ($record['gid']==$mgid)?'selected':'';?>><?php echo stripslashes($record[$mfname]);?></option>
<?php
		}
	}
?>
			</select></td>
		</tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>