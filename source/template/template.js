/*
//
// Copyright (c) 2020 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.Template={};

(function(){

	var this_=this;
	var submenuScrollBars_=null;

	this.init=function(){
		$(".xui.-overlay-scrollbars").overlayScrollbars({scrollbars:{clickScrolling:true}});
		$("#navigation-drawer-content").overlayScrollbars({scrollbars:{clickScrolling:true},clipAlways:false});
		XUI.Dashboard.notifyStateChange=function() {
			var state=this.getState();
			var scrollBars=$("#navigation-drawer-content").overlayScrollbars();
			if(scrollBars){
				if(((state.mode=="normal")||(state.mode=="mini"))&&(state.state=="closed")){
					$(".xui.navigation-drawer ul.xui.menu>li").each(function(){
						if(this.classList.contains("-on")){
							this.classList.remove("-on");
							this.classList.add("-was-on");
						};
						if(this.classList.contains("-open")){
							this.classList.remove("-open");
						};
						if(this.classList.contains("-overlay-scrollbars-active")){
							this.classList.remove("-overlay-scrollbars-active");
							$(this).children("ul").overlayScrollbars().destroy();
						};
					});
					setTimeout(function(){
						scrollBars.sleep();
					},50);
				}else{
					$(".xui.navigation-drawer ul.xui.menu>li").each(function(){
						if(this.classList.contains("-was-on")){
							this.classList.remove("-was-on");
							this.classList.add("-on");
						};
					});
					$("#navigation-drawer-content ul>li.xui._submenu>ul").each(function(){
						this.style.height = "auto";
					});
					scrollBars.update(true);
				};
			};
		};
		XUI.Dashboard.notifyStateChange();
		$(".xui.navigation-drawer ul.xui.menu>li").mouseenter(function() {
			var this_=this;
			$("ul>li.xui._submenu").each(function(){
				if(this_==this) {
					return;
				};
				if(this.classList.contains("-open")){
					this.classList.remove("-open");
				};
				if(this.classList.contains("-overlay-scrollbars-active")){
					this.classList.remove("-overlay-scrollbars-active");
					$(this).children("ul").overlayScrollbars().destroy();
				};
			});
			if(this.classList.contains("_submenu")){
				this.classList.add("-open");
				XUI.Capture.set([this],function(e,elList){
					elList[0].classList.remove("-open");
					if(elList[0].classList.contains("-overlay-scrollbars-active")){
						elList[0].classList.remove("-overlay-scrollbars-active");
						$(elList[0]).children("ul").overlayScrollbars().destroy();
					};
				});
			};
			if(!this.classList.contains("-overlay-scrollbars-active")) {
				var el=this.getElementsByTagName("ul");
				if(el.length){
					el[0].style.height = "auto";
					var state=XUI.Dashboard.getState();
					if(((state.mode=="normal")||(state.mode=="mini"))&&(state.state=="closed")){
						var checkHeight=function() {
							var elRect=el[0].getBoundingClientRect();
							var viewRect=document.body.getBoundingClientRect();
							var elViewHeight=elRect.top+elRect.height;
						
							if(elViewHeight>viewRect.height) {
								elNewHeight=viewRect.height-elRect.top-6; // 6px margin bottom							
								if(!this_.classList.contains("-overlay-scrollbars-active")) {
									this_.classList.add("-overlay-scrollbars-active");
									$(this_).children("ul").overlayScrollbars({scrollbars:{clickScrolling:true},clipAlways:false});
								};
								el[0].style.height = elNewHeight+"px";
								el[0].style.overflowY = "auto";
							};
						};
					
						setTimeout(checkHeight,500);
						setTimeout(checkHeight,800);
					};
				};
			};
		});
	};

	this.load=function(event){
		window.removeEventListener("load", this_.load);
		this_.init();
	};

	window.addEventListener("load", this.load);

}).apply(XUI.Template);
