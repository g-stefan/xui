// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

Script.requireExtension("Console");
Script.requireExtension("Shell");
Script.requireExtension("Make");

function BuildProcessor() {

	this.path = "process";
	this.name = "process";
	this.completeCSS = [];
	this.completeJS = [];
	this.completeHTML = [];
	this.completeComponentsCSS = [];
	this.completeComponentsJS = [];
	this.completeComponents = [];
	this.make = new Make();

	this.makeCSS = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var scssIn = "source/" + this.path + "/" + name + "/" + name + mod + ".scss";
		var cssIn = "temp/" + name + mod + ".css";
		var cssOut = "temp/xui-" + name + mod + ".css";
		var cssMinOut = "temp/xui-" + name + mod + ".min.css";

		var scssInSub = Shell.getFileList("source/" + this.path + "/" + name + "/_" + name + mod + ".*.scss");

		this.make.target(cssMinOut, [].concat(scssIn).concat(scssInSub), function (cssMinOut, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn("-> css " + this.name + this.mod);
			Shell.system("sass --style=expanded --no-source-map \"" + this.scssIn + "\" \"" + this.cssIn + "\"");

			var contentVersion = Shell.fileGetContents("temp/xui.core.header.css");

			var content = Shell.fileGetContents(this.cssIn);
			if (!Script.isNil(content)) {
				if (content.indexOf("/* Error:") >= 0) {
					Shell.remove(this.cssIn);
					return true;
				};
			} else {
				content = "";
			}

			content = content.replace("/*!\r\n", "/*\r\n");
			content = content.replace("/*!\n", "/*\n");

			Shell.filePutContents(this.cssIn, contentVersion + content);

			Shell.copyFile(this.cssIn, this.cssOut);
			Shell.system("sass --style=compressed --no-source-map " + this.cssIn + " > " + cssMinOut);
		}, { name: name, mod: mod, scssIn: scssIn, cssIn: cssIn, cssOut: cssOut });

		return cssMinOut;
	};

	this.buildCSS = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var scssIn = "source/" + this.path + "/" + name + "/" + name + mod + ".scss";
		if (Shell.fileExists(scssIn)) {
			this.completeCSS.push(this.makeCSS(name, mod));
		};
	};

	this.makeJS = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var jsIn = "source/" + this.path + "/" + name + "/" + name + mod + ".js";
		var jsOut = "temp/xui-" + name + mod + ".js";
		var jsMinOut = "temp/xui-" + name + mod + ".min.js";

		this.make.target(jsMinOut, jsIn, function (jsMinOut, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn("-> js " + this.name + this.mod);
			Shell.copyFile(this.jsIn, this.jsOut);
			Shell.system("uglifyjs -c -m -o \"" + jsMinOut + "\" --comments \"/^!/\" \"" + this.jsIn + "\"");
		}, { name: name, mod: mod, jsIn: jsIn, jsOut: jsOut });

		return jsMinOut;
	};

	this.buildJS = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var jsIn = "source/" + this.path + "/" + name + "/" + name + mod + ".js";
		if (Shell.fileExists(jsIn)) {
			this.completeJS.push(this.makeJS(name, mod));
		};
	};

	this.makeHTML = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var htmlIn = "source/" + this.path + "/" + name + "/" + name + mod + ".php";
		var htmlOut = "output/" + this.path + "/xui-" + name + mod + ".html";

		var htmlInSub = Shell.getFileList("source/" + this.path + "/" + name + "/" + name + mod + "-*.php");

		this.make.target(htmlOut, [].concat(htmlIn).concat(htmlInSub), function (htmlOut, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn("-> html " + this.name + this.mod);
			Shell.system("php \"" + this.htmlIn + "\" > \"" + htmlOut + "\"");
		}, { name: name, mod: mod, htmlIn: htmlIn });

		return htmlOut;
	};

	this.buildHTML = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var htmlIn = "source/" + this.path + "/" + name + "/" + name + mod + ".php";
		if (Shell.fileExists(htmlIn)) {
			this.completeHTML.push(this.makeHTML(name, mod));
		};
	};

	this.buildComponent = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		this.buildCSS(name, mod);
		this.buildJS(name, mod);
		this.buildHTML(name, mod);
	};

	this.makeComponent = function (name, mod) {

		if (Script.isNil(mod)) {
			mod = "";
		};

		var scssIn = "source/" + this.path + "/" + name + "/" + name + mod + ".scss";
		if (Shell.fileExists(scssIn)) {
			var _css = this.makeCSS(name, mod);
			this.completeComponents.push(_css);
			this.completeComponentsCSS.push(_css);
		};

		var jsIn = "source/" + this.path + "/" + name + "/" + name + mod + ".js";
		if (Shell.fileExists(jsIn)) {
			var _js = this.makeJS(name, mod);
			this.completeComponents.push(_js);
			this.completeComponentsJS.push(_js);
		};

		var htmlIn = "source/" + this.path + "/" + name + "/" + name + mod + ".php";
		if (Shell.fileExists(htmlIn)) {
			this.completeComponents.push(this.makeHTML(name, mod));
		};
	};

	this.buildCompleteCSS = function () {
		if (this.completeCSS.length == 0) {
			return;
		};
		this.make.target("temp/xui." + this.name + ".min.css", completeCSS, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn("-> " + this.name + " css");

			var cssContent = Shell.fileGetContents("temp/xui.core.header.css");
			for (var css of this.completeCSS) {
				content = Shell.fileGetContents(css.replace(".min.css", ".css"));
				content = content.replace("/*!\r\n", "/*\r\n");
				content = content.replace("/*!\n", "/*\n");
				cssContent += content;
			};
			Shell.filePutContents("temp/xui." + this.name + ".css", cssContent);
			Shell.system("sass --style=compressed --no-source-map temp/xui." + this.name + ".css > temp/xui." + this.name + ".min.css");
		}, { completeCSS: this.completeCSS, name: this.name });
	};

	this.buildCompleteJS = function () {
		if (this.completeJS.length == 0) {
			return;
		};
		this.make.target("output/release/xui." + this.name + ".min.js", completeJS, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn("-> " + this.name + " js");

			var jsContent = Shell.fileGetContents("temp/xui.core.header.js");
			for (var js of this.completeJS) {
				content = Shell.fileGetContents(js.replace(".min.js", ".js"));
				content = content.replace("/*!\r\n", "/*\r\n");
				content = content.replace("/*!\n", "/*\n");
				jsContent += content;
			};
			Shell.filePutContents("temp/xui." + this.name + ".js", jsContent);
			Shell.system("uglifyjs -c -m -o output/release/xui." + this.name + ".min.js --comments \"/^!/\" temp/xui." + this.name + ".js");
		}, { completeJS: this.completeJS, name: this.name });
	};

	this.processExecute = function (info) {
		Shell.mkdirRecursivelyIfNotExists("output/" + this.path);
		Shell.mkdirRecursivelyIfNotExists("output/release");
		if (Script.isArray(info.build)) {
			for (var component of info.build) {
				if (Script.isArray(component)) {
					this.buildComponent(component[0], component[1]);
					continue;
				};
				this.buildComponent(component);
			};
		};
		if (Script.isArray(info.make)) {
			for (var component of info.make) {
				this.makeComponent(component);
			};
		};

		this.make.target("temp/" + this.name + ".done.css.all", this.completeCSS, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn(target);
			Shell.filePutContents(target, "done");
		});

		this.make.target("temp/" + this.name + ".done.js.all", this.completeJS, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn(target);
			Shell.filePutContents(target, "done");
		});

		this.make.target("temp/" + this.name + ".done.html.all", this.completeHTML, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn(target);
			Shell.filePutContents(target, "done");
		});

		this.make.target("temp/" + this.name + ".done.components.all", this.completeComponents, function (target, source) {
			Script.requireExtension("Console");
			Script.requireExtension("Shell");

			Console.writeLn(target);
			Shell.filePutContents(target, "done");
		});

		this.buildCompleteCSS();
		this.buildCompleteJS();

		// ---

		this.make.build("temp/" + this.name + ".done.css.all");
		this.make.build("temp/" + this.name + ".done.js.all");
		this.make.build("temp/" + this.name + ".done.html.all");
		this.make.build("temp/" + this.name + ".done.components.all");
		if (this.completeCSS.length > 0) {
			this.make.build("temp/xui." + this.name + ".min.css");
		};
		if (this.completeJS.length > 0) {
			this.make.build("output/release/xui." + this.name + ".min.js");
		};

		for (var _css of this.completeComponentsCSS) {
			var _file = _css.replace("output/" + this.name + "/css", "output/release");
			Shell.copyFile(_css, _file);
		};

		for (var _js of this.completeComponentsJS) {
			var _file = _js.replace("output/" + this.name + "/css", "output/release");
			Shell.copyFile(_js, _file);
		};
	};

	this.process = function (name, info) {
		this.path = name;
		this.name = name;
		this.processExecute(info);
	};

	this.processX = function (path, name, info) {
		this.path = path;
		this.name = name;
		this.processExecute(info);
	};
	
};

function CompleteProcessor() {

	this.name = "complete";
	this.nameCSS = this.name;
	this.nameJS = this.name;
	this.completeList = [];	

	this.process = function (name, info) {
		var processor = new BuildProcessor();
		processor.process(name, info);
		this.completeList[this.completeList.length] = name;
	};

	this.processX = function (path, name, info) {
		var processor = new BuildProcessor();
		processor.processX(path, name, info);
		this.completeList[this.completeList.length] = name;
	};

	this.processCompleteCSS = function () {
		Console.writeLn("-> complete css");

		var cssContent = Shell.fileGetContents("temp/xui.core.header.css");
		for (var index in this.completeList) {
			var cssFile = "temp/xui." + this.completeList[index] + ".css";
			if (Shell.fileExists(cssFile)) {
				content = Shell.fileGetContents(cssFile);
				content = content.replace("/*!\r\n", "/*\r\n");
				content = content.replace("/*!\n", "/*\n");
				cssContent += content;
			};
		};

		Shell.filePutContents("temp/xui." + this.name + ".css", cssContent);
		Shell.system("sass --style=compressed --no-source-map temp/xui." + this.name + ".css > temp/xui." + this.nameCSS + ".min.css");
	};

	this.processCompleteJS = function () {
		Console.writeLn("-> complete js");

		var jsContent = Shell.fileGetContents("temp/xui.core.header.js");
		for (var index in this.completeList) {
			var jsFile = "output/release/xui." + this.completeList[index] + ".min.js";			
			if (Shell.fileExists(jsFile)) {
				content = Shell.fileGetContents(jsFile);
				content = content.replace("/*!\r\n", "/*\r\n");
				content = content.replace("/*!\n", "/*\n");
				jsContent += content;
			};
		};

		Shell.filePutContents("temp/xui." + this.name + ".js", jsContent);
		Shell.system("uglifyjs -c -m -o output/release/xui." + this.nameJS + ".min.js --comments \"/^!/\" temp/xui." + this.name + ".js");
	};

	this.processComplete = function () {
		Console.writeLn("complete [css,js] " + this.name);
		this.processCompleteCSS();
		this.processCompleteJS();
	};	

};

function vendorCSSLayer(name, layer) {
	Console.writeLn("vendor css layer: " + name + " [" + layer + "]");
	filename = "vendor/" + name + ".css";
	content = "@layer " + layer + " {\r\n";
	content += Shell.fileGetContents(filename);
	content += "}\r\n";
	Shell.filePutContents("output/vendor/" + name + ".css", content);
};

// ---

Shell.copy("source/core/core/core.header.css", "temp/xui.core.header.in.css");
Shell.system("xyo-version --no-bump --version-file=version.json --file-in=temp/xui.core.header.in.css --file-out=temp/xui.core.header.css xui");

// ---

Shell.copy("source/core/core/core.header.js", "temp/xui.core.header.in.js");
Shell.system("xyo-version --no-bump --version-file=version.json --file-in=temp/xui.core.header.in.js --file-out=temp/xui.core.header.js xui");

// --- 

processor = new CompleteProcessor();
processor.name = "complete";
processor.nameCSS = processor.name;
processor.nameJS = "bundle";

processor.process("core", {
	build: [
		"core",
		"script",
		"style",
		"html",
		"cookie",
		"ajax",
		"element",
		"toggle",
		"responsive",
		["responsive", "-element"],
		"capture"
	]
});

// ---

processor.process("design", {
	build: [
		"overlayscrollbars",
		"page",
		"colors",
		"icons",
		"effect-ripple",
		"link",
		"box",
		"inner-box",
		"list-group",
		"table",
		"text",
		"button",
		"button-outline",
		"button-transparent",
		"button-small",
		"button-group",
		"panel",
		"alert",
		"progress-bar"
	]
});

// ---

processor.process("form", {
	build: [
		"form-button",
		"form-button-outline",
		"form-button-transparent",
		"form-label",
		"form-text",
		"form-textarea",
		"form-radio",
		"form-checkbox",
		"form-checkbox-box",
		"form-checkbox-switch",
		"form-input-group",
		"form-file",
		"form-image",
		"form-select",
		"form-select-small",
		"form-select-multiple",
		"form-datepicker",
		"form-autocomplete",
		"form-captcha",
		"form-tag",
		"form-html",
		"form-separator"
	]
});

// ---

processor.process("menu", {
	build: [
		"menu-item",
		"menu",
		"menu-accordion",
		"menu-dropdown",
		"menu-mini",
		"menu-popup",
		"menu-tab"
	]
});

// ---

processor.process("application", {
	build: [
		"application-user",
		"application-brand",
		"application-bar",
		"application-header",
		"application-toolbar",
		"application-main",
		"component-table"
	]
});

// ---

processor.process("dashboard", {
	build: [
		"dashboard",
		"dashboard-mini",
		"dashboard-normal",
		"dashboard-over",
		"dashboard-main"		
	]
});

// ---

processor.process("animated", {
	build: [
		"animated-loader",
		"animated-dna"
	]
});

// ---

processor.process("interactive", {
	build: [
		"notify",
		"modal"
	]
});

// ---

processor.processComplete();

// ---

processor = new CompleteProcessor();
processor.name = "dashboard-theme-2";
processor.nameCSS = processor.name;
processor.nameJS = processor.name;

processor.processX("dashboard", "dashboard-theme-2.input", {
	build: [
		"dashboard-theme-2"		
	]
});

processor.processComplete();

// ---

// ---

processor = new CompleteProcessor();
processor.name = "dashboard-theme-3";
processor.nameCSS = processor.name;
processor.nameJS = processor.name;

processor.processX("dashboard", "dashboard-theme-3.input", {
	build: [
		"dashboard-theme-3"
	]
});

processor.processComplete();

// ---

vendorCSSLayer("roboto-regular", "base");
vendorCSSLayer("lucide-icons.min", "base");
vendorCSSLayer("overlayscrollbars.min", "base");
vendorCSSLayer("select2.min", "base");
vendorCSSLayer("air-datepicker", "base");
vendorCSSLayer("jquery.autocompleter", "base");
vendorCSSLayer("jquery.tag-editor", "base");
vendorCSSLayer("quill.core", "base");
vendorCSSLayer("quill.snow", "base");
vendorCSSLayer("quill.bubble", "base");

// ---

Shell.copyFile("source/form/form-captcha/img/captcha.jpg", "output/form/img/captcha.jpg");
Shell.copy("LICENSE", "output/LICENSE");
Shell.copy("README.md", "output/README.md");
Shell.copy("version.vendor.txt", "output/version.vendor.txt");

