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

XUI.Modal={};

(function(){

	var this_=this;
	var elActive=null;
	var elInitialWidth=0;
	var elInitialWidthFirstTime=true;

	this.activate=function(elId) {
		var el=document.getElementById(elId);
		if(el){
			this_.setDezactivateEventListener(XUI.getByClassNameFirst(el,"_modal-content"));
			el.classList.toggle("-active");
			elActive=el;
			document.body.classList.add("-modal-open");
			setTimeout(function(){
				var el=XUI.getByClassNameFirst(elActive,"_modal-content");
				this_.onResize();
			},500);
		};
	};

	this.dezactivate=function(){
		if(elActive){
			elActive.classList.add("-animate-dezactivate");			
		};
	};

	this.dezactivateAnimationFinish=function(){
		if(elActive){
			if(!elActive.classList.contains("-animate-dezactivate")){
				return;
			};
			elActive.classList.remove("-active");
			elActive.classList.remove("-animate-dezactivate");

			if(!elInitialWidthFirstTime){			
				elActive.classList.remove("-scroll-x");
				var el=XUI.getByClassNameFirst(elActive,"_modal-content");
				if(el){
					el.style.removeProperty("width");
				};
			};
		};

		elActive=null;
		elInitialWidth=0;
		elInitialWidthFirstTime=true;		
		document.body.classList.remove("-modal-open");
	};

	this.setDezactivateEventListener=function(el){
		if(el.getAttribute("data-xui-modal")!="on") {
			el.setAttribute("data-xui-modal","on");
			el.addEventListener("animationend",function(){
				this_.dezactivateAnimationFinish();
			});
		};
	};

	this.onKeyUp=function(evt){
		evt = evt || window.event;
		var isEscape = false;
		if ("key" in evt) {
			isEscape = (evt.key === "Escape" || evt.key === "Esc");
		} else {
			isEscape = (evt.keyCode === 27);
		};
		if (isEscape) {
			this_.dezactivate();
		};	
	};

	this.onResize=function(){
		if(elActive){
			var el=XUI.getByClassNameFirst(elActive,"_modal-content");
			if(el){
				if(el.offsetWidth > window.innerWidth){
					if(elInitialWidthFirstTime){
						elActive.classList.add("-scroll-x");
						elInitialWidth=el.offsetWidth;
						elInitialWidthFirstTime=false;
					};
					el.style.width=window.innerWidth + "px";
				}else{
					if(!elInitialWidthFirstTime){
						if(elInitialWidth < window.innerWidth){
							elActive.classList.remove("-scroll-x");
							el.style.width=elInitialWidth + "px";
							elInitialWidthFirstTime=true;
						}else{
							el.style.width=window.innerWidth + "px";
						};
					};
				};
			};
		};
	};

	this.init=function(){
		var elList=XUI.getByClassName(document,"xui modal");
		for(var elIndex=0;elIndex<elList.length; ++elIndex){
			var el=XUI.getByClassNameFirst(elList[elIndex],"_modal-close-button");
			if(el){
				(function(elSuper,el){
					el.addEventListener("click", function(){
						this_.dezactivate();
					});
				})(elList[elIndex],el);
			};
		};
		document.addEventListener("keyup", this_.onKeyUp);
		window.addEventListener("resize", this_.onResize);
	};

	this.load=function(event){
		window.removeEventListener("load", this_.load);
		this_.init();
	};

	window.addEventListener("load", this.load);

}).apply(XUI.Modal);
