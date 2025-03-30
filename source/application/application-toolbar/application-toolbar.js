/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

if (!XUI.App) {
	XUI.App = {};
};

XUI.App.Toolbar = {};

/**
 * Link responsive element
 * @param {string} idResponsive - Responsive element id
 * @param {string} idToolbar - Toolbar element id
 * @param {string} idToolbarContent - Toolbar content element id
 */
XUI.App.Toolbar.linkResponsive = function(idResponsive, idToolbar, idToolbarContent) {
	XUI.Responsive.Element.linkContainer(
	    idResponsive, idToolbar, idToolbarContent,
	    [ "--important", "--small", "--large" ]);
};

/**
 * Link responsive element, toolbar has left and right content
 * @param {string} idResponsive - Responsive element id
 * @param {string} idToolbar - Toolbar element id
 * @param {string} idToolbarContentLeft - Toolbar left content element id
 * @param {string} idToolbarContentRight - Toolbar right content element id
 */
XUI.App.Toolbar.linkResponsiveLeftRight = function(idResponsive, idToolbar, idToolbarContentLeft, idToolbarContentRight) {
	XUI.Responsive.Element.linkContainer(
	    idResponsive, idToolbar, [ idToolbarContentLeft, idToolbarContentRight ],
	    [ "--important", "--small", "--small-right", "--large" ]);
};
