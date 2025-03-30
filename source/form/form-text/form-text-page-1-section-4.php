<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <div@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="text-lg border-b-1 border-xui-line">
Form text - Required
</div>
<div class="clear-both h-4"></div>
<div class="grid grid-cols-3 grid-rows-1 gap-2">
		<form>
			<div class="xui-form-text --required">
				<input type="text" name="text" value="Required"></input>
			</div>
		</form>

		<form>
			<div class="xui-form-text --icon-left --required">		
				<input type="text" name="text" value="Required"></input>
				<i class="lucide-user"></i>
			</div>
		</form>

		<form>
			<div class="xui-form-text --icon-right --required">				
				<input type="text" name="text" value="Required"></input>				
				<i class="lucide-user"></i>
			</div>
		</form>
</div>

