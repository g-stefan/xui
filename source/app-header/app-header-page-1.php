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

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Application - Header
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation">
<!-- item -->

<div class="xui app-header -toggle" data-xui-toggle-group="xui-app-header">
	<?php include("source/app-brand/_app-brand.content.source.php"); ?>
	<div class="xui app-bar">
		<div class="xui button -icon -left -transparent -effect-ripple -toggle" data-xui-toggle-class="-mini" data-xui-toggle-action="xui-app-header">
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

<!-- /item -->
</div>

</div>
