<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<li>
	<a class="xui-menu_item xui-effect-ripple" href="#" onclick="return false;">
		<i class="lucide-house"></i>
		<span>Dashboard</span>
	</a>
</li>
<li class="xui-menu_submenu">
	<a class="xui-menu_item --selected xui-effect-ripple xui-toggle" href="#" data-xui-toggle="parent"
		onclick="return false;">
		<i class="lucide-message-square-more"></i>
		<span>Collaboration</span>
		<i class="lucide-chevron-right"></i>
	</a>
	<ul>
		<li>
			<a class="xui-menu_item xui-effect-ripple" href="#" onclick="return false;">
				<i class="lucide-user"></i>
				<span>Administration</span>
			</a>
		</li>
		<li class="xui-menu_submenu">
			<a class="xui-menu_item xui-effect-ripple xui-toggle" href="#" data-xui-toggle="parent"
				onclick="return false;">
				<i class="lucide-settings-2"></i>
				<span>Settings</span>
				<i class="lucide-chevron-right"></i>
			</a>
			<ul>
				<li>
					<a class="xui-menu_item xui-effect-ripple" href="#" onclick="return false;">
						<i class="lucide-bluetooth"></i>
						<span>Bluetooth</span>
					</a>
				</li>
				<li class="xui-menu_submenu">
					<a class="xui-menu_item xui-effect-ripple xui-toggle" href="#"
						data-xui-toggle="parent" onclick="return false;">
						<i class="lucide-smartphone"></i>
						<span>Cell</span>
						<i class="lucide-chevron-right"></i>
					</a>
					<ul>
						<li>
							<a class="xui-menu_item xui-effect-ripple" href="#"
								onclick="return false;">
								<i class="lucide-wifi"></i>
								<span>Remote</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="xui-menu_separator"></li>
		<li class="xui-menu_space"></li>
		<li class="xui-menu_label">Library</li>
		<li>
			<a class="xui-menu_item xui-effect-ripple" href="#" onclick="return false;">
				<i class="lucide-list"></i>
				<span>Content</span>
			</a>
		</li>
	</ul>
</li>
<li class="xui-menu_separator"></li>
<li class="xui-menu_space"></li>
<li class="xui-menu_label">Contact</li>
<li>
	<a class="xui-menu_item xui-effect-ripple" href="#" onclick="return false;">
		<i class="lucide-circle-help"></i>
		<span>Help</span>
	</a>
</li>