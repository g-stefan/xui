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

XUI.FormTextMaterial = {};

/**
 * On focus event
 */
XUI.FormTextMaterial.onFocus = function () {
	if (!this.parentElement.classList.contains("-has-value")) {
		this.parentElement.classList.add("-has-value");
	};
	if (!this.parentElement.classList.contains("-focus")) {
		this.parentElement.classList.add("-focus");
	};
};

/**
 * On blur
 */
XUI.FormTextMaterial.onBlur = function () {
	if (("" + this.value).length == 0) {
		if (this.parentElement.classList.contains("-has-value")) {
			this.parentElement.classList.remove("-has-value");
		};
	};
	if (this.parentElement.classList.contains("-focus")) {
		this.parentElement.classList.remove("-focus");
	};
};

/**
 * Initialization
 */
XUI.FormTextMaterial.init = function () {
	var elList = document.getElementsByClassName("xui form-text -material");
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		var elListInput = elList[elIndex].getElementsByTagName("input");
		for (var elIndexInput = 0; elIndexInput < elListInput.length; ++elIndexInput) {
			elListInput[elIndexInput].addEventListener("focus", this_.onFocus);
			elListInput[elIndexInput].addEventListener("blur", this_.onBlur);
		};
		var elListInput = elList[elIndex].getElementsByTagName("textarea");
		for (var elIndexInput = 0; elIndexInput < elListInput.length; ++elIndexInput) {
			elListInput[elIndexInput].addEventListener("focus", this_.onFocus);
			elListInput[elIndexInput].addEventListener("blur", this_.onBlur);
		};
	};
};

/**
 * On load
 */
XUI.FormTextMaterial.onLoad = function () {
	window.removeEventListener("load", XUI.FormTextMaterial.onLoad);
	XUI.FormTextMaterial.init();
};
window.addEventListener("load", XUI.FormTextMaterial.onLoad);
