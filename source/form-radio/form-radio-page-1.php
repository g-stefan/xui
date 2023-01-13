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
	Form radio
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
		echo "<div class=\"xui grid -col -x6 -align-left\">";
			if(strlen($value)){
			echo "<form>";
				echo "<div class=\"xui grid -row\">";
				echo "<div class=\"xui grid -col -x6 -align-left\">";
					echo "<div class=\"xui form-radio ".$cssClass."\">";
						echo "<input type=\"radio\" id=\"radio-item-1-".$count."\" name=\"radio-item\" value=\"radio-value-1\" checked=\"checked\" ".$isDisabled."></input>";
						echo "<label for=\"radio-item-1-".$count."\" ".$isDisabled.">".ucfirst($value)." 1</label>";
					echo "</div>";
				echo "</div>";
				echo "<div class=\"xui grid -col -x6 -align-left\">";
					echo "<div class=\"xui form-radio ".$cssClass."\">";
						echo "<input type=\"radio\" id=\"radio-item-2-".$count."\" name=\"radio-item\" value=\"radio-value-2\" ".$isDisabled."></input>";
						echo "<label for=\"radio-item-2-".$count."\" ".$isDisabled.">".ucfirst($value)." 2</label>";
					echo "</div>";
				echo "</div>";
				echo "</div>";
			echo "</form>";
			};
		echo "</div>";
	//
	++$count;
	++$index;
	if($index==2){
		echo "</div>";
		$index=0;
	};
};

?>
</div>


</div>
