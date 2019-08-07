<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : tree.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', 'php/');

	include('common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');

	decide_online($_SESSION['user_card'],1);  //判斷有無登入

	$t_p=De_CSA($_GET['t_p']);
	$d_p=De_CSA($_GET['d_p']);
	if( $_SESSION['user_card'][3]=='0' )
		$sql='select * from '.$table_tree.' where tid=\''.$t_p.'\' order by msort desc ';
	else
		$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.tid=\''.$t_p.'\' and B.mlist=\'1\' order by A.msort desc ';
	$result1=new mysql;
	$result1->connection($DB_common);
	$result1->SQLrequest($sql);
	$record1=$result1->RowArray();
	if( $record1['link_tree']!='' ){  //class
		$result3=new mysql;
		$result3->connection($DB_common);
		include($record1['link_tree']);
		$result3->disable();
	}else{
		if( $_SESSION['user_card'][3]=='0' )
			$sql='select * from '.$table_tree.' where up_tid=\''.$t_p.'\' order by msort desc ';
		else
			$sql='select A.* from '.$table_tree.' as A left join '.$table_authority.' as B on A.tid=B.tid and B.gid=\''.$_SESSION['user_card'][2].'\' where A.up_tid=\''.$t_p.'\' and B.mlist=\'1\' order by A.msort desc ';
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
		$result2->disable();
	}
	$result1->disable();
?>