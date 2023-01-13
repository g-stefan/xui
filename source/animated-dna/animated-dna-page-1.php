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
	Animated - DNA
</div>
<div class="xui separator-15"></div>

<div class="xui item-presentation center-xy">
<!-- item -->

<div class="xui animated -dna">
<?php for($k=0;$k<8;++$k){ ?>
	<div class="xui _strand">
		<div class="xui _atom-1"></div>
		<div class="xui _link"></div>
		<div class="xui _atom-2"></div>
	</div>
<?php }; ?>
</div>

<!-- /item -->
</div>
</div>
