<?php
/*
// XUI
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui text -label-40">
	Form button - Icon - Circle
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

	$isDisabled="";
	if($value=="disabled"){
		$isDisabled="disabled=\"disabled\"";
	};

	if($index==0){
		echo "<div class=\"xui grid -col -x4\">";
		echo "<div class=\"xui grid -row -gutter-30\">";
	};
	//
		echo "<div class=\"xui grid -col -x4 -align-center\">";
			if(strlen($value)){
				echo "<button class=\"xui button ".$cssClass." -icon -circle\" ".$isDisabled.">";
				echo "<i class=\"material-icons\">face</i>";
				echo "</button>";
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

