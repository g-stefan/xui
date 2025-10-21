<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui-page --A4 --presentation --landscape shadow-md mx-auto">

<div class="text-lg border-b-1 border-xui-line">
	Dashboard - normal
</div>
<div class="clear-both h-4"></div>

<div class="shadow-sm rounded-sm border border-xui-line overflow-hidden p-0">
<!-- item -->

<div class="xui-dashboard --normal --open h-120" id="dashboard-mode-normal">
	<!-- application-header -->
	<div class="xui-application-header">
		<?php include("source/application/application-brand/_application-brand.content.source.php"); ?>
		<div class="xui-application-bar">
			<div class="xui-button --icon float-left --transparent xui-effect-ripple --toolbar" onclick="XUI.Dashboard.toggleNormal('dashboard-mode-normal');">
				<i class="lucide-menu"></i>
			</div>
			<div class="xui-application-bar_text">
				Application
			</div>
			<div class="xui-button --icon --size-x32 --circle float-right --transparent xui-effect-ripple --toolbar">
				<i class="lucide-mail"></i>
			</div>
		</div>
	</div>
	<!-- /application-header -->
	<div class="xui-navigation-drawer">
		<div class="xui-navigation-drawer_content xui-overlay-scrollbars">
			<!-- application-user -->
			<?php include("source/application/application-user/_application-user.content.source.php"); ?>
			<!-- /application-user -->
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