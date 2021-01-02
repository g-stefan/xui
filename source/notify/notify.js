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

XUI.Notify={};

(function(){

	var this_ = this;
	var count = 0;
	var height = 48;
	var space = 12;
	var timeout = 3000;
	var elements = [];
	var inProcess = false;

	this.removeNotification = function() {
		var el, k;
		inProcess = true;
		if(!elements.length){
			inProcess = false;
			return;
		};

		el=elements.shift();
		document.body.removeChild(el);

		if(elements.length){
			for(k=0;k<elements.length;++k) {
				elements[k].style.transition = "top 0.3s ease";
				elements[k].style.top = space + k*(height+space)+"px";
			};

			setTimeout(this_.removeNotification, timeout);
			return;
		};

		inProcess = false;
	};

	this.newNotification = function(info,type) {
		var elNotify;
                var elNotifyBoxRow;
                var elNotifyBox;
		var elNotifyInfo;

		elNotify = document.createElement("div");
		elNotify.className = "xui";
		elNotify.style.display = "block";
		elNotify.style.position = "absolute";
		elNotify.style.top = space + elements.length*(height+space)+"px";
		elNotify.style.left = "0px";
		elNotify.style.width = "100%";
		elNotify.style.height = "auto";
		elNotify.style.zIndex = 500;

		elNotifyBoxRow = document.createElement("div");
		elNotifyBoxRow.className = "xui box -row";
		elNotifyBox = document.createElement("div");
		elNotifyBox.className = "xui box -x1x1";

		elNotifyInfo = document.createElement("div");
		if(!(type === undefined)){
			type=" -"+type;
		} else {
			type="";
		};
		elNotifyInfo.className = "xui alert -elevation-8"+type;
		elNotifyInfo.innerHTML = info;

		elNotifyBox.appendChild(elNotifyInfo);
		elNotifyBoxRow.appendChild(elNotifyBox);
		elNotify.appendChild(elNotifyBoxRow);
		
		elements.push(elNotify);

		document.body.appendChild(elNotify);

		if(!inProcess){
			setTimeout(this_.removeNotification, timeout);
		};
	};

	this.init=function() {
	};

	this.load=function(event) {
		window.removeEventListener("load", this_.load);
		this_.init();
	};

	window.addEventListener("load", this.load);

}).apply(XUI.Notify);
