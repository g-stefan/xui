<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Application - User
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->
<?php $appUserMod=""; ?>
<?php include("_app-user.content.source.mod.php"); ?>
<!-- /item -->
</div>

<div class="xui separator-15"></div>

<div class="xui text -label-40">
	Application - User - Mini
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->
<?php $appUserMod="-mini"; ?>
<?php include("_app-user.content.source.mod.php"); ?>
<!-- /item -->
</div>

<div class="xui separator-15"></div>

<div class="xui text -label-40">
	Application - User - Mini landscape
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->
<?php $appUserMod="-mini-landscape"; ?>
<?php include("_app-user.content.source.mod.php"); ?>
<!-- /item -->
</div>

<div class="xui separator-15"></div>

<div class="xui text -label-40">
	Application - User - Mini landscape - closed
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation -bd-theme-line">
<!-- item -->
<?php $appUserMod="-mini-landscape -closed"; ?>
<?php include("_app-user.content.source.mod.php"); ?>
<!-- /item -->
</div>

</div>
