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
Progress bar
</div>
<div class="clear-both h-4"></div>

<?php

$items=array(
	"default",
	"success",	
	"warning",
	"danger",	
	"info"
);

foreach($items as $value){
	$cssClass="";
	if(strlen($value)){
		$cssClass="--".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	echo "<div class=\"xui-progress-bar ".$cssClass."\">";
		echo "<div class=\"xui-progress-bar_background\"></div>";
		echo "<div class=\"xui-progress-bar_bar\"></div>";
		echo "<div class=\"xui-progress-bar_label\">50%</div>";
	echo "</div>";
	echo "<br />";
};

?>

</div>
