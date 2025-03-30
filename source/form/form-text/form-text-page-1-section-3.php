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
Form text - Icon right
</div>
<div class="clear-both h-4"></div>
<?php

$items = array(
	"default",
	"success",
	"warning",
	"danger",
	"disabled",
	""
);

$icon = array(
	"lucide-user",
	"lucide-check",
	"lucide-triangle-alert",
	"lucide-circle-alert",
	"lucide-user"
);

echo "<div class=\"grid grid-cols-3 grid-rows-3 gap-2\">";
$itemIndex = 0;
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
		echo "<form>";
		echo "<div class=\"xui-form-text --icon-right " . $cssClass . "\">";
		echo "<input type=\"text\" name=\"text\" value=\"" . ucfirst($value) . "\" " . $isDisabled . "></input>";
		echo "<i class=\"" . $icon[$itemIndex] . "\"></i>";
		echo "</div>";
		echo "</form>";
	}

	++$itemIndex;
}

echo "</div>";

