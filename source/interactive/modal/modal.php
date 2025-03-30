<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<!DOCTYPE html>
<html lang="en-GB" data-overlayscrollbars-initialize>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>XUI</title>
	<link rel="stylesheet" href="../vendor/roboto-regular.css">
	<link rel="stylesheet" href="../vendor/lucide-icons.min.css">
	<link rel="stylesheet" href="../vendor/overlayscrollbars.min.css">
	<link rel="stylesheet" href="../app.min.css">
</head>

<body class="xui-overlay-scrollbars bg-xui-rock-1-500" data-overlayscrollbars-initialize>

	<?php include("modal-page-1.php"); ?>	

	<script src="../vendor/overlayscrollbars.browser.es6.min.js" defer></script>
	<script src="../release/xui.core.min.js" defer></script>
	<script src="../release/xui.design.min.js" defer></script>
	<script src="../release/xui.interactive.min.js" defer></script>

	<script>
		window.addEventListener("load", function () {
			document.getElementById("button-open-modal").addEventListener("click", function () {
				XUI.Modal.activate("modal-dialog");
			});
		});
	</script>

</body>

</html>

