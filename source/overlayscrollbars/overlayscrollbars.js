/*!
//
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.OverlayScrollbars = {};

/**
 * Initialize Overlay Scrollbars
 * @param {elements} elements - Selected elements (JQuery)
 * @param {object} options - Overlay scrollbars config options
 */
XUI.OverlayScrollbars.create = function(elements, options) {
	if (!options) {
		options = {scrollbars : {clickScrolling : true}};
	};
	return elements.overlayScrollbars(options);
};

/**
 * Destroy Overlay Scrollbars
 * @param {elements} elements - Selected elements
 */
XUI.OverlayScrollbars.destroy = function(elements) {
	if (elements) {
		if (elements.overlayScrollbars()) {
			elements.overlayScrollbars().destroy();
		};
	};
};

/**
 * Update Overlay Scrollbars
 * @param {elements} elements - Selected elements
 */
XUI.OverlayScrollbars.update = function(elements) {
	if (elements) {
		if (elements.overlayScrollbars()) {
			elements.overlayScrollbars().update(true);
		};
	};
};

/**
 * Sleep Overlay Scrollbars
 * @param {elements} elements - Selected elements
 */
XUI.OverlayScrollbars.sleep = function(elements) {
	if (elements) {
		if (elements.overlayScrollbars()) {
			elements.overlayScrollbars().sleep();
		};
	};
};
