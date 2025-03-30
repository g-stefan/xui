<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

?>

<style>
	.xui.card.nano.icon {
		margin: 6px;
		float: left;
		border-radius: 6px;
	}

	.xui.card.nano.icon>div:nth-child(1) {
		background-color: white;
		padding: 8px;
		line-height: 24px;
	}
</style>

<?php

include("_lucide-icons.php");

$listOfItems = array_chunk($lucideIcons, 6 * 14, true);
foreach ($listOfItems as &$items_) { ?>
	<div class="xui-page --A4 --presentation shadow-md mx-auto">
		<div class="text-lg border-b-1 border-xui-line">Lucide Icons</div>
		<div class="clear-both h-4"></div>
		<div class="flex items-center justify-center">
			<div class="grid grid-cols-6 grid-rows-14 gap-2">
				<?php

				foreach ($items_ as $icon) {
					echo "<div class=\"inline-block w-28 shadow-sm rounded-sm border border-xui-line overflow-hidden\">";
					echo "<div class=\"text-base leading-10 text-center h-10 flex flex-col justify-center items-center\">";
					echo "<i class=\"lucide-" . $icon . "\"></i>";
					echo "</div>";
					echo "<div class=\"text-xs leading-5 text-center h-6 truncate text-xui-rock-5-500 p-1\">" . $icon . "</div>";
					echo "</div>";
				}

				?>
			</div>
		</div>
	</div>
	<?php
}
