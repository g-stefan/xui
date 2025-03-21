/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Responsive = {};

XUI.Responsive.initOk = false;
XUI.Responsive.processResponsiveList = [];

XUI.Responsive.elResponsiveAfter = null;
XUI.Responsive.currentState = 0;
XUI.Responsive.lastState = 0;

/**
 * Process events
 */
XUI.Responsive.processEvent = function() {
	var this_ = XUI.Responsive;
	this_.currentState = parseInt(("" + this_.elResponsiveAfter.getPropertyValue("content")).replace(/["']/g, ""));
	if (this_.lastState == this_.currentState) {
		return;
	};
	for (var k = 0; k < this_.processResponsiveList.length; ++k) {
		this_.processResponsiveList[k][0].call(this_.processResponsiveList[k][1], this_.currentState, this_.lastState);
	};
	this_.lastState = this_.currentState;
};

/**
 * Initialization
 */
XUI.Responsive.init = function() {
	this.initOk = true;

	this.elResponsive = document.createElement("div");
	this.elResponsive.innerHTML = "";
	this.elResponsive.className = "xui-responsive";
	this.elResponsive.id = "xui-responsive";
	this.elResponsive.style.pointerEvents = "none";
	this.elResponsive.style.display = "none";

	document.body.appendChild(this.elResponsive);

	this.elResponsiveAfter = window.getComputedStyle ? window.getComputedStyle(this.elResponsive, "::after") : null;
	this.currentState = 0;
	this.lastState = 0;

	if (this.elResponsiveAfter) {
		window.addEventListener("load", this.processEvent);
		window.addEventListener("resize", this.processEvent);
		window.addEventListener("orientationchange", this.processEvent);
		this.processEvent();
	};
};

/**
 * Add function for processing responsive events
 * @param {function} processResponsive - Callback - processResponsive(currentState,lastState)
 * @param {object} [processResponsiveThis] - Callback this
 */
XUI.Responsive.addProcessResponsive = function(processResponsive, processResponsiveThis) {
	this.processResponsiveList[this.processResponsiveList.length] = [ processResponsive, processResponsiveThis ];
	if (this.initOk) {
		processResponsive.call(processResponsiveThis, 1 * this.currentState, 1 * this.lastState);
	};
};

/**
 * On load
 */
XUI.Responsive.onLoad = function() {
	window.removeEventListener("load", XUI.Responsive.onLoad);
	XUI.Responsive.init();
};
window.addEventListener("load", XUI.Responsive.onLoad);
