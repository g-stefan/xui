<?php
/*
//
// XUI
//
// Copyright (c) 2020 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x" style="overflow:visible;">

<div class="xui text -label-40">
	Menu - Popup
</div>
<div class="xui separator-15"></div>

<div class="xui button -icon -size-x32 -circle -transparent -effect-ripple" onclick="document.getElementById('popup-menu').classList.toggle('-open');XUI.Capture.set([document.getElementById('popup-menu'),this],function(e,elList){elList[0].classList.remove('-open');});">
	<i class="material-icons">person</i>
</div>

<div class="xui overflow">
	<ul class="xui menu -popup" id="popup-menu" >
	<?php include("source/menu/_menu.content.source.php"); ?>
	</ul>
</div>

<div style="border-top: 1px solid #DDDDDD;"></div>

</div>
