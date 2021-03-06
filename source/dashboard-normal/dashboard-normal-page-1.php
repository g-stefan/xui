<?php
/*
//
// XUI
//
// Copyright (c) 2020-2021 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>

<div class="xui page -elevation-4 -size-A4 -landscape -center-x" style="overflow:visible;">

<div class="xui text -label-40">
	Dashboard - Normal
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation">
<!-- item -->

<div class="xui dashboard -normal -open" id="dashboard-mode-normal" style="overflow:visible;">
	<!-- app-header -->
	<div class="xui app-header">
		<?php include("source/app-brand/_app-brand.content.source.php"); ?>
		<div class="xui app-bar">
			<div class="xui button -icon -left -transparent -effect-ripple" onclick="XUI.Dashboard.toggleNormal('dashboard-mode-normal');">
				<i class="material-icons">menu</i>
			</div>
			<div class="xui text -size-h24x40 -left">
				Application
			</div>
			<div class="xui button -icon -size-x32 -circle -right -transparent -effect-ripple">
				<i class="material-icons">mail_outline</i>
			</div>
		</div>
	</div>
	<!-- /app-header -->
	<div class="xui navigation-drawer">
		<div class="xui _content">
			<!-- app-user -->
			<?php include("source/app-user/_app-user.content.source.php"); ?>
			<!-- /app-user -->
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
