<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
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
	<link rel="stylesheet" href="vendor/overlayscrollbars/overlayscrollbars.min.css">
	<link rel="stylesheet" href="vendor/eva-icons-font/eva-icons.min.css">
	<link rel="stylesheet" href="vendor/mingcute-icons-font/mingcute-icons.min.css">	
	<link rel="stylesheet" href="vendor/lucide-icons-font/lucide-icons.min.css">
			<link rel="stylesheet" href="css/xui-core.css">
		<link rel="stylesheet" href="css/xui-page.css">
		<link rel="stylesheet" href="css/xui-position.css">
		<link rel="stylesheet" href="css/xui-separator.css">
	<link rel="stylesheet" href="css/xui-grid.css">
	<link rel="stylesheet" href="css/xui-text.css">
	<link rel="stylesheet" href="css/xui-elevation.css">
	<link rel="stylesheet" href="css/xui-palette.css">
	<link rel="stylesheet" href="css/xui-effect-ripple.css">
	<link rel="stylesheet" href="css/xui-box.css">
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

	.item-icon {
		display: block;
		float: left;
		padding: 8px 8px 8px 8px;
		margin: 8px 8px 8px 8px;		
		width: 120px;
		height: 64px;
		border-radius: 6px;
	}

	.item-icon > i {
		text-align: center;
		margin-left: calc(50% - 12px);
	}	

	.item-icon > span {		
		display: block;
		text-align: center;
		margin-top: 4px;
		font-size: 11px;
		white-space: nowrap;
	}
	</style>
</head>

<body class="xui -bg-aluminium-1 -overlay-scrollbars">
	<?php include("icons-page-1.php"); ?>
	<div class="xui separator" />
	<script src="vendor/overlayscrollbars/overlayscrollbars.browser.es6.min.js" defer></script>
	<script src="vendor/jquery/jquery.min.js" defer></script>
	<script src="vendor/cropit/jquery.cropit.js" defer></script>
	<script src="js/xui-core.min.js" defer></script>
	<script src="js/xui-overlayscrollbars.min.js" defer></script>
	<script src="js/xui-element.min.js" defer></script>
	<script src="js/xui-effect-ripple.min.js" defer></script>	
</body>

</html>
