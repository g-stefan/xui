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
		Elevation - Inset
	</div>
	<div class="xui separator-15"></div>

<div class="xui grid -gutter-30">
<?php 

$index=0;
for($x=1;$x<=24;++$x){
	if($index==0){
		echo "<div class=\"xui grid -row -gutter-30\" style=\"padding-top:32px;\">";
	};
	echo "<div class=\"xui grid -col -x2\">";
		echo "<div class=\"xui -center-x -elevation-".$x." -inset\" style=\"width:96px;height:96px;\"></div>";
	echo "</div>";
	++$index;
	if($index==6){
		echo "</div>";
		$index=0;
	};
};

?>
</div>

</div>




