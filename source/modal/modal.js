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

XUI.Modal = {};

XUI.Modal.elActive = null;
XUI.Modal.elInitialWidth = 0;
XUI.Modal.elInitialWidthFirstTime = true;

/**
 * Activate modal
 * @param {string} elId - Modal element id
 */
XUI.Modal.activate = function (elId) {
	var el = document.getElementById(elId);
	if (el) {
		this.setDeactivateEventListener(XUI.Element.getByClassNameFirst(el, "_modal-content"));
		el.classList.toggle("-active");
		this.elActive = el;
		document.body.classList.add("-modal-open");
		setTimeout(function () {
			XUI.Modal.onResize();
		}, 500);
	};
};

/**
 * Deactivate open modal
 */
XUI.Modal.deactivate = function () {
	if (this.elActive) {
		this.elActive.classList.add("-animate-deactivate");
	};
};

/**
 * Finish animation on close
 */
XUI.Modal.deactivateAnimationFinish = function () {
	if (this.elActive) {
		if (!this.elActive.classList.contains("-animate-deactivate")) {
			return;
		};
		this.elActive.classList.remove("-active");
		this.elActive.classList.remove("-animate-deactivate");

		if (!this.elInitialWidthFirstTime) {
			this.elActive.classList.remove("-scroll-x");
			var el = XUI.Element.getByClassNameFirst(this.elActive, "_modal-content");
			if (el) {
				el.style.removeProperty("width");
			};
		};
	};

	this.elActive = null;
	this.elInitialWidth = 0;
	this.elInitialWidthFirstTime = true;
	document.body.classList.remove("-modal-open");
};

/**
 * Set event on deactivate on animation end
 * @param {element} el - Modal element
 */
XUI.Modal.setDeactivateEventListener = function (el) {
	if (el.getAttribute("data-xui-modal") != "on") {
		el.setAttribute("data-xui-modal", "on");
		el.addEventListener("animationend", function () {
			XUI.Modal.deactivateAnimationFinish();
		});
	};
};

/**
 * Deactivate modal on key up
 * @param {event} evt - Event
 */
XUI.Modal.onKeyUp = function (evt) {
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
XUI.Modal.onResize = function () {
	var this_ = XUI.Modal;
	if (this_.elActive) {
		var el = XUI.Element.getByClassNameFirst(this_.elActive, "_modal-content");
		if (el) {
			if (el.offsetWidth > window.innerWidth) {
				if (this_.elInitialWidthFirstTime) {
					this_.elActive.classList.add("-scroll-x");
					this_.elInitialWidth = el.offsetWidth;
					this_.elInitialWidthFirstTime = false;
				};
				el.style.width = window.innerWidth + "px";
			} else {
				if (!this_.elInitialWidthFirstTime) {
					if (this_.elInitialWidth < window.innerWidth) {
						this_.elActive.classList.remove("-scroll-x");
						el.style.width = this_.elInitialWidth + "px";
						this_.elInitialWidthFirstTime = true;
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
XUI.Modal.init = function () {
	var elList = document.getElementsByClassName("xui modal");
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		var el = XUI.Element.getByClassNameFirst(elList[elIndex], "_modal-close-button");
		if (el) {
			(function (elSuper, el) {
				el.addEventListener("click", function () {
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
XUI.Modal.onLoad = function () {
	window.removeEventListener("load", XUI.Modal.onLoad);
	XUI.Modal.init();
};
window.addEventListener("load", XUI.Modal.onLoad);
