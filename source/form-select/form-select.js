/*!
//
// XUI
//
// Copyright (c) 2020-2021 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
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
	$(el).select2({
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
		theme: theme
	}).maximizeSelect2Height().on("select2:open", function () {
		setTimeout(function () {
			XUI.FormSelect.instance = $(".select2-container.select2-container--open>.select2-dropdown>.select2-results>.select2-results__options").overlayScrollbars({ scrollbars: { clickScrolling: true } });
		}, 10);
	}).on("select2:closing", function () {
		XUI.FormSelect.instance.overlayScrollbars().destroy();
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
