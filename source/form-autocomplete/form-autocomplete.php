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
		<link rel="stylesheet" href="vendor/jquery-autocompleter/jquery.autocompleter.css">
		<link rel="stylesheet" href="css/xui-core.css">
		<link rel="stylesheet" href="css/xui-grid.css">
		<link rel="stylesheet" href="css/xui-text.css">
		<link rel="stylesheet" href="css/xui-elevation.css">
		<link rel="stylesheet" href="css/xui-palette.css">
		<link rel="stylesheet" href="css/xui-form-text.css">
		<link rel="stylesheet" href="css/xui-form-autocomplete.css">
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

	<?php include("form-autocomplete-page-1.php"); ?>

	<script src="vendor/jquery/jquery-3.6.0.min.js" defer></script>
	<script src="vendor/jquery-autocompleter/jquery.autocompleter.min.js" defer></script>
	<script>
		window.addEventListener("load", function(){
			var list=[
				"default",
				"primary",
				"secondary",
				"success",	
				"danger",
				"warning",
				"info"
			];
			for(var k=0;k<list.length;++k){
				$("#autocomplete-"+list[k]).autocompleter({ source: [
					{ "value": "one", "label":"one" },
					{ "value": "two", "label":"two" },
					{ "value": "three", "label":"three" },
					{ "value": "test", "label":"test" },
					{ "value": "foo", "label":"foo" }
					],
					delay: 300,
					highlightMatches: true,
					limit: 10,
					cache: false,
					customClass:["_autocomplete"]
				});
			};
		});
	</script>
	</body>
</html>
