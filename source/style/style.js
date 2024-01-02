/*!
// XUI
// Copyright (c) 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Style = {};

/**
 * Run style
 * @param {string} style - Style ot run
 * @param {string} nonce - nonce required to run style
 */
XUI.Style.run = function(style, nonce) {
	var elStyle = document.createElement("style");
	elStyle.type = "text/css";
	elStyle.textContent = style;
	if (nonce) {
		elStyle.setAttribute("nonce", nonce);
	};
	document.head.appendChild(elStyle);
};
