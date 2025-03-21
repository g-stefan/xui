/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Notify = {};

XUI.Notify.space = 12;
XUI.Notify.timeout = 3000;
XUI.Notify.elements = [];
XUI.Notify.inProcess = false;

/**
 * Get Y position of element
 * @param {number} index
 * @return {number} Position on y axis
 */
XUI.Notify.getY = function(index) {
	var k;
	var retV = 0;
	var scan = 0;
	if (index > this.elements.length) {
		index = this.elements.length;
	};
	retV += this.space;
	for (k = 0; k < index; ++k) {
		retV += (this.elements[k].getBoundingClientRect()).height;
		retV += this.space;
	};
	return retV;
};

/**
 * Remove one notification from page with transition
 */
XUI.Notify.removeNotification = function() {
	var el, k;

	this.inProcess = true;
	if (!this.elements.length) {
		this.inProcess = false;
		return;
	};

	el = this.elements.shift();
	document.body.removeChild(el);

	if (this.elements.length) {
		for (k = 0; k < this.elements.length; ++k) {
			this.elements[k].style.transition = "top 0.3s ease";
			this.elements[k].style.top = this.getY(k) + "px";
		};

		setTimeout(function() {
			XUI.Notify.removeNotification();
		}, this.timeout);
		return;
	};

	this.inProcess = false;
};

/**
 * Add a new notification on page
 * @param {string} info - Info to be displayed - html
 * @param {string} [type] - type of notification
 */
XUI.Notify.newNotification = function(info, type) {
	var elNotify;
	var elNotifyBoxRow;
	var elNotifyBox;
	var elNotifyInfo;

	elNotify = document.createElement("div");	
	elNotify.style.display = "block";
	elNotify.style.position = "absolute";
	elNotify.style.top = this.getY(this.elements.length) + "px";
	elNotify.style.left = "0px";
	elNotify.style.width = "100%";
	elNotify.style.height = "auto";
	elNotify.style.zIndex = 500;

	elNotifyBoxRow = document.createElement("div");
	elNotifyBoxRow.className = "xui-box --row";
	elNotifyBox = document.createElement("div");
	elNotifyBox.className = "xui-box --x1x1";

	elNotifyInfo = document.createElement("div");
	if (!(type === undefined)) {
		type = " --" + type;
	} else {
		type = "";
	};
	elNotifyInfo.className = "xui-alert shadow-md" + type;
	elNotifyInfo.innerHTML = info;

	elNotifyBox.appendChild(elNotifyInfo);
	elNotifyBoxRow.appendChild(elNotifyBox);
	elNotify.appendChild(elNotifyBoxRow);

	this.elements.push(elNotify);

	document.body.appendChild(elNotify);

	if (!this.inProcess) {
		this.inProcess = true;
		setTimeout(function() {
			XUI.Notify.removeNotification();
		}, this.timeout);
	};
};
