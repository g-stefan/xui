<?php
/*
//
// XUI
//
// Copyright (c) 2020 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>
<div class="xui page -elevation-4 -size-A4 -center-x">

	<div class="xui text -label-40">
		Palette - Context
	</div>
	<div class="xui separator-15"></div>
	<div class="info-palette">

<div class="xui grid -gutter-30">
<?php

$items=array(
	"default",
	"primary",
	"secondary",

	"success",
	"danger",
	"warning",

	"info",
	"disabled",
	""
);

$index=0;
foreach($items as $value){
	if($index==0){
		echo "<div class=\"xui grid -row -gutter-30\">";
	};
	echo "<div class=\"xui grid -col\">";
	if(strlen($value)>0){
		echo "<div class=\"xui card -horizontal -mini -elevation-2\">";
			echo "<div class=\"xui grid -row\">";
				if($value!="disabled"){
					echo "<div class=\"xui grid -col -bg-".$value."-1\"></div>";
					echo "<div class=\"xui grid -col -bg-".$value."-2\"></div>";
				}else{
					echo "<div class=\"xui grid -col -bg-".$value."\"></div>";
				};
			echo "</div>";
			echo "<div class=\"xui\">";
				echo $value;
			echo "</div>";
		echo "</div>";
	};
	echo "</div>";
	++$index;
	if($index==3){
		echo "</div>";
		$index=0;
	};
};


?>
</div>
	</div>
</div>
