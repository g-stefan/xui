/*!
//
// XUI
//
// Copyright (c) 2020-2021 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.Script = {};

/**
 * Run script
 * @param {string} script - Script ot run
 */
XUI.Script.run = function (script) {
    var elScript = document.createElement("script");
    elScript.type = "text/javascript";
    elScript.innerHTML = script;
    document.body.appendChild(elScript);
};
