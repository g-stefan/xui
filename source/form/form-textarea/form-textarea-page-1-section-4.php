<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="text-lg border-b-1 border-xui-line">
	Form textarea - Required
</div>
<div class="clear-both h-4"></div>
<div class="grid grid-cols-3 grid-rows-3 gap-2">
	<form>
		<div class="xui-form-textarea --required">
			<textarea name="text" rows="4" cols="32">Required</textarea>
		</div>
	</form>
	<form>
		<div class="xui-form-textarea --icon-left --required">
			<textarea name="text" rows="4" cols="32">Required</textarea>
			<i class="lucide-user"></i>
		</div>
	</form>
	<form>
		<div class="xui-form-textarea --icon-right --required">
			<textarea name="text" rows="4" cols="32">Required</textarea>
			<i class="lucide-user"></i>
		</div>
	</form>
</div>
