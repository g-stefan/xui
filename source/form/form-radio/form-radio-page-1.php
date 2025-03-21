<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui-page --A4 --presentation shadow-md mx-auto">
	<div class="text-lg border-b-1 border-xui-line">
		Form radio
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

	echo "<div class=\"grid grid-cols-1 grid-rows-6 gap-2\">";
	$count = 0;
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
			echo "<div class=\"grid grid-cols-2 grid-rows-1 gap-2 w-96\">";
			echo "<div class=\"xui-form-radio " . $cssClass . "\">";
			echo "<input type=\"radio\" id=\"radio-item-1-" . $count . "\" name=\"radio-item\" value=\"radio-value-1\" checked=\"checked\" tabindex=\"0\" " . $isDisabled . "></input>";
			echo "<label for=\"radio-item-1-" . $count . "\" " . $isDisabled . ">" . ucfirst($value) . " 1</label>";
			echo "</div>";
			echo "<div class=\"xui-form-radio " . $cssClass . "\">";
			echo "<input type=\"radio\" id=\"radio-item-2-" . $count . "\" name=\"radio-item\" value=\"radio-value-2\" tabindex=\"0\" " . $isDisabled . "></input>";
			echo "<label for=\"radio-item-2-" . $count . "\" " . $isDisabled . ">" . ucfirst($value) . " 2</label>";
			echo "</div>";

			echo "</div>";
			echo "</form>";
		}

		++$count;
	}

	echo "</div>";
	?>
</div>