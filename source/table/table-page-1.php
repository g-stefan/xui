<?php
/*
//
// XUI
//
// Copyright (c) 2020-2022 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Table
</div>
<div class="xui separator-15"></div>

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
	"disabled"
);

$index=0;
foreach($items as $value){
	$cssClass="";
	if(strlen($value)){
		$cssClass="-".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	if($index==0){
		echo "<div class=\"xui grid -row -gutter-30\">";
	};
		
	echo "<div class=\"xui grid -col -x6 -align-left\">";
		if(strlen($value)){
			echo "<table class=\"xui table ".$cssClass." -hover\">";
				include("_table-content.source.php");
			echo "</table>";
		};
	echo "</div>";

	++$index;
	if($index==2){
		echo "</div>";
		$index=0;
	};
};

?>
</div>

</div>
