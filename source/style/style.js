/*!
//
// XUI
//
// Copyright (c) 2020-2022 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.Style = {};

/**
 * Run style
 * @param {string} style - Style ot run
 * @param {string} nonce - nonce required to run style
 */
XUI.Style.run = function (style,nonce) {
	var elStyle = document.createElement("style");
	elStyle.type = "text/css";
	elStyle.textContent = style;
	if(nonce){
		elStyle.setAttribute("nonce",nonce);
	};
	document.head.appendChild(elStyle);
};
