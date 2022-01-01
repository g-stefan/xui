<?php
/*
//
// XUI
//
// Copyright (c) 2020-2022 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Modal
</div>
<div class="xui separator-15"></div>

<div class="xui button -primary" id="button-open-modal">Open modal</div>

<div class="xui modal" id="modal-dialog">
	<div class="xui panel _modal-content">
		<div class="xui _modal-close-button button -icon -size-x32 -circle -danger -transparent -effect-ripple"><i class="material-icons">close</i></div>
		<div class="xui _title">
			Title
		</div>
		<div class="xui _line"></div>
		<div class="xui _content">
			<div style="height:400px;width:800px;">
			</div>
		</div>
		<div class="xui _line"></div>
		<div class="xui _footer">
			Footer
		</div>			
	</div>
</div>
