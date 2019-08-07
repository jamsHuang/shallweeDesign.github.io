<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : mcommon.php
//
//	Last modified: 2016-3-20
//===========================================================================
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
	$page_link='sgroup/list.php';  //列表頁
	$page_link_edit='sgroup/edit.php';  //編輯頁

	$mtitle='群組資料';  //模組名稱
	$mpk='gid';  //資料表 PK
	$mtable=$table_group;  //資科表名稱-對照 common.php 統一設定
	$mfname='mname';  //主標題欄位

	$mwidth='400';  //編輯視窗寬
	$mheight='250';  //編輯視窗高

	authority_out($t_p);
?>