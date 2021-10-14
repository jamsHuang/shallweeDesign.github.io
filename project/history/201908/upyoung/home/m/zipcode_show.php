<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : zipcode_show.php
//
//	Last modified: 2016-3-20
//===========================================================================
	define('path_coding', 'php/');
//抓縣市區域資料用
	include('common.php');
	include(path_coding.'Mysql_class.php');

	if( isset($_POST['mzipcode1']) && is_numeric($_POST['mzipcode1']) )
		$mzipcode1=$_POST['mzipcode1'];
	else
		$mzipcode1='0';

	$subres=new mysql;
	$subres->connection($DB_common);
	if( isset($_POST['n']) && $_POST['n']=='1' )
		$sql='select DISTINCT A.id,A.area from '.$table_zipcode.' as A inner join '.$tw_store.' as B on A.aid=B.mzipcode1 and A.id=B.mzipcode2 and A.aid=\''.$mzipcode1.'\' and B.menable=\'1\' order by A.aid asc ';
	else
		$sql='select id,area from '.$table_zipcode.' where aid=\''.$mzipcode1.'\' order by id asc';
	$subres->SQLrequest($sql);
	$subnum=$subres->RowNum();
	if($subnum>0){
		for($j=0;$j<$subnum;$j++){
			$subred=$subres->RowArray();
			if($j!=0)
				echo ',';
			echo $subred['id'].'-'.stripslashes($subred['area']);
		}
	}else
		echo 'ERROR';
	$subres->disable();
?>