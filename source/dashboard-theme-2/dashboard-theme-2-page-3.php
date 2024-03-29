<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>

<div class="xui page -elevation-4 -size-A4 -landscape -center-x" style="overflow:visible;">

<div class="xui text -label-40">
	Dashboard - Over
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->

<div class="xui dashboard -over -closed" id="dashboard-mode-over" style="overflow:visible;">
	<!-- app-header -->
	<div class="xui app-header">
		<?php include("source/app-brand/_app-brand.content.source.php"); ?>
		<div class="xui app-bar">
			<div class="xui button -icon -left -transparent -effect-ripple  -toolbar" onclick="XUI.Dashboard.toggleOver('dashboard-mode-over');">
				<i class="lucide-menu"></i>
			</div>
			<div class="xui text -size-h24x40 -left">
				Application
			</div>
			<div class="xui button -icon -size-x32 -circle -right -transparent -effect-ripple  -toolbar">
				<i class="lucide-mail"></i>
			</div>
		</div>
		<div class="xui app-user-info">
			<!-- app-user -->
			<?php include("source/app-user/_app-user.content.source.php"); ?>
			<!-- /app-user -->
			<div class="xui button -icon -size-x32 -circle -transparent -effect-ripple  -toolbar" id="popup-menu-user-action-3">
				<i class="lucide-chevron-down"></i>
			</div>
			<ul class="xui menu -popup" id="popup-menu-user-3">
				<?php include("_popup-menu-user.source.php"); ?>
			</ul>
		</div>
	</div>
	<!-- /app-header -->
	<div class="xui navigation-drawer">
		<div class="xui _content">
			<!-- menu -->
			<ul class="xui menu">
				<?php include("source/menu/_menu.content.source.php"); ?>
			</ul>
			<!-- /menu -->
		</div>
	</div>
	<div class="xui content">
		<!-- content -->

		<!-- /content -->
	</div>
	<div class="xui content-cover"></div>
</div>

<!-- /item -->
</div>


</div>
