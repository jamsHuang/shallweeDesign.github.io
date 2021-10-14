<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : list.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', '../php/');

	include('../common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');

	decide_online($_SESSION['user_card'],1);  //判斷有無登入
	$result=new mysql;
	$result->connection($DB_common);

	if( isset($_GET['vpage']) && is_numeric($_GET['vpage']) )
		$page_now=$_GET['vpage'];
	else
		$page_now=1;
	if( isset($_GET['t_p']) && is_numeric($_GET['t_p']) )
		$t_p=$_GET['t_p'];
	else
		die('ERROR');
	if( isset($_GET['spaget']) && is_numeric($_GET['spaget']) )
		$page_total=$_GET['spaget'];  //一頁幾筆
	else
		$page_total=10;
	$page_group=5;  //一組幾頁
	$page_link='stracked/list.php';  //列表頁

	authority_out($t_p);
	if( $mlist==0 )
		die('權限不足');

	if( isset($_GET['dpk']) ){  //刪除
		$dpk=De_CSA($_GET['dpk']);
		$sql='delete from '.$table_tracked.' where id in ('.$dpk.')';
		$result->SQLrequest($sql);
	}
?>
<script language="javascript">
<!--
$(':checkbox').eq(0).click(function(){if($(this).prop('checked')){$('input:checkbox[name="idbox[]"]').each(function(){if(!$(this).prop('checked')){$(this).prop('checked', true);}});}else{$('input:checkbox[name="idbox[]"]').each(function(){if($(this).prop('checked')){$(this).prop('checked', false);}});}});$('input:checkbox[name="idbox[]"]').click(function(){if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length){$(':checkbox').eq(0).prop('checked', true);}else{$(':checkbox').eq(0).prop('checked', false);}});
//-->
</script>
<div id="add_button"></div>
<table width="100%" class="table_list">
	<tr class="tlist_tr">
		<td class="tlist_td1" width="32" align="center"><input type="checkbox" value="all"></td>
		<td class="tlist_td1" width="100" align="center">帳號</td>
		<td class="tlist_td1" width="100" align="center">修改頁面</td>
		<td class="tlist_td1" width="" align="center">修改說明</td>
		<td class="tlist_td1" width="130" align="center">建立日期</td>
		<td class="tlist_td1 tlist_td2" width="35" align="center">操作</td>
	</tr>
<?php
	$td_end='';
	$sql='select * from '.$table_tracked.' order by date_create desc ';
	$result->SQLrequest($sql);
	$page_num=$result->RowNum();
	$pagenum=ceil($page_num/$page_total);
	if( $page_now>$pagenum && $pagenum>0 )
		$page_now=$pagenum;
	$sql.=' limit '.(($page_now-1)*$page_total).','.$page_total;
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			if( $i==($count-1) )
				$td_end=' tlist_td3';
?>
	<tr>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="<?php echo $record['id'];?>"></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mname']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mpage']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mnote']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['date_create']);?></td>
		<td class="tlist_td1 tlist_td2<?php echo $td_end;?>"><?php echo button_show(0,$mdele,'click_page(\''.$page_link.'?t_p='.$t_p.'&spaget='.$page_total.'\','.$page_now.','.$record['id'].')');?></td>
	</tr>
<?php
		}
	}else
		echo '<tr><td class="tlist_td1 tlist_td2 tlist_td3" colspan="6" align="center">暫無資料</td></tr>';
?>
</table>
<table width="100%" style="margin-top:2px;">
	<tr>
		<td><?php echo select_show($page_link.'?t_p='.$t_p.'&spaget='.$page_total.'&vpage='.$page_now,0,$medit,$mdele);?></td>
		<td align="right"><?php echo page_out($page_link.'?t_p='.$t_p,$page_now,$pagenum,$page_group,$page_num);?></td>
	</tr>
</table>
<?php
	$result->disable();
?>