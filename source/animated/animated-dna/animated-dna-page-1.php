<?php
/*
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>
<div class="xui-page --A4 --presentation shadow-md mx-auto">

	<div class="text-lg border-b-1 border-xui-line">
		Animated - DNA
	</div>
	<div class="clear-both h-4"></div>
	<div class="inline-block w-60 h-60 shadow-sm rounded-sm border border-xui-line overflow-hidden grid grid-col-1 grid-row-1 content-center justify-items-center">

	<!-- item -->
	<div class="xui-animated-dna">
	<?php for($k=0;$k<8;++$k){ ?>
		<div class="xui-animated-dna_strand">
			<div class="xui-animated-dna_atom-1"></div>
			<div class="xui-animated-dna_link"></div>
			<div class="xui-animated-dna_atom-2"></div>
		</div>
	<?php }; ?>
	</div>
	<!-- /item -->


	</div>
</div>
