<?php
//===========================================================================
//	DESCRIPTION: 後端管理系統 基本模組
//
//	Author: 陳俊全 ZENKI <e10089@yahoo.com.tw>
//	File : list.php
//
//	Last modified: 2016-3-20
//===========================================================================
	session_start();
	define('path_coding', 'php/');

	include('common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');

	decide_online($_SESSION['user_card']);  //判斷有無登入

	if( isset($_GET['t_p']) && $_GET['t_p']!=0 )
		die('none');
?>
<table width="80%" style="margin:40px auto 0 auto;">
	<tr>
		<td align="center"><font style="font-size:18px;font-weight:bold;">注意事項提醒</font></td>
	</tr>
	<tr>
		<td style="background-color:#DDD;padding:5px;"><b style="font-size:14px;">圖片上傳：</b></td>
	</tr>
	<tr>
		<td style="background-color:#F6F6F6;padding:5px;">
			<ol style="list-style-type:decimal;margin:0 0 15px 32px;">
				<li>上傳的圖片請傳成<font color="red">72dpi RGB模式</font>，並輸出成<font color="red">*.jpg</font>或<font color="red">*.gif</font>後上傳。</li>
				<li>部份伺服器在支援中文字上會有問題，請盡量用<font color="red">數字</font>、<font color="red">英文</font>、「<font color="red">_</font>」、「<font color="red">-</font>」來做命名。</li>
				<li>尺寸請依上傳欄位後方為建議的寬、高來上傳，避免前台的版面出現問題。</li>
			</ol>
		</td>
	</tr>
	<tr>
		<td style="background-color:#DDD;padding:5px;"><b style="font-size:14px;">檔案上傳：</b></td>
	</tr>
	<tr>
		<td style="background-color:#F6F6F6;padding:5px;">
			<ol style="list-style-type:decimal;margin:0 0 15px 32px;">
				<li>上傳的檔案為–doc、xls、ppt、pdf等，特殊檔案格式請壓縮成zip或rar在上傳。</li>
				<li>部份伺服器在支援中文字上會有問題，請盡量用<font color="red">數字</font>、<font color="red">英文</font>、「<font color="red">_</font>」、「<font color="red">-</font>」來做命名。</li>
			</ol>
		</td>
	</tr>
	<tr>
		<td style="background-color:#DDD;padding:5px;"><b style="font-size:14px;">FCKeditor圖文編輯：</b></td>
	</tr>
	<tr>
		<td style="background-color:#F6F6F6;padding:5px;">
			<ol style="list-style-type:decimal;margin:0 0 15px 32px;">
				<li>要從別處轉貼文字進來時，請用工具上的「<font color="red">清除word</font>」把複製的內容格式化為「<font color="red">純文字</font>」。一般做轉貼的動作時會一並去複製到其軟體相關的內碼，像從word裡複製文字時就會帶到很多其軟體用到的內碼，這會大大影嚮到網頁的瀏覽和資料的儲存，強烈建議把複製文字格式化為純文字的動作。</li>
				<li>在圖文編輯區打字時請注意伺服器的自動登出時間，一般伺服器都會有此設定，可先在記事本打完文字後在轉貼。(<font color="red">記事本裡的文字為純文字</font>)</li>
				<li>字型的設定上請依編輯器相關的功能來進行，請用<font color="red">圖片方式來製作其他的特殊文字</font>，避免瀏覽者的電腦不支援之問題。</li>
				<li>表格可用Dreamweaver這類的網頁編輯軟體製作，再用原始碼模式進行插入的動作，或用圖片的方式來插入。</li>
			</ol>
		</td>
	</tr>
</table>