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
	Form text - Icon left and right
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
	"lucide-check",
	"lucide-check",
	"lucide-triangle-alert",
	"lucide-circle-alert",
	"lucide-check"
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
		echo "<div class=\"xui-form-textarea --icon-left --icon-right " . $cssClass . "\">";
		echo "<textarea name=\"text\" rows=\"4\" cols=\"32\" " . $isDisabled . ">" . ucfirst($value) . "</textarea>";
		echo "<i class=\"lucide-user\"></i>";
		echo "<i class=\"" . $icon[$itemIndex] . "\"></i>";
		echo "</div>";
		echo "</form>";
	}

	++$itemIndex;
}

echo "</div>";

