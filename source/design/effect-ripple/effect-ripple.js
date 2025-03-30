/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.EffectRipple = {};

XUI.EffectRipple.animationInterval = 300;
XUI.EffectRipple.animationStep = 20;
XUI.EffectRipple.animationIntervalOut = 200;
XUI.EffectRipple.animationMinOpacity = 0.1;
XUI.EffectRipple.animationMaxOpacity = 1;

/**
 * Process animation out effect
 * @param {element} el - Element
 * @param {function} animationProcessOut - Callback
 */
XUI.EffectRipple.outEffect = function (el, animationProcessOut) {
	if (el.classList.contains("--animation-active")) {
		el.classList.remove("--animation-active");
		el.classList.remove("--animation-in");
		el.classList.add("--animation-out");
		animationProcessOut();
		return;
	};
	if (el.classList.contains("--animation-in")) {
		setTimeout(function () {
			XUI.EffectRipple.outEffect(el, animationProcessOut);
		}, Math.floor(this.animationInterval / 2));
	};
};

/**
 * Initialize element for effect
 * @param {element} parent - The parent element
 * @param {element} el - Element
 */
XUI.EffectRipple.initElement = function (parent, el) {
	var this_ = XUI.EffectRipple;
	var frameAnimationOut = 0;
	var opacityOutEl = this.animationMaxOpacity;
	var opacityOutElDelta = ((0.0 - this.animationMaxOpacity) * this.animationStep) / this.animationIntervalOut;

	var animationProcessOut = function () {
		frameAnimationOut += this_.animationStep;

		opacityOutEl += opacityOutElDelta;

		el.style.opacity = opacityOutEl;

		if (frameAnimationOut < this_.animationIntervalOut) {
			setTimeout(animationProcessOut, this_.animationStep);
			return;
		};

		// reset
		frameAnimationOut = 0;
		opacityOutEl = this_.animationMaxOpacity;
		el.style.opacity = 0.0;
	};

	parent.addEventListener("mouseup", function () {
		XUI.EffectRipple.outEffect(el, animationProcessOut);
	});

	parent.addEventListener("mouseleave", function () {
		XUI.EffectRipple.outEffect(el, animationProcessOut);
	});
};

/**
 * Prepare element for animation
 * @param {element} parent - Parent element
 * @param {string} [effectColor] - Color
 * @param {string} [effectColorClass] - CSS class
 * @return {element} Element
 */
XUI.EffectRipple.prepareElement = function (parent, effectColor, effectColorClass) {
	var el = XUI.Element.getByClassNameFirst(parent, "xui-effect-ripple_element");

	if (!el) {
		var elLayer = document.createElement("div");
		elLayer.innerHTML = "";
		elLayer.className = "xui-effect-ripple_layer";

		parent.style.zIndex = 1;
		parent.insertBefore(elLayer, parent.firstChild);

		var el = document.createElement("div");
		el.innerHTML = "";
		el.className = "xui-effect-ripple_element";

		if (effectColor) {
			el.style.backgroundColor = effectColor;
		};

		if (effectColorClass) {
			el.className = "xui-effect-ripple_element " + effectColorClass;
		};

		elLayer.appendChild(el);

		this.initElement(parent, el);
	};

	return el;
};

/**
 * Add effect ripple to element
 * @param {element} el - ELement
 * @param {string} [effectType] - Effect type
 * @param {string} [effectColor] - Color
 * @param {string} [effectColorClass] - CSS Class
 */
XUI.EffectRipple.add = function (el, effectType, effectColor, effectColorClass) {
	var this_ = XUI.EffectRipple;
	var parent = el;

	this.prepareElement(parent, effectColor, effectColorClass);

	parent.addEventListener("mousedown", function (event) {
		var el = XUI.Element.getByClassNameFirst(parent, "xui-effect-ripple_element");

		if (!el) {
			el = this_.prepareElement(parent);
		};

		if (el.classList.contains("--animation-in")) {
			return;
		};

		el.classList.remove("--animation-out");
		el.classList.remove("--animation-dummy");

		var sizeParent = Math.max(parent.offsetWidth, parent.offsetHeight);
		var sizeElInitial = 6;

		var elLeftX;
		var elLeftY;

		if (effectType == "center") {
			elLeftX = parent.clientWidth / 2;
			elLeftY = parent.clientHeight / 2;
		} else {
			elLeftX = event.pageX - XUI.Element.getOffsetX(parent);
			elLeftY = event.pageY - XUI.Element.getOffsetY(parent);
		};

		el.style.height = sizeElInitial + "px";
		el.style.width = sizeElInitial + "px";
		el.style.left = elLeftX - (sizeElInitial / 2) + "px";
		el.style.top = elLeftY - (sizeElInitial / 2) + "px";

		el.classList.add("--animation-in");

		var frameAnimation = 0;
		var sizeEl = sizeElInitial;
		var sizeElDelta = (3 * ((sizeParent - sizeElInitial) * this_.animationStep)) / this_.animationInterval;
		var opacityEl = this_.animationMinOpacity;
		var opacityElDelta = ((this_.animationMaxOpacity - this_.animationMinOpacity) * this_.animationStep) / this_.animationInterval;

		var animationProcessIn = function () {
			frameAnimation += this_.animationStep;

			sizeEl += sizeElDelta;
			opacityEl += opacityElDelta;

			el.style.opacity = opacityEl;

			el.style.height = Math.floor(sizeEl) + "px";
			el.style.width = Math.floor(sizeEl) + "px";
			el.style.left = Math.floor(elLeftX - (sizeEl / 2)) + "px";
			el.style.top = Math.floor(elLeftY - (sizeEl / 2)) + "px";

			if (frameAnimation < this_.animationInterval) {
				setTimeout(animationProcessIn, this_.animationStep);
				return;
			};

			el.classList.add("--animation-active");
		};

		animationProcessIn();
	});
};

/**
 * Create
 * @param {elements} elements - Selected elements
 */
XUI.EffectRipple.create = function (elements) {
	Array.from(elements).forEach(function (item) {
		var effectType = item.getAttribute("data-xui-ripple");
		var effectColor = item.getAttribute("data-xui-ripple-color");
		var effectColorClass = item.getAttribute("data-xui-ripple-color-class");
		XUI.EffectRipple.add(item, effectType, effectColor, effectColorClass);
	});
};

/**
 * Initialization 
 */
XUI.EffectRipple.init = function () {
	XUI.EffectRipple.create(document.getElementsByClassName("xui-effect-ripple"));
};

/**
 * On load
 */
XUI.EffectRipple.onLoad = function () {
	window.removeEventListener("load", XUI.EffectRipple.onLoad);
	XUI.EffectRipple.init(document);
};
window.addEventListener("load", XUI.EffectRipple.onLoad);
