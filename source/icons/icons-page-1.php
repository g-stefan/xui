<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

include("_lucide-icons.php");

for($pageIndex=0;$pageIndex<count($lucideIcons);$pageIndex+=60) {
	$pageBegin=$pageIndex;
	$pageEnd=count($lucideIcons);
	if($pageEnd-$pageIndex>60){
		$pageEnd=$pageIndex+60;
	};
?>
<div class="xui page -elevation-4 -size-A4 -center-x">
	<div class="xui text -label-40">Lucide Icons</div>
	<div class="xui separator-15"></div>
<?php
	for($index=$pageBegin;$index<$pageEnd;++$index){
		$icon=$lucideIcons[$index];
		echo "<div class=\"xui item-icon -elevation-2\">";
		echo "<i class=\"lucide-".$icon."\"></i>";
		echo "<span>".$icon."</span>";
		echo "</div>";
	};

?>	
</div>
<?php
};
