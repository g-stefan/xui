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
	Form label
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

	if (strlen($value)) {
		echo "<form>";
		echo "<label class=\"xui-form-label " . $cssClass . " w-48\">" . ucfirst($value) . "</label>";
		echo "</form>";
	}	

}

?>

</div>
