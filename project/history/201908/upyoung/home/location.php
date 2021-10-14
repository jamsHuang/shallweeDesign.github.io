<?php
	define('path_coding', 'm/php/');

	include('m/common.php');
	include(path_coding.'Mysql_class.php');
	include(path_coding.'function.php');
	$result=new mysql;
	$result->connection($DB_common);
?>
<!doctype html>
<html lang="zh-Hant-TW">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-117343653-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-117343653-2');
</script>
<meta name="description" content="美國優必洗Huebsch家用洗烘衣機，美國原裝進口，商用等級結構與零配件，強調堅固、耐用、專業的特性。上洋公司為美國優必洗Huebsch台灣總代理商，專業經營商用洗衣設備超過35年。全台共計6個支援維修站，超過100人的服務維修團隊，提供顧客最即時、迅速、有效率的高品質服務。">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1">
<title>上洋‧美國優必洗 - 經銷據點</title>
<link rel="shortcut icon" type="image/png" href="images/icon32.png" />
<link rel="apple-touch-icon-precomposed" href="images/icon128.png" />
<link rel="shortcut icon" href="images/favicon.ico" />
<link rel="shortcut icon" href="images/favicon.icns" />
 <!-- Bootstrap -->
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" href="js/libs/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.css" />
<link href="css/style.css" rel="stylesheet">
<link href="css/location.css" rel="stylesheet">
</head>

<body>
<button type="button" class="navbar-toggle collapsed"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
<div id="wrap">
	<div id="head-wrap">
		<div id="header" class="container">
			<div id="logo"><a href="index.html" alt="上洋‧美國優必洗"><img src="images/logo.png" /><img src="images/logo_txt.png" class="desktop" /></a></div>
			<div id="nav">
				<ul>
					<li><a href="index.html" alt="首頁">首頁</a></li>
					<li><a href="household.html" alt="家用產品">家用產品</a></li>
					<li><a href="http://www.upyoung-huebsch.com.tw" target="_blank" alt="商用產品">商用產品</a></li>
					<li class="current"><a href="location.php" alt="經銷據點">經銷據點</a></li>
					<li><a href="aboutus.html" alt="關於上洋">關於上洋</a></li>
					<li>
						<a href="mailto:home@upyoung.com.tw" alt="連絡我們" target="_blank"><img src="images/icons/icon_email.png" /></a>
						<a href="https://www.facebook.com/huebschTW/" alt="Facebook" target="_blank"><img src="images/icons/icon_fb.png" /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<div id="breadcrumbs">
		<ul class="container">
			<li class="icon"><a href="index.html"><img src="images/icons/icon_home.png" /></a></li>
			<li><a href="index.html">HOME</a></li>
			<li>/</li>
			<li class="current">經銷據點</li>
		</ul>
	</div>
	
    <div id="main" class="container">
		<div class="head">
			<div><h1>尋找距離您最近的據點</h1></div>
			<div class="select">
				<div class="styled-select">
				   <select id="mzipcode1" name="mzipcode1">
					  <option value="0">請選擇縣市</option>
						<?php
	$sql='select DISTINCT A.aid,A.city from '.$table_zipcode.' as A inner join '.$tw_store.' as B on A.aid=B.mzipcode1 and B.menable=\'1\' order by A.aid asc ';
	$result->SQLrequest($sql);
	$count=$result->RowNum();
	if( $count>0 ){
		for( $i=0;$i<$count;$i++ ){
			$record=$result->RowArray();
			echo '<option value="'.$record['aid'].'">'.stripslashes($record['city']).'</option>';
		}
	}
						?>
				   </select>
				</div>
				<div class="styled-select">
				   <select id="mzipcode2" name="mzipcode2">
					  <option value="0">請選擇區域</option>
				   </select>
				</div>
			</div>
		</div>
		
		<div id="mapWrap">
			
			<div class="lsWrap mobile">
				<div class="ls">
				<?php
						$sql='select A.aid,A.mtitle,B.city,B.area,A.maddress,A.mmail from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' order by A.msort desc';
						$result->SQLrequest($sql);
						$count=$result->RowNum();
						if($count>0){
							for($j=0;$j<$count;$j++){
								$record=$result->RowArray();
								echo '
									<a href="#map-canvas" onclick="geocodeAddress(\''.stripslashes($record['aid']).'\');"><div class="item">
										<h4>'.stripslashes($record['mtitle']).'</h4>
										<div class="address">'.stripslashes($record['city']).stripslashes($record['area']).stripslashes($record['maddress']).'</div>
										<div><a href="mailto:'.stripslashes($record['mmail']).'">'.stripslashes($record['mmail']).'</a></div>
									</div></a>';
							}
						}
				?>
					<div class="item" style="display:none;">
						<h4>力士電業行</h4>
						<div class="address">挑園市桃園區國強七街89號</div>
						<div><a href="mailto:b895b008@hotmail.com">b895b008@hotmail.com</a></div>
					</div>
				</div>
			</div>
			
			<div id="map">
                <div id="mapdetail" style="display:none;">
					<div class="closebtn text-center"><a href="javascript:void(0)" onclick="show_div()"><i class="fa fa-times"></i></a></div>
					<div class="row">
					<div class="col-sm-4 hidden-sm hidden-xs"><img src="images/qrcode.jpg"></div>
					<div class="col-sm-8">
					<h3>祥銘貿易有限公司</h3>
					<dt>台北市大安區和平東路一段15號1樓</dt>
					<dt class="opentime">10:00~22:00 (無公休)</dt>
					<dt><a href="mailto:hi2858@yahoo.com.tw">hi2858@yahoo.com.tw</a></dt><br>
					<p class=" visible-xs"><a href="https://line.me/ti/p/"><img src="images/line_btn.png" alt="加入好友"></a></p>
					</div>
					</div>
                </div>
                <div id="map-canvas"></div>
			</div>
			
			<div class="lsWrap desktop">
				<div class="ls">
				<?php
						$sql='select A.aid,A.mtitle,B.city,B.area,A.maddress,A.mmail from '.$tw_store.' as A inner join '.$table_zipcode.' as B on A.mzipcode2=B.id and A.menable=\'1\' order by A.msort desc';
						$result->SQLrequest($sql);
						$count=$result->RowNum();
						if($count>0){
							for($j=0;$j<$count;$j++){
								$record=$result->RowArray();
								echo '
									<a href="#map-canvas" onclick="geocodeAddress(\''.stripslashes($record['aid']).'\');"><div class="item">
										<h4>'.stripslashes($record['mtitle']).'</h4>
										<div class="address">'.stripslashes($record['city']).stripslashes($record['area']).stripslashes($record['maddress']).'</div>
										<div><a href="mailto:'.stripslashes($record['mmail']).'">'.stripslashes($record['mmail']).'</a></div>
									</div></a>';
							}
						}
				?>
					<div class="item" style="display:none;">
						<h4>力士電業行</h4>
						<div class="address">挑園市桃園區國強七街89號</div>
						<div><a href="mailto:b895b008@hotmail.com">b895b008@hotmail.com</a></div>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
    
   <div id="footer" class="container-fluid">
		<div class="desktop">
			© 2016 <a href="http://www.upyoung.com.tw" target="_blank"><span>上洋產業股份有限公司 UP YOUNG CORNERSTONE CORP.</span></a> All Rights Reserved. |
			<a href="mailto:home@upyoung.com.tw" alt="連絡我們" target="_blank"><img src="images/icons/icon_email2.png" /></a>|
			<a href="https://www.facebook.com/huebschTW/" alt="Facebook" target="_blank"><img src="images/icons/icon_fb2.png" /></a>
		</div>
		<div class="mobile">
			© 2016 <br /><a href="http://www.upyoung.com.tw" target="_blank"><span>上洋產業股份有限公司 <br />UP YOUNG CORNERSTONE CORP.</span></a> <br />All Rights Reserved. |
			<a href="mailto:home@upyoung.com.tw" alt="連絡我們" target="_blank"><img src="images/icons/icon_email2.png" /></a>|
			<a href="https://www.facebook.com/huebschTW/" alt="Facebook" target="_blank"><img src="images/icons/icon_fb2.png" /></a>
		</div>
	</div>
	
	
</div>

<div class="bottomScrollTop scrollTop"><a href="#"><img src="images/scrollTop.png" /></a></div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="js/libs/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/libs/jquery.mousewheel.min.js" ></script>
<script src="js/libs/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/libs/device.min.js"></script>
<script src="js/tpl.js"></script>
<script src="js/location.js"></script>

<!-- Google Maps javascript -->
	<!--script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&amp;signed_in=true"></script-->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvZrzhGIhDyTiiciH6k8DErxXGMgjaL-c&callback=initMap" ></script>
	<script type="text/javascript" src="js/google.map.config.js"></script>
<script type="text/javascript">
<!--
var city_str,area_str;
$(function(){
	$('#mzipcode1').change(function() {
		show_div();
		var city_id = $('#mzipcode1 option:selected').val();
		city_str = $('#mzipcode1 option:selected').text();
		$('#mzipcode2').empty().append($('<option></option>').val('0').text('請選擇區域'));
		if(city_id!='0'){
			$.ajax({
				type: 'POST',
				url: 'm/zipcode_show.php',
				data: {mzipcode1:city_id,n:1},
				dataType: 'text',
				success: function(data) {
					if(data!='ERROR'){
						var str_zone = data.split(',');
						for(var i=0;i<str_zone.length;i++){
							var show_str=str_zone[i].split('-');
							$('#mzipcode2').append($('<option></option>').val(show_str[0]).text(show_str[1]));
						}
						var geocoder=new google.maps.Geocoder();
						var resultsMap=new google.maps.Map(document.getElementById("map-canvas"),{
									zoom: 12,
									mapTypeId: google.maps.MapTypeId.ROADMAP,
									draggable:false,
									scrollwheel: false
								});
						geocoder.geocode({'address': city_str}, function(results, status) {
							if (status === google.maps.GeocoderStatus.OK) {
								resultsMap.setCenter(results[0].geometry.location);
								var marker = new google.maps.Marker({
									map: resultsMap
								});
							} else {
								alert('Geocode was not successful for the following reason: ' + status);
							}
						});
					}else
						alert(data);
				}
			});
		}
		$.ajax({
			type: 'POST',
			url: 'location_show.php',
			data: {mzipcode1:city_id},
			dataType: 'text',
			success: function(data) {
				if(data!='ERROR'){
					$('.ls').html(data);
				}else
					alert(data);
			}
		});
	});
	if( $('#mzipcode1 option:selected').val()!='0' )
		$('#mzipcode1').change();
	$('#mzipcode2').change(function() {
		show_div();
		var area_id = $('#mzipcode2 option:selected').val();
		area_str = $('#mzipcode2 option:selected').text();
		$('#ls').empty();
		if(area_id!='0'){
			$.ajax({
				type: 'POST',
				url: 'location_show.php',
				data: {mzipcode2:area_id},
				dataType: 'text',
				success: function(data) {
					if(data!='ERROR'){
						$('.ls').html(data);
						var geocoder=new google.maps.Geocoder();
						var resultsMap=new google.maps.Map(document.getElementById("map-canvas"),{
									zoom: 14,
									mapTypeId: google.maps.MapTypeId.ROADMAP,
									draggable:false,
									scrollwheel: false
								});
						geocoder.geocode({'address': city_str+area_str}, function(results, status) {
							if (status === google.maps.GeocoderStatus.OK) {
								resultsMap.setCenter(results[0].geometry.location);
								var marker = new google.maps.Marker({
									map: resultsMap
								});
							} else {
								alert('Geocode was not successful for the following reason: ' + status);
							}
						});
					}else
						alert(data);
				}
			});
		}else{
			var city_id = $('#mzipcode1 option:selected').val();
			$.ajax({
				type: 'POST',
				url: 'location_show.php',
				data: {mzipcode1:city_id},
				dataType: 'text',
				success: function(data) {
					if(data!='ERROR'){
						$('.ls').html(data);
					}else
						alert(data);
				}
			});
		}
	});
});
//-->
</script>

</body>
</html>
