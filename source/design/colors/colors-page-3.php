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
		Colors - Palette - Tailwind
	</div>
	<div class="clear-both h-4"></div>
	<div class="grid grid-cols-1 gap-8">
		<?php

		$items = array(
			"violet" => 1,
			"purple" => 1,
			"fuchsia" => 1,

			"pink" => 1,
			"rose" => 1,
			"slate" => 1,

			"gray" => 1,
			"zinc" => 1,
			"neutral" => 1,

			"stone" => 1
		);

		$steps = array(
			50,
			100,
			200,
			300,
			400,
			500,
			600,
			700,
			800,
			900,
			950
		);

		$listOfItems = array_chunk($items, 3, true);
		foreach ($listOfItems as &$items_) {
			echo "<div class=\"flex items-center justify-center gap-8\">";
			foreach ($items_ as $value => $length) {
				if ($length > 0) {
					echo "<div class=\"inline-block w-60 shadow-md rounded-sm border border-xui-line overflow-hidden\">";
					echo "<div class=\"h-39 grid grid-cols-" . $length . " grid-rows-13\">";
					for ($row = 0; $row < count($steps); ++$row) {
						if ($length == 1) {
							echo "<div class=\"bg-" . $value . "-" . $steps[$row] . " " . (($row == 5) ? "h-9 row-span-3" : "h-3") . "\"></div>";
						} else {
							for ($i = 1; $i <= $length; ++$i) {
								echo "<div class=\"bg-" . $value . "-" . $i . "-" . $steps[$row] . " " . (($row == 5) ? "h-9 row-span-3" : "h-3") . "\"></div>";
							}
						}
					}
					echo "</div>";
					echo "<div class=\"text-base leading-10 text-center h-10 text-xui-rock-5-500\">";
					echo $value;
					echo "</div>";
					echo "</div>";
				}
			}
			echo "</div>";
		}

		?>

	</div>
</div>