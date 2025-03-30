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
	Application - Header
</div>
<div class="clear-both h-4"></div>

<div class="block shadow-sm rounded-sm border border-xui-line overflow-hidden p-1">
<!-- item -->

<div class="xui-application-header xui-toggle" data-xui-toggle-group="xui-application-header">
	<?php include("source/application/application-brand/_application-brand.content.source.php"); ?>
	<div class="xui-application-bar">
		<div class="xui-button --icon --transparent --toolbar xui-effect-ripple xui-toggle float-left" data-xui-toggle-class="--mini" data-xui-toggle-action="xui-application-header">
			<i class="lucide-menu"></i>
		</div>
		<div class="xui-application-bar_text">
			Application
		</div>		
		<div class="xui-button --icon --size-x32 --circle --transparent --toolbar xui-effect-ripple float-right">
			<i class="lucide-mail"></i>
		</div>
	</div>
</div>

<!-- /item -->
</div>

</div>
