/*!
// XUI
// Copyright (c) 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// MIT License (MIT) <http://opensource.org/licenses/MIT>
// SPDX-FileCopyrightText: 2017-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: MIT
*/

XUI.Toggle = {};

/**
 * Get element to toggle
 * @param {element} el - Element
 * @param {string} target - Target
 */
XUI.Toggle.getToggleTarget = function (el, target) {
	if (target) {
		if (target.indexOf("parent") == 0) {
			var ln = 1;
			var list = target.split("-");
			if (list.length > 1) {
				ln = parseInt(list[1], 10);
				if ((ln == 0) || (isNaN(ln))) {
					ln = 1;
				};
			};
			var node = el;
			for (; ln > 0; --ln) {
				node = node.parentNode;
			};
			return node;
		};
		if (target == "next-sibling") {
			return el.nextElementSibling;
		};
	};
	return el;
};

/**
 * Add events on element click
 * @param {element} el - Element
 * @param {array} elList - Array of elements to toggle class
 * @param {array} toggleClass - Array of css class to toggle
 */
XUI.Toggle.onClickToggleElementListClass = function (el, elList, toggleClass) {
	var this_ = XUI.Toggle;

	for (var k = 0; k < toggleClass.length; ++k) {
		toggleClass[k] = toggleClass[k].trim();
	};

	if (elList) {
		if (elList.length) {
			if (toggleClass.length > 1) {
				el.addEventListener("click", function (event) {
					this.classList.toggle("--active");
					var thisEl = this_.getToggleTarget(this, this.getAttribute("data-xui-toggle"));
					for (var elIndex in elList) {
						if (elList[elIndex].classList.contains(toggleClass[0])) {
							elList[elIndex].classList.remove(toggleClass[0]);
							elList[elIndex].classList.add(toggleClass[1]);
							continue;
						};
						if (elList[elIndex].classList.contains(toggleClass[1])) {
							elList[elIndex].classList.remove(toggleClass[1]);
							elList[elIndex].classList.add(toggleClass[0]);
							continue;
						};
						elList[elIndex].classList.add(toggleClass[0]);
					};
				});
				return;
			};

			el.addEventListener("click", function (event) {
				this.classList.toggle("--active");
				var thisEl = this_.getToggleTarget(this, this.getAttribute("data-xui-toggle"));
				for (var elIndex in elList) {
					elList[elIndex].classList.toggle(toggleClass[0]);
				};
			});
		};
		return;
	};
	if (toggleClass.length > 1) {
		el.addEventListener("click", function (event) {
			this.classList.toggle("--active");
			var thisEl = this_.getToggleTarget(this, this.getAttribute("data-xui-toggle"));
			if (thisEl.classList.contains(toggleClass[0])) {
				thisEl.classList.remove(toggleClass[0]);
				thisEl.classList.add(toggleClass[1]);
				return;
			};
			if (thisEl.classList.contains(toggleClass[1])) {
				thisEl.classList.remove(toggleClass[1]);
				thisEl.classList.add(toggleClass[0]);
				return;
			};
			thisEl.classList.add(toggleClass[0]);
		});
		return;
	};
	el.addEventListener("click", function (event) {
		this.classList.toggle("--active");
		var thisEl = this_.getToggleTarget(this, this.getAttribute("data-xui-toggle"));
		thisEl.classList.toggle(toggleClass[0]);
	});
};

/**
 * Initialization
 */
XUI.Toggle.init = function () {
	var elList = document.getElementsByClassName("xui-toggle");
	for (var elIndex = 0; elIndex < elList.length; ++elIndex) {
		var toggleAction = elList[elIndex].getAttribute("data-xui-toggle-action");
		var toggleActionId = elList[elIndex].getAttribute("data-xui-toggle-action-id");
		var toggleClass = elList[elIndex].getAttribute("data-xui-toggle-class");
		var toggleGroup = elList[elIndex].getAttribute("data-xui-toggle-group");
		if (toggleGroup) {
			if (!toggleAction) {
				continue;
			};
		};
		var toggleClassItems = ["--on", "--off"];
		if (toggleClass) {
			toggleClassItems = toggleClass.split(",");
		};
		if (toggleAction) {
			var groupItems = toggleAction.split(",");
			for (groupItemsIndex = 0; groupItemsIndex < groupItems.length; ++groupItemsIndex) {
				var groupList = groupItems[groupItemsIndex].trim().split(":");
				var groupName = groupList[0];
				var groupClass = groupList[1];
				var groupClassItems = toggleClassItems;

				if (groupClass) {
					groupClassItems = groupClass.trim().split("/");
				};

				var list = XUI.Element.getByClassNameAndAttributeValue(document, "xui-toggle", "data-xui-toggle-group", groupName);
				this.onClickToggleElementListClass(elList[elIndex], list, groupClassItems);
			};
			continue;
		};
		if (toggleActionId) {
			var groupItems = toggleActionId.split(",");
			for (groupItemsIndex = 0; groupItemsIndex < groupItems.length; ++groupItemsIndex) {
				var groupList = groupItems[groupItemsIndex].trim().split(":");
				var groupName = groupList[0];
				var groupClass = groupList[1];
				var groupClassItems = toggleClassItems;

				if (groupClass) {
					groupClassItems = groupClass.trim().split("/");
				};

				var list = [];
				var el = document.getElementById(groupName);
				if (el) {
					list[0] = el;
				};

				this.onClickToggleElementListClass(elList[elIndex], list, groupClassItems);
			};
			continue;
		};
		this.onClickToggleElementListClass(elList[elIndex], null, toggleClassItems);
	};
};

/**
 * On load
 */
XUI.Toggle.onLoad = function () {
	window.removeEventListener("load", XUI.Toggle.onLoad);
	XUI.Toggle.init();
};

window.addEventListener("load", XUI.Toggle.onLoad);
