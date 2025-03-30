/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Modal = {};

XUI.Modal.list = [];
XUI.Modal.listSP = 0;

// XUI.Modal.elId = null;
// XUI.Modal.elActive = null;
// XUI.Modal.elInitialWidth = 0;
// XUI.Modal.elInitialWidthFirstTime = true;

/**
 * Activate modal
 * @param {string} elId - Modal element id
 */
XUI.Modal.activate = function(elId) {
	var el = document.getElementById(elId);
	if (el) {
		this.list[this.listSP] = {
			elId : elId,
			elActive : el,
			elInitialWidth : 0,
			elInitialWidthFirstTime : true
		};
		++this.listSP;

		this.setDeactivateEventListener(XUI.Element.getByClassNameFirst(el, "xui-modal_content"));
		el.classList.toggle("--active");

		if (this.listSP == 1) {
			document.body.classList.add("--modal-open");
		};

		setTimeout(function() {
			XUI.Modal.onResize();
		}, 500);
	};
};

/**
 * Deactivate open modal
 */
XUI.Modal.deactivate = function() {
	if (this.listSP == 0) {
		return;
	};
	var index = this.listSP - 1;

	if (this.list[index].elActive) {
		this.list[index].elActive.classList.add("--animate-deactivate");
	};
};

/**
 * Finish animation on close
 */
XUI.Modal.deactivateAnimationFinish = function() {
	if (this.listSP == 0) {
		return;
	};
	var index = this.listSP - 1;

	if (this.list[index].elActive) {
		if (!this.list[index].elActive.classList.contains("--animate-deactivate")) {
			return;
		};
		this.list[index].elActive.classList.remove("--active");
		this.list[index].elActive.classList.remove("--animate-deactivate");

		if (!this.list[index].elInitialWidthFirstTime) {
			this.list[index].elActive.classList.remove("--scroll-x");
			var el = XUI.Element.getByClassNameFirst(this.list[index].elActive, "xui-modal_content");
			if (el) {
				el.style.removeProperty("width");
			};
		};
	};

	this.list[index].elActive = null;
	this.list[index].elInitialWidth = 0;
	this.list[index].elInitialWidthFirstTime = true;

	--this.listSP;

	if (this.listSP == 0) {
		document.body.classList.remove("--modal-open");
	};
};

/**
 * Set event on deactivate on animation end
 * @param {element} el - Modal element
 */
XUI.Modal.setDeactivateEventListener = function(el) {
	if (el.getAttribute("data-xui-modal") != "on") {
		el.setAttribute("data-xui-modal", "on");
		el.addEventListener("animationend", function() {
			XUI.Modal.deactivateAnimationFinish();
		});
	};
};

/**
 * Deactivate modal on key up
 * @param {event} evt - Event
 */
XUI.Modal.onKeyUp = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key === "Escape" || evt.key === "Esc");
	} else {
		isEscape = (evt.keyCode === 27);
	};
	if (isEscape) {
		XUI.Modal.deactivate();
	};
};

/**
 * Resize modal on event
 */
XUI.Modal.onResize = function() {
	var this_ = XUI.Modal;

	if (this_.listSP == 0) {
		return;
	};
	var index = this_.listSP - 1;

	if (this_.list[index].elActive) {
		var el = XUI.Element.getByClassNameFirst(this_.list[index].elActive, "xui-modal_content");
		if (el) {
			if (el.offsetWidth > window.innerWidth) {
				if (this_.list[index].elInitialWidthFirstTime) {
					this_.list[index].elActive.classList.add("--scroll-x");
					this_.list[index].elInitialWidth = el.offsetWidth;
					this_.list[index].elInitialWidthFirstTime = false;
				};
				el.style.width = window.innerWidth + "px";
			} else {
				if (!this_.list[index].elInitialWidthFirstTime) {
					if (this_.list[index].elInitialWidth < window.innerWidth) {
						this_.list[index].elActive.classList.remove("--scroll-x");
						el.style.width = this_.list[index].elInitialWidth + "px";
						this_.list[index].elInitialWidthFirstTime = true;
					} else {
						el.style.width = window.innerWidth + "px";
					};
				};
			};
		};
	};
};

/**
 * Initialization
 */
XUI.Modal.init = function() {
	var elList = document.getElementsByClassName("xui-modal");
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		var el = XUI.Element.getByClassNameFirst(elList[elIndex], "xui-modal_close-button");
		if (el) {
			(function(elSuper, el) {
			        el.addEventListener("click", function() {
				        XUI.Modal.deactivate();
			        });
			})(elList[elIndex], el);
		};
	};
	document.addEventListener("keyup", XUI.Modal.onKeyUp);
	window.addEventListener("resize", XUI.Modal.onResize);
};

/**
 * On load
 */
XUI.Modal.onLoad = function() {
	window.removeEventListener("load", XUI.Modal.onLoad);
	XUI.Modal.init();
};
window.addEventListener("load", XUI.Modal.onLoad);
