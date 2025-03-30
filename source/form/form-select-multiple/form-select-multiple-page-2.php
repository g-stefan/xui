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
		Form select - multiple - required
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
			echo "<form>";
			echo "<select class=\"xui-form-select " . $cssClass . " --multiple --required w-48\" id=\"form-select-" . $value . "-required\" name=\"form-select-" . $value . "-required\" " . $isDisabled . " multiple=\"multiple\" data-xui-select-theme=\"--" . $value . "\">";
			echo "<option value=\"volvo\">Volvo</option>";
			echo "<option value=\"saab\">Saab</option>";
			echo "<option value=\"fiat\">Fiat</option>";
			echo "<option value=\"audi\">Audi</option>";
			echo "</select>";
			echo "</form>";
		}

	}

	echo "</div>";
	?>

</div>

