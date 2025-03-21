<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="text-lg border-b-1 border-xui-line">
Button - Transparent - Icon left
</div>
<div class="clear-both h-4"></div>
<?php

$items = array(
	"default",
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"disabled",
	""
);

echo "<div class=\"grid grid-cols-3 grid-rows-3 gap-2\">";
foreach ($items as $value) {
	$cssClass = "";
	if (strlen($value)) {
		$cssClass = "--" . $value;
		if ($value == "default") {
			$cssClass = "";
		}		
	}	

	if (strlen($value)) {
		echo "<div class=\"xui-button --transparent --icon-left " . $cssClass . " w-48\" tabindex=\"0\">";
		echo "<i class=\"lucide-user\"></i>";
		echo ucfirst($value);
		echo "</div>";
	}	

}

echo "</div>";

