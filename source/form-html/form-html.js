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

XUI.FormHtml = {};

XUI.FormHtml.instance = [];
XUI.FormHtml.instanceById = {};

/**
 * Initialize html element
 * @param {element} el - Element
 */
XUI.FormHtml.initHtml = function (el,id) {
	
	var editor=new Quill(el, {
		modules: {
			toolbar: [
				{"size":[]},
				"bold", "italic", "underline", "strike",
				{"color": []}, {"background": []},
				{"script": "sub"}, {"script": "super"},
				{"list": "ordered"}, {"list": "bullet"},
				{"indent": "-1"}, {"indent": "+1"},
				{"align": [] },
				"link",
				"clean"
			]
	    	},
		theme: "snow"
	});

	if(id){
		XUI.FormHtml.instanceById[id]=editor;
	} else {
		XUI.FormHtml.instance.push(editor);
	};

};

/**
 * Initialize html element by id
 * @param {string} id - Element id
 */
XUI.FormHtml.initById = function (id) {	
	XUI.FormHtml.initHtml($("#" + id+">.xui._content",id));
};

/**
 * Get html source, select editor by index
 * @param {string} index - Editor element index
 */
XUI.FormHtml.getHtmlById = function (index) {
	XUI.FormHtml.instance[index].getHTML();
};

/**
 * Get html source, select editor by id
 * @param {string} id - Editor element id
 */
XUI.FormHtml.getHtmlById = function (id) {
	XUI.FormHtml.instanceById[id].getHTML();
};

/**
 * Initialization
 */
XUI.FormHtml.init = function () {
	$(".xui.form-html>.xui._content").each(function () {
		XUI.FormHtml.initHtml(this,$(this).parent().attr("id"));
	});
};

/**
 * On load
 */
XUI.FormHtml.onLoad = function () {	
	window.removeEventListener("load", XUI.FormHtml.onLoad);
	XUI.FormHtml.init();
};
window.addEventListener("load", XUI.FormHtml.onLoad);
