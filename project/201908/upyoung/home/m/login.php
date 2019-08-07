<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : login.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', 'php/');

	include('common.php');
	include(path_coding.'Mysql_class.php');

	$xaccount=addslashes($_POST['xaccount']);
	$xpassword=md5(crypt(addslashes($_POST['xpassword']),'bz'));
	$sql='select * from '.$table_user.' where maccount=\''.$xaccount.'\' and mpassword=\''.$xpassword.'\'';
	$result=new mysql;
	$result->connection($DB_common);
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count==1 ){
		$record=$result->RowArray();
		if( $record['menable']=='1' ){
			$_SESSION['user_card']=null;
			$Grpsql='select mlevel from '.$table_group.' where gid=\''.$record['gid'].'\'';
			$GrpRes=new mysql;
			$GrpRes->connection($DB_common);
			$GrpRes->SQLrequest($Grpsql);
			$GrpRec=$GrpRes->RowArray();
			$xlock=$GrpRec['mlevel'];
			$user_card=array($record['uid'],$record['maccount'],$record['gid'],$xlock);  //user_id user_account group_id group_level
			$_SESSION['user_card']=$user_card;
			$now_date=date('Y-m-d H:i:s');
			$save_page='Login';
			$save_note='Login ID : '.$record['maccount'];
			$save_id=$record['uid'];
			$save_table=$table_user;
			include('stracked/save.php');
			$GrpRes->disable();
			$result->disable();
			echo '<meta http-equiv="refresh" content="0;URL=home.php">';
		}else{
			$result->disable();
			$_SESSION['error_id']=2;
			echo '<meta http-equiv="refresh" content="0;URL=index.php">';
		}
	}else{  //登入失敗
		$result->disable();
		$_SESSION['error_id']=1;
		echo '<meta http-equiv="refresh" content="0;URL=index.php">';
	}
?>