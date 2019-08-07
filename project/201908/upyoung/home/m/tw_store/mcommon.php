<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 上洋產業股份有限公司
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
	$page_link='tw_store/list.php';  //列表頁
	$page_link_edit='tw_store/edit.php';  //編輯頁

	$page_title='經銷據點';  //模組名稱
	$mpk='aid';  //資料表 PK
	$mtable=$tw_store;  //資科表名稱-對照 common.php 統一設定
	$mfname='mtitle';  //主標題欄位
	$mfile=array('mimage');

	$msvalue=array($mfname);
	$msname=array('店名');

	$mfilename=array('QR code');  //名稱
	$mfilesize=array(2100000);  //大小 byte
	$mfileset=array(1);  //類型(0=>ALL,1=>圖片,2=>檔案)

	$upfilearray=array();  //存資料庫用-上傳檔案

	$mwidth='700';  //編輯視窗寬
	$mheight='550';  //編輯視窗高

	authority_out($t_p);
?>