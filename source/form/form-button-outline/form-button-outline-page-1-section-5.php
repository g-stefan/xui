<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="text-lg border-b-1 border-xui-line">
Form button - Outline - Icon - Circle
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

	$isDisabled = "";
	if ($value == "disabled") {
		$isDisabled = "disabled=\"disabled\"";
	}

	if (strlen($value)) {
		echo "<button class=\"xui-button --outline --icon --circle " . $cssClass . " \" tabindex=\"0\" " . $isDisabled . ">";				
		echo "<i class=\"lucide-user\"></i>";
		echo "</button>";
	}

}

echo "</div>";

