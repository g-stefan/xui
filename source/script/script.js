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

XUI.Script = {};

/**
 * Run script
 * @param {string} script - Script ot run
 * @param {string} nonce - nonce required to run script
 */
XUI.Script.run = function (script,nonce) {    	
	var elScript = document.createElement("script");
	elScript.type = "text/javascript";	
	elScript.textContent = script;
	if(nonce){
		elScript.setAttribute("nonce",nonce);
	};
	document.body.appendChild(elScript);
};
