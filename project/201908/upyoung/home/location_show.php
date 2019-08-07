<?php
	define('path_coding', 'm/php/');
//抓縣市區域資料用
	include('m/common.php');
	include(path_coding.'Mysql_class.php');

	$subres=new mysql;
	$subres->connection($DB_common);
	if( isset($_POST['aid']) ){
		if( is_numeric($_POST['aid']) && $_POST['aid']!='0' ){
			$aid=$_POST['aid'];
			$sql='select A.mimage,A.mtitle,A.mtelif,A.mtel,B.city as mzipcode1,B.area as mzipcode2,A.maddress,A.mtime,A.mmail,A.mlink from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' and A.aid=\''.$aid.'\' ';
		}else if( $_POST['aid']!='0' )
			$sql='select B.city as mzipcode1,B.area as mzipcode2,A.maddress from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' and A.aid in ('.addslashes($_POST['aid']).') ';
		else
			$sql='select B.city as mzipcode1,B.area as mzipcode2,A.maddress from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' ';
		$subres->SQLrequest($sql);
		$subnum=$subres->RowNum();
		if( $subnum==1 && isset($aid) ){
			$subred=$subres->RowArray();
			echo stripslashes($subred['mzipcode1']).stripslashes($subred['mzipcode2']).stripslashes($subred['maddress']).' , ';
			echo '<div class="closebtn text-center"><a href="javascript:void(0)" onclick="show_div()"><i class="fa fa-times"></i></a></div>';
			echo '<div class="row">';
			if( $subred['mimage']!='' )
				echo '<div class="col-sm-4 hidden-sm hidden-xs"><img src="'.$set_file_url.$subred['mimage'].'"></div>';
			echo '<div class="col-sm-8">';
			echo '<h3>'.stripslashes($subred['mtitle']).'</h3>';
			echo '<dt>'.stripslashes($subred['mzipcode1']).stripslashes($subred['mzipcode2']).stripslashes($subred['maddress']).'</dt>';
			if( $subred['mtelif']=='1' )
				echo '<dt>'.stripslashes($subred['mtel']).'</dt>';
			echo '<dt class="opentime">'.stripslashes($subred['mtime']).'</dt>';
			echo '<dt><a href="mailto:'.stripslashes($subred['mmail']).'">'.stripslashes($subred['mmail']).'</a></dt><br>';
			if( $subred['mlink']!='' )
				echo '<p class=" visible-xs"><a href="'.stripslashes($subred['mlink']).'"><img src="images/line_btn.png" alt="加入好友"></a></p>';
			echo '</div>';
			echo '</div>';
		}else if( $subnum>0 ){
			for( $i=0;$i<$subnum;$i++){
				$subred=$subres->RowArray();
				echo stripslashes($subred['mzipcode1']).stripslashes($subred['mzipcode2']).stripslashes($subred['maddress']).' , ';
			}
		}else
			echo 'ERROR';
	}else{
		if( isset($_POST['mzipcode1']) && is_numeric($_POST['mzipcode1']) )
			$mzipcode1=$_POST['mzipcode1'];
		else if( isset($_POST['mzipcode2']) && is_numeric($_POST['mzipcode2']) )
			$mzipcode2=$_POST['mzipcode2'];
		else
			$mzipcode2='0';

		if( isset($mzipcode1) && $mzipcode1!='0' )
			$sql='select A.aid,A.mtitle,B.city,B.area,A.maddress,A.mmail from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.mzipcode1=\''.$mzipcode1.'\' and A.menable=\'1\' order by A.msort desc';
		else if( isset($mzipcode2) && $mzipcode2!='0' )
			$sql='select A.aid,A.mtitle,B.city,B.area,A.maddress,A.mmail from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.mzipcode2=\''.$mzipcode2.'\' and A.menable=\'1\' order by A.msort desc';
		else
			$sql='select A.aid,A.mtitle,B.city,B.area,A.maddress,A.mmail from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' order by A.msort desc';
		$subres->SQLrequest($sql);
		$subnum=$subres->RowNum();
		if($subnum>0){
			for($j=0;$j<$subnum;$j++){
				$subred=$subres->RowArray();
				echo '
					<a href="#map-canvas" onclick="geocodeAddress(\''.stripslashes($subred['aid']).'\');"><div class="item">
						<h4>'.stripslashes($subred['mtitle']).'</h4>
						<div class="address">'.stripslashes($subred['city']).stripslashes($subred['area']).stripslashes($subred['maddress']).'</div>
						<div><a href="mailto:'.stripslashes($subred['mmail']).'">'.stripslashes($subred['mmail']).'</a></div>
					</div></a>';
			}
		}else
			echo 'ERROR';
	}
	$subres->disable();
?>