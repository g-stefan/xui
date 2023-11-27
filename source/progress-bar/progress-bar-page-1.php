<?php
/*
// XUI
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Progress bar
</div>
<div class="xui separator-15"></div>

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
		$cssClass="-".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	echo "<div class=\"xui progress-bar ".$cssClass."\">";
		echo "<div class=\"xui _background\"></div>";
		echo "<div class=\"xui _bar\"></div>";
		echo "<div class=\"xui _label\">50%</div>";
	echo "</div>";
	echo "<br />";
};

?>

</div>
