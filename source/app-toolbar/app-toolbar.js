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

if(!XUI.App){
	XUI.App={};
};

XUI.App.Toolbar={};

(function(){

	var this_=this;

	this.linkResponsive=function(idResponsive,idToolbar,idToolbarContent){
		XUI.Responsive.Element.linkContainer(
			idResponsive,idToolbar,idToolbarContent,
			["-important","-small","-large"]
		);
	}

	this.linkResponsiveLeftRight=function(idResponsive,idToolbar,idToolbarContentLeft,idToolbarContentRight){
		XUI.Responsive.Element.linkContainer(
			idResponsive,idToolbar,[idToolbarContentLeft,idToolbarContentRight],
			["-important","-small","-small-right","-large"]
		);
	}

}).apply(XUI.App.Toolbar);
