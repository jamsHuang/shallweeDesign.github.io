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

	if( ($medit==0 && $$mpk!=0)  || ($madd==0 && $$mpk==0) )
		die('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">權限不足');

	if( isset($_POST['vif']) && $_POST['vif']=='1' ){  //新增、修改

		$menable=De_CSA($_POST['menable']);
		$$mfname=De_CSA($_POST[$mfname]);
		$mmailtitle=De_CSA($_POST['mmailtitle']);
		$mmaillist=De_CSA($_POST['mmaillist']);
		$sorttype=De_CSA($_POST['sorttype']);
		$msort_str='';
		if( $sorttype==0 ){
			$msort_str='';
		}else if( $sorttype==1 ){
			$sql='select msort from '.$mtable.' order by msort desc limit 0,1 ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=($record[0]+1);
			$msort_str='msort=\''.$msort.'\', ';
		}else if( $sorttype==2 ){
			$sql='select msort from '.$mtable.' order by msort asc limit 0,1 ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=($record[0]-1);
			$msort_str='msort=\''.$msort.'\', ';
		}else{
			$numup=De_CSA($_POST['numup']);
			$sql='select msort from '.$mtable.' where '.$mpk.'=\''.$numup.'\' ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=$record[0];
			$msort_str='msort=\''.$msort.'\', ';
			$sql='update '.$mtable.' set msort=msort+1 where msort>='.$msort.' ';
			$result->SQLrequest($sql);
		}
		$now_date=date('Y-m-d H:i:s');
		if( $$mpk==0 ){
			$sql='insert into '.$mtable.' ('.$mpk.', menable, '.$mfname.', mmailtitle, mmaillist, msort, date_create, date_modify) VALUES ( null, \''.$menable.'\', \''.$$mfname.'\', \''.$mmailtitle.'\', \''.$mmaillist.'\', \''.$msort.'\', \''.$now_date.'\', \''.$now_date.'\')';
			$save_note='新增：'.$$mfname;
		}else{
			$sql='update '.$mtable.' set menable=\''.$menable.'\', '.$mfname.'=\''.$$mfname.'\', mmailtitle=\''.$mmailtitle.'\', mmaillist=\''.$mmaillist.'\', '.$msort_str.'date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
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
		if($('#<?php echo $mfname;?>').val()=='' || $('#mmailtitle').val()=='' || $('#mmaillist').val()=='')
			alert('主旨、E-mail標題、E-mail為必填資料，請確實填入');
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
	$sorttype1='';
	$sorttype2='';
	$sorttype3='';
	$sorttype4='';
	if( isset($_POST['sorttype']) && $_POST['sorttype']==='0' ){
		$sorttype1='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==1 ){
		$sorttype2='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==2 ){
		$sorttype3='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==3 ){
		$sorttype4='checked';
	}else{
		if( $$mpk!='' && $$mpk!=0 )
			$sorttype1='checked';
		else
			$sorttype2='checked';
	}
?>
<form id="cform1" name="cform1" method="POST">
	<input type="hidden" id="vif" name="vif" value="1">
	<table>
		<tr>
			<td align="right">啟用：</td>
			<td><input type="radio" id="menable" name="menable" value="1" <?php echo ($record['menable'])?'checked':'';?>>是 <input type="radio" id="menable" name="menable" value="0" <?php echo (!$record['menable'])?'checked':'';?>>否</td>
		</tr>
		<tr>
			<td align="right">主旨：</td>
			<td><input type="text" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" size="30" value="<?php echo stripslashes($record[$mfname]);?>"></td>
		</tr>
		<tr>
			<td align="right">E-mail標題：</td>
			<td><input type="text" id="mmailtitle" name="mmailtitle" size="30" value="<?php echo stripslashes($record['mmailtitle']);?>"></td>
		</tr>
		<tr>
			<td align="right">E-mail：</td>
			<td><input type="text" id="mmaillist" name="mmaillist" size="75" value="<?php echo stripslashes($record['mmaillist']);?>"><br><font style="color:red;">&lt;E-mail帳號之間請用小寫的 , 隔開&gt;</font></td>
		</tr>
<?php
	$sql='select * from '.$mtable.' where '.$mpk.'!=\''.$$mpk.'\' order by msort desc ';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
?>
		<tr <?php echo ($count==0)?'style="display:none;"':'';?>>
			<td align="right">排序：</td>
			<td><table align="left">
				<?php if( $$mpk!='' && $$mpk!=0 ){?><tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype1;?> value="0"></td><td>不變</td></tr><?php }?>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype2;?> value="1"></td><td>第一筆</td></tr>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype3;?> value="2"></td><td>最後一筆</td></tr>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype4;?> value="3"></td><td>於 <select id="numup" name="numup">
					<?php
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			echo '<option value="'.$record[$mpk].'">'.stripslashes($record[$mfname]).'</option>';
		}
	}
					?>
				</select> 之後</td></tr>
			</table></td>
		</tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>