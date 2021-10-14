<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : Mysql_class.php
//
//	Last modified: 2016-3-20
//===========================================================================
class mysql{private $link;private $result;public function connection( &$DB_common, $conn_mod=false ){$DB_host=$DB_common['host']?$DB_common['host']:'localhost';$DB_user=$DB_common['user'];$DB_pw=$DB_common['password'];$connect_function=$conn_mod?'mysql_pconnect':'mysql_connect';$conn=$connect_function($DB_host,$DB_user,$DB_pw) or die('error');if( !$conn ){return 'error';}mysql_query('SET NAMES utf8');if( $DB_common['dbname'] ){mysql_select_db($DB_common['dbname'], $conn) or die ('Could not select database');}$this->link=$conn;return $conn;}public function SQLrequest($SQLstr){$result = mysql_query($SQLstr, $this->link);if(!$result){echo mysql_errno(). ": ".mysql_error(). "<br>"; exit();}$this->result = $result;}public function RowArray(){return mysql_fetch_array($this->result);}public function RowNum(){return mysql_num_rows($this->result);}public function InsertId(){return mysql_insert_id($this->link);}public function disable(){mysql_close($this->link);}}
?>