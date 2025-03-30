<?php
/*
// XUI
// Copyright (c) 2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

include("colors.source.php");

function blendColor($colorA, $colorB, $alpha)
{
	$colorA_R = hexdec(substr($colorA, 1 + 2 * 0, 2));
	$colorA_G = hexdec(substr($colorA, 1 + 2 * 1, 2));
	$colorA_B = hexdec(substr($colorA, 1 + 2 * 2, 2));

	$colorB_R = hexdec(substr($colorB, 1 + 2 * 0, 2));
	$colorB_G = hexdec(substr($colorB, 1 + 2 * 1, 2));
	$colorB_B = hexdec(substr($colorB, 1 + 2 * 2, 2));

	$result_R = floor((($colorA_R * (100 - $alpha)) + ($colorB_R * $alpha)) / 100);
	$result_G = floor((($colorA_G * (100 - $alpha)) + ($colorB_G * $alpha)) / 100);
	$result_B = floor((($colorA_B * (100 - $alpha)) + ($colorB_B * $alpha)) / 100);

	return "#" . str_pad(dechex($result_R), 2, "0", STR_PAD_LEFT) . str_pad(dechex($result_G), 2, "0", STR_PAD_LEFT) . str_pad(dechex($result_B), 2, "0", STR_PAD_LEFT);
}

function generateColorPalette($name, $color)
{
	echo "\t--color-" . $name . "-50: " . blendColor($color, "#FFFFFF", 95) . ";\r\n";
	echo "\t--color-" . $name . "-100: " . blendColor($color, "#FFFFFF", 88) . ";\r\n";
	echo "\t--color-" . $name . "-200: " . blendColor($color, "#FFFFFF", 77) . ";\r\n";
	echo "\t--color-" . $name . "-300: " . blendColor($color, "#FFFFFF", 55) . ";\r\n";
	echo "\t--color-" . $name . "-400: " . blendColor($color, "#FFFFFF", 33) . ";\r\n";
	echo "\t--color-" . $name . "-500: " . $color . ";\r\n";
	echo "\t--color-" . $name . "-600: " . blendColor($color, "#000000", 12) . ";\r\n";
	echo "\t--color-" . $name . "-700: " . blendColor($color, "#000000", 33) . ";\r\n";
	echo "\t--color-" . $name . "-800: " . blendColor($color, "#000000", 44) . ";\r\n";
	echo "\t--color-" . $name . "-900: " . blendColor($color, "#000000", 55) . ";\r\n";
	echo "\t--color-" . $name . "-950: " . blendColor($color, "#000000", 70) . ";\r\n";
}

function generatePalette($palette)
{
	foreach ($palette as $name => $color) {
		generateColorPalette($name, $color);
	}
}

echo "@theme {\r\n";
echo "\t/* XUI */\r\n";
generatePalette($paletteXUI);
echo "\r\n";
echo "}\r\n";
