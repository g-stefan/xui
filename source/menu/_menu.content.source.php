<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<li>
	<a class="xui action -effect-ripple" href="#" onclick="return false;">
		<i class="lucide-home"></i>
		<span>Dashboard</span>
	</a>	
</li>
<li class="xui _submenu">
	<a class="xui action -effect-ripple -selected -toggle" href="#" data-xui-toggle="parent" onclick="return false;">
		<i class="lucide-message-square-more"></i>
		<span>Collaboration</span>
		<i class="lucide-chevron-right"></i>
	</a>
	<ul>
		<li>
			<a class="xui action -effect-ripple" href="#" onclick="return false;">
				<i class="lucide-user"></i>
				<span>Administration</span>
			</a>
		</li>
		<li class="xui _submenu">
			<a class="xui action -effect-ripple -toggle" href="#" data-xui-toggle="parent" onclick="return false;">
				<i class="lucide-settings-2"></i>
				<span>Settings</span>
				<i class="lucide-chevron-right"></i>
			</a>
			<ul>
				<li>
					<a class="xui action -effect-ripple" href="#" onclick="return false;">
						<i class="lucide-bluetooth"></i>
						<span>Bluetooth</span>
					</a>
				</li>
				<li class="xui _submenu">
					<a class="xui action -effect-ripple -toggle" href="#" data-xui-toggle="parent" onclick="return false;">
						<i class="lucide-smartphone"></i>
						<span>Cell</span>
						<i class="lucide-chevron-right"></i>
					</a>
					<ul>
						<li>
							<a class="xui action -effect-ripple" href="#" onclick="return false;">
								<i class="lucide-wifi"></i>
								<span>Remote</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<li class="xui _separator"></li>
		<li class="xui _space"></li>
		<li class="xui _label">Library</li>
		<li>
			<a class="xui action -effect-ripple" href="#" onclick="return false;">
				<i class="lucide-list"></i>
				<span>Content</span>
			</a>
		</li>
	</ul>
</li>
<li class="xui _separator"></li>
<li class="xui _space"></li>
<li class="xui _label">Contact</li>
<li>
	<a class="xui action -effect-ripple" href="#" onclick="return false;">
		<i class="lucide-help-circle"></i>
		<span>Help</span>
	</a>
</li>

