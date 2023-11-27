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
		<link rel="stylesheet" href="vendor/overlayscrollbars/overlayscrollbars.min.css">
		<link rel="stylesheet" href="css/xui.complete.min.css">
		<link rel="stylesheet" href="css/xui-dashboard-theme-3.css">
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

		.item-presentation {
			overflow: hidden;
			border-radius: 6px;
			padding: 0px 0px 0px 0px;
			border: 1px solid #000000;

			height: 480px;
		}
		
		</style>
	</head>
	<body class="xui -bg-aluminium-1 -overlay-scrollbars">
                                    
	<?php include("dashboard-theme-3-page-1.php"); ?>
	<?php include("dashboard-theme-3-page-2.php"); ?>
	<?php include("dashboard-theme-3-page-3.php"); ?>

	<script src="vendor/jquery/jquery.min.js" defer></script>
	<script src="vendor/overlayscrollbars/overlayscrollbars.browser.es6.min.js" defer></script>
	<script src="js/xui.complete.min.js" defer></script>
	</body>
</html>
