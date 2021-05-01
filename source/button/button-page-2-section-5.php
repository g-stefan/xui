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
<div class="xui text -label-40">
	Button - Icon - Circle - Effect ripple
</div>
<div class="xui separator-15"></div>
<div class="xui grid -gutter-30">
<div class="xui grid -row -gutter-30">

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
	$cssClass="";
	if(strlen($value)){
		$cssClass="-".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	if($index==0){
		echo "<div class=\"xui grid -col -x4\">";
		echo "<div class=\"xui grid -row -gutter-30\">";
	};
	//
		echo "<div class=\"xui grid -col -x4 -align-center\">";
			if(strlen($value)){
				echo "<div class=\"xui button -icon -circle -effect-ripple ".$cssClass."\" tabindex=\"0\">";
				echo "<i class=\"material-icons\">face</i>";
				echo "</div>";
			};
		echo "</div>";
	//
	++$index;
	if($index==3){
		echo "</div>";
		echo "</div>";
		$index=0;
	};

};

?>
</div>
</div>

