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
		Colors - Context
	</div>
	<div class="clear-both h-4"></div>
	<div class="grid grid-cols-1 gap-4">
		<?php

		$items = array(
			"default",
			"primary",
			"secondary",
			"success",
			"danger",
			"warning",
			"info",
			"disabled"
		);
		
		foreach ($items as &$item) {
			echo "<div>";
			echo "<div class=\"float-left m-2 inline-block w-64 shadow-md rounded-sm border border-xui-line overflow-hidden\">";
			echo "<div class=\"h-8 grid grid-cols-10 grid-rows-1\">";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-100\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-200\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-300\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-400\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-500\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-500\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-600\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-700\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-800\"></div>";
				echo "<div class=\"h-8 w-16 bg-xui-".$item."-900\"></div>";
			echo "</div>";
			echo "</div>";
			echo "<div class=\"float-left h-8 m-2 inline-block text-center leading-8 w-32 shadow-md rounded-sm border bg-xui-".$item."-normal-bg text-xui-".$item."-normal-fg border-xui-".$item."-normal-bd\">";
			echo "<span class=\"drop-shadow-sm\">normal</span>";
			echo "</div>";
			echo "<div class=\"float-left h-8 m-2 inline-block text-center leading-8 w-32 shadow-md rounded-sm border bg-xui-".$item."-focus-bg text-xui-".$item."-focus-fg border-xui-".$item."-focus-bd\">";
			echo "<span class=\"drop-shadow-sm\">focus</span>";
			echo "</div>";
			echo "<div class=\"float-left h-8 m-2 inline-block text-center leading-8 w-32 shadow-md rounded-sm border bg-xui-".$item."-active-bg text-xui-".$item."-active-fg border-xui-".$item."-active-bd\">";
			echo "<span class=\"drop-shadow-sm\">active</span>";
			echo "</div>";
			echo "</div>";	
		}

		?>

	</div>
</div>