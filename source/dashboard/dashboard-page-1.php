<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>

<div class="xui page -elevation-4 -size-A4 -landscape -center-x">

<div class="xui text -label-40">
	Dashboard
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->

<div class="xui dashboard">
	<!-- app-header -->
	<div class="xui app-header">
		<?php include("source/app-brand/_app-brand.content.source.php"); ?>
		<div class="xui app-bar">
			<div class="xui text -size-h24x40 -left">
				Application
			</div>
			<div class="xui button -icon -size-x32 -circle -right -transparent -effect-ripple  -toolbar">
				<i class="lucide-mail"></i>
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
