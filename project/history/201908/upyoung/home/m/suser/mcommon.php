<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : mcommon.php
//
//	Last modified: 2016-3-20
//===========================================================================
	if( isset($_POST['smkey']) && $_POST['smkey']!='' )
		$nmkey=$_POST['smkey'];
	else if( isset($_GET['smkey']) && $_GET['smkey']!='' )
		$nmkey=$_GET['smkey'];
	else
		$nmkey='';
	if( isset($_POST['smcon']) && $_POST['smcon']!='' )
		$nmcon=$_POST['smcon'];
	else if( isset($_GET['smcon']) && $_GET['smcon']!='' )
		$nmcon=$_GET['smcon'];
	else
		$nmcon='';
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
	$page_link='suser/list.php';  //列表頁
	$page_link_edit='suser/edit.php';  //編輯頁

	$mtitle='帳號資料';  //模組名稱
	$mpk='uid';  //資料表 PK
	$mtable=$table_user;  //資科表名稱-對照 common.php 統一設定
	$mfname='mname';  //主標題欄位

	$msvalue=array('A.maccount','A.mname','B.mname');
	$msname=array('帳號','姓名','群組');

	$mwidth='400';  //編輯視窗寬
	$mheight='250';  //編輯視窗高

	authority_out($t_p);
?>