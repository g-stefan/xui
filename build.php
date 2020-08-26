<?php
/*
//
// XUI
//
// Copyright (c) 2020 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

$completeCSS=array();
$completeJS=array();

function strStartsWith ($string, $startString) {
    $len = strlen($startString); 
    return (substr($string, 0, $len) === $startString); 
}

function doMake($source, $target){
	if(file_exists($source)){
		if(!file_exists($target)){
			return true;
		};
		if(filemtime($source) > filemtime($target)){
			return true;
		};
	};	
	return false;
};

function makeCopy($source, $target){
	if(doMake($source, $target)){
		copy($source, $target);
	};
};

function makeCSS($name,$mod = ""){

	$scssIn="source/".$name."/".$name.$mod.".scss";
	$cssIn="build/".$name.$mod.".css";
	$cssOut="release/css/xui-".$name.$mod.".css";
	$cssMinOut="release/css/xui-".$name.$mod.".min.css";
	$cssMinOut="release/css/xui-".$name.$mod.".min.css";

	$subChanged = false;
	$scssInSub = "source/".$name."/_".$name.$mod.".*.scss";
	foreach (glob($scssInSub) as $subFilename) {
		if(doMake($subFilename, $cssMinOut)) {
			$subChanged = true;
		};
	};

	if(doMake($scssIn, $cssMinOut) || $subChanged){
		echo "-> css ".$name.$mod."\r\n";

		system("sass --style=expanded --no-source-map ".$scssIn." ".$cssIn);
		if(strStartsWith(file_get_contents($cssIn),"/* Error:")){
			unlink($cssIn);
			return;
		};
		copy($cssIn,$cssOut);
		system("sass --style=compressed --no-source-map ".$cssIn." > ".$cssMinOut);
		return true;
	};
	return false;
};

function buildCSS($name,$mod = ""){
	global $completeCSS;
	$scssIn="source/".$name."/".$name.$mod.".scss";
	if(file_exists($scssIn)){		
		$cssMinOut="release/css/xui-".$name.$mod.".min.css";
		$completeCSS[$cssMinOut]=makeCSS($name,$mod);
	};
};

function makeJS($name,$mod = ""){

	$jsIn="source/".$name."/".$name.$mod.".js";
	$jsOut="release/js/xui-".$name.$mod.".js";
	$jsMinOut="release/js/xui-".$name.$mod.".min.js";

	if(doMake($jsIn, $jsMinOut)){
		echo "-> js ".$name.$mod."\r\n";

		copy($jsIn,$jsOut);
		system("uglifyjs -c -m -o ".$jsMinOut." --comments \"/^!/\" ".$jsIn);

		return true;
	};

	return false;
};

function buildJS($name,$mod = ""){
	global $completeJS;
	$jsIn="source/".$name."/".$name.$mod.".js";
	if(file_exists($jsIn)){		
		$jsMinOut="release/js/xui-".$name.$mod.".min.js";
		$completeJS[$jsMinOut]=makeJS($name,$mod);
	};
};

function makeHTML($name,$mod = ""){

	$htmlIn="source/".$name."/".$name.$mod.".php";
	$htmlOut="release/xui-".$name.$mod.".html";

	$subChanged = false;
	$htmlInSub = "source/".$name."/".$name.$mod."-*.php";

	foreach (glob($htmlInSub) as $subFilename) {
		if(doMake($subFilename, $htmlOut)) {
			$subChanged = true;
		};
	};

	if(doMake($htmlIn, $htmlOut) || $subChanged){
		echo "-> html ".$name.$mod."\r\n";
		system("php ".$htmlIn." > ".$htmlOut);
	};

};

function buildHTML($name,$mod = ""){
	makeHTML($name,$mod);
};

function makeComponent($name, $mod=""){
	makeCSS($name,$mod);
	makeJS($name,$mod);
	makeHTML($name,$mod);
};

function buildComponent($name, $mod=""){
	buildCSS($name,$mod);
	buildJS($name,$mod);
	buildHTML($name,$mod);
};

function buildCompleteCSS(){
	global $completeCSS;

	if(in_array (true, $completeCSS)){

		echo "-> complete css\r\n";

		copy("source/core/core.header.css","build/xui.complete.in.css");
		system("xyo-version --no-bump --version-file=xui.version.ini --file-in=build/xui.complete.in.css --file-out=build/xui.complete.css xui");
		foreach($completeCSS as $css => $isBaked){
			$content = file_get_contents($css);
			$content = str_replace("/*!\r\n","/*\r\n",$content);
			$content = str_replace("/*!\n","/*\n",$content);
			file_put_contents("build/xui.complete.css",$content,FILE_APPEND);
		};
		system("sass --style=compressed --no-source-map build/xui.complete.css > release/css/xui.complete.min.css");

		return true;
	};

	return false;
}

function buildCompleteJS(){
	global $completeJS;

	if(in_array (true, $completeJS)){

		echo "-> complete js\r\n";

		copy("source/core/core.header.js","build/xui.complete.in.js");
		system("xyo-version --no-bump --version-file=xui.version.ini --file-in=build/xui.complete.in.js --file-out=build/xui.complete.js xui");
		foreach($completeJS as $js => $isBaked){
			$content = file_get_contents($js);
			$content = str_replace("/*!\r\n","/*\r\n",$content);
			$content = str_replace("/*!\n","/*\n",$content);
			file_put_contents("build/xui.complete.js",$content,FILE_APPEND);
		};
 		system("uglifyjs -c -m -o release/js/xui.complete.min.js --comments \"/^!/\" build/xui.complete.js");

		return true;
	};

	return false;
}

// ---

makeCopy("authors.txt","release/authors.txt");
makeCopy("LICENSE","release/LICENSE");
makeCopy("README.md","release/README.md");
makeCopy("xui-version-lib.txt","release/xui-version-lib.txt");

// ---

buildComponent("core");
buildComponent("grid");
buildComponent("elevation");
buildComponent("responsive");
buildComponent("responsive","-element");
buildComponent("effect-ripple");
buildComponent("palette");
buildComponent("toggle");
buildComponent("capture");
//
buildComponent("text");
buildComponent("card");
buildComponent("button");
buildComponent("button-outline");
buildComponent("button-transparent");
buildComponent("button-raised3d");
buildComponent("button-small");
buildComponent("form-label");
buildComponent("form-text");
buildComponent("form-textarea");
buildComponent("form-text-material");
buildComponent("form-textarea-material");
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
buildComponent("line");
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
buildComponent("notify");

// ---

makeCopy("source/form-captcha/img/captcha.jpg","release/img/captcha.jpg");

// ---

buildCompleteCSS();
buildCompleteJS();

// ---

makeComponent("animated-dna");
makeComponent("dashboard-theme-2");
makeComponent("dashboard-theme-3");

// ---
