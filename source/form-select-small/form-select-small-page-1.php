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
	Form select
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
		echo "<div class=\"xui grid -col -x4 -align-center\">";
			if(strlen($value)){
				echo "<form>";
					echo "<select class=\"xui form-select ".$cssClass." -small\" id=\"form-select-".$value."\" name=\"form-select-".$value."\" ".$isDisabled." data-xui-select-theme=\"-".$value." -small\">";
						echo "<option value=\"volvo\">Volvo</option>";
						echo "<option value=\"saab\">Saab</option>";
						echo "<option value=\"fiat\">Fiat</option>";
						echo "<option value=\"audi\">Audi</option>";
					echo "</select>";
				echo "</form>";
			};
		echo "</div>";
	//
	++$index;
	if($index==3){
		echo "</div>";
		$index=0;
	};
};

?>
</div>

</div>

