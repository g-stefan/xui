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
				<i class="material-icons">apps</i>
			</div>
			<div class="xui button -transparent -effect-ripple -primary -icon">
				<i class="material-icons">bubble_chart</i>			
			</div>
		</div>
	</div>
	<div class="xui app-toolbar -compact -wide">
		<div class="xui _content">
			<div class="xui grid">
				<div class="xui grid -row">
					<div class="xui grid -col -align-left">
						<div class="xui form-input-group">
							<input type="text" name="search" value=""></input>
							<button type="button" name="search-button-search"><i class="material-icons">search</i></button>
							<button type="button" name="search-button-reset"><i class="material-icons">close</i></button>
						</div>
					</div>
					<div class="xui grid -col -align-right">
						<div class="xui button -small -transparent -effect-ripple -info -icon-left -toolbar">
							<i class="material-icons">filter_list</i>
							<span>Filter</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="xui _table">
	        <table class="xui table">
			<thead>
				<tr>
					<th class="xui _select">
						<div class="xui form-checkbox -box">
							<input type="checkbox" id="checkbox-item-box-xx-2" name="checkbox-item-box-xx-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-xx-2"></label>
						</div>
					</th>
					<th class="xui _sort -action">
						Firstname
						<div class="xui button -transparent -effect-ripple -primary -icon -small -size-xy28">
							<i class="material-icons">save</i>
						</div>
						<div class="xui button -transparent -effect-ripple -secondary -icon -small -size-xy28 -circle">
							<i class="material-icons">expand_more</i>
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
							<input type="checkbox" id="checkbox-item-box-01-2" name="checkbox-item-box-01-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-01-2"></label>
						</div>
					</td>
					<td>Bryan</td>
					<td>Pineda</td> 
					<td class="xui _input">
						<div class="xui form-input-group -small -left">
							<input type="text" name="seek" value="25"></input>
							<button type="button" name="seek-button-first"><i class="material-icons">expand_less</i></button>
							<button type="button" name="seek-button-last"><i class="material-icons">expand_more</i></button>
						</div>
					</td>
					<td class="xui _action">
						<div class="xui button -transparent -info -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="material-icons">textsms</i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-02-2" name="checkbox-item-box-02-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-02-2"></label>
						</div>
					</td>
					<td>Alejandra</td>
					<td>Warren</td> 
					<td class="xui _input">
						<div class="xui form-input-group -small -left">
							<input type="text" name="seek" value="22"></input>
							<button type="button" name="seek-button-first"><i class="material-icons">expand_less</i></button>
							<button type="button" name="seek-button-last"><i class="material-icons">expand_more</i></button>
						</div>
					</td>
					<td class="xui _action">
						<div class="xui button -transparent -info -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="material-icons">textsms</i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-03-2" name="checkbox-item-box-03-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-03-2"></label>
						</div>
					</td>
					<td>Ruthie</td>
					<td>Mattera</td> 
					<td class="xui _input">
						<div class="xui form-input-group -small -left">
							<input type="text" name="seek" value="32"></input>
							<button type="button" name="seek-button-first"><i class="material-icons">expand_less</i></button>
							<button type="button" name="seek-button-last"><i class="material-icons">expand_more</i></button>
							</div>
					</td>
					<td class="xui _action">
						<div class="xui button -transparent -info -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="material-icons">textsms</i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-04-2" name="checkbox-item-box-04-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-04-2"></label>
						</div>
					</td>
					<td>Hailey</td>
					<td>Berke</td> 
					<td class="xui _input">
						<div class="xui form-input-group -small -left">
							<input type="text" name="seek" value="34"></input>
							<button type="button" name="seek-button-first"><i class="material-icons">expand_less</i></button>
							<button type="button" name="seek-button-last"><i class="material-icons">expand_more</i></button>
						</div>
					</td>
					<td class="xui _action">
						<div class="xui button -transparent -info -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="material-icons">textsms</i>
						</div>
					</td>
				</tr>
				<tr>
					<td class="xui _select">
						<div class="xui form-checkbox -box -small">
							<input type="checkbox" id="checkbox-item-box-05-2" name="checkbox-item-box-05-2" value="checkbox-value"></input>
							<label for="checkbox-item-box-05-2"></label>
						</div>
					</td>
					<td>Milo</td>
					<td>Tarnowski</td> 
					<td class="xui _input">
						<div class="xui form-input-group -small -left">
							<input type="text" name="seek" value="42"></input>
							<button type="button" name="seek-button-first"><i class="material-icons">expand_less</i></button>
							<button type="button" name="seek-button-last"><i class="material-icons">expand_more</i></button>
						</div>
					</td>
					<td class="xui _action">
						<div class="xui button -transparent -info -effect-ripple -icon -small -size-xy24-22 -left">
							<i class="material-icons">textsms</i>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="xui app-toolbar -left -compact">
		<div class="xui _content">
			<div class="xui form-input-group">
				<button type="button" name="seek-button-first"><i class="material-icons">first_page</i></button>
				<button type="button" name="seek-button-previous"><i class="material-icons">chevron_left</i></button>
				<input type="text" name="seek" value=""></input>
				<button type="button" name="seek-button-next"><i class="material-icons">chevron_right</i></button>
				<button type="button" name="seek-button-last"><i class="material-icons">last_page</i></button>
			</div>
			<div class="xui button -transparent -effect-ripple -secondary -icon -size-xy30">
				<i class="material-icons">settings_remote</i>
			</div>
		</div>
	</div>
</div>
</form>
<!-- /item -->

</div>
