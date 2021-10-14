<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : purview.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', '../php/');

	include('../common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');

	decide_online($_SESSION['user_card'],1);  //判斷有無登入
	$result1=new mysql;
	$result1->connection($DB_common);
	$result2=new mysql;
	$result2->connection($DB_common);

	if( isset($_GET['t_p']) && is_numeric($_GET['t_p']) )
		$t_p=$_GET['t_p'];
	else
		die('ERROR');
	if( isset($_GET['gid']) && is_numeric($_GET['gid']) )
		$gid=$_GET['gid'];
	else if( isset($_POST['gid']) && is_numeric($_POST['gid']) )
		$gid=$_POST['gid'];
	else
		$gid=0;
	$page_link='sauthority/purview.php?t_p='.$t_p;

	authority_out($t_p);
	if( $mlist==0 )
		die('權限不足');

	$message_str='';
	if( isset($_POST['vif']) && $_POST['vif']=='1' ){  //儲存
		$vnum=sizeof($_POST['idbox']);
		$gid=De_CSA($_POST['gid']);
		for( $i=0;$i<$vnum;$i++ ){
			$sql='select aid from '.$table_authority.' where tid=\''.De_CSA($_POST['idbox'][$i]).'\' and gid=\''.$gid.'\'';
			$result1->SQLrequest($sql);
			$count1=$result1->RowNum();
			if( $count1>0 ){
				$record1=$result1->RowArray();
				$sql='update '.$table_authority.' set mlist=\''.De_CSA($_POST['mlist'][$i]).'\', medit=\''.De_CSA($_POST['medit'][$i]).'\', madd=\''.De_CSA($_POST['madd'][$i]).'\', mdele=\''.De_CSA($_POST['mdele'][$i]).'\' where aid='.$record1['aid'];
			}else{
				$sql='insert into '.$table_authority.' (aid, tid, gid, mlist, medit, madd, mdele) values (null, \''.De_CSA($_POST['idbox'][$i]).'\', \''.$gid.'\', \''.De_CSA($_POST['mlist'][$i]).'\', \''.De_CSA($_POST['medit'][$i]).'\', \''.De_CSA($_POST['madd'][$i]).'\', \''.De_CSA($_POST['mdele'][$i]).'\')';
			}
			$result1->SQLrequest($sql);
		}
		$sql='select * from '.$table_group.' where gid=\''.$gid.'\'';
		$result1->SQLrequest($sql);
		$record1=$result1->RowArray();
		$save_page='群組權限設定';
		$save_note='修改：'.De_CSA(stripslashes($record1['mname']));
		$save_id=$gid;
		$save_table=$table_authority;
		$now_date=date('Y-m-d H:i:s');
		include('../stracked/save.php');
		$message_str='&nbsp;&nbsp;&nbsp;<font color="red">儲存成功！</font>';
	}
?>
<script language="javascript">
<!--
$(':checkbox').eq(0).click(function(){if($(this).prop('checked')){$('input:checkbox[name="idbox[]"]').prop('checked', true);$('input:checkbox[name="mlist[]"]').prop('checked',true);$('input:checkbox[name="medit[]"]').prop('checked',true);$('input:checkbox[name="madd[]"]').prop('checked',true);$('input:checkbox[name="mdele[]"]').prop('checked',true);}else{$('input:checkbox[name="idbox[]"]').prop('checked', false);$('input:checkbox[name="mlist[]"]').prop('checked',false);$('input:checkbox[name="medit[]"]').prop('checked',false);$('input:checkbox[name="madd[]"]').prop('checked',false);$('input:checkbox[name="mdele[]"]').prop('checked',false);}});$('input:checkbox[name="idbox[]"]').click(function(){vnum=$('input:checkbox[name="idbox[]"]').index(this);if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length){$(':checkbox').eq(0).prop('checked', true);}else{$(':checkbox').eq(0).prop('checked', false);}if($(this).prop('checked')){$('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked',true);$('input:checkbox[name="medit[]"]').eq(vnum).prop('checked',true);$('input:checkbox[name="madd[]"]').eq(vnum).prop('checked',true);$('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked',true);}else{$('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked',false);$('input:checkbox[name="medit[]"]').eq(vnum).prop('checked',false);$('input:checkbox[name="madd[]"]').eq(vnum).prop('checked',false);$('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked',false);}});$('input:checkbox[name="mlist[]"]').click(function(){vnum=$('input:checkbox[name="mlist[]"]').index(this);if($('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked') && ($('input:checkbox[name="medit[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="medit[]"]').eq(vnum).is(':hidden')) && ($('input:checkbox[name="madd[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="madd[]"]').eq(vnum).is(':hidden')) && ($('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="mdele[]"]').eq(vnum).is(':hidden'))){$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',true);}else{$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',false);}chech_prop();});$('input:checkbox[name="medit[]"]').click(function(){vnum=$('input:checkbox[name="medit[]"]').index(this);if($('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked') && $('input:checkbox[name="medit[]"]').eq(vnum).prop('checked') && ($('input:checkbox[name="madd[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="madd[]"]').eq(vnum).is(':hidden')) && ($('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="mdele[]"]').eq(vnum).is(':hidden'))){$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',true);}else{$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',false);}chech_prop();});$('input:checkbox[name="madd[]"]').click(function(){vnum=$('input:checkbox[name="madd[]"]').index(this);if($('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked') && $('input:checkbox[name="medit[]"]').eq(vnum).prop('checked') && $('input:checkbox[name="madd[]"]').eq(vnum).prop('checked') && $('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked')){$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',true);}else{$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',false);}chech_prop();});$('input:checkbox[name="mdele[]"]').click(function(){vnum=$('input:checkbox[name="mdele[]"]').index(this);if($('input:checkbox[name="mlist[]"]').eq(vnum).prop('checked') && ($('input:checkbox[name="medit[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="medit[]"]').eq(vnum).is(':hidden')) && ($('input:checkbox[name="madd[]"]').eq(vnum).prop('checked') || $('input:checkbox[name="madd[]"]').eq(vnum).is(':hidden')) && $('input:checkbox[name="mdele[]"]').eq(vnum).prop('checked')){$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',true);}else{$('input:checkbox[name="idbox[]"]').eq(vnum).prop('checked',false);}chech_prop();});function chech_prop(){if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length){$(':checkbox').eq(0).prop('checked', true);}else{$(':checkbox').eq(0).prop('checked', false);}}function data_save(){gid=$('#gid').val();if( gid!='' && gid!=null ){idbox=[],mlist=[],medit=[],madd=[],mdele=[];$('input:checkbox[name="idbox[]"]').each(function(xindex){idbox[xindex]=$(this).val();mlist[xindex]=($('input:checkbox[name="mlist[]"]').eq(xindex).prop('checked'))?1:0;medit[xindex]=($('input:checkbox[name="medit[]"]').eq(xindex).prop('checked'))?1:0;madd[xindex]=($('input:checkbox[name="madd[]"]').eq(xindex).prop('checked'))?1:0;mdele[xindex]=($('input:checkbox[name="mdele[]"]').eq(xindex).prop('checked'))?1:0;});mod_Fright.html('Loading...');$.ajax({url: '<?php  echo $page_link;?>',cache: false,dataType: 'html',type:'POST',data:{vif: 1,gid: gid,idbox: idbox,mlist: mlist,medit: medit,madd: madd,mdele: mdele},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response);}}});}else{alert('請選擇要設定的群組');}}function gid_change(){gid=$('#gid').val();mod_Fright.html('Loading...');$.ajax({url: '<?php  echo $page_link;?>',cache: false,dataType: 'html',type:'GET',data:{gid: gid},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response);}}});}
//-->
</script>
<div style="margin:10px 0;">設定群組：<select id="gid" name="gid" onchange="gid_change();">
<?php
	$sql='select * from '.$table_group.' where mlevel>'.$_SESSION['user_card'][3].' order by mlevel asc';
	$result1->SQLrequest($sql);
	$count1=$result1->RowNum();
	if( $count1>0 ){
		for( $i=0;$i<$count1;$i++ ){
			$record1=$result1->RowArray();
			if( $gid==$record1['gid'] || $gid==0 ){
				$gid=$record1['gid'];
				echo '<option value="'.$record1['gid'].'" selected="selected">'.stripslashes($record1['mname']).'</option>';
			}else
				echo '<option value="'.$record1['gid'].'">'.stripslashes($record1['mname']).'</option>';
		}
	}
?>
</select></div>
<form id="cform1" name="cform1" method="POST">
<table width="100%" class="table_list">
	<tr class="tlist_tr">
		<td class="tlist_td1" width="32" align="center"><input type="checkbox" value="all"></td>
		<td class="tlist_td1" width="" align="center">樹狀功能選單</td>
		<td class="tlist_td1" width="32" align="center">列表</td>
		<td class="tlist_td1" width="32" align="center">修改</td>
		<td class="tlist_td1" width="32" align="center">新增</td>
		<td class="tlist_td1 tlist_td2" width="32" align="center">刪除</td>
	</tr>
<?php
	$td_end='';
	$a_data=array();
	$sql='select * from '.$table_authority.' where gid=\''.$gid.'\' order by aid asc ';
	$result1->SQLrequest($sql);
	$count1=$result1->RowNum();
	if( $count1>0 ){
		for( $i=0;$i<$count1;$i++ ){
			$record1=$result1->RowArray();
			$a_data[$record1['tid']]=array($record1['mlist'],$record1['medit'],$record1['madd'],$record1['mdele']);
		}
	}
	function tree_data($a,$b,$c,$d){global $DB_common,$table_tree,$table_authority;$td_end='';$tree_space=14*$d;$result1=new mysql;$result1->connection($DB_common);$result2=new mysql;$result2->connection($DB_common);if($_SESSION['user_card'][3]=='0'){$sql='select * from '.$table_tree.' where up_tid=\''.$a.'\' order by msort desc ';}else{$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\''.$a.'\' and B.mlist=\'1\' order by A.msort desc ';}	$result1->SQLrequest($sql);$count1=$result1->RowNum();if($count1>0){for($i=0;$i<$count1;$i++){$record1=$result1->RowArray();if($_SESSION['user_card'][3]=='0'){$sql='select * from '.$table_tree.' where up_tid=\''.$record1['tid'].'\' order by msort desc ';}else{$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\''.$record1['tid'].'\' and B.mlist=\'1\' order by A.msort desc ';}	$result2->SQLrequest($sql);$count2=$result2->RowNum();if($i==($count1-1)&&$c==1){$end_if=1;}else{$end_if=0;}if($end_if==1&&$count2==0){$td_end=' tlist_td3';}$mlist=($b!=null&&isset($b[$record1['tid']])&&$b[$record1['tid']][0])?'checked':'';$medit=($b!=null&&isset($b[$record1['tid']])&&$b[$record1['tid']][1])?'checked':'';$madd=($b!=null&&isset($b[$record1['tid']])&&$b[$record1['tid']][2])?'checked':'';$mdele=($b!=null&&isset($b[$record1['tid']])&&$b[$record1['tid']][3])?'checked':'';$link_view=stripslashes($record1['link_view']);if($link_view==''){$list1=' style="display:none;" ';$list2=' style="display:none;" ';$list3=' style="display:none;" ';}else if(substr_count($link_view,'stracked')){$list1=' style="display:none;" ';$list2=' style="display:none;" ';$list3='';}else if(substr_count($link_view,'purview.php')){$list1='';$list2=' style="display:none;" ';$list3=' style="display:none;" ';}else if(substr_count($link_view,'contact')){$list1='';$list2=' style="display:none;" ';$list3='';}else{$list1='';$list2='';$list3='';}echo '<tr><td class="tlist_td1 '.$td_end.'" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="'.$record1['tid'].'"></td><td class="tlist_td1 '.$td_end.'" style="padding-left:'.$tree_space.'px;">'.stripslashes($record1['mname']).'</td><td class="tlist_td1 '.$td_end.'" align="center"><input type="checkbox" id="mlist" name="mlist[]" value="1" '.$mlist.'></td><td class="tlist_td1 '.$td_end.'" align="center"><input type="checkbox" id="medit" name="medit[]" value="1" '.$medit.$list1.'></td><td class="tlist_td1 '.$td_end.'" align="center"><input type="checkbox" id="madd" name="madd[]" value="1" '.$madd.$list2.'></td><td class="tlist_td1 tlist_td2 '.$td_end.'" align="center"><input type="checkbox" id="mdele" name="mdele[]" value="1" '.$mdele.$list3.'></td></tr>';tree_data($record1['tid'],$b,$end_if,$d+1);}}}
	$tlevel=0;
	if( $_SESSION['user_card'][3]=='0' )
		$sql='select * from '.$table_tree.' where up_tid=\'0\' order by msort desc ';
	else
		$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\'0\' and B.mlist=\'1\' order by A.msort desc ';
	$result1->SQLrequest($sql);
	$count1=$result1->RowNum();
	if( $count1>0 ){
		for( $i=0;$i<$count1;$i++ ){
			$record1=$result1->RowArray();
			if( $_SESSION['user_card'][3]=='0' )
				$sql='select * from '.$table_tree.' where up_tid=\''.$record1['tid'].'\' order by msort desc ';
			else
				$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\''.$record1['tid'].'\' and B.mlist=\'1\' order by A.msort desc ';
			$result2->SQLrequest($sql);
			$count2=$result2->RowNum();
			if( $i==($count1-1) )
				$end_if=1;
			else
				$end_if=0;
			if( $end_if==1 && $count2==0 )
				$td_end=' tlist_td3';
			$link_view=stripslashes($record1['link_view']);
			if( $link_view=='' ){
				$list1=' style="display:none;" ';
				$list2=' style="display:none;" ';
				$list3=' style="display:none;" ';
			}else if( substr_count($link_view,'stracked') ){
				$list1=' style="display:none;" ';
				$list2=' style="display:none;" ';
				$list3='';
			}else if( substr_count($link_view,'purview.php') ){
				$list1='';
				$list2=' style="display:none;" ';
				$list3=' style="display:none;" ';
			}else if( substr_count($link_view,'contact') ){
				$list1='';
				$list2=' style="display:none;" ';
				$list3='';
			}else{
				$list1='';
				$list2='';
				$list3='';
			}
?>
	<tr>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="idbox" name="idbox[]" value="<?php echo $record1['tid'];?>"></td>
		<td class="tlist_td1<?php echo $td_end;?>"><?php echo stripslashes($record1['mname']);?></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="mlist" name="mlist[]" value="1" <?php echo ($a_data!=null && isset($a_data[$record1['tid']]) && $a_data[$record1['tid']][0])?'checked':'';?>></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="medit" name="medit[]" value="1" <?php echo ($a_data!=null && isset($a_data[$record1['tid']]) && $a_data[$record1['tid']][1])?'checked':'';echo $list1;?>></td>
		<td class="tlist_td1<?php echo $td_end;?>" align="center"><input type="checkbox" id="madd" name="madd[]" value="1" <?php echo ($a_data!=null && isset($a_data[$record1['tid']]) && $a_data[$record1['tid']][2])?'checked':'';echo $list2;?>></td>
		<td class="tlist_td1 tlist_td2<?php echo $td_end;?>" align="center"><input type="checkbox" id="mdele" name="mdele[]" value="1" <?php echo ($a_data!=null && isset($a_data[$record1['tid']]) && $a_data[$record1['tid']][3])?'checked':'';echo $list3;?>></td>
	</tr>
<?php
			tree_data($record1['tid'],$a_data,$end_if,$tlevel+1);
		}
	}
?>
</table>
</form>
<table width="100%" style="margin-top:6px;">
	<tr>
		<td><?php echo button_show(0,$medit,'data_save()','儲存');?><font class="edit_button mouse_over" onclick="$('#cform1')[0].reset();">還原</font><?php echo $message_str;?></td>
		<td align="right"></td>
	</tr>
</table>
<script language="javascript">
	<!--
	$('input:checkbox[name="idbox[]"]').each(function(xindex){
		if($('input:checkbox[name="mlist[]"]').eq(xindex).prop('checked') && ($('input:checkbox[name="medit[]"]').eq(xindex).prop('checked') || $('input:checkbox[name="medit[]"]').eq(xindex).is(':hidden') ) && ($('input:checkbox[name="madd[]"]').eq(xindex).prop('checked') || $('input:checkbox[name="madd[]"]').eq(xindex).is(':hidden') ) && ($('input:checkbox[name="mdele[]"]').eq(xindex).prop('checked') || $('input:checkbox[name="mdele[]"]').eq(xindex).is(':hidden') ))
			$(this).attr('checked',true);
	});
	if($('input:checkbox[name="idbox[]"]').length==$('input:checkbox[name="idbox[]"]:checked').length)
		$(':checkbox').eq(0).attr('checked', true);
	//-->
</script>
<?php
	$result1->disable();
	$result2->disable();
?>