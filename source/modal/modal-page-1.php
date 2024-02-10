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
	Modal
</div>
<div class="xui separator-15"></div>

<div class="xui button -primary" id="button-open-modal">Open modal</div>

<div class="xui modal" id="modal-dialog">
	<div class="xui panel _modal-content">
		<div class="xui _modal-close-button button -icon -size-x32 -circle -danger -transparent -effect-ripple"><i class="lucide-x"></i></div>
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
