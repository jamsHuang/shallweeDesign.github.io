<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 上洋產業股份有限公司
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : edit.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', '../php/');

	include('../common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');
	include('../fckeditor/fckeditor.php');
	include('mcommon.php');

	decide_online($_SESSION['user_card']);  //判斷有無登入
	$result=new mysql;
	$result->connection($DB_common);

	if( isset($_GET[$mpk]) && is_numeric($_GET[$mpk]) )
		$$mpk=$_GET[$mpk];
	else
		$$mpk=0;
	$message_fail='';

	if( ($medit==0 && $$mpk!=0)  || ($madd==0 && $$mpk==0) )
		die('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">權限不足');

	if( isset($_POST['vif']) && $_POST['vif']=='1' ){  //新增、修改
		$message_str='';
		up_file_photo($sys_updata, $mfilename, 'ma',
					$_FILES['mfile'], $_POST['oldfile'], $_POST['oldfileaname'],
					$mfilesize, $mfileset);

		if( $_POST['menable']==1 )
			$menable='1';
		else
			$menable='0';
		$$mfname=De_CSA($_POST[$mfname]);
		if( $_POST['mtelif']==1 )
			$mtelif='1';
		else
			$mtelif='0';
		$mtel=De_CSA($_POST['mtel']);
		$mzipcode1=De_CSA($_POST['mzipcode1']);
		$mzipcode2=De_CSA($_POST['mzipcode2']);
		$maddress=De_CSA($_POST['maddress']);
		$mtime=De_CSA($_POST['mtime']);
		$mmail=De_CSA($_POST['mmail']);
		$mline=De_CSA($_POST['mline']);
		$mlink=De_CSA($_POST['mlink']);
		$sorttype=De_CSA($_POST['sorttype']);
		$msort_str='';
		if( $sorttype==0 ){
			$msort_str='';
		}else if( $sorttype==1 ){
			$sql='select msort from '.$mtable.' order by msort desc limit 0,1 ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=($record[0]+1);
			$msort_str='msort=\''.$msort.'\', ';
		}else if( $sorttype==2 ){
			$sql='select msort from '.$mtable.' order by msort asc limit 0,1 ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=($record[0]-1);
			$msort_str='msort=\''.$msort.'\', ';
		}else{
			$numup=De_CSA($_POST['numup']);
			$sql='select msort from '.$mtable.' where '.$mpk.'=\''.$numup.'\' ';
			$result->SQLrequest($sql);
			$record=$result->RowArray();
			$msort=$record[0];
			$msort_str='msort=\''.$msort.'\', ';
			$sql='update '.$mtable.' set msort=msort+1 where msort>='.$msort.' ';
			$result->SQLrequest($sql);
		}
		$now_date=date('Y-m-d H:i:s');
		if( $$mpk==0 ){
			$sql='insert into '.$mtable.' ('.$mpk.', menable, '.$mfname.', mtelif, mtel, mzipcode1, mzipcode2, maddress, mtime, mmail, mline, mlink, msort, mimage, date_create, date_modify) VALUES ( null, \''.$menable.'\', \''.$$mfname.'\', \''.$mtelif.'\', \''.$mtel.'\', \''.$mzipcode1.'\', \''.$mzipcode2.'\', \''.$maddress.'\', \''.$mtime.'\', \''.$mmail.'\', \''.$mline.'\', \''.$mlink.'\', \''.$msort.'\', \''.$upfilearray[0][1].'\', \''.$now_date.'\', \''.$now_date.'\')';
			$save_note='新增：'.$$mfname;
		}else{
			$sql='update '.$mtable.' set menable=\''.$menable.'\', '.$mfname.'=\''.$$mfname.'\', mtelif=\''.$mtelif.'\', mtel=\''.$mtel.'\', mzipcode1=\''.$mzipcode1.'\', mzipcode2=\''.$mzipcode2.'\', maddress=\''.$maddress.'\', mtime=\''.$mtime.'\', mmail=\''.$mmail.'\', mline=\''.$mline.'\', mlink=\''.$mlink.'\', '.$msort_str.'mimage=\''.$upfilearray[0][1].'\', date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
			$save_note='修改：'.$$mfname;
		}
		$result->SQLrequest($sql);
		$save_page=$page_title;
		if( $$mpk!='' && $$mpk!=0 )
			$save_id=$$mpk;
		else
			$save_id=$result->InsertId();
		$save_table=$mtable;
		include('../stracked/save.php');
		header("Content-Type:text/html; charset=utf-8");
		echo '<script language="javascript">
		<!--
		'.$message_str.'
		window.parent.click_page(\''.$page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.');
		window.parent.tb_remove();
		//-->
		</script>';
		exit;

	}else if( isset($_POST['vif']) && $_POST['vif']=='2' ){  //刪除圖片或檔案
		$dfile=De_CSA($_POST['defile']);
		$sql='select '.$dfile.' from '.$mtable.' where '.$mpk.'=\''.$$mpk.'\'';
		$result->SQLrequest($sql);
		$count=$result->RowNum();
		if( $count==1 ){
			$record=$result->RowArray();
			@unlink($sys_updata.$record[0]);
			$sql='update '.$mtable.' set '.$dfile.'=\'\' where '.$mpk.'=\''.$$mpk.'\'';
			$result->SQLrequest($sql);
			echo '<script language="javascript">
			<!--
			header("Content-Type:text/html; charset=utf-8");
			window.parent.click_page(\''.$page_link.'?t_p='.$t_p.'&smkey='.$nmkey.'&smcon='.urlencode($nmcon).'&spaget='.$page_total.'\','.$page_now.');
			alert(\'刪除成功！\');
			//-->
			</script>';
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>website management system</title>
    <meta charset="UTF-8">
    <title><?php echo $page_title;?></title>
    <link rel="stylesheet" type="text/css" href="../css/typeset.css">
	<script src="../js/jquery.js"></script>
    <script type="text/javascript">
	<!--
	$(function(){
		$('#mzipcode1').change(function() {
			var city_id = $('#mzipcode1 option:selected').val();
			$('#mzipcode2').empty().append($('<option></option>').val('0').text('請選區域'));
			if(city_id!='0'){
				$.ajax({
					type: 'POST',
					url: '../zipcode_show.php',
					data: {mzipcode1:city_id},
					dataType: 'text',
					success: function(data) {
						if(data!='ERROR'){
							var str_zone = data.split(',');
							for(var i=0;i<str_zone.length;i++){
								var show_str=str_zone[i].split('-');
								$('#mzipcode2').append($('<option></option>').val(show_str[0]).text(show_str[1]));
							}
						}else
							alert(data);
					}
				});
			}
		});
		//if( $('#mzipcode1 option:selected').val()!='0' )
		//	$('#mzipcode1').change();
	});
	function psave(){
		if($('#<?php echo $mfname;?>').val()=='')
			alert('店名為必填資料，請確實填入');
		else
			$('#cform1').submit();
	}
	function deleimg(a){
		if(confirm('確定刪除圖片？')){
			$('#vif').val(2);
			$('#defile').val(a);
			$('#cform1').submit();
		}
	}
		//載入圖片
        function upload_image_preview(file,a,b,c,d){
            var maxWidth=c,maxHeight=d;  //設定最大寬高
            var div=$('#'+a)[0];
            if(file.files&&file.files[0]){
                div.innerHTML='<img id="'+b+'" name="'+b+'" class="simage">';
                var img=$('#'+b)[0];
                img.onload = function(){
                    var rect = calcImgZoomParam(maxWidth, maxHeight, img.offsetWidth, img.offsetHeight);
                    img.width  =  rect.width;
                    img.height =  rect.height;
                    img.style.marginLeft = rect.left+'px';
                    img.style.marginTop = rect.top+'px';
                };
                var reader = new FileReader();
                reader.onload = function(evt){img.src = evt.target.result;};
                reader.readAsDataURL(file.files[0]);
            }else{//兼容IE
                var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                file.select();
                var src=document.selection.createRange().text;
                div.innerHTML='<img id="'+b+'" name="'+b+'" class="simage">';
                var img=$('#'+b)[0];
                img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src=src;
                var rect = calcImgZoomParam(maxWidth, maxHeight, img.offsetWidth, img.offsetHeight);
                status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
                alert(sFilter);
                alert(src);
                div.innerHTML = '<div id="'+b+'" class="simage" style="width:'+rect.width+'px;height:'+rect.height+'px;margin-top:'+rect.top+'px;'+sFilter+src+'"></div>';
            }
        }
        //圖片等比例缩小
        function calcImgZoomParam(maxWidth,maxHeight,width,height){
            var param={top:0,left:0,width:width,height:height};
            if(width>maxWidth||height>maxHeight){
                rateHeight=height/maxHeight;
                rateWidth=width/maxWidth;

                if(rateWidth>rateHeight){
                    param.width=maxWidth;
                    param.height=Math.round(height/rateWidth);
                }else{
                    param.height=maxHeight;
                    param.width=Math.round(width/rateHeight);
                }
            }
            param.top=Math.round((maxHeight-param.height)/2);
            param.left=Math.round((maxWidth-param.width)/2);
            return param;
        }
	//-->
    </script>
</head>
<body>
<?php
	$sql='select * from '.$mtable.' where '.$mpk.'=\''.$$mpk.'\'';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count!=1 && $$mpk!=0 ){
		echo 'error';
		exit;
	}else
		$record=$result->RowArray();
	$sorttype1='';
	$sorttype2='';
	$sorttype3='';
	$sorttype4='';
	if( isset($_POST['sorttype']) && $_POST['sorttype']==='0' ){
		$sorttype1='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==1 ){
		$sorttype2='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==2 ){
		$sorttype3='checked';
	}else if( isset($_POST['sorttype']) && $_POST['sorttype']==3 ){
		$sorttype4='checked';
	}else{
		if( $$mpk!='' && $$mpk!=0 )
			$sorttype1='checked';
		else
			$sorttype2='checked';
	}
?>
<form id="cform1" name="cform1" enctype="multipart/form-data" method="POST">
	<input type="hidden" id="vif" name="vif" value="1">
	<input type="hidden" id="defile" name="defile" value="">
	<table>
		<tr>
			<td align="right">啟用：</td>
			<td><input type="radio" id="menable" name="menable" value="1" <?php echo ($record['menable'])?'checked':'';?>>是 <input type="radio" id="menable" name="menable" value="0" <?php echo (!$record['menable'])?'checked':'';?>>否</td>
		</tr>
		<tr>
			<td align="right">店名：</td>
			<td><input type="text" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" size="100" value="<?php echo stripslashes($record[$mfname]);?>"></td>
		</tr>
		<tr>
			<td align="right">電話：</td>
			<td><input type="radio" id="mtelif" name="mtelif" <?php echo ($record['mtelif']==1)?'checked':'';?> value="1">
				顯示
				<input type="radio" id="mtelif" name="mtelif" <?php echo ($record['mtelif']!=1)?'checked':'';?> value="0">
				隱藏<br>
				<input type="text" id="mtel" name="mtel" size="40" maxlength="30" value="<?php echo stripslashes($record['mtel']);?>">
			</td>
		</tr
		<tr>
			<td align="right">地址：</td>
			<td>
				<select id="mzipcode1" name="mzipcode1">
					<option value="0">請選縣市</option>
<?php
	$subres=new mysql;
	$subres->connection($DB_common);
	$sql='select DISTINCT aid,city from '.$table_zipcode.' order by aid asc';
	$subres->SQLrequest($sql);
	$subnum=$subres->RowNum();
	for($j=0;$j<$subnum;$j++){
		$subred=$subres->RowArray();
		echo '<option value="'.$subred['aid'].'"';
		if( $record['mzipcode1']==$subred['aid'] )
			echo ' selected="selected"';
		echo '>'.stripslashes($subred['city']).'</option>';
	}
?>
					</select>
				<select id="mzipcode2" name="mzipcode2">
					<option value="0">請選區域</option>
<?php
	if( $record['mzipcode1']!='0' ){
		$sql='select id,area from '.$table_zipcode.' where aid=\''.$record['mzipcode1'].'\' order by id asc';
		$subres->SQLrequest($sql);
		$subnum=$subres->RowNum();
		for($j=0;$j<$subnum;$j++){
			$subred=$subres->RowArray();
			echo '<option value="'.$subred['id'].'"';
			if( $record['mzipcode2']==$subred['id'] )
				echo ' selected="selected"';
			echo '>'.stripslashes($subred['area']).'</option>';
		}
	}
	$subres->disable();
?>
				</select>
				<input type="text" id="maddress" name="maddress" size="50" value="<?php echo stripslashes($record['maddress']);?>">
			</td>
		</tr>
		<tr>
			<td align="right">營業時間：</td>
			<td><input type="text" id="mtime" name="mtime" size="100" value="<?php echo stripslashes($record['mtime']);?>"></td>
		</tr>
		<tr>
			<td align="right">E-mail：</td>
			<td><input type="text" id="mmail" name="mmail" size="100" value="<?php echo stripslashes($record['mmail']);?>"></td>
		</tr>
		<tr>
			<td align="right">Line ID：</td>
			<td><input type="text" id="mline" name="mline" size="100" value="<?php echo stripslashes($record['mline']);?>"></td>
		</tr>
		<tr>
			<td align="right">Line 好友：</td>
			<td><input type="text" id="mlink" name="mlink" size="100" value="<?php echo stripslashes($record['mlink']);?>"></td>
		</tr>
		<tr>
			<td align="right">QR code：</td>
            <td><?php echo show_file_photo('mimage', $record['mimage'], 1, $sys_updata, '建議大小 80x80 (*.gif,*.jpg,*.png)', 0, 80, 60);?></td>
		</tr>
<?php
	$sql='select * from '.$mtable.' where '.$mpk.'!=\''.$$mpk.'\' order by msort desc ';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
?>
		<tr <?php echo ($count==0)?'style="display:none;"':'';?>>
			<td align="right">排序：</td>
			<td><table align="left">
				<?php if( $$mpk!='' && $$mpk!=0 ){?><tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype1;?> value="0"></td><td>不變</td></tr><?php }?>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype2;?> value="1"></td><td>第一筆</td></tr>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype3;?> value="2"></td><td>最後一筆</td></tr>
				<tr><td><input type="radio" id="sorttype" name="sorttype" <?php echo $sorttype4;?> value="3"></td><td>於 <select id="numup" name="numup">
					<?php
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			echo '<option value="'.$record[$mpk].'">'.stripslashes($record[$mfname]).'</option>';
		}
	}
					?>
				</select> 之後</td></tr>
			</table></td>
		</tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>