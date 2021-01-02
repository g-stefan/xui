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
	Form image
</div>
<div class="xui separator-15"></div>

<div style="width:480px;">
<form>
	<div class="xui form-image" id="form-image-component">
		<div class="xui _image">
			<div class="cropit-preview"></div>
			<div style="height:48px;position: relative;">
				<i class="material-icons" style="font-size:24px;line-height: 48px;vertical-align: middle;">photo</i>
				<input type="range" class="cropit-image-zoom-input"></input>
				<i class="material-icons" style="font-size:48px;line-height: 48px;vertical-align: middle;">photo</i>
			</div>
			<div class="xui separator"></div>
		</div>
		<a href="#" onclick="return false;" class="xui _link button -icon -size-x32 -circle -success -transparent -effect-ripple" style="margin: 3px 3px 3px 3px;"><i class="material-icons">photo</i></a>
		<div class="xui _delete button -icon -size-x32 -circle -danger -transparent -effect-ripple" onclick="return false;" style="margin: 3px 3px 3px 3px;"><i class="material-icons">close</i></div>
		<div class="xui form-file">
			<input type="file" name="form-image" id="form-image" class="xui _file cropit-image-input" accept="image/*"></input>
			<label for="form-image" class="xui button -icon-left -outline"><i class="material-icons">file_upload</i><span>Browse ...</span></label>
			<button type="button" class="xui button -icon -info"><i class="material-icons">delete</i></button>
		</div>
	</div>
</form>
</div>

</div>
