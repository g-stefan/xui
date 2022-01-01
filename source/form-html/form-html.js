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

		editor.on("text-change", function() {
			$("#"+id+">.xui._value").val(XUI.FormHtml.getHtmlById(id));
		});
	} else {
		var index = XUI.FormHtml.instance.length;
		XUI.FormHtml.instance[index]=editor;

		editor.on("text-change", function() {
			$(el).parent().children(".xui._value").val(XUI.FormHtml.getHtmlByIndex(index));
		});
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
XUI.FormHtml.getHtmlByIndex = function (index) {
	return XUI.FormHtml.instance[index].root.innerHTML;
};

/**
 * Get html source, select editor by id
 * @param {string} id - Editor element id
 */
XUI.FormHtml.getHtmlById = function (id) {
	return XUI.FormHtml.instanceById[id].root.innerHTML;
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
