<?php
/*
// XUI
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<!DOCTYPE html>
<html lang="en-GB" class="xui">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>XUI</title>
		<link rel="stylesheet" href="vendor/normalize/normalize.min.css">
		<link rel="stylesheet" href="vendor/roboto-regular/roboto-regular.css">
		<link rel="stylesheet" href="vendor/material-icons/material-icons.css">
		<link rel="stylesheet" href="vendor/air-datepicker/air-datepicker.css">
		<link rel="stylesheet" href="css/xui-core.css">
		<link rel="stylesheet" href="css/xui-grid.css">
		<link rel="stylesheet" href="css/xui-text.css">
		<link rel="stylesheet" href="css/xui-elevation.css">
		<link rel="stylesheet" href="css/xui-palette.css">
		<link rel="stylesheet" href="css/xui-text.css">
		<link rel="stylesheet" href="css/xui-form-text.css">
		<link rel="stylesheet" href="css/xui-form-datepicker.css">
		<style>

		.page {
			border-radius: 3px;
			margin-top: 64px;
			margin-bottom: 64px;
			background-color: #FFFFFF;
			overflow: hidden;
			padding: 30px 30px 30px 30px;
		}

		.page:first-child {
			padding-bottom: 0px;
		}

		@media print {
			.page {
				margin: 0px 0px 0px 0px;
				page-break-after: always;
			}	
		}
		
		</style>
	</head>
	<body class="xui -bg-aluminium-1">

	<?php include("form-datepicker-page-1.php"); ?>

	<script src="vendor/jquery/jquery-3.6.3.min.js" defer></script>
	<script src="vendor/air-datepicker/air-datepicker.js" defer></script>
	<script src="vendor/air-datepicker/locale/en.js" defer></script>
	<script>
		window.addEventListener("load", function(){
			var datePicker1=new AirDatepicker("#datepicker-1", {autoClose:true,locale:AirDatepickerLocaleEN});
			var datePicker2=new AirDatepicker("#datepicker-2", {autoClose:true,timepicker:true,locale:AirDatepickerLocaleEN});
			var datePicker3=new AirDatepicker("#datepicker-3", {autoClose:true,timepicker:true,onlyTimepicker:true,locale:AirDatepickerLocaleEN,timeFormat:"HH:mm"});
		});
	</script>
	</body>
</html>
