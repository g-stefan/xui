/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.FormFile = {};

/**
 * Initialize element
 * @param {element} elItem - Element
 */
XUI.FormFile.initElement = function(elItem) {
	var el = elItem.firstElementChild;
	var elLabel = el.nextElementSibling;
	var elButton = elLabel.nextElementSibling;
	var elLabelSpanList = elLabel.getElementsByTagName("span");
	var elLabelSpanTextOriginal = "";
	var elLabelSpan = null;

	if (elLabelSpanList.length > 0) {
		elLabelSpan = elLabelSpanList[0];
		elLabelSpanTextOriginal = elLabelSpan.innerHTML;
	};

	el.addEventListener("change", function(event) {
		if (elLabelSpan) {
			var fileName = "";
			if (event.target.value) {
				fileName = event.target.value;
				if (fileName.indexOf("\\") >= 0) {
					fileName = event.target.value.split("\\").pop();
				} else if (fileName.indexOf("/") >= 0) {
					fileName = event.target.value.split("/").pop();
				};
			};

			if (fileName.length > 0) {
				if (elLabelSpan.innerHTML != fileName) {
					elLabelSpan.innerHTML = fileName;
				};
			} else {
				if (elLabelSpan.innerHTML != elLabelSpanTextOriginal) {
					elLabelSpan.innerHTML = elLabelSpanTextOriginal;
				};
			};
		};
	});

	el.addEventListener("focus", function() {
		if (!el.classList.contains("--focus")) {
			el.classList.add("--focus");
		};
	});

	el.addEventListener("blur", function() {
		if (el.classList.contains("--focus")) {
			el.classList.remove("--focus");
		};
	});

	elButton.addEventListener("click", function() {
		el.value = null;
		XUI.Element.triggerEvent(el, "change");
		return false;
	});
};

/**
 * Initialize element by id
 * @param {string} id - Element id
 */
XUI.FormFile.initElementById = function(id) {
	var elItem = document.getElementById(id);
	if (elItem) {
		this.initElement(elItem);
	};
};

/**
 * Initialization
 */
XUI.FormFile.init = function() {
	var elList = document.getElementsByClassName("xui-form-file");
	for (k = 0; k < elList.length; ++k) {
		this.initElement(elList[k]);
	};
};

/**
 * On load
 */
XUI.FormFile.onLoad = function() {
	window.removeEventListener("load", XUI.FormFile.onLoad);
	XUI.FormFile.init();
};
window.addEventListener("load", XUI.FormFile.onLoad);
