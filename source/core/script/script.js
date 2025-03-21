/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Script = {};

/**
 * Run script
 * @param {string} script - Script ot run
 * @param {string} nonce - nonce required to run script
 * @param {string} el - attach script as child of el
 */
XUI.Script.run = function (script, nonce, el) {
	el = el ? el : document.body;
	var elScript = document.createElement("script");
	elScript.textContent = script;
	if (nonce) {
		elScript.setAttribute("nonce", nonce);
	};
	el.appendChild(elScript);
};
