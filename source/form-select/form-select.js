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

XUI.FormSelect={};

(function(){

	var this_=this;
	var instance_=null;

	this.initSelect=function(el){
		var theme=$(el).attr("data-xui-select-theme");
		if(!theme){
			theme="default";
		}else{
			theme="default "+theme;
		};
		$(el).select2({
			minimumResultsForSearch: Infinity,
			dropdownAutoWidth: true,
			theme: theme
		}).maximizeSelect2Height().on("select2:open", function () {
			setTimeout(function(){
				instance_=$(".select2-container.select2-container--open>.select2-dropdown>.select2-results>.select2-results__options").overlayScrollbars({scrollbars:{clickScrolling:true}});
			},10);
		}).on("select2:closing",function(){
			instance_.overlayScrollbars().destroy();
			instance_=null;
		});	
	};

	this.initById=function(id){
		this.initSelect($("#"+id));
	};

	this.init=function(id){
		$(".xui.form-select").each(function() {
			this_.initSelect(this);
		});
	};

	this.load=function(event){
		window.removeEventListener("load", this_.load);
		this_.init();
	};

	window.addEventListener("load", this.load);	
	
}).apply(XUI.FormSelect);

