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
	ul.xui-menu.--dropdown>li.xui-menu_space {
		display: none !important;
	}

	ul.xui-menu.--dropdown>li.xui-menu_label {
		display: none !important;
	}
</style>


<div class="xui-page --A4 --presentation shadow-md mx-auto" style="overflow:visible;">

	<div class="text-lg border-b-1 border-xui-line">
		Menu - Dropdown
	</div>
	<div class="clear-both h-4"></div>

	<div class="inline-block w-180 shadow-sm rounded-sm border border-xui-line overflow-visible">
		<!-- item -->

		<ul class="xui-menu --dropdown">
			<?php include("source/menu/menu/_menu.content.source.php"); ?>
		</ul>

		<!-- /item -->
	</div>

</div>