<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : common.php
//
//	Last modified: 2016-3-20
//===========================================================================
	$DB_common['host']='localhost';
	$DB_common['user']='vhost67177';  //資料庫帳號
	$DB_common['password']='beyond_huebsch';  //資料庫密碼
	$DB_common['dbname']='vhost67177-1';  //資料庫名稱
	$fck_link='/m/fckeditor/';
	$sys_updata_home='../f/';
	$sys_updata='../../f/';
	$Config['UserFilesPath'] = '/fck_f/';

	//上傳檔案設定 0-ALL 1-圖片 2-檔案
	$sys_set_type[0]=array('.bmp','.gif','.jpg','.png','.rar','.zip','.xls','.xlsx','.ppt','.pptx','.ppt','.pptx','.pdf','.txt');
	$sys_set_type[1]=array('.bmp','.gif','.jpg','.png');
	$sys_set_type[2]=array('.rar','.zip','.xls','.xlsx','.ppt','.pptx','.ppt','.pptx','.pdf','.txt');

	$table_tree='sys_tree';  //樹狀圖
	$table_group='sys_group';  //群組
	$table_authority='sys_group_authority'; //群組權限
	$table_user='sys_group_user';  //帳號
	$table_tracked='sys_tracked';  //歷史記錄
	$table_zipcode='tw_zipcode';  //縣市區碼

	$set_file_url='f/';  //上傳檔案位置
	$tw_news='tw_news';  //最新消息
	$tw_realcase='tw_realcase';  //實績案例
	$tw_store='tw_store';  //經銷據點
	$tw_subject='tw_subject';  //詢問項目
	$tw_device='tw_device';  //設備類型
	$tw_contact='tw_contact';  //留言訊息

	if( !isset($_SESSION['user_card']) )
		$_SESSION['user_card']=null;

	$mlist=0;
	$medit=0;
	$madd=0;
	$mdele=0;
date_default_timezone_set("Asia/Taipei");
?>