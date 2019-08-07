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

		$menable=De_CSA($_POST['menable']);
		$$mfname=De_CSA($_POST[$mfname]);
		$mdate=De_CSA($_POST['mdate']);
		$msubtitle=De_CSA($_POST['msubtitle']);
		$mcontent=addslashes($_POST['mcontent']);
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
			$sql='insert into '.$mtable.' ('.$mpk.', menable, '.$mfname.', mdate, msubtitle, msort, mimage, mcontent, date_create, date_modify) VALUES ( null, \''.$menable.'\', \''.$$mfname.'\', \''.$mdate.'\', \''.$msubtitle.'\', \''.$msort.'\', \''.$upfilearray[0][1].'\', \''.$mcontent.'\', \''.$now_date.'\', \''.$now_date.'\')';
			$save_note='新增：'.$$mfname;
		}else{
			$sql='update '.$mtable.' set menable=\''.$menable.'\', '.$mfname.'=\''.$$mfname.'\', mdate=\''.$mdate.'\', msubtitle=\''.$msubtitle.'\',  mcontent=\''.$mcontent.'\', '.$msort_str.'mimage=\''.$upfilearray[0][1].'\', date_modify=\''.$now_date.'\' where '.$mpk.'=\''.$$mpk.'\'';
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

	}else if( isset($_POST['vif']) && $_POST['vif']=='2' ){  //刪除檔案
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
	<script language="javascript" type="text/javascript" src="../js/WdatePicker.js"></script>
    <script type="text/javascript">
	<!--
	function psave(){
		if($('#<?php echo $mfname;?>').val()=='')
			alert('標題為必填資料，請確實填入');
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
	$mcontent=stripslashes($record['mcontent']);
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
			<td align="right">標題：</td>
			<td><input type="text" id="<?php echo $mfname;?>" name="<?php echo $mfname;?>" size="100" value="<?php echo stripslashes($record[$mfname]);?>"></td>
		</tr>
		<tr>
			<td align="right">日期：</td>
			<td><input type="text" id="mdate" name="mdate" size="20" readonly="readonly" value="<?php echo ($record['mdate'])?stripslashes($record['mdate']):date('M j,Y');?>"> <img onclick="WdatePicker({el:'mdate',lang:'en',dateFmt:'MMM d,yyyy'})" src="../js/skin/datePicker.gif" width="16" height="22" class="mouse_over"></td>
		</tr>
		<tr>
			<td align="right">簡介：</td>
			<td><textarea id="msubtitle" name="msubtitle" maxlength="200" rows="3" cols="40"><?php echo stripslashes($record['msubtitle']);?></textarea></td>
		</tr>
		<tr>
			<td align="right">圖片：</td>
            <td><?php echo show_file_photo('mimage', $record['mimage'], 1, $sys_updata, '建議大小 1,140px × 705px (*.gif,*.jpg,*.png)', '', 76, 47);?></td>
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
		<tr><td colspan="2" class="font_content">內文編輯</td></tr>
		<tr><td colspan="2" style="background-color: #ccc">
		<div alt="貼上" title="貼上" style="display:inline-block;width:16px;height:16px;background: url('../fckeditor/editor/skins/default/fck_strip.gif') 0px -128px;"></div> ー 如 Chrome 3.0版本之後有加入新的安全機制而無法直接將複製的內容貼入編輯器中，請使用此功能來做貼上的動作<br>
		<div alt="貼為純文字格式" title="貼為純文字格式" style="display:inline-block;width:16px;height:16px;background: url('../fckeditor/editor/skins/default/fck_strip.gif') 0px -144px;"></div> ー 此功能是將複製後要貼入的文字轉換為純文字格式在貼到要插入的地方<br>
		<div alt="自 Word 貼上" title="自 Word 貼上" style="display:inline-block;width:16px;height:16px;background: url('../fckeditor/editor/skins/default/fck_strip.gif') 0px -160px;"></div> ー 從 Word 中直接復制內容在貼入編輯器中會戴到其他 Word 的程式內碼，請用此功能來做轉換的動作
		</td></tr>
		<tr><td colspan="2">
<?php
$oFCKeditor = new FCKeditor('mcontent') ;
$oFCKeditor->BasePath	= $fck_link;
$oFCKeditor->Width		= 1140;
$oFCKeditor->Height		= 400;
$oFCKeditor->Value		= $mcontent;
$oFCKeditor->Create() ;
?>
		</td></tr>
		<tr><td colspan="2"><font class="edit_button mouse_over" onclick="psave()">儲存</font> <?php if( $message_fail!='' ){echo '<font color="red">'.$message_fail.'</font>';}?></td></tr>
	</table>
</form>
</body>
</html>
<?php
	$result->disable();
?>