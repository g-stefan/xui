/*!
//
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.OverlayScrollbars = {};
XUI.OverlayScrollbars.instance = null;

/**
 * Initialize Overlay Scrollbars
 * @param {elements} elements - Selected elements
 * @param {object} options - Overlay scrollbars config options
 */
XUI.OverlayScrollbars.create = function(elements, options) {
	retV = [];
	if (!options) {
		options = {scrollbars : {clickScrolling : true}};
	};
	Array.from(elements).forEach(function(item) {
		retV.push(this.instance(item, options));
	},this);
	return retV;
};

/**
 * Destroy Overlay Scrollbars
 * @param {elements} elements - Selected elements
 */
XUI.OverlayScrollbars.destroy = function(elements) {
	Array.from(elements).forEach(function(item) {
		this.instance(item).destroy();
	},this);	
};

/**
 * Destroy Overlay Scrollbars
 * @param {items} instance - Instance of created scrollbars
 */
XUI.OverlayScrollbars.instanceDestroy = function(items) {
	items.forEach(function(item) {
		item.destroy();
	});	
};

/**
 * Update Overlay Scrollbars
 * @param {elements} elements - Selected elements
 */
XUI.OverlayScrollbars.update = function(elements) {
	Array.from(elements).forEach(function(item) {
		this.instance(item).update(true);
	},this);
};

/**
 * Update Overlay Scrollbars
 * @param {items} instance - Instance of created scrollbars
 */
XUI.OverlayScrollbars.instanceUpdate = function(items) {
	items.forEach(function(item) {
		item.update(true);
	});	
};

/**
 * Initialization
 */
XUI.OverlayScrollbars.init = function() {
	this.instance = OverlayScrollbarsGlobal.OverlayScrollbars;
	this.instance.plugin(OverlayScrollbarsGlobal.ClickScrollPlugin);
	this.instance.nonce(document.scripts[0].nonce);
	XUI.OverlayScrollbars.create(document.querySelectorAll(".xui-overlay-scrollbars"));
};

/**
 * On load
 */
XUI.OverlayScrollbars.onLoad = function() {
	window.removeEventListener("load", XUI.OverlayScrollbars.onLoad);
	XUI.OverlayScrollbars.init();
};
window.addEventListener("load", XUI.OverlayScrollbars.onLoad);
