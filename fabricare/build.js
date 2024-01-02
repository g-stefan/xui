// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

Script.requireExtension("Console");
Script.requireExtension("Shell");
Script.requireExtension("Make");

var completeCSS = [];
var completeJS = [];
var completeHTML = [];
var completeComponents = [];
var make = new Make();

function makeCSS(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var scssIn = "source/" + name + "/" + name + mod + ".scss";
	var cssIn = "temp/" + name + mod + ".css";
	var cssOut = "output/css/xui-" + name + mod + ".css";
	var cssMinOut = "output/css/xui-" + name + mod + ".min.css";

	var scssInSub = Shell.getFileList("source/" + name + "/_" + name + mod + ".*.scss");

	make.target(cssMinOut, [].concat(scssIn).concat(scssInSub), function(cssMinOut, source) {
		Script.requireExtension("Console");
		Script.requireExtension("Shell");

		Console.writeLn("-> css " + this.name + this.mod);
		Shell.system("sass --style=expanded --no-source-map \"" + this.scssIn + "\" \"" + this.cssIn + "\"");

		var content = Shell.fileGetContents(this.cssIn);
		if (!Script.isNil(content)) {
			if (content.indexOf("/* Error:") >= 0) {
				Shell.remove(this.cssIn);
				return true;
			};
		};

		Shell.copyFile(this.cssIn, this.cssOut);
		Shell.system("sass --style=compressed --no-source-map " + this.cssIn + " > " + cssMinOut);
	}, {name : name, mod : mod, scssIn : scssIn, cssIn : cssIn, cssOut : cssOut});

	return cssMinOut;
};

function buildCSS(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var scssIn = "source/" + name + "/" + name + mod + ".scss";
	if (Shell.fileExists(scssIn)) {
		completeCSS.push(makeCSS(name, mod));
	};
};

function makeJS(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var jsIn = "source/" + name + "/" + name + mod + ".js";
	var jsOut = "output/js/xui-" + name + mod + ".js";
	var jsMinOut = "output/js/xui-" + name + mod + ".min.js";

	make.target(jsMinOut, jsIn, function(jsMinOut, source) {
		Script.requireExtension("Console");
		Script.requireExtension("Shell");

		Console.writeLn("-> js " + this.name + this.mod);
		Shell.copyFile(this.jsIn, this.jsOut);
		Shell.system("uglifyjs -c -m -o \"" + jsMinOut + "\" --comments \"/^!/\" \"" + this.jsIn + "\"");
	}, {name : name, mod : mod, jsIn : jsIn, jsOut : jsOut});

	return jsMinOut;
};

function buildJS(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var jsIn = "source/" + name + "/" + name + mod + ".js";
	if (Shell.fileExists(jsIn)) {
		completeJS.push(makeJS(name, mod));
	};
};

function makeHTML(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var htmlIn = "source/" + name + "/" + name + mod + ".php";
	var htmlOut = "output/xui-" + name + mod + ".html";

	var htmlInSub = Shell.getFileList("source/" + name + "/" + name + mod + "-*.php");

	make.target(htmlOut, [].concat(htmlIn).concat(htmlInSub), function(htmlOut, source) {
		Script.requireExtension("Console");
		Script.requireExtension("Shell");

		Console.writeLn("-> html " + this.name + this.mod);
		Shell.system("php \"" + this.htmlIn + "\" > \"" + htmlOut + "\"");
	}, {name : name, mod : mod, htmlIn : htmlIn});

	return htmlOut;
};

function buildHTML(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var htmlIn = "source/" + name + "/" + name + mod + ".php";
	if (Shell.fileExists(htmlIn)) {
		completeHTML.push(makeHTML(name, mod));
	};
};

function buildComponent(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	buildCSS(name, mod);
	buildJS(name, mod);
	buildHTML(name, mod);
};

function makeComponent(name, mod) {

	if (Script.isNil(mod)) {
		mod = "";
	};

	var scssIn = "source/" + name + "/" + name + mod + ".scss";
	if (Shell.fileExists(scssIn)) {
		completeComponents.push(makeCSS(name, mod));
	};

	var jsIn = "source/" + name + "/" + name + mod + ".js";
	if (Shell.fileExists(jsIn)) {
		completeComponents.push(makeJS(name, mod));
	};

	var htmlIn = "source/" + name + "/" + name + mod + ".php";
	if (Shell.fileExists(htmlIn)) {
		completeComponents.push(makeHTML(name, mod));
	};
};

function buildCompleteCSS() {
	make.target("output/css/xui.complete.min.css", completeCSS, function(target, source) {
		Script.requireExtension("Console");
		Script.requireExtension("Shell");

		Console.writeLn("-> complete css");

		Shell.copy("source/core/core.header.css", "temp/xui.complete.in.css");
		Shell.system("xyo-version --no-bump --version-file=version.json --file-in=temp/xui.complete.in.css --file-out=temp/xui.complete.css xui");

		var cssContent = Shell.fileGetContents("temp/xui.complete.css");
		for (var css of this.completeCSS) {
			content = Shell.fileGetContents(css);
			content = content.replace("/*!\r\n", "/*\r\n");
			content = content.replace("/*!\n", "/*\n");
			cssContent += content;
		};
		Shell.filePutContents("temp/xui.complete.css", cssContent);
		Shell.system("sass --style=compressed --no-source-map temp/xui.complete.css > output/css/xui.complete.min.css");
	}, {completeCSS : completeCSS});
};

function buildCompleteJS() {
	make.target("output/js/xui.complete.min.js", completeJS, function(target, source) {
		Script.requireExtension("Console");
		Script.requireExtension("Shell");

		Console.writeLn("-> complete js");

		Shell.copy("source/core/core.header.js", "temp/xui.complete.in.js");
		Shell.system("xyo-version --no-bump --version-file=version.json --file-in=temp/xui.complete.in.js --file-out=temp/xui.complete.js xui");

		var jsContent = Shell.fileGetContents("temp/xui.complete.js");
		for (var js of this.completeJS) {
			content = Shell.fileGetContents(js.replace(".min.js",".js"));
			content = content.replace("/*!\r\n", "/*\r\n");
			content = content.replace("/*!\n", "/*\n");
			jsContent += content;
		};
		Shell.filePutContents("temp/xui.complete.js", jsContent);
		Shell.system("uglifyjs -c -m -o output/js/xui.complete.min.js --comments \"/^!/\" temp/xui.complete.js");
	}, {completeJS : completeJS});
};

// ---

buildComponent("core");
buildComponent("script");
buildComponent("style");
buildComponent("html");
buildComponent("cookie");
buildComponent("ajax");
buildComponent("element");

// ---

buildComponent("grid");
buildComponent("elevation");
buildComponent("responsive");
buildComponent("responsive", "-element");
buildComponent("effect-ripple");
buildComponent("palette");
buildComponent("toggle");
buildComponent("capture");
buildComponent("overlayscrollbars");

// ---

buildComponent("card");
buildComponent("text");
buildComponent("button");
buildComponent("button-outline");
buildComponent("button-transparent");
buildComponent("button-small");
buildComponent("form-button");
buildComponent("form-button-outline");
buildComponent("form-button-transparent");
buildComponent("form-label");
buildComponent("form-text");
buildComponent("form-textarea");
buildComponent("form-radio");
buildComponent("form-checkbox");
buildComponent("form-checkbox-box");
buildComponent("form-checkbox-switch");
buildComponent("form-input-group");
buildComponent("button-group");
buildComponent("app-bar");
buildComponent("app-brand");
buildComponent("app-header");
buildComponent("app-user");
buildComponent("action");
buildComponent("menu");
buildComponent("menu-accordion");
buildComponent("menu-dropdown");
buildComponent("menu-mini");
buildComponent("menu-popup");
buildComponent("menu-tab");
buildComponent("dashboard");
buildComponent("dashboard-normal");
buildComponent("dashboard-mini");
buildComponent("dashboard-over");
buildComponent("alert");
buildComponent("table");
buildComponent("progress-bar");
buildComponent("box");
buildComponent("panel");
buildComponent("link");
buildComponent("list-group");
buildComponent("inner-box");
buildComponent("form-separator");
buildComponent("app-toolbar");
buildComponent("application");
buildComponent("form-file");
buildComponent("form-image");
buildComponent("form-select");
buildComponent("form-datepicker");
buildComponent("form-autocomplete");
buildComponent("form-captcha");
buildComponent("animated-loader");
buildComponent("modal");
buildComponent("component-table");
buildComponent("form-select-small");
buildComponent("form-select-multiple");
buildComponent("form-tag");
buildComponent("notify");
buildComponent("template");
buildComponent("form-html");

// ---

makeComponent("animated-dna");
makeComponent("dashboard-theme-2");
makeComponent("dashboard-theme-3");

// ---

make.target("temp/done.css.all", completeCSS, function(target, source) {
	Script.requireExtension("Console");
	Script.requireExtension("Shell");

	Console.writeLn(target);
	Shell.filePutContents(target, "done");
});

make.target("temp/done.js.all", completeJS, function(target, source) {
	Script.requireExtension("Console");
	Script.requireExtension("Shell");

	Console.writeLn(target);
	Shell.filePutContents(target, "done");
});

make.target("temp/done.html.all", completeHTML, function(target, source) {
	Script.requireExtension("Console");
	Script.requireExtension("Shell");

	Console.writeLn(target);
	Shell.filePutContents(target, "done");
});

make.target("temp/done.components.all", completeComponents, function(target, source) {
	Script.requireExtension("Console");
	Script.requireExtension("Shell");

	Console.writeLn(target);
	Shell.filePutContents(target, "done");
});

buildCompleteCSS();
buildCompleteJS();

// ---

make.build("temp/done.css.all");
make.build("temp/done.js.all");
make.build("temp/done.html.all");
make.build("temp/done.components.all");
make.build("output/css/xui.complete.min.css");
make.build("output/js/xui.complete.min.js");

// ---

Shell.copy("authors.txt","output/authors.txt");
Shell.copy("LICENSE","output/LICENSE");
Shell.copy("README.md","output/README.md");
Shell.copy("xui-version-lib.txt","output/xui-version-lib.txt");
Shell.copy("source/form-captcha/img/captcha.jpg","output/img/captcha.jpg");

// ---
