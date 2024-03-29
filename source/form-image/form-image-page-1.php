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
	Form image
</div>
<div class="xui separator-15"></div>

<div style="width:480px;">
<form>
	<div class="xui form-image" id="form-image-component">
		<div class="xui _image">
			<div class="cropit-preview"></div>
			<div style="height:48px;position: relative;">
				<i class="lucide-image" style="font-size:24px;line-height: 48px;vertical-align: middle;"></i>
				<input type="range" class="cropit-image-zoom-input"></input>
				<i class="lucide-image" style="font-size:48px;line-height: 48px;vertical-align: middle;"></i>
			</div>
			<div class="xui separator"></div>
		</div>
		<a href="#" onclick="return false;" class="xui _link button -icon -size-x32 -circle -success -transparent -effect-ripple" style="margin: 3px 3px 3px 3px;"><i class="lucide-image"></i></a>
		<div class="xui _delete button -icon -size-x32 -circle -danger -transparent -effect-ripple" onclick="return false;" style="margin: 3px 3px 3px 3px;"><i class="lucide-trash"></i></div>
		<div class="xui form-file">
			<input type="file" name="form-image" id="form-image" class="xui _file cropit-image-input" accept="image/*"></input>
			<label for="form-image" class="xui button -icon-left -outline"><i class="lucide-upload"></i><span>Browse ...</span></label>
			<button type="button" class="xui button -outline -icon -secondary"><i class="lucide-x"></i></button>
		</div>
	</div>
</form>
</div>

</div>
