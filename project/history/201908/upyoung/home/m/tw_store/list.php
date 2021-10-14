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
		if( is_array($mfile) )
			$sql='select '.$mfname.','.implode(',',$mfile).' from '.$mtable.' where '.$mpk.' in ('.$dpk.')';
		else
			$sql='select '.$mfname.' from '.$mtable.' where '.$mpk.' in ('.$dpk.')';
		$result->SQLrequest($sql);
		$count=$result->RowNum();
		$$mfname='';
		if( is_array($mfile) )
			for( $n=0;$n<sizeof($mfile);$n++ )
				$$mfile[$n]=array();
		if( $count>0 ){
			for( $i=0;$i<$count;$i++ ){
				$record=$result->RowArray();
				if( $$mfname!='' )
					$$mfname.='、';
				$$mfname.=stripslashes($record[0]);
				if( is_array($mfile) ){
					for( $n=0;$n<sizeof($mfile);$n++ )
						array_push($$mfile[$n],$record[$mfile[$n]]);
				}
			}
			if( isset($_GET['vif']) && $_GET['vif']=='1' ){
				$sql='update '.$mtable.' set menable=\'1\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='啟用：'.$$mfname;
			}else if( isset($_GET['vif']) && $_GET['vif']=='2' ){
				$sql='update '.$mtable.' set menable=\'0\', date_modify=\''.$now_date.'\' where '.$mpk.' in ('.$dpk.')';
				$save_note='停用：'.$$mfname;
			}else{
				if( is_array($mfile) )
					for( $i=0;$i<sizeof($iimage);$i++ )
						for( $n=0;$n<sizeof($mfile);$n++ )
							@unlink($sys_updata_home.$$mfile[$n][$i]);
				$sql='delete from '.$mtable.' where '.$mpk.' in ('.$dpk.')';
				$save_note='刪除：'.$$mfname;
			}
			$result->SQLrequest($sql);
			$save_page=$page_title;
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
<div id="add_button"><?php echo button_show(1,$madd,$page_link_edit.'?t_p='.$t_p.'&'.$mpk.'=0&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'&vpage='.$page_now.'&TB_iframe=true&height='.$mheight.'&width='.$mwidth);?></div>
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
		<td class="tlist_td1" width="30" align="center">啟用</td>
		<td class="tlist_td1" width="170" align="center">店名</td>
		<td class="tlist_td1" width="110" align="center">電話</td>
		<td class="tlist_td1" width="50" align="center">縣市</td>
		<td class="tlist_td1" width="50" align="center">區域</td>
		<td class="tlist_td1" width="" align="center">地址</td>
		<td class="tlist_td1 tlist_td2" width="68" align="center">操作</td>
	</tr>
<?php
	$td_end='';
	$city_array=array();
	$area_array=array();
	$city_array[0]='';
	$area_array[0]='';
	$sql='select * from '.$table_zipcode.' order by id asc ';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			if( !isset($city_array[$record['aid']]) )
				$city_array[$record['aid']]=stripslashes($record['city']);
			$area_array[$record['id']]=stripslashes($record['area']);
		}
	}
	$sql='select * from '.$mtable.' ';
	if( $nmkey!='' && $nmcon!='' )
		$sql.=' where '.De_CSA($nmkey).' like "%'.De_CSA($nmcon).'%"';
	$sql.=' order by msort desc ';
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
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="<?php echo $record[$mpk];?>"></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><?php echo ($record['menable'])?'<font color="red">■</font>':'□';?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record[$mfname]);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['mtel']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo $city_array[$record['mzipcode1']];?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo $area_array[$record['mzipcode2']];?></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record['maddress']);?></td>
		<td class="tlist_td1 tlist_td2<?php echo $td_end;?>"><?php echo button_show(2,$medit,$page_link_edit.'?t_p='.$t_p.'&'.$mpk.'='.$record[$mpk].'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'&vpage='.$page_now.'&TB_iframe=true&height='.$mheight.'&width='.$mwidth).button_show(0,$mdele,'click_page(\''.$page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.','.$record[$mpk].')');?></td>
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
		<td><?php echo select_show($page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'&vpage='.$page_now,1,$medit,$mdele);?></td>
		<td align="right"><?php echo page_out($page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon),$page_now,$pagenum,$page_group,$page_num);?></td>
	</tr>
</table>
<?php
	$result->disable();
?>