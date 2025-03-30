/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Responsive.Element = {};

XUI.Responsive.Element.elements = {};
XUI.Responsive.Element.elementsState = [];
XUI.Responsive.Element.elementSuffix = "_responsive";

/**
 * Process on window/iframe resize event
 */
XUI.Responsive.Element.processEventResize = function () {
	var this_ = XUI.Responsive.Element;
	var state = elResponsive.offsetWidth;
	if (this_.elementsState[elementId] != state) {
		this_.elementsState[elementId] = state;
		for (var k = 0; k < this_.elements[elementId].length; ++k) {
			if (this_.elements[elementId][k]) {
				this_.elements[elementId][k].call(undefined, state);
			};
		};
	};
};

/**
 * Add element
 * @param {string} elementId - Element id
 * @param {function} [fnNotify] - Callback on responsive event - fnNotify(size)
 */
XUI.Responsive.Element.add = function (elementId, fnNotify) {
	var elResponsive = document.getElementById(elementId + this.elementSuffix);
	if (!elResponsive) {
		var element = document.getElementById(elementId);
		if (element) {
			if (!Array.isArray(this.elements[elementId])) {
				this.elements[elementId] = [];
			};
			this.elements[elementId].push(fnNotify);

			elResponsive = document.createElement("iframe");
			elResponsive.id = elementId + this.elementSuffix;
			elResponsive.style.position = "absolute";
			elResponsive.style.top = "0px";
			elResponsive.style.left = "0px";
			elResponsive.style.width = "100%";
			elResponsive.style.height = "0px";
			elResponsive.style.opacity = "0";
			elResponsive.style.zIndex = -1000;
			elResponsive.style.pointerEvents = "none";
			elResponsive.style.display = "block";
			elResponsive.style.border = "0px";

			elResponsive.onload = function () {
				var elWindow = elResponsive.contentWindow;
				if (elWindow != null) {
					var processEventResize = function () {
						var this_ = XUI.Responsive.Element;
						var state = elResponsive.offsetWidth;
						if (this_.elementsState[elementId] != state) {
							this_.elementsState[elementId] = state;
							for (var k = 0; k < this_.elements[elementId].length; ++k) {
								if (this_.elements[elementId][k]) {
									this_.elements[elementId][k].call(undefined, state);
								};
							};
						};
					};
					elWindow.addEventListener("resize", processEventResize);
					processEventResize();
					return true;
				};
			};

			elResponsive.src = "about:blank";

			element.appendChild(elResponsive);
		};
		return false;
	};
	this.elements[elementId].push(fnNotify);
	if (fnNotify) {
		fnNotify.call(undefined, elResponsive.offsetWidth);
	};
	return true;
};

/**
 * Remove element
 * @param {string} elementId - Element id
 * @param {function} [fnNotify] - Callback on responsive event to be removed
 */
XUI.Responsive.Element.remove = function (elementId, fnNotify) {
	if (!Array.isArray(this.elements[elementId])) {
		return false;
	};
	if (fnNotify === null) {
		this.elements[elementId] = [];
	} else {
		for (var k = 0; k < this.elements[elementId].length; ++k) {
			if (this.elements[elementId][k] === fnNotify) {
				delete this.elements[elementId][k];
			};
		};
	};
	if (this.elements[elementId].length == 0) {
		delete this.elements[elementId];
		delete this.elementsState[elementId];
		var elResponsive = document.getElementById(elementId + this.elementSuffix);
		if (elResponsive) {
			elResponsive.parentElement.removeChild(elem);
		};
	};
};

/**
 * Link container element to responsive events
 * @param {string} responsiveId - Responsive Id
 * @param {string} superId - Super Id
 * @param {string} containerId - Container Id
 * @param {array} classList - Array with CSS classes
 */
XUI.Responsive.Element.linkContainer = function (responsiveId, superId, containerId, classList) {
	var elSuper = document.getElementById(superId);
	var elContainer = [];
	var processing = false;
	var checkState = 0;
	var lastState = 0;
	var memoryState = {};

	if (Array.isArray(containerId)) {
		for (var k = 0; k < containerId.length; ++k) {
			elContainer[k] = document.getElementById(containerId[k]);
		};
	} else {
		elContainer[0] = document.getElementById(containerId);
	};

	var processEvent = function () {
		var childrenState = 0;

		var reclaim = true;
		while (reclaim) {
			reclaim = false;
			for (var m = 0; m < elContainer.length; ++m) {
				if (elContainer[m]) {
					if (elContainer[m].offsetParent) {
						continue;
					};
					reclaim = true;
					delete elContainer[m];
					break;
				};
			};
		};

		for (var m = 0; m < elContainer.length; ++m) {
			if (!elContainer[m]) {
				continue;
			};
			if (elContainer[m].offsetTop > (elContainer[m].offsetParent.offsetHeight / 2)) {
				childrenState = checkState + 1;
				break;
			};
			var ln = elContainer[m].children.length;
			var rowBreak = elContainer[m].offsetHeight / 2;
			if (ln > 0) {
				for (var k = 0; k < ln; ++k) {
					childrenState += elContainer[m].children[k].offsetWidth;
					var style = window.getComputedStyle(elContainer[m].children[k]);
					childrenState += parseInt(style.marginLeft) + parseInt(style.marginRight);
					if (elContainer[m].children[k].offsetTop > rowBreak) {
						if (elContainer[m].children[k].offsetWidth == 0) {
							continue;
						};
						childrenState = checkState + 1;
						break;
					};
				};
			};
		};

		var currentClass = "";
		var nextClass = classList[classList.length - 1];
		if (elSuper.classList) {
			for (var k = 0; k < classList.length; ++k) {
				if (elSuper.classList.contains(classList[k])) {
					currentClass = classList[k];
					if (childrenState > checkState) {
						lastState = checkState;
						if (k - 1 > 0) {
							nextClass = classList[k - 1];
						} else {
							nextClass = classList[0];
						};
						break;
					};
					if (checkState > lastState) {
						lastState = checkState;
						if (k + 1 < classList.length) {
							nextClass = classList[k + 1];
						} else {
							nextClass = classList[classList.length - 1];
						};
						if (memoryState[nextClass] > checkState) {
							nextClass = currentClass;
						};
						break;
					};
					memoryState[currentClass] = checkState;
					nextClass = currentClass;
					break;
				};
			};
			if (currentClass == nextClass) {
				processing = false;
				return;
			};
			if (currentClass.length > 0) {
				elSuper.classList.remove(currentClass);
			};
			if (nextClass.length > 0) {
				elSuper.classList.add(nextClass);
			};
			setTimeout(processEvent, 100);
			return;
		};
		processing = false;
	};

	XUI.Responsive.Element.add(responsiveId, function (state) {
		checkState = state;
		if (processing) {
			return;
		};
		processing = true;
		setTimeout(processEvent, 100);
	});
};
