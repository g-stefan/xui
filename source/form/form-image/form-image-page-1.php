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
	Form image
</div>
<div class="clear-both h-4"></div>

<form>
	<div class="xui-form-image w-120" id="form-image-component">
		<div class="xui-form-image_image">
			<div class="cropit-preview"></div>
			<div class="h-12 relative">
				<i class="lucide-image"></i>
				<input type="range" class="cropit-image-zoom-input"></input>
				<i class="lucide-image"></i>
			</div>
			<div class="clear-both"></div>
		</div>
		<a href="#" onclick="return false;" class="xui-form-image_link xui-button --icon --size-x32 --circle --success --transparent xui-effect-ripple m-1"><i class="lucide-image"></i></a>
		<div class="xui-form-image_delete xui-button --icon --size-x32 --circle --danger --transparent xui-effect-ripple m-1" onclick="return false;"><i class="lucide-trash"></i></div>
		<div class="xui-form-file">
			<input type="file" name="form-image" id="form-image" class="xui-form-file_input cropit-image-input" accept="image/*"></input>
			<label for="form-image" class="xui-button --icon-left --outline"><i class="lucide-upload"></i><span>Browse ...</span></label>
			<button type="button" class="xui-button --outline --icon --secondary"><i class="lucide-x"></i></button>
		</div>
	</div>
</form>

</div>

<script>
		window.addEventListener("load", function(){
			$("#form-image-component").cropit({ imageBackground: true, allowDragNDrop: false, imageBackgroundBorderWidth: 16, width: 400, height: 300 });
		});
</script>
