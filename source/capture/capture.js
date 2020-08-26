/*!
//
// XUI
//
// Copyright (c) 2020 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.Capture={};

(function(){

	var this_=this;

	this.elList = [];
	this.fn = null;

	this.set=function(elList,fn){
		this_.elList=elList;
		this_.fn=fn;
	};

	this.scan=function(event){
		if(this_.elList.length){
			var k;
			for(k=0;k<this_.elList.length;++k){
				if(this_.elList[k].contains(event.target)){
					return;
				};
			};
			this_.fn(event,this_.elList);
			this_.elList = [];
			this_.fn = null;
		};
	};

	this.init=function(){
		window.addEventListener("click", this_.scan);
	};

	this.load=function(event){
		window.removeEventListener("load", this_.load);
		this_.init();
	};

	window.addEventListener("load", this.load);

}).apply(XUI.Capture);

