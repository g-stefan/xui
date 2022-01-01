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

XUI.Cookie = {};

/**
 * Get cookie
 * @param {string} name - Cookie name
 * @return {string} Cookie value
 */
XUI.Cookie.get = function (name) {
	var start, len, end;
	start = document.cookie.indexOf(name + "=");
	len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return null;
	};
	if (start == -1) {
		return null;
	};
	end = document.cookie.indexOf(";", len);
	if (end == -1) {
		end = document.cookie.length;
	};
	return unescape(document.cookie.substring(len, end));
};

/**
 * Set cookie
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {string} [expires] - Expiration date 
 * @param {string} [path]
 * @param {string} [domain]
 * @param {boolean} [secure]
 */
XUI.Cookie.set = function (name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
		((expires) ? ";expires=" + expires.toGMTString() : "") +
		((path) ? ";path=" + path : "") +
		((domain) ? ";domain=" + domain : "") +
		((secure) ? ";secure" : "");
};

/**
 * Remove cookie
 * @param {string} name - Cookie name
 * @param {string} [path]
 * @param {string} [domain]
 */
XUI.Cookie.remove = function (name, path, domain) {
	if (XUI.Cookie.get(name)) {
		document.cookie = name + "=" +
			((path) ? ";path=" + path : "") +
			((domain) ? ";domain=" + domain : "") +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	};
};
