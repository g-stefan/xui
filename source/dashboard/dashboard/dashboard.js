/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Dashboard = {};

XUI.Dashboard.mainSelector = "xui-dashboard --main";

/**
 * Get default state
 * @return {object} state
 */
XUI.Dashboard.getDefaultState = function() {
	return {
		mode : "normal",
		state : "open"
	};
};

/**
 * Get current state
 * @return {object} state
 */
XUI.Dashboard.getState = function() {
	var el = XUI.Element.getByClassNameFirst(document, this.mainSelector);
	if (el) {
		var mode = "";
		var state = "";

		if (el.classList.contains("--normal")) {
			mode = "normal";
		} else if (el.classList.contains("--mini")) {
			mode = "mini";
		} else if (el.classList.contains("--over")) {
			mode = "over";
		};

		if (el.classList.contains("--open")) {
			state = "open";
		} else if (el.classList.contains("--closed")) {
			state = "closed";
		};

		if ((mode.length > 0) && (state.length > 0)) {
			return {
				mode : mode,
				state : state
			};
		};
	};
	return this.getDefaultState();
};

/**
 * Set element class from class list
 * @param {element} el - Element
 * @param {string} x - Class to activate
 * @param {array} classList - array with classes
 */
XUI.Dashboard.setClass = function(el, x, classList) {
	for (var k in classList) {
		if (x != classList[k]) {
			el.classList.remove("--" + classList[k]);
		};
	};
	el.classList.add("--" + x);
};

/**
 * Set current state
 * @param {object} state - State to be set
 */
XUI.Dashboard.setState = function(state) {
	var oldState = this.getState();
	if ((state.mode == oldState.mode) && (state.state == oldState.state)) {
		return;
	};
	var el = XUI.Element.getByClassNameFirst(document, this.mainSelector);
	if (el) {
		this.setClass(el, state.mode, [ "normal", "mini", "over" ]);
		this.setClass(el, state.state, [ "open", "closed" ]);
		this.notifyStateChange();
	};
};

/**
 * Encode state
 * @param {object} state - State
 * @return {string} Encoded state
 */
XUI.Dashboard.encodeState = function(state) {
	return state.mode + "-" + state.state;
};

/**
 * Decode state
 * @param {string} state - Encoded state
 * @return {object} state
 */
XUI.Dashboard.decodeState = function(state) {
	if (state) {
		state = ("" + state).split("-");
		if (state.length >= 2) {
			return {
				mode : state[0],
				state : state[1]
			};
		};
	};
	return this.getDefaultState();
};

/**
 * Save state in cookie
 * @param {object} state - State to be saved
 * @param {boolean} isUser - Is user state
 */
XUI.Dashboard.setCookie = function(state, isUser) {
	XUI.Cookie.set("xui-dashboard", this.encodeState(state));
	if (isUser) {
		if (state.mode == "normal") {
			XUI.Cookie.set("xui-dashboard_user", this.encodeState(state));
		};
	};
};

/**
 * Get state from cookie
 * @param {boolean} isUser - Is user state
 */
XUI.Dashboard.getCookie = function(isUser) {
	var state = this.decodeState(XUI.Cookie.get("xui-dashboard"));
	if (isUser) {
		if (state.mode == "normal") {
			stateUser = XUI.Cookie.get("xui-dashboard_user");
			if (stateUser) {
				state = this.decodeState(stateUser);
			};
		};
	};
	return state;
};

/**
 * Set next state
 * @param {object} state - State to be set
 * @param {boolean} isUser - Is user state
 */
XUI.Dashboard.setNextState = function(state, isUser) {
	if (!isUser) {
		if (state.mode == "normal") {
			userState = this.getCookie(true);
			if (userState.mode == "normal") {
				state.state = userState.state;
			};
		};
	};
	this.setCookie(state, isUser);
	this.setState(state);
};

/**
 * Process responsive
 * @param {number} width - Responsive width
 */
XUI.Dashboard.processResponsive = function(width) {
	var nextState = this.getDefaultState();
	if (width < 600) {
		nextState.mode = "over";
		nextState.state = "closed";
		this.setNextState(nextState, false);
		return;
	};
	if ((width >= 600) && (width < 960)) {
		nextState.mode = "mini";
		nextState.state = "closed";
		this.setNextState(nextState, false);
		return;
	};
	if (width >= 960) {
		nextState.mode = "normal";
		nextState.state = "closed";
		this.setNextState(nextState, false);
		return;
	};
	if (width >= 1280) {
		nextState.mode = "normal";
		nextState.state = "open";
		this.setNextState(nextState, false);
		return;
	};
	this.setNextState(nextState, false);
};

/**
 * Toggle dashboard normal open/close
 * @param {string} id - Dashboard id
 */
XUI.Dashboard.toggleNormal = function(id) {
	var el = document.getElementById(id);
	if (el) {
		if (el.classList.contains("--closed")) {
			el.classList.remove("--closed");
			el.classList.add("--open");
			this.notifyStateChange();
			return;
		};
		if (el.classList.contains("--open")) {
			el.classList.remove("--open");
			el.classList.add("--closed");
			this.notifyStateChange();
			return;
		};
	};
};

/**
 * Toggle dashboard mini open/close
 * @param {string} id - Dashboard id
 */
XUI.Dashboard.toggleMini = function(id) {
	this.toggleNormal(id);
};

/**
 * Toggle dashboard over open/close
 * @param {string} id - Dashboard id
 */
XUI.Dashboard.toggleOver = function(id) {
	this.toggleNormal(id);
};

/**
 * Toggle dashboard from current state
 */
XUI.Dashboard.toggleAction = function() {
	var state = this.getState();

	if (state.state == "open") {
		state.state = "closed";
		this.setNextState(state, true);
		return;
	};
	if (state.state == "closed") {
		state.state = "open";
		this.setNextState(state, true);
		return;
	};

	this.setNextState(state, true);
};

/**
 * State change callback
 */
XUI.Dashboard.notifyStateChange = function() {
};

/**
 * Initialization
 */
XUI.Dashboard.init = function() {
	XUI.Responsive.addProcessResponsive(this.processResponsive, this);
	this.setNextState(this.getCookie(true), false);

	// User
	var buttonUser = document.getElementById("xui-popup-menu-user_action");
	if (buttonUser) {
		buttonUser.addEventListener("click", function() {
			var popup = document.getElementById("xui-popup-menu-user");
			popup.classList.toggle("--open");
			XUI.Capture.set([ popup, buttonUser ], function(e, elList) {
				elList[0].classList.remove("--open");
			});
		});
	};

	// Application
	var buttonApplication = document.getElementById("xui-popup-menu-application_action");
	if (buttonApplication) {
		buttonApplication.addEventListener("click", function() {
			var popup = document.getElementById("xui-popup-menu-application");

			var parentX = XUI.Element.getOffsetX(popup.offsetParent);
			var parentY = XUI.Element.getOffsetY(popup.offsetParent);
			var btnX = XUI.Element.getOffsetX(buttonApplication);
			var btnY = XUI.Element.getOffsetY(buttonApplication);
			var btnH = buttonApplication.offsetHeight;
			var btnW = buttonApplication.offsetWidth;
			popup.style.top = btnY + btnH - parentY + "px";
			popup.style.left = btnX + Math.floor(btnW / 2) - parentX - 18 + "px";

			popup.classList.toggle("--open");
			XUI.Capture.set([ popup, buttonApplication ], function(e, elList) {
				elList[0].classList.remove("--open");
			});
		});
	};
};

/**
 * On load
 */
XUI.Dashboard.onLoad = function() {
	window.removeEventListener("load", XUI.Dashboard.onLoad);
	XUI.Dashboard.init();
};
window.addEventListener("load", XUI.Dashboard.onLoad);
