<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui-page --A4 --presentation --landscape shadow-md mx-auto">

<div class="text-lg border-b-1 border-xui-line">
	Dashboard - mini
</div>
<div class="clear-both h-4"></div>

<div class="shadow-sm rounded-sm border border-xui-line overflow-hidden p-0">
<!-- item -->

<div class="xui-dashboard --mini --closed h-120 overflow-visible" id="dashboard-mode-mini">
	<!-- app-header -->
	<div class="xui-app-header">
		<?php include("source/application/app-brand/_app-brand.content.source.php"); ?>
		<div class="xui-app-bar">
			<div class="xui-button --icon float-left --transparent xui-effect-ripple --toolbar" onclick="XUI.Dashboard.toggleMini('dashboard-mode-mini');">
				<i class="lucide-menu"></i>
			</div>
			<div class="xui-app-bar_text">
				Application
			</div>
			<div class="xui-button --icon --size-x32 --circle float-right --transparent xui-effect-ripple --toolbar">
				<i class="lucide-mail"></i>
			</div>
		</div>
	</div>
	<!-- /app-header -->
	<div class="xui-navigation-drawer">
		<div class="xui-navigation-drawer_content">
			<!-- app-user -->
			<?php include("source/application/app-user/_app-user.content.source.php"); ?>
			<!-- /app-user -->
			<!-- menu -->
			<ul class="xui-menu">
				<?php include("source/menu/menu/_menu.content.source.php"); ?>
			</ul>
			<!-- /menu -->
		</div>
	</div>
	<div class="xui-content">
		<!-- content -->

		<!-- /content -->
	</div>
	<div class="xui-content_cover"></div>
</div>


<!-- /item -->
</div>

</div>