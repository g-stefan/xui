/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Capture = {};

XUI.Capture.elAction = [];

/**
 * Set capture elements
 * @param {element/array} elList - Element or array with elements
 * @param {function} fn - Callback - fn(event,element)
 */
XUI.Capture.set = function (elList_, fn_) {
	if (!Array.isArray(elList_)) {
		elList_ = [elList_];
	};
	this.elAction[this.elAction.length] = {
		elList: elList_,
		fn: fn_
	};
};

/**
 * On click
 * @param {event} event - Event
 */
XUI.Capture.onClick = function (event) {
	var this_ = XUI.Capture;
	var toRemove = [];
	for (var i = 0; i < this_.elAction.length; ++i) {
		var found = false;
		for (var k = 0; k < this_.elAction[i].elList.length; ++k) {
			if (this_.elAction[i].elList[k].contains(event.target)) {
				found = true;
				break;
			};
		};
		if (!found) {
			this_.elAction[i].fn(event, this_.elAction[i].elList);
			toRemove[toRemove.length] = i;
		};
	};
	if (toRemove.length) {
		var newAction = [];
		for (var i = 0; i < this_.elAction.length; ++i) {
			var found = false;
			for (var k = 0; k < toRemove.length; ++k) {
				if (toRemove[k] == i) {
					found = true;
					break;
				};
			};
			if (!found) {
				newAction[newAction.length] = this_.elAction[i];
			};
		};
		this_.elAction = newAction;
	};
};

/**
 * Initialization
 */
XUI.Capture.init = function () {
	window.addEventListener("click", XUI.Capture.onClick);
};

/**
 * On load
 */
XUI.Capture.onLoad = function () {
	window.removeEventListener("load", XUI.Capture.onLoad);
	XUI.Capture.init();
};
window.addEventListener("load", XUI.Capture.onLoad);
