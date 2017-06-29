"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (ancestor, child) {

	while (child.parentNode) {
		if (child.parentNode === ancestor) {
			return true;
		}
		child = child.parentNode;
	}

	return false;
};