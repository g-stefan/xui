<?php
/*
//
// XUI
//
// Copyright (c) 2020-2021 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x">

<div class="xui text -label-40">
	Alert
</div>
<div class="xui separator-15"></div>

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

foreach($items as $value){
	$cssClass="";
	if(strlen($value)){
		$cssClass="-".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	echo "<div class=\"xui alert ".$cssClass."\">";
		echo ucfirst($value);
	echo "</div>";
	echo "<br />";
};

?>

</div>
