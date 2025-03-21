<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<script>
	function iconClick() {
		document.getElementById('popup-menu').classList.toggle('--open');
		XUI.Capture.set([document.getElementById('popup-menu'), this], function (e, elList) {
			elList[0].classList.remove('--open');
		});
	}
</script>
<div class="xui-page --A4 --presentation shadow-md mx-auto" style="overflow:visible;">

	<div class="text-lg border-b-1 border-xui-line">
		Menu - Popup
	</div>
	<div class="clear-both h-4"></div>

	<div class="inline-block cursor-pointer w-[32px] h-[32px] p-[4px] rounded-full text-center xui-effect-ripple" onclick="iconClick();">
		<i class="lucide-user"></i>
	</div>

	<div class="overflow-visible h-0">
		<ul class="xui-menu --popup" id="popup-menu">
			<?php include("source/menu/menu/_menu.content.source.php"); ?>
		</ul>
	</div>

</div>