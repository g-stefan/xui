/*!
// XUI
// Copyright (c) 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Html = {};

/**
 * Escape RegExp
 * @param {string} str - String that will be escaped
 * @returns {string} Escaped string
 */
XUI.Html.escapeRegExp = function(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

                        /**
                         * Extract tag from HTML
                         * @param {string} inputHtml - HTML
                         * @returns {object} Extracted tag {html,tag}
                         */
                        XUI.Html.extractTag = function(inputHtml, tag) {
	var retV = {
		html : "",
		tag : ""
	};
	var tag_ = XUI.Html.escapeRegExp(tag);
	var pattern = new RegExp("<" + tag + "[^>]*>([\\S\\s]*?)</" + tag + ">", "ig");
	var matches = inputHtml.matchAll(pattern);
	for (var match_ of matches) {
		retV.tag += match_[1];
	};
	retV.html = inputHtml.replace(pattern, "");
	return retV;
};

/**
 * Extract content from HTML
 * @param {string} inputHtml - HTML
 * @returns {object} Extracted html,script and style {html,script,style}
 */
XUI.Html.extract = function(inputHtml) {
	var infoScript = XUI.Html.extractTag(inputHtml, "script");
	var infoStyle = XUI.Html.extractTag(infoScript.html, "style");
	return {
		html : infoStyle.html,
		script : infoScript.tag,
		style : infoStyle.tag
	};
};

/**
 * Update html on element with id
 * @param {string} id - Id of the element
 * @param {string} inputHtml - HTML
 * @param {function} [fnError] - Call on error - fnError()
 * @param {string} nonce - nonce required to run script
 * @returns {element} Element
 */
XUI.Html.update = function(id, inputHtml, fnError, nonce) {
	var el = document.getElementById(id);
	if (!el) {
		if (fnError) {
			fnError();
		};
		return null;
	};
	var infoHtml = XUI.Html.extract(inputHtml);
	if (infoHtml.style.length > 0) {
		XUI.Style.run(infoHtml.style, nonce);
	};
	if (infoHtml.html.length > 0) {
		el.innerHTML = infoHtml.html;
	};
	if (infoHtml.script.length > 0) {
		XUI.Script.run(infoHtml.script, nonce);
	};
	return el;
};
