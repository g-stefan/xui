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
		Grid - 8
	</div>
	<div class="xui separator-15"></div>
	<div class="info-grid">

<div class="xui grid -gutter-30">
<?php

$index=0;
for($k=1; $k<8; ++$k){
	echo "<div class=\"xui grid -row -gutter-30\">";
		echo "<div class=\"xui grid -col -x".($k)."\"><div class=\"xui -bg-aqua-1\" style=\"height:40px;\"></div></div>";
		echo "<div class=\"xui grid -col -x".(8-$k)."\"><div class=\"xui -bg-sky-blue-1\" style=\"height:40px;\"></div></div>";
	echo "</div>";
};

?>
</div>

	</div>
</div>
