<?php
/*
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/
?>

<div class="xui page -elevation-4 -size-A4 -center-x" style="overflow:visible;">

<div class="xui text -label-40">
	Component - Table
</div>
<div class="xui separator-15"></div>

<!-- item -->
<form>
<div class="xui component-table">
	<div class="xui app-toolbar">
		<div class="xui _content">
			<div class="xui button -transparent -effect-ripple -primary -icon">
				<i class="lucide-grip"></i>
			</div>
			<div class="xui button -transparent -effect-ripple -primary -icon">
				<i class="lucide-shapes"></i>			
			</div>
		</div>
	</div>
	<div class="xui _table">
	        <table class="xui table">
			<thead>
				<tr>
					<th class="xui _select">
						<div class="xui form-checkbox -box">
							<input type="checkbox" id="checkbox-item-box-xx" name="checkbox-item-box-xx" value="checkbox-value"></input>
							<label for="checkbox-item-box-xx"></label>
						</div>
					</th>
					<th class="xui _sort">
						Firstname
						<div class="xui button -transparent -effect-ripple -secondary -icon -small -size-xy28 -circle">
							<i class="lucide-chevron-down"></i>
						</div>
					</th>
					<th>
						Lastname
					</th>
					<th>
						Age
					</th>
					<th>
						Action
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-01" name="checkbox-item-box-01" value="checkbox-value"></input>
							<label for="checkbox-item-box-01"></label>
						</div>
					</td>
					<td>Bryan</td>
					<td>Pineda</td> 
					<td>25</td>
					<td class="xui _action">
						<div class="xui button -transparent -secondary -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="lucide-message-square-more"></i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-02" name="checkbox-item-box-02" value="checkbox-value"></input>
							<label for="checkbox-item-box-02"></label>
						</div>
					</td>
					<td>Alejandra</td>
					<td>Warren</td> 
					<td>22</td>
					<td class="xui _action">
						<div class="xui button -transparent -secondary -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="lucide-message-square-more"></i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-03" name="checkbox-item-box-03" value="checkbox-value"></input>
							<label for="checkbox-item-box-03"></label>
						</div>
					</td>
					<td>Ruthie</td>
					<td>Mattera</td> 
					<td>32</td>
					<td class="xui _action">
						<div class="xui button -transparent -secondary -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="lucide-message-square-more"></i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-04" name="checkbox-item-box-04" value="checkbox-value"></input>
							<label for="checkbox-item-box-04"></label>
						</div>
					</td>
					<td>Hailey</td>
					<td>Berke</td> 
					<td>34</td>
					<td class="xui _action">
						<div class="xui button -transparent -secondary -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="lucide-message-square-more"></i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-05" name="checkbox-item-box-05" value="checkbox-value"></input>
							<label for="checkbox-item-box-05"></label>
						</div>
					</td>
					<td>Milo</td>
					<td>Tarnowski</td> 
					<td>42</td>
					<td class="xui _action">
						<div class="xui button -transparent -secondary -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="lucide-message-square-more"></i>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="xui app-toolbar -left -compact">
		<div class="xui _content">
			<div class="xui form-input-group">
				<button type="button" name="seek-button-first"><i class="lucide-chevron-first"></i></i></button>
				<button type="button" name="seek-button-previous"><i class="lucide-chevron-left"></i></i></button>
				<input type="text" name="seek" value=""></input>
				<button type="button" name="seek-button-next"><i class="lucide-chevron-right"></i></button>
				<button type="button" name="seek-button-last"><i class="lucide-chevron-last"></i></i></button>
			</div>
			<div class="xui button -transparent -effect-ripple -secondary -icon -size-xy30">
				<i class="lucide-wifi"></i>
			</div>
		</div>
	</div>
</div>
</form>
<!-- /item -->

</div>
