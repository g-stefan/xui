/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Style = {};

/**
 * Run style
 * @param {string} style - Style ot run
 * @param {string} nonce - nonce required to run style
 * @param {string} el - attach style as child of el
 */
XUI.Style.run = function (style, nonce, el) {
	el = el ? el : document.head;
	var elStyle = document.createElement("style");
	elStyle.textContent = style;
	if (nonce) {
		elStyle.setAttribute("nonce", nonce);
	};
	el.appendChild(elStyle);
};
