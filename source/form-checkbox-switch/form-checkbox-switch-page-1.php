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
	Form checkbox - Switch
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
	"disabled",
	""
);

$index=0;
$count=0;
foreach($items as $value){
	$cssClass="";
	if(strlen($value)){
		$cssClass="-".$value;
		if($value=="default"){
			$cssClass="";
		};
	};

	$isDisabled="";
	if($value=="disabled"){
		$isDisabled="disabled=\"disabled\"";
	};

	if($index==0){
		echo "<div class=\"xui grid -row -gutter-30\">";
	};
	//
		echo "<div class=\"xui grid -col -x4 -align-left\">";
			if(strlen($value)){
			echo "<form>";
				echo "<div class=\"xui form-checkbox -switch ".$cssClass."\">";
					echo "<input type=\"checkbox\" id=\"checkbox-item-switch-".$count."\" name=\"checkbox-item-switch-".$count."\" value=\"checkbox-value\" checked=\"checked\" ".$isDisabled."></input>";
					echo "<label for=\"checkbox-item-switch-".$count."\" ".$isDisabled.">".ucfirst($value)."</label>";
				echo "</div>";
			echo "</form>";
			};
		echo "</div>";
	//
	++$count;
	++$index;
	if($index==3){
		echo "</div>";
		$index=0;
	};
};

?>
</div>


</div>
