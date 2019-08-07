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

	if( isset($_GET['dpk']) ){  //刪除、已處理、未處理
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
				$sql='update '.$mtable.' set mmark=\'1\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='已處理：'.$$mfname;
			}else if( isset($_GET['vif']) && $_GET['vif']=='2' ){
				$sql='update '.$mtable.' set mmark=\'0\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='未處理：'.$$mfname;
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
$(':checkbox').eq(0).click(function(){if($(this).prop("checked")){$('input:checkbox[name="idbox[]"]').each(function(){if(!$(this).prop('checked')){$(this).prop('checked', true);}});}else{$('input:checkbox[name="idbox[]"]').each(function(){if($(this).prop('checked')){$(this).prop('checked', false);}});}});$('input:checkbox[name="idbox[]"]').click(function(){if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length){$(':checkbox').eq(0).prop('checked', true);}else{$(':checkbox').eq(0).prop('checked', false);}});
//-->
</script>
<div id="add_button" style="width:200px;">顯示 <select id="smshow" name="smshow" onchange="search_word('<?php echo $page_link.'?t_p='.$t_p.'&spaget='.$page_total.'&vpage=1';?>',1)">
	<option value="">全部</option>
	<option value="0" <?php echo ($nmhow=='0')?'selected':'';?>>未處理</option>
	<option value="1" <?php echo ($nmhow=='1')?'selected':'';?>>已處理</option>
</select></div>
<div id="search_div">
	<select id="smkey" name="smkey">
		<?php
			$count=sizeof($msvalue);
			for( $i=0;$i<$count;$i++ ){
				echo '<option value="'.$msvalue[$i].'"';
				if( $nmkey==$msvalue[$i] )
					echo ' selected';
				echo '>'.$msname[$i].'</option>';
			}
		?>
	</select>
	<input type="text" id="smcon" name="smcon" size="20" value="<?php echo $nmcon;?>"> <font class="mouse_over" onclick="search_word('<?php echo $page_link.'?t_p='.$t_p.'&spaget='.$page_total.'&vpage=1';?>');">搜尋</font>
</div>
<table width="100%" class="table_list">
	<tr class="tlist_tr">
		<td class="tlist_td1" width="32" align="center"><input type="checkbox" value="all"></td>
		<td class="tlist_td1" width="40" align="center">已處理</td>
		<td class="tlist_td1" width="90" align="center">姓名</td>
		<td class="tlist_td1" width="80" align="center">詢問項目</td>
		<td class="tlist_td1" width="" align="center">E-mail</td>
		<td class="tlist_td1" width="" align="center">聯絡電話</td>
		<td class="tlist_td1" width="125" align="center">詢問日期</td>
		<td class="tlist_td1 tlist_td2" width="68" align="center">操作</td>
	</tr>
<?php
	$td_end='';
	$sql='select * from '.$mtable.' ';
	if( $nmhow!='' || ($nmkey!='' && $nmcon!='') ){
		$sql.=' where';
		if( $nmhow!='' ){
			if( $nmhow=='1' )
				$sql.=' mmark=\'1\' ';
			else
				$sql.=' mmark!=\'1\' ';
		}
		if( $nmkey!='' && $nmcon!='' && $nmhow!='' )
			$sql.=' and ';
		if( $nmkey!='' && $nmcon!='' )
			$sql.=' '.De_CSA($nmkey).' like "%'.De_CSA($nmcon).'%" ';
	}
	$sql.=' order by date_create desc ';
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
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="<?php echo $record['cid'];?>"></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><?php echo ($record['mmark'])?'<font color="red">■</font>':'□';?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mname']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['msubject']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mmail']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mtel']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['date_create']);?></td>
		<td class="tlist_td1 tlist_td2<?php echo $td_end;?>"><?php echo button_show(3,$medit,$page_link_edit.'?t_p='.$t_p.'&'.$mpk.'='.$record[$mpk].'&smhow='.$nmhow.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'&vpage='.$page_now.'&TB_iframe=true&height='.$mheight.'&width='.$mwidth).button_show(0,$mdele,'click_page(\''.$page_link.'?t_p='.$t_p.'&smhow='.$nmhow.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.','.$record[$mpk].')');?></td>
	</tr>
<?php
		}
	}else{
?>
	<tr>
		<td class="tlist_td1 tlist_td2 tlist_td3" colspan="8" align="center">暫無資料</td>
	</tr>
<?php
	}
?>
</table>
<table width="100%" style="margin-top:2px;">
	<tr>
		<td><?php echo select_show($page_link.'?t_p='.$t_p.'&smhow='.$nmhow.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'&vpage='.$page_now,1,$medit,$mdele,array('已處理','未處理','刪除'));?></td>
		<td align="right"><?php echo page_out($page_link.'?t_p='.$t_p.'&smhow='.$nmhow.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon),$page_now,$pagenum,$page_group,$page_num);?></td>
	</tr>
</table>
<?php
	$result->disable();
?>