<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui text -label-40">
	Form textarea - Icon left and right
</div>
<div class="xui separator-15"></div>
<div class="xui grid -gutter-30">
<?php

$items=array(
	"default",
	"success",	
	"warning",
	"danger",	
	"disabled",
	""
);

$icon=array(
	"lucide-check",	
	"lucide-check",
	"lucide-alert-triangle",
	"lucide-alert-circle",	
	"lucide-user"
);

$index=0;
$itemIndex=0;
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
				echo "<div class=\"xui form-textarea -icon-left -icon-right ".$cssClass."\">";					
					echo "<textarea name=\"text\" rows=\"4\" cols=\"32\" ".$isDisabled.">".ucfirst($value)."</textarea>";
					echo "<i class=\"user\"></i>";
					echo "<i class=\"".$icon[$itemIndex]."\"></i>";
				echo "</div>";
				echo "</form>";
			};
		echo "</div>";
	//
	++$index;
	if($index==3){
		echo "</div>";
		$index=0;
	};

	++$itemIndex;
};

?>
</div>
