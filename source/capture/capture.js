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

	this.elAction = [];
		
	this.elList = [];
	this.fn = null;

	this.set=function(elList,fn){
		if(!Array.isArray(elList)) {
			elList=[elList];
		};
		this.elAction[this.elAction.length]= {
			"elList": elList,
			"fn": fn
		};
	};

	this.scan=function(event){
		var toRemove=[];
		for(var i=0;i<this_.elAction.length;++i) {
			var found=false;
			for(var k=0;k<this_.elAction[i].elList.length;++k) {
				if(this_.elAction[i].elList[k].contains(event.target)) {
					found=true;
					break;
				};
			};
			if(!found) {
				this_.elAction[i].fn(event,this_.elAction[i].elList);
				toRemove[toRemove.length]=i;
			};
		};
		if(toRemove.length){
			var newAction=[];
			for(var i=0;i<this_.elAction.length;++i){
				var found=false;
				for(var k=0;k<toRemove.length;++k){
					if(toRemove[k]==i){
						found=true;
						break;
					};
				};
				if(!found){
					newAction[newAction.length]=this_.elAction[i];
				};
			};
			this_.elAction=newAction;
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

