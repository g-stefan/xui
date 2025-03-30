/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.FormTag = {};

/**
 * Initialize tag element
 * @param {element} el - Element
 */
XUI.FormTag.initTag = function(el) {
	$(el).tagEditor();
};

/**
 * Initialize tag element by id
 * @param {string} id - Element id
 */
XUI.FormTag.initById = function(id) {
	XUI.FormTag.initTag($("#" + id));
};

/**
 * Initialization
 */
XUI.FormTag.init = function() {
	$(".xui-form-text.--tag").each(function() {
		XUI.FormTag.initTag(this);
	});
	$(".xui-form-textarea.--tag").each(function() {
		XUI.FormTag.initTag(this);
	});
};

/**
 * On load
 */
XUI.FormTag.onLoad = function() {
	window.removeEventListener("load", XUI.FormTag.onLoad);
	XUI.FormTag.init();
};
window.addEventListener("load", XUI.FormTag.onLoad);
