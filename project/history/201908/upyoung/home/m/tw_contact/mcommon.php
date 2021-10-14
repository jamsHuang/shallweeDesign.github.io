<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 上洋產業股份有限公司
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : mcommon.php
//
//	Last modified: 2016-3-20
//===========================================================================
	if( isset($_POST['smhow']) && $_POST['smhow']!='' )
		$nmhow=$_POST['smhow'];
	else if( isset($_GET['smhow']) && $_GET['smhow']!='' )
		$nmhow=$_GET['smhow'];
	else
		$nmhow='';
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
	$page_link='tw_contact/list.php';  //列表頁
	$page_link_edit='tw_contact/edit.php';  //編輯頁

	$mtitle='留言訊息';  //模組名稱
	$mpk='cid';  //資料表 PK
	$mtable=$tw_contact;  //資科表名稱-對照 common.php 統一設定
	$mfname='mname';  //主標題欄位

	$msvalue=array($mfname,'msubject','mtel','mmail','date_create');
	$msname=array('姓名','詢問項目','聯絡電話','E-mail','詢問日期');

	$mwidth='900';  //編輯視窗寬
	$mheight='650';  //編輯視窗高

	authority_out($t_p);
?>