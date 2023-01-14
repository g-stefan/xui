/*!
// XUI
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.FormSelect = {};

XUI.FormSelect.instance = null;

/**
 * Initialize select element
 * @param {element} el - Element
 */
XUI.FormSelect.initSelect = function (el) {
	var theme = $(el).attr("data-xui-select-theme");
	if (!theme) {
		theme = "default";
	} else {
		theme = "default " + theme;
	};
	var minimumResultsForSearch = $(el).attr("data-xui-select-minimum-results-for-search");
	if(!minimumResultsForSearch) {
		minimumResultsForSearch = Infinity;
	};
	$(el).select2({
		minimumResultsForSearch: minimumResultsForSearch,
		dropdownAutoWidth: true,
		theme: theme
	}).maximizeSelect2Height().on("select2:open", function () {
		setTimeout(function () {
			var options=$(".select2-container.select2-container--open>.select2-dropdown>.select2-results>.select2-results__options");
			if(options){
				XUI.FormSelect.instance =  XUI.OverlayScrollbars.create(options);
			}else{
				XUI.FormSelect.instance = null;
			}
		}, 10);
	}).on("select2:closing", function () {
		if(XUI.FormSelect.instance) {
			XUI.OverlayScrollbars.destroy(XUI.FormSelect.instance);
		};
		XUI.FormSelect.instance = null;
	});
};

/**
 * Initialize select element by id
 * @param {string} id - Element id
 */
XUI.FormSelect.initById = function (id) {
	XUI.FormSelect.initSelect($("#" + id));
};

/**
 * Initialization
 */
XUI.FormSelect.init = function () {
	$(".xui.form-select").each(function () {
		XUI.FormSelect.initSelect(this);
	});
};

/**
 * On load
 */
XUI.FormSelect.onLoad = function () {
	window.removeEventListener("load", XUI.FormSelect.onLoad);
	XUI.FormSelect.init();
};
window.addEventListener("load", XUI.FormSelect.onLoad);
