<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : home.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', 'php/');

	include('common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');

	decide_online($_SESSION['user_card'],2);  //判斷有無登入
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>後台管理系統</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="css/typeset.css">
	<link rel="stylesheet" type="text/css" href="css/thickbox.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/thickbox.js"></script>
	<style type="text/css" media="screen">
		#main_body{width:1024px;width:937px \9;}
		#frame_left{width:241px;width:220px \9;}
		#frame_right{width:764px;width:698px \9;margin-left:250px;margin-left:229px \9;}
	</style>
	<script type="text/javascript">
	<!--
var tb_pathToImage='photo/loadingAnimation.gif',click_data=null,box_value='';var mod_Fright=null;$(function(){imgLoader = new Image();imgLoader.src = tb_pathToImage;$('#main_body').height($(window).height());$('#frame_left').height($(window).height()-32);$('#frame_right').height($(window).height()-24);mod_Fright=$('#frame_right');click_box('list.php',0);$(window).resize(function(){$('#main_body').height($(window).height());$('#frame_left').height($(window).height()-32);$('#frame_right').height($(window).height()-24);});});function time_out(a){a=a || 0;alert('閒置時間太久，系統自動登出！');if(a==1){location.href = '../index.php';}else{location.href = 'index.php';}}function sign_out(){if(confirm('確定要登出？')){location.href='index.php';}}function click_box(a,b,c){c=c || 0;var now_id='mbox_'+b;if(c!=0){now_id+='_'+c;}var now_mod=$('#'+now_id);if(a=='menu'){var now_mod_prev=now_mod.prev();if(now_mod_prev.attr('class')=='text_last2' || now_mod_prev.attr('class')=='text_list1'){if(now_mod_prev.attr('class')=='text_last2'){now_mod_prev.removeClass('text_last2').addClass('text_last3');}else{now_mod_prev.removeClass('text_list1').addClass('text_list2');}now_mod.after('<ul><li class="li_load">Loading...</li></ul>');$.ajax({url: 'tree.php',cache: false,dataType: 'html',type:'GET',data:{t_p:encodeURI(b),d_p:encodeURI(c)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){now_mod.next().remove();if(response=='error'){time_out();}else{now_mod.after(response).ready(function(){if(click_data!=null){$('#'+click_data).addClass('en_hover');}});}}});}else{if(now_mod_prev.attr('class')=='text_last3'){now_mod_prev.removeClass('text_last3').addClass('text_last2');}else{now_mod_prev.removeClass('text_list2').addClass('text_list1');}now_mod.next().remove();}}else{if(click_data!=null){$('#'+click_data).removeClass('en_hover');}click_data=now_id;if(now_mod.length>0){now_mod.addClass('en_hover');mod_Fright.html('Loading...');$.ajax({url: a,cache: false,dataType: 'html',type:'GET',data:{t_p:encodeURI(b),d_p:encodeURI(c)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');});}}});}}}function click_list(a,b,c,d){var now_id1=now_id2='mbox_'+b;if(c!=0){now_id1+='_'+c;}now_id2+='_'+d;var now_mod1=$('#'+now_id1);var now_mod2=$('#'+now_id2);if(now_mod1.size()){if(now_mod2.size()){click_box(a,b,d);}else{var now_mod_prev=now_mod1.prev();if(now_mod_prev.attr('class')=='text_last2'){now_mod_prev.removeClass('text_last2').addClass('text_last3');}else{now_mod_prev.removeClass('text_list1').addClass('text_list2');}now_mod1.after('<ul><li class="li_load">Loading...</li></ul>');$.ajax({url: 'tree.php',cache: false,dataType: 'html',type:'GET',data:{t_p:encodeURI(b),d_p:encodeURI(c)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){now_mod1.next().remove();if(response=='error'){time_out();}else{now_mod1.after(response).ready(function(){click_box(a,b,d);});}}});}}}function reset_tree(a,b){var now_id='mbox_'+a;if(b!=0){now_id+='_'+b;}var now_mod=$('#'+now_id);if(now_mod.next().html()){$.ajax({url: 'tree.php',cache: false,dataType: 'html',type:'GET',data:{t_p:encodeURI(a),d_p:encodeURI(b)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){now_mod.next().remove();if(response=='error'){time_out();}else{now_mod.after(response);}}});}}function click_page(a,b,c){c=c || 0;if(c>0){if(confirm('確定要刪除？')){d=1;}else{d=0;}}else{d=1;}if(d==1){mod_Fright.html('Loading...');$.ajax({url: a,cache: false,dataType: 'html',type:'GET',data:{vpage:encodeURI(b),dpk:encodeURI(c)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');});}}});}}function select_run(a){box_value='';$('input[name="idbox[]"]:checked').each(function(){if(box_value!=''){box_value=box_value+','+$(this).val();}else{box_value=$(this).val();}});if(box_value!=''){useid=$('#useid').val();if(useid==0){alert('請選擇功能！');}else{if(confirm('確定要執行？')){mod_Fright.html('Loading...');$.ajax({url: a,cache: false,dataType: 'html',type:'GET',data:{dpk:encodeURI(box_value),vif:encodeURI(useid)},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');});}}});}}}else{alert('請勾選項目!');}}function search_word(a,b){b=b || 0;sshow=$('#smshow').val();ssel=$('#smkey').val();sstr=$('#smcon').val();if(sstr=='' && b==0){alert('請輸入搜尋文字！');}else{mod_Fright.html('Loading...');$.ajax({url: a,cache: false,dataType: 'html',type:'POST',data:{smhow:sshow,smkey:ssel,smcon:sstr},error: function(xhr){mod_Fright.html('ERROR');},success: function(response){if(response=='error'){time_out();}else{mod_Fright.html(response).ready(function(){tb_init('a.thickbox, area.thickbox, input.thickbox');});}}});}}
	-->
	</script>
</head>
<body style="background-image:url('photo/bg.jpg');">
<div id="main_body">
	<div id="frame_top"><a onclick="sign_out();">登出</a> (登入帳號：<?php echo '<a href="suser/edit.php?spec=1&uid='.$_SESSION['user_card'][0].'&TB_iframe=true&height=250&width=400" class="thickbox" title="資料修改" alt="資料修改">'.$_SESSION['user_card'][1].'</a>';?>)<a href="../index.html" target="_blank" style="margin-left:80px;">網站前端</a></div>
	<div id="frame_left">
		<a id="mbox_0" name="mbox_0" onclick="click_box('list.php',0);">首頁</a>
<?php
	if( $_SESSION['user_card'][3]=='0' )
		$sql='select * from '.$table_tree.' where up_tid=\'0\' order by msort desc ';
	else
		$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\'0\' and B.mlist=\'1\' order by A.msort desc ';
	$result1=new mysql;
	$result1->connection($DB_common);
	$result1->SQLrequest($sql);
	$count1=$result1->RowNum();
	if( $count1>0 ){
		echo '<ul>';
		for( $i=0;$i<$count1;$i++ ){
			$record1=$result1->RowArray();
			$tid=$record1['tid'];
			$mname=stripslashes($record1['mname']);
			$link_tree=stripslashes($record1['link_tree']);
			$link_view=stripslashes($record1['link_view']);
			$a_id='id="mbox_'.$tid.'" name="mbox_'.$tid.'"';
			if( $_SESSION['user_card'][3]=='0' )
				$sql='select * from '.$table_tree.' where up_tid=\''.$tid.'\' order by msort desc ';
			else
				$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\''.$tid.'\' and B.mlist=\'1\' order by A.msort desc ';
			$result2=new mysql;
			$result2->connection($DB_common);
			$result2->SQLrequest($sql);
			$count2=$result2->RowNum();
			echo '<li';
			if( $i==($count1-1) ){
				echo ' class="text_last"><div';
				if( $link_tree!='' || $count2>0 )
					echo ' class="text_last2"';
				else
					echo ' class="text_last1"';
			}else{
				echo '><div';
				if( $link_tree!='' || $count2>0 )
					echo ' class="text_list1"';
			}
			if( $link_tree!='' || $count2>0 )
				echo ' onclick="click_box(\'menu\','.$tid.');"';
			echo '></div><a '.$a_id.' onclick="click_box(\'';
			if( $link_tree!='' )
				echo $link_view;
			else if( $count2>0 )
				echo 'menu';
			else if( $link_view=='' )
				echo 'list.php';
			else
				echo $link_view;
			echo '\','.$tid.');">'.$mname.'</a></li>';
		}
		echo '</ul>';
	}
?>
	</div>
	<div id="frame_right">HELLO</div>
</div>
</body>
</html>
<?php
	$result1->disable();
	$result2->disable();
?>