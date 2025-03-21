/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Element = {};

/**
 * Get first element by class name
 * @param {element} el - Element
 * @param {string} className - Class name one or more separated by " "
 * @returns {element} Element
 */
XUI.Element.getByClassNameFirst = function (el, className) {
	var elList = el.getElementsByClassName(className);
	if (elList.length == 0) {
		return null;
	};
	return elList[0];
};

/**
 * Get elements with specified class and attribute set
 * @param {element} el - Element
 * @param {string} className - Class name one or more separated by " "
 * @param {string} attribute - Attribute to find
 * @returns {elements} Array of elements
 */
XUI.Element.getByClassNameAndAttribute = function (el, className, attribute) {
	var retV = [];
	var elList = el.getElementsByClassName(className);
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		if (elList[elIndex].getAttribute(attribute)) {
			retV[retV.length] = elList[elIndex];
		};
	};
	return retV;
};

/**
 * Get elements with specified class and attribute, attribute has specified value
 * @param {element} el - Element
 * @param {string} className - Class name one or more separated by " "
 * @param {string} attribute - Attribute to find
 * @param {string} attributeValue - Attribute value to find
 * @returns {elements} Array of elements
 */
XUI.Element.getByClassNameAndAttributeValue = function (el, className, attribute, attributeValue) {
	var retV = [];
	var elList = el.getElementsByClassName(className);
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		if (elList[elIndex].getAttribute(attribute) == attributeValue) {
			retV[retV.length] = elList[elIndex];
		};
	};
	return retV;
};

/**
 * Get first element with specified class and attribute, attribute has specified value
 * @param {element} el - Element
 * @param {string} className - Class name one or more separated by " "
 * @param {string} attribute - Attribute to find
 * @param {string} attributeValue - Attribute value to find
 * @returns {element} Element
 */
XUI.Element.getByClassNameAndAttributeValueFirstOne = function (el, className, attribute, attributeValue) {
	var elList = XUI.Element.getByClassNameAndAttributeValue(el, className, attribute, attributeValue);
	if (elList.length == 0) {
		return null;
	};
	return elList[0];
};

/**
 * Get elements with specified tag name and attribute, attribute has specified value
 * @param {element} el - Element
 * @param {string} tagName - Element tag name
 * @param {string} attribute - Attribute to find
 * @param {string} attributeValue - Attribute value to find
 * @returns {elements} Array of elements
 */
XUI.Element.getByTagNameAndAttributeValue = function (el, tagName, attribute, attributeValue) {
	var retV = [];
	var elList = el.getElementsByTagName(tagName);
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		if (elList[elIndex].getAttribute(attribute) == attributeValue) {
			retV[retV.length] = elList[elIndex];
		};
	};
	return retV;
};

/**
 * Get first element with specified tag name and attribute, attribute has specified value
 * @param {element} el - Element
 * @param {string} tagName - Element tag name
 * @param {string} attribute - Attribute to find
 * @param {string} attributeValue - Attribute value to find
 * @returns {element} Element
 */
XUI.Element.getByTagNameAndAttributeValueFirstOne = function (el, tagName, attribute, attributeValue) {
	var elList = XUI.Element.getByTagNameAndAttributeValue(el, tagName, attribute, attributeValue);
	if (elList.length == 0) {
		return null;
	};
	return elList[0];
};

/**
 * Get elements with specified tag name and class name
 * @param {element} el - Element
 * @param {string} tagName - Element tag name
 * @param {string} className - Class name one or more separated by " "
 * @returns {elements} Array of elements
 */
XUI.Element.getByTagNameAndClassName = function (el, tagName, className) {
	var retV = [];
	var elList = el.getElementsByClassName(className);
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		if (elList[elIndex].tagName.toLowerCase() == tagName.toLowerCase()) {
			retV[retV.length] = elList[elIndex];
		};
	};
	return retV;
};

/**
 * Get next sibling with specified class name
 * @param {element} el - Element
 * @param {string} className - Class name one or more separated by " "
 * @returns {element} Element
 */
XUI.Element.getNextSiblingByClassName = function (el, className) {
	var classNameList = className.split(" ");
	var i;
	for (var scan = el.nextSibling; scan; scan = scan.nextSibling) {
		if (scan.classList) {
			for (i = 0; i < classNameList.length; ++i) {
				if (!scan.classList.contains(classNameList[i])) {
					break;
				};
			};
			if (i == classNameList.length) {
				return scan;
			};
		};
	};
	return null;
};

/**
 * Get offset on x axis
 * @param {element} el - Element
 * @returns {number} Offset
 */
XUI.Element.getOffsetX = function (el) {
	var clientRect = el.getBoundingClientRect();

	var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
	var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

	return Math.floor(clientRect.left + scrollLeft - clientLeft);
};

/**
 * Get offset on y axis
 * @param {element} el - Element
 * @returns {number} Offset
 */
XUI.Element.getOffsetY = function (el) {
	var clientRect = el.getBoundingClientRect();

	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;

	return Math.floor(clientRect.top + scrollTop - clientTop);
};

/**
 * Element is child of parent
 * @param {element} child - Child element
 * @param {element} parent - Parent element
 * @returns {boolean} is child
 */
XUI.Element.isChildOf = function (child, parent) {
	var el = child.parentNode;
	while (el != null) {
		if (el == parent) {
			return true;
		};
		el = el.parentNode;
	};
	return false;
};

/**
 * Trigger event on element
 * @param {element} el - Element
 * @param {srring} eventToTrigger - Event name
 */
XUI.Element.triggerEvent = function (el, eventToTrigger) {
	if ("createEvent" in document) {
		var elEvent = document.createEvent("HTMLEvents");
		elEvent.initEvent(eventToTrigger, true, true);
		el.dispatchEvent(elEvent);
		return;
	};
	el.fireEvent(eventToTrigger);
};
