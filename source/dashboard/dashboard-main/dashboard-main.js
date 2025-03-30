/*!
//
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// Created by Grigore Stefan <g_stefan@yahoo.com>
//
// MIT License (MIT) <http://opensource.org/licenses/MIT>
//
*/

XUI.Dashboard.Main = {};

/**
 * Initialization
 */
XUI.Dashboard.Main.init = function() {	
	var elNavigationContent = document.querySelectorAll("#xui-navigation-drawer_content");
	if(elNavigationContent.length==0) {
		return;
	}
	XUI.Dashboard.Main.navigationDrawerScrollBars = XUI.OverlayScrollbars.create(elNavigationContent);

	XUI.Dashboard.notifyStateChange = function() {
		var state = this.getState();
		if (((state.mode == "normal") || (state.mode == "mini")) && (state.state == "closed")) {
			document.querySelectorAll(".xui-navigation-drawer ul.xui-menu>li").forEach(function(item) {
				if (item.classList.contains("--on")) {
					item.classList.remove("--on");
					item.classList.add("--was-on");
				};
				if (item.classList.contains("--open")) {
					item.classList.remove("--open");
				};
				if (item.classList.contains("--overlay-scrollbars-active")) {
					item.classList.remove("--overlay-scrollbars-active");					
					XUI.OverlayScrollbars.destroy(item.querySelectorAll(":scope>ul"));
				};
			});
			
			setTimeout(function() {
				XUI.OverlayScrollbars.instanceDestroy(XUI.Dashboard.Main.navigationDrawerScrollBars);
				XUI.Dashboard.Main.navigationDrawerScrollBars = [];
			}, 50);			
			return;
		};
		document.querySelectorAll(".xui-navigation-drawer ul.xui-menu>li").forEach(function(item) {
			if (item.classList.contains("--was-on")) {
				item.classList.remove("--was-on");
				item.classList.add("--on");
			};
		});
		document.querySelectorAll("#xui-navigation-drawer_content ul>li.xui-menu_submenu>ul").forEach(function(item) {
			item.style.height = "auto";
		});
		
		if(XUI.Dashboard.Main.navigationDrawerScrollBars.length == 0) {
			XUI.Dashboard.Main.navigationDrawerScrollBars = XUI.OverlayScrollbars.create(document.querySelectorAll("#xui-navigation-drawer_content"));
		};		
		XUI.OverlayScrollbars.instanceUpdate(XUI.Dashboard.Main.navigationDrawerScrollBars);		
	};
	XUI.Dashboard.notifyStateChange();
	document.querySelectorAll(".xui-navigation-drawer ul.xui-menu>li").forEach(function(item) {
		item.addEventListener("mouseenter", function() {
			var this_ = this;
			document.querySelectorAll("ul>li.xui-menu_submenu").forEach(function(item) {
				if (this_ == item) {
					return;
				};
				if (item.classList.contains("--open")) {
					item.classList.remove("--open");
				};
				if (item.classList.contains("--overlay-scrollbars-active")) {					
					item.classList.remove("--overlay-scrollbars-active");
					XUI.OverlayScrollbars.destroy(item.querySelectorAll(":scope>ul"));
				};
			});
			if (this.classList.contains("xyo-menu_submenu")) {
				this.classList.add("--open");
				XUI.Capture.set([ this ], function(e, elList) {
					elList[0].classList.remove("--open");
					if (elList[0].classList.contains("--overlay-scrollbars-active")) {						
						elList[0].classList.remove("--overlay-scrollbars-active");
						XUI.OverlayScrollbars.destroy(elList[0].querySelectorAll(":scope>ul"));
					};
				});
			};
			if (!this.classList.contains("--overlay-scrollbars-active")) {
				var el = this.getElementsByTagName("ul");
				if (el.length) {
					el[0].style.height = "auto";
					var state = XUI.Dashboard.getState();
					if (((state.mode == "normal") || (state.mode == "mini")) && (state.state == "closed")) {
						var checkHeight = function() {
							var elRect = el[0].getBoundingClientRect();
							var viewRect = document.body.getBoundingClientRect();
							var elViewHeight = elRect.top + elRect.height;

							if (elViewHeight > viewRect.height) {
								elNewHeight = viewRect.height - elRect.top - 6; // 6px margin bottom
								el[0].style.height = elNewHeight + "px";
								el[0].style.overflowY = "auto";

								if (!this_.classList.contains("--overlay-scrollbars-active")) {
									this_.classList.add("--overlay-scrollbars-active");									
									XUI.OverlayScrollbars.create(this_.querySelectorAll(":scope>ul"));									
								};								
							};
						};

						setTimeout(checkHeight, 500);
						setTimeout(checkHeight, 800);
					};
				};
			};
		});
	});
};

/**
 * On load
 */
XUI.Dashboard.Main.onLoad = function() {
	window.removeEventListener("load", XUI.Dashboard.Main.onLoad);
	XUI.Dashboard.Main.init();
};
window.addEventListener("load", XUI.Dashboard.Main.onLoad);
