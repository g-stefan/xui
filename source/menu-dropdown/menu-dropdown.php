<?php
/*
//
// XUI
//
// Copyright (c) 2020-2021 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
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
		<link rel="stylesheet" href="css/xui-core.css">
		<link rel="stylesheet" href="css/xui-grid.css">
		<link rel="stylesheet" href="css/xui-text.css">
		<link rel="stylesheet" href="css/xui-elevation.css">
		<link rel="stylesheet" href="css/xui-palette.css">
		<link rel="stylesheet" href="css/xui-effect-ripple.css">
		<link rel="stylesheet" href="css/xui-text.css">
		<link rel="stylesheet" href="css/xui-button.css">
		<link rel="stylesheet" href="css/xui-button-transparent.css">
		<link rel="stylesheet" href="css/xui-action.css">
		<link rel="stylesheet" href="css/xui-menu.css">
		<link rel="stylesheet" href="css/xui-menu-dropdown.css">
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
			overflow: visible;
			border-radius: 6px;
			padding: 0px 0px 0px 0px;
			border: 1px solid #D3D7CF;
		}

		ul.xui.menu.-dropdown > li._space {
			display: none;
		}

		ul.xui.menu.-dropdown > li._label {
			display: none;
		}
		
		</style>
	</head>
	<body class="xui -bg-aluminium-1">

	<?php include("menu-dropdown-page-1.php"); ?>

	<script src="js/xui-core.min.js" defer></script>
	<script src="js/xui-effect-ripple.min.js" defer></script>
	<script src="js/xui-toggle.min.js" defer></script>
	</body>
</html>
