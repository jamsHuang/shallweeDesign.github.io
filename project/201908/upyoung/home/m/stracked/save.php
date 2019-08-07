<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : save.php
//
//	Last modified: 2016-3-20
//===========================================================================
$olddata=new mysql;$olddata->connection($DB_common);if($save_page!=''&&$save_note!=''&&$save_id!=''&&$save_table!=''&&$now_date!=''&&$_SESSION['user_card'][1]!='root'){$sql='insert into '.$table_tracked.' (id,mname,mpage,mnote,tab_pk,tab_name,date_create) VALUES (null,\''.$_SESSION['user_card'][1].'\',\''.$save_page.'\',\''.$save_note.'\',\''.$save_id.'\',\''.$save_table.'\',\''.$now_date.'\')';$olddata->SQLrequest($sql);}$olddata->disable();
?>