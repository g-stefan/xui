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
	Form textarea - Material - Icon right
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
				echo "<div class=\"xui form-text -material -icon-right ".$cssClass."\">";
					echo "<label for=\"xui-form-textarea-material-".$count."\">".ucfirst($value)."</label>";
					echo "<textarea id=\"xui-form-textarea-material-".$count."\" name=\"text\" ".$isDisabled." rows=\"4\" cols=\"32\"></textarea>";
					echo "<i class=\"material-icons\">person</i>";
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
