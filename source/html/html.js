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

XUI.Html = {};

/**
 * Extract script from HTML
 * @param {string} inputHtmlAndScript - Text with HTML and script
 * @returns {object} Extracted html and script {html,js}
 */
XUI.Html.extractScript = function (inputHtmlAndScript) {
    retV = {
        html: "",
        js: ""
    };
    pattern = /<script[^>]*>([\S\s]*?)<\/script>/ig;
    matches = inputHtmlAndScript.match(pattern);
    if (matches) {
        retV.js = "<script>";
        for (var k = 0; k < matches.length; ++k) {
            matches[k] = matches[k].replace(/<script[^>]*>/, "");
            matches[k] = matches[k].replace(/<\/script>/, "");
            retV.js += matches[k];
        };
        retV.js += "</script>";
    };
    retV.html = inputHtmlAndScript.replace(pattern, "");
    return retV;
};

/**
 * Update html on element with id and run script if present
 * @param {string} id - Id of the element
 * @param {string} inputHtmlAndScript - Text with HTML and script
 * @param {function} [fnError] - Call on error - fnError()
 * @returns {element} Element
 */
XUI.Html.update = function (id, inputHtmlAndScript, fnError) {
    var el = document.getElementById(id);
    if (!el) {
        fnError();
        return null;
    };
    var htmlAndJs = XUI.Html.extractScript(inputHtmlAndScript);
    if (htmlAndJs.html.length > 0) {
        el.innerHTML = htmlAndJs.html;
    };
    if (htmlAndJs.js.length > 0) {
        XUI.Script.run(htmlAndJs.js);
    };
    return el;
};
