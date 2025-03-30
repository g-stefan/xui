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
	Application - User
</div>
<div class="clear-both h-4"></div>
<div class="inline-block shadow-sm rounded-sm border border-xui-line overflow-hidden p-1">
<!-- item -->
<?php $appUserMod=""; ?>
<?php include("_application-user.content.source.mod.php"); ?>
<!-- /item -->
</div>
<div class="clear-both h-4"></div>

<div class="text-lg border-b-1 border-xui-line">
Application - User - Mini
</div>
<div class="clear-both h-4"></div>
<div class="inline-block shadow-sm rounded-sm border border-xui-line overflow-hidden p-1">
<!-- item -->
<?php $appUserMod="--mini"; ?>
<?php include("_application-user.content.source.mod.php"); ?>
<!-- /item -->
</div>
<div class="clear-both h-4"></div>

<div class="text-lg border-b-1 border-xui-line">
Application - User - Mini landscape
</div>
<div class="clear-both h-4"></div>
<div class="inline-block shadow-sm rounded-sm border border-xui-line overflow-hidden p-1">
<!-- item -->
<?php $appUserMod="--mini-landscape"; ?>
<?php include("_application-user.content.source.mod.php"); ?>
<!-- /item -->
</div>
<div class="clear-both h-4"></div>

<div class="text-lg border-b-1 border-xui-line">
Application - User - Mini landscape - closed
</div>
<div class="clear-both h-4"></div>
<div class="inline-block shadow-sm rounded-sm border border-xui-line overflow-hidden p-1">
<!-- item -->
<?php $appUserMod="--mini-landscape --closed"; ?>
<?php include("_application-user.content.source.mod.php"); ?>
<!-- /item -->
</div>

</div>
