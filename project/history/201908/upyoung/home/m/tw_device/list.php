<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 上洋產業股份有限公司
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
	include('mcommon.php');

	decide_online($_SESSION['user_card'],1);  //判斷有無登入
	$result=new mysql;
	$result->connection($DB_common);

	if( $mlist==0 )
		die('權限不足');

	if( isset($_GET['dpk']) ){  //刪除、啟用、停用
		$now_date=date('Y-m-d H:i:s');
		$dpk=De_CSA($_GET['dpk']);
		$sql='select '.$mfname.' from '.$mtable.' where '.$mpk.' in ('.$dpk.')';
		$result->SQLrequest($sql);
		$count=$result->RowNum();
		$$mfname='';
		if( $count>0 ){
			for( $i=0;$i<$count;$i++ ){
				$record=$result->RowArray();
				if( $$mfname!='' )
					$$mfname.='、';
				$$mfname.=stripslashes($record[0]);
			}
			if( isset($_GET['vif']) && $_GET['vif']=='1' ){
				$sql='update '.$mtable.' set menable=\'1\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='啟用：'.$$mfname;
			}else if( isset($_GET['vif']) && $_GET['vif']=='2' ){
				$sql='update '.$mtable.' set menable=\'0\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='停用：'.$$mfname;
			}else{
				$sql='delete from '.$mtable.' where '.$mpk.' in ('.$dpk.')';
				$save_note='刪除：'.$$mfname;
			}
			$result->SQLrequest($sql);
			$save_page=$mtitle;
			$save_id=$dpk;
			$save_table=$mtable;
			include('../stracked/save.php');
		}
	}
?>
<script language="javascript">
<!--
$(':checkbox').eq(0).click(function(){if($(this).prop('checked')){$('input:checkbox[name="idbox[]"]').each(function(){if(!$(this).prop('checked')){$(this).prop('checked', true);}});}else{$('input:checkbox[name="idbox[]"]').each(function(){if($(this).prop('checked')){$(this).prop('checked', false);}});}});$('input:checkbox[name="idbox[]"]').click(function(){if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length){$(':checkbox').eq(0).prop('checked', true);}else{$(':checkbox').eq(0).prop('checked', false);}});
//-->
</script>
<div id="add_button"><?php echo button_show(1,$madd,$page_link_edit.'?t_p='.$t_p.'&'.$mpk.'=0&spaget='.$page_total.'&vpage='.$page_now.'&TB_iframe=true&height='.$mheight.'&width='.$mwidth);?></div>
<table width="100%" class="table_list">
	<tr class="tlist_tr">
		<td class="tlist_td1" width="32" align="center"><input type="checkbox" value="all"></td>
		<td class="tlist_td1" width="30" align="center">啟用</td>
		<td class="tlist_td1" width="" align="center">設備類型</td>
		<td class="tlist_td1 tlist_td2" width="68" align="center">操作</td>
	</tr>
<?php
	$td_end='';
	$sql='select * from '.$mtable.' order by msort desc ';
	$result->SQLrequest($sql);
	$page_num=$result->RowNum();
	$pagenum=ceil($page_num/$page_total);
	if( $page_now>$pagenum && $pagenum>0 )
		$page_now=$pagenum;
	$sql='select * from '.$mtable.' order by msort desc limit '.(($page_now-1)*$page_total).','.$page_total;
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			if( $i==($count-1) )
				$td_end=' tlist_td3';
?>
	<tr>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="<?php echo $record[$mpk];?>"></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><?php echo ($record['menable'])?'<font color="red">■</font>':'□';?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record[$mfname]);?></td>
		<td class="tlist_td1 tlist_td2<?php echo $td_end;?>"><?php echo button_show(2,$medit,$page_link_edit.'?t_p='.$t_p.'&'.$mpk.'='.$record[$mpk].'&spaget='.$page_total.'&vpage='.$page_now.'&TB_iframe=true&height='.$mheight.'&width='.$mwidth).button_show(0,$mdele,'click_page(\''.$page_link.'?t_p='.$t_p.'&spaget='.$page_total.'\','.$page_now.','.$record[$mpk].')');?></td>
	</tr>
<?php
		}
	}else{
?>
	<tr>
		<td class="tlist_td1 tlist_td2 tlist_td3" colspan="4" align="center">暫無資料</td>
	</tr>
<?php
	}
?>
</table>
<table width="100%" style="margin-top:2px;">
	<tr>
		<td><?php echo select_show($page_link.'?t_p='.$t_p.'&spaget='.$page_total.'&vpage='.$page_now,1,$medit,$mdele);?></td>
		<td align="right"><?php echo page_out($page_link.'?t_p='.$t_p,$page_now,$pagenum,$page_group,$page_num);?></td>
	</tr>
</table>
<?php
	$result->disable();
?>