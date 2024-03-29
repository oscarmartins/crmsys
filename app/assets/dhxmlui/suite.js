/*
@license

dhtmlxSuite v.6.1.2 GPL

This software is covered by GPL license.
To use it in non-GPL project, you need obtain Commercial or Enterprise license
Please contact sales@dhtmlx.com. Usage without proper license is prohibited.
(c) Dinamenta, UAB.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom = __webpack_require__(99);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return exports.el("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                }
            }
        });
    }
    return exports.el("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            }
        }
    });
}
exports.resizer = resizer;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var counter = (new Date()).valueOf();
function uid() {
    return "u" + (counter++);
}
exports.uid = uid;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (deep && typeof tobj === "object" && !(tobj instanceof Date) && !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || key[0] !== "$") {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isEqualString(from, to) {
    if (from.length > to.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        if (from[i].toLowerCase() !== to[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
exports.isEqualString = isEqualString;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb(html_1.locate(e, "dhx_widget_id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;
function isNumeric(val) {
    return !isNaN(val - parseFloat(val));
}
exports.isNumeric = isNumeric;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return res.indexOf(false) < 0;
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(86);
function toNode(node) {
    if (typeof node === "string") {
        node = (document.getElementById(node) || document.querySelector(node));
    }
    return node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        var node = ev.target;
        while (node) {
            var cssstring = node.getAttribute ? (node.getAttribute("class") || "") : "";
            if (cssstring.length) {
                var css = cssstring.split(" ");
                for (var j = 0; j < keys.length; j++) {
                    if (css.indexOf(keys[j]) > -1) {
                        return hash[keys[j]](ev, data);
                    }
                }
            }
            node = node.parentNode;
        }
        return true;
    };
}
exports.eventHandler = eventHandler;
function locate(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNode(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}
exports.isIE = isIE;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset
    };
}
exports.getRealPosition = getRealPosition;
var Position;
(function (Position) {
    Position["left"] = "left";
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["top"] = "top";
})(Position = exports.Position || (exports.Position = {}));
function calculatePosition(pos, config) {
    var _a = config.mode === Position.bottom || config.mode === Position.top
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute"
    };
}
exports.calculatePosition = calculatePosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === Position.bottom) {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            return placeRightOrLeft(pos, __assign({}, config, { mode: Position.right, auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === Position.right) {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign({}, config, { mode: Position.bottom, auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, rightBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(3);
var View = /** @class */ (function () {
    function View(_container, config) {
        this._uid = core_1.uid();
        this.config = config || {};
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = html_1.toNode(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && ( // was mounted
        this._view.node || // already rendered node
            this._container)) { // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); }
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var defaultColors = [
    "#394E79",
    "#5E83BA",
    "#C2D2E9",
    "#647B37",
    "#98A468",
    "#F0D0A9",
    "#EEB98E",
    "#9A8BA5",
    "#E3C5D5"
];
function getDefaultColor(index) {
    if (index === void 0) { index = 0; }
    return defaultColors[index];
}
exports.getDefaultColor = getDefaultColor;
function locator(value) {
    if (!value) {
        return function () { return ""; };
    }
    if (typeof value === "string") {
        return function (obj) { return obj[value]; };
    }
    else {
        return value;
    }
}
exports.locator = locator;
function log10(x) {
    return Math.log(x) / Math.LN10;
}
exports.log10 = log10;
exports.getTextWidth = anyArgsMemo(function (text, font) {
    if (font === void 0) { font = ""; }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (font) {
        ctx.font = font;
    }
    return ctx.measureText(text).width;
});
function anyArgsMemo(fn) {
    var cached = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mem = cached;
        for (var i = 0; i < args.length - 1; i++) {
            mem[args[i]] = mem[args[i]] || {};
            mem = mem[args[i]];
        }
        var last = args.length - 1;
        if (mem[last]) {
            return mem[last];
        }
        return mem[last] = fn.apply(void 0, args);
    };
}
function memo(fn) {
    var cached = {};
    return function (arg) {
        if (cached[arg]) {
            return cached[arg];
        }
        return cached[arg] = fn(arg);
    };
}
function getRgbaFromColor(color) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 2, 2);
    var rgba = ctx.getImageData(1, 1, 1, 1).data;
    return [rgba[0], rgba[1], rgba[2]];
}
var memoizedColorFromRgba = memo(getRgbaFromColor);
function getColorShade(color, light) {
    var _a = memoizedColorFromRgba(color).map(function (value) { return Math.floor(value * light + 255 * (1 - light)); }), r = _a[0], g = _a[1], b = _a[2];
    return "rgb(" + r + "," + g + "," + b + ")";
}
exports.getColorShade = getColorShade;
exports.getFontStyle = memo(function (className) {
    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.setAttribute("class", "dhx_chart");
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", className);
    chart.setAttribute("visibility", "hidden");
    text.textContent = "test";
    chart.appendChild(text);
    document.body.appendChild(chart);
    var style = getComputedStyle(text);
    var font = style.fontSize + " " + style.fontFamily;
    document.body.removeChild(chart);
    return font;
});
function linearGradient(grad, id) {
    var stops = grad.stops;
    var colors = stops.map(function (item) { return dom_1.sv("stop", { "offset": item.offset * 100 + "%", "stop-color": item.color, "stop-opacity": item.opacity || 1 }); });
    var gradient = dom_1.sv("linearGradient", {
        id: id,
        gradientTransform: "rotate(90)"
    }, colors);
    return gradient;
}
exports.linearGradient = linearGradient;
function getRadialGradient(opts, stops, id) {
    var colors = stops.map(function (item) { return dom_1.sv("stop", { "offset": item.offset, "stop-color": item.color, "stop-opacity": item.opacity || 1 }); });
    var gradient = dom_1.sv("radialGradient", __assign({ id: id, cx: 0, cy: 0, gradientUnits: "userSpaceOnUse" }, opts), colors);
    return gradient;
}
exports.getRadialGradient = getRadialGradient;
function euclideanDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
exports.euclideanDistance = euclideanDistance;
function verticalCenteredText(text) {
    return dom_1.sv("tspan", {
        dy: "0.5ex"
    }, text);
}
exports.verticalCenteredText = verticalCenteredText;
function verticalTopText(text) {
    return dom_1.sv("tspan", {
        dy: "-0.5ex"
    }, text);
}
exports.verticalTopText = verticalTopText;
function verticalBottomText(text) {
    return dom_1.sv("tspan", {
        dy: "1.5ex"
    }, text);
}
exports.verticalBottomText = verticalBottomText;
function calcPointRef(pointId, serieId) {
    return pointId + "_" + serieId;
}
exports.calcPointRef = calcPointRef;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChartEvents;
(function (ChartEvents) {
    ChartEvents["toggleSeries"] = "toggleseries";
    ChartEvents["chartMouseMove"] = "chartMouseMove";
    ChartEvents["chartMouseLeave"] = "chartMouseLeave";
    ChartEvents["resize"] = "resize";
})(ChartEvents = exports.ChartEvents || (exports.ChartEvents = {}));
var ScaleType;
(function (ScaleType) {
    ScaleType["left"] = "left";
    ScaleType["right"] = "right";
    ScaleType["top"] = "top";
    ScaleType["bottom"] = "bottom";
    ScaleType["radial"] = "radial";
})(ScaleType = exports.ScaleType || (exports.ScaleType = {}));
var ChartType;
(function (ChartType) {
    ChartType["bar"] = "bar";
    ChartType["line"] = "line";
    ChartType["spline"] = "spline";
    ChartType["scatter"] = "scatter";
    ChartType["area"] = "area";
    ChartType["donut"] = "donut";
    ChartType["pie"] = "pie";
    ChartType["pie3D"] = "pie3D";
    ChartType["radar"] = "radar";
    ChartType["xBar"] = "xbar";
    ChartType["splineArea"] = "splineArea";
})(ChartType = exports.ChartType || (exports.ChartType = {}));
var Shape;
(function (Shape) {
    Shape["rect"] = "rect";
    Shape["circle"] = "circle";
})(Shape = exports.Shape || (exports.Shape = {}));
var HorizontalPosition;
(function (HorizontalPosition) {
    HorizontalPosition["left"] = "left";
    HorizontalPosition["center"] = "center";
    HorizontalPosition["right"] = "right";
})(HorizontalPosition = exports.HorizontalPosition || (exports.HorizontalPosition = {}));
var VerticalPosition;
(function (VerticalPosition) {
    VerticalPosition["top"] = "top";
    VerticalPosition["middle"] = "middle";
    VerticalPosition["bottom"] = "bottom";
})(VerticalPosition = exports.VerticalPosition || (exports.VerticalPosition = {}));
var PointType;
(function (PointType) {
    PointType["circle"] = "circle";
    PointType["rect"] = "rect";
    PointType["triangle"] = "triangle";
    PointType["rhombus"] = "rhombus";
    PointType["simpleRect"] = "simpleRect";
    PointType["simpleCircle"] = "simpleCircle";
    PointType["empty"] = "empty";
})(PointType = exports.PointType || (exports.PointType = {}));
var TooltipType;
(function (TooltipType) {
    TooltipType["simple"] = "simple";
    TooltipType["right"] = "right";
    TooltipType["left"] = "left";
    TooltipType["top"] = "top";
    TooltipType["bot"] = "bot";
})(TooltipType = exports.TooltipType || (exports.TooltipType = {}));
var NoScaleSubType;
(function (NoScaleSubType) {
    NoScaleSubType["basic"] = "basic";
    NoScaleSubType["percentOnly"] = "percentOnly";
    NoScaleSubType["valueOnly"] = "valueOnly";
})(NoScaleSubType = exports.NoScaleSubType || (exports.NoScaleSubType = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));
__export(__webpack_require__(56));
__export(__webpack_require__(94));
__export(__webpack_require__(95));
__export(__webpack_require__(25));
__export(__webpack_require__(18));
__export(__webpack_require__(59));
__export(__webpack_require__(58));
__export(__webpack_require__(97));
__export(__webpack_require__(57));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormItemType;
(function (FormItemType) {
    FormItemType["block"] = "block";
    FormItemType["input"] = "input";
    FormItemType["button"] = "button";
    FormItemType["combo"] = "combo";
    FormItemType["slider"] = "slider";
    FormItemType["radioButton"] = "radioButton";
    FormItemType["radioGroup"] = "radioGroup";
    FormItemType["checkbox"] = "checkbox";
    FormItemType["select"] = "select";
    FormItemType["simpleVault"] = "simpleVault";
    FormItemType["textarea"] = "textarea";
    FormItemType["timepicker"] = "timepicker";
    FormItemType["datepicker"] = "datepicker";
    FormItemType["colorpicker"] = "colorpicker";
    FormItemType["text"] = "text";
})(FormItemType = exports.FormItemType || (exports.FormItemType = {}));
var FormEvents;
(function (FormEvents) {
    FormEvents["change"] = "change";
    FormEvents["buttonClick"] = "buttonclick";
    FormEvents["validationFail"] = "validationfail";
    FormEvents["beforeSend"] = "beforesend";
    FormEvents["afterSend"] = "aftersend";
})(FormEvents = exports.FormEvents || (exports.FormEvents = {}));
var Validation;
(function (Validation) {
    Validation["empty"] = "";
    Validation["validEmail"] = "email";
    Validation["validInteger"] = "integer";
    Validation["validNumeric"] = "numeric";
    Validation["validAplhaNumeric"] = "alphanumeric";
    Validation["validIPv4"] = "IPv4";
})(Validation = exports.Validation || (exports.Validation = {}));
var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus[ValidationStatus["pre"] = 0] = "pre";
    ValidationStatus[ValidationStatus["error"] = 1] = "error";
    ValidationStatus[ValidationStatus["success"] = 2] = "success";
})(ValidationStatus = exports.ValidationStatus || (exports.ValidationStatus = {}));
var ClearMethod;
(function (ClearMethod) {
    ClearMethod["value"] = "value";
    ClearMethod["validation"] = "validation";
})(ClearMethod = exports.ClearMethod || (exports.ClearMethod = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var types_1 = __webpack_require__(8);
function getFormItemCss(item, validate) {
    var _a;
    var labelInline = item.labelInline, required = item.required, disabled = item.disabled, hiddenLabel = item.hiddenLabel, css = item.css, $validationStatus = item.$validationStatus;
    var cssStatus = (_a = {},
        _a[types_1.ValidationStatus.pre] = "",
        _a[types_1.ValidationStatus.error] = " dhx_form-group--state_error",
        _a[types_1.ValidationStatus.success] = " dhx_form-group--state_success",
        _a)[$validationStatus] || "";
    var labelPositionCss = labelInline ? " dhx_form-group--inline" : "";
    var requiredCss = required ? " dhx_form-group--required" : "";
    var disabledCss = disabled ? " dhx_form-group--disabled" : "";
    var labelSrCss = hiddenLabel ? " dhx_form-group--label_sr" : "";
    if (validate) {
        return (css || "" +
            labelPositionCss +
            cssStatus +
            requiredCss +
            disabledCss +
            labelSrCss);
    }
    return (css || "" +
        labelPositionCss +
        disabledCss +
        labelSrCss);
}
exports.getFormItemCss = getFormItemCss;
var validators = (_a = {},
    _a[types_1.Validation.validAplhaNumeric] = /^[a-zA-Z0-9_]+$/,
    _a[types_1.Validation.validEmail] = /^.+@.+\..+$/,
    _a[types_1.Validation.validInteger] = /^\d+$/,
    _a[types_1.Validation.validIPv4] = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/,
    _a[types_1.Validation.validNumeric] = /^\d+(\.\d+)?$/,
    _a);
function getValidationMessage(item) {
    var _a;
    var validationMessage = (_a = {
            undefined: item.preMessage
        },
        _a[types_1.ValidationStatus.pre] = item.preMessage,
        _a[types_1.ValidationStatus.error] = item.errorMessage,
        _a[types_1.ValidationStatus.success] = item.successMessage,
        _a)[item.$validationStatus] || "";
    return validationMessage;
}
exports.getValidationMessage = getValidationMessage;
function validateTemplate(template, str) {
    return validators[template] ? validators[template].test(str) : true;
}
exports.validateTemplate = validateTemplate;
function isBlock(config) {
    return Boolean(config.rows) || Boolean(config.cols);
}
exports.isBlock = isBlock;
function validateInput(value, validation) {
    var isValid = true;
    if (typeof validation === "function") {
        isValid = validation(value);
    }
    else {
        var regExp = validators[validation];
        if (regExp) {
            isValid = regExp.test(value);
        }
    }
    return isValid;
}
exports.validateInput = validateInput;
function isTimeFormat(value, timeFormat) {
    if (timeFormat === 12) {
        return /(^0?([1-9][0-2]?):[0-5][0-9]?([AP][M]?)$)/i.test(value);
    }
    return /(^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$)/i.test(value);
}
exports.isTimeFormat = isTimeFormat;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(128));
__export(__webpack_require__(63));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EditorType;
(function (EditorType) {
    EditorType["input"] = "input";
    EditorType["select"] = "select";
    EditorType["datepicker"] = "datePicker";
})(EditorType = exports.EditorType || (exports.EditorType = {}));
var GridEvents;
(function (GridEvents) {
    GridEvents["scroll"] = "scroll";
    GridEvents["sort"] = "sort";
    GridEvents["expand"] = "expand";
    GridEvents["headerInput"] = "headerInput";
    GridEvents["cellClick"] = "cellClick";
    GridEvents["cellRightClick"] = "cellRightClick";
    GridEvents["cellMouseOver"] = "cellMouseOver";
    GridEvents["cellMouseDown"] = "cellMouseDown";
    GridEvents["cellDblClick"] = "cellDblClick";
    GridEvents["headerCellClick"] = "headerCellClick";
    GridEvents["footerCellClick"] = "footerCellClick";
    GridEvents["headerCellMouseOver"] = "headerCellMouseOver";
    GridEvents["footerCellMouseOver"] = "footerCellMouseOver";
    GridEvents["headerCellMouseDown"] = "headerCellMouseDown";
    GridEvents["footerCellMouseDown"] = "footerCellMouseDown";
    GridEvents["headerCellDblClick"] = "headerCellDblClick";
    GridEvents["footerCellDblClick"] = "footerCellDblClick";
    GridEvents["headerCellRightClick"] = "headerCellRightClick";
    GridEvents["footerCellRightClick"] = "footerCellRightClick";
    GridEvents["beforeEditStart"] = "beforeEditStart";
    GridEvents["afterEditStart"] = "afterEditStart";
    GridEvents["beforeEditEnd"] = "beforeEditEnd";
    GridEvents["afterEditEnd"] = "afterEditEnd";
})(GridEvents = exports.GridEvents || (exports.GridEvents = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(101));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getHotKeyCode(code) {
    var matches = code.toLowerCase().match(/\w+/g);
    var comp = 0;
    var key = "";
    for (var i = 0; i < matches.length; i++) {
        var check = matches[i];
        if (check === "ctrl") {
            comp += 4;
        }
        else if (check === "shift") {
            comp += 2;
        }
        else if (check === "alt") {
            comp += 1;
        }
        else {
            key = check;
        }
    }
    return comp + key;
}
var KeyManager = /** @class */ (function () {
    function KeyManager() {
        var _this = this;
        this._keysStorage = {};
        document.addEventListener("keydown", function (e) {
            var comp = (e.ctrlKey || e.metaKey ? 4 : 0) + (e.shiftKey ? 2 : 0) + (e.altKey ? 1 : 0);
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) { // A-Z 0-9
                key = String.fromCharCode(e.which);
            }
            else {
                key = e.key;
            }
            var code = comp + (key && key.toLowerCase());
            var actions = _this._keysStorage[code];
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    actions[i].handler(e);
                }
            }
        });
    }
    KeyManager.prototype.addHotKey = function (key, handler, scope) {
        var code = getHotKeyCode(key);
        if (!this._keysStorage[code]) {
            this._keysStorage[code] = [];
        }
        this._keysStorage[code].push({
            handler: handler,
            scope: scope
        });
    };
    KeyManager.prototype.removeHotKey = function (key, scope) {
        var keyStorage = this._keysStorage;
        if (key) {
            var code = getHotKeyCode(key);
            delete keyStorage[code];
        }
        if (scope) {
            for (var code in keyStorage) {
                var toDelete = []; // items index to delete
                for (var i = 0; i < keyStorage[code].length; i++) {
                    if (keyStorage[code][i].scope === scope) {
                        toDelete.push(i);
                    }
                }
                if (keyStorage[code].length === toDelete.length) {
                    delete keyStorage[code];
                }
                else {
                    for (var i = toDelete.length - 1; i >= 0; i--) { // begin from last coz splice change other index
                        keyStorage[code].splice(toDelete[i], 1);
                    }
                }
            }
        }
    };
    KeyManager.prototype.exist = function (key) {
        var code = getHotKeyCode(key);
        return !!this._keysStorage[code];
    };
    return KeyManager;
}());
exports.keyManager = new KeyManager();
function addHotkeys(handlers, beforeCall) {
    var context = new Date();
    var wrapHandler = function (handler) { return function (e) {
        if (beforeCall && beforeCall() === false) {
            return;
        }
        handler(e);
    }; };
    for (var key in handlers) {
        exports.keyManager.addHotKey(key, wrapHandler(handlers[key]), context);
    }
    return function () { return exports.keyManager.removeHotKey(undefined, context); };
}
exports.addHotkeys = addHotkeys;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32), __webpack_require__(87).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(107));
__export(__webpack_require__(108));
__export(__webpack_require__(22));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(4);
var ts_popup_1 = __webpack_require__(10);
var html_1 = __webpack_require__(3);
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, config) || this;
        if (_this.config.help) {
            _this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            _this._helper.attachHTML(_this.config.help);
        }
        _this._handlers = __assign({ showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target, { mode: _this.config.labelInline ? html_1.Position.right : html_1.Position.bottom });
            } }, _this._getHandlers());
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Label.prototype._getHandlers = function () {
        return {};
    };
    Label.prototype._init = function () {
        return;
    };
    Label.prototype._draw = function () {
        return this._drawLabel();
    };
    Label.prototype._drawLabel = function () {
        var _a = this.config, id = _a.id, labelInline = _a.labelInline, label = _a.label, labelWidth = _a.labelWidth, help = _a.help;
        var width = labelInline && labelWidth ? labelWidth : "";
        return dom_1.el("label.dhx_label", {
            for: id || this._uid,
            style: { minWidth: width, maxWidth: width },
            class: help ? "dhx_label--with-help" : ""
        }, help ? [
            dom_1.el("span.dhx_label__holder", label),
            dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                tabindex: "0",
                role: "button",
                onclick: this._handlers.showHelper
            }),
        ] : label);
    };
    return Label;
}(view_1.View));
exports.Label = Label;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType = exports.TreeFilterType || (exports.TreeFilterType = {}));
var DropPosition;
(function (DropPosition) {
    DropPosition["top"] = "top";
    DropPosition["bot"] = "bot";
    DropPosition["in"] = "in";
})(DropPosition = exports.DropPosition || (exports.DropPosition = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["load"] = "load";
    DataEvents["loadError"] = "loaderror";
})(DataEvents = exports.DataEvents || (exports.DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforedrag";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["dragStart"] = "dragstart";
    DragEvents["dragEnd"] = "dragend";
    DragEvents["canDrop"] = "candrop";
    DragEvents["cancelDrop"] = "canceldrop";
    DragEvents["dropComplete"] = "dropcomplete";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn"; // fire on source
})(DragEvents = exports.DragEvents || (exports.DragEvents = {}));
var DragMode;
(function (DragMode) {
    DragMode["target"] = "target";
    DragMode["both"] = "both";
    DragMode["source"] = "source";
})(DragMode = exports.DragMode || (exports.DragMode = {}));
var DropBehaviour;
(function (DropBehaviour) {
    DropBehaviour["child"] = "child";
    DropBehaviour["sibling"] = "sibling";
    DropBehaviour["complex"] = "complex";
})(DropBehaviour = exports.DropBehaviour || (exports.DropBehaviour = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver = exports.DataDriver || (exports.DataDriver = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(25);
var drivers_1 = __webpack_require__(57);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    if (isNaN(a) || isNaN(b)) {
        var ax_1 = [];
        var bx_1 = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            ax_1.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            bx_1.push([$1 || Infinity, $2 || ""]);
        });
        while (ax_1.length && bx_1.length) {
            var an = ax_1.shift();
            var bn = bx_1.shift();
            var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax_1.length - bx_1.length;
    }
    return a - b;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf) {
    if (typeof conf === "function") {
        if (conf.call(this, item)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof (dhx.debug) !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (key[0] !== "$" && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;
function hasJsonOrArrayStructure(str) {
    if (typeof str === "object") {
        return true;
    }
    if (typeof str !== "string") {
        return false;
    }
    try {
        var result = JSON.parse(str);
        return Object.prototype.toString.call(result) === "[object Object]"
            || Array.isArray(result);
    }
    catch (err) {
        return false;
    }
}
exports.hasJsonOrArrayStructure = hasJsonOrArrayStructure;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(103));
__export(__webpack_require__(104));
__export(__webpack_require__(105));
__export(__webpack_require__(61));
__export(__webpack_require__(33));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function rgbToHex(color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d]*)\)/.exec(color);
    var red = parseInt(digits[2], 10).toString(16);
    var green = parseInt(digits[3], 10).toString(16);
    var blue = parseInt(digits[4], 10).toString(16);
    return "#" + red + green + blue;
}
exports.rgbToHex = rgbToHex;
function transpose(arr, transform) {
    var columns = [];
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var cellInd = 0; cellInd < row.length; cellInd++) {
            columns[cellInd] = columns[cellInd] || [];
            var cell = transform ? transform(row[cellInd]) : row[cellInd];
            columns[cellInd].push(cell);
        }
    }
    return columns;
}
exports.transpose = transpose;
function getStrWidth(str, font) {
    if (font === void 0) { font = "14px Arial"; }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = font;
    return Math.round(ctx.measureText(str).width);
}
exports.getStrWidth = getStrWidth;
function insert(node, newone) {
    if (typeof newone === "string") {
        node.insertAdjacentHTML("beforeend", newone);
        return node.lastChild;
    }
    else {
        node.appendChild(newone);
        return newone;
    }
}
function getStyleByClass(cssClass, container, targetClass, def) {
    var cont = container.querySelector("." + targetClass);
    var testDiv = insert(cont, "<div class=\"" + cssClass + "\"></div>");
    var styles = window.getComputedStyle(testDiv);
    var result = {
        color: styles.color === "rgb(0, 0, 0)" ? def.color : rgbToHex(styles.color),
        background: styles.backgroundColor === "rgba(0, 0, 0, 0)" ? def.background : rgbToHex(styles.backgroundColor),
        fontSize: parseFloat(styles.fontSize)
    };
    cont.removeChild(testDiv);
    // [dirty]
    if (result.color === def.color
        && result.background === def.background
        && result.fontSize === def.fontSize) {
        return null;
    }
    return result;
}
exports.getStyleByClass = getStyleByClass;
function removeHTMLTags(str) {
    if (typeof str !== "string" && typeof str !== "number") {
        return "";
    }
    return ("" + ((str === undefined || str === null) ? "" : str)).replace(/<[^>]*>/g, "").replace(/[\"]/g, "&quot;").trim();
}
exports.removeHTMLTags = removeHTMLTags;
function isCssSupport(property, value) {
    try {
        return CSS.supports(property, value);
    }
    catch (err) {
        var el = document.createElement("div");
        el.style[property] = value;
        return el.style[property] === value;
    }
}
exports.isCssSupport = isCssSupport;
function isRowEmpty(row) {
    if (!row) {
        return;
    }
    return Object.keys(row).reduce(function (acc, col) {
        if (col === "id" || col[0] === "$") {
            return acc;
        }
        if (acc && (row[col] !== undefined && row[col] !== "")) {
            return false;
        }
        return acc;
    }, true);
}
exports.isRowEmpty = isRowEmpty;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents = exports.SelectionEvents || (exports.SelectionEvents = {}));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_1 = __webpack_require__(7);
exports.DataEvents = ts_data_1.DataEvents;
var ItemType;
(function (ItemType) {
    ItemType["button"] = "button";
    ItemType["imageButton"] = "imageButton";
    ItemType["selectButton"] = "selectButton";
    ItemType["customHTMLButton"] = "customButton";
    ItemType["input"] = "input";
    ItemType["separator"] = "separator";
    ItemType["title"] = "title";
    ItemType["spacer"] = "spacer";
    ItemType["menuItem"] = "menuItem";
    ItemType["block"] = "block";
    ItemType["navItem"] = "navItem";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var NavigationBarEvents;
(function (NavigationBarEvents) {
    NavigationBarEvents["inputCreated"] = "inputcreated";
    NavigationBarEvents["click"] = "click";
    NavigationBarEvents["openMenu"] = "openmenu";
    NavigationBarEvents["inputFocus"] = "inputfocus";
    NavigationBarEvents["inputBlur"] = "inputblur";
})(NavigationBarEvents = exports.NavigationBarEvents || (exports.NavigationBarEvents = {}));
var NavigationType;
(function (NavigationType) {
    NavigationType["pointer"] = "pointer";
    NavigationType["click"] = "click";
})(NavigationType = exports.NavigationType || (exports.NavigationType = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(22);
function getCount(item, widgetClass, isLimited) {
    var countColor = {
        danger: " dhx_navbar-count--color_danger",
        secondary: " dhx_navbar-count--color_secondary",
        primary: " dhx_navbar-count--color_primary",
        success: " dhx_navbar-count--color_success",
    }[item.countColor] || " dhx_navbar-count--color_danger";
    return dom_1.el(".dhx_navbar-count", {
        class: widgetClass + countColor + (!isLimited && parseInt(item.count, 10) > 99 ? " dhx_navbar-count--overlimit" : ""),
    }, isLimited && parseInt(item.count, 10) > 99 ? "99+" : item.count);
}
exports.getCount = getCount;
function getIcon(iconName, type) {
    if (iconName === void 0) { iconName = ""; }
    if (iconName.slice(0, 3) === "dxi") {
        iconName = "dxi " + iconName;
    }
    return dom_1.el("span", {
        class: "dhx_" + type + "__icon " + iconName
    });
}
exports.getIcon = getIcon;
function navbarComponentMixin(widgetName, item, asMenuItem, body) {
    var itemClass = getNavbarItemClass(widgetName, item, asMenuItem);
    var hasRibbonSize = widgetName === "ribbon" && (item.type === types_1.ItemType.navItem || item.type === types_1.ItemType.imageButton);
    return dom_1.el("li", {
        _key: item.id,
        class: itemClass +
            (item.icon && !item.value && hasRibbonSize ? " dhx_ribbon__item--icon" : "") +
            (item.src && !item.value && hasRibbonSize ? " dhx_ribbon__item--icon" : "") +
            (item.size && hasRibbonSize ? " dhx_ribbon__item--" + item.size : ""),
    }, [
        body
    ]);
}
exports.navbarComponentMixin = navbarComponentMixin;
function getNavbarButtonCSS(_a, widgetName) {
    var color = _a.color, size = _a.size, view = _a.view, full = _a.full, icon = _a.icon, circle = _a.circle, loading = _a.loading, value = _a.value, active = _a.active;
    var colorsCss = {
        danger: " dhx_button--color_danger",
        secondary: " dhx_button--color_secondary",
        primary: " dhx_button--color_primary",
        success: " dhx_button--color_success",
    }[color] || " dhx_button--color_primary";
    var sizeCss = {
        small: " dhx_button--size_small",
        medium: " dhx_button--size_medium",
    }[size] || " dhx_button--size_medium";
    var viewCss = {
        flat: " dhx_button--view_flat",
        link: " dhx_button--view_link",
    }[view] || " dhx_button--view_flat";
    var fullCss = full ? " dhx_button--width_full" : "";
    var circleCss = circle ? " dhx_button--circle" : "";
    var loadingCss = loading ? " dhx_button--loading" : "";
    var iconViewCss = icon && !value ? " dhx_button--icon" : "";
    var activeCss = active ? " dhx_button--active" : "";
    return colorsCss + sizeCss + viewCss + fullCss + circleCss + loadingCss + activeCss + iconViewCss;
}
exports.getNavbarButtonCSS = getNavbarButtonCSS;
var getNavbarItemClass = function (widgetName, item, asMenuItem) {
    var baseClassName = "";
    var resultClassName = "";
    if (asMenuItem) {
        baseClassName = "dhx_menu-item";
    }
    else {
        baseClassName = "dhx_" + widgetName + "__item";
    }
    resultClassName = baseClassName + (item.css ? " " + item.css : "");
    if (item.type === types_1.ItemType.spacer || item.type === types_1.ItemType.separator) {
        resultClassName += " " + baseClassName + "--" + item.type;
    }
    if (item.type === "button" && widgetName === "sidebar" && !item.icon) {
        resultClassName += " dhx_navbar-item--colapse_hidden";
    }
    return resultClassName;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
function getCoordinates(percent, radiusX, radiusY) {
    var x = Math.cos(2 * Math.PI * percent) * radiusX;
    var y = Math.sin(2 * Math.PI * percent) * radiusY;
    return [x, y];
}
exports.getCoordinates = getCoordinates;
function shiftCoordinates(item, dx, dy) {
    return [item[0] + dx, item[1] + dy];
}
exports.shiftCoordinates = shiftCoordinates;
exports.pieLikeHandlers = {
    onmouseover: function (shiftX, shiftY, _, node) {
        node.el.setAttribute("transform", "translate(" + shiftX + ", " + shiftY + ") scale(1.05)");
    },
    onmouseout: function (_, node) {
        node.el.setAttribute("transform", "translate(0, 0)");
    }
};
function checkMiss(v, r) {
    var miss = .000001;
    return v - miss < r && v + miss > r;
}
function drawBackgroundCircle(radius, color) {
    return dom_1.sv("circle", { cx: 0, cy: 0, r: radius, fill: color, stroke: "none", class: "background-circle" });
}
function arc(r, flag) {
    return "M" + -r + ",0A" + r + "," + r + " 0 " + (flag ? 0 : 1) + " 1 " + r + ",0A" + r + "," + r + " 0 " + (flag ? 0 : 1) + " 1 " + -r + ",0";
}
function radarScale(data, width, height) {
    var radius = height / 2;
    var scalePercent = 1 / data.scales.length;
    var largeArcFlag = scalePercent > .5 ? 1 : 0;
    var svg = [];
    var background = drawBackgroundCircle(radius, "#FAFBFD");
    svg.push(background);
    var currentPercent = -.25;
    var grid = [];
    var axis = data.axis;
    var gridClass = "radar-grid " + (data.zebra ? "zebra" : "");
    for (var i = 1; i < axis.length; i += 2) {
        var r1 = radius * axis[i - 1];
        var r2 = radius * axis[i];
        var d = arc(r1, true) + " " + arc(r2, false);
        var arcs = dom_1.sv("path", { d: d, fill: "none", stroke: "black", class: gridClass });
        grid.push(arcs);
    }
    svg.push(grid);
    data.scales.forEach(function (item) {
        var _a = getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
        var nextPercent = currentPercent + scalePercent;
        var _b = getCoordinates(nextPercent, radius, radius), endX = _b[0], endY = _b[1];
        var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
        var path = dom_1.sv("path", {
            d: d,
            stroke: "black",
            fill: "none",
            class: "radar-scale"
        });
        svg.push(path);
        var _c = [8, 8], yTextPadding = _c[0], xTextPadding = _c[1];
        var dy = checkMiss(currentPercent, 0) || checkMiss(currentPercent, 0.5) ? 0 : currentPercent < 0 || currentPercent > 0.5 ? -yTextPadding : yTextPadding;
        var dx = checkMiss(currentPercent, -0.25) || checkMiss(currentPercent, 0.25) ? 0 : currentPercent < -0.25 || currentPercent > 0.25 ? -xTextPadding : xTextPadding;
        if (checkMiss(currentPercent, -0.25) || checkMiss(currentPercent, 0.25)) {
            var alignFn = checkMiss(currentPercent, -0.25) ? common_1.verticalTopText : common_1.verticalBottomText;
            var text = dom_1.sv("text", { x: startX + dx, y: startY + dy, class: "scale-text" }, [alignFn(item)]);
            svg.push(text);
        }
        else {
            var className = currentPercent >= -0.25 && currentPercent <= 0.25 ? "start-text scale-text" : "end-text scale-text";
            var text = dom_1.sv("text", { x: startX + dx, y: startY + dy, class: className }, [common_1.verticalCenteredText(item)]);
            svg.push(text);
        }
        currentPercent = nextPercent;
    });
    currentPercent = -.25;
    if (data.realAxis) {
        var scaleText = data.realAxis.map(function (item, index) {
            var _a = getCoordinates(-0.25, radius * axis[index], radius * axis[index]), x = _a[0], y = _a[1];
            return dom_1.sv("text", { x: x, y: y, dx: -10, class: "radar-axis-text" }, [common_1.verticalCenteredText(item.toString())]);
        });
        svg.push(scaleText);
    }
    return dom_1.sv("g", { transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, svg);
}
exports.radarScale = radarScale;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var DataProxy = /** @class */ (function () {
    function DataProxy(url) {
        this.url = url;
    }
    DataProxy.prototype.load = function () {
        return this._ajax(this.url);
    };
    DataProxy.prototype.save = function (data, mode) {
        var modes = {
            insert: "POST",
            delete: "DELETE",
            update: "POST"
        };
        return this._ajax(this.url, data, modes[mode] || "POST");
    };
    DataProxy.prototype._ajax = function (url, data, method) {
        if (method === void 0) { method = "GET"; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response || xhr.responseText);
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.open(method, url);
            xhr.setRequestHeader("Content-Type", "application/json");
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(JSON.stringify(data));
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_data_1 = __webpack_require__(7);
var FileStatus;
(function (FileStatus) {
    FileStatus["queue"] = "queue";
    FileStatus["uploaded"] = "uploaded";
    FileStatus["failed"] = "failed";
    FileStatus["inprogress"] = "inprogress";
})(FileStatus = exports.FileStatus || (exports.FileStatus = {}));
var UploaderEvents;
(function (UploaderEvents) {
    UploaderEvents["uploadBegin"] = "uploadbegin";
    UploaderEvents["beforeUploadFile"] = "beforeuploadfile";
    UploaderEvents["uploadFile"] = "uploadfile";
    UploaderEvents["uploadFail"] = "uploadfail";
    UploaderEvents["uploadComplete"] = "uploadcomplete";
    UploaderEvents["uploadProgress"] = "uploadprogress";
})(UploaderEvents = exports.UploaderEvents || (exports.UploaderEvents = {}));
var ProgressBarEvents;
(function (ProgressBarEvents) {
    ProgressBarEvents["cancel"] = "cancel";
})(ProgressBarEvents = exports.ProgressBarEvents || (exports.ProgressBarEvents = {}));
var VaultMode;
(function (VaultMode) {
    VaultMode["grid"] = "grid";
    VaultMode["list"] = "list";
})(VaultMode = exports.VaultMode || (exports.VaultMode = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(106));
var ts_navbar_1 = __webpack_require__(15);
exports.ItemType = ts_navbar_1.ItemType;
exports.NavigationBarEvents = ts_navbar_1.NavigationBarEvents;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(125));
__export(__webpack_require__(67));
__export(__webpack_require__(38));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(126));
__export(__webpack_require__(66));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(127));
__export(__webpack_require__(64));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(132));
__export(__webpack_require__(68));
__export(__webpack_require__(40));
var en_1 = __webpack_require__(41);
exports.locale = en_1.default;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RealPosition;
(function (RealPosition) {
    RealPosition["left"] = "left";
    RealPosition["right"] = "right";
    RealPosition["top"] = "top";
    RealPosition["bottom"] = "bottom";
    RealPosition["center"] = "center";
})(RealPosition = exports.RealPosition || (exports.RealPosition = {}));
var Position;
(function (Position) {
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["center"] = "center";
})(Position = exports.Position || (exports.Position = {}));
var MessageContainerPosition;
(function (MessageContainerPosition) {
    MessageContainerPosition["topLeft"] = "top-left";
    MessageContainerPosition["topRight"] = "top-right";
    MessageContainerPosition["bottomLeft"] = "bottom-left";
    MessageContainerPosition["bottomRight"] = "bottom-right";
})(MessageContainerPosition = exports.MessageContainerPosition || (exports.MessageContainerPosition = {}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    apply: "apply",
    reject: "reject"
};
exports.default = locale;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    dragAndDrop: "Drag & drop",
    or: "or",
    browse: "Browse files",
    filesOrFoldersHere: "files or folders here",
    cancel: "Cancel",
    clearAll: "Clear all",
    clear: "Clear",
    add: "Add",
    upload: "Upload",
    download: "Download",
    error: "error",
    byte: "B",
    kilobyte: "KB",
    megabyte: "MB",
    gigabyte: "GB",
};
exports.default = locale;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(122));
__export(__webpack_require__(62));
__export(__webpack_require__(37));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListEvents;
(function (ListEvents) {
    ListEvents["click"] = "click";
    ListEvents["doubleClick"] = "doubleclick";
    ListEvents["contextmenu"] = "contextmenu";
    ListEvents["focusChange"] = "focuschange";
    ListEvents["beforeEditStart"] = "beforeEditStart";
    ListEvents["afterEditStart"] = "afterEditStart";
    ListEvents["beforeEditEnd"] = "beforeEditEnd";
    ListEvents["afterEditEnd"] = "afterEditEnd";
})(ListEvents = exports.ListEvents || (exports.ListEvents = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(39);
var core_1 = __webpack_require__(1);
/*
    %d	day as a number with leading zero, 01..31
    %j	day as a number, 1..31
    %D	short name of the day, Su Mo Tu...
    %l	full name of the day, Sunday Monday Tuesday...
    %m	month as a number with leading zero, 01..12
    %n	month as a number, 1..12
    %M	short name of the month, Jan Feb Mar...
    %F	full name of the month, January February March...
    %y	year as a number, 2 digits
    %Y	year as a number, 4 digits
    %h	hours 12-format with leading zero, 01..12)
    %g	hours 12-format, 1..12)
    %H	hours 24-format with leading zero, 01..24
    %G	hours 24-format, 1..24
    %i	minutes with leading zero, 01..59
    %s	seconds with leading zero, 01..59
    %a	am or pm
    %A	AM or PM
    %u	milliseconds
    %P	timezone offset
*/
var formatters = {
    "%d": function (date) {
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
    },
    "%j": function (date) { return date.getDate(); },
    "%l": function (date) {
        return en_1.default.days[date.getDay()];
    },
    "%D": function (date) {
        return en_1.default.daysShort[date.getDay()];
    },
    "%m": function (date) {
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
    },
    "%n": function (date) { return date.getMonth() + 1; },
    "%M": function (date) { return en_1.default.monthsShort[date.getMonth()]; },
    "%F": function (date) { return en_1.default.months[date.getMonth()]; },
    "%y": function (date) { return date.getFullYear().toString().slice(2); },
    "%Y": function (date) { return date.getFullYear(); },
    "%h": function (date) {
        var hours = date.getHours() % 12;
        return hours < 10 ? "0" + hours : hours;
    },
    "%g": function (date) { return date.getHours() % 12; },
    "%H": function (date) {
        var hours = date.getHours();
        return hours < 10 ? "0" + hours : hours;
    },
    "%G": function (date) { return date.getHours(); },
    "%i": function (date) {
        var minutes = date.getMinutes();
        return minutes < 10 ? "0" + minutes : minutes;
    },
    "%s": function (date) {
        var seconds = date.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    },
    "%a": function (date) { return date.getHours() > 12 ? "pm" : "am"; },
    "%A": function (date) { return date.getHours() > 12 ? "PM" : "AM"; },
    "%u": function (date) { return date.getMilliseconds(); }
};
var setFormatters = {
    "%d": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check
            ? date.setDate(Number(value))
            : date.setDate(Number(1));
    },
    "%j": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check
            ? date.setDate(Number(value))
            : date.setDate(Number(1));
    },
    "%m": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check
            ? date.setMonth(Number(value) - 1)
            : date.setMonth(Number(0));
    },
    "%n": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check
            ? date.setMonth(Number(value) - 1)
            : date.setMonth(Number(0));
    },
    "%M": function (date, value) {
        var index = core_1.findIndex(en_1.default.monthsShort, function (v) { return v === value; });
        index === -1
            ? date.setMonth(0)
            : date.setMonth(index);
    },
    "%F": function (date, value) {
        var index = core_1.findIndex(en_1.default.months, function (v) { return v === value; });
        index === -1
            ? date.setMonth(0)
            : date.setMonth(index);
    },
    "%y": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check
            ? date.setFullYear(Number("20" + value))
            : date.setFullYear(Number("2000"));
    },
    "%Y": function (date, value) {
        var check = /(^([0-9][0-9][0-9][0-9])$)/i.test(value);
        check
            ? date.setFullYear(Number(value))
            : date.setFullYear(Number("2000"));
    },
    "%h": function (date, value) {
        var check = /(^0[1-9]|1[0-2]$)/i.test(value);
        check
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%g": function (date, value) {
        var check = /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(value);
        check
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%H": function (date, value) {
        var check = /(^[0-9][0-3]$)/i.test(value);
        check
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%G": function (date, value) {
        var check = /(^([0-9]$)|[0-9][0-3]$)/i.test(value);
        check
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%i": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check
            ? date.setMinutes(Number(value))
            : date.setMinutes(Number(0));
    },
    "%s": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check
            ? date.setSeconds(Number(value))
            : date.setSeconds(Number(0));
    },
    "%a": function (date, value) {
        if (value === "pm") {
            date.setHours(date.getHours() + 12);
        }
    },
    "%A": function (date, value) {
        if (value === "PM") {
            date.setHours(date.getHours() + 12);
        }
    },
};
function getFormatedDate(format, date) {
    return tokenizeFormat(format).reduce(function (res, token) {
        if (token.type === TokenType.separator) {
            return res + token.value;
        }
        else {
            if (!formatters[token.value]) {
                return res;
            }
            return res + formatters[token.value](date);
        }
    }, "");
}
exports.getFormatedDate = getFormatedDate;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["separator"] = 0] = "separator";
    TokenType[TokenType["datePart"] = 1] = "datePart";
})(TokenType || (TokenType = {}));
function tokenizeFormat(format) {
    var tokens = [];
    var currentSeparator = "";
    for (var i = 0; i < format.length; i++) {
        if (format[i] === "%") {
            if (currentSeparator.length > 0) {
                tokens.push({
                    type: TokenType.separator,
                    value: currentSeparator
                });
                currentSeparator = "";
            }
            tokens.push({
                type: TokenType.datePart,
                value: format[i] + format[i + 1]
            });
            i++;
        }
        else {
            currentSeparator += format[i];
        }
    }
    if (currentSeparator.length > 0) {
        tokens.push({
            type: TokenType.separator,
            value: currentSeparator
        });
    }
    return tokens;
}
function stringToDate(str, format, validate) {
    var tokens = tokenizeFormat(format);
    var dateParts = [];
    var index = 0;
    var formatter = null;
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (token.type === TokenType.separator) {
            var sepratorIndex = str.indexOf(token.value, index);
            if (sepratorIndex === -1) {
                if (validate) {
                    return false;
                }
                throw new Error(("Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html"));
            }
            if (formatter) {
                dateParts.push({
                    formatter: formatter,
                    value: str.slice(index, sepratorIndex)
                });
                formatter = null;
            }
            index = sepratorIndex + token.value.length;
        }
        else if (token.type === TokenType.datePart) {
            formatter = token.value;
        }
    }
    if (formatter) {
        dateParts.push({
            formatter: formatter,
            value: str.slice(index)
        });
    }
    var date = new Date();
    dateParts.reverse();
    for (var _a = 0, dateParts_1 = dateParts; _a < dateParts_1.length; _a++) {
        var datePart = dateParts_1[_a];
        if (setFormatters[datePart.formatter]) {
            setFormatters[datePart.formatter](date, datePart.value);
        }
    }
    return validate ? true : date;
}
exports.stringToDate = stringToDate;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
    cancel: "Cancel"
};
exports.default = locale;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function HSVtoRGB(hsv) {
    var rgb = { r: 0, g: 0, b: 0 };
    var h = hsv.h / 60;
    var s = hsv.s;
    var v = hsv.v;
    var i = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - (s * f));
    var t = 255 * v * (1 - (s * (1 - f)));
    v *= 255;
    switch (i) {
        case 0:
            rgb.r = v;
            rgb.g = t;
            rgb.b = p;
            break;
        case 1:
            rgb.r = q;
            rgb.g = v;
            rgb.b = p;
            break;
        case 2:
            rgb.r = p;
            rgb.g = v;
            rgb.b = t;
            break;
        case 3:
            rgb.r = p;
            rgb.g = q;
            rgb.b = v;
            break;
        case 4:
            rgb.r = t;
            rgb.g = p;
            rgb.b = v;
            break;
        case 5:
            rgb.r = v;
            rgb.g = p;
            rgb.b = q;
            break;
    }
    for (var key in rgb) {
        rgb[key] = Math.round(rgb[key]);
    }
    return rgb;
}
exports.HSVtoRGB = HSVtoRGB;
function RGBToHex(rgb) {
    return Object.keys(rgb).reduce(function (hex, c) {
        var h = rgb[c].toString(16).toUpperCase();
        h = h.length === 1 ? "0" + h : h;
        return hex += h;
    }, "#");
}
exports.RGBToHex = RGBToHex;
function HexToRGB(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
exports.HexToRGB = HexToRGB;
function RGBToHSV(rgb) {
    var h;
    var s;
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var v = Math.max(r, g, b);
    var diff = v - Math.min(r, g, b);
    var diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
        h = s = 0;
    }
    else {
        s = diff / v;
        var rdif = diffc(r);
        var gdif = diffc(g);
        var bdif = diffc(b);
        if (r === v) {
            h = bdif - gdif;
        }
        else if (g === v) {
            h = (1 / 3) + rdif - bdif;
        }
        else if (b === v) {
            h = (2 / 3) + gdif - rdif;
        }
        if (h < 0) {
            h += 1;
        }
        else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.floor(h * 360),
        s: s,
        v: v
    };
}
exports.RGBToHSV = RGBToHSV;
function HexToHSV(hex) {
    return RGBToHSV(HexToRGB(hex));
}
exports.HexToHSV = HexToHSV;
function isHex(hex) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
}
exports.isHex = isHex;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var en = {
    cancel: "Cancel",
    select: "Select",
    rightClickToDelete: "Right click to delete",
    customColors: "Custom colors",
    addNewColor: "Add new color"
};
exports.default = en;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxisCreator_1 = __webpack_require__(144);
var types_1 = __webpack_require__(6);
var SvgScales_1 = __webpack_require__(69);
var common_1 = __webpack_require__(5);
var renderScale = {
    left: SvgScales_1.left,
    right: SvgScales_1.right,
    bottom: SvgScales_1.bottom,
    top: SvgScales_1.top
};
var renderGrid = {
    left: SvgScales_1.leftGrid,
    right: SvgScales_1.rightGrid,
    bottom: SvgScales_1.bottomGrid,
    top: SvgScales_1.topGrid
};
var Scale = /** @class */ (function () {
    function Scale(_data, config, position) {
        this._data = _data;
        this._padding = false;
        this._charts = [];
        this._position = position;
        this._setDefaults(config);
        this._isXDirection = position === types_1.ScaleType.bottom || position === types_1.ScaleType.top;
        if (position !== types_1.ScaleType.radial) {
            if (position === types_1.ScaleType.left || position === types_1.ScaleType.right) {
                this.config.size = this.config.size || 40 + (this.config.title ? 40 : 0);
            }
            else {
                this.config.size = this.config.size || 20 + (this.config.title ? 40 : 0);
            }
        }
    }
    Scale.prototype.addPadding = function () {
        this._padding = true;
    };
    Scale.prototype.getSize = function () {
        return this.config.size;
    };
    Scale.prototype.scaleReady = function (sizes) {
        var points = [];
        this._charts.forEach(function (chart) {
            chart.getPoints().forEach(function (item) { return points.push(item[1]); }); // y-value
        });
        this._axis = new AxisCreator_1.AxisCreator(points, this.config).getScale();
        var position = this._position;
        if (position !== "radial") {
            sizes[position] += this.config.size;
        }
    };
    Scale.prototype.point = function (pos) {
        if (this.config.log) {
            return this._logPoint(pos);
        }
        else {
            return this._isXDirection ? (pos - this._axis.min) / (this._axis.max - this._axis.min) : 1 - (pos - this._axis.min) / (this._axis.max - this._axis.min);
        }
    };
    Scale.prototype.add = function (val) {
        this._charts.push(val);
    };
    Scale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var steps = this._axis.steps;
        var points = steps.map(function (item) { return [_this._isXDirection ? _this.point(item) * width : _this.point(item) * height, item]; });
        return renderScale[this._position](points, this.config, width, height);
    };
    Scale.prototype.scaleGrid = function () {
        var _this = this;
        var getPoints = function (width, height) {
            return _this._axis.steps.map(function (item) { return [_this._isXDirection ? _this.point(item) * width : _this.point(item) * height, item]; });
        };
        var type = this._position;
        var grid = this.config.grid;
        var dashed = this.config.dashed;
        var hidden = this.config.hidden;
        var getSpecificLevel = function () { return _this._axis.steps.indexOf(_this.config.targetLine); };
        var getSpecificNumber = function () { return _this.point(_this.config.targetValue); };
        return {
            paint: function (width, height) {
                var targetLine = getSpecificLevel();
                var points = getPoints(width, height);
                var targetValue = getSpecificNumber();
                var config = { targetLine: targetLine, dashed: dashed, grid: grid, targetValue: targetValue, hidden: hidden };
                return renderGrid[type](points, width, height, config);
            }
        };
    };
    Scale.prototype._setDefaults = function (config) {
        var defaults = {
            scalePadding: 20,
            textPadding: 11,
            grid: true,
            targetLine: null,
            showText: true
        };
        if (config.locator) {
            this.locator = common_1.locator(config.locator);
        }
        this.config = __assign({}, defaults, config);
    };
    Scale.prototype._logPoint = function (pos) {
        var logPos;
        var sign = Math.abs(pos) / pos;
        var steps = this._axis.steps;
        var count = steps.length - 1;
        var index = steps.indexOf(pos);
        if (index !== -1) {
            logPos = index / count;
        }
        else {
            var dx = this._axis.min < 0 ? steps.indexOf(0) : 0;
            var exp = sign * (common_1.log10(Math.abs(pos)) - 1);
            logPos = (dx + exp) / count;
        }
        return this._isXDirection ? logPos : 1 - logPos;
    };
    return Scale;
}());
exports.Scale = Scale;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var BaseSeria_1 = __webpack_require__(44);
var ScaleSeria = /** @class */ (function (_super) {
    __extends(ScaleSeria, _super);
    function ScaleSeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleSeria.prototype.addScale = function (type, scale) {
        if (type === types_1.ScaleType.bottom || type === types_1.ScaleType.top) {
            this.xScale = scale;
            this._xLocator = scale.locator;
        }
        else {
            this.yScale = scale;
            this._yLocator = common_1.locator(this.config.value);
        }
    };
    ScaleSeria.prototype.paint = function (width, height) {
        _super.prototype.paint.call(this, width, height);
    };
    ScaleSeria.prototype.dataReady = function (prev) {
        var _this = this;
        if (!this.config.active) {
            return this._points = [];
        }
        this._points = this._data.map(function (item, index) {
            // raw values
            var x = _this._xLocator(item);
            var y = _this._yLocator(item);
            var set = [x, y, item.id, x, y];
            if (prev) {
                set[1] += prev[index][1];
            }
            return set;
        });
        return this._points;
    };
    ScaleSeria.prototype._calckFinalPoints = function (width, height) {
        var _this = this;
        this._points.forEach(function (item, index) {
            // scaled values
            item[0] = _this.xScale.point(item[0]) * width;
            item[1] = _this.yScale.point(item[1]) * height;
        });
    };
    ScaleSeria.prototype._defaultLocator = function (v) {
        return [this._yLocator(v), this._xLocator(v)];
    };
    return ScaleSeria;
}(BaseSeria_1.default));
exports.default = ScaleSeria;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var types_1 = __webpack_require__(6);
var common_1 = __webpack_require__(5);
var line_1 = __webpack_require__(147);
var BaseSeria = /** @class */ (function () {
    function BaseSeria(_data, config, other) {
        this._data = _data;
        this.id = config.id = config.id || core_1.uid();
        this._events = other;
        this._points = [];
        this._setDefaults(config);
    }
    BaseSeria.prototype.toggle = function () {
        this.config.active = !this.config.active;
    };
    BaseSeria.prototype.getClosest = function (x, y) {
        var res = [Infinity, null, null, null];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            var dist = this._getClosestDist(x, y, point[0], point[1]);
            if (res[0] > dist) {
                res[0] = dist;
                res[1] = point[0];
                res[2] = point[1];
                res[3] = point[2];
            }
        }
        return res;
    };
    BaseSeria.prototype.getTooltipType = function (_id) {
        return types_1.TooltipType.top;
    };
    BaseSeria.prototype.getTooltipText = function (id) {
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p[0];
        }
    };
    BaseSeria.prototype.dataReady = function (prev) {
        return this._points = [];
    };
    BaseSeria.prototype.paint = function (width, height) {
        return this._calckFinalPoints(width, height);
    };
    BaseSeria.prototype.getPoints = function () {
        return this._points;
    };
    BaseSeria.prototype.addScale = function (type, scale) {
        // do nothing
    };
    BaseSeria.prototype._getClosestDist = function (x, y, px, py) {
        return common_1.euclideanDistance(x, y, px, py);
    };
    BaseSeria.prototype._calckFinalPoints = function (_width, _height) {
        // do nothing
    };
    BaseSeria.prototype._setDefaults = function (config) {
        this.config = config;
    };
    BaseSeria.prototype._defaultLocator = function (_) { return [null, null]; };
    BaseSeria.prototype._getPointType = function (form, color, showTooltip) {
        if (showTooltip) {
            return line_1.getShadeHelper(form, color, line_1.hoverMode);
        }
        else {
            return line_1.getShadeHelper(form, color, line_1.standarMode);
        }
    };
    return BaseSeria;
}());
exports.default = BaseSeria;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var BaseSeria_1 = __webpack_require__(44);
var NoScaleSeria = /** @class */ (function (_super) {
    __extends(NoScaleSeria, _super);
    function NoScaleSeria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._center = [0, 0]; // (x, y)
        _this._tooltipData = []; // (x, y)
        return _this;
    }
    NoScaleSeria.prototype.scaleReady = function (sizes) {
        for (var key in sizes) {
            sizes[key] += this.config.paddings;
        }
        return sizes;
    };
    NoScaleSeria.prototype.dataReady = function () {
        var _this = this;
        var data = this._data;
        this._sum = data.reduce(function (sum, item) { return item.$hidden ? sum : sum + parseFloat(_this._valueLocator(item)); }, 0);
        this._points = data.reduce(function (items, item, i) {
            if (item.$hidden) {
                return items;
            }
            var t = _this._textLocator(item);
            var v = _this._valueLocator(item);
            var x = v / _this._sum;
            var c = _this._colorLocator ? _this._colorLocator(item) : common_1.getDefaultColor(i);
            items.push([x, v, item.id, t, c]);
            return items;
        }, []);
        return this._points;
    };
    NoScaleSeria.prototype.toggle = function (id) {
        var item = this._data.getItem(id);
        if (!item) {
            return;
        }
        this._data.update(id, { $hidden: !item.$hidden });
    };
    NoScaleSeria.prototype.getClosest = function (x, y) {
        var percent = 1 - (Math.atan2(x - this._center[0], y - this._center[1]) + Math.PI) / Math.PI / 2;
        var points = this._points;
        for (var i = 0; i < points.length; i++) {
            if (points[i][0] >= percent) {
                return [0, this._tooltipData[i][0], this._tooltipData[i][1], points[i][2]];
            }
            percent -= points[i][0];
        }
        return [Infinity, null, null, null];
    };
    NoScaleSeria.prototype.getTooltipText = function (id) {
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p[0];
        }
    };
    NoScaleSeria.prototype.getTooltipType = function (_id) {
        return types_1.TooltipType.simple;
    };
    NoScaleSeria.prototype._setDefaults = function (config) {
        var _this = this;
        var defaults = {
            subType: types_1.NoScaleSubType.basic,
            paddings: 20
        };
        this.config = __assign({}, defaults, config);
        this._drawPointType = this._getPointType(types_1.PointType.empty, "none", this.config.tooltip);
        this._valueLocator = common_1.locator(config.value);
        this._textLocator = common_1.locator(config.text);
        if (config.color) {
            this._colorLocator = common_1.locator(config.color);
        }
        else if (config.monochrome) {
            this._colorLocator = function (item) { return common_1.getColorShade(config.monochrome, _this._getPercent(item) * 2); }; // 2 for more bright
        }
    };
    NoScaleSeria.prototype._defaultLocator = function (v) {
        return [this._valueLocator(v), this._textLocator(v)];
    };
    NoScaleSeria.prototype._getPercent = function (item) {
        return parseFloat(this._valueLocator(item)) / this._sum;
    };
    return NoScaleSeria;
}(BaseSeria_1.default));
exports.default = NoScaleSeria;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var ScaleSeria_1 = __webpack_require__(43);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.paint = function (width, height) {
        var _this = this;
        _super.prototype.paint.call(this, width, height);
        var color = this.config.pointColor || this.config.color;
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var svg = [];
        if (this.config.strokeWidth) {
            svg.push(this._getForm(this._points, this.config, css, width, height));
        }
        if (this.config.pointType) {
            var point_1 = this._getPointType(this.config.pointType, color, false);
            svg = svg.concat(this._points.map(function (p) { return point_1(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); }));
        }
        return dom_1.sv("g", { class: "seria", _key: this.id }, svg);
    };
    Line.prototype._getForm = function (points, config, css, width, height) {
        var d = points.map(function (item, index) { return (index ? "L" : "M") + (item[0] + " " + item[1]); }).join(" ");
        var path = dom_1.sv("path", {
            "id": "seria" + config.id,
            d: d,
            "stroke": config.color,
            "class": css,
            "stroke-width": this.config.strokeWidth,
            "fill": "none"
        });
        return path;
    };
    Line.prototype._setDefaults = function (config) {
        var defaults = {
            alpha: 1,
            strokeWidth: 2,
            active: true,
            tooltip: true
        };
        this.config = __assign({}, defaults, config);
    };
    return Line;
}(ScaleSeria_1.default));
exports.default = Line;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(158));
__export(__webpack_require__(73));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    notFound: "Not Found",
    selectAll: "Select All",
    unselectAll: "Unselect All",
    selectedItems: "selected items"
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataViewEvents;
(function (DataViewEvents) {
    DataViewEvents["click"] = "click";
    DataViewEvents["doubleClick"] = "doubleclick";
    DataViewEvents["contextmenu"] = "contextmenu";
    DataViewEvents["focusChange"] = "focuschange";
    DataViewEvents["beforeEditStart"] = "beforeEditStart";
    DataViewEvents["afterEditStart"] = "afterEditStart";
    DataViewEvents["beforeEditEnd"] = "beforeEditEnd";
    DataViewEvents["afterEditEnd"] = "afterEditEnd";
})(DataViewEvents = exports.DataViewEvents || (exports.DataViewEvents = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var helper_1 = __webpack_require__(9);
var label_1 = __webpack_require__(16);
var events_1 = __webpack_require__(2);
var types_1 = __webpack_require__(8);
var INIT_DEBOUNCE_TIME = 500;
var InputEvents;
(function (InputEvents) {
    InputEvents["change"] = "change";
    InputEvents["error"] = "error";
    InputEvents["success"] = "success";
})(InputEvents = exports.InputEvents || (exports.InputEvents = {}));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this._debounceTime = INIT_DEBOUNCE_TIME;
        _this.events.on(InputEvents.change, function (value) {
            _this.config.value = value || "";
        });
        return _this;
    }
    Input.prototype.validate = function () {
        var requiredCondition = !this.config.required || this.config.value;
        var isValid = !this.config.validation || helper_1.validateInput(this.config.value, this.config.validation);
        this.config.$validationStatus = requiredCondition && isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return requiredCondition && isValid;
    };
    Input.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    Input.prototype.clear = function () {
        this.config.value = "";
        this.paint();
    };
    Input.prototype.setValue = function (value) {
        this.events.fire(InputEvents.change, [value]);
        this.config.value = value;
        this.paint();
    };
    Input.prototype.getValue = function () {
        return this.config.value || "";
    };
    Input.prototype._init = function () {
        var _a = this.config, validation = _a.validation, value = _a.value;
        if (validation && value) {
            var isValid = helper_1.validateInput(value, validation);
            this.config.$validationStatus = isValid
                ? types_1.ValidationStatus.success
                : types_1.ValidationStatus.error;
        }
    };
    Input.prototype._getHandlers = function () {
        var _this = this;
        return {
            oninput: function (e) {
                var value = e.target.value;
                _this.config.value = value;
                if (_this._debounceTimer) {
                    clearTimeout(_this._debounceTimer);
                }
                var time = Date.now();
                var diff = _this._last ? time - _this._last : _this._debounceTime;
                _this._last = time;
                _this._debounceTime = (diff + _this._debounceTime) / 2 + 300;
                _this._debounceTimer = setTimeout(function () {
                    _this._validate(value);
                }, _this._debounceTime);
            },
            onblur: function (e) {
                _this._validate(e.target.value, true);
            }
        };
    };
    Input.prototype._draw = function () {
        var _a = this.config, id = _a.id, value = _a.value, disabled = _a.disabled, name = _a.name, icon = _a.icon, placeholder = _a.placeholder, required = _a.required, inputType = _a.inputType, validation = _a.validation, hidden = _a.hidden, autocomplete = _a.autocomplete;
        var visibility = hidden ? " dhx_form-group--hidden" : "";
        return dom_1.el("div.dhx_form-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation)) + visibility
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", {}, [
                dom_1.el("div.dhx_input-container", {}, [
                    this.config.icon ? dom_1.el(".dhx_input__icon", {
                        class: this.config.icon
                    }) : null,
                    dom_1.el("input.dhx_input", {
                        type: inputType,
                        id: id || this._uid,
                        placeholder: placeholder || "",
                        value: core_1.isDefined(value) ? value : "",
                        name: name || "",
                        disabled: disabled,
                        required: required,
                        onblur: this._handlers.onblur,
                        oninput: this._handlers.oninput,
                        class: icon ? "dhx_input--icon-padding" : "",
                        autocomplete: autocomplete ? "on" : "off"
                    }),
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    Input.prototype._validate = function (value, blur) {
        if (blur && this._debounceTimer) {
            clearTimeout(this._debounceTimer);
        }
        this._last = null;
        this._debounceTimer = null;
        this._debounceTime = INIT_DEBOUNCE_TIME;
        if (this.config.validation) {
            if (!helper_1.validateInput(value, this.config.validation)) {
                this.events.fire(InputEvents.error, [value]);
                this.config.$validationStatus = types_1.ValidationStatus.error;
                this.paint();
                return;
            }
            else {
                this.events.fire(InputEvents.success, [value]);
                this.config.$validationStatus = types_1.ValidationStatus.success;
                this.paint();
            }
        }
        else if (this.config.required) {
            if (value === "") {
                this.events.fire(InputEvents.error, [value]);
                this.config.$validationStatus = types_1.ValidationStatus.error;
                this.paint();
            }
            else {
                this.events.fire(InputEvents.success, [value]);
                this.config.$validationStatus = types_1.ValidationStatus.success;
                this.paint();
            }
        }
        this.events.fire(InputEvents.change, [value]);
    };
    return Input;
}(label_1.Label));
exports.Input = Input;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(181));
__export(__webpack_require__(11));
__export(__webpack_require__(53));
__export(__webpack_require__(52));
__export(__webpack_require__(20));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function normalizeArray(obj, name) {
    if (!obj[name]) {
        return;
    }
    if (typeof obj[name] === "string") {
        obj[name] = [{
                text: "" + obj[name]
            }];
    }
    else {
        obj[name] = obj[name].map(function (el) {
            if (typeof el === "string") {
                el = { text: el };
            }
            return el;
        });
    }
}
function normalizeColumns(columns) {
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var col = columns_1[_i];
        col.$cellCss = col.$cellCss || {};
        normalizeArray(col, "header");
        normalizeArray(col, "footer");
        var isContent = col.header.reduce(function (acc, item) { return acc = acc || !!item.content; }, false);
        if (isContent) {
            col.$uniqueData = [];
        }
        col.width = col.width || 100;
    }
}
exports.normalizeColumns = normalizeColumns;
function countColumns(config, columns) {
    var headerRowsCount = 0;
    var footerRowsCount = 0;
    var totalWidth = 0;
    var colspans = false;
    var rowsHeadersCount = 0;
    var footer = false;
    columns.map(function (col) {
        headerRowsCount = Math.max(headerRowsCount, col.header.length);
        totalWidth += col.width;
        if (col.footer) {
            footerRowsCount = Math.max(footerRowsCount, col.footer.length);
            if (!footer) {
                footer = true;
            }
        }
        if (!colspans) {
            for (var _i = 0, _a = col.header; _i < _a.length; _i++) {
                var head = _a[_i];
                if (head.colspan) {
                    colspans = true;
                    return;
                }
            }
        }
    });
    // fill missing cells
    columns.map(function (col) {
        if (col.header.length < headerRowsCount) {
            for (var i = 0; i < headerRowsCount; i++) {
                col.header[i] = col.header[i] || { text: "" };
            }
        }
        if (footer) {
            col.footer = col.footer || [];
        }
        if (col.footer && col.footer.length < footerRowsCount) {
            for (var i = 0; i < footerRowsCount; i++) {
                col.footer[i] = col.footer[i] || { text: "" };
            }
        }
        col.header.map(function (head) {
            head.css = head.css || "";
            if (!head.text && !/dhx_cell-empty/.test(head.css)) {
                head.css += " dhx_cell-empty";
            }
        });
        // find header columns indexes
        if (col.header[0].text === "") {
            rowsHeadersCount++;
        }
    });
    config.$totalWidth = totalWidth;
    config.$headerLevel = headerRowsCount;
    config.$footerLevel = footerRowsCount;
    config.$colspans = colspans;
    config.$footer = footer;
    return rowsHeadersCount;
}
exports.countColumns = countColumns;
function calculatePositions(width, height, scroll, conf) {
    var avrColWidth = conf.$totalWidth / conf.columns.length;
    var colPerPage = Math.round(width / avrColWidth);
    var rowPerPage = Math.round(height / conf.rowHeight);
    var reserve = 1;
    var y = Math.round(scroll.top / conf.rowHeight) || 0;
    var yStart = y - reserve >= 0 ? y - reserve : 0;
    var yEnd = y + rowPerPage + reserve;
    var x = 0;
    var scrollLeft = scroll.left;
    for (var i = 0; i < conf.columns.length; i++) {
        var col = conf.columns[i];
        scrollLeft = scrollLeft - col.width;
        if (scrollLeft + (avrColWidth / 2) > 0) {
            x++;
        }
        else {
            break;
        }
    }
    var xStart = x - reserve >= 0 ? x - reserve : 0;
    var xEnd = x + colPerPage + reserve;
    return {
        xStart: xStart,
        xEnd: xEnd,
        yStart: yStart,
        yEnd: yEnd
    };
}
exports.calculatePositions = calculatePositions;
function getUnique(arr, name) {
    return arr.map(function (item) { return item[name]; })
        .filter(function (item, i, array) { return array.indexOf(item) === i; })
        .sort();
}
exports.getUnique = getUnique;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// [todo]
function getWidth(columns, colspan, index) {
    if (!colspan) {
        return columns[index].width;
    }
    return columns.reduce(function (w, c, i) {
        w += (i >= index && i < index + colspan) ? c.width : 0;
        return w;
    }, 0);
}
exports.getWidth = getWidth;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(55));
__export(__webpack_require__(98));
__export(__webpack_require__(26));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(3);
var ts_data_1 = __webpack_require__(7);
var types_1 = __webpack_require__(26);
var Uploader = /** @class */ (function () {
    function Uploader(config, data, events) {
        if (config === void 0) { config = {}; }
        this.config = core_1.extend({
            autosend: true,
            updateFromResponse: true,
            fieldName: "file"
        }, config);
        this.data = data || new ts_data_1.DataCollection();
        this.events = events || this.data.events;
        this.isActive = false;
        this._fileInput = document.createElement("input");
        this._fileInput.type = "file";
        this._fileInput.multiple = true;
        this._initEvents();
        this._dropAreas = new Map();
    }
    Uploader.prototype.selectFile = function () {
        this._fileInput.click();
    };
    Uploader.prototype.linkDropArea = function (element) {
        var _this = this;
        var node = html_1.toNode(element);
        var dragover = function (e) { return e.preventDefault(); };
        var drop = function (e) {
            e.preventDefault();
            _this.parseFiles(e.dataTransfer);
        };
        node.addEventListener("dragover", dragover);
        node.addEventListener("drop", drop);
        this._dropAreas.set(node, {
            dragover: dragover,
            drop: drop
        });
    };
    Uploader.prototype.unlinkDropArea = function (element) {
        var _this = this;
        if (!element) {
            this._dropAreas.forEach(function (_, node) {
                _this._unlinkDropArea(node);
            });
            this._dropAreas.clear();
        }
        else {
            var node = html_1.toNode(element);
            this._unlinkDropArea(node);
            this._dropAreas.delete(node);
        }
    };
    Uploader.prototype.parseFiles = function (dataTransfer) {
        if (!dataTransfer.items || !dataTransfer.items[0] || !dataTransfer.items[0].webkitGetAsEntry) {
            var files = dataTransfer.files;
            for (var i = 0; i < files.length; i++) {
                this._addFile(files[i]);
            }
            if (this.config.autosend) {
                this.send();
            }
        }
        else {
            this._parseAsWebkitEntry(dataTransfer.items);
        }
    };
    Uploader.prototype.send = function (params) {
        var _this = this;
        if (this._uploadInfo && this.isActive) {
            // cancel two active sends
            return;
        }
        var all = this.data.findAll(function (item) { return item.status === types_1.FileStatus.queue || item.status === types_1.FileStatus.failed; });
        var files = all.filter(function (file) { return _this.events.fire(types_1.UploaderEvents.beforeUploadFile, [file]); });
        if (!files.length) {
            return;
        }
        this.isActive = true;
        this._uploadInfo = {
            files: files,
            count: files.length,
            size: files.reduce(function (s, f) { return s + f.file.size; }, 0)
        };
        this.events.fire(types_1.UploaderEvents.uploadBegin, [files]);
        this.events.fire(types_1.UploaderEvents.uploadProgress, [0, 0, this._uploadInfo.size]);
        if (this.config.singleRequest) {
            this._xhrSend(files, params);
        }
        else {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var fileWrapper = files_1[_i];
                this._xhrSend([fileWrapper], params);
            }
        }
    };
    Uploader.prototype.abort = function (id) {
        if (!id) {
            if (!this._uploadInfo || !this._uploadInfo.files) {
                return;
            }
            for (var _i = 0, _a = this._uploadInfo.files; _i < _a.length; _i++) {
                var fileWrapper = _a[_i];
                this.abort(fileWrapper.id);
            }
            return;
        }
        else {
            var item = this.data.getItem(id);
            if (!item || !item.request || item.request.readyState === 4) {
                return;
            }
            item.request.abort();
        }
    };
    Uploader.prototype._unlinkDropArea = function (node) {
        var handlers = this._dropAreas.get(node);
        if (!handlers) {
            return;
        }
        var dragover = handlers.dragover, drop = handlers.drop;
        node.removeEventListener("dragover", dragover);
        node.removeEventListener("drop", drop);
    };
    Uploader.prototype._initEvents = function () {
        var _this = this;
        this._fileInput.addEventListener("change", function () {
            var files = _this._fileInput.files;
            for (var i = 0; i < files.length; i++) {
                _this._addFile(files[i]);
            }
            if (_this.config.autosend) {
                _this.send();
            }
            _this._fileInput.value = null; // clear file input after get info about files
        });
    };
    Uploader.prototype._xhrSend = function (fileWrappers, params) {
        var _this = this;
        var formData = this._createFormData(fileWrappers, params);
        var request = new XMLHttpRequest();
        for (var _i = 0, fileWrappers_1 = fileWrappers; _i < fileWrappers_1.length; _i++) {
            var fileWrapper = fileWrappers_1[_i];
            this.data.update(fileWrapper.id, {
                request: request,
                status: types_1.FileStatus.inprogress,
                progress: 0
            });
        }
        request.open("POST", this.config.target);
        request.upload.onprogress = function (ev) {
            for (var _i = 0, fileWrappers_2 = fileWrappers; _i < fileWrappers_2.length; _i++) {
                var fileWrapper = fileWrappers_2[_i];
                _this.data.update(fileWrapper.id, {
                    progress: ev.loaded / ev.total,
                    status: types_1.FileStatus.inprogress
                });
            }
            var current = _this._uploadInfo.files.reduce(function (tot, file) { return tot + file.size * file.progress; }, 0) || 0;
            var total = _this._uploadInfo.size;
            var progress = current / _this._uploadInfo.size * 100 || 0;
            _this.events.fire(types_1.UploaderEvents.uploadProgress, [progress, current, total]);
        };
        request.onloadend = function () {
            _this._uploadInfo.count = _this.config.singleRequest ? 0 : _this._uploadInfo.count - 1;
            var status = request.status === 200 ? types_1.FileStatus.uploaded : types_1.FileStatus.failed;
            var extra = request.status === 200 && request.response ? JSON.parse(request.response) : null;
            for (var _i = 0, fileWrappers_3 = fileWrappers; _i < fileWrappers_3.length; _i++) {
                var fileWrapper = fileWrappers_3[_i];
                _this.data.update(fileWrapper.id, { status: status });
                if (status === types_1.FileStatus.uploaded) {
                    if (_this.config.updateFromResponse && extra) {
                        if (_this.config.singleRequest && extra[fileWrapper.id]) {
                            _this.data.update(fileWrapper.id, extra[fileWrapper.id]);
                        }
                        else if (!_this.config.singleRequest) {
                            _this.data.update(fileWrapper.id, extra);
                        }
                    }
                    _this.events.fire(types_1.UploaderEvents.uploadFile, [fileWrapper, extra]);
                }
                else {
                    _this.events.fire(types_1.UploaderEvents.uploadFail, [fileWrapper]);
                }
            }
            if (_this._uploadInfo.count === 0) {
                _this.isActive = false;
                _this.events.fire(types_1.UploaderEvents.uploadComplete, [_this._uploadInfo.files]);
            }
        };
        request.send(formData);
    };
    Uploader.prototype._parseAsWebkitEntry = function (items) {
        var _this = this;
        var reads = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i].webkitGetAsEntry();
            reads.push(this._traverseFileTree(item));
        }
        Promise.all(reads).then(function () {
            if (_this.config.autosend) {
                _this.send();
            }
        });
    };
    Uploader.prototype._createFormData = function (fileWrappers, params) {
        var fieldName = this.config.fieldName;
        var formData = new FormData();
        var extraParams = this.config.params;
        if (params) {
            for (var key in params) {
                formData.append(key, params[key]);
            }
        }
        if (extraParams) {
            for (var key in extraParams) {
                formData.append(key, extraParams[key]);
            }
        }
        var brackets = fileWrappers.length > 1 ? "[]" : "";
        for (var _i = 0, fileWrappers_4 = fileWrappers; _i < fileWrappers_4.length; _i++) {
            var fileWrapper = fileWrappers_4[_i];
            formData.append(fieldName + brackets, fileWrapper.file, fileWrapper.file.name);
            formData.append(fieldName + "_fullname" + brackets, fileWrapper.path + fileWrapper.file.name);
            formData.append(fieldName + "_id" + brackets, fileWrapper.id);
        }
        return formData;
    };
    Uploader.prototype._addFile = function (file, path) {
        if (path === void 0) { path = ""; }
        var fileWrapper = {
            id: core_1.uid(),
            file: file,
            progress: 0,
            status: types_1.FileStatus.queue,
            src: null,
            path: path
        };
        this.data.add(fileWrapper);
    };
    Uploader.prototype._traverseFileTree = function (item) {
        var _this = this;
        return new Promise(function (res) {
            var count = 0;
            var readEntry = function (entry, path) {
                if (entry.isFile) {
                    count++;
                    entry.file(function (file) {
                        count--;
                        _this._addFile(file, path);
                        if (count === 0) {
                            res();
                        }
                    });
                }
                else if (entry.isDirectory) {
                    var reader = entry.createReader();
                    readDirectory(reader, path + entry.name + "/");
                }
            };
            var readDirectory = function (reader, path) {
                count++;
                reader.readEntries(function (entries) {
                    count--;
                    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                        var entry = entries_1[_i];
                        readEntry(entry, path);
                    }
                    if (count === 0) {
                        res();
                    }
                });
            };
            readEntry(item, "");
        });
    };
    return Uploader;
}());
exports.Uploader = Uploader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(2);
var loader_1 = __webpack_require__(90);
var sort_1 = __webpack_require__(93);
var dataproxy_1 = __webpack_require__(25);
var helpers_1 = __webpack_require__(18);
var types_1 = __webpack_require__(17);
var core_1 = __webpack_require__(1);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        this.config = config || {};
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
        this.events.on(types_1.DataEvents.loadError, function (response) {
            if (typeof response !== "string") {
                helpers_1.dhxError(response);
            }
            else {
                helpers_1.dhxWarning(response);
            }
        });
    }
    DataCollection.prototype.add = function (obj, index) {
        var _this = this;
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [obj])) {
            return;
        }
        if (Array.isArray(obj)) {
            obj.map(function (element, key) {
                if (key !== 0) {
                    index = index + 1;
                }
                var id = _this._addCore(element, index);
                _this._onChange("add", element.id, element);
                _this.events.fire(types_1.DataEvents.afterAdd, [element]);
                return id;
            });
        }
        else {
            var id = this._addCore(obj, index);
            this._onChange("add", obj.id, obj);
            this.events.fire(types_1.DataEvents.afterAdd, [obj]);
            return id;
        }
    };
    DataCollection.prototype.remove = function (id) {
        var obj = this._pull[id];
        if (obj) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [obj])) {
                return;
            }
            this._removeCore(obj.id);
            this._onChange("remove", id, obj);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [obj]);
    };
    DataCollection.prototype.removeAll = function () {
        this._removeAll();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var item = this._pull[id];
        if (!item) {
            return this._order[0].id || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, obj, silent) {
        var item = this.getItem(id);
        if (item) {
            if (helpers_1.isEqualObj(obj, item)) {
                return;
            }
            if (obj.id && id !== obj.id) {
                helpers_1.dhxWarning("this method doesn't allow change id");
                if (helpers_1.isDebug()) {
                    // tslint:disable-next-line:no-debugger
                    debugger;
                }
            }
            else {
                core_1.extend(this._pull[id], obj, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
        }
        else {
            helpers_1.dhxWarning("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        var res = core_1.findIndex(this._order, function (item) { return item.id === id; });
        if (this._pull[id] && res >= 0) {
            return res;
        }
        return -1;
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.filter = function (rule, config) {
        config = core_1.extend({
            add: false,
            multiple: true
        }, config);
        if (!config.add) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
        }
        this._filters = this._filters || {};
        if (!config.multiple || !rule) {
            this._filters = {};
        }
        if (rule) {
            if (typeof rule === "function") {
                var f = "_";
                this._filters[f] = {
                    match: f,
                    compare: rule
                };
            }
            else {
                if (!rule.match) {
                    delete this._filters[rule.by];
                }
                else {
                    rule.compare = rule.compare || (function (val, match) { return val === match; });
                    this._filters[rule.by] = rule;
                }
            }
            this._applyFilters();
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.find = function (conf) {
        for (var key in this._pull) {
            var res = helpers_1.findByConf(this._pull[key], conf);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var res = [];
        for (var key in this._pull) {
            var item = helpers_1.findByConf(this._pull[key], conf);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (by) {
        if (!by) {
            this._order = [];
            for (var key in this._pull) {
                this._order.push(this._pull[key]);
            }
            this._applyFilters();
        }
        else {
            this._sort.sort(this._order, by);
            if (this._initOrder && this._initOrder.length) {
                this._sort.sort(this._initOrder, by);
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        if (!this.exists(id)) {
            return null;
        }
        var newid = core_1.uid();
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign({}, helpers_1.copyWithoutInner(this.getItem(id)), { id: newid }), index);
                return newid;
            }
            else {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign({}, helpers_1.copyWithoutInner(this.getItem(id)), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype.move = function (id, index, target, targetId) {
        if (target && target !== this && this.exists(id)) {
            var item = core_1.copy(this.getItem(id), true);
            if (target.exists(id)) {
                item.id = core_1.uid();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change); // if target not this, it trigger add and remove
        return id;
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            url = new dataproxy_1.DataProxy(url);
        }
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        this._removeAll();
        return this._loader.parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this.events.fire(types_1.DataEvents.change, ["load"]);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        this._loader.save(url);
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (cb) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(cb.call(this, this._order[i], i));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, cb) {
        if (from < 0) {
            from = 0;
        }
        if (to > this._order.length - 1) {
            to = this._order.length - 1;
        }
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(cb.call(this, this._order[i], i));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (cb, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = cb.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this.map(function (item) {
            var newItem = __assign({}, item);
            Object.keys(newItem).forEach(function (key) {
                if (key[0] === "$") {
                    delete newItem[key];
                }
            });
            return newItem;
        });
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype._removeAll = function () {
        this._pull = {};
        this._order = [];
        this._changes.order = [];
        this._initOrder = null;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = obj.id ? obj.id.toString() : core_1.uid();
        if (this._pull[obj.id]) {
            helpers_1.dhxError("Item already exist");
        }
        // todo: not ideal solution
        if (this._initOrder && this._initOrder.length) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        if (this.config.prep) {
            data = this.config.prep(data);
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            obj.id = (obj.id || obj.id === 0) ? obj.id : core_1.uid();
            this._pull[obj.id] = obj;
            this._order[index++] = obj;
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = core_1.copy(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            if (item.id === id && !item.saving) {
                // update item
                if (item.error) {
                    item.error = false;
                }
                item = __assign({}, item, { obj: obj, status: status });
                this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                return;
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    DataCollection.prototype._applyFilters = function () {
        var _this = this;
        if (this._filters && Object.keys(this._filters).length) {
            var fOrder = this._order.filter(function (item) {
                return Object.keys(_this._filters).every(function (key) {
                    return item[key] ?
                        _this._filters[key].compare(item[key], _this._filters[key].match, item)
                        : _this._filters[key].compare(item);
                });
            });
            if (!this._initOrder) {
                this._initOrder = this._order;
            }
            this._order = fOrder;
        }
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver_1 = __webpack_require__(58);
var CsvDriver_1 = __webpack_require__(59);
var XMLDriver_1 = __webpack_require__(91);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver
};
exports.dataDriversPro = __assign({}, exports.dataDrivers, { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        if (config === void 0) { config = {}; }
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            row: "\n",
            column: ",",
        };
        this.config = __assign({}, initConfig, config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var parts = row.trim().split(this.config.column);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = parts[i];
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.row);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.column);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data) {
        var header = data[0] ? Object.keys(data[0]).filter(function (key) { return key[0] !== "$"; }).join(",") : "";
        return header + this._serialize(data);
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var cells = Object.keys(row).reduce(function (total, key, i) {
                if (key[0] === "$" || key === "items") {
                    return total;
                }
                return "" + total + row[key] + (i === row.length - 1 ? "" : ",");
            }, "");
            if (row.items) {
                return csv + "\n" + cells + _this._serialize(row.items);
            }
            return csv + "\n" + cells;
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function blockKeys(e) {
    var active = document.activeElement;
    if (!active.classList.contains("dhx_alert__confirm-reject") && !active.classList.contains("dhx_alert__confirm-aply")) {
        e.preventDefault();
    }
}
function blockScreen(css) {
    var blocker = document.createElement("div");
    blocker.className = "dhx_alert__overlay " + (css || "");
    document.body.appendChild(blocker);
    document.addEventListener("keydown", blockKeys);
    return function () {
        document.body.removeChild(blocker);
        document.removeEventListener("keydown", blockKeys);
    };
}
exports.blockScreen = blockScreen;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(33);
var DEFAULT_SHOW_DELAY = 750;
var DEFAULT_HIDE_DELAY = 200;
function findPosition(targetRect, position, width, height) {
    var margin = 8; // margin top/bot, left/right
    var pos;
    var left;
    var top;
    switch (position) {
        case types_1.Position.center:
            left = targetRect.left + window.pageXOffset + (targetRect.width - width) / 2;
            if (left + margin < window.pageXOffset) {
                left = targetRect.left + window.pageXOffset;
            }
            top = targetRect.top + window.pageYOffset + (targetRect.height - height) / 2;
            pos = types_1.RealPosition.center;
            return { left: left, top: top, pos: pos };
        case types_1.Position.right:
            pos = types_1.RealPosition.right;
            left = targetRect.right + window.pageXOffset;
            if (left + width + margin > window.innerWidth + window.pageXOffset) { // set left
                left = window.pageXOffset + targetRect.left - width;
                pos = types_1.RealPosition.left;
            }
            top = window.pageYOffset + targetRect.top + (targetRect.height - height) / 2;
            return { left: left, top: top, pos: pos };
        case types_1.Position.bottom:
        default:
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            pos = types_1.RealPosition.bottom;
            top = window.pageYOffset + targetRect.bottom;
            if (top + height + margin > window.innerHeight + window.pageYOffset) { // set top
                top = window.pageYOffset + targetRect.top - height;
                pos = types_1.RealPosition.top;
            }
            return { left: left, top: top, pos: pos };
    }
}
exports.findPosition = findPosition;
// tooltip init
var tooltipBox = document.createElement("div");
var tooltipText = document.createElement("span");
tooltipText.className = "dhx_tooltip__text";
tooltipBox.appendChild(tooltipText);
tooltipBox.style.position = "absolute";
var lastNode = null;
var isActive = false;
var hideTimeout = null;
var showTimeout = null;
var activeListenersDestructor;
function showTooltip(node, text, position, css, force) {
    if (force === void 0) { force = false; }
    var rects = node.getBoundingClientRect();
    tooltipText.textContent = text;
    document.body.appendChild(tooltipBox);
    tooltipBox.className = "dhx_tooltip" + (force ? " dhx_tooltip--forced" : "");
    var _a = tooltipBox.getBoundingClientRect(), width = _a.width, height = _a.height;
    var _b = findPosition(rects, position, width, height), left = _b.left, top = _b.top, pos = _b.pos;
    switch (pos) {
        case types_1.RealPosition.bottom:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.top:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.left:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.right:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.center:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
    }
    tooltipBox.className += " dhx_tooltip--" + pos + " " + (css || "");
    isActive = true;
    if (!force) {
        setTimeout(function () {
            tooltipBox.className += " dhx_tooltip--animate";
        });
    }
}
function hideTooltip(delay) {
    if (lastNode) {
        hideTimeout = setTimeout(function () {
            document.body.removeChild(tooltipBox);
            isActive = false;
            hideTimeout = null;
        }, delay || DEFAULT_HIDE_DELAY);
    }
}
function addListeners(node, text, config) {
    var force = config.force, showDelay = config.showDelay, hideDelay = config.hideDelay, position = config.position, css = config.css;
    if (!force) {
        showTimeout = setTimeout(function () {
            showTooltip(node, text, position || types_1.Position.bottom, css);
        }, showDelay || DEFAULT_SHOW_DELAY);
    }
    var hide = function () {
        if (isActive) {
            hideTooltip(hideDelay);
        }
        clearTimeout(showTimeout);
        node.removeEventListener("mouseleave", hide);
        node.removeEventListener("blur", hide);
        document.removeEventListener("mousedown", hide);
        lastNode = null;
        activeListenersDestructor = null;
    };
    if (force) {
        showTooltip(node, text, position, css, force);
    }
    node.addEventListener("mouseleave", hide);
    node.addEventListener("blur", hide);
    document.addEventListener("mousedown", hide);
    activeListenersDestructor = hide;
}
// default
function tooltip(text, config) {
    var node = html_1.toNode(config.node);
    if (node === lastNode) {
        return;
    }
    if (activeListenersDestructor) {
        activeListenersDestructor();
        activeListenersDestructor = null;
    }
    lastNode = node;
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
        addListeners(node, text, __assign({}, config, { force: true }));
    }
    else {
        addListeners(node, text, config);
    }
}
exports.tooltip = tooltip;
function enableTooltip() {
    document.addEventListener("mousemove", _mousemove);
}
exports.enableTooltip = enableTooltip;
function disableTooltip() {
    document.removeEventListener("mousemove", _mousemove);
}
exports.disableTooltip = disableTooltip;
function _mousemove(e) {
    var node = html_1.locateNode(e, "dhx_tooltip_text");
    if (!node) {
        return;
    }
    tooltip(node.getAttribute("dhx_tooltip_text"), {
        position: node.getAttribute("dhx_tooltip_position") || types_1.Position.bottom,
        node: node
    });
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(21);
var ts_data_1 = __webpack_require__(7);
var Selection = /** @class */ (function () {
    function Selection(config, data) {
        var _this = this;
        this.config = config;
        this.events = data.events;
        this._data = data;
        this._selected = [];
        this._lastShiftSelectedIndexes = [];
        this._data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._selected = [];
        });
        this._data.events.on(ts_data_1.DataEvents.afterRemove, function (obj) {
            _this._selected = _this._selected.filter(function (id) { return id !== obj.id; });
        });
    }
    Selection.prototype.getId = function () {
        if (this.config.multiselection) {
            return this._selected;
        }
        return this._selected[0];
    };
    Selection.prototype.getItem = function () {
        var _this = this;
        if (this._selected.length) {
            var items = this._selected.map(function (id) { return _this._data.getItem(id); });
            return this.config.multiselection ? items : items[0];
        }
        return null;
    };
    Selection.prototype.contains = function (id) {
        if (id) {
            return this._selected.indexOf(id) > -1;
        }
        return this._selected.length > 0;
    };
    Selection.prototype.remove = function (id) {
        var _this = this;
        if (!id) {
            this._data.map(function (item) {
                item.$selected = false;
                _this._selected = [];
            });
            return;
        }
        if (!id && !this._selected.length) {
            return true;
        }
        if (id) {
            return this._unselectItem(id);
        }
        this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId); });
        return true;
    };
    Selection.prototype.add = function (id, isCtrl, isShift) {
        var _this = this;
        if (!this.events.fire(types_1.SelectionEvents.beforeSelect)) {
            return;
        }
        if (!id) {
            this._selected = [];
            this._data.map(function (item) {
                item.$selected = true;
                _this._selected.push(item.id);
            });
            return;
        }
        if (this.config.multiselection) {
            this._addMulti(id, isCtrl, isShift);
        }
        else {
            this._addSingle(id, isCtrl);
        }
    };
    Selection.prototype._addMulti = function (id, isCtrl, isShift) {
        var _this = this;
        var currentSelectedItemIndex = this._data.getIndex(id);
        if (this.config.multiselectionMode === "click") {
            if (isShift) {
                this._addWithShift(currentSelectedItemIndex);
                this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
            }
            else {
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
        }
        if (this.config.multiselectionMode === "ctrlClick") {
            if (!isShift && !isCtrl) {
                this._data.map(function (item) {
                    item.$selected = false;
                    _this._selected = [];
                });
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
            if (isShift) {
                this._addWithShift(currentSelectedItemIndex);
                this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
            }
            if (isCtrl) {
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
        }
    };
    Selection.prototype._addWithShift = function (currentSelectedItemIndex) {
        var _this = this;
        if (currentSelectedItemIndex >= this._lastSelectedIndex) {
            // remove last selection with shift
            this._data.map(function (item, index) {
                if (_this._lastShiftSelectedIndexes.indexOf(index) !== -1) {
                    item.$selected = false;
                    _this._selected = _this._selected.filter(function (i) { return i !== _this._data.getId(index); });
                    _this._lastShiftSelectedIndexes = _this._lastShiftSelectedIndexes.filter(function (i) {
                        return i !== index && i !== _this._lastSelectedIndex;
                    });
                }
            });
            // add new selection with shift
            this._data.map(function (item, index) {
                if (index >= _this._lastSelectedIndex && index <= currentSelectedItemIndex) {
                    item.$selected = true;
                    if (_this._selected.indexOf(item.id) === -1) {
                        _this._selected.push(item.id);
                    }
                    if (index !== _this._lastSelectedIndex) {
                        if (_this._lastShiftSelectedIndexes.indexOf(index) === -1) {
                            _this._lastShiftSelectedIndexes.push(index);
                        }
                    }
                }
            });
        }
        if (currentSelectedItemIndex <= this._lastSelectedIndex) {
            // remove last selection with shift
            this._data.map(function (item, index) {
                if (_this._lastShiftSelectedIndexes.indexOf(index) !== -1) {
                    item.$selected = false;
                    _this._selected = _this._selected.filter(function (i) { return i !== _this._data.getId(index); });
                    _this._lastShiftSelectedIndexes = _this._lastShiftSelectedIndexes.filter(function (i) {
                        return i !== index && i !== _this._lastSelectedIndex;
                    });
                }
            });
            // add new selection with shift
            this._data.map(function (item, index) {
                if (index <= _this._lastSelectedIndex && index >= currentSelectedItemIndex) {
                    item.$selected = true;
                    if (_this._selected.indexOf(item.id) === -1) {
                        _this._selected.push(item.id);
                    }
                    if (index !== _this._lastSelectedIndex) {
                        if (_this._lastShiftSelectedIndexes.indexOf(index) === -1) {
                            _this._lastShiftSelectedIndexes.push(index);
                        }
                    }
                }
            });
        }
    };
    Selection.prototype._addSingle = function (id, isCtrl) {
        // clean selection
        this.remove();
        // select item
        if (this.config && this.config.multiselectionMode === "click") {
            this._selectItem(id);
        }
        else {
            if (isCtrl) {
                this._selectItem(id);
            }
        }
    };
    Selection.prototype._isSelected = function (id) {
        return this._selected.indexOf(id) !== -1;
    };
    Selection.prototype._selectItem = function (id) {
        this._selected.push(id);
        this._data.update(id, { $selected: true });
        this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
    };
    Selection.prototype._unselectItem = function (id) {
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false });
            this._selected = this._selected.filter(function (selectedId) { return selectedId !== id; });
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopupEvents;
(function (PopupEvents) {
    PopupEvents["beforeHide"] = "beforehide";
    PopupEvents["beforeShow"] = "beforeshow";
    PopupEvents["afterHide"] = "afterhide";
    PopupEvents["afterShow"] = "aftershow";
    PopupEvents["click"] = "click";
})(PopupEvents = exports.PopupEvents || (exports.PopupEvents = {}));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["vertical"] = "vertical";
    Direction["horizontal"] = "horizontal";
})(Direction = exports.Direction || (exports.Direction = {}));
var SliderEvents;
(function (SliderEvents) {
    SliderEvents["change"] = "change";
    SliderEvents["mousedown"] = "mousedown";
    SliderEvents["mouseup"] = "mouseup";
})(SliderEvents = exports.SliderEvents || (exports.SliderEvents = {}));


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    hours: "Hours",
    minutes: "Minutes",
    save: "save"
};
exports.default = locale;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimepickerEvents;
(function (TimepickerEvents) {
    TimepickerEvents["change"] = "change";
    TimepickerEvents["save"] = "save";
    TimepickerEvents["close"] = "close";
})(TimepickerEvents = exports.TimepickerEvents || (exports.TimepickerEvents = {}));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ViewMode;
(function (ViewMode) {
    ViewMode["days"] = "calendar";
    ViewMode["years"] = "year";
    ViewMode["months"] = "month";
    ViewMode["timepicker"] = "timepicker";
})(ViewMode = exports.ViewMode || (exports.ViewMode = {}));
var CalendarEvents;
(function (CalendarEvents) {
    CalendarEvents["change"] = "change";
    CalendarEvents["beforeChange"] = "beforechange";
    CalendarEvents["dateHover"] = "dateHover";
})(CalendarEvents = exports.CalendarEvents || (exports.CalendarEvents = {}));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorpickerEvents;
(function (ColorpickerEvents) {
    ColorpickerEvents["colorChange"] = "colorChange";
    ColorpickerEvents["selectClick"] = "selectClick";
    ColorpickerEvents["cancelClick"] = "cancelClick";
    ColorpickerEvents["viewChange"] = "viewChange";
})(ColorpickerEvents = exports.ColorpickerEvents || (exports.ColorpickerEvents = {}));
var ViewsTypes;
(function (ViewsTypes) {
    ViewsTypes["palette"] = "palette";
    ViewsTypes["picker"] = "picker";
})(ViewsTypes = exports.ViewsTypes || (exports.ViewsTypes = {}));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var defaultTextTemplate = function (item) { return item.toString(); };
function bottom(points, config, width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        extraTittlePadding = textPadding;
        text = points.map(function (p) { return p[0] !== 0 ? dom_1.sv("text", { class: "scale-text top-text", x: p[0], y: height + textPadding }, [common_1.verticalCenteredText(template(p[1]))])
            : dom_1.sv("text", { class: "scale-text start-text top-text", x: p[0], y: height + textPadding }, [common_1.verticalCenteredText(template(p[1]))]); });
    }
    var id = core_1.uid();
    var svTitle = null;
    var mainLine = dom_1.sv("path", { class: "main-scale", d: "M0 " + height + " H" + (width - 0.5), id: id }); // -0.5 instead of 0, coz stroke-linecap: square and dirrent stroke size
    if (title) {
        svTitle = dom_1.sv("text", { dx: width / 2, dy: scalePadding + extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title)
        ]);
    }
    return dom_1.sv("g", [
        mainLine,
        svTitle
    ].concat(text));
}
exports.bottom = bottom;
function bottomGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine, targetValue = config.targetValue;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === 0 && !config.hidden) {
            continue;
        }
        if (i === targetLine) {
            var d = "M" + points[i][0] + " 0 V " + height;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M" + points[i][0] + " 0 V " + height;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== width) {
                var additionD = "M" + width + " 0 V " + height;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    if (targetValue) {
        var d = "M" + targetValue * width + " 0 V " + height;
        var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
        gridLines.push(path);
    }
    return dom_1.sv("g", gridLines);
}
exports.bottomGrid = bottomGrid;
function top(points, config, width, _height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        extraTittlePadding = textPadding;
        text = points.map(function (p) { return p[0] !== 0 ? dom_1.sv("text", { x: p[0], y: -textPadding, class: "scale-text" }, [common_1.verticalCenteredText(template(p[1]))])
            : dom_1.sv("text", { x: p[0], y: -textPadding, class: "scale-text start-text" }, [common_1.verticalCenteredText(template(p[1]))]); });
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", { d: "M0 0 H" + width, class: "main-scale", id: id });
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: width / 2, dy: -scalePadding - extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title)
        ]);
    }
    return dom_1.sv("g", [
        mainLine,
        svTitle
    ].concat(text));
}
exports.top = top;
function topGrid(points, _width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === 0 && !config.hidden) {
            continue;
        }
        if (i === targetLine) {
            var d = "M" + points[i][0] + " 0 V " + height;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M" + points[i][0] + " 0 V " + height;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== 0) {
                var additionD = "M0 0 V " + height;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    return dom_1.sv("g", gridLines);
}
exports.topGrid = topGrid;
function left(points, config, _width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        var style_1 = common_1.getFontStyle("scale-text");
        var maxTextWidth_1 = 0;
        text = points.map(function (p) {
            var scaleText = template(p[1]);
            if (title) {
                var textWidth = common_1.getTextWidth(scaleText, style_1);
                if (maxTextWidth_1 < textWidth) {
                    maxTextWidth_1 = textWidth;
                }
            }
            return dom_1.sv("text", { class: "scale-text end-text", x: -textPadding, y: p[0] }, [common_1.verticalCenteredText(scaleText)]);
        });
        extraTittlePadding = maxTextWidth_1 + textPadding;
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", { class: "main-scale", d: "M0 " + height + " V 0.5", id: id }); // 0.5 instead of 0, coz stroke-linecap: square and dirrent stroke size
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: height / 2, dy: -scalePadding - extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title)
        ]);
    }
    return dom_1.sv("g", [
        mainLine,
        svTitle
    ].concat(text));
}
exports.left = left;
function leftGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine, targetValue = config.targetValue;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === height && !config.hidden) {
            continue;
        }
        if (targetLine === i) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== width) {
                var additionD = "M0 0 H" + width;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    if (targetValue) {
        var d = "M0 " + targetValue * height + " H " + width;
        var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
        gridLines.push(path);
    }
    return dom_1.sv("g", gridLines);
}
exports.leftGrid = leftGrid;
function right(points, config, width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        var style_2 = common_1.getFontStyle("scale-text");
        var maxTextWidth_2 = 0;
        text = points.map(function (p) {
            var scaleText = template(p[1]);
            if (title) {
                var textWidth = common_1.getTextWidth(scaleText, style_2);
                if (maxTextWidth_2 < textWidth) {
                    maxTextWidth_2 = textWidth;
                }
            }
            return dom_1.sv("text", { x: width + textPadding, class: "scale-text start-text", y: p[0] }, [common_1.verticalCenteredText(scaleText)]);
        });
        extraTittlePadding = textPadding + maxTextWidth_2;
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", { d: "M" + width + " " + height + " V 0", class: "main-scale", id: id });
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: height / 2, dy: scalePadding + extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title)
        ]);
    }
    return dom_1.sv("g", [
        mainLine,
        svTitle
    ].concat(text));
}
exports.right = right;
function rightGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === height && !config.hidden) {
            continue;
        }
        if (targetLine === i) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== width) {
                var additionD = "M0 0 H" + width;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    return dom_1.sv("g", gridLines);
}
exports.rightGrid = rightGrid;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var ScaleSeria_1 = __webpack_require__(43);
var Area = /** @class */ (function (_super) {
    __extends(Area, _super);
    function Area() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Area.prototype.paint = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        var svg = [];
        this._form(width, height, svg, prev);
        this._markers(svg);
        return dom_1.sv("g", { class: "seria", _key: this.id }, svg);
    };
    Area.prototype.paintformAndMarkers = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        var svg = [];
        var markers = [];
        this._form(width, height, svg, prev);
        this._markers(markers);
        return [
            dom_1.sv("g", { class: "seria", _key: this.id }, svg),
            dom_1.sv("g", { class: "seria_markers", _key: this.id + "_markers" }, markers)
        ];
    };
    Area.prototype._markers = function (svg) {
        var _this = this;
        if (this.config.pointType) {
            var color = this.config.pointColor || this.config.color;
            var point_1 = this._getPointType(this.config.pointType, color, false);
            svg.push.apply(svg, this._points.map(function (p) { return point_1(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); }));
        }
    };
    Area.prototype._form = function (width, height, svg, prev) {
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var _a = this.config, id = _a.id, fill = _a.fill, alpha = _a.alpha, color = _a.color, strokeWidth = _a.strokeWidth;
        var points = this._points;
        var last = points[points.length - 1];
        var d = "";
        if (prev) {
            // bottom line in stacked area
            for (var i = prev.length - 1; i >= 0; i--) {
                var item = prev[i];
                d += (i === points.length - 1 ? "M" + item[0] + " " + item[1] + " " : "L" + item[0] + " " + item[1] + " ");
            }
            // top line in stacked area
            d += points.map(function (item, index) { return (!index ? "V " + item[1] : "L " + item[0] + " " + item[1]); }).join(" ") + "Z";
        }
        else {
            d += points.map(function (item, index) { return (index ? "L" + item[0] + " " + item[1] : "M0 " + height + " L0 " + item[1] + " L" + item[0] + " " + item[1]); }).join(" ") + ("L" + width + " " + last[1] + " V " + height);
        }
        if (strokeWidth) {
            var len_1 = points.length - 1;
            var strokePadding_1 = function (index) { return index === len_1 ? -.5 : (index ? 0 : .5); };
            var line = points.map(function (item, index) { return (index ? "L" : "M") + (item[0] + strokePadding_1(index) + " " + item[1]); }).join(" ");
            var linePath = dom_1.sv("path", {
                "d": line,
                "stroke-width": strokeWidth,
                "stroke": color,
                "fill": "none",
                "class": css
            });
            svg.push(linePath);
        }
        var path = dom_1.sv("path", {
            "id": "seria" + id,
            d: d,
            "class": css,
            fill: fill,
            "fill-opacity": alpha,
            "stroke": "none"
        });
        svg.push(path);
        return svg;
    };
    Area.prototype._setDefaults = function (config) {
        var defaults = {
            alpha: 0.3,
            strokeWidth: 2,
            fill: config.color || "#5E83BA",
            color: "#5E83BA",
            active: true,
            tooltip: true,
            pointType: types_1.PointType.empty
        };
        this.config = __assign({}, defaults, config);
        var showTooltip = this.config.tooltip;
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this._drawPointType = this._getPointType(point, color, showTooltip);
        }
    };
    return Area;
}(ScaleSeria_1.default));
exports.default = Area;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var ScaleSeria_1 = __webpack_require__(43);
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shift = 0;
        return _this;
    }
    Bar.prototype.addScale = function (type, scale) {
        _super.prototype.addScale.call(this, type, scale);
        scale.addPadding();
    };
    Bar.prototype.seriesShift = function (shift) {
        this._shift = shift;
        return this.config.barWidth;
    };
    Bar.prototype.paint = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        if (!this.config.active) {
            return null;
        }
        var svg = [];
        if (this._gradient) {
            svg.push(dom_1.sv("defs", [this._gradient()]));
        }
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var form = this._getForm(this._points, css, width, height, prev);
        svg = svg.concat(form);
        return dom_1.sv("g", { class: "seria", _key: this.id }, svg);
    };
    Bar.prototype.getTooltipType = function (_id, _x, y) {
        if (this.config.baseLine !== undefined && this._baseLinePosition < y) {
            return types_1.TooltipType.bot;
        }
        return types_1.TooltipType.top;
    };
    Bar.prototype._getClosestDist = function (x, y, px, py) {
        if (this.config.stacked && y < py) {
            return Infinity;
        }
        return Math.abs(x - px);
    };
    Bar.prototype._path = function (item, prev) {
        item[0] += this._shift;
        return "\nM " + (item[0] - (this.config.barWidth / 2)) + " " + prev + "\nV " + item[1] + "\nh " + this.config.barWidth + "\nV " + prev;
    };
    Bar.prototype._base = function (height) {
        var baseLine = this.config.baseLine;
        return this._baseLinePosition = baseLine !== undefined ? this.yScale.point(baseLine) * height : height - 1;
    };
    Bar.prototype._text = function (item, prev) {
        return {
            x: item[0],
            y: (prev + item[1]) / 2,
            class: "bar-text"
        };
    };
    Bar.prototype._getForm = function (points, css, _width, height, prev) {
        var _this = this;
        var _a = this.config, fill = _a.fill, alpha = _a.alpha, showText = _a.showText;
        var svg = [];
        var base = this._base(height);
        var getPrev = function (index) { return !prev ? base : prev[index][1]; };
        var series = points.map(function (item, index) { return dom_1.sv("path", {
            "_key": "seria" + _this.config.id + index,
            "d": _this._path(item, getPrev(index)),
            "class": css,
            fill: fill,
            "fill-opacity": alpha
        }); });
        svg.push.apply(svg, series);
        if (showText) {
            var isWrite_1 = function (item, index) { return Math.abs(getPrev(index) - item[1]) > 16 ? true : false; }; // hide text, where height < 16
            var text = points.map(function (item, index) {
                return isWrite_1(item, index) ?
                    dom_1.sv("text", _this._text(item, getPrev(index)), [common_1.verticalCenteredText(_this._getText(item))]) :
                    null;
            });
            svg.push.apply(svg, text);
        }
        return svg;
    };
    Bar.prototype._getText = function (item) {
        return item[3].toString();
    };
    Bar.prototype._setDefaults = function (config) {
        var defaults = {
            barWidth: 30,
            alpha: 1,
            active: true,
            tooltip: true,
            pointType: types_1.PointType.empty
        };
        this.config = __assign({}, defaults, config);
        var showTooltip = this.config.tooltip;
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this.config.pointType = point;
            this._drawPointType = this._getPointType(point, color, showTooltip);
        }
        if (this.config.gradient) {
            var id_1 = "gradient" + core_1.uid();
            var gradient_1 = this.config.gradient(this.config.fill);
            this._gradient = function () { return common_1.linearGradient(gradient_1, id_1); };
            this.config.fill = "url(#" + id_1 + ")";
        }
    };
    return Bar;
}(ScaleSeria_1.default));
exports.default = Bar;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function spline(initPoints, link) {
    var len = initPoints.length;
    var points;
    if (len < 3) {
        points = initPoints;
    }
    else {
        var p0 = initPoints[0];
        var p1 = initPoints[0];
        var p2 = initPoints[1];
        var p3 = initPoints[2];
        points = [initPoints[0].slice(0, 2)];
        for (var i = 1; i < len; i++) {
            points.push([
                ((-p0[0] + 6 * p1[0] + p2[0]) / 6),
                ((-p0[1] + 6 * p1[1] + p2[1]) / 6),
                ((p1[0] + 6 * p2[0] - p3[0]) / 6),
                ((p1[1] + 6 * p2[1] - p3[1]) / 6),
                p2[0],
                p2[1]
            ]);
            p0 = p1;
            p1 = p2;
            p2 = p3;
            p3 = initPoints[i + 2] || p3;
        }
    }
    var d = "";
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        var n = point.length;
        if (!i) {
            d += (link ? "L" : "M") + (point[n - 2] + " " + point[n - 1]);
        }
        else if (n > 4) {
            d += "C" + point[0] + " " + point[1] + "\n\t\t\t\t" + point[2] + " " + point[3] + "\n\t\t\t\t" + point[4] + " " + point[5];
        }
        else {
            d += "S" + point[0] + " " + point[1] + "\n\t\t\t\t" + point[2] + " " + point[3];
        }
    }
    return d;
}
exports.default = spline;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComboboxEvents;
(function (ComboboxEvents) {
    ComboboxEvents["change"] = "change";
    ComboboxEvents["open"] = "open";
    ComboboxEvents["close"] = "close";
})(ComboboxEvents = exports.ComboboxEvents || (exports.ComboboxEvents = {}));
var ComboState;
(function (ComboState) {
    ComboState[ComboState["default"] = 0] = "default";
    ComboState[ComboState["error"] = 1] = "error";
    ComboState[ComboState["success"] = 2] = "success";
})(ComboState = exports.ComboState || (exports.ComboState = {}));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    simpleVaultText: "Drag & drop files or folders here or",
    simpleVaultLabel: "browse files"
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(53);
var main_1 = __webpack_require__(20);
var types_1 = __webpack_require__(11);
var editors_1 = __webpack_require__(185);
function handleMouse(row, col, conf, type, e) {
    conf.events.fire(type, [row, col, e]);
}
function getHandlers(row, column, conf) {
    return {
        onclick: [handleMouse, row, column, conf, types_1.GridEvents.cellClick],
        onmouseover: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseOver],
        onmousedown: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ondblclick: [handleMouse, row, column, conf, types_1.GridEvents.cellDblClick],
        oncontextmenu: [handleMouse, row, column, conf, types_1.GridEvents.cellRightClick]
    };
}
function getTreeCell(content, row, col, conf) {
    return dom_1.el(".dhx_grid-cell", __assign({ class: "dhx_tree-cell " + (col.$cellCss[row.id] || "") + " " + (row.$items ? "dhx_grid-expand-cell" : ""), style: {
            width: col.width,
            lineHeight: conf.rowHeight + "px",
            paddingLeft: 24 * row.$level
        }, dhx_id: row.id }, getHandlers(row, col, conf)), [
        row.$items ? dom_1.el(".dhx_grid-expand-cell-icon", {
            class: row.$opened ? "dxi dxi-chevron-up" : "dxi dxi-chevron-down",
            dhx_id: row.id,
        }) : null,
        dom_1.el(".dhx_tree-cell", {
            title: main_1.removeHTMLTags(row[col.id]),
            style: {
                width: col.width - row.$level * 10,
                height: "100%",
                textAlign: "left"
            }
        }, [content])
    ]);
}
function getEditorCell(row, col, conf) {
    return editors_1.getEditor(row, col, conf).toHTML();
}
function getCells(conf) {
    if (!conf.data || !conf.columns) {
        return [];
    }
    var pos = conf.$positions;
    var data = conf.data ? conf.data.slice(pos.yStart, pos.yEnd) : [];
    var columns = conf.columns.slice(pos.xStart, pos.xEnd);
    return data.map(function (row) {
        var rowCss = "";
        if (conf.rowCss) {
            rowCss = conf.rowCss(row);
        }
        if (row.$css) {
            rowCss += row.$css;
        }
        return dom_1.el(".dhx_grid-row", {
            "style": { height: conf.rowHeight },
            "dhx_grid-row": row.id,
            "class": rowCss
        }, columns.map(function (col) {
            var t = function (text, _row, _col) { return (text || text === 0) ? text : ""; };
            var template = col.template || t;
            var content = template(row[col.id], row, col);
            // ability to use domvm node as template result
            content = typeof content === "string" ? dom_1.el("div.dhx_cell-content", { ".innerHTML": content }) : content;
            var css = ((col.$cellCss[row.id] || "") + " dhx_" + col.type + "-cell").replace(/\s+/g, " ");
            var isEditable = conf.$editable && conf.$editable.row === row.id && conf.$editable.col === col.id;
            if (isEditable) {
                content = getEditorCell(row, col, conf);
                css += " dhx_grid-cell__editable";
            }
            if (conf.type === "tree" && conf.firstColId === col.id) {
                return getTreeCell(content, row, col, conf);
            }
            return dom_1.el(".dhx_grid-cell", __assign({ class: css, style: {
                    width: col.width,
                    lineHeight: conf.rowHeight + "px"
                }, _key: row.id + col.id }, getHandlers(row, col, conf), { title: main_1.removeHTMLTags(row[col.id]) }), [content]);
        }));
    });
}
exports.getCells = getCells;
function getSpans(conf) {
    var spanCells = [];
    var columns = conf.columns;
    if (!columns.length) {
        return null;
    }
    if (!conf.spans) {
        return null;
    }
    var spans = conf.spans.sort(function (a, b) {
        return (typeof a.row === "string" && typeof b.row === "string") ?
            a.row.localeCompare(b.row)
            : a.row - b.row;
    });
    var cellHeight = conf.rowHeight;
    var _loop_1 = function (i) {
        var row = spans[i].row;
        var col = spans[i].column;
        var spanHeight = spans[i].rowspan;
        var spanWidth = spans[i].colspan;
        var spanCss = spans[i].css;
        // [todo]
        if (spanHeight === 1) {
            return "continue";
        }
        var colIndex = core_1.findIndex(columns, function (item) { return "" + item.id === "" + col; });
        var rowIndex = core_1.findIndex(conf.data, function (item) { return "" + item.id === "" + row; });
        if (colIndex < 0 || rowIndex < 0) {
            return "continue";
        }
        var currCol = columns[colIndex];
        var currRow = conf.data[rowIndex];
        var content = spans[i].text ?
            spans[i].text
            : currRow[col] === undefined ? "" : currRow[col];
        var tooltipText = content;
        var t = function (text, _row, _col) { return (text || text === 0) ? text : ""; };
        var template = currCol.template || t;
        content = template(content, currRow, currCol);
        content = typeof content === "string" ? dom_1.el("div.dhx_span-cell-content", { ".innerHTML": content }) : content;
        var top_1 = conf.rowHeight * rowIndex;
        var left = 0;
        for (var s = colIndex - 1; s >= 0; s--) {
            left += columns[s].width;
        }
        var css = currCol.header[0].text ? "dhx_span-cell" : "dhx_span-cell dhx_span-cell--title";
        if (spanCss) {
            css += " " + spanCss;
        }
        if (rowIndex === 0) {
            css += " dhx_span-first-row";
        }
        // [dirty]
        if (colIndex === 0) {
            css += " dhx_span-first-col";
        }
        var rowspanWithLastCol = colIndex === columns.length - 1;
        var colspanWithLastCol = colIndex + spanWidth === columns.length;
        if (rowspanWithLastCol || colspanWithLastCol) {
            css += " dhx_span-last-col";
        }
        if (!spanWidth) {
            css += " dhx_span-" + (currCol.type || "string") + "-cell";
        }
        else {
            css += " dhx_span-string-cell";
        }
        var width = spanWidth > 1 ? cells_1.getWidth(conf.columns, spanWidth, colIndex) : currCol.width;
        spanCells.push(dom_1.el("div", {
            class: css,
            style: {
                width: width,
                height: (spanHeight || 1) * cellHeight,
                top: top_1,
                left: left,
                lineHeight: conf.rowHeight + "px"
            },
            title: main_1.removeHTMLTags(tooltipText),
        }, [content]));
    };
    for (var i = 0; i < spans.length; i++) {
        _loop_1(i);
    }
    return spanCells;
}
exports.getSpans = getSpans;
function getShifts(conf) {
    var columnsLeft = conf.columns.slice(0, conf.$positions.xStart);
    return {
        x: columnsLeft.reduce(function (sum, col) { return sum += col.width; }, 0),
        y: conf.$positions.yStart * conf.rowHeight
    };
}
exports.getShifts = getShifts;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(53);
var main_1 = __webpack_require__(20);
var types_1 = __webpack_require__(11);
var content_1 = __webpack_require__(77);
function handleMouse(col, config, type, e) {
    config.events.fire(type, [col, e]);
}
function getHandlers(column, rowName, config) {
    return {
        onclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellClick"]],
        onmouseover: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseOver"]],
        onmousedown: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ondblclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellDblClick"]],
        oncontextmenu: [handleMouse, column, config, types_1.GridEvents[rowName + "CellRightClick"]]
    };
}
function buildRows(columns, name) {
    var header = columns.map(function (col) { return col[name] || [{}]; });
    return main_1.transpose(header);
}
function getCustomContentCell(cell, column, config, rowName, css) {
    if (css === void 0) { css = ""; }
    var rowHeight = config[name + "RowHeight"] || 40;
    var type = column.type ? "dhx_" + column.type + "-cell" : "dhx_string_cell";
    return dom_1.el(".dhx_grid-" + rowName + "-cell.dhx_grid-custom-content-cell." + type, __assign({ class: css, style: {
            width: column.width,
            lineHeight: rowHeight + 1 + "px"
        } }, getHandlers(column, rowName, config)), [
        content_1.content[cell.content] && content_1.content[cell.content].toHtml(column, config)
    ]);
}
function getRows(config, rowsConfig) {
    if (!config.data || !config.columns) {
        return [];
    }
    var rowName = rowsConfig.name;
    var columns = config.currentColumns;
    var rowHeight = config[rowName + "RowHeight"] || 40;
    var rows = buildRows(columns, rowName);
    return rows.map(function (row) { return dom_1.el(".dhx_" + rowName + "-row", { style: { height: rowHeight } }, row.map(function (cell, i) {
        var css = cell.css || "";
        var column = columns[i];
        var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
        if (config.sortBy && "" + column.id === config.sortBy && !cell.content) {
            sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
            css += " dhx_grid-" + rowName + "-cell--sorted ";
        }
        var sortIconVisible = cell.text && config.headerSort && rowName !== "footer";
        // [todo]
        if (sortIconVisible) {
            css += " dhx_grid-header-cell--sortable";
        }
        var isFirstCol = i === 0 ? "dhx_first-column-cell" : "";
        var isLastCol = i === columns.length - 1 ? "dhx_last-column-cell" : "";
        if (!cell.content) {
            css += " dhx_grid-header-cell--" + (column.type === "number" ? "align_right" : "align_left") + " ";
        }
        css += isFirstCol + " " + isLastCol;
        if (cell.content) {
            return getCustomContentCell(cell, column, config, rowName, css);
        }
        return dom_1.el(".dhx_grid-" + rowName + "-cell", __assign({ class: css.trim(), dhx_id: column.id, _key: i, style: {
                width: column.width,
                lineHeight: rowHeight + 1 + "px"
            } }, getHandlers(column, rowName, config), { title: main_1.removeHTMLTags(cell.text) }), [
            dom_1.el("div", { ".innerHTML": cell.text }),
            sortIconVisible && dom_1.el("div", { class: sortIconCss }, cell.text)
        ]);
    })); });
}
exports.getRows = getRows;
function getSpans(config, rowsConfig) {
    var cols = config.columns;
    var rows = main_1.transpose(cols.map(function (col) { return col[rowsConfig.name] || []; }));
    var height = config[rowsConfig.name + "RowHeight"] || 40;
    var leftShift = 0;
    return rows.map(function (row, i) {
        leftShift = 0;
        return dom_1.el(".dhx_span-row", { style: { top: height * i + "px", height: height } }, row.map(function (cell, cellIdx) {
            var col = cols[cellIdx];
            leftShift += col.width;
            var isFirstCol = cellIdx === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = (cellIdx === cols.length - 1)
                || ((cell.colspan || 0) + (cellIdx - 1) >= cols.length - 1) ? "dhx_last-column-cell" : "";
            var spanHeight = height;
            if (cell.rowspan) {
                spanHeight = spanHeight * cell.rowspan - 1;
            }
            var sortIconVisible = cell.rowspan
                && cell.text
                && config.headerSort
                && rowsConfig.name !== "footer";
            var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
            if (config.sortBy && "" + col.id === config.sortBy && !cell.content) {
                sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
            }
            var css = isFirstCol + " " + isLastCol + " " + (cell.rowspan ? "dhx_span-cell__rowspan" : "");
            if (sortIconVisible) {
                css += " dhx_grid-header-cell  dhx_grid-header-cell--sortable";
            }
            if (!cell.content) {
                css += " dhx_grid-header-cell--" + (col.type === "number" ? "align_right" : "align_left") + " ";
            }
            return (cell.colspan || cell.rowspan) ?
                dom_1.el(".dhx_span-cell", {
                    style: {
                        width: cells_1.getWidth(config.columns, cell.colspan, cellIdx),
                        height: spanHeight,
                        left: leftShift - col.width,
                        top: height * i,
                        lineHeight: spanHeight + "px"
                    },
                    class: css.trim(),
                    title: main_1.removeHTMLTags(cell.text),
                    dhx_id: col.id
                }, [
                    dom_1.el("div", { ".innerHTML": cell.text }),
                    sortIconVisible && dom_1.el("div", { class: sortIconCss }, cell.text)
                ])
                : null;
        }).filter(function (cell) { return cell; }));
    });
}
exports.getSpans = getSpans;
function getFixedRows(config, rowsConfig) {
    var _a;
    var rows = getRows(config, rowsConfig);
    var spans = getSpans(config, rowsConfig);
    var fixedCols = null;
    if (rowsConfig.name === "footer" && !rowsConfig.sticky) {
        fixedCols = config.splitAt >= 0 && getRows(__assign({}, config, { currentColumns: config.columns.slice(0, config.splitAt), $positions: __assign({}, config.$positions, { xStart: 0, xEnd: config.splitAt }) }), rowsConfig);
    }
    var styles = (_a = {
            position: "sticky"
        },
        _a[rowsConfig.position] = 0,
        _a);
    var left;
    if (!rowsConfig.sticky) {
        styles.left = -config.scroll.left;
        left = -config.scroll.left;
        styles.position = "relative";
    }
    var BORDERS = 2;
    return dom_1.el(".dhx_" + rowsConfig.name + "-wrapper", {
        class: rowsConfig.sticky ? "" : "dhx_compatible-" + rowsConfig.name,
        style: __assign({}, styles, { left: rowsConfig.sticky ? left : 0, height: config[rowsConfig.name + "Height"], width: rowsConfig.sticky ? config.$totalWidth : rowsConfig.wrapper.width - BORDERS })
    }, [
        dom_1.el(".dhx_grid-" + rowsConfig.name, {
            style: {
                height: config[rowsConfig.name + "Height"],
                left: left,
                paddingLeft: rowsConfig.shifts.x,
                width: config.$totalWidth,
            }
        }, [
            dom_1.el(".dhx_" + rowsConfig.name + "-rows", rows.slice()),
            dom_1.el(".dhx_" + rowsConfig.name + "-spans", {
                style: {
                    marginLeft: -rowsConfig.shifts.x
                }
            }, spans),
            fixedCols && dom_1.el(".dhx_" + rowsConfig.name + "-fixed-cols", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: config.scroll.left + "px",
                    height: "100%"
                }
            }, fixedCols)
        ]),
        dom_1.el("div", { style: { width: config.$totalWidth } })
    ]);
}
exports.getFixedRows = getFixedRows;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(11);
var inputDelay;
function onInput(eventSystem, colId, filter, filterObj, e) {
    var inputHandler = function () {
        filterObj.value[colId] = e.target.value;
        eventSystem.fire(types_1.GridEvents.headerInput, [e.target.value, colId, filter]);
    };
    if (filter === "selectFilter") {
        inputHandler();
        return;
    }
    if (inputDelay) {
        clearTimeout(inputDelay);
    }
    inputDelay = setTimeout(inputHandler, 250);
}
function applyMathMethod(column, config, method, validate) {
    var id = column.id;
    var columnData = validate ? validate(id, config.data) : config.data.reduce(function (items, item) {
        if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
            items.push(parseFloat(item[id]));
        }
        return items;
    }, []);
    // [todo] move to treegrid
    var roots = columnData;
    if (config.type === "tree") {
        roots = config.data.reduce(function (total, item) {
            if (item.$level === 0) {
                if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                    total.push((parseFloat(item[id]) || 0));
                }
                else {
                    var value_1 = 0;
                    config.datacollection.eachChild(item.id, function (cell) {
                        if (!config.datacollection.haveItems(cell.id)) {
                            value_1 += parseFloat(cell[id]);
                        }
                    });
                    total.push(value_1);
                }
            }
            return total;
        }, []);
    }
    return method(columnData, roots);
}
exports.content = {
    inputFilter: {
        toHtml: function (column, config) {
            return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-magnify", [
                dom_1.el("input", {
                    type: "text",
                    class: "dhx_input dhx_grid-filter",
                    oninput: [onInput, config.events, column.id, "inputFilter", this],
                    _key: column.id,
                    value: this.value[column.id] || ""
                })
            ]);
        },
        match: function (value, match) { return new RegExp("" + match, "i").test(value); },
        value: {}
    },
    selectFilter: {
        toHtml: function (column, config) {
            return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-menu-down", [
                dom_1.el("select.dxi.dxi-menu-down", {
                    type: "text",
                    class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                    onchange: [onInput, config.events, column.id, "selectFilter", this],
                    _key: column.id,
                    value: this.value[column.id] || ""
                }, [
                    dom_1.el("option", { value: "" }, "")
                ].concat(column.$uniqueData.map(function (val) { return val && dom_1.el("option", { value: val }, val); })))
            ]);
        },
        match: function (value, match) { return value === match; },
        value: {}
    },
    sum: {
        calculate: function (_col, roots) { return roots.reduce(function (sum, c) { return sum += parseFloat(c) || 0; }, 0).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    avg: {
        calculate: function (_col, roots) { return (roots.reduce(function (sum, c) { return sum += c; }, 0) / _col.length).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    min: {
        calculate: function (col) { return Math.min.apply(Math, col).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    max: {
        calculate: function (col) { return Math.max.apply(Math, col).toFixed(3); },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate); }
    },
    count: {
        calculate: function (_col, roots) {
            // [todo]
            return roots.reduce(function (count, c) { return count += c; }, 0);
        },
        validate: function (colId, data) {
            return data.reduce(function (items, item) {
                if (item[colId] !== undefined && item[colId] !== "") {
                    if (isNaN(item)) {
                        items.push(1);
                    }
                    else {
                        items.push(item);
                    }
                }
                return items;
            }, []);
        },
        toHtml: function (column, config) { return applyMathMethod(column, config, this.calculate, this.validate); }
    }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var TreeGridCollection = /** @class */ (function (_super) {
    __extends(TreeGridCollection, _super);
    function TreeGridCollection(config, events) {
        return _super.call(this, config, events) || this;
    }
    TreeGridCollection.prototype.eachChild = function (id, cb, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        checkItem = checkItem || (function (item) { return item.$opened !== false; });
        _super.prototype.eachChild.call(this, id, cb, direct, checkItem);
    };
    TreeGridCollection.prototype.getMaxLevel = function () {
        var _this = this;
        var maxLevel = 1;
        this.map(function (el) {
            var level = _this.getLevel(el.id);
            maxLevel = Math.max(level, maxLevel);
        });
        return maxLevel;
    };
    TreeGridCollection.prototype.getLevel = function (id) {
        var level = 0;
        this.eachParent(id, function () {
            level++;
        });
        return level;
    };
    TreeGridCollection.prototype.serialize = function (driver) {
        var _this = this;
        if (driver === void 0) { driver = ts_data_1.DataDriver.json; }
        var data = [];
        this.eachChild(this.getRoot(), function (el) {
            if (!el) {
                return;
            }
            var cell = __assign({}, el, { $level: _this.getLevel(el.id), $items: _this.haveItems(el.id) });
            if (_this.haveItems(el.id) && el.$opened === undefined) {
                el.$opened = cell.$opened = true;
            }
            data.push(cell);
        });
        var dataDriver = ts_data_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeGridCollection.prototype.getPlainIndex = function (id) {
        return Object.keys(this._pull).indexOf(id);
    };
    TreeGridCollection.prototype.map = function (cb, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(cb.call(this, this._childs[parent][i], i));
            if (direct) {
                if (this._childs[parent][i].$opened) {
                    var childResult = this.map(cb, this._childs[parent][i].id, direct);
                    result = result.concat(childResult);
                }
            }
        }
        return result;
    };
    // [todo]
    TreeGridCollection.prototype.getId = function (index) {
        return Object.keys(this._pull)[index];
    };
    TreeGridCollection.prototype._parse_data = function (data, parent) {
        if (parent === void 0) { parent = this._root; }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            obj.id = obj.id ? obj.id.toString() : core_1.uid();
            obj.parent = obj.parent ? obj.parent.toString() : parent;
            this._pull[obj.id] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            obj.$level = this.getLevel(obj.id);
            if (obj.items && obj.items instanceof Object) {
                obj.$opened = true;
                this._parse_data(obj.items, obj.id);
            }
        }
        this._checkItems();
    };
    TreeGridCollection.prototype._checkItems = function () {
        var _this = this;
        this.eachChild(this._root, function (item) {
            item.$items = item.$opened = _this.haveItems(item.id);
        });
    };
    return TreeGridCollection;
}(ts_data_1.TreeCollection));
exports.TreeGridCollection = TreeGridCollection;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SidebarEvents;
(function (SidebarEvents) {
    SidebarEvents["toggle"] = "toggle";
})(SidebarEvents = exports.SidebarEvents || (exports.SidebarEvents = {}));


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RenderMode;
(function (RenderMode) {
    RenderMode["top"] = "top";
    RenderMode["bottom"] = "bottom";
    RenderMode["left"] = "left";
    RenderMode["right"] = "right";
})(RenderMode = exports.RenderMode || (exports.RenderMode = {}));
var TabbarEvents;
(function (TabbarEvents) {
    TabbarEvents["change"] = "change";
    TabbarEvents["close"] = "close";
})(TabbarEvents = exports.TabbarEvents || (exports.TabbarEvents = {}));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var Keymanager_1 = __webpack_require__(13);
var EditorMode;
(function (EditorMode) {
    EditorMode["editText"] = "text";
    EditorMode["selectItem"] = "select";
})(EditorMode = exports.EditorMode || (exports.EditorMode = {}));
var EditorEvents;
(function (EditorEvents) {
    EditorEvents["begin"] = "begin";
    EditorEvents["end"] = "end";
})(EditorEvents = exports.EditorEvents || (exports.EditorEvents = {}));
var Editor = /** @class */ (function () {
    function Editor() {
        var _this = this;
        this.events = new events_1.EventSystem();
        this._documentClick = function (e) {
            var id = html_1.locate(e, "id");
            if (id !== "input_" + _this._item.id) {
                _this._removeClickListener();
                _this._finishEdit();
            }
        };
        this._handlers = {
            editText: function (e) {
                _this._currentValue = e.target.value;
            },
            itemSelected: function (e) {
                _this._currentValue = e.target.value;
                _this._finishEdit();
            }
        };
    }
    Editor.prototype.edit = function (targetId, config) {
        if (this._active && this._item !== config.item) {
            this._finishEdit();
        }
        this._active = true;
        this.events.fire(EditorEvents.begin, [targetId]);
        this._targetId = targetId;
        this.config = config;
        this._item = config.item;
        this._currentValue = this._item.value;
        this._initOuterClick();
        this._addHotkeys();
        return this._draw();
    };
    Editor.prototype._draw = function () {
        var _this = this;
        if (this.config.mode === EditorMode.selectItem) {
            var opts = this.config.options;
            return dom_1.el("select", {
                id: "input_" + this._item.id,
                dhx_id: this._item.id,
                onchange: this._handlers.itemSelected
            }, opts.map(function (item) { return dom_1.el("option", {
                class: "editor-select",
                value: item,
                selected: _this._currentValue === item,
                style: { border: "1px solid" }
            }, item); }));
        }
        else {
            return dom_1.el("input", {
                _hooks: {
                    didInsert: function (newNode) {
                        newNode.el.focus();
                    }
                },
                id: "input_" + this._item.id,
                class: "dhx_tree-input",
                oninput: this._handlers.editText,
                value: this._item.value,
                autofocus: true
            });
        }
    };
    Editor.prototype._addHotkeys = function () {
        var _this = this;
        Keymanager_1.keyManager.addHotKey("escape", function () {
            _this._finishEdit();
        }, this);
        Keymanager_1.keyManager.addHotKey("enter", function () {
            _this._finishEdit();
        }, this);
    };
    Editor.prototype._removeHotkeys = function () {
        Keymanager_1.keyManager.removeHotKey(null, this);
    };
    Editor.prototype._finishEdit = function () {
        this.events.fire(EditorEvents.end, [this._targetId, this._item.id, this._currentValue]);
        this._clear();
    };
    Editor.prototype._clear = function () {
        this._active = false;
        this._removeClickListener();
        this._removeHotkeys();
    };
    Editor.prototype._initOuterClick = function () {
        document.addEventListener("click", this._documentClick);
    };
    Editor.prototype._removeClickListener = function () {
        document.removeEventListener("click", this._documentClick);
    };
    return Editor;
}());
exports.default = new Editor();


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectStatus;
(function (SelectStatus) {
    SelectStatus[SelectStatus["unselected"] = 0] = "unselected";
    SelectStatus[SelectStatus["selected"] = 1] = "selected";
    SelectStatus[SelectStatus["indeterminate"] = 2] = "indeterminate";
})(SelectStatus = exports.SelectStatus || (exports.SelectStatus = {}));
var ItemIcon;
(function (ItemIcon) {
    ItemIcon["file"] = "file";
    ItemIcon["folder"] = "folder";
    ItemIcon["openFolder"] = "openFolder";
})(ItemIcon = exports.ItemIcon || (exports.ItemIcon = {}));
var TreeEvents;
(function (TreeEvents) {
    TreeEvents["itemClick"] = "itemclick";
    TreeEvents["itemDblClick"] = "itemdblclick";
    TreeEvents["itemContextMenu"] = "itemcontextmenu";
})(TreeEvents = exports.TreeEvents || (exports.TreeEvents = {}));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(84);
/* tslint:disable */
var CssManager_1 = __webpack_require__(85);
exports.cssManager = CssManager_1.cssManager;
var events_1 = __webpack_require__(2);
exports.EventSystem = events_1.EventSystem;
var ts_vault_1 = __webpack_require__(54);
exports.Uploader = ts_vault_1.Uploader;
var ts_layout_1 = __webpack_require__(12);
exports.Layout = ts_layout_1.Layout;
var ts_list_1 = __webpack_require__(36);
exports.List = ts_list_1.List;
var ts_calendar_1 = __webpack_require__(28);
exports.Calendar = ts_calendar_1.Calendar;
var ts_colorpicker_1 = __webpack_require__(31);
exports.Colorpicker = ts_colorpicker_1.Colorpicker;
var ts_chart_1 = __webpack_require__(136);
exports.Chart = ts_chart_1.Chart;
var ts_combobox_1 = __webpack_require__(47);
exports.Combobox = ts_combobox_1.Combobox;
var ts_data_1 = __webpack_require__(7);
exports.DataCollection = ts_data_1.DataCollection;
exports.TreeCollection = ts_data_1.TreeCollection;
exports.DataProxy = ts_data_1.DataProxy;
exports.dataDrivers = ts_data_1.dataDrivers;
var ts_dataview_1 = __webpack_require__(162);
exports.DataView = ts_dataview_1.DataView;
var ts_form_1 = __webpack_require__(166);
exports.Form = ts_form_1.Form;
var ts_grid_1 = __webpack_require__(51);
exports.Grid = ts_grid_1.Grid;
var ts_treegrid_1 = __webpack_require__(190);
exports.TreeGrid = ts_treegrid_1.TreeGrid;
exports.TreeGridCollection = ts_treegrid_1.TreeGridCollection;
var ts_message_1 = __webpack_require__(19);
exports.message = ts_message_1.message;
exports.alert = ts_message_1.alert;
exports.confirm = ts_message_1.confirm;
exports.enableTooltip = ts_message_1.enableTooltip;
exports.disableTooltip = ts_message_1.disableTooltip;
exports.tooltip = ts_message_1.tooltip;
var ts_menu_1 = __webpack_require__(193);
exports.Menu = ts_menu_1.Menu;
exports.ContextMenu = ts_menu_1.ContextMenu;
var ts_popup_1 = __webpack_require__(10);
exports.Popup = ts_popup_1.Popup;
var ts_ribbon_1 = __webpack_require__(196);
exports.Ribbon = ts_ribbon_1.Ribbon;
var ts_sidebar_1 = __webpack_require__(198);
exports.Sidebar = ts_sidebar_1.Sidebar;
var ts_slider_1 = __webpack_require__(30);
exports.Slider = ts_slider_1.Slider;
var ts_tabbar_1 = __webpack_require__(200);
exports.Tabbar = ts_tabbar_1.Tabbar;
var ts_timepicker_1 = __webpack_require__(29);
exports.Timepicker = ts_timepicker_1.Timepicker;
var ts_toolbar_1 = __webpack_require__(27);
exports.Toolbar = ts_toolbar_1.Toolbar;
var ts_tree_1 = __webpack_require__(202);
exports.Tree = ts_tree_1.Tree;
var ts_window_1 = __webpack_require__(205);
exports.Window = ts_window_1.Window;
var ts_colorpicker_2 = __webpack_require__(31);
var en_1 = __webpack_require__(34);
var en_2 = __webpack_require__(39);
var en_3 = __webpack_require__(48);
var en_4 = __webpack_require__(74);
var en_5 = __webpack_require__(65);
var w = window;
exports.i18n = (w.dhx && w.dhx.i18n) ? w.dhx.i18 : {};
exports.i18n.setLocale = function (component, value) {
    var target = exports.i18n[component];
    for (var key in value) {
        target[key] = value[key];
    }
};
exports.i18n.colorpicker = exports.i18n.colorpicker || ts_colorpicker_2.locale;
exports.i18n.message = exports.i18n.message || en_1.default;
exports.i18n.calendar = exports.i18n.calendar || en_2.default;
exports.i18n.combobox = exports.i18n.combobox || en_3.default;
exports.i18n.form = exports.i18n.form || en_4.default;
exports.i18n.timepicker = exports.i18n.timepicker || en_5.default;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var CssManager = /** @class */ (function () {
    function CssManager() {
        this._classes = {};
        var styles = document.createElement("style");
        styles.id = "dhx_generated_styles";
        this._styleCont = document.head.appendChild(styles);
    }
    CssManager.prototype.update = function () {
        // move style element to the bottom of head
        document.head.appendChild(this._styleCont);
        this._styleCont.innerHTML = this._generateCss();
    };
    CssManager.prototype.remove = function (className) {
        delete this._classes[className];
        this.update();
    };
    CssManager.prototype.add = function (cssList, customId, silent) {
        if (silent === void 0) { silent = false; }
        var cssString = this._toCssString(cssList);
        var id = this._findSameClassId(cssString);
        if (id && customId && customId !== id) {
            this._classes[customId] = this._classes[id];
            return customId;
        }
        if (id) {
            return id;
        }
        return this._addNewClass(cssString, customId, silent);
    };
    CssManager.prototype.get = function (className) {
        if (this._classes[className]) {
            var props = {};
            var css = this._classes[className].split(";");
            for (var _i = 0, css_1 = css; _i < css_1.length; _i++) {
                var item = css_1[_i];
                if (item) {
                    var prop = item.split(":");
                    props[prop[0]] = prop[1];
                }
            }
            return props;
        }
        return null;
    };
    CssManager.prototype._findSameClassId = function (cssString) {
        for (var key in this._classes) {
            if (cssString === this._classes[key]) {
                return key;
            }
        }
        return null;
    };
    CssManager.prototype._addNewClass = function (cssString, customId, silent) {
        var id = customId || "dhx_generated_class_" + core_1.uid();
        this._classes[id] = cssString;
        if (!silent) {
            this.update();
        }
        return id;
    };
    CssManager.prototype._toCssString = function (cssList) {
        var cssString = "";
        for (var key in cssList) {
            var prop = cssList[key];
            var name_1 = key.replace(/[A-Z]{1}/g, function (letter) { return "-" + letter.toLowerCase(); });
            cssString += name_1 + ":" + prop + ";";
        }
        return cssString;
    };
    CssManager.prototype._generateCss = function () {
        var result = "";
        for (var key in this._classes) {
            var cssProps = this._classes[key];
            result += "." + key + "{" + cssProps + "}\n";
        }
        return result;
    };
    return CssManager;
}());
exports.CssManager = CssManager;
exports.cssManager = new CssManager();


/***/ }),
/* 86 */
/***/ (function(module, exports) {

if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
        proto.mozMatchesSelector || proto.msMatchesSelector ||
        proto.oMatchesSelector || proto.webkitMatchesSelector;
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(88);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32), __webpack_require__(89)))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(18);
var types_1 = __webpack_require__(17);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        return this._parent.loadData = url.load().then(function (data) {
            _this._parent.removeAll();
            // const parcedData = this.parse(data, driver);
            return _this.parse(data, driver);
        }).catch(function (error) {
            _this._parent.events.fire(types_1.DataEvents.loadError, [error]);
        });
    };
    Loader.prototype.parse = function (data, driver) {
        if (driver === void 0) { driver = "json"; }
        if (driver === "json" && !helpers_1.hasJsonOrArrayStructure(data)) {
            this._parent.events.fire(types_1.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]);
        }
        driver = helpers_1.toDataDriver(driver);
        data = driver.toJsonArray(data);
        this._parent.$parse(data);
        return data;
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                helpers_1.dhxWarning("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise.then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        }).catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            helpers_1.dhxWarning(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            _loop_1(el);
        }
        this._parent.saveData.then(function () {
            _this._saving = false;
        });
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        el.promise = url.save(el.obj, el.status);
        el.promise.then(function () {
            _this._removeFromOrder(el);
        }).catch(function (err) {
            el.saving = false;
            el.error = true;
            helpers_1.dhxError(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // tslint:disable-next-line:prefer-conditional-expression
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !helpers_1.isEqualObj(item, el); });
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_1 = __webpack_require__(92);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.serialize = function (data) {
        return xml_1.jsonToXML(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
        if (!childNodes || !childNodes.length) {
            return null;
        }
        return this._getRows(childNodes);
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        return (new DOMParser()).parseFromString(data, "text/xml");
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_1 = _a.name, value = _a.value;
                result[name_1] = this._toType(value);
            }
        }
        if (node.nodeType === 3) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        if (!isNaN(val)) {
            return Number(val);
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var INDENT_STEP = 4;
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<" + root + ">";
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + ("\n</" + root + ">");
}
exports.jsonToXML = jsonToXML;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">\n");
            result += item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") + "\n";
            result += ws(indent + INDENT_STEP) + ("</" + key + ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">" + item[key] + "</" + key + ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(18);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by) {
        var _this = this;
        if (by.rule && typeof by.rule === "function") {
            this._sort(array, by);
        }
        else if (by.by) {
            by.rule = function (a, b) {
                var aa = _this._checkVal(by.as, a[by.by]);
                var bb = _this._checkVal(by.as, b[by.by]);
                return helpers_1.naturalCompare(aa.toString(), bb.toString());
            };
            this._sort(array, by);
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1
        };
        return arr.sort(function (a, b) {
            return conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
        });
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var datacollection_1 = __webpack_require__(56);
var dataproxy_1 = __webpack_require__(25);
var helpers_1 = __webpack_require__(18);
var types_1 = __webpack_require__(17);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        var root = _this._root = "_ROOT_" + core_1.uid();
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (obj, index, parent) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (typeof obj !== "object") {
            obj = {
                value: obj
            };
        }
        if (Array.isArray(obj)) {
            obj.map(function (element, key) {
                if (key > 0 && index !== -1) {
                    index = index + 1;
                }
                element.parent = element.parent ? element.parent.toString() : parent;
                var id = _super.prototype.add.call(_this, element, index);
                if (Array.isArray(element.items)) {
                    for (var _i = 0, _a = element.items; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.add(item, -1, element.id);
                    }
                }
                return id;
            });
        }
        else {
            obj.parent = obj.parent ? obj.parent.toString() : parent;
            var id = _super.prototype.add.call(this, obj, index);
            if (Array.isArray(obj.items)) {
                for (var _i = 0, _a = obj.items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.add(item, -1, obj.id);
                }
            }
            return id;
        }
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (id) {
            var childs = this._childs[id].slice();
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return core_1.findIndex(this._childs[parent], function (item) { return item.id === id; });
    };
    TreeCollection.prototype.sort = function (by) {
        var _this = this;
        if (!by) {
            this._childs = {};
            // [dirty]
            this._parse_data(Object.keys(this._pull).map(function (key) { return _this._pull[key]; }));
            if (this._filters) {
                for (var key in this._filters) {
                    var filter = this._filters[key];
                    this.filter(filter.rule, filter.config);
                }
            }
        }
        else {
            for (var key in this._childs) {
                this._sort.sort(this._childs[key], by);
            }
            if (this._initChilds && Object.keys(this._initChilds).length) {
                for (var key in this._initChilds) {
                    this._sort.sort(this._initChilds[key], by);
                }
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.map = function (cb, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(cb.call(this, this._childs[parent][i], i));
            if (direct) {
                var childResult = this.map(cb, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype.filter = function (rule, config) {
        if (config === void 0) { config = {}; }
        if (!rule) {
            this.restoreOrder();
            return;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        config.type = config.type || types_1.TreeFilterType.leafs;
        // [todo] we can store multiple filter rules, like in datacollection
        this._filters = {};
        this._filters._ = {
            rule: rule,
            config: config
        };
        var newChilds = {};
        this._recursiveFilter(rule, config, this._root, 0, newChilds);
        var parents = [];
        var _loop_1 = function (i) {
            if (newChilds[i].length > 0 && newChilds[i] !== newChilds[this_1.getRoot()]) {
                var item = newChilds[this_1.getRoot()].find(function (element) {
                    if (element.id === i) {
                        return element;
                    }
                });
                if (item) {
                    parents.push(item);
                }
            }
        };
        var this_1 = this;
        for (var i in newChilds) {
            _loop_1(i);
        }
        newChilds[this.getRoot()] = parents;
        this._childs = newChilds;
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = helpers_1.copyWithoutInner(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = core_1.uid();
        }
        if (!helpers_1.isTreeCollection(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                this.copy(childId, childIndex, target, id);
            }
        }
        return id;
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (target !== this) {
            if (!helpers_1.isTreeCollection(target)) { // move to datacollection
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        if (!this.haveItems(targetId)) {
            this._childs[targetId] = [];
        }
        if (index === -1) {
            index = this._childs[targetId].push(spliced);
        }
        else {
            this._childs[targetId].splice(index, 0, spliced);
        }
        this.events.fire(types_1.DataEvents.change);
        return id;
    };
    TreeCollection.prototype.eachChild = function (id, cb, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            cb.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, cb, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = "json"; }
        var url = this.config.autoload + "?id=" + id;
        var proxy = new dataproxy_1.DataProxy(url);
        proxy.load().then(function (data) {
            driver = helpers_1.toDataDriver(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = "json"; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, cb, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            cb.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        cb.call(this, parent);
        this.eachParent(item.parent, cb);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return item.id === id ? canCopy = false : null; }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    TreeCollection.prototype._removeAll = function (id) {
        var _a;
        if (id) {
            var childs = this._childs[id].slice();
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        if (parent === void 0) { parent = this._root; }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (typeof obj !== "object") {
                obj = {
                    value: obj
                };
            }
            obj.id = obj.id ? obj.id.toString() : core_1.uid();
            obj.parent = obj.parent ? obj.parent.toString() : parent;
            this._pull[obj.id] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return !condition(item) || rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        else if (rule.by && rule.match) {
            var customRule = function (item) { return !condition(item) || item[rule.by].toString().toLowerCase().indexOf(rule.match.toString().toLowerCase()) !== -1; };
            newChilds[current] = childs.filter(customRule);
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items") {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var CollectionStore_1 = __webpack_require__(96);
var types_1 = __webpack_require__(17);
var helpers_1 = __webpack_require__(18);
function getPosition(e) {
    var y = e.clientY;
    var element = html_1.locateNode(e);
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    var _a = treeLine.getBoundingClientRect(), top = _a.top, height = _a.height;
    return (y - top) / height;
}
function dragEventContent(element, elements) {
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.maxHeight = rect.height + "px";
    clone.style.opacity = "0.6";
    ghost.appendChild(clone);
    if (elements && elements.length) {
        elements.forEach(function (node, key) {
            var nodeClone = node.cloneNode(true);
            nodeClone.style.width = rect.width + "px";
            nodeClone.style.height = rect.height + "px";
            nodeClone.style.maxHeight = rect.height + "px";
            nodeClone.style.top = ((key + 1) * 12 - rect.height) - (rect.height * key) + "px";
            nodeClone.style.left = (key + 1) * 12 + "px";
            nodeClone.style.opacity = "0.6";
            nodeClone.style.zIndex = "" + (-key - 1);
            ghost.appendChild(nodeClone);
        });
    }
    ghost.className = "dhx_drag-ghost";
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    return ghost;
}
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._selectedIds = [];
        this._onMouseMove = function (e) {
            if (!_this._transferData.id) {
                return;
            }
            var pageX = e.pageX, pageY = e.pageY;
            if (!_this._transferData.ghost) {
                if (Math.abs(_this._transferData.x - pageX) < 3 && Math.abs(_this._transferData.y - pageY) < 3) {
                    return;
                }
                else {
                    var ghost = _this._onDragStart(_this._transferData.id, _this._transferData.targetId);
                    if (!ghost) {
                        _this._endDrop();
                        return;
                    }
                    else {
                        _this._transferData.ghost = ghost;
                        document.body.appendChild(_this._transferData.ghost);
                    }
                }
            }
            _this._moveGhost(pageX, pageY);
            _this._onDrag(e);
        };
        this._onMouseUp = function () {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop();
            }
            else {
                _this._endDrop();
            }
            document.removeEventListener("mousemove", _this._onMouseMove);
            document.removeEventListener("mouseup", _this._onMouseUp);
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (e, selectedIds, itemsForGhost) {
        if (e.which !== 1) {
            return;
        }
        e.preventDefault();
        document.addEventListener("mousemove", this._onMouseMove);
        document.addEventListener("mouseup", this._onMouseUp);
        var item = html_1.locateNode(e, "dhx_id");
        var id = item && item.getAttribute("dhx_id");
        var targetId = html_1.locate(e, "dhx_widget_id");
        if (selectedIds && selectedIds.indexOf(id) !== -1 && selectedIds.length > 1) {
            this._selectedIds = selectedIds;
            this._itemsForGhost = itemsForGhost;
        }
        else {
            this._selectedIds = [];
            this._itemsForGhost = null;
        }
        if (id && targetId) {
            var _a = html_1.getBox(item), left = _a.left, top_1 = _a.top;
            this._transferData.initXOffset = e.pageX - left;
            this._transferData.initYOffset = e.pageY - top_1;
            this._transferData.x = e.pageX;
            this._transferData.y = e.pageY;
            this._transferData.targetId = targetId;
            this._transferData.id = id;
            this._transferData.item = item;
        }
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function () {
        if (!this._canMove) {
            this._endDrop();
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        var config = target && target.config;
        if (!target || config.dragMode === types_1.DragMode.source) {
            this._endDrop();
            return;
        }
        if (target.events.fire(types_1.DragEvents.beforeDrop, [this._lastId, this._transferData.target])) {
            var to = {
                id: this._lastId,
                target: target
            };
            var from = {
                id: this._transferData.id,
                target: this._transferData.target
            };
            this._move(from, to);
            to.target.events.fire(types_1.DragEvents.dropComplete, [to.id, this._transferData.dropPosition]);
        }
        this._endDrop();
    };
    DragManager.prototype._onDragStart = function (id, targetId) {
        var target = CollectionStore_1.collectionStore.getItem(targetId);
        var config = target.config;
        if (config.dragMode === types_1.DragMode.target) {
            return null;
        }
        var item = target.data.getItem(id);
        var ghost = dragEventContent(this._transferData.item, this._itemsForGhost);
        var ans = target.events.fire(types_1.DragEvents.beforeDrag, [item, ghost]);
        if (!ans || !id) {
            return null;
        }
        target.events.fire(types_1.DragEvents.dragStart, [id, this._selectedIds]);
        this._toggleTextSelection(true);
        this._transferData.target = target;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        var element = document.elementFromPoint(clientX, clientY);
        var collectionId = html_1.locate(element, "dhx_widget_id");
        if (!collectionId) {
            if (this._canMove) {
                this._cancelCanDrop();
            }
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(collectionId);
        var id = html_1.locate(element, "dhx_id");
        if (!id) {
            this._cancelCanDrop();
            this._lastCollectionId = collectionId;
            this._lastId = null;
            this._canDrop();
            return;
        }
        if (target.config.dropBehaviour === types_1.DropBehaviour.complex) {
            var pos = getPosition(e);
            if (pos <= 0.25) {
                this._transferData.dropPosition = types_1.DropPosition.top;
            }
            else if (pos >= 0.75) {
                this._transferData.dropPosition = types_1.DropPosition.bot;
            }
            else {
                this._transferData.dropPosition = types_1.DropPosition.in;
            }
        }
        else if (this._lastId === id && this._lastCollectionId === collectionId) {
            return;
        }
        var from = {
            id: this._transferData.id,
            target: this._transferData.target
        };
        if (target.config.dragMode === "source") {
            return;
        }
        from.target.events.fire(types_1.DragEvents.dragOut, [id, target]);
        if (collectionId !== this._transferData.targetId || !helpers_1.isTreeCollection(from.target.data) ||
            (helpers_1.isTreeCollection(from.target.data) && from.target.data.canCopy(from.id, id))) {
            this._cancelCanDrop(); // clear last
            this._lastId = id;
            this._lastCollectionId = collectionId;
            var canMove = from.target.events.fire(types_1.DragEvents.dragIn, [id, this._transferData.dropPosition, CollectionStore_1.collectionStore.getItem(collectionId)]);
            if (canMove) {
                this._canDrop();
            }
        }
        else {
            this._cancelCanDrop();
        }
    };
    DragManager.prototype._move = function (from, to) {
        var fromData = from.target.data;
        var toData = to.target.data;
        var index = 0;
        var targetId = to.id;
        var behaviour = helpers_1.isTreeCollection(toData) ? to.target.config.dropBehaviour : undefined;
        switch (behaviour) {
            case types_1.DropBehaviour.child:
                break;
            case types_1.DropBehaviour.sibling:
                targetId = toData.getParent(targetId);
                index = toData.getIndex(to.id) + 1;
                break;
            case types_1.DropBehaviour.complex:
                var dropPosition = this._transferData.dropPosition;
                if (dropPosition === types_1.DropPosition.top) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id);
                }
                else if (dropPosition === types_1.DropPosition.bot) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id) + 1;
                }
                break;
            default:
                // list move
                if (!to.id) {
                    index = -1;
                }
                else if (from.target === to.target && toData.getIndex(from.id) < toData.getIndex(to.id)) {
                    index = toData.getIndex(to.id) - 1;
                }
                else {
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            if (this._selectedIds instanceof Array && this._selectedIds.length > 1) {
                this._selectedIds.map(function (selctedId) {
                    fromData.copy(selctedId, index, toData, targetId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.copy(from.id, index, toData, targetId);
            }
        }
        else {
            if (this._selectedIds instanceof Array && this._selectedIds.length > 1) {
                this._selectedIds.map(function (selctedId) {
                    fromData.move(selctedId, index, toData, targetId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.move(from.id, index, toData, targetId); // typescript bug??
            }
        }
    };
    DragManager.prototype._endDrop = function () {
        this._toggleTextSelection(false);
        if (this._transferData.target) {
            this._transferData.target.events.fire(types_1.DragEvents.dragEnd, [this._transferData.id, this._selectedIds]);
        }
        this._cancelCanDrop();
        this._canMove = true;
        this._transferData = {};
        this._lastId = null;
        this._lastCollectionId = null;
    };
    DragManager.prototype._cancelCanDrop = function () {
        this._canMove = false;
        var collection = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (collection && this._lastId) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [this._lastId]);
        }
        this._lastCollectionId = null;
        this._lastId = null;
    };
    DragManager.prototype._canDrop = function () {
        this._canMove = true;
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (target && this._lastId) {
            target.events.fire(types_1.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    return DragManager;
}());
var dhx = window.dhxHelpers = window.dhxHelpers || {};
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
var dhx = window.dhxHelpers = window.dhxHelpers || {};
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(2);
var types_1 = __webpack_require__(21);
var types_2 = __webpack_require__(17);
var Selection = /** @class */ (function () {
    function Selection(_config, data, events) {
        var _this = this;
        this.events = events || (new events_1.EventSystem(this));
        this._data = data;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if (_this._selected) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if (this._selected) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id || this._selected;
        if (!id) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false });
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id) {
            return;
        }
        this.remove();
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true });
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var scrollView_1 = __webpack_require__(100);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var ts_layout_1 = __webpack_require__(12);
var ts_message_1 = __webpack_require__(19);
var ts_toolbar_1 = __webpack_require__(27);
var en_1 = __webpack_require__(35);
var types_1 = __webpack_require__(26);
var Uploader_1 = __webpack_require__(55);
var configs_1 = __webpack_require__(118);
var helper_1 = __webpack_require__(119);
var ProgressBar_1 = __webpack_require__(120);
var ReadStackPreview_1 = __webpack_require__(121);
var Vault = /** @class */ (function (_super) {
    __extends(Vault, _super);
    function Vault(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, core_1.extend({
            mode: types_1.VaultMode.list,
            toolbar: true,
            updateFromResponse: true,
            scaleFactor: 4,
            customScroll: true,
            uploader: {},
            progressBar: {}
        }, config)) || this;
        if (!_this.config.toolbar) {
            _this.config.uploader.autosend = true;
        }
        if (config.data) {
            _this.data = config.data;
            _this.events = config.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        _this.data.config.init = function (obj) {
            obj.status = obj.status || types_1.FileStatus.uploaded;
            if (obj.file) {
                obj.size = obj.file.size;
                obj.name = obj.file.name;
            }
            else {
                obj.size = obj.size || 0;
                obj.name = obj.name || "";
            }
            if (_this.config.mode === types_1.VaultMode.grid && obj.file && helper_1.isImage(obj)) {
                _this._readStack.add(obj, _this.uploader.config.autosend);
            }
            return obj;
        };
        _this._readStack = new ReadStackPreview_1.ReadStackPreview(_this.data);
        _this.uploader = new Uploader_1.Uploader(_this.config.uploader, _this.data, _this.events);
        _this._scrollView = new scrollView_1.ScrollView(function () { return _this._vaultView.getRootView(); });
        _this._progressBar = new ProgressBar_1.ProgressBar(_this.events, _this.config.progressBar);
        _this.events.on(types_1.UploaderEvents.uploadProgress, function (progress, current, total) { return _this._progressBar.setState(progress, { current: current, total: total }); });
        _this._initHandlers();
        _this._initUI(container);
        _this._initEvents();
        return _this;
    }
    Vault.prototype.destructor = function () {
        this.toolbar.destructor();
        this._readStack.stop();
        this.uploader.unlinkDropArea();
        this.uploader.abort();
    };
    Vault.prototype.getRootView = function () {
        return this._layout.getRootView();
    };
    Vault.prototype._initUI = function (container) {
        var _this = this;
        var cfg = this.config.toolbar ? configs_1.layoutConfig : configs_1.layoutConfigWithoutTopbar;
        cfg.on = this._getDragEvents();
        var layout = this._layout = new ts_layout_1.Layout(container, cfg);
        var toolbar = this.toolbar = new ts_toolbar_1.Toolbar(null, { css: "vault-toolbar" });
        this.toolbar.data.parse([
            {
                id: "add",
                tooltip: en_1.default.add,
                type: ts_toolbar_1.ItemType.button,
                icon: "dxi-plus"
            },
            {
                id: "upload",
                tooltip: en_1.default.upload,
                type: ts_toolbar_1.ItemType.button,
                icon: "dxi icon-upload" // Custom Web Font Icon
            },
            {
                id: "spacer",
                type: ts_toolbar_1.ItemType.spacer
            },
            {
                id: "remove-all",
                tooltip: en_1.default.clearAll,
                type: ts_toolbar_1.ItemType.button,
                icon: "dxi-delete-forever"
            }
        ]);
        this._hideUploadAndDeleteButtons();
        this._vaultView = view_1.toViewLike(dom_1.create({ render: function () { return _this._draw(); } }));
        if (this.config.toolbar) {
            layout.cell("topbar").attach(toolbar);
        }
        layout.cell("vault").attach(this._vaultView);
    };
    Vault.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onclick: {
                ".action-add": function () { return _this.uploader.selectFile(); },
                ".action-remove-file": function (e) {
                    var id = html_1.locate(e);
                    if (!id) {
                        return;
                    }
                    _this.data.update(id, { $toRemove: true });
                    setTimeout(function () {
                        _this.data.update(id, { $toRemove: false }, true);
                        _this.data.remove(id);
                    }, 200);
                }
            },
            onmouseover: {
                ".action-download": function (e) {
                    ts_message_1.tooltip(en_1.default.download, {
                        node: e.target,
                        position: ts_message_1.Position.bottom
                    });
                },
                ".action-remove-file": function (e) {
                    ts_message_1.tooltip(en_1.default.clear, {
                        node: e.target,
                        position: ts_message_1.Position.bottom
                    });
                },
                ".title-content, .dhx-file-name": function (e) {
                    var id = html_1.locate(e);
                    var item = _this.data.getItem(id);
                    ts_message_1.tooltip(item.name, {
                        node: e.target,
                        position: ts_message_1.Position.bottom,
                        css: "tooltip-light"
                    });
                }
            }
        };
    };
    Vault.prototype._getDragEvents = function () {
        var _this = this;
        var rect = {
            left: null,
            top: null,
            width: null,
            height: null
        };
        return {
            dragleave: function (e) {
                if (!_this._canDrop) {
                    return;
                }
                if (e.pageX > rect.left + rect.width - 1 || e.pageX < rect.left || e.pageY > rect.top + rect.height - 1 || e.pageY < rect.top) {
                    _this._canDrop = false;
                    if (_this.config.toolbar) {
                        _this._layout.cell("topbar").show();
                    }
                    _this._layout.config.css = "vault-layout";
                    _this._layout.paint();
                }
            },
            dragenter: function (e) {
                e.preventDefault();
                if (_this.uploader.isActive || _this._canDrop) {
                    return;
                }
                var types = e.dataTransfer.types;
                for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
                    var type = types_2[_i];
                    if (type !== "Files" && type !== "application/x-moz-file") {
                        _this._canDrop = false;
                        return;
                    }
                }
                _this._canDrop = true;
                var clientRect = _this.getRootView().node.el.getBoundingClientRect();
                rect.left = clientRect.left + window.pageXOffset;
                rect.top = clientRect.top + window.pageYOffset;
                rect.width = clientRect.width;
                rect.height = clientRect.height;
                _this._canDrop = true;
                if (_this.config.toolbar) {
                    _this._layout.cell("topbar").hide();
                }
                _this._layout.config.css = "vault-layout dhx-dragin";
                _this._layout.paint();
            },
            dragover: function (e) {
                e.preventDefault();
            },
            drop: function (e) {
                e.preventDefault();
                if (!_this._canDrop) {
                    return;
                }
                var dataTransfer = e.dataTransfer;
                _this.uploader.parseFiles(dataTransfer);
                _this._canDrop = false;
                if (_this.config.toolbar) {
                    _this._layout.cell("topbar").show();
                }
                _this._layout.config.css = "vault-layout";
                _this._layout.paint();
            }
        };
    };
    Vault.prototype._hideUploadAndDeleteButtons = function () {
        this.toolbar.hide(["upload", "remove-all"]);
    };
    Vault.prototype._showUploadAndDeleteButtons = function () {
        if (this.uploader.config.autosend) {
            this.toolbar.show("remove-all");
        }
        else {
            this.toolbar.show(["upload", "remove-all"]);
        }
    };
    Vault.prototype._initEvents = function () {
        var _this = this;
        this.data.events.on(ts_data_1.DataEvents.change, function () {
            if (!_this.data.getLength()) {
                _this._hideUploadAndDeleteButtons();
            }
            else {
                _this._showUploadAndDeleteButtons();
            }
            _this._vaultView.paint();
        });
        this.events.on(types_1.UploaderEvents.uploadBegin, function () {
            if (_this.config.toolbar) {
                _this._layout.cell("topbar").attach(_this._progressBar);
            }
        });
        this.events.on(types_1.UploaderEvents.uploadComplete, function () {
            if (_this.config.mode === types_1.VaultMode.grid && _this.uploader.config.autosend) {
                _this._readStack.read();
            }
            if (_this.config.toolbar) {
                _this._layout.cell("topbar").attach(_this.toolbar);
            }
        });
        this.toolbar.events.on(ts_toolbar_1.NavigationBarEvents.click, function (id) {
            switch (id) {
                case "add":
                    _this.uploader.selectFile();
                    break;
                case "remove-all":
                    _this.data.removeAll();
                    break;
                case "upload":
                    _this.uploader.send();
                    break;
            }
        });
        this.events.on(types_1.ProgressBarEvents.cancel, function () {
            _this.uploader.abort();
            _this._vaultView.paint();
        });
    };
    Vault.prototype._draw = function () {
        var isEmpty = !this.data.getLength();
        var files = this.config.mode === types_1.VaultMode.grid ? this._drawGrid() : this._drawList();
        return dom_1.el("div", __assign({ class: "vault dhx_widget" + (this._canDrop ? " drop-here" : "") }, this._handlers, { dhx_widget_id: this._uid }), [
            this._canDrop || isEmpty ? this._drawDropableArea() :
                this.config.customScroll ? this._scrollView.render(files) : files
        ]);
    };
    Vault.prototype._getFileActions = function (file) {
        var defaultActions = [];
        var hoverActions = [];
        var actions = [
            dom_1.el(".dhx-default-actions", defaultActions),
            dom_1.el(".dhx-hover-actions", hoverActions)
        ];
        if (file.status === types_1.FileStatus.inprogress) {
            return actions;
        }
        if (file.status !== types_1.FileStatus.failed && file.link) {
            var link = (this.config.downloadURL || "") + file.link;
            var downloadName = link.split("/").pop().split("?")[0];
            var download = dom_1.el("a", {
                download: downloadName,
                class: "download-link",
                href: link
            }, [
                dom_1.el(".icon-btn.dxi.dxi-download.action-download")
            ]);
            hoverActions.push(download);
        }
        var remove = dom_1.el(".icon-btn.dxi.dxi-delete-forever.action-remove-file");
        hoverActions.push(remove);
        if (file.status === types_1.FileStatus.failed) {
            var warn = dom_1.el(".dxi.dxi-alert-circle.warning-status");
            defaultActions.push(warn);
        }
        if (file.status === types_1.FileStatus.uploaded) {
            var uploadComplete = dom_1.el(".dxi.dxi-checkbox-marked-circle.uploaded-status");
            defaultActions.push(uploadComplete);
        }
        return actions;
    };
    Vault.prototype._drawList = function () {
        var _this = this;
        return dom_1.el(".dhx-files-block.dhx-webkit-scroll", this.data.map(function (item) {
            var isError = item.status === types_1.FileStatus.failed && item.request;
            var inProgress = item.status === types_1.FileStatus.inprogress;
            var inQueue = item.status === types_1.FileStatus.queue;
            var notUploaded = item.status !== types_1.FileStatus.uploaded;
            return dom_1.el("div", {
                class: "dhx-file-item" + (item.$toRemove ? " to-remove" : "") + (inQueue ? " in-queue" : ""),
                dhx_id: item.id,
                _key: item.id
            }, [
                dom_1.el(".dhx-file-icon", [
                    dom_1.el("div", {
                        class: "dhx-file-type " + helper_1.getFileClassName(item) + (notUploaded ? " not-loaded" : "")
                    })
                ]),
                dom_1.el(".dhx-file-title", [
                    dom_1.el(".dhx-title-content", item.name),
                    dom_1.el(".dhx-file-info", [
                        isError && dom_1.el(".warn-message", item.request.statusText || en_1.default.error),
                        inProgress ? dom_1.el(".progress-value", (item.progress * 100).toFixed(1) + "%")
                            : dom_1.el(".dhx-size" + (isError && ".dhx-size-error" || ""), helper_1.getBasis(item.size))
                    ])
                ]),
                inProgress && dom_1.el(".dhx-download-progress", {
                    style: {
                        width: (item.progress * 100).toFixed(1) + "%"
                    }
                }),
                !inProgress && dom_1.el(".dhx-file-action", _this._getFileActions(item))
            ]);
        }));
    };
    Vault.prototype._drawDropableArea = function () {
        return dom_1.el(".dhx-dropable-area.drop-files-here", [
            dom_1.el(".dhx-big-icon-block", [
                dom_1.el(".dxi.icon-upload") // Custom Web Font Icon
            ]),
            !this._canDrop && dom_1.el(".drop-area-bold-text", en_1.default.dragAndDrop),
            !this._canDrop && dom_1.el(".drop-area-bold-text", en_1.default.filesOrFoldersHere),
            !this._canDrop && dom_1.el(".drop-area-light-text", en_1.default.or),
            !this._canDrop && dom_1.el("button.dhx_btn.dhx_btn--flat.dhx_btn--small.action-add", en_1.default.browse)
        ]);
    };
    Vault.prototype._drawGrid = function () {
        var _this = this;
        return dom_1.el("div", {
            class: "dhx-files-grid dhx-webkit-scroll"
        }, [
            dom_1.el(".dhx-grid-content", this.data.map(function (item) {
                var inProgress = item.status === types_1.FileStatus.inprogress;
                var inQueue = item.status === types_1.FileStatus.queue;
                var isError = item.status === types_1.FileStatus.failed;
                return dom_1.el("div", {
                    class: "dhx-file-grid-item" + (inProgress ? " in-progress" : "")
                        + (item.$toRemove ? " to-remove" : "") + (inQueue ? " in-queue" : "") + (isError ? " failed" : ""),
                    dhx_id: item.id,
                    _key: item.id
                }, [
                    dom_1.el(".dhx-preview-wrapper", [
                        item.preview ? dom_1.el(".dhx-server-file-preview", [
                            dom_1.el("img", { src: item.preview })
                        ]) :
                            item.image ? dom_1.el("canvas", {
                                width: 98 * _this.config.scaleFactor,
                                height: 98 * _this.config.scaleFactor,
                                _hooks: {
                                    didInsert: function (node) {
                                        var _a = helper_1.calculateCover(item.image), dx = _a.dx, dy = _a.dy, sx = _a.sx, sy = _a.sy, sHeight = _a.sHeight, sWidth = _a.sWidth;
                                        var ctx = node.el.getContext("2d");
                                        ctx.drawImage(item.image, sx, sy, sWidth, sHeight, dx, dy, 98 * _this.config.scaleFactor, 98 * _this.config.scaleFactor);
                                    }
                                }
                            }) : dom_1.el("div", {
                                class: "dhx-file-preview dhx-file-type " + helper_1.getFileClassName(item)
                            }),
                        inProgress && _this._drawCircle(item.progress)
                    ].concat(_this._getFileActions(item), [
                        dom_1.el(".dhx-file-info", [
                            isError && dom_1.el(".warn-message", item.request.statusText || en_1.default.error),
                            !inProgress && dom_1.el(".dhx-size" + (isError && ".dhx-size-error" || ""), helper_1.getBasis(item.size))
                        ])
                    ])),
                    dom_1.el(".dhx-file-name", helper_1.truncateWord(item.name))
                ]);
            }))
        ]);
    };
    Vault.prototype._drawCircle = function (progress) {
        return dom_1.el(".progress-layout", [
            dom_1.el(".progress-amount", (progress * 100).toFixed(1) + "%"),
            dom_1.sv("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "progress-circle",
                viewBox: "0 0 60 60",
            }, [
                dom_1.sv("circle", {
                    "cx": 30,
                    "cy": 30,
                    "r": 28,
                    "stroke-width": 4,
                    "class": "progress-bar-background",
                }),
                dom_1.sv("circle.active-circle", {
                    "cx": 30,
                    "cy": 30,
                    "r": 28,
                    "stroke-width": 4,
                    "stroke-dasharray": "175.9 175.9",
                    "stroke-dashoffset": (1 - progress) * 175.9,
                    "class": "progress-bar-active",
                }),
            ])
        ]);
    };
    return Vault;
}(view_1.View));
exports.Vault = Vault;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var ScrollView = /** @class */ (function () {
    function ScrollView(getRootView, config) {
        var _a;
        if (config === void 0) { config = {}; }
        var _this = this;
        this.config = core_1.extend({
            speed: 20
        }, config);
        this._wheelName = html_1.isIE() ? "onmousewheel" : "onwheel";
        this._getRootView = getRootView;
        this._scrollTop = 0;
        this._runnerTop = 0;
        this._runnerHeight = 0;
        this._visibleArea = 1;
        this._scrollWidth = html_1.getScrollbarWidth();
        this._handlers = (_a = {
                onscroll: function () {
                    _this._update();
                }
            },
            _a[this._wheelName] = function (e) {
                e.preventDefault();
                var sign = (e.deltaY || -e.wheelDelta) > 0 ? 1 : -1;
                var delta = sign * _this.config.speed;
                var area = _this._getRefs().area;
                var maxBottom = area.scrollHeight - _this._runnerHeight;
                var newScrollTop = _this._scrollTop + delta;
                if (newScrollTop < 0) {
                    area.scrollTop = 0;
                }
                else if (newScrollTop > maxBottom) {
                    area.scrollTop = maxBottom;
                }
                else {
                    area.scrollTop = newScrollTop;
                }
                _this._update();
            },
            _a.onmousedownRunner = function (mouseDownEv) {
                mouseDownEv.preventDefault();
                var _a = _this._getRefs(), area = _a.area, runner = _a.runner;
                var rect = area.getBoundingClientRect();
                var top = rect.top + window.pageYOffset;
                var bottom = rect.bottom + window.pageYOffset;
                var maxBottom = area.scrollHeight - _this._runnerHeight;
                var delta = mouseDownEv.pageY - runner.getBoundingClientRect().top - window.pageYOffset;
                var mouseMove = function (e) {
                    var y = e.pageY - delta;
                    if (y <= top) {
                        area.scrollTop = 0;
                    }
                    else if (y > bottom) {
                        area.scrollTop = maxBottom;
                    }
                    else {
                        area.scrollTop = (y - top) / _this._visibleArea;
                    }
                    _this._update();
                };
                var mouseUp = function () {
                    document.removeEventListener("mousemove", mouseMove);
                    document.removeEventListener("mouseup", mouseUp);
                    document.body.classList.remove("dhx-no-select");
                };
                document.body.classList.add("dhx-no-select");
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            },
            _a.onmousedownTrack = function (e) {
                if (e.target.classList.contains("scroll-runner")) {
                    return;
                }
                e.preventDefault();
                var mouseUp = function () {
                    document.removeEventListener("mouseup", mouseUp);
                    window.clearInterval(mousePressed); // typescript bug
                };
                var area = _this._getRefs().area;
                var top = e.target.getBoundingClientRect().top + window.pageYOffset;
                var maxBottom = area.scrollHeight - _this._runnerHeight;
                var y = e.pageY;
                var updateScroll = function () {
                    var scrollTop;
                    if (y < top + _this._runnerTop) {
                        scrollTop = _this._scrollTop - area.clientHeight;
                        if (scrollTop < 0) {
                            scrollTop = 0;
                        }
                    }
                    else if (y > top + _this._runnerTop + _this._runnerHeight) {
                        scrollTop = _this._scrollTop + area.clientHeight;
                        if (scrollTop > maxBottom) {
                            scrollTop = maxBottom;
                        }
                    }
                    else {
                        return;
                    }
                    area.scrollTop = scrollTop;
                    _this._update();
                };
                updateScroll();
                var mousePressed = setInterval(updateScroll, 100);
                document.addEventListener("mouseup", mouseUp);
            },
            _a);
    }
    ScrollView.prototype.render = function (element) {
        var _this = this;
        var _a;
        if (this._scrollWidth === 0) {
            return element;
        }
        return dom_1.el(".scroll-view-wrapper", {
            style: {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative"
            }
        }, [
            dom_1.el(".scroll-view", {
                onscroll: this._handlers.onscroll,
                _ref: "scroll-view",
                _hooks: {
                    didInsert: function () {
                        _this._update();
                    },
                    didRecycle: function () {
                        _this._update();
                    }
                },
                style: {
                    "height": "100%",
                    "width": "calc(100% + " + this._scrollWidth + "px)",
                    "overflowY": "scroll",
                    "-ms-overflow-style": "scrollbar"
                },
            }, [element]),
            dom_1.el(".y-scroll", (_a = {
                    onmousedown: this._handlers.onmousedownTrack
                },
                _a[this._wheelName] = this._handlers[this._wheelName],
                _a.style = {
                    width: "10px",
                    height: "100%",
                    right: 0,
                    top: 0,
                    position: "absolute"
                },
                _a), [
                dom_1.el(".scroll-runner", {
                    _ref: "scroll-runner",
                    onmousedown: this._handlers.onmousedownRunner,
                    style: {
                        height: this._runnerHeight + "px",
                        right: "2px",
                        top: this._runnerTop,
                        width: "6px",
                        position: "absolute"
                    }
                })
            ])
        ]);
    };
    ScrollView.prototype._update = function () {
        var refs = this._getRefs();
        if (!refs) {
            return;
        }
        var area = refs.area, runner = refs.runner;
        this._visibleArea = area.clientHeight / area.scrollHeight;
        this._scrollTop = area.scrollTop;
        this._runnerTop = this._scrollTop * this._visibleArea;
        if (this._visibleArea < 1) {
            this._runnerHeight = area.clientHeight * this._visibleArea;
        }
        else {
            this._runnerHeight = 0;
        }
        // update dom
        runner.style.top = this._runnerTop + "px";
        runner.style.height = this._runnerHeight + "px";
    };
    ScrollView.prototype._getRefs = function () {
        var rootView = this._getRootView();
        if (rootView.refs && rootView.refs["scroll-view"] && rootView.refs["scroll-runner"]) {
            return {
                area: rootView.refs["scroll-view"].el,
                runner: rootView.refs["scroll-runner"].el
            };
        }
    };
    return ScrollView;
}());
exports.ScrollView = ScrollView;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = __webpack_require__(102);
var dom_1 = __webpack_require__(0);
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        // root layout
        _this._root = _this.config.parent || _this;
        _this._all = {};
        _this._parseConfig();
        if (_this.config.views) {
            _this.config.activeView = _this.config.activeView || _this._cells[0].id;
            _this._isViewLayout = true;
        }
        if (!config.parent) {
            var view = dom_1.create({ render: function () { return _this.toVDOM(); } }, _this);
            _this.mount(parent, view);
        }
        return _this;
    }
    Layout.prototype.cell = function (id) {
        // FIXME
        return this._root._all[id];
    };
    Layout.prototype.toVDOM = function () {
        if (this._isViewLayout) {
            var roots = [this.cell(this.config.activeView).toVDOM()];
            return _super.prototype.toVDOM.call(this, roots);
        }
        var nodes = [];
        this._cells.forEach(function (cell) {
            var node = cell.toVDOM();
            if (Array.isArray(node)) {
                nodes = nodes.concat(node);
            }
            else {
                nodes.push(node);
            }
        });
        return _super.prototype.toVDOM.call(this, nodes);
    };
    Layout.prototype.removeCell = function (id) {
        var root = (this.config.parent || this);
        if (root !== this) {
            return root.removeCell(id);
        }
        // this === root layout
        var view = this.cell(id);
        if (view) {
            var parent_1 = view.getParent();
            delete this._all[id];
            parent_1._cells = parent_1._cells.filter(function (cell) { return cell.id !== id; });
            parent_1.paint();
        }
    };
    Layout.prototype.addCell = function (config, index) {
        if (index === void 0) { index = -1; }
        var view = this._createCell(config);
        if (index < 0) {
            index = this._cells.length + index + 1;
        }
        this._cells.splice(index, 0, view);
        this.paint();
    };
    Layout.prototype.getId = function (index) {
        if (index < 0) {
            index = this._cells.length + index;
        }
        return this._cells[index] ? this._cells[index].id : undefined;
    };
    Layout.prototype.getRefs = function (name) {
        return this._root.getRootView().refs[name];
    };
    Layout.prototype._getCss = function (content) {
        var layoutCss = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows";
        var directionCss = this.config.align ? " " + layoutCss + "--" + this.config.align : "";
        if (content) {
            return layoutCss + " dhx_layout-cell" + (this.config.align ? " dhx_layout-cell--" + this.config.align : "");
        }
        else {
            var cellCss = this.config.parent ? _super.prototype._getCss.call(this) : "dhx_widget dhx_layout";
            var fullModeCss = this.config.parent ? "" : " dhx_layout-cell";
            return cellCss + (this.config.full ? fullModeCss : " " + layoutCss) + directionCss;
        }
    };
    Layout.prototype._parseConfig = function () {
        var _this = this;
        var config = this.config;
        var cells = config.rows || config.cols || config.views || [];
        this._xLayout = !config.rows;
        this._cells = cells.map(function (a) { return _this._createCell(a); });
    };
    Layout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new Layout(this, cell);
        }
        else {
            view = new Cell_1.Cell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        return view;
    };
    return Layout;
}(Cell_1.Cell));
exports.Layout = Layout;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(4);
var resizeMode;
(function (resizeMode) {
    resizeMode[resizeMode["unknown"] = 0] = "unknown";
    resizeMode[resizeMode["percents"] = 1] = "percents";
    resizeMode[resizeMode["pixels"] = 2] = "pixels";
    resizeMode[resizeMode["mixedpx1"] = 3] = "mixedpx1";
    resizeMode[resizeMode["mixedpx2"] = 4] = "mixedpx2";
    resizeMode[resizeMode["mixedperc1"] = 5] = "mixedperc1";
    resizeMode[resizeMode["mixedperc2"] = 6] = "mixedperc2";
})(resizeMode || (resizeMode = {}));
function getResizeMode(dir, conf1, conf2) {
    var field = dir ? "width" : "height";
    var is1perc = conf1[field] && conf1[field].indexOf("%") !== -1;
    var is2perc = conf2[field] && conf2[field].indexOf("%") !== -1;
    var is1px = conf1[field] && conf1[field].indexOf("px") !== -1;
    var is2px = conf2[field] && conf2[field].indexOf("px") !== -1;
    if (is1perc && is2perc) {
        return resizeMode.percents;
    }
    if (is1px && is2px) {
        return resizeMode.pixels;
    }
    if (is1px && !is2px) {
        return resizeMode.mixedpx1;
    }
    if (is2px && !is1px) {
        return resizeMode.mixedpx2;
    }
    if (is1perc) {
        return resizeMode.mixedperc1;
    }
    if (is2perc) {
        return resizeMode.mixedperc2;
    }
    return resizeMode.unknown;
}
function getBlockRange(block1, block2, isXLayout) {
    if (isXLayout === void 0) { isXLayout = true; }
    if (isXLayout) {
        return {
            min: block1.left + window.pageXOffset,
            max: block2.right + window.pageXOffset
        };
    }
    return {
        min: block1.top + window.pageYOffset,
        max: block2.bottom + window.pageYOffset
    };
}
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(parent, config) {
        var _this = _super.call(this, parent, core_1.extend({ gravity: true }, config)) || this;
        var p = parent;
        if (p && p.isVisible) {
            _this._parent = p;
        }
        _this.config.full = _this.config.full === undefined ? Boolean(_this.config.header || _this.config.collapsable) : _this.config.full;
        _this._initHandlers();
        _this.id = _this.config.id || core_1.uid();
        return _this;
    }
    Cell.prototype.paint = function () {
        if (this.isVisible()) {
            var view = this.getRootView();
            if (view) {
                view.redraw();
            }
            else {
                this._parent.paint();
            }
        }
    };
    Cell.prototype.isVisible = function () {
        // top level node
        if (!this._parent) {
            if (this._container && this._container.tagName) {
                return true;
            }
            return Boolean(this.getRootNode());
        }
        // check active view in case of multiview
        var active = this._parent.config.activeView;
        if (active && active !== this.id) {
            return false;
        }
        // check that all parents of the cell are visible as well
        return !this.config.hidden && (!this._parent || this._parent.isVisible());
    };
    Cell.prototype.hide = function () {
        this.config.hidden = true;
        if (this._parent && this._parent.paint) {
            this._parent.paint();
        }
    };
    Cell.prototype.show = function () {
        if (this._parent && this._parent.config.activeView) {
            this._parent.config.activeView = this.id;
        }
        else {
            this.config.hidden = false;
        }
        if (this._parent && !this._parent.isVisible()) {
            this._parent.show();
        }
        this.paint();
    };
    Cell.prototype.getParent = function () {
        return this._parent;
    };
    Cell.prototype.destructor = function () {
        this.config = null;
        this.unmount();
    };
    Cell.prototype.getWidget = function () {
        return this._ui;
    };
    Cell.prototype.getCellView = function () {
        return this._parent && this._parent.getRefs(this._uid);
    };
    Cell.prototype.attach = function (name, config) {
        this.config.html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    }
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Cell.prototype.attachHTML = function (html) {
        this.config.html = html;
        this.paint();
    };
    Cell.prototype.toVDOM = function (nodes) {
        var _a;
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var style = this._calculateStyle();
        var stylePadding = core_1.isDefined(this.config.padding) ? { padding: this.config.padding } : {};
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = dom_1.inject(view);
                }
                kids = [view];
            }
            else {
                kids = nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && !this.config.collapsed ?
            dom_1.el(".dhx_layout-resizer." + (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign({}, this._resizerHandlers, { _ref: "resizer_" + this._uid }), [dom_1.el("span.dhx_layout-resizer__icon", {
                    class: "dxi " + (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal")
                })]) : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var cell = dom_1.el("div", __assign((_a = { _key: this._uid, style: this.config.full || this.config.html ? style : __assign({}, style, stylePadding), _ref: this._uid }, _a["aria-labelledby"] = this.config.id ? "tab-content-" + this.config.id : null, _a), handlers, { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizeble" : "") +
                //  только для селов
                (this.config.gravity ? " dhx_layout-cell--gravity" : "") }), this.config.full ? [
            dom_1.el("div", {
                tabindex: this.config.collapsable ? "0" : "-1",
                class: "dhx_layout-cell-header" +
                    (this._isXDirection() ? " dhx_layout-cell-header--col" : " dhx_layout-cell-header--row") +
                    (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                    (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                    (((this.getParent() || {}).config || {}).isAccordion ? " dhx_layout-cell-header--accordion" : ""),
                onclick: this._handlers.collapse,
                onkeydown: this._handlers.enterCollapse
            }, [
                this.config.headerIcon && dom_1.el("span.dhx_layout-cell-header__icon" + this.config.headerIcon),
                this.config.headerImage && dom_1.el(".dhx_layout-cell-header__image-wrapper", [
                    dom_1.el("img", {
                        src: this.config.headerImage,
                        class: "dhx_layout-cell-header__image",
                    })
                ]),
                this.config.header && dom_1.el("h3.dhx_layout-cell-header__title", this.config.header),
                this.config.collapsable && dom_1.el("div.dhx_layout-cell-header__collapse-icon", {
                    class: this._getCollapseIcon()
                }),
            ]),
            !this.config.collapsed ? dom_1.el("div", {
                "style": this.config.html || nodes ? stylePadding : null,
                ".innerHTML": this.config.html,
                "class": this._getCss(true) + " dhx_layout-cell-content",
            }, kids) : null
        ] : (this.config.html ? [
            dom_1.el(".dhx_layout-cell-content", {
                ".innerHTML": this.config.html,
                "style": stylePadding,
            })
        ] : kids));
        return resizer ? [
            cell,
            resizer
        ] : cell;
    };
    Cell.prototype._getCss = function (_content) {
        return "dhx_layout-cell";
    };
    Cell.prototype._initHandlers = function () {
        var _this = this;
        var blockOpts = {
            left: null,
            top: null,
            isActive: false,
            range: null,
            xLayout: null,
            nextCell: null,
            size: null,
            resizerLength: null,
            mode: null,
            percentsum: null
        };
        var mouseUp = function () {
            blockOpts.isActive = false;
            document.body.classList.remove("dhx_no-select--resize");
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
        };
        var mouseMove = function (e) {
            if (!blockOpts.isActive || blockOpts.mode === resizeMode.unknown) {
                return;
            }
            var newValue = blockOpts.xLayout
                ? e.x - blockOpts.range.min + window.pageXOffset
                : e.y - blockOpts.range.min + window.pageYOffset;
            var prop = blockOpts.xLayout ? "width" : "height";
            if (newValue < 0) {
                newValue = blockOpts.resizerLength / 2;
            }
            else if (newValue > blockOpts.size) {
                newValue = blockOpts.size - blockOpts.resizerLength;
            }
            switch (blockOpts.mode) {
                case resizeMode.pixels:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    blockOpts.nextCell.config[prop] = blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case resizeMode.mixedpx1:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case resizeMode.mixedpx2:
                    blockOpts.nextCell.config[prop] = blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case resizeMode.percents:
                    _this.config[prop] = newValue / blockOpts.size * blockOpts.percentsum + "%";
                    blockOpts.nextCell.config[prop] = (blockOpts.size - newValue) / blockOpts.size * blockOpts.percentsum + "%";
                    break;
                case resizeMode.mixedperc1:
                    _this.config[prop] = newValue / blockOpts.size * blockOpts.percentsum + "%";
                    break;
                case resizeMode.mixedperc2:
                    blockOpts.nextCell.config[prop] = (blockOpts.size - newValue) / blockOpts.size * blockOpts.percentsum + "%";
                    break;
            }
            _this.paint();
        };
        this._handlers = {
            enterCollapse: function (e) {
                if (e.keyCode === 13) {
                    _this._handlers.collapse();
                }
            },
            collapse: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.config.collapsed = !_this.config.collapsed;
                _this.paint();
            }
        };
        this._resizerHandlers = {
            onmousedown: function (e) {
                if (e.which === 3) {
                    return;
                }
                if (blockOpts.isActive) {
                    mouseUp();
                }
                document.body.classList.add("dhx_no-select--resize");
                var block = _this.getCellView();
                var nextCell = _this._getNextCell();
                var nextBlock = nextCell.getCellView();
                var resizerBlock = _this._getResizerView();
                var blockOffsets = block.el.getBoundingClientRect();
                var resizerOffsets = resizerBlock.el.getBoundingClientRect();
                var nextBlockOffsets = nextBlock.el.getBoundingClientRect();
                blockOpts.xLayout = _this._isXDirection();
                blockOpts.left = blockOffsets.left + window.pageXOffset;
                blockOpts.top = blockOffsets.top + window.pageYOffset;
                blockOpts.range = getBlockRange(blockOffsets, nextBlockOffsets, blockOpts.xLayout);
                blockOpts.size = blockOpts.range.max - blockOpts.range.min;
                blockOpts.isActive = true;
                blockOpts.nextCell = nextCell;
                blockOpts.resizerLength = blockOpts.xLayout ? resizerOffsets.width : resizerOffsets.height;
                blockOpts.mode = getResizeMode(blockOpts.xLayout, _this.config, nextCell.config);
                if (blockOpts.mode === resizeMode.percents) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum = parseFloat(_this.config[field]) + parseFloat(nextCell.config[field]);
                }
                if (blockOpts.mode === resizeMode.mixedperc1) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum = 1 / (blockOffsets[field] / (blockOpts.size - blockOpts.resizerLength)) * parseFloat(_this.config[field]);
                }
                if (blockOpts.mode === resizeMode.mixedperc2) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum = 1 / (nextBlockOffsets[field] / (blockOpts.size - blockOpts.resizerLength)) * parseFloat(nextCell.config[field]);
                }
                document.addEventListener("mouseup", mouseUp);
                document.addEventListener("mousemove", mouseMove);
            },
            ondragstart: function (e) { return e.preventDefault(); }
        };
    };
    Cell.prototype._getCollapseIcon = function () {
        if (this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-right";
        }
        if (this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-left";
        }
        if (!this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-up";
        }
        if (!this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-down";
        }
    };
    Cell.prototype._isLastCell = function () {
        var parent = this._parent;
        return parent && parent._cells.indexOf(this) === parent._cells.length - 1;
    };
    Cell.prototype._getNextCell = function () {
        var parent = this._parent;
        var index = parent._cells.indexOf(this);
        return parent._cells[index + 1];
    };
    Cell.prototype._getResizerView = function () {
        return this._parent.getRefs("resizer_" + this._uid);
    };
    Cell.prototype._isXDirection = function () {
        return this._parent && this._parent._xLayout;
    };
    Cell.prototype._calculateStyle = function () {
        var config = this.config;
        if (!config) {
            return;
        }
        var style = {};
        if (this._isXDirection()) {
            if (config.width !== undefined && !config.collapsed) {
                style.flexBasis = config.width;
                style.width = config.width;
            }
            if (config.height !== undefined) {
                style.height = config.height;
            }
        }
        else {
            if (config.height !== undefined && !config.collapsed) {
                style.flexBasis = config.height;
                style.height = config.height;
            }
            if (config.width !== undefined) {
                style.width = config.width;
            }
        }
        // if (config.padding) {
        // 	style.padding = config.padding;
        // }
        return style;
    };
    return Cell;
}(view_1.View));
exports.Cell = Cell;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(33);
var nodeTimeout = new WeakMap();
var containers = new Map();
function onExpire(node, fromClick) {
    if (fromClick) {
        clearTimeout(nodeTimeout.get(node));
    }
    var container = node.parentNode;
    var position = container.getAttribute("data-position");
    var parent = container.parentNode;
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        return;
    }
    var positionInfo = messageContainerInfo[position];
    if (!positionInfo) {
        return;
    }
    var stack = positionInfo.stack;
    var index = stack.indexOf(node);
    if (index !== -1) {
        container.removeChild(node);
        stack.splice(index, 1);
        if (stack.length === 0) {
            parent.removeChild(container);
        }
        return;
    }
}
function message(props) {
    var _a;
    if (typeof props === "string") {
        props = { text: props };
    }
    props.position = props.position || types_1.MessageContainerPosition.topRight;
    var messageBox = document.createElement("div");
    messageBox.className = "dhx_message " + (props.css || "");
    if (props.html) {
        messageBox.innerHTML = props.html;
    }
    else {
        messageBox.innerHTML = "<span class=\"dhx_message__text\">" + props.text + "</span>\n\t\t" + (props.icon ? "<span class=\"dhx_message__icon dxi " + props.icon + "\"></span>" : "");
    }
    var parent = props.node ? html_1.toNode(props.node) : document.body;
    var position = getComputedStyle(parent).position;
    if (position === "static") {
        parent.style.position = "relative";
    }
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        containers.set(parent, (_a = {},
            _a[props.position] = {
                stack: [],
                container: createMessageContainer(parent, props.position)
            },
            _a));
    }
    else if (!messageContainerInfo[props.position]) {
        messageContainerInfo[props.position] = {
            stack: [],
            container: createMessageContainer(parent, props.position)
        };
    }
    var _b = containers.get(parent)[props.position], stack = _b.stack, container = _b.container;
    if (stack.length === 0) {
        parent.appendChild(container);
    }
    stack.push(messageBox);
    container.appendChild(messageBox);
    if (props.expire) {
        var timeout = setTimeout(function () { return onExpire(messageBox); }, props.expire);
        nodeTimeout.set(messageBox, timeout);
    }
    messageBox.onclick = function () { return onExpire(messageBox, true); };
}
exports.message = message;
function createMessageContainer(parent, position) {
    var messageContainer = document.createElement("div");
    messageContainer.setAttribute("data-position", position);
    messageContainer.className = "dhx_message-container " +
        "dhx_message-container--" + position +
        (parent === document.body ? " dhx_message-container--in-body" : "");
    return messageContainer;
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(34);
var common_1 = __webpack_require__(60);
function alert(props) {
    var apply = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.apply;
    var unblock = common_1.blockScreen(props.blockerCss);
    return new Promise(function (res) {
        var alertBox = document.createElement("div");
        alertBox.className = "dhx_alert " + (props.css || "");
        alertBox.innerHTML = "\n\t\t\t" + (props.header ? "<div class=\"dhx_alert__header\"> " + props.header + " </div>" : "") + "\n\t\t\t" + (props.text ? "<div class=\"dhx_alert__content\">" + props.text + "</div>" : "") + "\n\t\t\t<div class=\"dhx_alert__footer " + (props.buttonsAlignment ? ("dhx_alert__footer--" + props.buttonsAlignment) : "") + "\">\n\t\t\t\t<button class=\"dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">" + apply + "</button>\n\t\t\t</div>";
        document.body.appendChild(alertBox);
        alertBox.querySelector(".dhx_alert__apply-button").focus();
        alertBox.querySelector("button").addEventListener("click", function () {
            unblock();
            document.body.removeChild(alertBox);
            res(true);
        });
    });
}
exports.alert = alert;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(34);
var common_1 = __webpack_require__(60);
function confirm(props) {
    var apply = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.apply;
    var reject = props.buttons && props.buttons[1] ? props.buttons[1] : en_1.default.reject;
    var unblock = common_1.blockScreen(props.blockerCss);
    return new Promise(function (res) {
        var answer = function (val) {
            unblock();
            confirmBox.removeEventListener("click", clickHandler);
            document.body.removeChild(confirmBox);
            res(val);
        };
        var confirmBox = document.createElement("div");
        confirmBox.className = "dhx_alert dhx_alert--confirm" + (props.css ? " " + props.css : "");
        confirmBox.innerHTML = "\n\t\t" + (props.header ? "<div class=\"dhx_alert__header\"> " + props.header + " </div>" : "") + "\n\t\t" + (props.text ? "<div class=\"dhx_alert__content\">" + props.text + "</div>" : "") + "\n\t\t\t<div class=\"dhx_alert__footer " + (props.buttonsAlignment ? ("dhx_alert__footer--" + props.buttonsAlignment) : "") + "\">\n\t\t\t\t<button class=\"dhx_alert__confirm-aply dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium\">" + apply + "</button>\n\t\t\t\t<button class=\"dhx_alert__confirm-reject dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">" + reject + "</button>\n\t\t\t</div>";
        document.body.appendChild(confirmBox);
        confirmBox.querySelector(".dhx_alert__confirm-reject").focus();
        var clickHandler = function (e) {
            if (e.target.tagName === "BUTTON") {
                answer(e.target.classList.contains("dhx_alert__confirm-aply"));
            }
        };
        confirmBox.addEventListener("click", clickHandler);
    });
}
exports.confirm = confirm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var ts_navbar_1 = __webpack_require__(15);
var ts_message_1 = __webpack_require__(19);
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            navigationType: "click"
        }, config)) || this;
        _this._currentRoot = null;
        var render = function () { return _this._draw(); };
        _this.mount(element, dom_1.create({ render: render }));
        return _this;
    }
    Toolbar.prototype.getState = function () {
        var state = {};
        this.data.eachChild(this.data.getRoot(), function (item) {
            if (item.twoState && !item.group) {
                state[item.id] = item.active;
            }
            else if (item.type === ts_navbar_1.ItemType.input || item.type === ts_navbar_1.ItemType.selectButton) {
                state[item.id] = item.value;
            }
        }, false);
        for (var key in this._groups) {
            if (this._groups[key].active) {
                state[key] = this._groups[key].active;
            }
        }
        return state;
    };
    Toolbar.prototype.setState = function (state) {
        for (var key in state) {
            if (this._groups && this._groups[key]) {
                if (this._groups[key].active) {
                    this.data.update(this._groups[key].active, { active: false });
                    this._groups[key].active = state[key];
                    this.data.update(state[key], { active: true });
                }
            }
            else {
                var item = this.data.getItem(key);
                if (item.type === ts_navbar_1.ItemType.input || item.type === ts_navbar_1.ItemType.selectButton) {
                    this.data.update(key, { value: state[key] });
                }
                else {
                    this.data.update(key, { active: state[key] });
                }
            }
        }
    };
    Toolbar.prototype._customHandlers = function () {
        var _this = this;
        return {
            input: function (e) {
                var id = html_1.locate(e);
                _this.data.update(id, { value: e.target.value });
            },
            tooltip: function (e) {
                var elem = html_1.locateNode(e);
                if (!elem) {
                    return;
                }
                var id = elem.getAttribute("dhx_id");
                var item = _this.data.getItem(id);
                if (item.tooltip) {
                    ts_message_1.tooltip(item.tooltip, {
                        node: elem,
                        position: ts_message_1.Position.bottom
                    });
                }
            }
        };
    };
    Toolbar.prototype._getFactory = function () {
        return ts_navbar_1.createFactory({
            widget: this,
            defaultType: ts_navbar_1.ItemType.navItem,
            allowedTypes: [
                ts_navbar_1.ItemType.button,
                ts_navbar_1.ItemType.customHTMLButton,
                ts_navbar_1.ItemType.imageButton,
                ts_navbar_1.ItemType.input,
                ts_navbar_1.ItemType.selectButton,
                ts_navbar_1.ItemType.separator,
                ts_navbar_1.ItemType.spacer,
                ts_navbar_1.ItemType.title,
                ts_navbar_1.ItemType.navItem,
                ts_navbar_1.ItemType.menuItem,
            ],
            widgetName: "toolbar"
        });
    };
    Toolbar.prototype._draw = function () {
        var _this = this;
        return dom_1.el("nav.dhx_widget.dhx_toolbar", {
            class: (this.config.css ? this.config.css : ""),
            style: { "min-height": this.data.getLength() ? "60px" : "" }
        }, [
            dom_1.el("ul.dhx_navbar.dhx_navbar--horizontal", {
                dhx_widget_id: this._uid,
                tabindex: 0,
                onclick: this._handlers.onclick,
                onmousedown: this._handlers.onmousedown,
                oninput: this._handlers.input,
                onmouseover: this._handlers.tooltip,
                _hooks: {
                    didInsert: function (node) {
                        node.el.addEventListener("keyup", function (e) {
                            if (e.which !== 9) {
                                return;
                            }
                            var elem = html_1.locateNode(document.activeElement);
                            if (!elem) {
                                return;
                            }
                            var id = elem.getAttribute("dhx_id");
                            var item = _this.data.getItem(id);
                            if (item.tooltip) {
                                ts_message_1.tooltip(item.tooltip, {
                                    node: elem,
                                    position: ts_message_1.Position.bottom,
                                    force: true
                                });
                            }
                        }, true);
                    }
                }
            }, this.data.map(function (item) { return _this._factory(item); }, this.data.getRoot(), false))
        ]);
    };
    Toolbar.prototype._getMode = function (item, root) {
        return item.id === root ? "bottom" : "right";
    };
    Toolbar.prototype._close = function () {
        this._activePosition = null;
        this._currentRoot = null;
        _super.prototype._close.call(this);
    };
    Toolbar.prototype._setRoot = function (id) {
        if (this.data.getParent(id) === this.data.getRoot()) {
            this._currentRoot = id;
        }
    };
    return Toolbar;
}(ts_navbar_1.Navbar));
exports.Toolbar = Toolbar;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var Keymanager_1 = __webpack_require__(13);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var types_1 = __webpack_require__(22);
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(element, config) {
        var _this = _super.call(this, element, core_1.extend({}, config)) || this;
        _this._isContextMenu = false;
        _this._documentHaveListener = false;
        _this._rootItem = {};
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({}, _this.events);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({}, _this.events);
        }
        _this._documentClick = function (e) {
            if (html_1.locate(e, "dhx_widget_id") !== _this._uid && _this._documentHaveListener) {
                document.removeEventListener("click", _this._documentClick);
                _this._documentHaveListener = false;
                _this._close();
            }
        };
        _this._currentRoot = _this.data.getRoot();
        _this._factory = _this._getFactory();
        _this._initHandlers();
        _this._init();
        _this._initEvents();
        if (Array.isArray(_this.config.data)) {
            _this.data.parse(_this.config.data);
        }
        return _this;
    }
    Navbar.prototype.paint = function () {
        _super.prototype.paint.call(this);
        this._vpopups.redraw();
    };
    Navbar.prototype.disable = function (ids) {
        this._setProp(ids, "disabled", true);
    };
    Navbar.prototype.enable = function (ids) {
        this._setProp(ids, "disabled", false);
    };
    Navbar.prototype.show = function (ids) {
        this._setProp(ids, "hidden", false);
    };
    Navbar.prototype.hide = function (ids) {
        this._setProp(ids, "hidden", true);
    };
    Navbar.prototype.destructor = function () {
        this.unmount();
        Keymanager_1.keyManager.removeHotKey(null, this);
        this._vpopups.unmount();
    };
    Navbar.prototype._customHandlers = function () {
        return {};
    };
    Navbar.prototype._close = function () {
        var _this = this;
        if (this._activeParents) {
            this._activeParents.forEach(function (parentId) { return _this.data.exists(parentId) && _this.data.update(parentId, { $activeParent: false }); });
        }
        if (this.config.navigationType === types_1.NavigationType.click) {
            this._isActive = false;
        }
        clearTimeout(this._currentTimeout);
        this._activeMenu = null;
        this.paint();
    };
    Navbar.prototype._init = function () {
        var _this = this;
        var render = function () { return dom_1.el("div", {
            dhx_widget_id: _this._uid,
            class: "dhx_" + (_this._isContextMenu ? " dhx_context-menu" : ""),
            onmousemove: _this._handlers.onmousemove,
            onmouseleave: _this._handlers.onmouseleave,
            onclick: _this._handlers.onclick,
            onmousedown: _this._handlers.onmousedown
        }, _this._drawPopups()); };
        this._vpopups = dom_1.create({
            render: render
        });
        this._vpopups.mount(document.body);
    };
    Navbar.prototype._initHandlers = function () {
        var _this = this;
        /*
            for navigation type click:
            first click open menu, _isActive = true
            after navigation use mousemove
            can be closed after outer click or menu leaf item click
        */
        this._isActive = this.config.navigationType !== types_1.NavigationType.click;
        this._handlers = __assign({ onmousemove: function (e) {
                if (!_this._isActive) {
                    return;
                }
                var elem = html_1.locateNode(e);
                if (!elem) {
                    return;
                }
                var id = elem.getAttribute("dhx_id");
                if (_this._activeMenu !== id) {
                    _this._activeMenu = id;
                    if (_this.data.haveItems(id)) {
                        var position = html_1.getRealPosition(elem);
                        _this.data.update(id, { $position: position }, false);
                    }
                    _this._activeItemChange(id);
                }
            }, onmouseleave: function () {
                if (_this.config.navigationType !== types_1.NavigationType.click) { // maybe all time when mouse leave close menu
                    _this._activeItemChange(null);
                }
            }, onclick: function (e) {
                var element = html_1.locateNode(e);
                if (!element) {
                    return;
                }
                var id = element.getAttribute("dhx_id");
                var item = _this.data.getItem(id);
                if (item.multiClick) {
                    return;
                }
                if (_this.data.haveItems(id)) {
                    if (id === _this._currentRoot) {
                        _this._close();
                        return;
                    }
                    if (!_this._isActive) {
                        _this._isActive = true;
                    }
                    _this._setRoot(id);
                    _this._activeMenu = id;
                    var position = html_1.getRealPosition(element);
                    _this.data.update(id, { $position: position }, false);
                    _this._activeItemChange(id);
                }
                else {
                    switch (item.type) {
                        case types_1.ItemType.input:
                        case types_1.ItemType.title:
                            break;
                        case types_1.ItemType.menuItem:
                        case types_1.ItemType.selectButton:
                            _this._onMenuItemClick(id, e);
                            break;
                        case types_1.ItemType.imageButton:
                        case types_1.ItemType.button:
                        case types_1.ItemType.customHTMLButton:
                        case types_1.ItemType.navItem:
                            if (item.twoState) {
                                _this.data.update(item.id, { active: !item.active });
                            }
                            _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                        // missed break for trigger close
                        default:
                            _this._close();
                    }
                }
            }, onmousedown: function (e) {
                var element = html_1.locateNode(e);
                if (!element) {
                    return;
                }
                var id = element.getAttribute("dhx_id");
                var item = _this.data.getItem(id);
                if (!item.multiClick) {
                    return;
                }
                var fireTime = 365;
                var timeout;
                var fireAction = function () {
                    _this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
                    if (fireTime > 50) {
                        fireTime -= 55;
                    }
                    timeout = setTimeout(fireAction, fireTime);
                };
                var mouseup = function () {
                    clearTimeout(timeout);
                    document.removeEventListener("mouseup", mouseup);
                };
                fireAction();
                document.addEventListener("mouseup", mouseup);
            } }, this._customHandlers());
    };
    Navbar.prototype._initEvents = function () {
        var _this = this;
        var timeout = null;
        this.data.events.on(types_1.DataEvents.change, function () {
            _this.paint();
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                var groups = {};
                _this.data.eachChild(_this.data.getRoot(), function (item) {
                    if (item.group) {
                        item.twoState = true;
                        addInGroups(groups, item);
                    }
                }, true);
                _this._groups = groups;
                _this._resetHotkeys();
                timeout = null;
                _this.paint();
            }, 100);
        });
        this.events.on(types_1.NavigationBarEvents.click, function (id) {
            var item = _this.data.getItem(id);
            var parent = _this.data.getItem(item.parent);
            if (parent && parent.type === types_1.ItemType.selectButton) {
                _this.data.update(item.parent, { value: item.value, icon: item.icon });
            }
            if (item.group) {
                var group = _this._groups[item.group];
                if (group.active) {
                    _this.data.update(group.active, { active: false });
                }
                group.active = item.id;
                _this.data.update(item.id, { active: true });
            }
        });
        this._customInitEvents();
    };
    Navbar.prototype._getMode = function (item, root, _active) {
        if (_active === void 0) { _active = false; }
        return item.parent === root ? "bottom" : "right";
    };
    Navbar.prototype._drawMenuItems = function (id, asMenuItem) {
        var _this = this;
        if (asMenuItem === void 0) { asMenuItem = true; }
        return this.data.map(function (item) { return _this._factory(item, asMenuItem); }, id, false);
    };
    Navbar.prototype._setRoot = function (_id) {
        return; // need only for toolbar
    };
    Navbar.prototype._getParents = function (id, root) {
        var parentIds = [];
        var afterRoot = false;
        var currentItem = this.data.getItem(id);
        var disabled = currentItem && currentItem.disabled;
        this.data.eachParent(id, function (item) {
            if (item.id === root) {
                parentIds.push(item.id);
                afterRoot = true;
            }
            else if (!afterRoot) {
                parentIds.push(item.id);
            }
        }, !disabled);
        if (this._isContextMenu && this._activePosition) {
            parentIds.push(root);
        }
        return parentIds;
    };
    Navbar.prototype._listenOuterClick = function () {
        if (this._documentHaveListener) {
            return;
        }
        document.addEventListener("click", this._documentClick, true);
        this._documentHaveListener = true;
    };
    Navbar.prototype._customInitEvents = function () {
        return;
    };
    Navbar.prototype._drawPopups = function () {
        var _this = this;
        var id = this._activeMenu;
        if (!this._isContextMenu && !id) {
            return null;
        }
        var root = this._currentRoot;
        if (this._isContextMenu && !this._activePosition) {
            return null;
        }
        var parentIds = this._getParents(id, root);
        this._activeParents = parentIds;
        parentIds.forEach(function (parentId) { return _this.data.exists(parentId) && _this.data.update(parentId, { $activeParent: true }, false); });
        return parentIds.map(function (itemId) {
            if (!_this.data.haveItems(itemId)) {
                return null;
            }
            var item = _this.data.getItem(itemId) || _this._rootItem; // for root item
            return dom_1.el("ul", {
                class: "dhx_widget dhx_menu" + (_this.config.menuCss ? " " + _this.config.menuCss : ""),
                _key: itemId,
                _hooks: {
                    didInsert: function (vnode) {
                        var _a = vnode.el.getBoundingClientRect(), width = _a.width, height = _a.height;
                        var position = _this._isContextMenu && _this._activePosition && itemId === root ? _this._activePosition : item.$position;
                        var mode = _this._getMode(item, root, position === _this._activePosition);
                        var style = html_1.calculatePosition(position, { mode: mode, width: width, height: height });
                        item.$style = style;
                        vnode.patch({ style: style });
                    },
                    didRecycle: function (_, vnode) {
                        if (_this._isContextMenu && _this._activePosition && itemId === root) {
                            var _a = vnode.el.getBoundingClientRect(), width = _a.width, height = _a.height;
                            var style = html_1.calculatePosition(_this._activePosition, { mode: _this._getMode(item, root, true), width: width, height: height });
                            item.$style = style;
                            vnode.patch({ style: style });
                        }
                    }
                },
                tabindex: 0,
                style: item.$style || {
                    position: "absolute"
                }
            }, _this._drawMenuItems(itemId));
        }).reverse();
    };
    Navbar.prototype._onMenuItemClick = function (id, e) {
        var item = this.data.getItem(id);
        if (item.disabled) {
            return;
        }
        if (item.twoState) {
            this.data.update(item.id, { active: !item.active });
        }
        this.events.fire(types_1.NavigationBarEvents.click, [id, e]);
        this._close();
    };
    Navbar.prototype._activeItemChange = function (id) {
        var _this = this;
        if (this._activeParents) {
            var parentIds_1 = this._getParents(id, this._currentRoot);
            this._activeParents.forEach(function (parentId) {
                if (_this.data.exists(parentId) && parentIds_1.indexOf(parentId) === -1) {
                    _this.data.update(parentId, { $activeParent: false }, false);
                }
            });
        }
        if (id && !this._documentHaveListener) {
            this._listenOuterClick();
        }
        if (id && this.data.haveItems(id)) {
            this.events.fire(types_1.NavigationBarEvents.openMenu, [id]);
            this._activeMenu = id;
            clearTimeout(this._currentTimeout);
            this.paint();
        }
        else {
            this._activeMenu = id;
            clearTimeout(this._currentTimeout);
            this._currentTimeout = setTimeout(function () { return _this.paint(); }, 400);
        }
    };
    Navbar.prototype._resetHotkeys = function () {
        var _this = this;
        Keymanager_1.keyManager.removeHotKey(null, this);
        this.data.map(function (item) {
            if (item.hotkey) {
                Keymanager_1.keyManager.addHotKey(item.hotkey, function () { return _this._onMenuItemClick(item.id, null); }, _this);
            }
        });
    };
    Navbar.prototype._setProp = function (id, key, value) {
        var _this = this;
        var _a;
        if (Array.isArray(id)) {
            id.forEach(function (itemId) {
                var _a;
                return _this.data.update(itemId, (_a = {}, _a[key] = value, _a));
            });
        }
        else {
            this.data.update(id, (_a = {}, _a[key] = value, _a));
        }
    };
    return Navbar;
}(view_1.View));
exports.Navbar = Navbar;
function addInGroups(groups, item) {
    if (groups[item.group]) {
        if (item.active) {
            groups[item.group].active = item.id;
        }
        groups[item.group].elements.push(item.id);
    }
    else {
        groups[item.group] = {
            active: item.active ? item.id : null,
            elements: [item.id]
        };
    }
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(109);
var navItem_1 = __webpack_require__(110);
var customHTMLButton_1 = __webpack_require__(111);
var imageButton_1 = __webpack_require__(112);
var input_1 = __webpack_require__(113);
var menuItem_1 = __webpack_require__(114);
var separator_1 = __webpack_require__(115);
var spacer_1 = __webpack_require__(116);
var title_1 = __webpack_require__(117);
var types_1 = __webpack_require__(22);
var helpers_1 = __webpack_require__(23);
function itemfactory(item, events, widgetName, props) {
    switch (item.type) {
        case types_1.ItemType.navItem:
        case types_1.ItemType.selectButton:
            return navItem_1.navItem(item, widgetName, props.collapsed);
        case types_1.ItemType.button:
            return button_1.button(item, widgetName);
        case types_1.ItemType.title:
            return title_1.title(item, widgetName);
        case types_1.ItemType.separator:
            return separator_1.separator(item, widgetName);
        case types_1.ItemType.spacer:
            return spacer_1.spacer(item, widgetName);
        case types_1.ItemType.input:
            return input_1.input(item, events, widgetName);
        case types_1.ItemType.imageButton:
            return imageButton_1.imageButton(item, widgetName);
        case types_1.ItemType.menuItem:
            return menuItem_1.menuItem(item, widgetName, props.asMenuItem);
        case types_1.ItemType.customHTMLButton:
            return customHTMLButton_1.customHTMLButton(item, widgetName);
        case types_1.ItemType.block:
        default:
            throw new Error("unknown item type " + item.type);
    }
}
function createFactory(_a) {
    var defaultType = _a.defaultType, allowedTypes = _a.allowedTypes, widgetName = _a.widgetName, widget = _a.widget;
    var allowedSet = new Set();
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        allowedSet.add(type);
    }
    var config = widget.config, events = widget.events, data = widget.data;
    return function (item, asMenuItem) {
        if (item.hidden) {
            return null;
        }
        if (!item.type || item.type === "button" || item.type === "navItem" || item.type === "menuItem") {
            if (!item.value && !item.icon) {
                return null;
            }
        }
        item.type = item.type || defaultType;
        if (allowedSet && !allowedSet.has(item.type)) {
            item.type = defaultType;
        }
        if (item.type === types_1.ItemType.imageButton && widgetName !== "ribbon") {
            item.active = false;
        }
        if (asMenuItem && item.type !== types_1.ItemType.spacer && item.type !== types_1.ItemType.separator) {
            item.type = types_1.ItemType.menuItem;
        }
        if (data.haveItems(item.id)) {
            normalizeOpenIcon(widgetName, item, data);
        }
        return helpers_1.navbarComponentMixin(widgetName, item, asMenuItem, itemfactory(item, events, widgetName, { asMenuItem: asMenuItem, collapsed: widgetName !== "sidebar" || config.collapsed }));
    };
}
exports.createFactory = createFactory;
function normalizeOpenIcon(widgetName, item, data) {
    switch (widgetName) {
        case "sidebar":
        case "context-menu":
            item.$openIcon = "right";
            break;
        case "toolbar":
            if (item.parent === data.getRoot()) {
                item.$openIcon = "right";
            }
            else {
                item.$openIcon = "bot";
            }
            break;
        case "menu":
            if (item.parent !== this.data.getRoot()) {
                item.$openIcon = "right";
            }
            break;
        case "ribbon":
            var parent_1 = data.getItem(item.parent);
            if (parent_1 && item.type !== types_1.ItemType.block) {
                if (parent_1.type === types_1.ItemType.block) {
                    item.$openIcon = "bot";
                }
                else {
                    item.$openIcon = "right";
                }
            }
            break;
    }
}


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function button(item, widgetName) {
    var isIconButton = item.icon && !item.value;
    var counterClass = isIconButton ? " dhx_navbar-count--absolute" : " dhx_navbar-count--button-inline";
    return dom_1.el("button.dhx_button", {
        class: helpers_1.getNavbarButtonCSS(item, widgetName),
        dhx_id: item.id,
        disabled: item.disabled
    }, [
        item.icon ? helpers_1.getIcon(item.icon, "button") : null,
        item.value && dom_1.el("span.dhx_button__text", item.value),
        item.count > 0 && helpers_1.getCount(item, counterClass, isIconButton),
        item.value && item.$openIcon ? dom_1.el("span.dhx_button__icon.dhx_button__icon--menu.dxi.dxi-menu-right") : null,
        item.loading && dom_1.el("span.dhx_button__loading", [
            dom_1.el("span.dhx_button__loading-icon.dxi.dxi-loading")
        ])
    ]);
}
exports.button = button;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function navItem(item, widgetName, collapsed) {
    var baseClass = " dhx_" + widgetName + "-button";
    return dom_1.el("button", {
        class: "dhx_button" + baseClass +
            (item.active || item.$activeParent ? baseClass + "--active" : "") +
            (item.disabled ? baseClass + "--disabled" : "") +
            (item.$openIcon ? baseClass + "--select" : "") +
            (item.circle ? baseClass + "--circle" : "") +
            (item.size ? " " + baseClass + "--" + item.size : "") +
            (!item.value && item.icon ? baseClass + "--icon" : "") +
            (item.css ? " " + item.css : ""),
        dhx_id: item.id,
        disabled: item.disabled
    }, [
        item.icon && dom_1.el("span", {
            class: item.icon + baseClass + "__icon"
        }),
        item.value && dom_1.el("span", {
            class: baseClass.trim() + "__text"
        }, item.value),
        item.count > 0 && helpers_1.getCount(item, baseClass + "__count", collapsed),
        item.value && item.$openIcon && dom_1.el("span.dxi.dxi-menu-right", {
            class: baseClass + "__caret"
        })
    ]);
}
exports.navItem = navItem;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
function customHTMLButton(item, widgetName) {
    return dom_1.el("button", {
        "dhx_id": item.id,
        ".innerHTML": item.html
    }, item.html ? "" : item.value);
}
exports.customHTMLButton = customHTMLButton;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function imageButton(item, widgetName) {
    var baseClass = "dhx_" + widgetName + "-button-image";
    var isRibbon = widgetName === "ribbon";
    return dom_1.el("button.dhx_button", {
        class: baseClass + (item.size ? " " + baseClass + "--" + item.size : "") +
            (!item.value && item.src ? " " + baseClass + "--icon" : "") +
            (isRibbon && item.$openIcon ? " " + baseClass + "--select" : "") +
            (item.active ? " " + baseClass + "--active" : ""),
        dhx_id: item.id,
    }, [
        isRibbon && item.value && item.$openIcon && dom_1.el("span.dxi.dxi-menu-right", {
            class: baseClass + "__caret"
        }),
        item.value && dom_1.el("span", {
            class: baseClass + "__text",
        }, item.value),
        item.src && dom_1.el("span", {
            class: baseClass + "__image",
            style: { backgroundImage: "url(" + item.src + ")" }
        }),
        item.count > 0 && helpers_1.getCount(item, baseClass + "__count", true),
    ]);
}
exports.imageButton = imageButton;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(22);
function onBlur(events, id) {
    events.fire(types_1.NavigationBarEvents.inputBlur, [id]);
}
function onFocus(events, id) {
    events.fire(types_1.NavigationBarEvents.inputFocus, [id]);
}
function input(item, events, widgetName) {
    return dom_1.el(".dhx_form-group.dhx_form-group--no-message-holder.dhx_form-group--label_sr" + (".dhx_" + widgetName + "__input"), {
        style: {
            width: item.width ? item.width : "200px"
        },
    }, [
        dom_1.el("label.dhx_label", { for: item.id }, item.label),
        dom_1.el(".dhx_input-wrapper", [
            dom_1.el("input.dhx_input", {
                placeholder: item.placeholder,
                class: item.icon ? "dhx_input--icon-padding" : "",
                value: item.value,
                onblur: [onBlur, events, item.id],
                onfocus: [onFocus, events, item.id],
                dhx_id: item.id,
                _hooks: {
                    didInsert: function (node) {
                        if (events) {
                            events.fire(types_1.NavigationBarEvents.inputCreated, [item.id, node.el]);
                        }
                    }
                },
                _key: item.id
            }),
            item.icon ? dom_1.el(".dhx_input__icon", {
                class: item.icon
            }) : null,
        ])
    ]);
}
exports.input = input;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(23);
function menuItem(item, widgetName, asMenuItem) {
    var baseClass = asMenuItem ? " dhx_menu-button" : " dhx_nav-menu-button";
    return dom_1.el("button", {
        class: "dhx_button" + baseClass +
            (item.disabled ? baseClass + "--disabled" : "") +
            (item.$activeParent ? baseClass + "--active" : ""),
        disabled: item.disabled,
        dhx_id: item.id,
    }, asMenuItem ? [
        item.icon || item.value ? dom_1.el("span.dhx_menu-button__block.dhx_menu-button__block--left", [
            item.icon && dom_1.el("span.dhx_menu-button__icon", {
                class: item.icon
            }),
            item.value && dom_1.el("span.dhx_menu-button__text", item.value),
        ]) : null,
        (item.count > 0 || item.hotkey || item.items) ? dom_1.el("span.dhx_menu-button__block.dhx_menu-button__block--right", [
            item.count > 0 && helpers_1.getCount(item, " dhx_menu-button__count", false),
            item.hotkey && dom_1.el("span.dhx_menu-button__hotkey", item.hotkey),
            item.items && dom_1.el("span.dhx_menu-button__caret.dxi.dxi-menu-right"),
        ]) : null
    ] : [
        item.value && dom_1.el("span.dhx_nav-menu-button__text", item.value),
    ]);
}
exports.menuItem = menuItem;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function separator(item, widgetName) {
    return null;
}
exports.separator = separator;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function spacer(_item, widgetName) {
    return null;
}
exports.spacer = spacer;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
function title(item, widgetName) {
    return dom_1.el("span", {
        class: "dhx_navbar-title" + " dhx_navbar-title--" + widgetName,
    }, item.value);
}
exports.title = title;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutConfig = {
    css: "vault-layout",
    rows: [
        {
            id: "topbar",
            css: "vault-topbar"
        },
        {
            id: "vault",
            css: "vault-file-grid"
        }
    ]
};
exports.layoutConfigWithoutTopbar = {
    css: "vault-layout",
    rows: [
        {
            id: "vault",
            css: "vault-file-grid"
        }
    ]
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(35);
var basis = [
    "byte",
    "kilobyte",
    "megabyte",
    "gigabyte"
];
function getBasis(size, current) {
    if (size === void 0) { size = 0; }
    if (current === void 0) { current = 0; }
    return size < 1024 ? size + " " + en_1.default[basis[current]] : this.getBasis(Math.round(size / 1024), current + 1);
}
exports.getBasis = getBasis;
var MAX_WORD_LENGTH = 13;
function truncateWord(word, len) {
    if (len === void 0) { len = MAX_WORD_LENGTH; }
    var start;
    var end;
    if (word.length <= len) {
        return word;
    }
    var dotIndex = word.lastIndexOf(".");
    if (dotIndex === -1) {
        end = word.substr(word.length - 4);
        start = word.substr(0, len - 7);
    }
    else {
        var endStartFrom = dotIndex - 3;
        end = word.substr(endStartFrom);
        start = word.substr(0, len - (word.length - endStartFrom));
    }
    return start + "..." + end;
}
exports.truncateWord = truncateWord;
function calculateCover(image) {
    var width = image.width, height = image.height;
    var imageAspectRatio = width / height;
    var sHeight;
    var sWidth;
    var sx;
    var sy;
    if (imageAspectRatio > 1) {
        // width > height
        sWidth = height;
        sHeight = height;
        sx = (width - sWidth) / 2;
        sy = 0;
    }
    else if (imageAspectRatio < 1) {
        // width < height
        sWidth = width;
        sHeight = width;
        sx = 0;
        sy = (height - sHeight) / 2;
    }
    else {
        // width == height
        sHeight = width;
        sWidth = width;
        sx = 0;
        sy = 0;
    }
    return {
        sx: sx,
        sy: sy,
        sWidth: sWidth,
        sHeight: sHeight,
        dx: 0,
        dy: 0
    };
}
exports.calculateCover = calculateCover;
var FileType;
(function (FileType) {
    FileType["image"] = "image";
    FileType["video"] = "video";
    FileType["archive"] = "archive";
    FileType["table"] = "table";
    FileType["document"] = "document";
    FileType["presentation"] = "presentation";
    FileType["application"] = "application";
    FileType["web"] = "web";
    FileType["apple"] = "apple";
    FileType["pdf"] = "pdf";
    FileType["psd"] = "psd";
    FileType["audio"] = "audio";
    FileType["other"] = "other";
    FileType["text"] = "text";
})(FileType = exports.FileType || (exports.FileType = {}));
function getMimeAndExtension(fileWrapper) {
    var extension = fileWrapper.name.split(".").pop() || "none";
    var mime = fileWrapper.file ? fileWrapper.file.type : "";
    return {
        extension: extension,
        mime: mime
    };
}
function getFileType(extension, mime) {
    switch (extension) {
        case "jpg":
        case "jpeg":
        case "gif":
        case "png":
        case "bmp":
        case "tiff":
        case "pcx":
        case "svg":
        case "ico":
            return FileType.image;
        case "avi":
        case "mpg":
        case "mpeg":
        case "rm":
        case "move":
        case "mov":
        case "mkv":
        case "flv":
        case "f4v":
        case "mp4":
        case "3gp":
        case "wmv":
        case "webm":
        case "vob":
            return FileType.video;
        case "rar":
        case "zip":
        case "tar":
        case "tgz":
        case "arj":
        case "gzip":
        case "bzip2":
        case "7z":
        case "ace":
        case "apk":
        case "deb":
        case "zipx":
        case "cab":
        case "tar-gz":
        case "rpm":
        case "xar":
            return FileType.archive;
        case "xlr":
        case "xls":
        case "xlsm":
        case "xlsx":
        case "ods":
        case "csv":
        case "tsv":
            return FileType.table;
        case "doc":
        case "docx":
        case "docm":
        case "dot":
        case "dotx":
        case "odt":
        case "wpd":
        case "wps":
        case "pages":
            return FileType.document;
        case "wav":
        case "aiff":
        case "au":
        case "mp3":
        case "aac":
        case "wma":
        case "ogg":
        case "flac":
        case "ape":
        case "wv":
        case "m4a":
        case "mid":
        case "midi":
            return FileType.audio;
        case "pot":
        case "potm":
        case "potx":
        case "pps":
        case "ppsm":
        case "ppsx":
        case "ppt":
        case "pptx":
        case "pptm":
        case "odp":
            return FileType.presentation;
        case "html":
        case "htm":
        case "eml":
            return FileType.web;
        case "exe":
            return FileType.application;
        case "dmg":
            return FileType.apple;
        case "pdf":
        case "ps":
        case "eps":
            return FileType.pdf;
        case "psd":
            return FileType.psd;
        case "txt":
        case "djvu":
        case "nfo":
        case "xml":
            return FileType.text;
        default:
            var type = mime.split("/")[0];
            switch (type) {
                case "image":
                    return FileType.image;
                case "audio":
                    return FileType.audio;
                case "video":
                    return FileType.video;
                default:
                    return FileType.other;
            }
    }
}
exports.getFileType = getFileType;
function getFileClassName(fileWrapper) {
    var _a = getMimeAndExtension(fileWrapper), mime = _a.mime, extension = _a.extension;
    return getFileType(extension, mime) + " extension-" + extension;
}
exports.getFileClassName = getFileClassName;
function isImage(fileWrapper) {
    var _a = getMimeAndExtension(fileWrapper), mime = _a.mime, extension = _a.extension;
    var fileType = getFileType(extension, mime);
    return fileType === FileType.image;
}
exports.isImage = isImage;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(4);
var en_1 = __webpack_require__(35);
var types_1 = __webpack_require__(26);
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(events, config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = events;
        _this._progress = 0;
        var render = function () { return _this._draw(); };
        _this.mount(null, dom_1.create({
            render: render
        }));
        _this._abortUpload = function () {
            _this.events.fire(types_1.ProgressBarEvents.cancel);
        };
        return _this;
    }
    ProgressBar.prototype.setState = function (progress, extra) {
        this._progress = progress;
        if (this.config.template) {
            this._progressText = this.config.template(progress, extra);
        }
        else {
            this._progressText = this._progress.toFixed(1) + "%";
        }
        this.paint();
    };
    ProgressBar.prototype._draw = function () {
        return dom_1.el(".progress-bar", {
            _key: this._uid
        }, [
            dom_1.el(".progress-indicator", {
                style: {
                    width: this._progress + "%"
                }
            }),
            dom_1.el(".progress-text", {
                ".innerHTML": this._progressText
            }),
            dom_1.el("button", {
                class: "dhx_btn dhx_btn--flat dhx_btn_small action-abort-all",
                onclick: this._abortUpload
            }, en_1.default.cancel)
        ]);
    };
    return ProgressBar;
}(view_1.View));
exports.ProgressBar = ProgressBar;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReadStackPreview = /** @class */ (function () {
    function ReadStackPreview(data) {
        this._readerStack = [];
        this._isActive = false;
        this._data = data;
    }
    ReadStackPreview.prototype.add = function (fileWrapper, wait) {
        if (wait === void 0) { wait = false; }
        this._readerStack.push(fileWrapper);
        if (!wait) {
            this.read();
        }
    };
    ReadStackPreview.prototype.read = function () {
        var _this = this;
        if (!this._readerStack.length || this._isActive) {
            return;
        }
        var fileWrapper = this._readerStack.shift();
        this._isActive = true;
        var reader = new FileReader();
        reader.readAsDataURL(fileWrapper.file);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                if (_this._data.exists(fileWrapper.id)) {
                    _this._data.update(fileWrapper.id, { image: image });
                }
                _this._isActive = false;
                _this.read();
            };
        };
        reader.onerror = function () {
            _this._isActive = false;
            _this.read();
        };
    };
    ReadStackPreview.prototype.stop = function () {
        this._readerStack = [];
    };
    return ReadStackPreview;
}());
exports.ReadStackPreview = ReadStackPreview;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var Keymanager_1 = __webpack_require__(13);
var types_1 = __webpack_require__(21);
var view_1 = __webpack_require__(4);
var Selection_1 = __webpack_require__(62);
var html_1 = __webpack_require__(3);
var types_2 = __webpack_require__(37);
var editors_1 = __webpack_require__(123);
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(node, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, node, core_1.extend({
            itemHeight: config.virtual ? 34 : config.itemHeight || null,
            keyNavigation: false,
            multiselectionMode: config.multiselectionMode ? config.multiselectionMode : "click",
            editing: false
        }, config)) || this;
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        _this.selection = new Selection_1.Selection({
            multiselection: _this.config.multiselection,
            multiselectionMode: _this.config.multiselectionMode,
        }, _this.data);
        _this._getHotkeys();
        var updater = function (updateObj) { return function (id, ids) {
            if (ids && ids instanceof Array) {
                ids.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
                return;
            }
            if (_this.data.exists(id)) {
                _this.data.update(id, updateObj);
            }
        }; };
        _this.events.on(ts_data_1.DataEvents.change, function () {
            if (_this.config.virtual) {
                _this._updateVirtual(0);
            }
            _this.paint();
        });
        _this.events.on(ts_data_1.DataEvents.load, function () {
            _this.data.map(function (item) {
                if (item.$selected) {
                    _this.selection.add(item.id);
                    _this.events.fire(types_2.ListEvents.click, [item.id, null]);
                }
            });
        });
        _this.events.on(ts_data_1.DragEvents.canDrop, updater({ $drophere: true }));
        _this.events.on(ts_data_1.DragEvents.cancelDrop, updater({ $drophere: undefined }));
        _this.events.on(ts_data_1.DragEvents.dragStart, updater({ $dragtarget: true }));
        _this.events.on(ts_data_1.DragEvents.dragEnd, updater({ $dragtarget: undefined }));
        _this.events.on(types_2.ListEvents.afterEditEnd, function (value, id) {
            var item = _this.data.getItem(id);
            _this.data.update(id, __assign({}, item, { value: value }));
            _this._edited = null;
            _this._getHotkeys();
            _this.paint();
        });
        _this.selection.events.on(types_1.SelectionEvents.afterSelect, function (id) {
            if (id) {
                _this.setFocusIndex(_this.data.getIndex(id));
            }
        });
        _this._handlers = {
            onmousedown: function (e) {
                var itemsForGhost = [];
                var item = html_1.locateNode(e, "dhx_id");
                var itemId = item && item.getAttribute("dhx_id");
                var selectionIds = _this.selection.getId();
                if (_this.config.multiselection && selectionIds instanceof Array) {
                    selectionIds.map(function (id) {
                        if (id !== itemId) {
                            itemsForGhost.push(_this.getRootView().refs[id].el);
                        }
                    });
                }
                return _this.config.dragMode && !_this._edited ? ts_data_1.dragManager.onMouseDown(e, _this.selection.getId(), itemsForGhost) : null;
            },
            ondragstart: function () { return _this.config.dragMode && !_this._edited ? false : null; },
            oncontextmenu: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.events.fire(types_2.ListEvents.contextmenu, [id, e]);
            },
            onclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.setFocusIndex(_this.data.getIndex(id));
                _this.selection.add(id, e.ctrlKey || e.metaKey, e.shiftKey);
                _this.events.fire(types_2.ListEvents.click, [id, e]);
            },
            ondblclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                if (_this.config.editing) {
                    _this.edit(id);
                }
                _this.events.fire(types_2.ListEvents.doubleClick, [id, e]);
            },
            onscroll: function (e) { return _this.config.virtual ? _this._updateVirtual(e.target.scrollTop) : null; }
        };
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        if (_this.config.virtual) {
            _this._range = [0, 0];
            _this._topOffset = 0;
        }
        var view = dom_1.create({
            render: function () { return _this.config.virtual ? _this._renderVirtualList() : _this._renderList(); },
            hooks: {
                didMount: function (vm) {
                    if (!_this.config.height) {
                        var element = vm.node.el;
                        _this.config.height = (element && element.parentNode && element.parentNode.offsetHeight) || 200;
                    }
                    if (_this.config.virtual) {
                        _this._visibleHeight = _this.config.height;
                        _this._updateVirtual(0);
                    }
                    _this.paint();
                }
            }
        });
        _this.mount(node, view);
        return _this;
    }
    List.prototype.edit = function (id) {
        this._edited = id;
        if (!this.data.getItem(this._edited) || !this.events.fire(types_2.ListEvents.beforeEditStart, [id])) {
            this._edited = null;
            return;
        }
        this._getHotkeys();
        this.paint();
        this.events.fire(types_2.ListEvents.afterEditStart, [id]);
    };
    List.prototype.setFocusIndex = function (index) {
        if (index < 0 || index > this.data.getLength() - 1) {
            return;
        }
        this._focusIndex = index;
        var rootView = this.getRootView();
        if (!rootView || !rootView.node || !rootView.node.el) {
            return;
        }
        var listEl = this.getRootNode();
        if (!listEl) {
            return;
        }
        if (this.config.virtual) {
            var position = index * this.config.itemHeight;
            if (position >= this._visibleHeight + this._topOffset || position < this._topOffset) {
                listEl.scrollTo(0, position);
            }
        }
        else {
            var listItem = listEl.children[index];
            if (!listItem) {
                return;
            }
            if (listItem.offsetTop >= listEl.scrollTop + listEl.clientHeight - listItem.clientHeight) {
                listEl.scrollTop = listItem.offsetTop - listEl.clientHeight + listItem.clientHeight;
            }
            else if (listItem.offsetTop < listEl.scrollTop) {
                listEl.scrollTop = listItem.offsetTop;
            }
        }
        this.events.fire(types_2.ListEvents.focusChange, [this._focusIndex, this.data.getId(this._focusIndex)]);
        this.paint();
    };
    List.prototype.getFocusItem = function () {
        return this.data.getId(this._focusIndex);
    };
    List.prototype.getFocusIndex = function () {
        return this._focusIndex;
    };
    List.prototype.destructor = function () {
        if (this._navigationDestructor) {
            this._navigationDestructor();
        }
        if (this._documentClickDestuctor) {
            this._documentClickDestuctor();
        }
        this.unmount();
    };
    List.prototype._renderItem = function (item, index) {
        var html = (this.config.template && this.config.template(item)) || item.html;
        var focus = index === this._focusIndex;
        if (item.id === this._edited) {
            var editor = editors_1.getEditor(item, this);
            return editor.toHTML();
        }
        return html ? this._renderAsHtml(html, item, focus) : this._renderAsValue(item, focus);
    };
    List.prototype._renderAsHtml = function (html, item, focus) {
        var itemHeight = this.config.itemHeight;
        return dom_1.el("li", {
            "class": "dhx_list-item" +
                (item.$selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (item.$drophere && !this._edited ? " dhx_list-item--drophere" : "") +
                (item.$dragtarget && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                // (this.selection.getItem() )
                (item.css ? " " + item.css : ""),
            "dhx_id": item.id,
            "_ref": item.id,
            "style": {
                height: itemHeight
            },
            "_key": item.id,
            ".innerHTML": html
        });
    };
    List.prototype._renderAsValue = function (item, focus) {
        var itemHeight = this.config.itemHeight;
        return dom_1.el("li", {
            class: "dhx_list-item dhx_list-item--text" +
                (item.$selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (item.$drophere && !this._edited ? " dhx_list-item--drophere" : "") +
                (item.$dragtarget && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                (item.css ? " " + item.css : ""),
            dhx_id: item.id,
            _ref: item.id,
            style: {
                height: itemHeight
            },
            _key: item.id,
        }, item.text || item.value);
    };
    List.prototype._renderList = function () {
        var _this = this;
        var kids = this.data.map(function (obj, index) { return _this._renderItem(obj, index); });
        return dom_1.el("ul.dhx_widget.dhx_list", __assign({ style: {
                "max-height": this.config.height + "px",
                "position": "relative"
            }, class: this.config.css +
                (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""), dhx_widget_id: this._uid }, this._handlers), kids);
    };
    List.prototype._renderVirtualList = function () {
        var _this = this;
        var kids = this.data.mapRange(this._range[0], this._range[1], function (obj, index) { return _this._renderItem(obj, index); });
        return dom_1.el(".dhx_widget.dhx_virtual-list-wrapper", __assign({ dhx_widget_id: this._uid, style: {
                "max-height": this._visibleHeight
            } }, this._handlers), [
            dom_1.el("ul.dhx_list.dhx_list--virtual", {
                class: this.config.css +
                    (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""),
                style: {
                    "height": this._getHeight() + "px",
                    "padding-top": this._topOffset + "px"
                },
            }, kids)
        ]);
    };
    List.prototype._updateVirtual = function (position) {
        var overscanCount = 5;
        var totalHeight = this._getHeight();
        if (position > totalHeight - this._visibleHeight) {
            position = totalHeight - this._visibleHeight;
        }
        var count = Math.floor(this._visibleHeight / this.config.itemHeight) + overscanCount;
        var index = Math.floor(position / this.config.itemHeight);
        this._range = [index, count + index];
        this._topOffset = position;
        this.paint();
    };
    List.prototype._getHeight = function () {
        return this.data.getLength() * this.config.itemHeight;
    };
    List.prototype._getHotkeys = function () {
        var _this = this;
        if (this.config.keyNavigation) {
            if (this._edited) {
                if (this._navigationDestructor) {
                    this._navigationDestructor();
                }
            }
            else {
                var keyNavigation = this.config.keyNavigation;
                if (typeof this.config.keyNavigation !== "function") {
                    this._widgetInFocus = false;
                    keyNavigation = function () { return _this._widgetInFocus; };
                    this._documentClickDestuctor = core_1.detectWidgetClick(this._uid, function (isInnerClick) { return _this._widgetInFocus = isInnerClick; });
                }
                var preventEvent = function (fn) { return function (e) {
                    e.preventDefault();
                    fn();
                }; };
                this._navigationDestructor = Keymanager_1.addHotkeys({
                    "arrowdown": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex + 1); }),
                    "arrowup": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex - 1); }),
                    "enter": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                    "enter+shift": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, false, true);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                    "enter+ctrl": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, true, false);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                    "enter+meta": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, true, false);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    }
                }, keyNavigation);
            }
        }
    };
    return List;
}(view_1.View));
exports.List = List;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputEditor_1 = __webpack_require__(124);
function getEditor(item, list) {
    return new InputEditor_1.InputEditor(item, list);
}
exports.getEditor = getEditor;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(37);
var InputEditor = /** @class */ (function () {
    function InputEditor(item, list) {
        var _this = this;
        this._list = list;
        this._config = list.config;
        this._item = item;
        this._list.events.on(types_1.ListEvents.focusChange, function (index, id) {
            if (_this._mode && id !== _this._item.id) {
                _this.endEdit();
            }
        });
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        if (this._input) {
            var value = this._input.value;
            if (this._list.events.fire(types_1.ListEvents.beforeEditEnd, [value, this._item.id])) {
                this._input.removeEventListener("blur", this._handlers.onBlur);
                this._input.removeEventListener("change", this._handlers.onChange);
                this._handlers = {};
                this._mode = false;
                this._list.events.fire(types_1.ListEvents.afterEditEnd, [value, this._item.id]);
            }
            else {
                this._input.focus();
            }
        }
    };
    InputEditor.prototype.toHTML = function () {
        this._mode = true;
        var itemHeight = this._config.itemHeight;
        return dom_1.el(".dhx_input-wrapper", {}, [
            dom_1.el("div.dhx_input-container", {}, [
                dom_1.el("input.dhx_input", {
                    class: this._item.css ? " " + this._item.css : "",
                    style: {
                        height: itemHeight,
                        width: "100%",
                        padding: "8px, 12px",
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert,
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id
                }),
            ]),
        ]);
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.value = _this._item.value;
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            }
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var ts_timepicker_1 = __webpack_require__(29);
var DateHelper_1 = __webpack_require__(130);
var DateFormatter_1 = __webpack_require__(38);
var helper_1 = __webpack_require__(131);
var en_1 = __webpack_require__(39);
var types_1 = __webpack_require__(67);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            weekStart: "sunday",
            thisMonthOnly: false,
            dateFormat: (window && window.dhx && window.dhx.dateFormat),
            width: "250px"
        }, config)) || this;
        _this.events = new events_1.EventSystem();
        if (!_this.config.dateFormat) {
            if (_this.config.timePicker) {
                if (_this.config.timeFormat === 12) {
                    _this.config.dateFormat = "%d/%m/%y %h:%i %A";
                }
                else {
                    _this.config.dateFormat = "%d/%m/%y %H:%i";
                }
            }
            else {
                _this.config.dateFormat = "%d/%m/%y";
            }
        }
        if (_this.config.value) {
            _this._selected = DateHelper_1.DateHelper.toDateObject(_this.config.value, _this.config.dateFormat);
        }
        if (_this.config.date) {
            _this._currentDate = DateHelper_1.DateHelper.toDateObject(_this.config.date, _this.config.dateFormat);
        }
        else if (_this._selected) {
            _this._currentDate = new Date(_this._selected);
        }
        else {
            _this._currentDate = new Date();
        }
        switch (_this.config.view) {
            case types_1.ViewMode.months:
                _this._currentViewMode = types_1.ViewMode.months;
                break;
            case types_1.ViewMode.years:
                _this._currentViewMode = types_1.ViewMode.years;
                break;
            default:
                _this._currentViewMode = types_1.ViewMode.days;
        }
        _this._initHandlers();
        if (_this.config.timePicker) {
            _this._timepicker = new ts_timepicker_1.Timepicker(null, { timeFormat: _this.config.timeFormat, actions: true });
            var initTime = _this._selected || new Date();
            _this._timepicker.setValue(initTime);
            _this._time = _this._timepicker.getValue();
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.close, function () {
                _this._timepicker.setValue(_this._time);
                _this.showDate(null, types_1.ViewMode.days);
            });
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.save, function () {
                var _a = _this._timepicker.getValue(true), hour = _a.hour, minute = _a.minute, AM = _a.AM;
                var oldDate = _this._selected;
                var newDate = _this._selected = DateHelper_1.DateHelper.withHoursAndMinutes(_this._selected || new Date(), AM === false ? hour + 12 : hour, minute);
                if (_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                    _this._selected = newDate;
                    _this.events.fire(types_1.CalendarEvents.change, [newDate, oldDate, true]);
                }
                _this._time = _this._timepicker.getValue();
                _this.showDate(null, types_1.ViewMode.days);
            });
        }
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Calendar.prototype.setValue = function (date) {
        date = DateHelper_1.DateHelper.toDateObject(date, this.config.dateFormat);
        var oldDate = DateHelper_1.DateHelper.copy(this._selected);
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, [date, oldDate, false])) {
            return false;
        }
        this._selected = date;
        this._currentDate = DateHelper_1.DateHelper.copy(this._selected);
        if (this._timepicker) {
            this._timepicker.setValue(date);
            this._time = this._timepicker.getValue();
        }
        this.events.fire(types_1.CalendarEvents.change, [date, oldDate, false]);
        this.paint();
        return true;
    };
    Calendar.prototype.getValue = function (asDateObject) {
        if (!this._selected) {
            return null;
        }
        if (asDateObject) {
            return DateHelper_1.DateHelper.copy(this._selected);
        }
        else {
            return DateFormatter_1.getFormatedDate(this.config.dateFormat, this._selected);
        }
    };
    Calendar.prototype.showDate = function (date, mode) {
        if (date) {
            this._currentDate = date;
        }
        if (mode) {
            this._currentViewMode = mode;
        }
        this.paint();
    };
    Calendar.prototype.destructor = function () {
        if (this._linkedCalendar) {
            this._unlink();
        }
        if (this._timepicker) {
            this._timepicker.destructor();
        }
        this.unmount();
    };
    Calendar.prototype.link = function (targetCalendar) {
        var _this = this;
        if (this._linkedCalendar) {
            this._unlink();
        }
        this._linkedCalendar = targetCalendar;
        var rawLowerData = this.getValue(true);
        var rawUpperDate = targetCalendar.getValue(true);
        var lowerDate = rawLowerData && DateHelper_1.DateHelper.dayStart(rawLowerData);
        var upperDate = rawUpperDate && DateHelper_1.DateHelper.dayStart(rawUpperDate);
        var rangeMark = function (date) {
            if (lowerDate && upperDate) {
                return date >= lowerDate && date <= upperDate && getRangeClass(date);
            }
        };
        var getRangeClass = function (date) {
            if (DateHelper_1.DateHelper.isSameDay(upperDate, lowerDate)) {
                return null;
            }
            var positionInRange = "dhx_calendar-day--in-range";
            if (DateHelper_1.DateHelper.isSameDay(date, lowerDate)) {
                positionInRange += " dhx_calendar-day--first-date";
            }
            if (DateHelper_1.DateHelper.isSameDay(date, upperDate)) {
                positionInRange += " dhx_calendar-day--last-date";
            }
            return positionInRange;
        };
        if (!this.config.block || !this._linkedCalendar.config.block) {
            this.config.block = function (date) {
                if (upperDate) {
                    return date > upperDate;
                }
            };
            this._linkedCalendar.config.block = function (date) {
                if (lowerDate) {
                    return date < lowerDate;
                }
            };
        }
        this.config.thisMonthOnly = true;
        targetCalendar.config.thisMonthOnly = true;
        if (!this.config.$rangeMark || !this._linkedCalendar.config.$rangeMark) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = rangeMark;
        }
        this.events.on(types_1.CalendarEvents.change, function (date) {
            lowerDate = DateHelper_1.DateHelper.dayStart(date);
            _this._linkedCalendar.paint();
        }, "link");
        this._linkedCalendar.events.on(types_1.CalendarEvents.change, function (date) {
            upperDate = DateHelper_1.DateHelper.dayStart(date);
            _this.paint();
        }, "link");
        this._linkedCalendar.paint();
        this.paint();
    };
    Calendar.prototype._unlink = function () {
        if (this._linkedCalendar) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null;
            this.config.block = this._linkedCalendar.config.block = null;
            this.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.paint();
            this.paint();
            this._linkedCalendar = null;
        }
    };
    Calendar.prototype._draw = function () {
        switch (this._currentViewMode) {
            case types_1.ViewMode.days:
                return this._drawCalendar();
            case types_1.ViewMode.months:
                return this._drawMonthSelector();
            case types_1.ViewMode.years:
                return this._drawYearSelector();
            case types_1.ViewMode.timepicker:
                return this._drawTimepicker();
        }
    };
    Calendar.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onclick: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    var date = vn.attrs._date;
                    var oldDate = DateHelper_1.DateHelper.copy(_this._selected);
                    switch (_this._currentViewMode) {
                        case types_1.ViewMode.days:
                            var mergedDate = _this.config.timePicker ? DateHelper_1.DateHelper.mergeHoursAndMinutes(date, _this._selected || _this._currentDate) : date;
                            if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [mergedDate, oldDate, true])) {
                                return;
                            }
                            _this._selected = mergedDate;
                            _this.showDate(date);
                            _this.events.fire(types_1.CalendarEvents.change, [date, oldDate, true]);
                            break;
                        case types_1.ViewMode.months:
                            if (_this.config.view !== types_1.ViewMode.months) {
                                DateHelper_1.DateHelper.setMonth(_this._currentDate, date);
                                _this.showDate(null, types_1.ViewMode.days);
                            }
                            else {
                                var newDate = DateHelper_1.DateHelper.fromYearAndMonth(_this._currentDate.getFullYear() || _this._selected.getFullYear(), date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._selected, oldDate, true]);
                                _this.paint();
                            }
                            break;
                        case types_1.ViewMode.years:
                            if (_this.config.view !== types_1.ViewMode.years) {
                                DateHelper_1.DateHelper.setYear(_this._currentDate, date);
                                _this.showDate(null, types_1.ViewMode.months);
                            }
                            else {
                                var newDate = DateHelper_1.DateHelper.fromYear(date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._selected, oldDate, true]);
                                _this.paint();
                            }
                    }
                },
                ".dhx_calendar-action__cancel": function () { return _this.showDate(_this._selected, types_1.ViewMode.days); },
                ".dhx_calendar-action__show-month": function () { return _this.showDate(null, types_1.ViewMode.months); },
                ".dhx_calendar-action__show-year": function () { return _this.showDate(null, types_1.ViewMode.years); },
                ".dhx_calendar-action__next": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case types_1.ViewMode.days:
                            newDate = DateHelper_1.DateHelper.addMonth(_this._currentDate, 1);
                            break;
                        case types_1.ViewMode.months:
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, 1);
                            break;
                        case types_1.ViewMode.years:
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, 12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__prev": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case types_1.ViewMode.days:
                            newDate = DateHelper_1.DateHelper.addMonth(_this._currentDate, -1);
                            break;
                        case types_1.ViewMode.months:
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, -1);
                            break;
                        case types_1.ViewMode.years:
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, -12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__show-timepicker": function () {
                    _this._currentViewMode = types_1.ViewMode.timepicker;
                    _this.paint();
                }
            },
            onmouseover: {
                ".dhx_calendar-day": function (e, vn) { return _this.events.fire(types_1.CalendarEvents.dateHover, [e, new Date(vn.attrs._date)]); }
            }
        };
    };
    Calendar.prototype._getData = function (d) {
        var firstDay = this.config.weekStart === "monday" ? 1 : 0;
        var first = DateHelper_1.DateHelper.weekStart(DateHelper_1.DateHelper.monthStart(d), firstDay);
        var data = [];
        var weeksCount = 6;
        var currentDate = first;
        while (weeksCount--) {
            var currentWeek = DateHelper_1.DateHelper.getWeekNumber(currentDate);
            var disabledDays = 0;
            var daysCount = 7;
            var days = [];
            while (daysCount--) {
                var isDateWeekEnd = DateHelper_1.DateHelper.isWeekEnd(currentDate);
                var isCurrentMonth = d.getMonth() === currentDate.getMonth();
                var isBlocked = this.config.block && this.config.block(currentDate);
                var css = [];
                if (isDateWeekEnd && isCurrentMonth) {
                    css.push("dhx_calendar-day--weekend");
                }
                if (!isCurrentMonth) {
                    if (this.config.thisMonthOnly) {
                        disabledDays++;
                        css.push("dhx_calendar-day--hidden");
                    }
                    else {
                        css.push("dhx_calendar-day--muffled");
                    }
                }
                if (this.config.mark) {
                    var markedCss = this.config.mark(currentDate);
                    if (markedCss) {
                        css.push(markedCss);
                    }
                }
                if (this.config.$rangeMark) {
                    var rangeMark = this.config.$rangeMark(currentDate);
                    if (rangeMark) {
                        css.push(rangeMark);
                    }
                }
                if (isBlocked) {
                    if (isDateWeekEnd) {
                        css.push("dhx_calendar-day--weekend-disabled");
                    }
                    else {
                        css.push("dhx_calendar-day--disabled");
                    }
                }
                if (this._selected && currentDate.getDate() === this._selected.getDate()
                    && currentDate.getMonth() === this._selected.getMonth()
                    && this._selected.getFullYear() === currentDate.getFullYear()) {
                    css.push("dhx_calendar-day--selected");
                }
                days.push({
                    date: currentDate,
                    day: currentDate.getDate(),
                    css: css.join(" ")
                });
                currentDate = DateHelper_1.DateHelper.addDay(currentDate);
            }
            data.push({
                weekNumber: currentWeek,
                days: days,
                disabledWeekNumber: disabledDays === 7
            });
        }
        return data;
    };
    Calendar.prototype._drawCalendar = function () {
        var date = this._currentDate;
        var weekDays = this.config.weekStart === "monday"
            ? en_1.default.daysShort.slice(1).concat([en_1.default.daysShort[0]]) : en_1.default.daysShort;
        var weekDaysHeader = weekDays.map(function (day) { return dom_1.el(".dhx_calendar-weekday", day); });
        var data = this._getData(date);
        var content = [];
        var weekNumbers = [];
        var weekNumbersWrapper;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var week = data_1[_i];
            var weekRow = week.days.map(function (item) { return dom_1.el("div.dhx_calendar-day", {
                class: item.css,
                _date: item.date,
                tabIndex: 1,
            }, item.day); });
            if (this.config.weekNumbers && !(week.disabledWeekNumber && this.config.thisMonthOnly)) {
                weekNumbers.push(dom_1.el("div", {
                    class: "dhx_calendar-week-number"
                }, week.weekNumber));
            }
            content = content.concat(weekRow);
        }
        if (this.config.weekNumbers) {
            weekNumbersWrapper = dom_1.el(".dhx_calendar__week-numbers", weekNumbers);
        }
        var widgetClass = "dhx_calendar dhx_widget" +
            (this.config.css ? " " + this.config.css : "") +
            (this.config.timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: { width: this.config.weekNumbers ? "calc(" + this.config.width + " + 48px )" : this.config.width } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", en_1.default.months[date.getMonth()] + " " + date.getFullYear())),
                this.config.weekNumbers && dom_1.el(".dhx_calendar__dates-wrapper", [
                    dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                    dom_1.el(".dhx_calendar__days", content),
                    weekNumbersWrapper
                ]),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__days", content),
                this.config.timePicker ?
                    dom_1.el(".dhx_timepicker__actions", [
                        dom_1.el("button.dhx_calendar__timepicker-button." +
                            "dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", [
                            dom_1.el("span.dhx_button__icon.dxi.dxi-clock-outline"),
                            dom_1.el("span.dhx_button__text", this._time),
                        ])
                    ]) : null,
            ])
        ]);
    };
    Calendar.prototype._drawMonthSelector = function () {
        var date = this._currentDate;
        var currentMonth = date.getMonth();
        var currentYear = this._selected ? this._selected.getFullYear() : null;
        var widgetClass = "dhx_calendar dhx_widget" +
            (this.config.css ? " " + this.config.css : "") +
            (this.config.timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: {
                width: this.config.weekNumbers ? "calc(" + this.config.width + " + 48px)" : this.config.width,
            } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", date.getFullYear())),
                dom_1.el(".dhx_calendar__months", en_1.default.monthsShort.map(function (item, i) { return dom_1.el("div", {
                    class: "dhx_calendar-month" + (currentMonth === i && currentYear === date.getFullYear() ? " dhx_calendar-month--selected" : ""),
                    tabIndex: 1,
                    _date: i
                }, item); })),
                this.config.view !== types_1.ViewMode.months ? dom_1.el(".dhx_calendar__actions", [
                    dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", en_1.default.cancel)
                ]) : null
            ])
        ]);
    };
    Calendar.prototype._drawYearSelector = function () {
        var _this = this;
        var date = this._currentDate;
        var yearsDiapason = DateHelper_1.DateHelper.getTwelweYears(date);
        var widgetClass = "dhx_calendar dhx_widget" +
            (this.config.css ? " " + this.config.css : "") +
            (this.config.timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: { width: this.config.weekNumbers ? "calc(" + this.config.width + " + 48px)" : this.config.width } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", yearsDiapason[0] + "-" + yearsDiapason[yearsDiapason.length - 1])),
                dom_1.el(".dhx_calendar__years", yearsDiapason.map(function (item) { return dom_1.el("div", {
                    class: "dhx_calendar-year" + (_this._selected && item === _this._selected.getFullYear() ? " dhx_calendar-year--selected" : ""),
                    _date: item,
                    tabIndex: 1,
                }, item); })),
                this.config.view !== types_1.ViewMode.years && this.config.view !== types_1.ViewMode.months ? dom_1.el(".dhx_calendar__actions", [
                    dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", en_1.default.cancel)
                ]) : null
            ])
        ]);
    };
    Calendar.prototype._drawHeader = function (actionContent) {
        return dom_1.el(".dhx_calendar__navigation", [
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" + helper_1.linkButtonClasses + ".dhx_button--icon.dhx_button--circle", [
                dom_1.el(".dhx_button__icon.dxi.dxi-chevron-left")
            ]),
            actionContent,
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__next" + helper_1.linkButtonClasses + ".dhx_button--icon.dhx_button--circle", [
                dom_1.el(".dhx_button__icon.dxi.dxi-chevron-right")
            ]),
        ]);
    };
    Calendar.prototype._drawTimepicker = function () {
        return dom_1.el(".dhx_widget.dhx-calendar", {
            class: (this.config.css ? " " + this.config.css : ""),
            style: { width: this.config.weekNumbers ? "calc(" + this.config.width + " + 48px)" : this.config.width }
        }, [
            dom_1.inject(this._timepicker.getRootView())
        ]);
    };
    return Calendar;
}(view_1.View));
exports.Calendar = Calendar;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var ts_layout_1 = __webpack_require__(12);
var ts_slider_1 = __webpack_require__(30);
var en_1 = __webpack_require__(65);
var helper_1 = __webpack_require__(129);
var types_1 = __webpack_require__(66);
var Timepicker = /** @class */ (function (_super) {
    __extends(Timepicker, _super);
    function Timepicker(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            timeFormat: 24,
            actions: false
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._time = {
            h: 0,
            m: 0,
            isAM: true
        };
        if (_this.config.timeFormat === 12) {
            _this._time.h = 12;
        }
        _this._initUI(container);
        _this._initHandlers();
        _this._initEvents();
        return _this;
    }
    Timepicker.prototype.getValue = function (asOBject) {
        var _a = this._time, h = _a.h, m = _a.m, isAM = _a.isAM;
        if (asOBject) {
            var obj = {
                hour: h,
                minute: m
            };
            if (this.config.timeFormat === 12) {
                obj.AM = isAM;
            }
            return obj;
        }
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + (this.config.timeFormat === 12 ? (isAM ? "AM" : "PM") : "");
    };
    Timepicker.prototype.setValue = function (value) {
        var m;
        var h;
        var isPM;
        if (typeof value === "number") {
            value = new Date(value);
        }
        if (value instanceof Date) {
            m = value.getMinutes();
            h = value.getHours();
        }
        else if (Array.isArray(value)) {
            h = validate(value[0], 23);
            m = validate(value[1], 59);
            if (value[2] && value[2].toLowerCase() === "pm") {
                isPM = true;
            }
        }
        else {
            var matches = value.match(/\d+/g);
            h = validate(+matches[0], 23);
            m = validate(+matches[1], 59);
            if (value.toLowerCase().indexOf("pm") !== -1) {
                isPM = true;
            }
        }
        if (isPM && h < 12) {
            h += 12;
        }
        this._hoursSlider.setValue(h);
        this._minutesSlider.setValue(m);
        if (helper_1.isTimeCheck(value)) {
            this._hoursSlider.setValue(0);
            this._minutesSlider.setValue(m);
            this._time.isAM = true;
        }
        this._inputsView.paint();
    };
    Timepicker.prototype.destructor = function () {
        this._minutesSlider.destructor();
        this._hoursSlider.destructor();
        this.events.clear();
        this.unmount();
    };
    Timepicker.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Timepicker.prototype._initUI = function (container) {
        var _this = this;
        var layoutConfig = {
            gravity: false,
            css: "dhx_timepicker " +
                (this.config.css ? this.config.css : "") +
                (this.config.actions ? " dhx_timepicker--with-actions" : ""),
            rows: [
                {
                    id: "timepicker",
                    css: "dhx_timepicker__inputs"
                },
                {
                    id: "hour-slider",
                    css: "dhx_timepicker__hour"
                },
                {
                    id: "minute-slider",
                    css: "dhx_timepicker__minute"
                }
            ]
        };
        if (this.config.actions) {
            layoutConfig.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close"
            });
            layoutConfig.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save"
            });
        }
        var layout = this.layout = new ts_layout_1.Layout(container, layoutConfig);
        var timepicker = dom_1.create({
            render: function () { return _this._draw(); }
        });
        var inputsView = this._inputsView = view_1.toViewLike(timepicker);
        var mSlider = this._minutesSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 59,
            step: 1,
            thumbLabel: false,
            labelInline: false,
            label: en_1.default.minutes
        });
        var hSlider = this._hoursSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 23,
            step: 1,
            thumbLabel: false,
            labelInline: false,
            label: en_1.default.hours
        });
        layout.cell("timepicker").attach(inputsView);
        layout.cell("hour-slider").attach(hSlider);
        layout.cell("minute-slider").attach(mSlider);
        if (this.config.actions) {
            var save = function () {
                return dom_1.el("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_medium.dhx_button--circle.dhx_button--width_full", { onclick: _this._outerHandlers.save }, en_1.default.save);
            };
            var close_1 = function () {
                return dom_1.el("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    onclick: _this._outerHandlers.close
                }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close")]);
            };
            layout.cell("save-action").attach(save);
            layout.cell("close-action").attach(close_1);
        }
    };
    Timepicker.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onchange: {
                ".dhx_timepicker-input--hour": function (e) {
                    var hour = validate(parseInt(e.target.value, 10), 23);
                    e.target.value = hour;
                    _this._hoursSlider.setValue(hour);
                },
                ".dhx_timepicker-input--minutes": function (e) {
                    var min = validate(parseInt(e.target.value, 10), 59);
                    e.target.value = min;
                    _this._minutesSlider.setValue(min);
                }
            }
        };
        this._outerHandlers = {
            close: function () { return _this.events.fire(types_1.TimepickerEvents.close); },
            save: function () { return _this.events.fire(types_1.TimepickerEvents.save, [_this._time]); }
        };
    };
    Timepicker.prototype._initEvents = function () {
        var _this = this;
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            if (_this.config.timeFormat === 12) {
                _this._time.isAM = value < 12;
                _this._time.h = value % 12 || 12;
            }
            else {
                _this._time.h = value;
            }
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue()]);
            _this._inputsView.paint();
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            _this._time.m = value;
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue()]);
            _this._inputsView.paint();
        });
    };
    Timepicker.prototype._draw = function () {
        return dom_1.el(".dhx_timepicker-inputs", __assign({}, this._handlers), [
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                value: this._time.h < 10 ? "0" + this._time.h : this._time.h
            }),
            dom_1.el("span.dhx_timepicker-delimer", ":"),
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: this._time.m < 10 ? "0" + this._time.m : this._time.m
            }),
            this.config.timeFormat === 12 ? dom_1.el(".dhx_timepicker-ampm", this._time.isAM ? "AM" : "PM") : null
        ]);
    };
    return Timepicker;
}(view_1.View));
exports.Timepicker = Timepicker;
function validate(value, max) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.min(max, Math.max(0, value));
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var Keymanager_1 = __webpack_require__(13);
var view_1 = __webpack_require__(4);
var ts_popup_1 = __webpack_require__(10);
var types_1 = __webpack_require__(64);
function normalizeValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function parseValue(value, min, max) {
    var values;
    if (value === undefined) {
        values = [];
    }
    else if (Array.isArray(value)) {
        values = value;
    }
    else if (typeof value === "string") {
        values = value.split(",").map(function (v) { return parseInt(v, 10); });
    }
    else {
        values = [value];
    }
    values[0] = values[0] === undefined ? min : normalizeValue(values[0], min, max);
    values[1] = values[1] === undefined ? max : normalizeValue(values[1], min, max);
    return values;
}
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(container, config) {
        var _this = _super.call(this, container, core_1.extend({
            mode: types_1.Direction.horizontal,
            min: 0,
            max: 100,
            step: 1,
            thumbLabel: true,
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._axis = _this.config.mode === types_1.Direction.horizontal ? "clientX" : "clientY";
        _this._initStartPosition();
        _this._initHotkeys();
        var vNode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didMount: function () { return _this._calcSliderPosition(); },
                didRedraw: function () { return _this._calcSliderPosition(); }
            }
        });
        _this._initHandlers();
        _this.mount(container, vNode);
        return _this;
    }
    Slider.prototype.disable = function () {
        this._disabled = true;
        this.paint();
    };
    Slider.prototype.enable = function () {
        this._disabled = false;
        this.paint();
    };
    Slider.prototype.focus = function (extra) {
        this.getRootView().refs[extra ? "extraRunner" : "runner"].el.focus();
    };
    Slider.prototype.getValue = function () {
        var res;
        if (this.config.range) {
            var a = this._getValue(this._currentPosition);
            var b = this._getValue(this._extraCurrentPosition);
            res = a < b ? [a, b] : [b, a];
        }
        else {
            res = [this._getValue(this._currentPosition)];
        }
        return res;
    };
    Slider.prototype.setValue = function (value) {
        var old = this._getValue(this._currentPosition);
        if (Array.isArray(value) && value.length > 1) {
            var oldExtra = this._getValue(this._extraCurrentPosition);
            this._setValue(value[0], false);
            this.events.fire(types_1.SliderEvents.change, [value[0], old, false]);
            this._setValue(value[1], true);
            this.events.fire(types_1.SliderEvents.change, [value[1], oldExtra, true]);
        }
        else {
            value = parseFloat(value);
            if (!isNaN(value)) {
                this._setValue(value);
                this.events.fire(types_1.SliderEvents.change, [value, old, false]);
            }
            else {
                throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
            }
        }
        this.paint();
    };
    Slider.prototype.destructor = function () {
        this._hotkeysDestructor();
        this.unmount();
    };
    Slider.prototype._calcSliderPosition = function () {
        var root = this.getRootView();
        if (!root) {
            return;
        }
        var tracker = root.refs.track.el;
        var rect = tracker.getBoundingClientRect();
        this._offsets = {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset
        };
        this._length = this.config.mode === types_1.Direction.horizontal ? rect.width : rect.height;
    };
    Slider.prototype._initHotkeys = function () {
        var _this = this;
        var isRunnersInFocus = function () {
            var activeEl = document.activeElement;
            var refs = _this.getRootView().refs;
            if (!refs) {
                return false;
            }
            var runner = refs.runner;
            if (runner && runner.el === activeEl) {
                return true;
            }
            if (_this.config.range && refs.extraRunner && refs.extraRunner.el === activeEl) {
                return true;
            }
            return false;
        };
        this._hotkeysDestructor = Keymanager_1.addHotkeys({
            arrowleft: function (e) {
                if (_this.config.mode === types_1.Direction.vertical) {
                    return;
                }
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowright: function (e) {
                if (_this.config.mode === types_1.Direction.vertical) {
                    return;
                }
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowup: function (e) {
                if (_this.config.mode === types_1.Direction.horizontal) {
                    return;
                }
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowdown: function (e) {
                if (_this.config.mode === types_1.Direction.horizontal) {
                    return;
                }
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            }
        }, isRunnersInFocus);
    };
    Slider.prototype._move = function (value, forExtra) {
        if (this.config.inverse) {
            value = -value;
        }
        var oldValue = forExtra ? this._getValue(this._extraCurrentPosition) : this._getValue(this._currentPosition);
        var newValue = oldValue + value;
        this._setValue(oldValue + value, forExtra);
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, forExtra]);
        this.paint();
    };
    Slider.prototype._initStartPosition = function () {
        var _a = this.config, max = _a.max, min = _a.min, range = _a.range;
        var _b = parseValue(this.config.value, this.config.min, this.config.max), value = _b[0], extraValue = _b[1];
        this._currentPosition = (value - min) / (max - min) * 100;
        if (range) {
            this._extraCurrentPosition = (max - extraValue) / (max - min) * 100;
        }
        this._currentPosition = (value - min) / (max - min) * 100;
        if (range) {
            this._extraCurrentPosition = (extraValue - min) / (max - min) * 100;
        }
        if (this._isInverse()) {
            this._currentPosition = 100 - this._currentPosition;
            if (range) {
                this._extraCurrentPosition = 100 - this._extraCurrentPosition;
            }
        }
    };
    Slider.prototype._getValue = function (value) {
        if (this._isInverse()) {
            value = 100 - value;
        }
        var _a = this.config, min = _a.min, max = _a.max, step = _a.step;
        if (value === 100) {
            return max;
        }
        if (value === 0) {
            return min;
        }
        var val = value * (max - min) / 100;
        var remain = val % step;
        var rounder = remain >= step / 2 ? step : 0;
        var result = Number(min) + Number(val) - remain + rounder;
        return +result.toFixed(5);
    };
    Slider.prototype._setValue = function (val, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a = this.config, max = _a.max, min = _a.min;
        if (val > max || val < min) {
            return false;
        }
        var rawValue = (val - min) / (max - min) * 100;
        var newValue = this._isInverse() ? 100 - rawValue : rawValue;
        if (forExtra) {
            this._extraCurrentPosition = newValue;
        }
        else {
            this._currentPosition = newValue;
        }
    };
    Slider.prototype._initHandlers = function () {
        var _this = this;
        var mouseMove = function (e) {
            e.preventDefault();
            var x = (e[_this._axis] - _this._getBegining()) / _this._length * 100;
            if (_this._findNewDirection) {
                if (Math.abs(_this._currentPosition - x) < 1) {
                    return;
                }
                if (x > _this._currentPosition) {
                    _this._possibleRange = [_this._currentPosition, 100];
                }
                else {
                    _this._possibleRange = [0, _this._currentPosition];
                }
                _this._findNewDirection = null;
            }
            if (_this._inSide(x)) {
                _this._updatePosition(x, _this._isExtraActive);
            }
            _this.paint();
        };
        var mouseUp = function (e) {
            _this.events.fire(types_1.SliderEvents.mouseup, [e]);
            setTimeout(function () {
                _this._isMouseMoving = false;
                _this.paint();
            }, 4);
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
        };
        if (this.config.help) {
            this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            this._helper.attachHTML(this.config.help);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            onmousedown: function (e) {
                if (_this._disabled || e.which === 3) {
                    return;
                }
                _this.events.fire(types_1.SliderEvents.mousedown, [e]);
                _this._isMouseMoving = true;
                var active;
                if (e.target.classList.contains("dhx_slider__thumb--extra")) {
                    _this._isExtraActive = true;
                    active = _this._extraCurrentPosition;
                }
                else {
                    _this._isExtraActive = false;
                    active = _this._currentPosition;
                }
                _this._findNewDirection = null;
                // define possible range
                if (_this.config.range) {
                    var _a = _this._currentPosition > _this._extraCurrentPosition ?
                        [_this._currentPosition, _this._extraCurrentPosition] : [_this._extraCurrentPosition, _this._currentPosition], more = _a[0], less = _a[1];
                    if (_this._currentPosition === _this._extraCurrentPosition) {
                        _this._findNewDirection = active;
                        _this._possibleRange = [0, 100];
                    }
                    else if (active < more) {
                        _this._possibleRange = [0, more];
                    }
                    else {
                        _this._possibleRange = [less, 100];
                    }
                }
                else {
                    _this._possibleRange = [0, 100];
                }
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            },
            onlabelClick: function () {
                var refs = _this.getRootView().refs;
                refs.runner.el.focus();
            },
            onclick: function (e) {
                if (_this._disabled || _this._isMouseMoving || e.which === 3) {
                    return;
                }
                var x = (e[_this._axis] - _this._getBegining()) / _this._length * 100;
                var refs = _this.getRootView().refs;
                if (_this.config.range) {
                    var dist = Math.abs(_this._currentPosition - x);
                    var extraDist = Math.abs(_this._extraCurrentPosition - x);
                    if (dist < extraDist) {
                        _this._updatePosition(x, false);
                        refs.runner.el.focus();
                    }
                    else {
                        _this._updatePosition(x, true);
                        refs.extraRunner.el.focus();
                    }
                }
                else {
                    _this._updatePosition(x, false);
                    refs.runner.el.focus();
                }
                _this.paint();
            },
            onmouseover: function () {
                _this._mouseIn = true;
                _this.paint();
            },
            onmouseout: function () {
                _this._mouseIn = false;
                _this.paint();
            },
            onfocus: function () {
                _this._focusIn = true;
                _this.paint();
            },
            onblur: function () {
                _this._focusIn = false;
                _this.paint();
            }
        };
    };
    Slider.prototype._getBegining = function () {
        return this.config.mode === types_1.Direction.horizontal ? this._offsets.left - window.pageXOffset : this._offsets.top - window.pageYOffset;
    };
    Slider.prototype._inSide = function (x) {
        var range = this._possibleRange;
        if (x < range[0]) {
            this._updatePosition(range[0], this._isExtraActive);
            return false;
        }
        if (x > range[1]) {
            this._updatePosition(range[1], this._isExtraActive);
            return false;
        }
        return true;
    };
    Slider.prototype._updatePosition = function (x, extra) {
        if (extra === void 0) { extra = false; }
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var position = extra ? this._extraCurrentPosition : this._currentPosition;
        var oldValue = this._getValue(position);
        var newValue = this._getValue(x);
        if (oldValue === newValue) {
            return;
        }
        var rawValue = (newValue - min) / (max - min) * 100;
        var value = this._isInverse() ? 100 - rawValue : rawValue;
        if (extra) {
            this._extraCurrentPosition = value;
        }
        else {
            this._currentPosition = value;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, extra]);
    };
    Slider.prototype._getRunnerStyle = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a;
        var direction = this.config.mode === types_1.Direction.horizontal ? "left" : "top";
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        return _a = {},
            _a[direction] = pos + "%",
            _a;
    };
    Slider.prototype._isInverse = function () {
        return (this.config.inverse && this.config.mode === types_1.Direction.horizontal) ||
            (!this.config.inverse && this.config.mode === types_1.Direction.vertical);
    };
    Slider.prototype._getRunnerCss = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        return "dhx_slider__thumb" +
            (forExtra ? " dhx_slider__thumb--extra" : "") +
            (this._isMouseMoving && ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) ? " dhx_slider__thumb--active" : "") +
            (this._disabled ? " dhx_slider__thumb--disabled" : "") +
            (this._isNullable(forExtra ? this._extraCurrentPosition : this._currentPosition) && !this.config.range ? " dhx_slider__thumb--nullable" : "");
    };
    Slider.prototype._draw = function () {
        var width = this.config.labelInline && this.config.labelWidth ? this.config.labelWidth : "";
        return dom_1.el("div", {
            class: "dhx_slider" +
                " dhx_slider--mode_" + this.config.mode +
                (this.config.label && this.config.labelInline ? " dhx_slider--label-inline" : "") +
                (this.config.hiddenLabel ? " dhx_slider--label_sr" : "") +
                (this.config.tick ? " dhx_slider--ticks" : "") +
                (this.config.majorTick ? " dhx_slider--major-ticks" : "") +
                (this.config.css ? " " + this.config.css : "")
        }, [
            this.config.label ? dom_1.el("label.dhx_label.dhx_slider__label", {
                style: { minWidth: width, maxWidth: width },
                class: this.config.help ? "dhx_label--with-help" : "",
                onclick: this._handlers.onlabelClick,
            }, this.config.help ? [
                dom_1.el("span.dhx_label__holder", this.config.label),
                dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                }),
            ] : this.config.label) : null,
            this._drawSlider()
        ]);
    };
    Slider.prototype._drawSlider = function () {
        return dom_1.el(".dhx_slider__track-holder", 
        // (this.config.mode === Direction.vertical ? ".dhx_slider--vertical" : ".dhx_slider--horizontal"),
        {
            dhx_widget_id: this._uid,
        }, [
            dom_1.el(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick
            }, [
                this._getDetector(),
                dom_1.el("div", {
                    _ref: "runner",
                    class: this._getRunnerCss(),
                    onmousedown: this._handlers.onmousedown,
                    onmousemove: this._handlers.onmousemove,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    style: this._getRunnerStyle(),
                    tabindex: 0,
                }),
                this.config.thumbLabel && (this._mouseIn || this._focusIn || this._isMouseMoving) ? this._drawThumbLabel() : null,
                this.config.thumbLabel && this.config.range && (this._mouseIn || this._focusIn || this._isMouseMoving) ? this._drawThumbLabel(true) : null,
                this.config.range ? dom_1.el("div", {
                    _ref: "extraRunner",
                    class: this._getRunnerCss(true),
                    onmousedown: this._handlers.onmousedown,
                    onmousemove: this._handlers.onmousemove,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    style: this._getRunnerStyle(true),
                    tabindex: 0,
                }) : null,
            ]),
            this.config.tick ? this._drawTicks() : null
        ]);
    };
    Slider.prototype._getDetector = function () {
        var _a, _b, _c;
        if (this._disabled) {
            return dom_1.el(".dhx_slider__range");
        }
        var direction = this.config.mode === types_1.Direction.horizontal ? "left" : "top";
        var size = this.config.mode === types_1.Direction.horizontal ? "width" : "height";
        if (this.config.range) {
            var _d = this._currentPosition > this._extraCurrentPosition ?
                [this._currentPosition, this._extraCurrentPosition] : [this._extraCurrentPosition, this._currentPosition], more = _d[0], less = _d[1];
            return dom_1.el(".dhx_slider__range", {
                style: (_a = {},
                    _a[direction] = less + "%",
                    _a[size] = more - less + "%",
                    _a)
            });
        }
        if (this._isInverse()) {
            return dom_1.el(".dhx_slider__range", {
                style: (_b = {},
                    _b[direction] = this._currentPosition + "%",
                    _b[size] = 100 - this._currentPosition + "%",
                    _b)
            });
        }
        return dom_1.el(".dhx_slider__range", {
            style: (_c = {},
                _c[direction] = 0,
                _c[size] = this._currentPosition + "%",
                _c)
        });
    };
    Slider.prototype._drawThumbLabel = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a;
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        var direction = this.config.mode === types_1.Direction.horizontal ? "left" : "top";
        var classNameModifiers = this.config.mode === types_1.Direction.horizontal ? ".dhx_slider__thumb-label--horizontal" : ".dhx_slider__thumb-label--vertical";
        if ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) {
            classNameModifiers += ".dhx_slider__thumb-label--active";
        }
        var style = (_a = {},
            _a[direction] = pos + "%",
            _a);
        return dom_1.el(".dhx_slider__thumb-label" + classNameModifiers, {
            style: style
        }, this._getValue(pos));
    };
    Slider.prototype._getTicks = function () {
        var _a = this.config, max = _a.max, min = _a.min, step = _a.step, tick = _a.tick, majorTick = _a.majorTick;
        var len = max - min;
        var tickLength = (step * tick) / len;
        var positions = [];
        var length = 0;
        var index = 0;
        while (length < 1) {
            var tickValue = +(Number(min) + length * len).toFixed(5);
            var isMultiple = index % majorTick === 0;
            positions.push({
                position: (this._isInverse() ? (1 - length) * 100 : length * 100) + "%",
                isMultiple: isMultiple,
                label: isMultiple && typeof this.config.tickTemplate === "function" ? this.config.tickTemplate(tickValue) : null
            });
            length += tickLength;
            index++;
        }
        positions.push({
            position: (this._isInverse() ? 0 : 100) + "%",
            isMultiple: true,
            label: typeof this.config.tickTemplate === "function" ?
                this.config.tickTemplate(max) : null
        });
        return positions;
    };
    Slider.prototype._drawTicks = function () {
        var direction = this.config.mode === types_1.Direction.horizontal ? "left" : "top";
        return dom_1.el(".dhx_slider__ticks-holder", this._getTicks().map(function (tick) {
            var _a;
            return dom_1.el("div", {
                class: "dhx_slider__tick" + (tick.isMultiple ? " dhx_slider__tick--major" : ""),
                style: (_a = {},
                    _a[direction] = tick.position,
                    _a)
            }, tick.label !== undefined ? [
                dom_1.el(".dhx_slider__tick-label", tick.label)
            ] : null);
        }));
    };
    Slider.prototype._isNullable = function (value) {
        if (this._isInverse()) {
            return value === 100;
        }
        else {
            return value === 0;
        }
    };
    return Slider;
}(view_1.View));
exports.Slider = Slider;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var types_1 = __webpack_require__(63);
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, core_1.extend({}, config)) || this;
        var popup = _this._popup = document.createElement("div");
        popup.className = "dhx_widget dhx_popup" + (_this.config.css ? " " + _this.config.css : "");
        popup.style.position = "absolute";
        _this.mount(popup, dom_1.create({
            render: function () { return _this.toVDOM(); }
        }));
        _this._clickEvent = function (e) { return _this.events.fire(types_1.PopupEvents.click, [e]); };
        _this.events = config.events || new events_1.EventSystem(_this);
        _this._isActive = false;
        return _this;
    }
    Popup.prototype.show = function (node, config, attached) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!this.events.fire(types_1.PopupEvents.beforeShow, [node])) {
            return;
        }
        node = html_1.toNode(node);
        if (this._isActive) {
            this._setPopupSize(node, config);
            return;
        }
        if (attached) {
            this.attach(attached);
        }
        this._popup.style.left = "0";
        this._popup.style.top = "0";
        document.body.appendChild(this._popup);
        this._setPopupSize(node, config);
        this._isActive = true;
        setTimeout(function () {
            _this.events.fire(types_1.PopupEvents.afterShow, [node]);
            _this._outerClickDestructor = _this._detectOuterClick(node);
        }, 100);
    };
    Popup.prototype.hide = function () {
        this._hide(false, null);
    };
    Popup.prototype.isVisible = function () {
        return this._isActive;
    };
    Popup.prototype.attach = function (name, config) {
        this._html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    }
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Popup.prototype.attachHTML = function (html) {
        this._html = html;
        this.paint();
    };
    Popup.prototype.getWidget = function () {
        return this._ui;
    };
    Popup.prototype.getContainer = function () {
        return this.getRootView().refs.content.el;
    };
    Popup.prototype.toVDOM = function () {
        var view;
        if (this._html) {
            view = dom_1.el(".dhx_popup__inner-html-content", {
                ".innerHTML": this._html
            });
        }
        else {
            view = this._ui ? this._ui.getRootView() : null;
            if (view && view.render) {
                view = dom_1.inject(view);
            }
        }
        return dom_1.el("div", {
            class: "dhx_popup-content",
            onclick: this._clickEvent,
            _key: this._uid,
            _ref: "content"
        }, [view]);
    };
    Popup.prototype.destructor = function () {
        this.hide();
        if (this._outerClickDestructor) {
            this._outerClickDestructor();
        }
        this._popup = null;
    };
    Popup.prototype._setPopupSize = function (node, config, calls) {
        var _this = this;
        if (calls === void 0) { calls = 3; }
        var _a = this._popup.getBoundingClientRect(), width = _a.width, height = _a.height;
        // TODO: IE popup height = 0
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (calls && (width === 0 || height === 0)) {
            this._timeout = setTimeout(function () {
                if (!_this._isActive) {
                    return;
                }
                _this._setPopupSize(node, config, calls - 1);
                _this._timeout = null;
            });
            return;
        }
        var _b = html_1.fitPosition(node, __assign({ centering: true, mode: html_1.Position.bottom }, config, { width: width, height: height })), left = _b.left, top = _b.top;
        this._popup.style.left = left;
        this._popup.style.top = top;
        if (config.indent && config.indent !== 0) {
            switch (config.mode) {
                case html_1.Position.top:
                    this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) - parseInt(config.indent.toString(), null) + "px";
                    break;
                case html_1.Position.bottom:
                    this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(config.indent.toString(), null) + "px";
                    break;
                case html_1.Position.left:
                    this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) - parseInt(config.indent.toString(), null) + "px";
                    break;
                case html_1.Position.right:
                    this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) + parseInt(config.indent.toString(), null) + "px";
                    break;
                default:
                    this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(config.indent.toString(), null) + "px";
                    break;
            }
        }
    };
    Popup.prototype._detectOuterClick = function (node) {
        var _this = this;
        var outerClick = function (e) {
            var target = e.target;
            while (target) {
                if (target === node || target === _this._popup) {
                    return;
                }
                target = target.parentNode;
            }
            if (_this._hide(true, e)) {
                document.removeEventListener("click", outerClick);
            }
        };
        document.addEventListener("click", outerClick);
        return function () { return document.removeEventListener("click", outerClick); };
    };
    Popup.prototype._hide = function (fromOuterClick, e) {
        if (this._isActive) {
            if (!this.events.fire(types_1.PopupEvents.beforeHide, [fromOuterClick, e])) {
                return false;
            }
            document.body.removeChild(this._popup);
            this._isActive = false;
            if (this._outerClickDestructor) {
                this._outerClickDestructor();
                this._outerClickDestructor = null;
            }
            this.events.fire(types_1.PopupEvents.afterHide, [e]);
            return true;
        }
    };
    return Popup;
}(view_1.View));
exports.Popup = Popup;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function is designed to resolve conflicts with the time setting for the 12 hour format.
 */
function isTimeCheck(value) {
    return /(^12:[0-5][0-9]?AM$)/i.test(value);
}
exports.isTimeCheck = isTimeCheck;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var DateFormatter_1 = __webpack_require__(38);
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.copy = function (d) {
        return new Date(d);
    };
    DateHelper.fromYear = function (year) {
        return new Date(year, 0, 1);
    };
    DateHelper.fromYearAndMonth = function (year, month) {
        return new Date(year, month, 1);
    };
    DateHelper.weekStart = function (d, firstWeekday) {
        var diff = (d.getDay() + 7 - firstWeekday) % 7;
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
    };
    DateHelper.monthStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    };
    DateHelper.yearStart = function (d) {
        return new Date(d.getFullYear(), 0, 1);
    };
    DateHelper.dayStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    DateHelper.addDay = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + count);
    };
    DateHelper.addMonth = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth() + count, 1);
    };
    DateHelper.addYear = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear() + count, d.getMonth(), 0);
    };
    DateHelper.withHoursAndMinutes = function (d, hours, minutes) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes);
    };
    DateHelper.setMonth = function (d, month) {
        d.setMonth(month);
    };
    DateHelper.setYear = function (d, year) {
        d.setFullYear(year);
    };
    DateHelper.mergeHoursAndMinutes = function (source, target) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate(), target.getHours(), target.getMinutes());
    };
    DateHelper.isWeekEnd = function (d) {
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DateHelper.getTwelweYears = function (d) {
        var y = d.getFullYear();
        var firstYear = y - y % 12;
        return core_1.range(firstYear, firstYear + 11);
    };
    DateHelper.getWeekNumber = function (d) {
        if (d.getDay() !== 6) {
            d = DateHelper.addDay(d, 6 - d.getDay());
        }
        var dayMS = 24 * 60 * 60 * 1000;
        var ordinal = (d.valueOf() - DateHelper.yearStart(d).valueOf()) / dayMS;
        return Math.floor((ordinal - d.getDay() + 10) / 7);
    };
    DateHelper.isSameDay = function (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
    };
    DateHelper.toDateObject = function (date, dateFormat) {
        if (typeof date === "string") {
            return DateFormatter_1.stringToDate(date, dateFormat);
        }
        else {
            return new Date(date);
        }
    };
    DateHelper.nullTimestampDate = new Date(0);
    return DateHelper;
}());
exports.DateHelper = DateHelper;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary";


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var color_1 = __webpack_require__(40);
var colors_1 = __webpack_require__(133);
var en_1 = __webpack_require__(41);
var types_1 = __webpack_require__(68);
// tslint:disable-next-line
var tooltip_1 = __webpack_require__(61);
// tslint:disable-next-line
var ts_message_1 = __webpack_require__(19);
var picker_1 = __webpack_require__(134);
var calculations_1 = __webpack_require__(135);
var Colorpicker = /** @class */ (function (_super) {
    __extends(Colorpicker, _super);
    function Colorpicker(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this._setPaletteGrip = function (e) {
            var paletteRect = _this.getRootView().refs.picker_palette.el.getBoundingClientRect();
            var top = e.clientY - paletteRect.top;
            var left = e.clientX - paletteRect.left;
            var _a = calculations_1.calculatePaletteGrip(paletteRect, top, left), s = _a.s, v = _a.v;
            _this._pickerState.hsv.s = s;
            _this._pickerState.hsv.v = v;
            _this.paint();
        };
        _this._setRangeGrip = function (e) {
            var rangeRect = _this.getRootView().refs.hue_range.el.getBoundingClientRect();
            var left = e.clientX - rangeRect.left;
            var _a = calculations_1.calculateRangeGrip(rangeRect, left), h = _a.h, rangeLeft = _a.rangeLeft;
            _this._pickerState.hsv.h = h;
            _this._pickerState.rangeLeft = rangeLeft;
            _this.paint();
        };
        _this._onColorClick = function (_e, node) {
            _this._selected = node.data.color.toUpperCase();
            _this.events.fire(types_1.ColorpickerEvents.colorChange, [_this._selected]);
        };
        _this._container = container;
        _this.config = core_1.extend({
            css: "",
            paletteOnly: false,
            grayShades: true,
            pickerOnly: false,
            customColors: [],
            palette: colors_1.palette,
            width: "238px"
        }, _this.config);
        // [dirty]
        if (!_this.config.palette) {
            _this.config.palette = colors_1.palette;
        }
        if (_this.config.customColors) {
            _this.config.customColors = _this.config.customColors.map(function (color) { return color.toUpperCase(); });
        }
        _this.events = new events_1.EventSystem(_this);
        _this._pickerState = {
            hsv: { h: 0, s: 1, v: 1 },
            currentView: types_1.ViewsTypes.palette,
            customHex: ""
        };
        _this._setHandlers();
        var view = dom_1.create({ render: function () { return _this._getContent(); } });
        _this.mount(_this._container, view);
        return _this;
    }
    Colorpicker.prototype.destructor = function () {
        this.unmount();
    };
    Colorpicker.prototype.focusValue = function (value) {
        if (this._focusColor(value)) {
            this.paint();
        }
    };
    Colorpicker.prototype.setValue = function (value) {
        if (this._focusColor(value)) {
            this.paint();
            this.events.fire(types_1.ColorpickerEvents.colorChange, [this._selected]);
        }
    };
    Colorpicker.prototype.getValue = function () {
        return this._selected;
    };
    Colorpicker.prototype.getCustomColors = function () {
        return this.config.customColors;
    };
    Colorpicker.prototype.setCustomColors = function (customColors) {
        this.config.customColors = customColors.map(function (color) { return color.toUpperCase(); });
        this.paint();
    };
    Colorpicker.prototype.setView = function (view) {
        if (types_1.ViewsTypes[view]) {
            this._pickerState.currentView = view;
            this.events.fire(types_1.ColorpickerEvents.viewChange, [view]);
            this.paint();
        }
    };
    Colorpicker.prototype.getView = function () {
        return this._pickerState.currentView;
    };
    Colorpicker.prototype._setHandlers = function () {
        var _this = this;
        this._handlers = {
            click: {
                ".dhx_palette__cell": this._onColorClick
            },
            mousedown: function (e) {
                var name = html_1.locate(e);
                _this._pickerState.customHex = "";
                if (name === "picker_palette") {
                    _this._setPaletteGrip(e);
                }
                else {
                    _this._setRangeGrip(e);
                }
                var handler = name === "picker_palette" ? _this._setPaletteGrip : _this._setRangeGrip;
                document.addEventListener("mousemove", handler);
                document.addEventListener("mouseup", function () {
                    document.removeEventListener("mousemove", handler);
                });
                _this.paint();
            },
            buttonsClick: function (button) {
                _this.setView(types_1.ViewsTypes.palette);
                if (button === "cancel") {
                    _this.events.fire(types_1.ColorpickerEvents.cancelClick, []);
                    return;
                }
                if (button === "apply" && _this.config.customColors.indexOf(_this._pickerState.background) === -1) {
                    _this.setValue(_this._pickerState.background);
                    _this.events.fire(types_1.ColorpickerEvents.selectClick, []);
                }
            },
            customColorClick: function () {
                _this.setView(types_1.ViewsTypes.picker);
            },
            oninput: function (e) {
                if (_this._inputTimeout) {
                    clearTimeout(_this._inputTimeout);
                }
                _this._inputTimeout = setTimeout(function () {
                    var val = e.target.value;
                    if (val.indexOf("#") === -1) {
                        val = "#" + val;
                    }
                    _this._pickerState.customHex = val;
                    if (color_1.isHex(val)) {
                        _this._pickerState.hsv = color_1.HexToHSV(val);
                        _this.paint();
                    }
                }, 100);
            },
            contextmenu: {
                ".dhx_palette__cell": function (e, node) {
                    e.preventDefault();
                    var index = _this.config.customColors.indexOf(node.data.color);
                    if (index !== -1) {
                        _this._removeCustomColor(index);
                    }
                    _this.paint();
                    return;
                }
            },
            mouseover: {
                ".dhx_palette__cell": function (e) {
                    if (e.target) {
                        tooltip_1.tooltip(en_1.default.rightClickToDelete, {
                            node: e.target,
                            position: ts_message_1.Position.bottom
                        });
                    }
                },
                ".dhx_colorpicker-custom-colors__picker": function (e) {
                    if (e.target) {
                        tooltip_1.tooltip(en_1.default.addNewColor, {
                            node: e.target,
                            position: ts_message_1.Position.bottom
                        });
                    }
                }
            }
        };
        this.events.on(types_1.ColorpickerEvents.colorChange, function () {
            _this.paint();
        });
    };
    Colorpicker.prototype._focusColor = function (value) {
        var hex = value.toUpperCase();
        if (!color_1.isHex(hex)) {
            return false;
        }
        var isInPalette = this.config.palette.reduce(function (state, col) {
            if (state) {
                return state;
            }
            col.forEach(function (color) {
                if (color.toUpperCase() === hex) {
                    state = true;
                    return;
                }
            });
            return state;
        }, false);
        var isInGrayShades = colors_1.grayShades.indexOf(hex) !== -1;
        if (!isInPalette && !isInGrayShades) {
            var colors = this.getCustomColors();
            if (colors.indexOf(hex.toUpperCase()) === -1) {
                colors.push(hex.toUpperCase());
            }
        }
        this._selected = hex || null;
        this._pickerState.hsv = color_1.HexToHSV(hex);
        return true;
    };
    Colorpicker.prototype._removeCustomColor = function (index) {
        this.config.customColors.splice(index, 1);
    };
    Colorpicker.prototype._getCells = function (colors, cellClass) {
        var _this = this;
        if (cellClass === void 0) { cellClass = ""; }
        return colors.reduce(function (cells, color) {
            var selected = (_this._selected || "").toUpperCase() === color.toUpperCase() ? "dhx_palette__cell--selected" : "";
            cells.push(dom_1.el(".dhx_palette__cell", {
                class: selected + " " + cellClass,
                _data: { color: color },
                style: "background:" + color
            }));
            return cells;
        }, []);
    };
    Colorpicker.prototype._getGrayShades = function () {
        return dom_1.el(".dhx_palette__row", this._getCells(colors_1.grayShades));
    };
    Colorpicker.prototype._getPalette = function () {
        var _this = this;
        return this.config.palette.reduce(function (total, row) {
            total.push(dom_1.el(".dhx_palette__col", _this._getCells(row)));
            return total;
        }, []);
    };
    Colorpicker.prototype._getContent = function () {
        var view;
        if (this.config.pickerOnly) {
            view = [picker_1.getPicker(this, this._pickerState, this._handlers)];
        }
        else {
            view = this._pickerState.currentView === "palette" ? [
                this.config.grayShades && this._getGrayShades()
            ].concat((this._getPalette()), [
                !this.config.paletteOnly && dom_1.el(".dhx_colorpicker-custom-colors", {
                    onmouseover: this._handlers.mouseover
                }, [
                    dom_1.el(".dhx_colorpicker-custom-colors__header", [
                        en_1.default.customColors
                    ]),
                    dom_1.el(".dhx_palette--custom.dhx_palette__row", this._getCells(this.config.customColors, "dhx_custom-color__cell").concat([
                        dom_1.el(".dhx_colorpicker-custom-colors__picker", {
                            class: "dxi dxi-plus",
                            onclick: this._handlers.customColorClick,
                            onmouseover: this._handlers.mouseover
                        })
                    ]))
                ]),
            ]) :
                [picker_1.getPicker(this, this._pickerState, this._handlers)];
        }
        return dom_1.el(".dhx_colorpicker", { class: this.config.css, style: { width: this.config.width } }, [
            dom_1.el(".dhx_palette", {
                onclick: this._handlers.click,
                oncontextmenu: this._handlers.contextmenu
            }, view)
        ]);
    };
    return Colorpicker;
}(view_1.View));
exports.Colorpicker = Colorpicker;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.grayShades = [
    "#000000",
    "#4C4C4C",
    "#666666",
    "#808080",
    "#999999",
    "#B3B3B3",
    "#CCCCCC",
    "#E6E6E6",
    "#F2F2F2",
    "#FFFFFF"
];
exports.palette = [
    [
        "#D4DAE4",
        "#B0B8CD",
        "#949DB1",
        "#727A8C",
        "#5E6677",
        "#3F4757",
        "#1D2534"
    ],
    [
        "#FFCDD2",
        "#FE9998",
        "#F35C4E",
        "#E94633",
        "#D73C2D",
        "#CA3626",
        "#BB2B1A"
    ],
    [
        "#F9E6AD",
        "#F4D679",
        "#EDB90F",
        "#EAA100",
        "#EA8F00",
        "#EA7E00",
        "#EA5D00"
    ],
    [
        "#BCE4CE",
        "#90D2AF",
        "#33B579",
        "#36955F",
        "#247346",
        "#1D5B38",
        "#17492D"
    ],
    [
        "#BDF0E9",
        "#92E7DC",
        "#02D7C5",
        "#11B3A5",
        "#018B80",
        "#026B60",
        "#024F43"
    ],
    [
        "#B3E5FC",
        "#81D4FA",
        "#29B6F6",
        "#039BE5",
        "#0288D1",
        "#0277BD",
        "#01579B"
    ],
    [
        "#AEC1FF",
        "#88A3F9",
        "#5874CD",
        "#2349AE",
        "#163FA2",
        "#083596",
        "#002381"
    ],
    [
        "#C5C0DA",
        "#9F97C1",
        "#7E6BAD",
        "#584A8F",
        "#4F4083",
        "#473776",
        "#3A265F"
    ],
    [
        "#D6BDCC",
        "#C492AC",
        "#A9537C",
        "#963A64",
        "#81355A",
        "#6E3051",
        "#4C2640"
    ],
    [
        "#D2C5C1",
        "#B4A09A",
        "#826358",
        "#624339",
        "#5D4037",
        "#4E342E",
        "#3E2723"
    ]
];


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(40);
var dom_1 = __webpack_require__(0);
var en_1 = __webpack_require__(41);
function getPicker(colorpicker, pickerState, handlers) {
    var rgb = color_1.HSVtoRGB(pickerState.hsv);
    pickerState.background = color_1.RGBToHex(rgb);
    var currentBackground = color_1.RGBToHex(color_1.HSVtoRGB({ h: pickerState.hsv.h, s: 1, v: 1 }));
    var root = colorpicker.getRootView();
    var box = root.refs ?
        root.refs.picker_palette.el.getBoundingClientRect()
        : { height: 200, width: 218, x: 0, y: 0 };
    var height = box.height - 2;
    var width = box.width - 2;
    var gripTop = (height - pickerState.hsv.v * height) - 4;
    var gripLeft = (pickerState.hsv.s * width) - 4;
    var rangeWidth = box.width - 6;
    var rangeGripLeft = rangeWidth - ((360 - pickerState.hsv.h) / 360) * rangeWidth;
    var inputValue = pickerState.customHex ?
        pickerState.customHex.replace("#", "")
        : pickerState.background.replace("#", "");
    return dom_1.el(".dhx_colorpicker-picker", {}, [
        dom_1.el(".dhx_colorpicker-picker__palette", {
            style: {
                height: 132,
                background: currentBackground
            },
            onmousedown: handlers.mousedown,
            dhx_id: "picker_palette",
            _ref: "picker_palette"
        }, [
            dom_1.el(".dhx_palette_grip", {
                style: {
                    top: gripTop,
                    left: gripLeft
                }
            })
        ]),
        dom_1.el(".dhx_colorpicker-hue-range", {
            style: { height: 16 },
            onmousedown: handlers.mousedown,
            dhx_id: "hue_range",
            _key: "hue_range",
            _ref: "hue_range"
        }, [
            dom_1.el(".dhx_colorpicker-hue-range__grip", { style: { left: rangeGripLeft } })
        ]),
        dom_1.el(".dhx_colorpicker-value", [
            dom_1.el(".dhx_colorpicker-value__color", { style: { background: pickerState.background } }),
            dom_1.el(".dhx_colorpicker-value__input-wrapper", [
                dom_1.el("input", {
                    class: "dhx_colorpicker-value__input",
                    value: inputValue,
                    oninput: handlers.oninput,
                    maxlength: "7",
                    _key: "hex_input"
                })
            ])
        ]),
        dom_1.el(".dhx_colorpicker-picker__buttons", [
            !colorpicker.config.pickerOnly && dom_1.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_link dhx_button--color_primary",
                onclick: [handlers.buttonsClick, "cancel"]
            }, en_1.default.cancel),
            dom_1.el("button", {
                class: "dhx_button dhx_button--size_medium dhx_button--view_flat dhx_button--color_primary",
                onclick: [handlers.buttonsClick, "apply"]
            }, en_1.default.select)
        ])
    ]);
}
exports.getPicker = getPicker;
function calculatePaletteGrip(rootView, top, left) {
    var paletteRect = rootView.refs.picker_palette.el.getBoundingClientRect();
    var bottom = paletteRect.height;
    var right = paletteRect.width;
    top = top < 0 ? 0 : top > bottom ? bottom : top;
    left = left < 0 ? 0 : left > right ? right : left;
    var pLeft = Math.round(left / (right / 100));
    var pTop = 100 - Math.round(top / (bottom / 100));
    this._pickerState.hsv.s = pLeft / 100;
    this._pickerState.hsv.v = pTop / 100;
}
exports.calculatePaletteGrip = calculatePaletteGrip;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculatePaletteGrip(clientRect, top, left) {
    var bottom = clientRect.height;
    var right = clientRect.width;
    top = top < 0 ? 0 : top > bottom ? bottom : top;
    left = left < 0 ? 0 : left > right ? right : left;
    var pLeft = Math.round(left / (right / 100));
    var pTop = 100 - Math.round(top / (bottom / 100));
    return {
        s: pLeft / 100,
        v: pTop / 100
    };
}
exports.calculatePaletteGrip = calculatePaletteGrip;
function calculateRangeGrip(clientRect, left) {
    var right = clientRect.width;
    left = left < 0 ? 0 : left > right ? right : left;
    return {
        h: Math.round(360 * (left / right)),
        rangeLeft: left
    };
}
exports.calculateRangeGrip = calculateRangeGrip;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(137));
__export(__webpack_require__(6));


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var ComposeLayer_1 = __webpack_require__(138);
var Legend_1 = __webpack_require__(140);
var index_1 = __webpack_require__(142);
var index_2 = __webpack_require__(146);
var Stacker_1 = __webpack_require__(156);
var Tooltip_1 = __webpack_require__(157);
var types_1 = __webpack_require__(6);
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(node, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, config) || this;
        // using zero values ensure that widget will not attempt to render self in the hidden state
        _this._width = 0;
        _this._height = 0;
        _this._left = 0;
        _this._top = 0;
        var dataConfig = {};
        if (config.maxPoints) {
            dataConfig.approximate = {
                value: config.series.map(function (a) { return a.value; }),
                maxNum: config.maxPoints
            };
        }
        if (config.data) {
            _this.data = config.data;
            _this.events = config.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection(dataConfig, _this.events);
        }
        _this._globalHTMLHandlers = {
            onmousemove: function (e) {
                var _a = _this._layers.getSizes(), left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right;
                var pageX = e.pageX, pageY = e.pageY;
                var rects = _this.getRootView().node.el.getBoundingClientRect();
                _this._left = rects.left + window.pageXOffset;
                _this._top = rects.top + window.pageYOffset;
                var x = pageX - left - _this._left;
                var y = pageY - top - _this._top;
                if (x >= 0 && x <= _this._width - right - left && y >= 0 && y <= _this._height - bottom - top) {
                    _this.events.fire(types_1.ChartEvents.chartMouseMove, [x, y, _this._left + left, _this._top + top]);
                }
                else {
                    _this.events.fire(types_1.ChartEvents.chartMouseLeave);
                }
            },
            onmouseleave: function () { return _this.events.fire(types_1.ChartEvents.chartMouseLeave); }
        };
        _this._layers = new ComposeLayer_1.ComposeLayer();
        _this.setConfig(config);
        _this._initEvents();
        var render = function (vm, obj) {
            if (!_this.data.getLength()) {
                return dom_1.el("div");
            }
            var content = [
                dom_1.resizer(function (x, y) {
                    _this._width = x;
                    _this._height = y || 400; // if height is not provided, use default value
                    var view = _this.getRootView();
                    if (view && view.node && view.node.el) {
                        var rects = view.node.el.getBoundingClientRect();
                        _this._left = rects.left + window.pageXOffset;
                        _this._top = rects.top + window.pageYOffset;
                    }
                    _this.events.fire(types_1.ChartEvents.resize, [{
                            width: _this._width,
                            height: _this._height
                        }]);
                    _this.paint();
                })
            ];
            if (_this._width && _this._height) {
                content.push(_this._layers.toVDOM(_this._width, _this._height));
            }
            return dom_1.el(".dhx_widget.dhx_chart", {
                onmousemove: _this._globalHTMLHandlers.onmousemove,
                onmouseleave: _this._globalHTMLHandlers.onmouseleave
            }, content);
        };
        _this.mount(node, dom_1.create({ render: render }));
        return _this;
    }
    Chart.prototype.getSeries = function (key) {
        return this._series[key];
    };
    Chart.prototype.eachSeries = function (handler) {
        var result = [];
        for (var key in this._series) {
            result.push(handler.call(this, this._series[key]));
        }
        return result;
    };
    Chart.prototype.destructor = function () {
        this._tooltip.destructor();
        this.events.clear();
        this.unmount();
    };
    Chart.prototype.setConfig = function (config) {
        var _this = this;
        this.config = config;
        this._layers.clear();
        this._series = {};
        this._scales = {};
        if (config.scales) {
            for (var key in config.scales) {
                var scale = __assign({}, config.scales[key]);
                scale.type = scale.type || this._detectScaleType(scale, key);
                if (config.scales.radial && key !== "radial") {
                    scale.hidden = true;
                }
                this._setScale(scale, key);
            }
        }
        var stack = new Stacker_1.default();
        this._layers.add(stack);
        config.series.forEach(function (cfg) {
            var serieConfig = __assign({}, cfg);
            serieConfig.type = serieConfig.type || config.type;
            var chartFactory = index_2.default[serieConfig.type];
            if (serieConfig.barWidth || _this.config.barWidth) {
                serieConfig.barWidth = serieConfig.barWidth || _this.config.barWidth;
            }
            var chart = new chartFactory(_this.data, serieConfig, _this.events);
            var chartScales = serieConfig.scales || [types_1.ScaleType.bottom, types_1.ScaleType.left];
            chartScales.forEach(function (type) {
                var scale = _this._scales[type];
                if (!scale) {
                    return;
                }
                chart.addScale(type, scale);
                if (!serieConfig.stacked) {
                    scale.add(chart);
                }
                else {
                    scale.add(stack);
                }
            });
            _this._series[chart.id] = chart;
            if (serieConfig.stacked) {
                stack.add(chart);
            }
            else {
                _this._layers.add(chart);
            }
        });
        if (config.legend) {
            var legendConfig = __assign({}, config.legend);
            if (legendConfig.series) {
                legendConfig.$seriesInfo = legendConfig.series.map(function (id) { return _this._series[id]; });
            }
            var legend = new Legend_1.Legend(this.data, legendConfig, this.events);
            this._layers.add(legend);
        }
        this._tooltip = new Tooltip_1.Tooltip(document.body, { chart: this });
        this.paint();
    };
    Chart.prototype._setScale = function (config, position) {
        var scale = new index_1.default[config.type](this.data, config, position);
        if (scale.config.grid && scale.config.type !== "radial") {
            this._layers.add(scale.scaleGrid());
        }
        this._layers.add(scale);
        this._scales[position] = scale;
    };
    Chart.prototype._detectScaleType = function (config, key) {
        if (key === "radial") {
            return key;
        }
        if (config.text) {
            return "text";
        }
        return "numeric";
    };
    Chart.prototype._initEvents = function () {
        var _this = this;
        // hide/show series on legend click
        this.events.on(types_1.ChartEvents.toggleSeries, function (id, pieLike) {
            if (pieLike) {
                var serie = _this._series[Object.keys(_this._series)[0]];
                if (serie) {
                    serie.toggle(id);
                    _this.paint();
                }
            }
            else if (_this._series[id]) {
                _this._series[id].toggle();
                _this.paint();
            }
        }, this);
        // repaint on data change
        this.events.on(ts_data_1.DataEvents.change, function () { return _this.paint(); });
    };
    return Chart;
}(view_1.View));
exports.Chart = Chart;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var Filters_1 = __webpack_require__(139);
var ComposeLayer = /** @class */ (function () {
    function ComposeLayer() {
        this._data = [];
        this._sizes = { left: 20, right: 20, top: 10, bottom: 10 };
    }
    ComposeLayer.prototype.add = function (obj) {
        this._data.push(obj);
    };
    ComposeLayer.prototype.clear = function () {
        this._data.forEach(function (item) { return item.destructor && item.destructor(); });
        this._data = [];
    };
    ComposeLayer.prototype.getSizes = function () {
        return this._sizes;
    };
    ComposeLayer.prototype.toVDOM = function (width, height) {
        var sizes = { left: 20, right: 20, top: 10, bottom: 10 };
        var toPaint = this._data.filter(function (l) { return !l.dataReady || l.dataReady().length; });
        this._data.forEach(function (l) { return !l.scaleReady || l.scaleReady(sizes); });
        var shift = 0;
        var shiftCount = 0;
        toPaint.forEach(function (item) {
            if (item.seriesShift) {
                shift += item.seriesShift();
                shiftCount++;
            }
        });
        var step = shift / shiftCount;
        shift = shiftCount ? (step - shift) / 2 : 0;
        toPaint.forEach(function (item) {
            if (item.seriesShift) {
                item.seriesShift(shift);
                shift += step;
            }
        });
        this._sizes = sizes;
        var chartsContent = dom_1.sv("g", {
            transform: "translate(" + sizes.left + ", " + sizes.top + ")"
        }, toPaint.map(function (item) {
            return item.paint(width - (sizes.left + sizes.right), height - (sizes.top + sizes.bottom));
        }));
        var defs = dom_1.sv("defs", [Filters_1.dropShadow(), Filters_1.shadow()]);
        return dom_1.sv("svg", {
            width: width,
            height: height
        }, [defs, chartsContent]);
    };
    return ComposeLayer;
}());
exports.ComposeLayer = ComposeLayer;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
exports.shadow = function () { return dom_1.sv("filter", { id: "shadow" }, [
    dom_1.sv("feDiffuseLighting", {
        "in": "SourceGraphic",
        "result": "light",
        "lighting-color": "white"
    }, [
        dom_1.sv("feDistantLight", { azimuth: 90, elevation: 25 })
    ]),
    dom_1.sv("feComposite", {
        in: "SourceGraphic",
        in2: "light",
        operator: "arithmetic",
        k1: "1",
        k2: "0",
        k3: "0",
        k4: "0"
    })
]); };
exports.dropShadow = function () { return dom_1.sv("filter", {
    id: "dropshadow",
    x: "-100%",
    y: "-100%",
    width: "300%",
    height: "300%"
}, [
    dom_1.sv("feGaussianBlur", { in: "SourceAlpha", stdDeviation: 2 }),
    dom_1.sv("feOffset", { dx: 0, dy: 0, result: "offsetblur" }),
    dom_1.sv("feOffset", { dx: 0, dy: 0, result: "offsetblur" }),
    dom_1.sv("feFlood", { "flood-color": "rgba(85,85,85,0.5)" }),
    dom_1.sv("feComposite", { in2: "offsetblur", operator: "in" }),
    dom_1.sv("feMerge", [dom_1.sv("feMergeNode"), dom_1.sv("feMergeNode", { in: "SourceGraphic" })])
]); };


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(6);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var legend_1 = __webpack_require__(141);
function getDefaultMargin(halign, valign) {
    switch (valign) {
        case types_1.VerticalPosition.middle: {
            switch (halign) {
                case types_1.HorizontalPosition.right:
                    return 60;
                case types_1.HorizontalPosition.left:
                    return 120;
                case types_1.HorizontalPosition.center:
                    throw new Error("cant place legend on center, middle");
            }
        }
        case types_1.VerticalPosition.top:
            return 20;
        case types_1.VerticalPosition.bottom:
            return 60;
    }
}
var Legend = /** @class */ (function () {
    function Legend(_data, config, _events) {
        var _this = this;
        this._data = _data;
        this._events = _events;
        var defaults = {
            form: types_1.Shape.rect,
            itemPadding: 20,
            halign: types_1.HorizontalPosition.right,
            valign: types_1.VerticalPosition.middle
        };
        this.config = __assign({}, defaults, config);
        this.config.margin = config.margin || getDefaultMargin(this.config.halign, this.config.valign);
        this._handlers = {
            onclick: function (id, pieLike) { return _this._events.fire(types_1.ChartEvents.toggleSeries, [id, pieLike]); }
        };
    }
    Legend.prototype.scaleReady = function (sizes) {
        if (this.config.valign === types_1.VerticalPosition.middle) {
            if (this.config.halign === types_1.HorizontalPosition.right) {
                sizes.right += this.config.size || 200;
            }
            else if (this.config.halign === types_1.HorizontalPosition.left) {
                sizes.left += this.config.size || 200;
            }
        }
        else {
            if (this.config.valign === types_1.VerticalPosition.top) {
                sizes.top += this.config.size || 40;
            }
            else if (this.config.valign === types_1.VerticalPosition.bottom) {
                sizes.bottom += this.config.size || 40;
            }
        }
    };
    Legend.prototype.paint = function (width, height) {
        var _this = this;
        var data = this._getData();
        var config = this.config;
        var positionX;
        var positionY;
        var font = common_1.getFontStyle("legend-text");
        var figureWidth = 10; // get Figure width from config ??
        var margin = config.margin, itemPadding = config.itemPadding;
        var svg = [];
        var isMid = config.valign === types_1.VerticalPosition.middle;
        var xPadding = 0;
        var yPadding = 0;
        data.forEach(function (item) {
            svg.push(dom_1.sv("g", {
                transform: "translate(" + xPadding + "," + yPadding + ")",
                onclick: [_this._handlers.onclick, item.id, _this.config.values],
                class: "legend-item " + (!item.active ? "not-active" : "")
            }, [
                dom_1.sv("text", {
                    x: figureWidth / 2 + 5,
                    y: 0,
                    class: "start-text legend-text"
                }, [common_1.verticalCenteredText(item.text)]),
                legend_1.legendShape(config.form, item)
            ]));
            if (!isMid) {
                var textWidth = common_1.getTextWidth(item.text, font);
                xPadding += textWidth + itemPadding + figureWidth * 1.5;
            }
            else {
                yPadding += itemPadding + 2;
            }
        });
        switch (config.valign) {
            case types_1.VerticalPosition.top:
                positionY = -margin - figureWidth / 2;
                break;
            case types_1.VerticalPosition.middle:
                positionY = (height - yPadding) / 2 + itemPadding / 2;
                break;
            case types_1.VerticalPosition.bottom:
                positionY = height + margin;
                break;
        }
        switch (config.halign) {
            case types_1.HorizontalPosition.left:
                positionX = isMid ? -margin : figureWidth / 2;
                break;
            case types_1.HorizontalPosition.center:
                positionX = (width - xPadding) / 2;
                break;
            case types_1.HorizontalPosition.right:
                positionX = isMid ? width + margin + figureWidth / 2 : width - xPadding + itemPadding + figureWidth / 2;
                break;
        }
        return dom_1.sv("g", { transform: "translate(" + positionX + ", " + positionY + ")" }, svg);
    };
    Legend.prototype._getData = function () {
        var drawData = [];
        if (this.config.values) {
            var text_1 = common_1.locator(this.config.values.text);
            var fill_1 = common_1.locator(this.config.values.color);
            this._data.map(function (item) {
                drawData.push({
                    id: item.id,
                    text: text_1(item).toString(),
                    alpha: 1,
                    fill: fill_1(item).toString(),
                    active: !item.$hidden
                });
            });
        }
        else {
            var series = this.config.$seriesInfo;
            for (var key in series) {
                var serie = series[key];
                var seriaConfig = serie.config;
                var useColor = seriaConfig.fill && seriaConfig.color;
                drawData.push({
                    id: seriaConfig.id,
                    text: seriaConfig.name || seriaConfig.value,
                    alpha: seriaConfig.alpha,
                    fill: seriaConfig.fill || seriaConfig.color,
                    color: useColor && seriaConfig.color,
                    active: seriaConfig.active
                });
            }
        }
        return drawData;
    };
    return Legend;
}());
exports.Legend = Legend;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var figureWidth = 10;
var forms = {
    circle: function (color, fill, fillOpacity) {
        return dom_1.sv("circle", {
            "id": core_1.uid(),
            "r": figureWidth / 2,
            fill: fill,
            "class": "figure " + (color !== "none" ? "with-stroke" : ""),
            "stroke-width": 2,
            "fill-opacity": fillOpacity,
            "stroke": color,
            "transform": "translate(0, 1)"
        });
    },
    rect: function (color, fill, fillOpacity) {
        return dom_1.sv("rect", {
            "id": core_1.uid(),
            fill: fill,
            "fill-opacity": fillOpacity,
            "width": figureWidth,
            "stroke-width": 2,
            "height": figureWidth,
            "class": "figure " + (color !== "none" ? "with-stroke" : ""),
            "stroke": color,
            "transform": "translate(" + -figureWidth / 2 + ", " + -figureWidth / 2 + ")"
        });
    }
};
function legendShape(form, item) {
    if (typeof form === "string") {
        form = forms[form];
    }
    return form((item.color || "none"), item.fill, (item.alpha || 1));
}
exports.legendShape = legendShape;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RadialScale_1 = __webpack_require__(143);
var Scale_1 = __webpack_require__(42);
var TextScale_1 = __webpack_require__(145);
var scaleTypes = {
    radial: RadialScale_1.RadialScale,
    text: TextScale_1.TextScale,
    numeric: Scale_1.Scale
};
exports.default = scaleTypes;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(24);
var types_1 = __webpack_require__(6);
var Scale_1 = __webpack_require__(42);
var RadialScale = /** @class */ (function (_super) {
    __extends(RadialScale, _super);
    function RadialScale(_data, config) {
        return _super.call(this, _data, config, types_1.ScaleType.radial) || this;
    }
    RadialScale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var zebra = this.config.zebra;
        var attribute = this.config.value;
        var realAxis = this.config.showAxis ? this._axis.steps : null;
        var axis = this._axis.steps.map(function (step) { return _this.point(step); });
        var scales = this._data.map(function (item) { return item[attribute]; });
        var config = { scales: scales, axis: axis, realAxis: realAxis, zebra: zebra };
        return circle_1.radarScale(config, width, height);
    };
    RadialScale.prototype.point = function (val) {
        return (val - this._axis.min) / (this._axis.max - this._axis.min);
    };
    return RadialScale;
}(Scale_1.Scale));
exports.RadialScale = RadialScale;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(5);
var allowedBases = [1, 2, 3, 5, 10];
var AxisCreator = /** @class */ (function () {
    function AxisCreator(_data, conf) {
        if (conf === void 0) { conf = {}; }
        this._data = _data;
        var defaults = {
            min: Math.min.apply(Math, this._data),
            max: Math.max.apply(Math, this._data),
            maxTicks: this._data.length < 20 ? this._data.length : 20
        };
        this.config = __assign({}, defaults, conf);
        if (this.config.padding) {
            this._addPadding();
        }
    }
    AxisCreator.prototype.getScale = function () {
        var steps;
        if (this.config.log) {
            steps = this._logSteps();
        }
        else {
            var step = this._getStep();
            steps = this._calculateSteps(step);
        }
        return {
            min: steps[0],
            max: steps[steps.length - 1],
            steps: steps
        };
    };
    AxisCreator.prototype._getStep = function () {
        var ticks = this.config.maxTicks;
        var dif = this.config.max - this.config.min;
        var exponent = Math.floor(common_1.log10(dif / ticks));
        var step = Math.pow(10, exponent);
        var rawBase = (dif / step) / ticks;
        var nearestBase = allowedBases[allowedBases.concat([rawBase]).sort(function (a, b) { return a - b; }).indexOf(rawBase)];
        return nearestBase * step;
    };
    AxisCreator.prototype._calculateSteps = function (step) {
        var firstIndex = Math.floor(this.config.min / step);
        var lastIndex = Math.ceil(this.config.max / step);
        var steps = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            var currentStep = step * i;
            if (Math.floor(currentStep) !== currentStep) {
                currentStep = parseFloat(currentStep.toFixed(8));
            }
            steps.push(currentStep);
        }
        return steps;
    };
    AxisCreator.prototype._logSteps = function () {
        var steps = [];
        if (this.config.min < 0) {
            var negativeExponent = Math.ceil(common_1.log10(-this.config.min));
            for (var i = negativeExponent; i > 0; i--) {
                steps.push(-(Math.pow(10, i)));
            }
            steps.push(0);
        }
        if (this.config.max > 0) {
            var positiveExponent = Math.ceil(common_1.log10(this.config.max));
            for (var i = 1; i <= positiveExponent; i++) {
                steps.push(Math.pow(10, i));
            }
        }
        return steps;
    };
    AxisCreator.prototype._addPadding = function () {
        this.config.min -= this.config.padding;
    };
    return AxisCreator;
}());
exports.AxisCreator = AxisCreator;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(5);
var Scale_1 = __webpack_require__(42);
var SvgScales_1 = __webpack_require__(69);
var renderScale = {
    left: SvgScales_1.left,
    right: SvgScales_1.right,
    bottom: SvgScales_1.bottom,
    top: SvgScales_1.top
};
var renderGrid = {
    left: SvgScales_1.leftGrid,
    right: SvgScales_1.rightGrid,
    bottom: SvgScales_1.bottomGrid,
    top: SvgScales_1.topGrid
};
var TextScale = /** @class */ (function (_super) {
    __extends(TextScale, _super);
    function TextScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextScale.prototype.scaleReady = function (sizes) {
        var max = this._data.getLength() - 1;
        var steps = this._data.map(this.locator);
        this._axis = { max: max, steps: steps };
        sizes[this._position] += this.config.size;
    };
    TextScale.prototype.point = function (value) {
        var pos = this._axis.steps.indexOf(value);
        if (this._padding) {
            var max = this._axis.max + 1;
            var padding = .5 / max;
            var point = pos / max;
            return this._isXDirection ? padding + point : 1 - padding - point;
        }
        else {
            return this._isXDirection ? pos / this._axis.max : 1 - pos / this._axis.max;
        }
    };
    TextScale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var points = this._axis.steps.map(function (item, index) { return [_this._isXDirection ? _this._getAxisPoint(index) * width : _this.point(item) * height, item]; });
        return renderScale[this._position](points, this.config, width, height);
    };
    TextScale.prototype.scaleGrid = function () {
        var _this = this;
        var getPoints = function (width, height) {
            return _this._axis.steps.map(function (item, index) { return [_this._isXDirection ? _this._getAxisPoint(index) * width : _this._getAxisPoint(index) * height, item]; });
        };
        var type = this._position;
        var grid = this.config.grid;
        var dashed = this.config.dashed;
        var hidden = this.config.hidden;
        var getSpecificLevel = function () { return _this._axis.steps.indexOf(_this.config.targetLine); };
        return {
            paint: function (width, height) {
                var targetLine = getSpecificLevel();
                var points = getPoints(width, height);
                var config = { targetLine: targetLine, dashed: dashed, grid: grid, hidden: hidden };
                return renderGrid[type](points, width, height, config);
            }
        };
    };
    TextScale.prototype._setDefaults = function (config) {
        var defaults = {
            scalePadding: 30,
            textPadding: 12,
            grid: true,
            targetLine: null,
            showText: true
        };
        this.locator = common_1.locator(config.text);
        this.config = __assign({}, defaults, config);
    };
    TextScale.prototype._getAxisPoint = function (index) {
        var max = this._axis.max;
        if (this._padding) {
            var count = max + 1;
            var padding = .5 / count;
            var point = index / count;
            return this._isXDirection ? padding + point : 1 - padding - point;
        }
        else {
            return this._isXDirection ? index / max : 1 - index / max;
        }
    };
    return TextScale;
}(Scale_1.Scale));
exports.TextScale = TextScale;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Area_1 = __webpack_require__(70);
var Bar_1 = __webpack_require__(71);
var BarX_1 = __webpack_require__(148);
var Donut_1 = __webpack_require__(149);
var Line_1 = __webpack_require__(46);
var Pie_1 = __webpack_require__(150);
var Pie3D_1 = __webpack_require__(151);
var Radar_1 = __webpack_require__(152);
var Scatter_1 = __webpack_require__(153);
var Spline_1 = __webpack_require__(154);
var SplineArea_1 = __webpack_require__(155);
var seriesTypes = {
    line: Line_1.default, spline: Spline_1.default, area: Area_1.default, splineArea: SplineArea_1.default, scatter: Scatter_1.default, pie: Pie_1.default, pie3D: Pie3D_1.default, donut: Donut_1.default, radar: Radar_1.default, bar: Bar_1.default, xbar: BarX_1.default
};
exports.default = seriesTypes;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
function hoverMode(cfg) {
    // cfg.fill = cfg.stroke; ??
    return cfg;
}
exports.hoverMode = hoverMode;
function standarMode(cfg) {
    return cfg;
}
exports.standarMode = standarMode;
var forms = {
    circle: function (color, fill, _alpha, x, y, id, mode) {
        var config = {
            "_ref": id,
            "cx": x,
            "cy": y,
            "r": 4,
            "class": "figure point-circle",
            fill: fill,
            "stroke": color,
            "stroke-width": 2
        };
        return dom_1.sv("circle", mode(config));
    },
    rect: function (color, fill, _alpha, x, y, id, mode) {
        var config = {
            "_ref": id,
            "x": x - 4,
            "y": y - 4,
            "width": 8,
            "height": 8,
            "class": "figure point-rect",
            fill: fill,
            "stroke": color,
            "stroke-width": 2
        };
        return dom_1.sv("rect", mode(config));
    },
    rhombus: function (color, fill, _alpha, x, y, id, mode) {
        var config = {
            "_ref": id,
            "points": x - 5 + "," + y + " " + x + "," + (y + 5) + " " + (x + 5) + "," + y + " " + x + "," + (y - 5),
            "class": "figure point-rhombus",
            fill: fill,
            "stroke": color,
            "stroke-width": 2
        };
        return dom_1.sv("polygon", mode(config));
    },
    triangle: function (color, fill, _alpha, x, y, id, mode) {
        var config = {
            "_ref": id,
            "points": x + "," + (y - 5) + " " + (x + 5) + "," + (y + 5) + " " + (x - 5) + "," + (y + 5),
            "class": "figure point-triangle",
            fill: fill,
            "stroke": color,
            "stroke-width": 2
        };
        return dom_1.sv("polygon", mode(config));
    },
    simpleCircle: function (color, _fill, _alpha, x, y, id, mode) {
        var config = {
            _ref: id,
            cx: x,
            cy: y,
            r: 3,
            class: "figure point-simple-circle",
            fill: color
        };
        return dom_1.sv("circle", mode(config));
    },
    simpleRect: function (color, _fill, _alpha, x, y, id, mode) {
        var config = {
            _ref: id,
            x: x - 3,
            y: y - 3,
            width: 6,
            height: 6,
            class: "figure point-simple-rect",
            fill: color
        };
        return dom_1.sv("rect", mode(config));
    },
    empty: function () {
        return null;
    }
};
function getHelper(type) {
    var helper = forms[type.toString()];
    if (!helper) {
        throw new Error("unknown point type");
    }
    return helper;
}
exports.getHelper = getHelper;
function getShadeHelper(type, color, mode) {
    var helper = getHelper(type);
    color = color || "none";
    var shade = common_1.getColorShade(color, 0.2);
    return function (x, y, id) {
        return helper(color, shade, "", x, y, id, mode);
    };
}
exports.getShadeHelper = getShadeHelper;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(6);
var Bar_1 = __webpack_require__(71);
var BarX = /** @class */ (function (_super) {
    __extends(BarX, _super);
    function BarX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarX.prototype.addScale = function (type, scale) {
        var realtype = (type === types_1.ScaleType.top || type === types_1.ScaleType.bottom) ?
            types_1.ScaleType.left :
            types_1.ScaleType.top;
        _super.prototype.addScale.call(this, realtype, scale);
    };
    BarX.prototype.paint = function (width, height, prev) {
        return _super.prototype.paint.call(this, height, width, prev);
    };
    BarX.prototype.getTooltipType = function (id, x, y) {
        if (this.config.baseLine !== undefined && this._baseLinePosition > x) {
            return types_1.TooltipType.left;
        }
        return types_1.TooltipType.right;
    };
    BarX.prototype.getClosest = function (x, y) {
        var res = [Infinity, null, null, null];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            var dist = this._getClosestDist(x, y, point[1], point[0]);
            if (res[0] > dist) {
                res[0] = dist;
                res[1] = point[1];
                res[2] = point[0];
                res[3] = point[2];
            }
        }
        return res;
    };
    BarX.prototype._getText = function (item) {
        return item[4].toString();
    };
    BarX.prototype._getClosestDist = function (x, y, px, py) {
        if (this.config.stacked && x > px) {
            return Infinity;
        }
        return Math.abs(y - py);
    };
    BarX.prototype._path = function (item, prev) {
        item[0] += this._shift;
        return "\nM " + prev + " " + (item[0] - (this.config.barWidth / 2)) + "\nH " + item[1] + "\nv " + this.config.barWidth + "\nH " + prev;
    };
    BarX.prototype._base = function (height) {
        var baseLine = this.config.baseLine;
        return this._baseLinePosition = baseLine !== undefined ? this.yScale.point(baseLine) * height : 0;
    };
    BarX.prototype._text = function (item, prev) {
        return {
            y: item[0],
            x: (prev + item[1]) / 2,
            class: "bar-text"
        };
    };
    return BarX;
}(Bar_1.default));
exports.default = BarX;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(24);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var NoScaleSeria_1 = __webpack_require__(45);
var Donut = /** @class */ (function (_super) {
    __extends(Donut, _super);
    function Donut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Donut.prototype.paint = function (width, height) {
        var _this = this;
        var radius = height / 2;
        var currentPercent = -.25; // 0 percent is (1, 0) point, -.25 is (0, -1) point
        var svg = [];
        var links = [];
        var tooltipData = [];
        var err = this._points.length === 1 ? -.000001 : 0;
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var _a = circle_1.getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            currentPercent += percent + err;
            var _b = circle_1.getCoordinates(currentPercent, radius, radius), endX = _b[0], endY = _b[1];
            var largeArcFlag = percent > .5 ? 1 : 0;
            var middleLine = circle_1.getCoordinates(avPercent, radius, radius);
            var isRight = avPercent > -0.25 && avPercent < 0.25;
            var isUp = avPercent > 0.5 || avPercent < 0;
            switch (_this.config.subType) {
                case types_1.NoScaleSubType.basic: {
                    var className = isRight ? "donut-value-title start-text" : "donut-value-title end-text";
                    var textPadding = 10;
                    var dy = isUp ? -textPadding * 2 : textPadding;
                    var linkStart = circle_1.getCoordinates(avPercent, radius + 10, radius + 10);
                    var className2 = isRight ? "donut-value start-text" : "donut-value end-text";
                    var text1 = dom_1.sv("text", { x: linkStart[0], y: linkStart[1] + dy, class: className }, [
                        common_1.verticalCenteredText(text.toString())
                    ]);
                    var text2 = dom_1.sv("text", { x: linkStart[0], y: linkStart[1] + dy + 16, class: className2 }, [
                        common_1.verticalCenteredText(value.toString())
                    ]);
                    links.push(text1);
                    links.push(text2);
                    break;
                }
                case types_1.NoScaleSubType.valueOnly: {
                    var className = isRight ? "donut-value start-text" : "donut-value end-text";
                    var textPadding = 10;
                    var dy = isUp ? -textPadding : textPadding;
                    var linkStart = circle_1.getCoordinates(avPercent, radius + 10, radius + 10);
                    var textSvg = dom_1.sv("text", { x: linkStart[0], y: linkStart[1] + dy, class: className }, [
                        common_1.verticalCenteredText(text.toString())
                    ]);
                    links.push(textSvg);
                    break;
                }
                case types_1.NoScaleSubType.percentOnly:
                    var percentText = dom_1.sv("text", { x: middleLine[0] * 7 / 9, y: middleLine[1] * 7 / 9, class: "pie-inner-value" }, [
                        common_1.verticalCenteredText(Math.round(percent * 100) + "%")
                    ]);
                    links.push(percentText);
            }
            var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            var _c = circle_1.getCoordinates(avPercent, 4, 4), shiftX = _c[0], shiftY = _c[1];
            var currentSector = dom_1.sv("path", {
                d: d,
                _key: id,
                fill: color,
                class: "chart donut",
                onmouseout: [circle_1.pieLikeHandlers.onmouseout],
                onmouseover: [circle_1.pieLikeHandlers.onmouseover, shiftX, shiftY]
            });
            svg.push(currentSector);
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * .8 + width / 2, middleLine[1] * .8 + height / 2]);
            }
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg.push(dom_1.sv("circle", {
            cx: 0,
            cy: 0,
            r: radius * 5 / 9,
            fill: "#FFFFFF"
        }));
        svg = svg.concat(links);
        return dom_1.sv("g", { transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, svg);
    };
    return Donut;
}(NoScaleSeria_1.default));
exports.default = Donut;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(24);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var NoScaleSeria_1 = __webpack_require__(45);
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.prototype.paint = function (width, height) {
        var _this = this;
        var _a = this.config, stroke = _a.stroke, strokeWidth = _a.strokeWidth, gradient = _a.gradient, useLines = _a.useLines, showText = _a.showText;
        var radius = height / 2;
        var currentPercent = -.25; // 0 percent is (1, 0) point, -.25 is (0, -1) point
        var tooltipData = [];
        var svg = [];
        var defs = [];
        var links = [];
        var pie = [];
        var lines = [];
        var err = this._points.length === 1 ? -.000001 : 0; // if move to start point it will be empty circle
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var fill = color;
            if (gradient) {
                var grad = gradient(color);
                var gradientId = "gradient" + core_1.uid();
                var radialGradient = common_1.getRadialGradient(grad.options, grad.stops, gradientId);
                fill = "url(#" + gradientId + ")";
                defs.push(radialGradient);
            }
            var _a = circle_1.getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            var lineLength = avPercent < .25 ? 5 : -5; // from 0 to 180 right pointer, 180 to 360 left pointer
            var middleLine = circle_1.getCoordinates(avPercent, radius, radius);
            var _b = [5, 30], startPart = _b[0], endPart = _b[1];
            var _c = [circle_1.getCoordinates(avPercent, radius + startPart, radius + startPart), circle_1.getCoordinates(avPercent, radius + endPart, radius + endPart)], linkStart = _c[0], linkEnd = _c[1];
            var className = avPercent > -0.25 && avPercent < 0.25 ? "pie-value start-text" : "pie-value end-text";
            if (useLines) {
                links.push(dom_1.sv("path", { d: "M" + linkStart[0] + " " + linkStart[1] + " L" + linkEnd[0] + " " + linkEnd[1] + " h " + lineLength, class: "pie-value-connector" }));
                var textSvg = dom_1.sv("text", { x: linkEnd[0], y: linkEnd[1], dx: lineLength / 2 + lineLength > 0 ? 10 : -10, class: className }, [
                    common_1.verticalCenteredText(text.toString())
                ]);
                links.push(textSvg);
            }
            else {
                var textPadding = 5;
                var dy = avPercent > 0.5 || avPercent < 0 ? -textPadding : textPadding;
                var textSvg = dom_1.sv("text", { x: linkStart[0], y: linkStart[1] + dy, class: className }, [
                    common_1.verticalCenteredText(text.toString())
                ]);
                links.push(textSvg);
            }
            if (showText) {
                var linkText = dom_1.sv("text", { x: middleLine[0] * .7, y: middleLine[1] * .7, class: "pie-inner-value" }, [
                    common_1.verticalCenteredText(value.toString())
                ]);
                links.push(linkText);
            }
            if (_this.config.subType === types_1.NoScaleSubType.percentOnly) {
                var percentText = dom_1.sv("text", { x: middleLine[0] * 0.5, y: middleLine[1] * 0.5, class: "pie-inner-value" }, [
                    common_1.verticalCenteredText(Math.round(percent * 100) + "%")
                ]);
                links.push(percentText);
            }
            currentPercent += percent + err;
            var _d = circle_1.getCoordinates(currentPercent, radius, radius), endX = _d[0], endY = _d[1];
            var largeArcFlag = percent > .5 ? 1 : 0;
            var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            var _e = circle_1.getCoordinates(avPercent, 4, 4), shiftX = _e[0], shiftY = _e[1];
            var currentSector = dom_1.sv("path", {
                d: d,
                class: "chart pie",
                _key: id,
                fill: fill,
                onmouseover: [circle_1.pieLikeHandlers.onmouseover, shiftX, shiftY],
                onmouseout: [circle_1.pieLikeHandlers.onmouseout]
            });
            pie.push(currentSector);
            if (_this._points.length > 1 && stroke) {
                var strokeOpts = {
                    "stroke-width": strokeWidth,
                    stroke: stroke
                };
                var line = dom_1.sv("path", __assign({ d: "M0 0 L" + endX + " " + endY, fill: "none" }, strokeOpts));
                lines.push(line);
            }
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * .7 + width / 2, middleLine[1] * .7 + height / 2]);
            }
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg.push(dom_1.sv("defs", defs));
        svg = svg.concat(pie);
        svg = svg.concat(lines);
        svg = svg.concat(links);
        return dom_1.sv("g", { transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, svg);
    };
    return Pie;
}(NoScaleSeria_1.default));
exports.default = Pie;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(24);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var NoScaleSeria_1 = __webpack_require__(45);
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pie.prototype.paint = function (width, height) {
        var _this = this;
        var radiusX = height / 2;
        var radiusY = radiusX * .5;
        var connector = radiusX / 5;
        var tooltipData = [];
        var currentPercent = -.25;
        var svg = [];
        var links = [];
        var err = this._points.length === 1 ? -.000001 : 0;
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var _a = circle_1.getCoordinates(currentPercent, radiusX, radiusY), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            var lineLength = avPercent < .25 ? 5 : -5;
            var middleLine = circle_1.getCoordinates(avPercent, radiusX, radiusY);
            var delta = 0;
            if (avPercent > 0 && avPercent < 0.5) {
                delta = connector * Math.sin(2 * Math.PI * avPercent);
            }
            //
            var linkStart = circle_1.getCoordinates(avPercent, radiusX + 5 + delta, radiusY + 5 + delta);
            var linkEnd = circle_1.getCoordinates(avPercent, radiusX + 30 + delta, radiusY + 30 + delta);
            var nextPercent = currentPercent + percent + err;
            var _b = circle_1.getCoordinates(nextPercent, radiusX, radiusY), endX = _b[0], endY = _b[1];
            var largeArcFlag = percent > .5 ? 1 : 0;
            var className = avPercent > -0.25 && avPercent < 0.25 ? "pie-value start-text" : "pie-value end-text";
            if (_this.config.useLines) {
                links.push(dom_1.sv("path", { d: "M" + linkStart[0] + " " + linkStart[1] + " L" + linkEnd[0] + " " + linkEnd[1] + " h " + lineLength, class: "pie-value-connector" }));
                var textSvg = dom_1.sv("text", { x: linkEnd[0], y: linkEnd[1], dx: lineLength / 2 + lineLength > 0 ? 10 : -10, class: className }, [
                    common_1.verticalCenteredText(text.toString())
                ]);
                links.push(textSvg);
            }
            else {
                var textPadding = 10;
                var dy = avPercent > 0.5 || avPercent < 0 ? -textPadding : textPadding;
                var textSvg = dom_1.sv("text", { x: linkStart[0], y: linkStart[1] + dy, class: className }, [
                    common_1.verticalCenteredText(text.toString())
                ]);
                links.push(textSvg);
            }
            if (_this.config.showText) {
                var textSvg = dom_1.sv("text", { x: middleLine[0] * .7, y: middleLine[1] * .7, class: "pie-inner-value" }, [
                    common_1.verticalCenteredText(value.toString())
                ]);
                links.push(textSvg);
            }
            if (_this.config.subType === types_1.NoScaleSubType.percentOnly) {
                var percentText = dom_1.sv("text", { x: middleLine[0] * 0.6, y: middleLine[1] * 0.6, class: "pie-inner-value" }, [
                    common_1.verticalCenteredText(Math.round(percent * 100) + "%")
                ]);
                links.push(percentText);
            }
            // 3d block
            var addition = "";
            if (currentPercent <= 0 && nextPercent >= .5) {
                addition = "M " + radiusX + " 0 v " + connector + " A " + radiusX + " " + radiusY + " 0 1 1 " + -radiusX + " " + connector + " v " + -connector;
            }
            else if (currentPercent <= 0 && nextPercent < .5) {
                addition = "M " + radiusX + " 0 v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + endX + " " + (endY + connector) + " v " + -connector;
            }
            else if (currentPercent > 0 && currentPercent <= .5 && nextPercent >= .5) {
                addition = "M " + startX + " " + startY + " v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + -radiusX + " " + connector + " v " + -connector;
            }
            else if (currentPercent > 0 && nextPercent < .5) {
                addition = "M " + startX + " " + startY + " v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + endX + " " + (endY + connector) + " v " + -connector;
            }
            if (addition) {
                var additionPath = dom_1.sv("path", { d: addition, fill: color, class: "chart pie3d addition", stroke: "none", filter: "url(#shadow)" });
                svg.push(additionPath);
            }
            // end 3d block
            var d = "M " + startX + " " + startY + " A " + radiusX + " " + radiusY + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            svg.push(dom_1.sv("path", {
                d: d,
                _key: id,
                fill: color,
                stroke: "none",
                class: "chart pie3d"
            }));
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * .7 + width / 2, middleLine[1] * .7 + height / 2]);
            }
            currentPercent = nextPercent;
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg = svg.concat(links);
        return dom_1.sv("g", { transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, svg);
    };
    return Pie;
}(NoScaleSeria_1.default));
exports.default = Pie;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(24);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var BaseSeria_1 = __webpack_require__(44);
var Radar = /** @class */ (function (_super) {
    __extends(Radar, _super);
    function Radar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radar.prototype.addScale = function (type, scale) {
        this._scale = scale;
    };
    Radar.prototype.scaleReady = function (sizes) {
        for (var key in sizes) {
            sizes[key] += this.config.paddings;
        }
        return sizes;
    };
    Radar.prototype.dataReady = function (prev) {
        var _this = this;
        if (!this.config.active) {
            return this._points = [];
        }
        this._points = this._data.map(function (item, index) {
            // raw values
            var value = _this._locator(item);
            var set = [value, value, item.id, value, value];
            if (prev) {
                set[1] += prev[index][1];
            }
            return set;
        });
        return this._points;
    };
    Radar.prototype.getTooltipText = function (id) {
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p;
        }
    };
    Radar.prototype.paint = function (width, height) {
        var _this = this;
        _super.prototype.paint.call(this, width, height);
        if (!this.config.active) {
            return;
        }
        var config = this.config;
        var svg = [];
        var d = this._points.map(function (item, first) { return (first ? "L" : "M") + (item[0] + " " + item[1]); }).join(" ") + "Z";
        svg.push(dom_1.sv("path", {
            d: d,
            "stroke": config.color,
            "stroke-width": config.strokeWidth,
            "fill": config.fill,
            "fill-opacity": config.alpha,
            "class": "chart radar"
        }));
        if (config.pointType) {
            var points = this._points.map(function (p) { return _this._drawPointType(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); });
            svg.push(dom_1.sv("g", points));
        }
        return dom_1.sv("g", { id: "seria" + config.id }, svg);
    };
    Radar.prototype._calckFinalPoints = function (width, height) {
        var _this = this;
        var radius = height / 2;
        var scalePercent = 1 / this._data.getLength();
        var currentPercent = -.25 - scalePercent;
        this._points.forEach(function (item, index) {
            currentPercent += scalePercent;
            var value = _this._scale.point(item[0]);
            var real = circle_1.getCoordinates(currentPercent, value * radius, value * radius);
            // scaled values
            item[0] = real[0] + width / 2;
            item[1] = real[1] + height / 2;
        });
    };
    Radar.prototype._defaultLocator = function (v) { return this._locator(v); };
    Radar.prototype._setDefaults = function (config) {
        var defaults = {
            strokeWidth: 2,
            active: true,
            tooltip: true,
            paddings: 5,
            color: "none",
            fill: "none",
            pointType: types_1.PointType.circle
        };
        this._locator = common_1.locator(config.value);
        config.scales = config.scales || [types_1.ScaleType.radial];
        this.config = __assign({}, defaults, config);
        if (this.config.pointType) {
            var color = this.config.pointColor || this.config.color;
            this._drawPointType = this._getPointType(this.config.pointType, color, this.config.tooltip);
        }
    };
    return Radar;
}(BaseSeria_1.default));
exports.default = Radar;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(6);
var Line_1 = __webpack_require__(46);
var common_1 = __webpack_require__(5);
var Scatter = /** @class */ (function (_super) {
    __extends(Scatter, _super);
    function Scatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scatter.prototype.addScale = function (type, scale) {
        if (type === types_1.ScaleType.bottom || type === types_1.ScaleType.top) {
            this.xScale = scale;
            this._xLocator = common_1.locator(this.config.value);
        }
        else {
            this.yScale = scale;
            this._yLocator = common_1.locator(this.config.valueY);
        }
    };
    Scatter.prototype._setDefaults = function (config) {
        var defaults = {
            active: true,
            tooltip: true,
            pointType: types_1.PointType.rect
        };
        this.config = __assign({}, defaults, config);
        var showTooltip = this.config.tooltip;
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this._drawPointType = this._getPointType(point, color, showTooltip);
        }
    };
    return Scatter;
}(Line_1.default));
exports.default = Scatter;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var spline_1 = __webpack_require__(72);
var Line_1 = __webpack_require__(46);
var Spline = /** @class */ (function (_super) {
    __extends(Spline, _super);
    function Spline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spline.prototype._getForm = function (points, config, css, width, height) {
        var color = config.color;
        var className = config.css;
        var d = spline_1.default(points);
        var path = dom_1.sv("path", {
            "id": "seria" + config.id,
            d: d,
            "class": className,
            "stroke": color,
            "stroke-width": 2,
            "fill": "none"
        });
        return path;
    };
    return Spline;
}(Line_1.default));
exports.default = Spline;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var spline_1 = __webpack_require__(72);
var Area_1 = __webpack_require__(70);
var SplineArea = /** @class */ (function (_super) {
    __extends(SplineArea, _super);
    function SplineArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineArea.prototype._form = function (width, height, svg, prev) {
        var _a = this.config, fill = _a.fill, alpha = _a.alpha, strokeWidth = _a.strokeWidth, color = _a.color, id = _a.id;
        var className = this.config.css;
        var d = "";
        var first = this._points[0];
        if (prev) {
            d = spline_1.default([].concat(prev).reverse()) + " " + spline_1.default(this._points, true) + " Z";
        }
        else {
            d = "M" + first[0] + " " + height + " V " + first[1] + " " + spline_1.default(this._points) + " V" + height + " H " + first[0];
        }
        if (strokeWidth) {
            var line = spline_1.default(this._points);
            var splinePath = dom_1.sv("path", {
                "d": line,
                "stroke-width": strokeWidth,
                "stroke": color,
                "fill": "none",
                "stroke-linecap": "butt",
                "class": className
            });
            svg.push(splinePath);
        }
        var path = dom_1.sv("path", {
            "id": "seria" + id,
            d: d,
            "class": className,
            fill: fill,
            "fill-opacity": alpha,
            "stroke": "none"
        });
        svg.push(path);
        return svg;
    };
    return SplineArea;
}(Area_1.default));
exports.default = SplineArea;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var Stacker = /** @class */ (function () {
    function Stacker() {
        this._series = [];
    }
    Stacker.prototype.add = function (seria) {
        this._series.push(seria);
    };
    Stacker.prototype.dataReady = function (prev) {
        this._toPaint = this._series.filter(function (serie) {
            var next = serie.dataReady(prev);
            if (next.length) {
                prev = next;
                return true;
            }
            return false;
        });
        return prev || [];
    };
    Stacker.prototype.getPoints = function () {
        if (this._toPaint.length) {
            return this._toPaint[0].getPoints().concat(this._toPaint[this._toPaint.length - 1].getPoints());
        }
        return [];
    };
    Stacker.prototype.paint = function (width, height, prev) {
        var svg = [];
        var markers = [];
        this._toPaint.forEach(function (seria) {
            if (seria.paintformAndMarkers) {
                var _a = seria.paintformAndMarkers(width, height, prev), content = _a[0], seriesMarkers = _a[1];
                svg.push(content);
                markers.push(seriesMarkers);
            }
            else {
                var content = seria.paint(width, height, prev);
                svg.push(content);
            }
            prev = seria.getPoints();
        });
        return dom_1.sv("g", svg.concat(markers));
    };
    return Stacker;
}());
exports.default = Stacker;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(5);
var types_1 = __webpack_require__(6);
var view_1 = __webpack_require__(4);
var getAttrs = function (textWidth, x, y, type, chartType) {
    var dy = chartType === types_1.ChartType.bar ? 5 : 0;
    switch (type) {
        case types_1.TooltipType.top: {
            var h1 = (textWidth + 20 - 8 - 4) / 2;
            var h2 = textWidth + 20 - 4;
            var d = "M0 0 l4 -4 h" + h1 + " a2 2 0 0 0 2 -2 v-18 a2 2 0 0 0 -2 -2 h" + -h2 + " a2 2 0 0 0 -2 2 v18 a2 2 0 0 0 2 2 h" + h1 + " Z";
            var textX = 0;
            var textY = -15;
            return {
                d: d,
                left: x,
                top: y - 6 + dy,
                textX: textX,
                textY: textY
            };
        }
        case types_1.TooltipType.bot: {
            var h1 = (textWidth + 20 - 8 - 4) / 2;
            var h2 = textWidth + 20 - 4;
            var d = "M0 0 l4 4 h" + h1 + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -h2 + " a2 2 0 0 1 -2 -2 v-18 a2 2 0 0 1 2 -2 h" + h1 + " Z";
            var textX = 0;
            var textY = 15;
            return {
                d: d,
                left: x,
                top: y + 6 - dy,
                textX: textX,
                textY: textY
            };
        }
        case types_1.TooltipType.right: {
            var h = textWidth + 20 - 4;
            var d = "M0 0 l4 -4 v-5 a2 2 0 0 1 2 -2 h" + h + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -h + " a2 2 0 0 1 -2 -2 v-5 Z";
            var textX = h / 2 + 6;
            var textY = 0;
            return {
                d: d,
                left: x + 1,
                top: y,
                textX: textX,
                textY: textY
            };
        }
        case types_1.TooltipType.left: {
            var h = textWidth + 20 - 4;
            var d = "M0 0 l-4 -4 v-5 a2 2 0 0 0 -2 -2 h" + -h + " a2 2 0 0 0 -2 2 v18 a2 2 0 0 0 2 2 h" + h + " a2 2 0 0 0 2 -2 v-5 Z";
            var textX = -h / 2 - 6;
            var textY = 0;
            return {
                d: d,
                left: x - 1,
                top: y,
                textX: textX,
                textY: textY
            };
        }
        case types_1.TooltipType.simple: {
            var h = textWidth + 20 - 4;
            var d = "M0 0 v-4 a2 2 0 0 1 2 -2 h" + h + " a2 2 0 0 1 2 2 v18 a2 2 0 0 1 -2 2 h" + -h + " a2 2 0 0 1 -2 -2 v-6 Z";
            var textX = h / 2 + 2;
            var textY = 6;
            return {
                d: d,
                left: x - h / 2 - 2,
                top: y - 5,
                textX: textX,
                textY: textY
            };
        }
    }
};
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this._chart = config.chart;
        _this._state = { leftOffset: 0, topOffset: 0, value: "", x: 0, y: 0, type: null, chartType: null, isVisible: false };
        _this.mount(container, dom_1.create({ render: function () { return _this._draw(); } }));
        _this._chart.events.on(types_1.ChartEvents.chartMouseMove, function (x, y, left, top) {
            var closest = [Infinity, null, null, null, null]; // (dist, x, y, id, serieid)
            _this._chart.eachSeries(function (serie) {
                var serieClosest = serie.getClosest(x, y);
                if (closest[0] > serieClosest[0]) {
                    closest[0] = serieClosest[0];
                    closest[1] = serieClosest[1];
                    closest[2] = serieClosest[2];
                    closest[3] = serieClosest[3];
                    closest[4] = serie.id;
                }
            });
            var tooltipSeries = _this._chart.getSeries(closest[4]);
            if (tooltipSeries) {
                var ref = common_1.calcPointRef(closest[3], closest[4]);
                if (ref === _this._lastPointRef) {
                    return;
                }
                var text = tooltipSeries.getTooltipText(closest[3]);
                if (text) {
                    var tooltipType = tooltipSeries.getTooltipType(closest[3], closest[1], closest[2]);
                    _this._enableActivePoint(ref);
                    _this._state.leftOffset = left;
                    _this._state.topOffset = top;
                    _this._state.value = text;
                    _this._state.x = closest[1];
                    _this._state.y = closest[2];
                    _this._state.type = tooltipType;
                    _this._state.chartType = tooltipSeries.config.type;
                    _this._state.isVisible = true;
                    _this.paint();
                }
            }
        }, _this);
        _this._chart.events.on(types_1.ChartEvents.chartMouseLeave, function () { return _this._hide(); }, _this);
        return _this;
    }
    Tooltip.prototype.destructor = function () {
        this._chart.events.detach(types_1.ChartEvents.chartMouseLeave, this);
        this._chart.events.detach(types_1.ChartEvents.chartMouseMove, this);
        this.unmount();
    };
    Tooltip.prototype._hide = function () {
        this._disableLastActivePoint();
        this._state.isVisible = false;
        this.paint();
    };
    Tooltip.prototype._enableActivePoint = function (ref) {
        var rootView = this._chart.getRootView();
        var point = rootView && rootView.refs && rootView.refs[ref];
        if (point) {
            this._disableLastActivePoint();
            this._lastPointRef = ref;
            point.patch({ class: point.attrs.class + " active-figure" });
        }
    };
    Tooltip.prototype._disableLastActivePoint = function () {
        if (this._lastPointRef) {
            var rootView = this._chart.getRootView();
            var point = rootView && rootView.refs && rootView.refs[this._lastPointRef];
            if (point) {
                point.patch({ class: point.attrs.class.replace(" active-figure", "") });
            }
            this._lastPointRef = null;
        }
    };
    Tooltip.prototype._draw = function () {
        var _a = this._state, value = _a.value, x = _a.x, y = _a.y, type = _a.type, chartType = _a.chartType, isVisible = _a.isVisible;
        var attrs;
        if (isVisible && value !== "") {
            var style = common_1.getFontStyle("tooltip-text");
            var textWidth = common_1.getTextWidth(value, style);
            attrs = getAttrs(textWidth, x, y, type || types_1.TooltipType.top, chartType);
        }
        else {
            attrs = { textX: 0, textY: 0, d: null, left: 0, top: 0 };
        }
        return dom_1.el(".dhx_chart.tooltip-container", {
            style: {
                pointerEvents: "none",
                width: 0,
                height: 0,
                visibility: isVisible ? "visible" : "hidden",
                position: "absolute",
                left: attrs.left + this._state.leftOffset + "px",
                top: attrs.top + this._state.topOffset + "px"
            }
        }, isVisible ? [
            dom_1.sv("svg", [
                dom_1.sv("path", { d: attrs.d, class: "tooltip-form" }),
                dom_1.sv("text", { x: attrs.textX, y: attrs.textY, class: "tooltip-text" }, [
                    common_1.verticalCenteredText(value)
                ])
            ])
        ] : null);
    };
    return Tooltip;
}(view_1.View));
exports.Tooltip = Tooltip;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var keycodes_1 = __webpack_require__(159);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var ts_layout_1 = __webpack_require__(12);
var ts_list_1 = __webpack_require__(36);
var ts_popup_1 = __webpack_require__(10);
var keyListener_1 = __webpack_require__(160);
var en_1 = __webpack_require__(48);
var helper_1 = __webpack_require__(161);
var types_1 = __webpack_require__(73);
var template = function (item) {
    if (item.icon) {
        return "<span class=\"" + item.icon + " dhx_combobox-options__icon\"></span> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    if (item.src) {
        return "<img src=\"" + item.src + "\" class=\"dhx_combobox-options__image\"></img> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    return "<span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
};
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            // selectAllButton: true
            template: template,
            listHeight: 224,
            cellHeight: 32,
        }, config)) || this;
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        _this.popup = new ts_popup_1.Popup();
        // this.popup.events.on(PopupEvents.beforeHide, () => true);
        _this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            _this.paint();
        });
        if (_this.config.readonly) {
            _this._keyListener = new keyListener_1.KeyListener();
        }
        _this._state = {
            value: "",
            ignoreNext: false,
            canDelete: false,
            unselectActive: false,
            currentState: types_1.ComboState.default
        };
        _this._initHandlers();
        _this._createLayout();
        _this._initEvents();
        var vnode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didRedraw: function () {
                    if (_this.popup.isVisible()) {
                        _this.focus();
                        _this._configurePopup();
                    }
                }
            }
        });
        // const container = toNode(element);
        _this.mount(element, vnode);
        return _this;
    }
    Combobox.prototype.setState = function (state) {
        switch (state) {
            case "success":
                this._state.currentState = types_1.ComboState.success;
                break;
            case "error":
                this._state.currentState = types_1.ComboState.error;
                break;
            default:
                this._state.currentState = types_1.ComboState.default;
                break;
        }
        this.paint();
    };
    Combobox.prototype.focus = function () {
        if (this.config.disabled) {
            return false;
        }
        var rootView = this.getRootView();
        rootView.refs.input.el.focus();
    };
    Combobox.prototype.enable = function () {
        this.config.disabled = false;
        this.paint();
    };
    Combobox.prototype.disable = function () {
        this.config.disabled = true;
        this.paint();
    };
    Combobox.prototype.clear = function () {
        if (this.config.disabled) {
            return false;
        }
        this.list.selection.remove();
        this._state.value = "";
        this._filter();
        this._change();
    };
    Combobox.prototype.getValue = function (asArray) {
        var ids = this.list.selection.getId();
        if (asArray) {
            return core_1.wrapBox(ids);
        }
        return Array.isArray(ids) ? ids.join(",") : ids;
    };
    Combobox.prototype.setValue = function (ids) {
        var _this = this;
        if (this.config.disabled) {
            return false;
        }
        this._filter();
        this.list.selection.remove();
        this._state.value = "";
        if (this.config.multiselection) {
            if (typeof ids === "string") {
                ids = ids.split(",");
            }
            ids.forEach(function (id) { return _this.list.selection.add(id); });
        }
        else {
            var id = core_1.unwrapBox(ids);
            this.list.selection.add(id);
            var item = this.data.getItem(id);
            if (item) {
                this._state.value = this._getItemText(item);
            }
        }
        this._change();
    };
    Combobox.prototype.destructor = function () {
        this.popup.destructor();
        this.events.clear();
        this.list.destructor();
        this._layout.config = null;
        this._layout.destructor();
        this.unmount();
    };
    Combobox.prototype._createLayout = function () {
        var _this = this;
        var list = this.list = new ts_list_1.List(null, {
            template: this.config.template,
            virtual: this.config.virtual,
            keyNavigation: function () { return _this.popup.isVisible(); },
            itemHeight: this.config.cellHeight,
            height: this.config.listHeight,
            data: this.data
        });
        this.list.selection.events.on("change", function (e) {
            if (!_this.config.multiselection) {
                // dirty hack with load was really dearty
                if (e && e !== "load") {
                    _this._hideOptions();
                }
            }
        });
        if (this.config.multiselection) {
            list.selection.config.multiselection = true;
        }
        var layout = this._layout = new ts_layout_1.Layout(this.popup.getContainer(), {
            css: "dhx_combobox-options dhx_combobox__options",
            rows: [
                {
                    id: "select-unselect-all",
                    hidden: !this.config.multiselection || !this.config.selectAllButton
                },
                { id: "list", css: "dhx_layout-cell--gravity" },
                {
                    id: "not-found",
                    hidden: true,
                }
            ],
            on: {
                click: {
                    ".dhx_combobox__action-select-all": this._handlers.selectAll
                }
            }
        });
        layout.cell("list").attach(list);
        if (this.config.multiselection && this.config.selectAllButton) {
            layout.cell("select-unselect-all").attach(helper_1.selectAllView);
        }
    };
    Combobox.prototype._change = function () {
        var ids = this.list.selection.getId();
        this.events.fire(types_1.ComboboxEvents.change, [ids]);
        this.paint();
    };
    Combobox.prototype._initHandlers = function () {
        var _this = this;
        if (this.config.help) {
            this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            this._helper.attachHTML(this.config.help);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            selectAll: function () {
                _this.list.selection.remove();
                if (_this._state.unselectActive) {
                    _this.data.filter();
                    _this.list.selection.getId().forEach(function (id) {
                        _this.list.selection.remove(id);
                    });
                    if (_this.config.selectAllButton) {
                        _this._layout.cell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                }
                else {
                    _this.data.filter();
                    _this.list.selection.add();
                    if (_this.config.selectAllButton) {
                        _this._layout.cell("select-unselect-all").attach(helper_1.unselectAllView);
                        _this._state.unselectActive = true;
                    }
                }
                _this._change();
            },
            onkeydown: function (e) {
                if (!_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                    _this._showOptions();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ENTER) {
                    if (_this.config.multiselection) {
                        var active = _this.list.getFocusItem();
                        var item = _this.data.getItem(active);
                        if (item) {
                            if (item.$selected) {
                                _this.list.selection.remove(active);
                            }
                            else {
                                _this.list.selection.add(active);
                            }
                        }
                        _this._state.value = "";
                        _this.data.filter();
                        _this.paint();
                    }
                    else {
                        var id = _this.list.getFocusItem();
                        _this.list.selection.add(id);
                        _this._state.value = _this._getItemText(_this.data.getItem(id)) || "";
                        _this._change();
                        _this._hideOptions();
                    }
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ESC) {
                    _this._hideOptions();
                }
            },
            onkeyup: function (e) {
                if (!_this.config.multiselection || _this.config.showItemsCount) {
                    return;
                }
                if (_this._state.ignoreNext) {
                    _this._state.ignoreNext = false;
                    return;
                }
                if (e.which === keycodes_1.KEY_CODES.BACKSPACE && _this._state.canDelete && _this.list.selection.getId().length) {
                    var selected = _this.list.selection.getId();
                    var id = selected[selected.length - 1];
                    _this.list.selection.remove(id);
                    _this._change();
                    _this.paint();
                }
            },
            oninput: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                var input = e.target;
                var value = input.value;
                _this._state.value = value;
                _this._filter();
                if (!value.length) {
                    _this._state.ignoreNext = true;
                    _this._state.canDelete = true;
                }
                else {
                    _this._state.canDelete = false;
                }
                if (!_this.config.multiselection) {
                    _this.list.selection.remove();
                    _this._change();
                }
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                }
            },
            oninputclick: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                _this.focus();
                if (e.target.classList.contains("dhx_combobox__action-remove")) {
                    var id = html_1.locate(e);
                    if (!id) {
                        return;
                    }
                    _this.list.selection.remove(id);
                    _this._change();
                    return;
                }
                if (e.target.classList.contains("dhx_combobox__action-clear-all")) {
                    _this.list.selection.getId().forEach(function (id) { return _this.list.selection.remove(id); });
                    if (_this.config.selectAllButton && _this._state.unselectActive) {
                        _this._layout.cell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                    _this.paint();
                    return;
                }
                e.preventDefault();
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                    return;
                }
                _this.focus();
            },
            toggleIcon: function () {
                _this.focus();
                if (_this.popup.isVisible()) {
                    _this._hideOptions();
                }
                else {
                    _this._showOptions();
                }
            }
        };
    };
    Combobox.prototype._initEvents = function () {
        var _this = this;
        this.list.events.on(ts_list_1.ListEvents.click, function (id) {
            if (_this.config.multiselection) {
                var selected = _this.data.getItem(id).$selected;
                if (selected) {
                    if (_this.config.selectAllButton && !_this._state.unselectActive && _this.data.getLength() === _this.list.selection.getId().length) {
                        _this._layout.cell("select-unselect-all").attach(helper_1.unselectAllView);
                        _this._state.unselectActive = true;
                    }
                }
                else {
                    if (_this.config.selectAllButton && _this._state.unselectActive) {
                        _this._layout.cell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                }
                if (!_this._state.value.length) {
                    _this._state.canDelete = true;
                }
                _this._change();
                return;
            }
            _this._state.value = _this._getItemText(_this.data.getItem(id)) || "";
            _this._change();
            _this._hideOptions();
        });
        if (this.config.readonly) {
            this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
                if (_this._state.value) {
                    var id = _this.list.selection.getId();
                    _this.list.setFocusIndex(_this.data.getIndex(id));
                }
                else {
                    _this.list.setFocusIndex(0);
                }
                _this._keyListener.startNewListen(function (val) { return _this._findBest(val); });
            });
        }
    };
    Combobox.prototype._showOptions = function () {
        if (this._state.value.length) {
            this._state.canDelete = true;
        }
        this._filter();
        if (this._configurePopup()) {
            this.events.fire(types_1.ComboboxEvents.open);
        }
    };
    Combobox.prototype._configurePopup = function () {
        var rootView = this.getRootView();
        if (!rootView || !rootView.refs || !rootView.refs.holder) {
            return false;
        }
        var holderNode = rootView.refs.holder.el;
        this.popup.getContainer().style.width = holderNode.offsetWidth + "px";
        this.popup.show(holderNode, { mode: html_1.Position.bottom });
        return true;
    };
    Combobox.prototype._hideOptions = function () {
        if (this.config.readonly) {
            this._keyListener.endListen();
        }
        this.list.setFocusIndex(0);
        if (!this.config.multiselection && !this.config.readonly && !this.list.selection.contains()) {
            this._state.value = "";
        }
        this.popup.hide();
        this.paint();
        this.events.fire(types_1.ComboboxEvents.close);
    };
    Combobox.prototype._filter = function () {
        var _this = this;
        if (this.config.readonly) {
            return;
        }
        this.data.filter(function (item) { return _this.config.filter
            ? _this.config.filter(item, _this._state.value)
            : core_1.isEqualString(_this._state.value, _this._getItemText(item)); });
        if (this.config.multiselection) {
            this.list.setFocusIndex(0);
        }
        else {
            var index = this.data.getIndex(this.list.selection.getId());
            this.list.setFocusIndex(index > -1 ? index : 0);
        }
        if (this.data.getLength() === 0) {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.cell("select-unselect-all").hide();
            }
            this._layout.cell("list").hide();
            this._layout.cell("not-found").attach(helper_1.emptyListView);
            this._layout.cell("not-found").show();
        }
        else {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.cell("select-unselect-all").show();
            }
            if (this._layout.cell("not-found").isVisible()) {
                this._layout.cell("list").show();
                this._layout.cell("not-found").hide();
            }
        }
    };
    Combobox.prototype._findBest = function (value) {
        var _this = this;
        var best = this.data.find(function (item) { return core_1.isEqualString(value, _this._getItemText(item)); });
        if (!best) {
            return;
        }
        if (this.list.selection.getId() === best.id) {
            return;
        }
        this.list.setFocusIndex(this.data.getIndex(best.id));
        this.list.selection.add(best.id);
        this.paint();
    };
    Combobox.prototype._draw = function () {
        var item = this.config.multiselection ? null : this.data.getItem(this.list.selection.getId());
        var showPlaceholder = !this.list.selection.getId() || this.list.selection.getId().length === 0;
        var width = this.config.labelInline && this.config.labelWidth ? this.config.labelWidth : "";
        var required = this.config.required;
        return dom_1.el(".dhx_widget.dhx_combobox" +
            (this.config.labelInline ? ".dhx_combobox--label-inline" : "") +
            (this.config.hiddenLabel ? ".dhx_combobox--sr_only" : "") +
            (this.config.required ? ".dhx_combobox--required" : "") +
            (this.config.css ? "." + this.config.css : ""), {
            dhx_widget_id: this._uid,
            onkeydown: this._handlers.onkeydown,
            onkeyup: this._handlers.onkeyup
        }, [
            this.config.label ? dom_1.el("label.dhx_label.dhx_combobox__label", {
                style: { minWidth: width, maxWidth: width },
                class: this.config.help ? "dhx_label--with-help" : "",
                onclick: this._handlers.oninputclick
            }, this.config.help ? [
                dom_1.el("span.dhx_label__holder", this.config.label),
                dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                }),
            ] : this.config.label) : null,
            dom_1.el("div.dhx_combobox-input-box" +
                // (this.popup.isVisible() ? ".dhx_combobox-input-box" : "") +
                (this.config.disabled ? ".dhx_combobox-input-box--disabled" : "") +
                (this.config.readonly ? ".dhx_combobox-input-box--readonly" : "") +
                (this._state.currentState === types_1.ComboState.error ? ".dhx_combobox-input-box--state_error" : "") +
                (this._state.currentState === types_1.ComboState.success ? ".dhx_combobox-input-box--state_success" : ""), {
                _ref: "holder"
            }, [
                dom_1.el("div.dhx_combobox-input__icon", {
                    onclick: this._handlers.toggleIcon
                }, [
                    dom_1.el("span" + (this.popup.isVisible() ? ".dxi.dxi-menu-up" : ".dxi.dxi-menu-down"))
                ]),
                dom_1.el("div.dhx_combobox-input-list-wrapper", {
                    onclick: this._handlers.oninputclick
                }, [
                    dom_1.el("ul.dhx_combobox-input-list", this._drawSelectedItems().concat([
                        dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-input-list__item--input", [
                            dom_1.el("input.dhx_combobox-input", {
                                oninput: this._handlers.oninput,
                                _ref: "input",
                                _key: this._uid,
                                type: "text",
                                placeHolder: showPlaceholder && this.config.placeholder ? this.config.placeholder : undefined,
                                value: this.config.readonly && item ? this._getItemText(item) : this._state.value,
                                readOnly: this.config.readonly || this.config.disabled,
                                required: required
                            })
                        ])
                    ]))
                ]),
            ])
        ]);
    };
    Combobox.prototype._drawSelectedItems = function () {
        var _this = this;
        if (!this.config.multiselection) {
            return [];
        }
        if (this.config.showItemsCount) {
            var count = this.list.selection.getId().length;
            return count ? [
                dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", [
                    dom_1.el("span.dhx_combobox-tag__value", itemsCountTemplate(count, this.config.showItemsCount)),
                    dom_1.el("button.dhx_button.dhx_combobox-tag__action.dhx_combobox__action-clear-all", [
                        dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle")
                    ])
                ])
            ] : [];
        }
        return this.list.selection.getId().map(function (id) {
            var item = _this.data.getItem(id);
            if (!item) {
                return null;
            }
            return dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", { dhx_id: id }, [
                _this._drawImageOrIcon(item),
                dom_1.el("span.dhx_combobox-tag__value", _this._getItemText(item)),
                dom_1.el("button.dhx_button.dhx_button--icon.dhx_combobox-tag__action.dhx_combobox__action-remove", {
                    type: "button"
                }, [
                    dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle")
                ])
            ]);
        });
    };
    Combobox.prototype._drawImageOrIcon = function (item) {
        if (item.src) {
            return dom_1.el("img.dhx_combobox-tag__image", { src: item.src });
        }
        else if (item.icon) {
            return dom_1.el("span.dhx_combobox-tag__icon", { class: item.icon });
        }
        return null;
    };
    Combobox.prototype._getItemText = function (item) {
        if (!item) {
            return null;
        }
        return item.value;
    };
    return Combobox;
}(view_1.View));
exports.Combobox = Combobox;
function itemsCountTemplate(count, templateFN) {
    if (typeof templateFN === "function") {
        return templateFN(count);
    }
    else {
        return count + " " + en_1.default.selectedItems;
    }
}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CODES = {
    BACKSPACE: 8,
    ENTER: 13,
    ESC: 27,
    DOWN_ARROW: 40,
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CLEAR_TIMEOUT = 2000;
var KeyListener = /** @class */ (function () {
    function KeyListener() {
        var _this = this;
        this._sequence = "";
        document.addEventListener("keydown", function (e) {
            if (!_this._isActive) {
                return;
            }
            var key = e.key;
            if (key === "Backspace" && _this._sequence.length > 0) {
                _this._sequence = _this._sequence.slice(0, _this._sequence.length - 1);
                _this._change();
            }
            if (key.length < 2) { // handle only single key value
                _this._sequence += key;
                _this._change();
            }
        });
    }
    KeyListener.prototype.startNewListen = function (action) {
        this._isActive = true;
        this._sequence = "";
        this._currentAction = action;
    };
    KeyListener.prototype.endListen = function () {
        this._currentAction = null;
        this.reset();
        this._isActive = false;
    };
    KeyListener.prototype.reset = function () {
        this._sequence = "";
    };
    KeyListener.prototype._change = function () {
        this._currentAction(this._sequence);
        this._addClearTimeout();
    };
    KeyListener.prototype._addClearTimeout = function () {
        var _this = this;
        if (this._clearTimeout) {
            clearTimeout(this._clearTimeout);
        }
        this._clearTimeout = setTimeout(function () {
            _this.reset();
            _this._clearTimeout = null;
        }, CLEAR_TIMEOUT);
    };
    return KeyListener;
}());
exports.KeyListener = KeyListener;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var en_1 = __webpack_require__(48);
function selectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.selectAll);
}
exports.selectAllView = selectAllView;
function unselectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.unselectAll);
}
exports.unselectAllView = unselectAllView;
function emptyListView() {
    return dom_1.el("ul.dhx_list", [
        dom_1.el("li.dhx_list-item.dhx_combobox-options__item", {}, en_1.default.notFound)
    ]);
}
exports.emptyListView = emptyListView;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(163));
__export(__webpack_require__(49));


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var Keymanager_1 = __webpack_require__(13);
var ts_list_1 = __webpack_require__(36);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(21);
var types_2 = __webpack_require__(49);
var editors_1 = __webpack_require__(164);
var DataView = /** @class */ (function (_super) {
    __extends(DataView, _super);
    function DataView(node, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, node, core_1.extend({
            keyNavigation: true,
            itemsInRow: 1,
            multiselectionMode: config.multiselectionMode ? config.multiselectionMode : "click",
            gap: "0px",
            editing: false
        }, config)) || this;
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        _this.selection = new ts_list_1.Selection({
            multiselection: _this.config.multiselection,
            multiselectionMode: _this.config.multiselectionMode,
        }, _this.data);
        _this._getHotkeys();
        var updater = function (updateObj) { return function (id, ids) {
            if (ids && ids instanceof Array) {
                ids.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
                return;
            }
            if (_this.data.exists(id)) {
                _this.data.update(id, updateObj);
            }
        }; };
        _this.events.on(ts_data_1.DataEvents.change, function () { return _this.paint(); });
        _this.events.on(ts_data_1.DragEvents.canDrop, updater({ $drophere: true }));
        _this.events.on(ts_data_1.DragEvents.cancelDrop, updater({ $drophere: undefined }));
        _this.events.on(ts_data_1.DragEvents.dragStart, updater({ $dragtarget: true }));
        _this.events.on(ts_data_1.DragEvents.dragEnd, updater({ $dragtarget: undefined }));
        _this.events.on(types_2.DataViewEvents.afterEditEnd, function (value, id) {
            var item = _this.data.getItem(id);
            _this.data.update(id, __assign({}, item, { value: value }));
            _this._edited = null;
            _this._getHotkeys();
            _this.paint();
        });
        _this.selection.events.on(types_1.SelectionEvents.afterSelect, function (id) {
            _this.setFocusIndex(_this.data.getIndex(id));
        });
        _this._handlers = {
            onmousedown: function (e) {
                var itemsForGhost = [];
                var item = html_1.locateNode(e, "dhx_id");
                var itemId = item && item.getAttribute("dhx_id");
                var selectionIds = _this.selection.getId();
                if (_this.config.multiselection && selectionIds instanceof Array) {
                    selectionIds.map(function (id) {
                        if (id !== itemId) {
                            itemsForGhost.push(_this.getRootView().refs[id].el);
                        }
                    });
                }
                return _this.config.dragMode && !_this._edited ? ts_data_1.dragManager.onMouseDown(e, _this.selection.getId(), itemsForGhost) : null;
            },
            ondragstart: function () { return _this.config.dragMode && !_this._edited ? false : null; },
            oncontextmenu: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.events.fire(types_2.DataViewEvents.contextmenu, [id, e]);
            },
            ondblclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                if (_this.config.editing) {
                    _this.edit(id);
                }
                _this.events.fire(types_2.DataViewEvents.doubleClick, [id, e]);
            },
            onclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.setFocusIndex(_this.data.getIndex(id));
                _this.selection.add(id, e.ctrlKey || e.metaKey, e.shiftKey);
                _this.events.fire(types_2.DataViewEvents.click, [id, e]);
            },
        };
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        var view = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didRedraw: function (vm) {
                    var rootEl = vm.node.el;
                    var hasScroll = rootEl.scrollHeight > rootEl.offsetHeight;
                    var classAttr = vm.node.attrs.class.replace(" dhx_dataview--has-scroll", "");
                    var newClassName = hasScroll ? classAttr + " dhx_dataview--has-scroll" : classAttr;
                    vm.node.patch({ class: newClassName });
                }
            }
        });
        _this.mount(node, view);
        return _this;
    }
    DataView.prototype.edit = function (id) {
        this._edited = id;
        if (!this.data.getItem(this._edited) || !this.events.fire(types_2.DataViewEvents.beforeEditStart, [id])) {
            this._edited = null;
            return;
        }
        this._getHotkeys();
        this.paint();
        this.events.fire(types_2.DataViewEvents.afterEditStart, [id]);
    };
    DataView.prototype.setFocusIndex = function (index) {
        if (index < 0) {
            this._focusIndex = 0;
        }
        else if (index > this.data.getLength() - 1) {
            this._focusIndex = this.data.getLength() - 1;
        }
        else {
            this._focusIndex = index;
        }
        var node = this.getRootNode();
        if (!node || !node.parentNode) {
            return;
        }
        var itemRow = node.children[Math.floor(this._focusIndex / this.config.itemsInRow)];
        if (itemRow) {
            var item = itemRow.children[this._focusIndex % this.config.itemsInRow];
            if (item.offsetTop >= node.scrollTop + node.clientHeight - item.clientHeight) {
                node.scrollTop = item.offsetTop - node.clientHeight + item.clientHeight;
            }
            else if (item.offsetTop < node.scrollTop) {
                node.scrollTop = item.offsetTop;
            }
        }
        this.events.fire(types_2.DataViewEvents.focusChange, [this._focusIndex, this.data.getId(this._focusIndex)]);
        this.paint();
        return;
    };
    DataView.prototype.getFocusIndex = function () {
        return this._focusIndex;
    };
    DataView.prototype.getFocusItem = function () {
        return this.data.getItem(this.data.getId(this._focusIndex));
    };
    DataView.prototype.setItemInRow = function (amount) {
        this.config.itemsInRow = amount;
        this.paint();
    };
    DataView.prototype.destructor = function () {
        this.events.clear();
        if (this._navigationDestructor) {
            this._navigationDestructor();
        }
        if (this._documentClickDestuctor) {
            this._documentClickDestuctor();
        }
        this.unmount();
    };
    DataView.prototype._renderItem = function (item, focus, isLastItemInRow) {
        var _a = this.config, itemsInRow = _a.itemsInRow, gap = _a.gap, template = _a.template;
        var html = template ? template(item) : item.htmlContent;
        var gapWithPx = function (gapSize) { return parseFloat(gapSize); };
        if (item.id === this._edited) {
            var editor = editors_1.getEditor(item, this);
            return editor.toHTML(isLastItemInRow);
        }
        return dom_1.el("div", {
            // tabindex: "1",
            class: "dhx_dataview-item" +
                (item.$selected ? " dhx_dataview-item--selected" : "") +
                (focus ? " dhx_dataview-item--focus" : "") +
                (item.$drophere && !this._edited ? " dhx_dataview-item--drophere" : "") +
                (item.$dragtarget && !this._edited ? " dhx_dataview-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_dataview-item--drag" : "") +
                (gapWithPx(gap) ? " dhx_dataview-item--with-gap" : "") +
                (item.css && item.$selected || item.css && focus ? "" : item.css ? " " + item.css : "") +
                (isLastItemInRow ? " dhx_dataview-item--last-item-in-row" : ""),
            style: {
                "width": "calc(" + 100 / itemsInRow + "% - " + gapWithPx(gap) + " * " + (itemsInRow - 1) / itemsInRow + "px)",
                "margin-right": isLastItemInRow ? "" : gap,
            },
            _key: item.id,
            dhx_id: item.id,
            _ref: item.id,
        }, html ? [dom_1.el(".dhx_dataview-item__inner-html", {
                ".innerHTML": html
            })] : item.value || item.text || item.value);
    };
    DataView.prototype._draw = function () {
        var _this = this;
        var _a = this.config, itemsInRow = _a.itemsInRow, css = _a.css, gap = _a.gap;
        var currentCounter = 0;
        var rows = this.data.reduce(function (items, obj, index) {
            if (currentCounter === 0) {
                items.push([]);
            }
            items[items.length - 1].push(_this._renderItem(obj, index === _this._focusIndex, currentCounter === itemsInRow - 1));
            currentCounter = (currentCounter + 1) % itemsInRow;
            return items;
        }, []);
        return dom_1.el("", __assign({}, this._handlers, { dhx_widget_id: this._uid, class: (css ? css : "") + " dhx_widget dhx_dataview" +
                (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : "") }), rows.map(function (row) { return dom_1.el(".dhx_dataview-row", {
            style: { margin: gap },
        }, row); }));
    };
    DataView.prototype._getHotkeys = function () {
        var _this = this;
        if (this.config.keyNavigation) {
            if (this._edited) {
                if (this._navigationDestructor) {
                    this._navigationDestructor();
                }
            }
            else {
                var keyNavigation = this.config.keyNavigation;
                if (typeof this.config.keyNavigation !== "function") {
                    this._widgetInFocus = false;
                    keyNavigation = function () { return _this._widgetInFocus; };
                    this._documentClickDestuctor = core_1.detectWidgetClick(this._uid, function (isInnerClick) { return _this._widgetInFocus = isInnerClick; });
                }
                var preventEvent = function (fn) { return function (e) {
                    e.preventDefault();
                    fn();
                }; };
                this._navigationDestructor = Keymanager_1.addHotkeys({
                    "arrowdown": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex + _this.config.itemsInRow); }),
                    "arrowup": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex - _this.config.itemsInRow); }),
                    "arrowleft": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex - 1); }),
                    "arrowright": preventEvent(function () { return _this.setFocusIndex(_this._focusIndex + 1); }),
                    "enter": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id);
                        _this.events.fire(types_2.DataViewEvents.click, [id, e]);
                    },
                    "enter+shift": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, false, true);
                        _this.events.fire(types_2.DataViewEvents.click, [id, e]);
                    },
                    "enter+ctrl": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, true, false);
                        _this.events.fire(types_2.DataViewEvents.click, [id, e]);
                    },
                    "enter+meta": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, true, false);
                        _this.events.fire(types_2.DataViewEvents.click, [id, e]);
                    },
                }, keyNavigation);
            }
        }
    };
    return DataView;
}(view_1.View));
exports.DataView = DataView;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputEditor_1 = __webpack_require__(165);
function getEditor(item, dataView) {
    return new InputEditor_1.InputEditor(item, dataView);
}
exports.getEditor = getEditor;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(49);
var InputEditor = /** @class */ (function () {
    function InputEditor(item, dataView) {
        var _this = this;
        this._dataView = dataView;
        this._config = dataView.config;
        this._item = item;
        this._dataView.events.on(types_1.DataViewEvents.focusChange, function (index, id) {
            if (_this._mode && id !== _this._item.id) {
                _this.endEdit();
            }
        });
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        if (this._input) {
            var value = this._input.value;
            if (this._dataView.events.fire(types_1.DataViewEvents.beforeEditEnd, [value, this._item.id])) {
                this._input.removeEventListener("blur", this._handlers.onBlur);
                this._input.removeEventListener("change", this._handlers.onChange);
                this._handlers = {};
                this._mode = false;
                this._dataView.events.fire(types_1.DataViewEvents.afterEditEnd, [value, this._item.id]);
            }
            else {
                this._input.focus();
            }
        }
    };
    InputEditor.prototype.toHTML = function (isLastItemInRow) {
        this._mode = true;
        var _a = this._config, itemsInRow = _a.itemsInRow, gap = _a.gap;
        var gapWithPx = function (gapSize) { return parseFloat(gapSize); };
        return dom_1.el(".dhx_input-wrapper", {
            style: {
                width: "calc(" + 100 / itemsInRow + "% - " + gapWithPx(gap) + " * " + (itemsInRow - 1) / itemsInRow + "px)",
                maxWidth: "calc(" + 100 / itemsInRow + "% - " + gapWithPx(gap) + " * " + (itemsInRow - 1) / itemsInRow + "px)",
                marginRight: isLastItemInRow ? "" : gap,
            }
        }, [
            dom_1.el("div.dhx_input-container", {
                style: {
                    height: "100%",
                }
            }, [
                dom_1.el("input.dhx_input", {
                    class: (this._item.css ? " " + this._item.css : "") +
                        (isLastItemInRow ? " dhx_dataview-item--last-item-in-row" : ""),
                    style: {
                        padding: "8px, 12px",
                        width: "100%",
                        height: "100%",
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert,
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id
                }),
            ]),
        ]);
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.value = _this._item.value;
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            }
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(167));
__export(__webpack_require__(8));
var types_1 = __webpack_require__(8);
exports.FormEvents = types_1.FormEvents;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_combobox_1 = __webpack_require__(47);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var ts_slider_1 = __webpack_require__(30);
var ts_layout_1 = __webpack_require__(12);
var ts_calendar_1 = __webpack_require__(28);
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var ts_timepicker_1 = __webpack_require__(29);
var ts_colorpicker_1 = __webpack_require__(31);
var dateInput_1 = __webpack_require__(168);
var button_1 = __webpack_require__(169);
var checkbox_1 = __webpack_require__(170);
var input_1 = __webpack_require__(50);
var radioGroup_1 = __webpack_require__(171);
var select_1 = __webpack_require__(173);
var textarea_1 = __webpack_require__(174);
var textinput_1 = __webpack_require__(175);
var combo_1 = __webpack_require__(176);
var sliderform_1 = __webpack_require__(177);
var helper_1 = __webpack_require__(9);
var simplevault_1 = __webpack_require__(178);
var types_1 = __webpack_require__(8);
var timeInput_1 = __webpack_require__(179);
var colorpicker_1 = __webpack_require__(180);
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(container, config) {
        var _this = _super.call(this, null, core_1.extend({
            labelWidth: "auto",
            inputType: "text"
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._state = {};
        _this.container = container;
        _this._initUI(container);
        return _this;
    }
    Form.prototype.send = function (url, method, asFormData) {
        var _this = this;
        if (method === void 0) { method = "POST"; }
        if (this.events.fire(types_1.FormEvents.beforeSend)) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        resolve(xhr.response || xhr.responseText);
                    }
                    else {
                        reject({
                            status: xhr.status,
                            statusText: xhr.statusText
                        });
                    }
                };
                xhr.onloadend = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                        _this.events.fire(types_1.FormEvents.afterSend);
                    }
                };
                xhr.onerror = function () {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                };
                if (method === "GET") {
                    url += "?" + encodeURIComponent(JSON.stringify(_this.getValue()));
                }
                xhr.open(method, url);
                if (!asFormData) {
                    xhr.setRequestHeader("Content-Type", "application/json");
                }
                switch (method) {
                    case "POST":
                    case "DELETE":
                    case "PUT":
                        xhr.send(asFormData ? _this.getValue(true) : JSON.stringify(_this.getValue()));
                        break;
                    case "GET":
                        xhr.send();
                    default:
                        xhr.send();
                        break;
                }
            });
        }
    };
    Form.prototype.setConfig = function (config) {
        this.unmount();
        this.config = config;
        this._initUI(this.container);
        this.paint();
    };
    Form.prototype.clear = function (method) {
        switch (method) {
            case types_1.ClearMethod.value:
                this._clear();
                break;
            case types_1.ClearMethod.validation:
                this._clearValidate();
                break;
            default:
                this._clear();
                this._clearValidate();
                break;
        }
        this.paint();
    };
    Form.prototype.setValue = function (obj) {
        for (var item in obj) {
            for (var key in this._attachments) {
                if (typeof this._attachments[key].setValue === "function") {
                    if (this._attachments[key].config.id === item) {
                        this._attachments[key].setValue(obj[key]);
                    }
                }
            }
        }
    };
    Form.prototype.getValue = function (asFormData) {
        if (asFormData) {
            var formData = new FormData();
            for (var key in this._state) {
                if (Array.isArray(this._state[key])) {
                    for (var _i = 0, _a = this._state[key]; _i < _a.length; _i++) {
                        var value = _a[_i];
                        formData.append(key + "[]", value);
                    }
                }
                else {
                    formData.append(key, this._state[key]);
                }
            }
            return formData;
        }
        return this._state;
    };
    Form.prototype.validate = function () {
        var attachments = this._attachments;
        var isValid = true;
        for (var id in attachments) {
            var component = attachments[id];
            if (component.validate && !component.validate()) {
                isValid = false;
                this.events.fire(types_1.FormEvents.validationFail, [id, component]);
            }
        }
        return isValid;
    };
    Form.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Form.prototype.destructor = function () {
        this.events.clear();
        this.unmount();
    };
    Form.prototype._addLayoutItem = function (item) {
        var _this = this;
        item.id = item.id || core_1.uid();
        var id = item.id;
        var name = item.name || item.id;
        var width = item.width, height = item.height, cellCss = item.cellCss, gravity = item.gravity, config = __rest(item, ["width", "height", "cellCss", "gravity"]);
        var cell = {
            id: id,
            width: width,
            height: height,
            css: cellCss,
        };
        if ("gravity" in item) {
            cell.gravity = item.gravity;
        }
        switch (config.type) {
            case types_1.FormItemType.button:
                var button = this._attachments[id] = new button_1.Button(null, config);
                button.events.on(button_1.ButtonEvents.click, function (e) {
                    !_this.validate() ? e.preventDefault() : _this.events.fire(types_1.FormEvents.buttonClick, [id, e]);
                });
                break;
            case types_1.FormItemType.datepicker:
                var dateInput_2 = this._attachments[id] = new dateInput_1.DateInput(null, config);
                this._state[name] = dateInput_2.getValue();
                dateInput_2.calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
                    var value = dateInput_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                dateInput_2.events.on(dateInput_1.DateInputEvents.change, function () {
                    var value = dateInput_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.checkbox:
                var checkbox_2 = this._attachments[id] = new checkbox_1.Checkbox(null, config);
                this._state[name] = checkbox_2.getValue();
                checkbox_2.events.on(checkbox_1.CheckboxEvents.change, function () {
                    var value = checkbox_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.combo:
                var combo_2 = this._attachments[id] = new combo_1.Combo(config);
                this._state[name] = combo_2.getValue();
                combo_2.events.on(ts_combobox_1.ComboboxEvents.change, function (selected) {
                    var value = combo_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, selected]);
                    _this._state[name] = value;
                });
                if (config.data) {
                    combo_2.data.parse(config.data);
                }
                break;
            case types_1.FormItemType.input:
                var input_2 = this._attachments[id] = new input_1.Input(null, config);
                this._state[name] = input_2.getValue();
                input_2.events.on(input_1.InputEvents.change, function () {
                    var value = input_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.radioGroup:
                var radioGroup_2 = this._attachments[id] = new radioGroup_1.RadioGroup(null, config);
                this._state[name] = radioGroup_2.getValue();
                radioGroup_2.events.on(radioGroup_1.RadioGroupEvents.change, function () {
                    var value = radioGroup_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.select:
                var select_2 = this._attachments[id] = new select_1.Select(config);
                this._state[name] = select_2.getValue();
                select_2.events.on(select_1.SelectEvents.change, function () {
                    var value = select_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.simpleVault:
                var simpleVault_1 = this._attachments[id] = new simplevault_1.SimpleVault(null, config);
                this._state[name] = simpleVault_1.getValue();
                simpleVault_1.data.events.on(ts_data_1.DataEvents.change, function () {
                    var value = simpleVault_1.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.slider:
                var slider_1 = this._attachments[id] = new sliderform_1.SliderForm(config);
                this._state[name] = slider_1.getValue();
                slider_1.events.on(ts_slider_1.SliderEvents.change, function () {
                    var value = slider_1.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.textarea:
                var textarea_2 = this._attachments[id] = new textarea_1.Textarea(null, config);
                this._state[name] = textarea_2.getValue();
                textarea_2.events.on(input_1.InputEvents.change, function () {
                    _this._state[name] = textarea_2.getValue();
                });
                break;
            case types_1.FormItemType.text:
                this._attachments[id] = new textinput_1.Text(null, config);
                break;
            case types_1.FormItemType.timepicker:
                var timeInput_2 = this._attachments[id] = new timeInput_1.TimeInput(null, config);
                this._state[name] = timeInput_2.getValue();
                timeInput_2.timepicker.events.on(ts_timepicker_1.TimepickerEvents.change, function () {
                    var value = timeInput_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                timeInput_2.events.on(timeInput_1.TimeInputEvents.change, function () {
                    var value = timeInput_2.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
            case types_1.FormItemType.colorpicker:
                var colorpickerInput_1 = this._attachments[id] = new colorpicker_1.ColorpickerInput(null, config);
                this._state[name] = colorpickerInput_1.getValue();
                colorpickerInput_1.events.on(colorpicker_1.ColorpickerInputEvents.change, function () {
                    var value = colorpickerInput_1.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                colorpickerInput_1.colorpicker.events.on(ts_colorpicker_1.ColorpickerEvents.colorChange, function () {
                    var value = colorpickerInput_1.getValue();
                    _this.events.fire(types_1.FormEvents.change, [name, value]);
                    _this._state[name] = value;
                });
                break;
        }
        return cell;
    };
    Form.prototype._addLayoutItems = function (items, group, groupName) {
        var _this = this;
        return items.map(function (item) {
            item.type = item.type || group;
            if (helper_1.isBlock(item)) {
                var layoutConfig = {};
                _this._createLayoutConfig(item, layoutConfig);
                return layoutConfig;
            }
            else {
                item.name = item.name || groupName;
            }
            return _this._addLayoutItem(item);
        });
    };
    Form.prototype._createLayoutConfig = function (config, layoutConfig) {
        if (core_1.isDefined(config.cellCss)) {
            layoutConfig.css = config.cellCss;
        }
        if (core_1.isDefined(config.title)) {
            layoutConfig.header = config.title;
        }
        if (core_1.isDefined(config.padding)) {
            layoutConfig.padding = config.padding;
        }
        if (core_1.isDefined(config.gravity)) {
            layoutConfig.gravity = config.gravity;
        }
        if (core_1.isDefined(config.width)) {
            layoutConfig.width = config.width;
        }
        if (core_1.isDefined(config.height)) {
            layoutConfig.height = config.height;
        }
        if (core_1.isDefined(config.align)) {
            layoutConfig.align = config.align;
        }
        if (core_1.isDefined(config.rows)) {
            layoutConfig.rows = this._addLayoutItems(config.rows, config.group, config.groupName);
        }
        else if (core_1.isDefined(config.cols)) {
            layoutConfig.cols = this._addLayoutItems(config.cols, config.group, config.groupName);
        }
    };
    Form.prototype._initUI = function (container) {
        var attachments = this._attachments = {};
        var layoutConfig = { padding: "8px" };
        this._createLayoutConfig(this.config, layoutConfig);
        var layout = this.layout = new ts_layout_1.Layout(container, layoutConfig);
        for (var id in attachments) {
            layout.cell(id).attach(attachments[id]);
        }
    };
    Form.prototype._clear = function () {
        this._state = {};
        for (var key in this._attachments) {
            var name_1 = this._attachments[key].config.name;
            if (typeof this._attachments[key].clear === "function") {
                this._attachments[key].clear();
                name_1 ? this._state[name_1] = this._attachments[key].getValue() : this._state[key] = this._attachments[key].getValue();
            }
        }
    };
    Form.prototype._clearValidate = function () {
        for (var key in this._attachments) {
            if (typeof this._attachments[key].clearValidate === "function") {
                this._attachments[key].clearValidate();
            }
        }
    };
    return Form;
}(view_1.View));
exports.Form = Form;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_calendar_1 = __webpack_require__(28);
var events_1 = __webpack_require__(2);
var dom_1 = __webpack_require__(0);
var label_1 = __webpack_require__(16);
var ts_popup_1 = __webpack_require__(10);
var types_1 = __webpack_require__(8);
var helper_1 = __webpack_require__(9);
var DateInputEvents;
(function (DateInputEvents) {
    DateInputEvents["change"] = "change";
})(DateInputEvents = exports.DateInputEvents || (exports.DateInputEvents = {}));
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(container, config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this._popup = new ts_popup_1.Popup({ css: "dhx_widget--border-shadow" });
        _this.calendar = new ts_calendar_1.Calendar(null, config);
        _this._popup.attach(_this.calendar);
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        _this.calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
            _this.config.value = _this.calendar.getValue();
            _this._popup.hide();
            _this.validate();
        });
        _this.events.on(DateInputEvents.change, function (value) {
            _this.config.value = _this._inputValidate(value);
            if (_this._inputValidate(value)) {
                _this.calendar.setValue(value);
            }
            _this.validate();
        });
        return _this;
    }
    DateInput.prototype.validate = function () {
        var isValid = !this.config.required || Boolean(this.config.value);
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    DateInput.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    DateInput.prototype.setValue = function (value) {
        this.calendar.setValue(value);
        this.paint();
    };
    DateInput.prototype.getValue = function () {
        return this.config.value || "";
    };
    DateInput.prototype.clear = function () {
        this.config.value = "";
        this.paint();
    };
    DateInput.prototype._getHandlers = function () {
        var _this = this;
        return {
            onfocus: function () {
                if (_this._popup.isVisible()) {
                    return;
                }
                var node = _this.getRootView().refs.input.el;
                _this._popup.show(node);
            },
            onchange: function (e) {
                var value = e.target.value;
                _this.events.fire(DateInputEvents.change, [value]);
            },
            onkeyup: function (e) {
                if (e.keyCode === 13) {
                    if (_this._popup.isVisible()) {
                        _this._popup.hide();
                    }
                    var node = _this.getRootView().refs.input.el;
                    node.blur();
                }
            }
        };
    };
    DateInput.prototype._inputValidate = function (value) {
        var dateFormat = this.calendar.config.dateFormat;
        return ts_calendar_1.stringToDate(value, dateFormat, true) ? value : "";
    };
    DateInput.prototype._draw = function () {
        var _a = this.config, value = _a.value, icon = _a.icon, required = _a.required, disabled = _a.disabled, placeholder = _a.placeholder, name = _a.name, id = _a.id, validation = _a.validation, _b = _a.editing, editing = _b === void 0 ? false : _b;
        return dom_1.el("div.dhx_form-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation)),
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("div.dhx_input-container", {}, [
                    dom_1.el(".dhx_input__icon", {
                        class: icon || "dxi dxi-calendar-today"
                    }),
                    dom_1.el("input.dhx_input.dhx_input--icon-padding", {
                        _key: this._uid,
                        value: value,
                        type: "text",
                        _ref: "input",
                        required: required,
                        disabled: disabled,
                        placeholder: placeholder || "",
                        name: name || "",
                        id: id || this._uid,
                        onfocus: this._handlers.onfocus,
                        onchange: this._handlers.onchange,
                        onkeyup: this._handlers.onkeyup,
                        autocomplete: "off",
                        readOnly: !editing
                    }),
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {}, helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return DateInput;
}(label_1.Label));
exports.DateInput = DateInput;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(4);
var events_1 = __webpack_require__(2);
var ButtonEvents;
(function (ButtonEvents) {
    ButtonEvents["click"] = "click";
})(ButtonEvents = exports.ButtonEvents || (exports.ButtonEvents = {}));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, config) || this;
        _this.events = new events_1.EventSystem();
        _this._handlers = {
            onclick: function (e) { return _this.events.fire(ButtonEvents.click, [e]); }
        };
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Button.prototype.setValue = function (value) {
        this.config.value = value;
        this.paint();
    };
    Button.prototype._draw = function () {
        var _a = this.config, color = _a.color, size = _a.size, view = _a.view, full = _a.full, loading = _a.loading, circle = _a.circle, icon = _a.icon, value = _a.value, disabled = _a.disabled, submit = _a.submit;
        var colorsCss = {
            danger: " dhx_button--color_danger",
            secondary: " dhx_button--color_secondary",
            primary: " dhx_button--color_primary",
            success: " dhx_button--color_success",
        }[color] || " dhx_button--color_primary";
        var sizeCss = {
            small: " dhx_button--size_small",
            medium: " dhx_button--size_medium",
        }[size] || " dhx_button--size_medium";
        var viewCss = {
            flat: " dhx_button--view_flat",
            link: " dhx_button--view_link",
        }[view] || " dhx_button--view_flat";
        var fullCss = full ? " dhx_button--width_full" : "";
        var circleCss = circle ? " dhx_button--circle" : "";
        var loadingCss = loading ? " dhx_button--loading" : "";
        var iconViewCss = icon && !value ? " dhx_button--icon" : "";
        return dom_1.el("button", {
            disabled: disabled,
            onclick: this._handlers.onclick,
            type: submit ? "submit" : "button",
            class: "dhx_button" +
                colorsCss +
                sizeCss +
                viewCss +
                fullCss +
                circleCss +
                loadingCss +
                iconViewCss
        }, [
            icon && dom_1.el("span.dhx_button__icon", {
                class: icon
            }),
            value && dom_1.el("span.dhx_button__text", value),
            loading && dom_1.el("span.dhx_button__loading", [
                dom_1.el("span.dhx_button__loading-icon.dxi.dxi-loading")
            ])
        ]);
    };
    return Button;
}(view_1.View));
exports.Button = Button;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var helper_1 = __webpack_require__(9);
var ts_popup_1 = __webpack_require__(10);
var types_1 = __webpack_require__(8);
var CheckboxEvents;
(function (CheckboxEvents) {
    CheckboxEvents["change"] = "change";
})(CheckboxEvents = exports.CheckboxEvents || (exports.CheckboxEvents = {}));
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, config) || this;
        if (_this.config.help) {
            _this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            _this._helper.attachHTML(_this.config.help);
        }
        _this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            cancelUnusefulClick: function (e) {
                e.preventDefault();
            },
            onchange: function (e) {
                _this.config.checked = e.target.checked;
                _this.events.fire(CheckboxEvents.change, [e.target.checked]);
                _this.validate();
            }
        };
        _this.events = new events_1.EventSystem();
        _this.events.on(CheckboxEvents.change, function (value) {
            _this.config.checked = value;
        });
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Checkbox.prototype.clear = function () {
        this.config.checked = false;
        this.paint();
    };
    Checkbox.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    Checkbox.prototype.setValue = function (value) {
        this.events.fire(CheckboxEvents.change, [value]);
        this.config.checked = value;
        this.paint();
    };
    Checkbox.prototype.getValue = function () {
        return this.config.checked || false;
    };
    Checkbox.prototype.validate = function () {
        var isValid = !this.config.required || this.config.checked;
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    Checkbox.prototype._draw = function () {
        var _a = this.config, id = _a.id, value = _a.value, label = _a.label, checked = _a.checked, disabled = _a.disabled, name = _a.name, help = _a.help, labelWidth = _a.labelWidth, labelInline = _a.labelInline, required = _a.required;
        return dom_1.el("label.dhx_form-group.dhx_checkbox", {
            class: helper_1.getFormItemCss(this.config, Boolean(required)) + (help ? " dhx_label--with-help" : ""),
            style: { "margin-left": "" + (labelWidth && labelInline ? "calc(" + labelWidth + " + 16px)" : "") }
        }, [
            dom_1.el("input.dhx_checkbox__input", {
                type: "checkbox",
                id: id,
                value: value || "",
                name: name || "",
                disabled: disabled,
                checked: checked,
                onchange: this._handlers.onchange,
                required: required
            }),
            dom_1.el("span.dhx_checkbox__visual-input"),
            dom_1.el("span.dhx_label", {
                class: help ? "dhx_label--with-help" : ""
            }, help ? [
                dom_1.el("span.dhx_label__holder", label),
                dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                }),
            ] : label),
            helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {
                onclick: this._handlers.cancelUnusefulClick,
            }, helper_1.getValidationMessage(this.config))
        ]);
    };
    return Checkbox;
}(view_1.View));
exports.Checkbox = Checkbox;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var ts_layout_1 = __webpack_require__(12);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var radiobutton_1 = __webpack_require__(172);
var helper_1 = __webpack_require__(9);
var types_1 = __webpack_require__(8);
var RadioGroupEvents;
(function (RadioGroupEvents) {
    RadioGroupEvents["change"] = "change";
})(RadioGroupEvents = exports.RadioGroupEvents || (exports.RadioGroupEvents = {}));
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(container, config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this._buttons = [];
        var mapConfig = _this.config.options.rows || _this.config.options.cols;
        var _a = _this.config, preMessage = _a.preMessage, errorMessage = _a.errorMessage, successMessage = _a.successMessage;
        mapConfig.map(function (option) {
            option.id = option.id || core_1.uid();
        });
        _this.layout = new ts_layout_1.Layout(null, config.options);
        mapConfig.map(function (option) {
            var radiobutton = new radiobutton_1.RadioButton(null, option);
            radiobutton.config.disabled = _this.config.disabled;
            radiobutton.config.name = _this.config.name;
            radiobutton.config.required = _this.config.required;
            radiobutton.config.css = _this.config.css;
            if (preMessage || errorMessage || successMessage) {
                radiobutton.config.preMessage = "";
                radiobutton.config.errorMessage = "";
                radiobutton.config.successMessage = "";
            }
            _this._buttons.push(radiobutton);
            _this.layout.cell(option.id).attach(radiobutton);
            radiobutton.events.on(radiobutton_1.RadioButtonEvents.change, function () {
                _this._buttons.map(function (element) {
                    if (element.config.id !== radiobutton.config.id) {
                        element.setValue(false);
                    }
                });
                _this.events.fire(radiobutton_1.RadioButtonEvents.change);
                _this.validate();
            });
        });
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    RadioGroup.prototype.validate = function () {
        var _this = this;
        var isValid = false;
        this._buttons.map(function (element) {
            if (!_this.config.required || element.config.checked) {
                isValid = true;
            }
        });
        this._buttons.map(function (element) {
            element.config.$validationStatus = isValid
                ? types_1.ValidationStatus.success
                : types_1.ValidationStatus.error;
        });
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    RadioGroup.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this._buttons.map(function (element) {
            element.clearValidate();
        });
        this.paint();
    };
    RadioGroup.prototype.clear = function () {
        this._buttons.map(function (element) {
            element.clear();
        });
        this.paint();
    };
    RadioGroup.prototype.getValue = function () {
        var value;
        this._buttons.map(function (element) {
            if (element.getValue()) {
                value = element.getValue();
            }
        });
        return value || "";
    };
    RadioGroup.prototype.setValue = function (value) {
        this._buttons.map(function (element) {
            value === element.config.value
                ? element.setValue(true)
                : element.setValue(false);
        });
        this.events.fire(radiobutton_1.RadioButtonEvents.change);
        this.paint();
    };
    RadioGroup.prototype._draw = function () {
        var _a = this._buttons[0].config, labelWidth = _a.labelWidth, labelInline = _a.labelInline;
        return dom_1.el("div.dhx_form-group.dhx_form-group--radiobutton-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(this.config.required)),
        }, [
            dom_1.inject(this.layout.getRootView()),
            dom_1.el("div", {
                style: { "margin-left": "" + (labelWidth && labelInline ? "calc(" + labelWidth + " + 16px)" : "") }
            }, [
                dom_1.el("span.dhx_input-caption", helper_1.getValidationMessage(this.config))
            ])
        ]);
    };
    return RadioGroup;
}(view_1.View));
exports.RadioGroup = RadioGroup;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var view_1 = __webpack_require__(4);
var helper_1 = __webpack_require__(9);
var ts_popup_1 = __webpack_require__(10);
var types_1 = __webpack_require__(8);
var RadioButtonEvents;
(function (RadioButtonEvents) {
    RadioButtonEvents["change"] = "change";
})(RadioButtonEvents = exports.RadioButtonEvents || (exports.RadioButtonEvents = {}));
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, config) || this;
        if (_this.config.help) {
            _this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            _this._helper.attachHTML(_this.config.help);
        }
        _this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            cancelUnusefulClick: function (e) {
                e.preventDefault();
            },
            onchange: function (e) {
                _this.config.checked = e.target.checked;
                _this.events.fire(RadioButtonEvents.change, [e.target.checked]);
            }
        };
        _this.events = new events_1.EventSystem();
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    RadioButton.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    RadioButton.prototype.clear = function () {
        this.config.checked = false;
        this.paint();
    };
    RadioButton.prototype.getValue = function () {
        if (this.config.checked) {
            return this.config.value;
        }
    };
    RadioButton.prototype.setValue = function (checked) {
        this.config.checked = checked;
        this.paint();
    };
    RadioButton.prototype._draw = function () {
        var _a = this.config, id = _a.id, value = _a.value, label = _a.label, checked = _a.checked, disabled = _a.disabled, name = _a.name, help = _a.help, labelWidth = _a.labelWidth, labelInline = _a.labelInline, required = _a.required;
        return dom_1.el("label.dhx_form-group.dhx_radiobutton", {
            class: helper_1.getFormItemCss(this.config, Boolean(required)) + (help ? " dhx_label--with-help" : ""),
            style: { "margin-left": "" + (labelWidth && labelInline ? "calc(" + labelWidth + " + 16px)" : "") }
        }, [
            dom_1.el("input.dhx_radiobutton__input", {
                type: "radio",
                id: id,
                value: value || "",
                name: name || "",
                disabled: disabled,
                checked: checked,
                onchange: this._handlers.onchange,
                required: required
            }),
            dom_1.el("span.dhx_radiobutton__visual-input"),
            dom_1.el("span.dhx_label", {
                class: help ? "dhx_label--with-help" : ""
            }, help ? [
                dom_1.el("span.dhx_label__holder", label),
                dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                }),
            ] : label), dom_1.el("span.dhx_input-caption", {
                onclick: this._handlers.cancelUnusefulClick,
            }, helper_1.getValidationMessage(this.config)),
        ]);
    };
    return RadioButton;
}(view_1.View));
exports.RadioButton = RadioButton;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var label_1 = __webpack_require__(16);
var helper_1 = __webpack_require__(9);
var events_1 = __webpack_require__(2);
var types_1 = __webpack_require__(8);
var SelectEvents;
(function (SelectEvents) {
    SelectEvents["change"] = "change";
})(SelectEvents = exports.SelectEvents || (exports.SelectEvents = {}));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this.config.value = _this.config.options[0].value || _this.config.value;
        return _this;
    }
    Select.prototype.validate = function () {
        var _a = this.config, required = _a.required, value = _a.value, validation = _a.validation;
        if (validation) {
            var isValid = this.config.validation(value);
            isValid
                ? this.config.$validationStatus = types_1.ValidationStatus.success
                : this.config.$validationStatus = types_1.ValidationStatus.error;
            this.paint();
            return isValid;
        }
        else {
            !required || Boolean(value)
                ? this.config.$validationStatus = types_1.ValidationStatus.success
                : this.config.$validationStatus = types_1.ValidationStatus.error;
            this.paint();
            return !required || Boolean(value);
        }
    };
    Select.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    Select.prototype.clear = function () {
        this.config.value = this.config.options[0].value;
        this.paint();
    };
    Select.prototype.setValue = function (value) {
        this.config.value = value;
        this.events.fire(SelectEvents.change, [value]);
        this.paint();
    };
    Select.prototype.getValue = function () {
        return this.config.value || "";
    };
    Select.prototype._getHandlers = function () {
        var _this = this;
        return {
            onchange: function (e) {
                var value = e.target.value;
                _this.config.value = value;
                _this.events.fire(SelectEvents.change, []);
                _this.validate();
            }
        };
    };
    Select.prototype._draw = function () {
        var _a = this.config, id = _a.id, options = _a.options, icon = _a.icon, required = _a.required, value = _a.value, validation = _a.validation;
        return dom_1.el(".dhx_form-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation))
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", {}, [
                dom_1.el("div.dhx_input-container", {}, [
                    dom_1.el(".dhx_input__icon", {
                        class: icon ? icon : "dxi dxi-menu-down"
                    }),
                    dom_1.el("select", {
                        id: id,
                        class: "dhx_select dhx_input",
                        onchange: this._handlers.onchange
                    }, options && options.map(function (option) { return dom_1.el("option", {
                        value: option.value,
                        disabled: option.disabled,
                        selected: option.selected || value === option.value,
                    }, option.content); })),
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return Select;
}(label_1.Label));
exports.Select = Select;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helper_1 = __webpack_require__(9);
var input_1 = __webpack_require__(50);
var core_1 = __webpack_require__(1);
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype._draw = function () {
        var _a = this.config, id = _a.id, value = _a.value, disabled = _a.disabled, name = _a.name, placeholder = _a.placeholder, required = _a.required, resizable = _a.resizable, readOnly = _a.readOnly, validation = _a.validation;
        return dom_1.el("div.dhx_form-group.dhx_form-group--textarea", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation))
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("textarea.dhx_input.dhx_input--textarea", {
                    type: "text",
                    id: id,
                    placeholder: placeholder || "",
                    value: core_1.isDefined(value) ? value : "",
                    name: name || "",
                    disabled: disabled,
                    required: required,
                    readOnly: readOnly,
                    onblur: this._handlers.onblur,
                    oninput: this._handlers.oninput,
                    style: {
                        resize: resizable ? "both" : "none",
                    }
                }),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {}, helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return Textarea;
}(input_1.Input));
exports.Textarea = Textarea;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var helper_1 = __webpack_require__(9);
var input_1 = __webpack_require__(50);
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype._draw = function () {
        var _a = this.config, id = _a.id, value = _a.value;
        return dom_1.el("div.dhx_form-group.dhx_form-group--textinput", {
            class: helper_1.getFormItemCss(this.config)
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("input.dhx_input.dhx_input--textinput", {
                    type: "text",
                    readOnly: true,
                    id: id,
                    value: core_1.isDefined(value) ? value : "",
                    name: name || ""
                }),
            ])
        ]);
    };
    return Text;
}(input_1.Input));
exports.Text = Text;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var helper_1 = __webpack_require__(9);
var ts_combobox_1 = __webpack_require__(47);
var label_1 = __webpack_require__(16);
var types_1 = __webpack_require__(8);
var Combo = /** @class */ (function (_super) {
    __extends(Combo, _super);
    function Combo(config) {
        var _this = _super.call(this, null, config) || this;
        _this.combobox = new ts_combobox_1.Combobox(null, config);
        _this.data = _this.combobox.data;
        _this.events = _this.combobox.events;
        _this.combobox.events.on("change", function (change) {
            if (change !== "load") {
                _this.validate();
            }
        });
        setTimeout(function () {
            _this.setValue(_this.config.value);
        });
        return _this;
    }
    Combo.prototype.clear = function () {
        this.combobox.clear();
        this.paint();
    };
    Combo.prototype.getValue = function () {
        if (this.combobox.getValue() !== undefined) {
            if (this.combobox.getValue().length > 1) {
                return this.combobox.getValue(true);
            }
        }
        return this.combobox.getValue() || "";
    };
    Combo.prototype.setValue = function (value) {
        if (value) {
            this.combobox.setValue(value);
        }
        this.paint();
    };
    Combo.prototype.validate = function () {
        var value = this.combobox.getValue();
        var _a = this.config, validation = _a.validation, required = _a.required;
        if (validation) {
            var isValid = this.config.validation(value);
            this.config.$validationStatus = isValid
                ? types_1.ValidationStatus.success
                : types_1.ValidationStatus.error;
            this._validationStatus();
            this.paint();
            return isValid;
        }
        else if (required) {
            this.config.$validationStatus = Boolean(value)
                ? types_1.ValidationStatus.success
                : types_1.ValidationStatus.error;
            this._validationStatus();
            this.paint();
            return Boolean(value);
        }
        else {
            this.paint();
            return true;
        }
    };
    Combo.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this._validationStatus();
        this.paint();
    };
    Combo.prototype._validationStatus = function () {
        switch (this.config.$validationStatus) {
            case types_1.ValidationStatus.pre:
                this.combobox.config.css = this.config.css || "";
                break;
            case types_1.ValidationStatus.success:
                this.combobox.config.css = (this.config.css || "") + "dhx_form-group--state_success";
                break;
            case types_1.ValidationStatus.error:
                this.combobox.config.css = (this.config.css || "") + "dhx_form-group--state_error";
                break;
            default:
                this.combobox.config.css = this.config.css || "";
                break;
        }
    };
    Combo.prototype._getRootView = function () {
        this.combobox.paint();
        return this.combobox.getRootView();
    };
    Combo.prototype._draw = function () {
        var _a = this.config, labelWidth = _a.labelWidth, labelInline = _a.labelInline, $validationStatus = _a.$validationStatus;
        return dom_1.el(".dhx_form-group", {}, [
            dom_1.inject(this._getRootView()),
            dom_1.el("div", {
                style: { "margin-left": "" + (labelWidth && labelInline ? "calc(" + labelWidth + " + 16px)" : "") },
                class: $validationStatus === 1 ? "dhx_form-group--state_error" : $validationStatus === 2 ? "dhx_form-group--state_success" : "",
            }, [
                dom_1.el("span.dhx_input-caption", helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return Combo;
}(label_1.Label));
exports.Combo = Combo;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_slider_1 = __webpack_require__(30);
var label_1 = __webpack_require__(16);
var SliderForm = /** @class */ (function (_super) {
    __extends(SliderForm, _super);
    function SliderForm(config) {
        var _this = _super.call(this, null, config) || this;
        _this.slider = new ts_slider_1.Slider(null, config);
        _this.events = _this.slider.events;
        _this.config.value = _this.slider.getValue();
        _this.slider.events.on("Change", function () {
            _this.validate();
            _this.config.value = _this.slider.getValue();
        });
        _this.disable(_this.config.disabled);
        return _this;
    }
    SliderForm.prototype.clear = function () {
        this.config.value = [0];
        this.slider.setValue(this.config.value);
    };
    SliderForm.prototype.getValue = function () {
        return this.config.value;
    };
    SliderForm.prototype.disable = function (disabled) {
        disabled ? this.slider.disable() : this.slider.enable();
    };
    SliderForm.prototype.setValue = function (value) {
        this.slider.setValue(value);
    };
    SliderForm.prototype.getRootView = function () {
        return this.slider.getRootView();
    };
    SliderForm.prototype.validate = function () {
        return true;
    };
    return SliderForm;
}(label_1.Label));
exports.SliderForm = SliderForm;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var ts_vault_1 = __webpack_require__(54);
var ts_popup_1 = __webpack_require__(10);
var helper_1 = __webpack_require__(9);
var en_1 = __webpack_require__(74);
var types_1 = __webpack_require__(8);
var SimpleVault = /** @class */ (function (_super) {
    __extends(SimpleVault, _super);
    function SimpleVault(container, config) {
        var _this = _super.call(this, container, config) || this;
        if (_this.config.help) {
            _this._helper = new ts_popup_1.Popup({ css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light" });
            _this._helper.attachHTML(_this.config.help);
        }
        _this.events = new events_1.EventSystem(_this);
        _this.data = new ts_data_1.DataCollection({}, _this.events);
        _this._uploader = new ts_vault_1.Uploader(__assign({}, config, { autosend: false }), _this.data, _this.events);
        _this.data.events.on(ts_data_1.DataEvents.change, function () {
            _this.validate();
            _this.paint();
        });
        _this._handlers = {
            add: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                e.preventDefault();
                _this._uploader.selectFile();
            },
            remove: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.data.remove(id);
            },
            ondragover: function (e) {
                var types = e.dataTransfer.types;
                for (var _i = 0, types_2 = types; _i < types_2.length; _i++) {
                    var type = types_2[_i];
                    if (type !== "Files" && type !== "application/x-moz-file") {
                        return;
                    }
                }
                if (_this._dragoverTimeout) {
                    clearTimeout(_this._dragoverTimeout);
                }
                else {
                    _this.paint();
                }
                _this._dragover = true;
                _this._dragoverTimeout = setTimeout(function () {
                    _this._dragover = false;
                    _this._dragoverTimeout = null;
                    _this.paint();
                }, 150);
            },
            showHelper: function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this._helper.show(e.target);
            }
        };
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    SimpleVault.prototype.validate = function () {
        var isValid = !this.config.required || this.data.getLength() > 0;
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    SimpleVault.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    SimpleVault.prototype.clear = function () {
        this.data.removeAll();
        this.paint();
    };
    SimpleVault.prototype.getValue = function () {
        return this.data.map(function (data) { return (data.file); }) || [];
    };
    SimpleVault.prototype._draw = function () {
        var _this = this;
        var files = this.data.getLength() ? dom_1.el("ul.dhx_simplevault__files.dhx_simplevault-files", this.data.map(function (file) { return dom_1.el("li.dhx_simplevault-files__item", [
            dom_1.el("span.dhx_simplevault-files__item-name", file.file.name),
            dom_1.el(".dhx_button.dhx_simplevault-files__delete.dhx_button--icon.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                dhx_id: file.id,
                onclick: _this._handlers.remove,
            }, [
                dom_1.el("span.dxi.dxi-delete-forever")
            ])
        ]); })) : null;
        var _a = this.config, id = _a.id, labelInline = _a.labelInline, label = _a.label, labelWidth = _a.labelWidth, help = _a.help, disabled = _a.disabled, required = _a.required, validation = _a.validation;
        var width = labelInline && labelWidth ? labelWidth : "";
        return dom_1.el(".dhx_form-group.dhx_form-group--simplevault", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation))
        }, [
            dom_1.el("label.dhx_label", {
                for: id || this._uid,
                style: { minWidth: width, maxWidth: width },
                class: help ? "dhx_label--with-help" : ""
            }, help ? [
                dom_1.el("span.dhx_label__holder", label),
                dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                    tabindex: "0",
                    role: "button",
                    onclick: this._handlers.showHelper
                }),
            ] : label),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("div", {
                    _hooks: {
                        didInsert: function (node) {
                            _this._uploader.linkDropArea(node.el);
                        }
                    },
                    ondragover: this._handlers.ondragover,
                    class: "dhx_simplevault" + (this._dragover ? " dhx_simplevault--on-drag" : "")
                }, [
                    dom_1.el("div.dhx_simplevault-loader", [
                        dom_1.el("span.dhx_simplevault__icon.dxi.dxi-vault")
                    ]),
                    dom_1.el(".dhx_simplevault__drop-area", [
                        dom_1.el("input.dhx_simplevault__input", {
                            type: "file",
                            id: id,
                            disabled: disabled,
                        }),
                        dom_1.el("span.dhx_simplevault__icon.dxi.dxi-vault"),
                        dom_1.el("span.dhx_simplevault__title", [
                            dom_1.el("span", en_1.default.simpleVaultText),
                            dom_1.el("br"),
                            dom_1.el("label.dhx_simplevault__label", {
                                onclick: this._handlers.add,
                                for: id
                            }, " " + en_1.default.simpleVaultLabel)
                        ]),
                    ]),
                    files,
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {}, helper_1.getValidationMessage(this.config))
            ])
        ]);
    };
    return SimpleVault;
}(view_1.View));
exports.SimpleVault = SimpleVault;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_timepicker_1 = __webpack_require__(29);
var dom_1 = __webpack_require__(0);
var label_1 = __webpack_require__(16);
var ts_popup_1 = __webpack_require__(10);
var events_1 = __webpack_require__(2);
var types_1 = __webpack_require__(8);
var helper_1 = __webpack_require__(9);
var TimeInputEvents;
(function (TimeInputEvents) {
    TimeInputEvents["change"] = "change";
})(TimeInputEvents = exports.TimeInputEvents || (exports.TimeInputEvents = {}));
var TimeInput = /** @class */ (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput(container, config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this._popup = new ts_popup_1.Popup({ css: "dhx_widget--border-shadow" });
        _this.timepicker = new ts_timepicker_1.Timepicker(null, config);
        _this._popup.attach(_this.timepicker);
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        _this.timepicker.events.on(ts_timepicker_1.TimepickerEvents.change, function () {
            _this.config.value = _this.timepicker.getValue();
            _this.validate();
        });
        _this.timepicker.events.on(ts_timepicker_1.TimepickerEvents.close, function () {
            _this._popup.hide();
        });
        _this.timepicker.events.on(ts_timepicker_1.TimepickerEvents.save, function () {
            _this._popup.hide();
        });
        _this.events.on(TimeInputEvents.change, function (value) {
            _this.config.value = _this._inputValidate(value);
            _this.validate();
        });
        return _this;
    }
    TimeInput.prototype.validate = function () {
        var isValid = !this.config.required || Boolean(this.config.value);
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    TimeInput.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    TimeInput.prototype.setValue = function (value) {
        this.timepicker.setValue(value);
        this.paint();
    };
    TimeInput.prototype.getValue = function () {
        return this.config.value || "";
    };
    TimeInput.prototype.clear = function () {
        var timeFormat = this.config.timeFormat;
        timeFormat === 12 ? this.timepicker.setValue("12:00AM") : this.timepicker.setValue("00:00");
        this.config.value = "";
    };
    TimeInput.prototype._getHandlers = function () {
        var _this = this;
        return {
            onfocus: function () {
                if (_this._popup.isVisible()) {
                    return;
                }
                var node = _this.getRootView().refs.input.el;
                _this._popup.show(node);
            },
            onchange: function (e) {
                var value = e.target.value;
                _this.events.fire(TimeInputEvents.change, [value]);
            },
            onkeyup: function (e) {
                if (e.keyCode === 13) {
                    if (_this._popup.isVisible()) {
                        _this._popup.hide();
                    }
                    var node = _this.getRootView().refs.input.el;
                    node.blur();
                }
            }
        };
    };
    TimeInput.prototype._inputValidate = function (value) {
        var timeFormat = this.config.timeFormat;
        if (helper_1.isTimeFormat(value, timeFormat)) {
            this.timepicker.setValue(value);
            return value;
        }
        return "";
    };
    TimeInput.prototype._draw = function () {
        var _a = this.config, value = _a.value, required = _a.required, disabled = _a.disabled, placeholder = _a.placeholder, name = _a.name, id = _a.id, validation = _a.validation, _b = _a.editing, editing = _b === void 0 ? false : _b;
        return dom_1.el("div.dhx_form-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(validation)),
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("div.dhx_input-container", {}, [
                    dom_1.el(".dhx_input__icon.dxi.dxi-clock-outline"),
                    dom_1.el("input.dhx_input.dhx_input--icon-padding", {
                        _key: this._uid,
                        value: value,
                        type: "text",
                        _ref: "input",
                        required: required,
                        disabled: disabled,
                        placeholder: placeholder || "",
                        name: name || "",
                        id: id || this._uid,
                        onfocus: this._handlers.onfocus,
                        onchange: this._handlers.onchange,
                        onkeyup: this._handlers.onkeyup,
                        autocomplete: "off",
                        readOnly: !editing
                    }),
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {}, helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return TimeInput;
}(label_1.Label));
exports.TimeInput = TimeInput;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_colorpicker_1 = __webpack_require__(31);
var events_1 = __webpack_require__(2);
var dom_1 = __webpack_require__(0);
var label_1 = __webpack_require__(16);
var ts_popup_1 = __webpack_require__(10);
var types_1 = __webpack_require__(8);
var helper_1 = __webpack_require__(9);
var ColorpickerInputEvents;
(function (ColorpickerInputEvents) {
    ColorpickerInputEvents["change"] = "change";
})(ColorpickerInputEvents = exports.ColorpickerInputEvents || (exports.ColorpickerInputEvents = {}));
var ColorpickerInput = /** @class */ (function (_super) {
    __extends(ColorpickerInput, _super);
    function ColorpickerInput(container, config) {
        var _this = _super.call(this, null, config) || this;
        _this.events = new events_1.EventSystem();
        _this._popup = new ts_popup_1.Popup({ css: "dhx_widget--border-shadow" });
        _this.colorpicker = new ts_colorpicker_1.Colorpicker(null, config);
        _this._popup.attach(_this.colorpicker);
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        _this.colorpicker.events.on(ts_colorpicker_1.ColorpickerEvents.colorChange, function () {
            _this.config.value = _this.colorpicker.getValue();
            _this._popup.hide();
            _this.validate();
        });
        _this.events.on(ColorpickerInputEvents.change, function (value) {
            var validValue = _this._inputValidate(value);
            _this.setValue(validValue);
            _this.validate();
        });
        return _this;
    }
    ColorpickerInput.prototype.validate = function () {
        var isValid = !this.config.required || Boolean(this.config.value);
        this.config.$validationStatus = isValid
            ? types_1.ValidationStatus.success
            : types_1.ValidationStatus.error;
        this.paint();
        return isValid;
    };
    ColorpickerInput.prototype.clearValidate = function () {
        this.config.$validationStatus = types_1.ValidationStatus.pre;
        this.paint();
    };
    ColorpickerInput.prototype.setValue = function (value) {
        this.config.value = value;
        this.colorpicker.setValue(value);
        this.paint();
    };
    ColorpickerInput.prototype.getValue = function () {
        return this.config.value || "";
    };
    ColorpickerInput.prototype.clear = function () {
        this.config.value = "";
        this.paint();
    };
    ColorpickerInput.prototype._getHandlers = function () {
        var _this = this;
        return {
            onfocus: function () {
                if (_this._popup.isVisible()) {
                    return;
                }
                var node = _this.getRootView().refs.input.el;
                _this._popup.show(node);
            },
            onchange: function (e) {
                var value = e.target.value;
                _this.events.fire(ColorpickerInputEvents.change, [value]);
            },
            onkeyup: function (e) {
                if (e.keyCode === 13) {
                    if (_this._popup.isVisible()) {
                        _this._popup.hide();
                    }
                    var node = _this.getRootView().refs.input.el;
                    node.blur();
                }
            }
        };
    };
    ColorpickerInput.prototype._inputValidate = function (value) {
        return ts_colorpicker_1.isHex(value) ? value : "";
    };
    ColorpickerInput.prototype._draw = function () {
        var _a = this.config, required = _a.required, value = _a.value, icon = _a.icon, disabled = _a.disabled, placeholder = _a.placeholder, name = _a.name, id = _a.id, _b = _a.editing, editing = _b === void 0 ? false : _b;
        return dom_1.el("div.dhx_form-group", {
            class: helper_1.getFormItemCss(this.config, Boolean(required) || Boolean(this.config.validation)),
        }, [
            this._drawLabel(),
            dom_1.el(".dhx_input-wrapper", [
                dom_1.el("div.dhx_input-container", {}, [
                    dom_1.el(".dhx_input__icon", {
                        class: icon || "dxi dxi-eyedropper-variant" +
                            (value ? " dhx_input__icon--color-selected" : ""),
                        style: { "background-color": value || "transparent" }
                    }),
                    dom_1.el("input.dhx_input.dhx_input--icon-padding", {
                        _key: this._uid,
                        value: value,
                        type: "text",
                        _ref: "input",
                        required: required,
                        disabled: disabled,
                        placeholder: placeholder || "",
                        name: name || "",
                        id: id || this._uid,
                        onfocus: this._handlers.onfocus,
                        onchange: this._handlers.onchange,
                        onkeyup: this._handlers.onkeyup,
                        autocomplete: "off",
                        readOnly: !editing
                    }),
                ]),
                helper_1.getValidationMessage(this.config) && dom_1.el("span.dhx_input-caption", {}, helper_1.getValidationMessage(this.config))
            ]),
        ]);
    };
    return ColorpickerInput;
}(label_1.Label));
exports.ColorpickerInput = ColorpickerInput;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var Exporter_1 = __webpack_require__(182);
var data_1 = __webpack_require__(52);
var main_1 = __webpack_require__(20);
var Selection_1 = __webpack_require__(183);
var types_1 = __webpack_require__(11);
var render_1 = __webpack_require__(184);
var core_1 = __webpack_require__(1);
var content_1 = __webpack_require__(77);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.config = core_1.extend({
            rowHeight: 40,
            headerRowHeight: 40,
            footerRowHeight: 40,
            headerSort: true,
            columns: [],
            data: []
        }, config);
        _this.content = content_1.content;
        _this._scroll = {
            top: 0,
            left: 0
        };
        var htmlEvents = {
            onclick: html_1.eventHandler(function (ev) { return html_1.locate(ev); }, {
                "dhx_grid-header-cell": function (_ev, item) {
                    if (_this.config.headerSort) {
                        _this.events.fire(types_1.GridEvents.sort, [item]);
                    }
                },
                "dhx_grid-expand-cell": function (_ev, item) { return _this.events.fire(types_1.GridEvents.expand, [item]); }
            }),
            onscroll: function (e) {
                _this.events.fire(types_1.GridEvents.scroll, [{
                        y: e.target.scrollTop,
                        x: e.target.scrollLeft
                    }]);
            }
        };
        _this._init();
        if (_this.config.columns) {
            _this._parseColumns();
        }
        if ((_this.config.data && _this.config.data instanceof Array && _this.config.data.length) && _this.config.columns) {
            _this.data.parse(_this.config.data);
        }
        if (_this.config.selection) {
            _this.selection = new Selection_1.Selection(_this);
        }
        var view = dom_1.create({
            render: function (vm, obj) {
                return render_1.render(vm, obj, _this._currentData, htmlEvents, _this.selection);
            }
        }, _this);
        _this.mount(container, view);
        if (config.autoEmptyRow && _this.data.getLength() === 0) {
            _this.data.add(_this.config.columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, {}));
            _this.paint();
        }
        return _this;
    }
    Grid.prototype.destructor = function () {
        this.unmount();
        this.events.events = {};
        this.events.context = null;
        this._currentData = this.data = this.config =
            this._scroll = this.content = null;
    };
    Grid.prototype.setColumns = function (columns) {
        this.config.columns = columns;
        this._parseColumns();
    };
    Grid.prototype.addRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css || "";
        if (!styles.match(new RegExp(css, "g"))) {
            item.$css = styles + (" " + css);
            // [todo]
            var index = core_1.findIndex(this._currentData, function (row) { return row.id === item.id; });
            if (index >= 0) {
                this._currentData[index].$css = item.$css;
            }
            this.paint();
        }
    };
    Grid.prototype.removeRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css ? item.$css.replace(css, "") : "";
        item.$css = styles;
    };
    Grid.prototype.addCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] += column.$cellCss[row].match(new RegExp(css, "g")) ? "" : " " + css;
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = css + " ";
            }
            this.paint();
        }
    };
    Grid.prototype.removeCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] = column.$cellCss[row].replace(css, "");
                this.paint();
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = "";
            }
        }
    };
    Grid.prototype.getScrollState = function () {
        return {
            x: this._scroll.left,
            y: this._scroll.top
        };
    };
    Grid.prototype.scroll = function (x, y) {
        var gridBody = this.getRootView().refs.grid_body.el;
        gridBody.scrollLeft = typeof x === "number" ? x : gridBody.scrollLeft;
        gridBody.scrollTop = typeof y === "number" ? y : gridBody.scrollTop;
    };
    Grid.prototype.scrollTo = function (row, col) {
        var colInd = core_1.findIndex(this.config.columns, function (obj) { return obj.id === col; });
        var fixedColsWidth = this.config.splitAt ?
            this.config.columns.slice(0, this.config.splitAt).reduce(function (total, c) { return total += c.width; }, 0)
            : 0;
        var x = this.config.columns.slice(0, colInd).reduce(function (total, c) { return total += c.width; }, 0) - fixedColsWidth;
        var y = this.data.getIndex(row) * this.config.rowHeight;
        var scrollState = this.getScrollState();
        var gridRight = this.config.width + scrollState.x;
        var gridBottom = this.config.height + scrollState.y - (this.config.headerRowHeight * this.config.$headerLevel);
        var cellTop = y - scrollState.y - this.config.rowHeight;
        var cellLeft = x - scrollState.x - this.config.columns[colInd].width;
        var cellBottom = y + (this.config.rowHeight * 2) + 17 - gridBottom;
        var cellRight = x + (this.config.columns[colInd].width * 2) + 17 - gridRight;
        var scrollTop = (cellTop > 0 && cellBottom < 0) ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = (cellLeft > 0 && cellRight < 0) ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    Grid.prototype.adjustColumnWidth = function (id) {
        var index = core_1.findIndex(this.config.columns, function (с) { return с.id === id; });
        var col = this.config.columns[index];
        this.data.map(function (row) {
            if (typeof row[col.id] === "string" || typeof row[col.id] === "number") {
                col.maxWidth = col.maxWidth || col.width;
                col.maxWidth = Math.max(main_1.getStrWidth(main_1.removeHTMLTags(row[col.id])) + 20, col.maxWidth);
            }
        });
        this.config.$totalWidth = this.config.columns.reduce(function (t, column) {
            column.width = column.maxWidth || column.width;
            return t += column.width;
        }, 0);
        this.paint();
    };
    Grid.prototype.getCellRect = function (row, col) {
        var colInd = core_1.findIndex(this.config.columns, function (obj) { return obj.id === col; });
        var rowInd = this._getRowIndex(row);
        var x = this.config.columns.slice(0, colInd).reduce(function (total, c) { return total += c.width; }, 0);
        var y = rowInd * this.config.rowHeight;
        return { x: x, y: y, height: this.config.rowHeight, width: this.config.columns[colInd].width };
    };
    Grid.prototype.getColumn = function (colId) {
        var ind = core_1.findIndex(this.config.columns, function (col) { return col.id === colId; });
        if (ind >= 0) {
            return this.config.columns[ind];
        }
    };
    Grid.prototype.addSpan = function (spanObj) {
        this.config.spans = this.config.spans || [];
        var index = core_1.findIndex(this.config.spans, function (span) {
            return "" + span.row === "" + spanObj.row && "" + span.column === "" + spanObj.column;
        });
        if (index >= 0) {
            this.config.spans[index] = spanObj;
            return;
        }
        this.config.spans.push(spanObj);
    };
    Grid.prototype.getSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) {
                return "" + span.row === "" + row && "" + span.column === "" + col;
            });
            return this.config.spans[index];
        }
    };
    Grid.prototype.removeSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) {
                return "" + span.row === "" + row && "" + span.column === "" + col;
            });
            this.config.spans.splice(index, 1);
        }
    };
    Grid.prototype.edit = function (rowId, colId, editorType) {
        if (editorType === void 0) { editorType = types_1.EditorType.input; }
        var row = this.data.getItem(rowId);
        var col = this.getColumn(colId);
        if (!row || row[colId] === undefined) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeEditStart, [row, col, editorType])) {
            return;
        }
        if (col.type === "date") {
            editorType = types_1.EditorType.datepicker;
        }
        this.config.$editable = {
            row: rowId,
            col: colId,
            editorType: editorType
        };
        this.paint();
        this.events.fire(types_1.GridEvents.afterEditStart, [row, col, editorType]);
    };
    Grid.prototype._parseColumns = function () {
        var columns = this.config.columns;
        data_1.normalizeColumns(columns);
        data_1.countColumns(this.config, columns);
    };
    Grid.prototype._parseData = function () {
        var firstItem = this.data.getId(0);
        if (firstItem) {
            if (this.config.columns.length) {
                this._checkColumns();
            }
            this._currentData = this.data.serialize() || [];
        }
        this._checkFilters();
        this._checkMarks();
        this._render();
    };
    Grid.prototype._checkColumns = function () {
        this._detectColsTypes();
    };
    Grid.prototype._createCollection = function (prep) {
        this.data = new ts_data_1.DataCollection({
            prep: prep
        }, this.events);
    };
    Grid.prototype._getRowIndex = function (rowId) {
        return this.data.getIndex(rowId);
    };
    Grid.prototype._setEventHandlers = function () {
        var _this = this;
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._parseData();
            // [todo] need to check autoWidth after data load
            _this.data.events.fire(ts_data_1.DataEvents.change);
        });
        this.data.events.on(ts_data_1.DataEvents.change, function (_id, status, obj) {
            // [dirty]
            if (status === "remove" && obj.$empty) {
                return;
            }
            _this._currentData = _this.data.map(function (el) { return el; }) || [];
            _this._detectColsTypes();
            _this._checkMarks();
            // set auto width to all columns
            if (_this.config.columnsAutoWidth) {
                if (typeof _this.config.columnsAutoWidth === "number") {
                    _this._setAutoWidth(_this.config.columnsAutoWidth);
                }
                else {
                    _this._setAutoWidth();
                }
            }
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$empty", match: true });
                if (emptyRow && !(status === "add" && obj.$empty)) {
                    _this.data.remove(emptyRow.id);
                }
                if (!(status === "add" && obj.$empty)) {
                    _this._addEmptyRow();
                }
            }
            _this._render();
        });
        this.events.on(types_1.GridEvents.sort, function (id) {
            if (id) {
                _this._sort(id);
            }
        });
        this.events.on(types_1.GridEvents.headerInput, function (val, colId, filter) {
            // [dirty]
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$empty", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            _this.data.filter({
                by: colId,
                match: val,
                compare: _this.content[filter].match
            }, {
                multiple: true
            });
        });
        this.events.on(types_1.GridEvents.scroll, function (scrollState) {
            _this._scroll = { top: scrollState.y, left: scrollState.x };
            _this.paint();
        });
        this.events.on(types_1.GridEvents.cellDblClick, function (row, col) {
            if (col.editing !== false && _this.config.editing || col.editing) {
                _this.edit(row.id, col.id, col.editorType);
            }
        });
        this.events.on(types_1.GridEvents.afterEditEnd, function (value) {
            var _a;
            var item = _this.data.getItem(_this.config.$editable.row);
            // if item was an empty row
            delete item.$empty;
            if (value !== undefined && value !== null && value !== "") {
                _this.data.update(_this.config.$editable.row, __assign({}, item, (_a = {}, _a[_this.config.$editable.col] = value, _a)));
            }
            _this.config.$editable = null;
            _this._checkFilters();
            _this.paint();
        });
    };
    Grid.prototype._addEmptyRow = function () {
        var id = this.data.getId(this.data.getLength() - 1);
        var lastRow = this.data.getItem(id);
        var isEmpty = main_1.isRowEmpty(lastRow);
        if (!isEmpty) {
            this.data.add(this.config.columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, { $empty: true }));
        }
    };
    Grid.prototype._sort = function (by, dir) {
        if (!dir) {
            if (this._sortBy === by) {
                this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
            }
            else {
                this._sortDir = "desc";
            }
        }
        else {
            this._sortDir = dir;
        }
        this._sortBy = by;
        this.data.sort({
            by: by,
            dir: this._sortDir,
            as: function (el) { return el ? "" + el : ""; }
        });
    };
    Grid.prototype._getColumn = function (id) {
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.id === id) {
                return col;
            }
        }
    };
    Grid.prototype._init = function () {
        this.events = new events_1.EventSystem(this);
        this._attachDataCollection();
        this.export = new Exporter_1.Exporter(this);
        this._setEventHandlers();
    };
    Grid.prototype._attachDataCollection = function () {
        var _this = this;
        var prep = function (data) {
            if (data.spans) {
                _this.config.spans = data.spans;
                data = data.data;
            }
            return data;
        };
        if (this.config.data instanceof ts_data_1.DataCollection) {
            this.data = this.config.data;
            this.config.data = [];
            this._parseData();
            return;
        }
        this._createCollection(prep);
    };
    Grid.prototype._setMarks = function (col, func) {
        var colCells = this.data.map(function (row) { return ({ id: row.id, data: row[col.id], row: row }); });
        var colCellsData = this.data.map(function (row) { return row[col.id]; });
        var _loop_1 = function (cell) {
            var css = func(cell.data, colCellsData, cell.row, col);
            if (css) {
                col.$cellCss = col.$cellCss || {};
                var cellCss_1 = (col.$cellCss[cell.id] || "").split(" ");
                css.split(" ").map(function (item) {
                    if (cellCss_1.indexOf(item) === -1) {
                        cellCss_1.push(item);
                    }
                });
                col.$cellCss[cell.id] = cellCss_1.join(" ");
            }
        };
        for (var _i = 0, colCells_1 = colCells; _i < colCells_1.length; _i++) {
            var cell = colCells_1[_i];
            _loop_1(cell);
        }
    };
    Grid.prototype._checkMarks = function () {
        var _this = this;
        this.config.columns.map(function (col) {
            var mark = col.mark;
            if (mark) {
                if (typeof mark === "function") {
                    _this._setMarks(col, mark);
                }
                else {
                    _this._setMarks(col, function (el, c) {
                        var data = c.filter(function (item) { return item !== null && item !== undefined && item !== ""; });
                        var min = Math.min.apply(Math, data);
                        var max = Math.max.apply(Math, data);
                        if (mark.max && max === parseFloat(el)) {
                            return mark.max;
                        }
                        if (mark.min && min === parseFloat(el)) {
                            return mark.min;
                        }
                        return false;
                    });
                }
            }
        });
    };
    // [todo] use adjustColumnWidth
    Grid.prototype._setAutoWidth = function (colsCount) {
        var _this = this;
        this.data.map(function (row) {
            _this.config.columns.map(function (col, i) {
                if (colsCount && colsCount <= i) {
                    return col;
                }
                if (typeof row[col.id] === "string" || typeof row[col.id] === "number") {
                    col.maxWidth = col.maxWidth || col.width;
                    var paddings = 20;
                    // [todo] move to treegrid
                    if (_this.config.type === "tree" && i === 0) {
                        paddings = _this.data.getMaxLevel() * 24 + 20;
                    }
                    col.maxWidth = Math.max(main_1.getStrWidth(main_1.removeHTMLTags(row[col.id])) + paddings, col.maxWidth);
                }
            });
        });
        this.config.$totalWidth = this.config.columns.reduce(function (t, col) {
            col.width = col.maxWidth || col.width;
            return t += col.width;
        }, 0);
    };
    // [todo] make more smart type detection
    Grid.prototype._detectColsTypes = function () {
        var firstRow = this.data.getItem(this.data.getId(0));
        if (!firstRow) {
            return;
        }
        this.config.columns.map(function (col) {
            if (col.type) {
                return col;
            }
            var firstCell = firstRow ? firstRow[col.id] : "";
            var v = parseFloat(firstCell);
            var val = isNaN(v) ? firstCell : v;
            col.type = typeof val;
            return col;
        });
    };
    Grid.prototype._checkFilters = function () {
        var data = this._currentData;
        this.config.columns.map(function (col) {
            col.header.map(function (cell) {
                if (cell.content && cell.content === "selectFilter") {
                    var unique = data_1.getUnique(data, col.id);
                    if (col.$uniqueData && col.$uniqueData.length > unique.length) {
                        unique.forEach(function (item) {
                            if (col.$uniqueData.indexOf(item) === -1) {
                                col.$uniqueData.push(item);
                            }
                        });
                    }
                    else {
                        col.$uniqueData = unique;
                    }
                }
            });
        });
    };
    Grid.prototype._render = function () {
        this.paint();
    };
    return Grid;
}(view_1.View));
exports.Grid = Grid;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__(20);
var Exporter = /** @class */ (function () {
    function Exporter(_view) {
        this._view = _view;
    }
    Exporter.prototype.xlsx = function (config) {
        return this._export(config);
    };
    Exporter.prototype._export = function (config) {
        if (config === void 0) { config = {}; }
        var configCols = this._view.config.columns;
        var rowsIndexMap = {};
        var headers = main_1.transpose(this._view.config.columns.map(function (col) {
            return col.header.map(function (level) { return level.text || " "; });
        }));
        var columns = [];
        var uniqStyles = {
            default: {
                color: "#000000",
                background: "#FFFFFF",
                fontSize: 14
            }
        };
        var cells = [];
        var columnsIndexMap = {};
        var data = this._view.data.serialize().map(function (row, i) {
            rowsIndexMap[row.id] = i;
            var rowData = configCols.map(function (col, k) {
                columnsIndexMap[col.id] = k;
                return main_1.removeHTMLTags(row[col.id]);
            });
            return rowData;
        });
        for (var _i = 0, configCols_1 = configCols; _i < configCols_1.length; _i++) {
            var col = configCols_1[_i];
            columns.push({ width: col.width });
            for (var key in col.$cellCss) {
                var colStyle = col.$cellCss[key];
                var colStyleHash = colStyle
                    .split("")
                    .reduce(function (h, letter) {
                    // tslint:disable-next-line:no-bitwise
                    var hh = ((h << 5) - h) + letter.charCodeAt(0);
                    return Math.abs(hh & hh);
                }, 0).toString();
                if (!uniqStyles[colStyleHash]) {
                    var cont = document.body;
                    var css = main_1.getStyleByClass(colStyle, cont, "dhx_grid-row", uniqStyles.default);
                    if (css) {
                        uniqStyles[colStyleHash] = css;
                    }
                }
                if (uniqStyles[colStyleHash]) {
                    cells.push([rowsIndexMap[key], col.id, colStyleHash]);
                }
            }
        }
        var exportData = {
            name: (config.name || "data"),
            columns: columns,
            header: headers,
            data: data,
            styles: {
                cells: cells,
                css: uniqStyles
            }
        };
        if (config.url) {
            var form_1 = document.createElement("form");
            form_1.setAttribute("target", "_blank");
            form_1.setAttribute("action", config.url);
            form_1.setAttribute("method", "POST");
            form_1.style.visibility = "hidden";
            var input = document.createElement("textarea");
            input.setAttribute("name", "data");
            input.value = JSON.stringify(exportData);
            form_1.appendChild(input);
            document.body.appendChild(form_1);
            form_1.submit();
            setTimeout(function () {
                form_1.parentNode.removeChild(form_1);
            }, 100);
        }
        return exportData;
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(11);
var Selection = /** @class */ (function () {
    function Selection(grid) {
        this._grid = grid;
        var types = ["cell", "row", "complex"];
        this._type = types.indexOf(this._grid.config.selection) !== -1 ? this._grid.config.selection : "complex";
        this._init();
    }
    Selection.prototype.setCell = function (row, col) {
        row = row.id ? row : this._grid.data.getItem(row);
        if (!col) {
            col = this._grid.config.columns[0];
        }
        col = col.id ? col : this._grid.getColumn(col);
        this._selectedCell = { row: row, column: col };
        this._grid.paint();
    };
    Selection.prototype.getCell = function () {
        return this._selectedCell;
    };
    Selection.prototype.toHTML = function () {
        if (!this._selectedCell.row || !this._selectedCell.column) {
            return;
        }
        var fixedCols = this._grid.config.splitAt ?
            this._grid.config.columns.slice(0, this._grid.config.splitAt) : [];
        var fixedColsIds = fixedCols.map(function (col) { return col.id; });
        var fixedCell;
        var cellRect = this._grid.getCellRect(this._selectedCell.row.id, this._selectedCell.column.id);
        if (fixedColsIds.indexOf(this._selectedCell.column.id) !== -1) {
            var scrollState = this._grid.getScrollState();
            fixedCell = dom_1.el(".dhx_grid-selected-cell", {
                style: {
                    width: cellRect.width,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: cellRect.x + scrollState.x,
                    position: "absolute",
                    zIndex: 10
                }
            });
        }
        var totalWidth = this._grid.config.$totalWidth;
        return dom_1.el(".dhx_grid-selection", {}, [
            (this._type === "row" || this._type === "complex") && dom_1.el(".dhx_grid-selected-row", {
                style: {
                    width: totalWidth,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: 0,
                    position: "absolute"
                }
            }),
            (this._type === "cell" || this._type === "complex") && dom_1.el(".dhx_grid-selected-cell", {
                style: {
                    width: cellRect.width,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: cellRect.x,
                    position: "absolute"
                }
            }),
            (this._type === "cell" || this._type === "complex") && fixedCell
        ]);
    };
    Selection.prototype._init = function () {
        var _this = this;
        this._selectedCell = {
            row: this._grid.data.getItem(this._grid.data.getId(0)),
            column: this._grid.config.columns[0]
        };
        this._grid.events.on(types_1.GridEvents.cellClick, function (row, col) {
            _this._selectedCell = { row: row, column: col };
            _this._grid.paint();
        });
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var data_1 = __webpack_require__(52);
var main_1 = __webpack_require__(20);
var Cells_1 = __webpack_require__(75);
var FixedCols_1 = __webpack_require__(189);
var FixedRows_1 = __webpack_require__(76);
var BORDERS = 2;
function getRenderConfig(obj, data, wrapperSizes) {
    var config = obj.config;
    var positions = data_1.calculatePositions(wrapperSizes.width, wrapperSizes.height, obj._scroll, config);
    return __assign({}, config, { data: data, scroll: obj._scroll, $positions: positions, headerHeight: config.$headerLevel * config.headerRowHeight, footerHeight: config.$footerLevel * config.footerRowHeight, firstColId: config.columns[0].id, events: obj.events, currentColumns: config.columns.slice(positions.xStart, positions.xEnd), sortBy: obj._sortBy, sortDir: obj._sortDir });
}
function getElementSizes(element) {
    if (!element) {
        return {
            width: 1,
            height: 1
        };
    }
    var styles = element.currentStyle || window.getComputedStyle(element);
    var paddingsByWidth = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight) || 0;
    var paddingsByHeight = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) || 0;
    return {
        width: element.clientWidth - paddingsByWidth,
        height: element.clientHeight - paddingsByHeight
    };
}
function render(vm, obj, data, htmlEvents, selection) {
    if (!obj._container) {
        obj.config.width = 1;
        obj.config.height = 1;
    }
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        var parentSizes = getElementSizes(parentNode);
        obj.config.width = parentSizes.width;
        obj.config.height = parentSizes.height;
    }
    var config = obj.config;
    if (!config.columns.length) {
        return dom_1.el(".dhx_grid");
    }
    if (!data || !obj.data) {
        data = [];
    }
    config.$totalHeight = data.length * config.rowHeight;
    var sizes = getElementSizes(obj._container);
    var wrapperSizes = {
        width: config.width ? config.width : sizes.width,
        height: config.height ? config.height : sizes.height
    };
    if (config.fitToContainer) {
        var scrollbarY = config.$totalHeight > wrapperSizes.height ? html_1.getScrollbarWidth() : 0;
        config.$totalWidth = wrapperSizes.width - BORDERS - scrollbarY;
        var total = config.columns.reduce(function (width, col) { return width + col.width; }, 0);
        var per_1 = config.$totalWidth / total;
        config.columns.map(function (col) {
            col.width = per_1 * col.width;
        });
    }
    config.width = wrapperSizes.width;
    config.height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = Cells_1.getShifts(renderConfig);
    var isSticky = main_1.isCssSupport("position", "sticky");
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight
    };
    var header = FixedRows_1.getFixedRows(renderConfig, __assign({}, layoutState, { name: "header", position: "top" }));
    var footer = renderConfig.$footer ? FixedRows_1.getFixedRows(renderConfig, __assign({}, layoutState, { name: "footer", position: "bottom" })) : null;
    var lessByWidth = renderConfig.$totalWidth + BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    return dom_1.el(".dhx_grid.dhx_widget", {
        class: renderConfig.css
    }, [
        dom_1.resizer(function () { return obj.paint(); }),
        dom_1.el(".dhx_grid-content", {
            style: __assign({}, wrapperSizes),
            onclick: htmlEvents.onclick,
            class: (lessByWidth + " " + lessByHeight).trim()
        }, [
            isSticky ? null : header,
            dom_1.el(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body"
            }, [
                isSticky ? header : null,
                getGridData(renderConfig, shifts),
                isSticky ? footer : null
            ]),
            FixedCols_1.getFixedCols(renderConfig, layoutState),
            isSticky ? null : footer
        ])
    ]);
}
exports.render = render;
function getGridData(renderConfig, shifts) {
    var content = Cells_1.getCells(renderConfig);
    var contentSpans = Cells_1.getSpans(renderConfig);
    var selection = renderConfig.selection ? renderConfig.selection.toHTML() : null;
    selection = typeof selection === "string" ? dom_1.el("div.dhx_selection", { ".innerHTML": selection }) : selection;
    return dom_1.el(".dhx_data-wrap", {
        style: {
            "height": renderConfig.$totalHeight,
            "width": renderConfig.$totalWidth,
            "padding-left": shifts.x,
            "padding-top": shifts.y,
        }
    }, [
        dom_1.el(".dhx_grid_data", content),
        dom_1.el(".dhx_span-spans", contentSpans),
        dom_1.el(".dhx_grid_selection", { _ref: "selection" }, [selection])
    ]);
}
function getContentHeight(renderConfig, isSticky, wrapperSizes) {
    var contentHeight = wrapperSizes.height - BORDERS;
    contentHeight = isSticky ? contentHeight : contentHeight - renderConfig.headerHeight;
    var isFooter = renderConfig.$footer;
    // [dirty] refactoring needed
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height;
    if (renderConfig.splitAt && lessByHeight) {
        return renderConfig.$totalHeight + renderConfig.footerHeight + renderConfig.headerHeight + html_1.getScrollbarWidth();
    }
    // [dirty]
    return contentHeight = isFooter ?
        isSticky ? contentHeight : contentHeight - renderConfig.footerHeight
        : contentHeight;
}


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(11);
var InputEditor_1 = __webpack_require__(186);
var SelectEditor_1 = __webpack_require__(187);
var DateEditor_1 = __webpack_require__(188);
var lastEditor = {
    cell: {
        row: null,
        col: null
    },
    editor: null
};
var editHandler;
function getEditor(row, col, conf) {
    var type = conf.$editable.editorType;
    if (lastEditor.cell.row === row.id && lastEditor.cell.col === col.id) {
        return lastEditor.editor;
    }
    lastEditor.cell = {
        row: row.id,
        col: col.id
    };
    if (!editHandler) {
        editHandler = function () {
            lastEditor = {
                cell: {
                    row: null,
                    col: null
                },
                editor: null
            };
        };
        conf.events.on(types_1.GridEvents.afterEditEnd, editHandler);
    }
    switch (type) {
        case types_1.EditorType.input:
            return lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf);
        case types_1.EditorType.select:
            return lastEditor.editor = new SelectEditor_1.SelectEditor(row, col, conf);
        case types_1.EditorType.datepicker:
            return lastEditor.editor = new DateEditor_1.DateEditor(row, col, conf);
        default:
            return lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf);
    }
}
exports.getEditor = getEditor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(11);
var core_1 = __webpack_require__(1);
var InputEditor = /** @class */ (function () {
    function InputEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        var value = this._input.value;
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._input.removeEventListener("change", this._handlers.onChange);
            this._handlers = {};
            if (core_1.isNumeric(value)) {
                value = parseFloat(value);
            }
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    InputEditor.prototype.toHTML = function () {
        var content = this._cell.row[this._cell.col.id];
        if (this._input) {
            content = this._input.value;
        }
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input", {
            _hooks: {
                didInsert: this._handlers.didInsert
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: content
        });
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            }
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(11);
var SelectEditor = /** @class */ (function () {
    function SelectEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    SelectEditor.prototype.endEdit = function () {
        var value = this._input.value;
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._handlers = {};
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    SelectEditor.prototype.toHTML = function () {
        var content = this._cell.col.options || [];
        var selected = this._cell.row[this._cell.col.id];
        if (this._input) {
            selected = this._input.options[this._input.selectedIndex].value;
        }
        var options = content.map(function (item) {
            return dom_1.el("option", {
                selected: item === selected
            }, item);
        });
        return dom_1.el("select.dhx_cell-editor.dhx_cell-editor__input", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor"
        }, options);
    };
    SelectEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.addEventListener("blur", _this._handlers.onBlur);
            }
        };
    };
    return SelectEditor;
}());
exports.SelectEditor = SelectEditor;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(11);
var ts_calendar_1 = __webpack_require__(28);
var ts_popup_1 = __webpack_require__(10);
var html_1 = __webpack_require__(3);
var DateEditor = /** @class */ (function () {
    function DateEditor(row, col, config) {
        var _this = this;
        this._config = config;
        this._cell = { row: row, col: col };
        this._calendar = new ts_calendar_1.Calendar(null, { dateFormat: col.dateFormat });
        var value = this._cell.row[this._cell.col.id];
        if (value) {
            this._calendar.setValue(value);
        }
        this._popup = new ts_popup_1.Popup({ css: "dhx_widget--bordered" });
        this._popup.attach(this._calendar);
        this._calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
            _this.endEdit();
        });
        this._popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            _this.endEdit();
        });
        this._initHandlers();
    }
    DateEditor.prototype.endEdit = function () {
        // [todo]
        if (!this._handlers) {
            return;
        }
        var value = this._calendar.getValue();
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._handlers = null;
            this._popup.destructor();
            this._calendar.destructor();
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    DateEditor.prototype.toHTML = function () {
        var content = this._cell.row[this._cell.col.id];
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input.dhx_cell-editor__datepicker", {
            _hooks: {
                didInsert: this._handlers.didInsert,
                didRecycle: this._handlers.didRecycle,
                didRemove: this._handlers.didRemove
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: content
        });
    };
    DateEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                _this._input.addEventListener("focus", function () {
                    // [dirty]
                    setTimeout(function () {
                        _this._popup.show(_this._input, { centering: true, mode: html_1.Position.bottom });
                    }, 100);
                });
                input.focus();
                input.setAttribute("disabled", "true");
                input.setSelectionRange(input.value.length, input.value.length);
            },
            didRecycle: function () {
                if (_this._input) {
                    _this._popup.show(_this._input, { centering: true, mode: html_1.Position.bottom });
                }
                else {
                    _this.endEdit();
                }
            },
            didRemove: function () {
                _this.endEdit();
            }
        };
    };
    return DateEditor;
}());
exports.DateEditor = DateEditor;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var Cells_1 = __webpack_require__(75);
var FixedRows_1 = __webpack_require__(76);
function getFixedCols(renderConfig, layout) {
    if (typeof renderConfig.splitAt !== "number") {
        return;
    }
    var scrollBarWidth = renderConfig.$totalWidth <= layout.wrapper.width ? 0 : html_1.getScrollbarWidth();
    var fixedColsHeight = (layout.sticky ?
        layout.gridBodyHeight
        : layout.gridBodyHeight + renderConfig.headerHeight) - scrollBarWidth;
    var columns = renderConfig.columns.slice(0, renderConfig.splitAt);
    renderConfig.fixedColumnsWidth = columns.reduce(function (total, item) { return total += item.width || 100; }, 0);
    var fixedCols = Cells_1.getCells(__assign({}, renderConfig, { columns: columns, $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }));
    var isSticky = layout.sticky;
    var headerRowsConfig = __assign({}, layout, { name: "header", position: "top" });
    var footerRowsConfig = __assign({}, layout, { name: "footer", position: "bottom" });
    var frozenHeaderCols = renderConfig.splitAt >= 0 && FixedRows_1.getRows(__assign({}, renderConfig, { currentColumns: renderConfig.columns.slice(0, renderConfig.splitAt), $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign({}, layout, { name: "header", position: "top" }));
    var frozenFooterCols = renderConfig.splitAt >= 0 && FixedRows_1.getRows(__assign({}, renderConfig, { currentColumns: renderConfig.columns.slice(0, renderConfig.splitAt), $positions: __assign({}, renderConfig.$positions, { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign({}, layout, { name: "footer", position: "bottom" }));
    var frozenHeader = frozenHeaderCols && dom_1.el(".dhx_" + headerRowsConfig.name + "-fixed-cols", {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 999999,
        }
    }, frozenHeaderCols);
    var frozenFooter = isSticky ? (frozenFooterCols && dom_1.el(".dhx_" + footerRowsConfig.name + "-fixed-cols", {
        style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 999999,
        }
    }, frozenFooterCols)) : null;
    return dom_1.el(".dhx_grid-fixed-cols-wrap", {
        style: {
            height: fixedColsHeight,
            paddingTop: renderConfig.headerHeight,
            overflow: "hidden",
            width: renderConfig.fixedColumnsWidth
        }
    }, [
        frozenHeader,
        dom_1.el(".dhx_grid-fixed-cols", {
            style: {
                top: -renderConfig.scroll.top + renderConfig.headerHeight + "px",
                paddingTop: layout.shifts.y,
                height: renderConfig.$totalHeight,
                position: "absolute"
            }
        }, fixedCols),
        renderConfig.$footer && frozenFooter,
        dom_1.el(".dhx_frozen-cols-border")
    ]);
}
exports.getFixedCols = getFixedCols;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(191));
__export(__webpack_require__(192));
__export(__webpack_require__(78));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_grid_1 = __webpack_require__(51);
var core_1 = __webpack_require__(1);
var TreeGridCollection_1 = __webpack_require__(78);
var TreeGrid = /** @class */ (function (_super) {
    __extends(TreeGrid, _super);
    function TreeGrid(container, config) {
        var _this = _super.call(this, container, config) || this;
        // [dirty]
        _this.config.type = "tree";
        return _this;
    }
    TreeGrid.prototype.scrollTo = function (row, col) {
        var colInd = core_1.findIndex(this.config.columns, function (obj) { return obj.id === col; });
        var fixedColsWidth = this.config.splitAt ?
            this.config.columns.slice(0, this.config.splitAt).reduce(function (total, c) { return total += c.width; }, 0)
            : 0;
        var x = this.config.columns.slice(0, colInd).reduce(function (total, c) { return total += c.width; }, 0) - fixedColsWidth;
        var y = this.data.getPlainIndex(row) * this.config.rowHeight;
        var scrollState = this.getScrollState();
        var gridRight = this.config.width + scrollState.x;
        var gridBottom = this.config.height + scrollState.y - (this.config.headerRowHeight * this.config.$headerLevel);
        var cellTop = y - scrollState.y - this.config.rowHeight;
        var cellLeft = x - scrollState.x - this.config.columns[colInd].width;
        var cellBottom = y + (this.config.rowHeight * 2) + 17 - gridBottom;
        var cellRight = x + (this.config.columns[colInd].width * 2) + 17 - gridRight;
        var scrollTop = (cellTop > 0 && cellBottom < 0) ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = (cellLeft > 0 && cellRight < 0) ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    TreeGrid.prototype._createCollection = function (prep) {
        this.data = new TreeGridCollection_1.TreeGridCollection({
            prep: prep
        }, this.events);
    };
    TreeGrid.prototype._checkColumns = function () {
        _super.prototype._checkColumns.call(this);
        this._getTreeHeadersWidth();
    };
    TreeGrid.prototype._getRowIndex = function (rowId) {
        return core_1.findIndex(this.data.serialize(), function (obj) { return obj.id === rowId; });
    };
    TreeGrid.prototype._parseColumns = function () {
        _super.prototype._parseColumns.call(this);
        if (this.config.columns.length) {
            this._getTreeHeadersWidth();
        }
    };
    TreeGrid.prototype._setEventHandlers = function () {
        var _this = this;
        _super.prototype._setEventHandlers.call(this);
        this.events.on(ts_grid_1.GridEvents.expand, function (id) {
            var item = _this.data.getItem(id);
            _this.data.update(id, { $opened: !item.$opened });
        });
        this.events.detach(ts_grid_1.GridEvents.headerInput, this);
        this.events.on(ts_grid_1.GridEvents.headerInput, function (val, colId, filter) {
            _this.data.filter();
            if (val) {
                _this.data.filter({
                    by: colId,
                    match: val,
                    compare: _this.content[filter].match
                });
            }
        });
    };
    TreeGrid.prototype._getTreeHeadersWidth = function () {
        var maxLevel = this.data.getMaxLevel();
        var firstCol = this.config.columns[0];
        var DEFAULT_PADDING = 10;
        var ICON_WIDTH = 35;
        var paddings = maxLevel * (DEFAULT_PADDING + ICON_WIDTH);
        var firstColWidth = 0;
        this.data.map(function (el) {
            firstColWidth = Math.max(ts_grid_1.getStrWidth(ts_grid_1.removeHTMLTags("" + el[firstCol.id])), firstColWidth);
        });
        var newWidth = Math.max(firstColWidth + paddings, firstCol.width);
        this.config.$totalWidth = this.config.$totalWidth - firstCol.width + newWidth;
        this.config.columns[0].width = newWidth;
    };
    return TreeGrid;
}(ts_grid_1.Grid));
exports.TreeGrid = TreeGrid;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_grid_1 = __webpack_require__(51);
exports.TreeGridEvents = ts_grid_1.GridEvents;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(194));
__export(__webpack_require__(195));
var ts_navbar_1 = __webpack_require__(15);
exports.ItemType = ts_navbar_1.ItemType;
exports.NavigationBarEvents = ts_navbar_1.NavigationBarEvents;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var ts_navbar_1 = __webpack_require__(15);
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isContextMenu = true;
        return _this;
    }
    ContextMenu.prototype.showAt = function (elem, showAt) {
        if (showAt === void 0) { showAt = "bottom"; }
        if (elem instanceof MouseEvent) {
            this._changeActivePosition({
                left: window.pageXOffset + elem.x + 1,
                right: window.pageXOffset + elem.x + 1,
                top: window.pageYOffset + elem.y,
                bottom: window.pageYOffset + elem.y
            }, showAt);
        }
        else {
            var node = html_1.toNode(elem);
            this._changeActivePosition(html_1.getRealPosition(node), showAt);
        }
    };
    ContextMenu.prototype._getFactory = function () {
        return ts_navbar_1.createFactory({
            widget: this,
            defaultType: ts_navbar_1.ItemType.menuItem,
            allowedTypes: [ts_navbar_1.ItemType.menuItem, ts_navbar_1.ItemType.separator, ts_navbar_1.ItemType.spacer],
            widgetName: "context-menu"
        });
    };
    ContextMenu.prototype._close = function () {
        _super.prototype._close.call(this);
        this._activeMenu = null;
        this._changeActivePosition(null, null);
    };
    ContextMenu.prototype._getMode = function (_item, _root, active) {
        return active ? this._mode : "right";
    };
    ContextMenu.prototype._changeActivePosition = function (position, mode) {
        this._activePosition = position;
        this._mode = mode;
        this._listenOuterClick();
        this.paint();
    };
    return ContextMenu;
}(ts_navbar_1.Navbar));
exports.ContextMenu = ContextMenu;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var ts_navbar_1 = __webpack_require__(15);
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(element, config) {
        var _this = _super.call(this, element, config) || this;
        var render = function () { return _this._draw(); };
        _this.mount(element, dom_1.create({ render: render }));
        return _this;
    }
    Menu.prototype._getFactory = function () {
        return ts_navbar_1.createFactory({
            widget: this,
            defaultType: ts_navbar_1.ItemType.menuItem,
            allowedTypes: [ts_navbar_1.ItemType.menuItem, ts_navbar_1.ItemType.separator, ts_navbar_1.ItemType.spacer],
            widgetName: "menu-nav"
        });
    };
    Menu.prototype._draw = function () {
        return dom_1.el("ul", {
            dhx_widget_id: this._uid,
            onmousemove: this._handlers.onmousemove,
            onmouseleave: this._handlers.onmouseleave,
            onclick: this._handlers.onclick,
            onmousedown: this._handlers.onmousedown,
            class: "dhx_menu-nav " + (this.config.css ? this.config.css : "")
        }, this._drawMenuItems(this.data.getRoot(), false));
    };
    return Menu;
}(ts_navbar_1.Navbar));
exports.Menu = Menu;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(197));


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var ts_toolbar_1 = __webpack_require__(27);
var ts_navbar_1 = __webpack_require__(15);
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(3);
var ts_message_1 = __webpack_require__(19);
var Ribbon = /** @class */ (function (_super) {
    __extends(Ribbon, _super);
    function Ribbon(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            navigationType: "click"
        }, config)) || this;
        _this._listeners = {
            input: function (e) {
                var id = html_1.locate(e);
                _this.data.update(id, { value: e.target.value });
            },
            tooltip: function (e) {
                var elem = html_1.locateNode(e);
                if (!elem) {
                    return;
                }
                var id = elem.getAttribute("dhx_id");
                var item = _this.data.getItem(id);
                if (item.tooltip) {
                    ts_message_1.tooltip(item.tooltip, {
                        node: elem,
                        position: ts_message_1.Position.bottom
                    });
                }
            }
        };
        _this._currentRoot = null;
        var render = function () { return _this._draw(); };
        _this.mount(element, dom_1.create({ render: render }));
        return _this;
    }
    Ribbon.prototype.getState = function () {
        var state = {};
        this.data.eachChild(this.data.getRoot(), function (item) {
            if (item.twoState && !item.group) {
                state[item.id] = item.active;
            }
            else if (item.type === ts_toolbar_1.ItemType.input || item.type === ts_toolbar_1.ItemType.selectButton) {
                state[item.id] = item.value;
            }
        }, true);
        for (var key in this._groups) {
            if (this._groups[key].active) {
                state[key] = this._groups[key].active;
            }
        }
        return state;
    };
    Ribbon.prototype.setState = function (state) {
        for (var key in state) {
            if (this._groups && this._groups[key]) {
                if (this._groups[key].active) {
                    this.data.update(this._groups[key].active, { active: false });
                    this._groups[key].active = state[key];
                    this.data.update(state[key], { active: true });
                }
            }
            else {
                var item = this.data.getItem(key);
                if (item.type === ts_toolbar_1.ItemType.input || item.type === ts_toolbar_1.ItemType.selectButton) {
                    this.data.update(key, { value: state[key] });
                }
                else {
                    this.data.update(key, { active: state[key] });
                }
            }
        }
    };
    Ribbon.prototype._getFactory = function () {
        return ts_navbar_1.createFactory({
            widget: this,
            defaultType: ts_toolbar_1.ItemType.navItem,
            allowedTypes: [
                ts_toolbar_1.ItemType.navItem,
                ts_toolbar_1.ItemType.button,
                ts_toolbar_1.ItemType.customHTMLButton,
                ts_toolbar_1.ItemType.imageButton,
                ts_toolbar_1.ItemType.input,
                ts_toolbar_1.ItemType.selectButton,
                ts_toolbar_1.ItemType.separator,
                ts_toolbar_1.ItemType.spacer,
                ts_toolbar_1.ItemType.title
            ],
            widgetName: "ribbon"
        });
    };
    Ribbon.prototype._getMode = function (item, root) {
        return item.id === root ? "bottom" : "right";
    };
    Ribbon.prototype._close = function () {
        this._activePosition = null;
        this._currentRoot = null;
        _super.prototype._close.call(this);
    };
    Ribbon.prototype._draw = function () {
        var _this = this;
        return dom_1.el("ul.dhx_ribbon.dhx_widget", {
            dhx_widget_id: this._uid,
            class: this.config.css ? this.config.css : "",
            tabindex: 0,
            onclick: this._handlers.onclick,
            onmousedown: this._handlers.onmousedown,
            oninput: this._listeners.input,
            onmouseover: this._listeners.tooltip,
            _hooks: {
                didInsert: function (node) {
                    node.el.addEventListener("keyup", function (e) {
                        if (e.which !== 9) {
                            return;
                        }
                        var elem = html_1.locateNode(document.activeElement);
                        if (!elem) {
                            return;
                        }
                        var id = elem.getAttribute("dhx_id");
                        var item = _this.data.getItem(id);
                        if (item.tooltip) {
                            ts_message_1.tooltip(item.tooltip, {
                                node: elem,
                                position: ts_message_1.Position.bottom,
                                force: true
                            });
                        }
                    }, true);
                }
            }
        }, [
            dom_1.el("li", {
                class: "dhx_ribbon-block dhx_ribbon-block--root"
            }, [
                dom_1.el("ul.dhx_ribbon-content.dhx_ribbon-content--full-width", this.data.map(function (block) { return block.type === "block" ? _this._drawBlock(block, true) : _this._factory(block); }, this.data.getRoot(), false)),
            ])
        ]);
    };
    Ribbon.prototype._setRoot = function (id) {
        var parentId = this.data.getParent(id);
        if (this.data.getItem(parentId).type === ts_toolbar_1.ItemType.block) {
            this._currentRoot = id;
        }
    };
    Ribbon.prototype._drawBlock = function (block, isFirst) {
        var _this = this;
        if (!block || block.hidden) {
            return null;
        }
        var classNames = "dhx_ribbon-block" +
            (" dhx_ribbon-block" + (block.direction === "col" ? "--col" : "--row")) +
            (block.title ? " dhx_ribbon-block--title" : "") +
            (block.css ? " " + block.css : "") +
            (isFirst ? " dhx_ribbon-block--indented" : "");
        var childs = this.data.map(function (child) {
            if (child.type === ts_toolbar_1.ItemType.block) {
                return _this._drawBlock(child);
            }
            if (child.type !== ts_toolbar_1.ItemType.separator && child.type !== ts_toolbar_1.ItemType.spacer) {
                return _this._factory(child);
            }
            return null;
        }, block.id, false);
        return dom_1.el("li", {
            class: classNames
        }, [
            dom_1.el("ul.dhx_ribbon-content", childs),
            block.title ? dom_1.el("span.dhx_ribbon-content-label-wrapper", [dom_1.el("span.dhx_ribbon-content-label", block.title)]) : null
        ]);
    };
    return Ribbon;
}(ts_navbar_1.Navbar));
exports.Ribbon = Ribbon;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(199));
__export(__webpack_require__(79));


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(79);
var ts_message_1 = __webpack_require__(19);
var ts_navbar_1 = __webpack_require__(15);
var core_1 = __webpack_require__(1);
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            navigationType: "click",
            width: "200",
            minWidth: "44",
            collapsed: false
        }, config)) || this;
        _this._currentRoot = null;
        var render = function () { return _this._draw(); };
        _this.mount(element, dom_1.create({ render: render }));
        return _this;
    }
    Sidebar.prototype.toggle = function () {
        this.config.collapsed = !this.config.collapsed;
        this.events.fire(types_1.SidebarEvents.toggle, [this.config.collapsed]);
        this.paint();
    };
    Sidebar.prototype.isCollapsed = function () {
        return this.config.collapsed;
    };
    Sidebar.prototype._getFactory = function () {
        return ts_navbar_1.createFactory({
            widget: this,
            defaultType: ts_navbar_1.ItemType.navItem,
            allowedTypes: [
                ts_navbar_1.ItemType.navItem,
                ts_navbar_1.ItemType.menuItem,
                ts_navbar_1.ItemType.customHTMLButton,
                ts_navbar_1.ItemType.separator,
                ts_navbar_1.ItemType.spacer,
                ts_navbar_1.ItemType.title
            ],
            widgetName: "sidebar"
        });
    };
    Sidebar.prototype._close = function () {
        this._activePosition = null;
        this._currentRoot = null;
        _super.prototype._close.call(this);
    };
    Sidebar.prototype._setRoot = function (id) {
        if (this.data.getParent(id) === this.data.getRoot()) {
            this._currentRoot = id;
        }
    };
    Sidebar.prototype._customHandlers = function () {
        var _this = this;
        return {
            tooltip: function (e) {
                var elem = html_1.locateNode(e);
                if (!elem) {
                    return;
                }
                var id = elem.getAttribute("dhx_id");
                var item = _this.data.getItem(id);
                if (item.tooltip || (_this.config.collapsed && item.value)) {
                    ts_message_1.tooltip(item.tooltip || item.value, {
                        node: elem,
                        position: ts_message_1.Position.right,
                    });
                }
            }
        };
    };
    Sidebar.prototype._draw = function () {
        var _this = this;
        var _a = this.config, width = _a.width, minWidth = _a.minWidth;
        var actualWidth = this.config.collapsed ? minWidth : width;
        return dom_1.el("nav.dhx_widget.dhx_sidebar", {
            class: (this.config.css ? this.config.css : "") +
                (this.config.collapsed ? " dhx_sidebar--minimized" : ""),
            style: { width: actualWidth + "px" }
        }, [
            dom_1.el("ul.dhx_navbar.dhx_navbar--vertical", {
                dhx_widget_id: this._uid,
                tabindex: 0,
                onclick: this._handlers.onclick,
                onmousedown: this._handlers.onmousedown,
                oninput: this._handlers.input,
                onmouseover: this._handlers.tooltip,
                _hooks: {
                    didInsert: function (node) {
                        node.el.addEventListener("keyup", function (e) {
                            if (e.which !== 9) {
                                return;
                            }
                            var elem = html_1.locateNode(document.activeElement);
                            if (!elem) {
                                return;
                            }
                            var id = elem.getAttribute("dhx_id");
                            var item = _this.data.getItem(id);
                            if (item.tooltip || (_this.config.collapsed && item.value)) {
                                ts_message_1.tooltip(item.tooltip || item.value, {
                                    node: elem,
                                    position: ts_message_1.Position.right,
                                    force: true
                                });
                            }
                        }, true);
                    }
                }
            }, this.data.map(function (item) { return _this._factory(item); }, this.data.getRoot(), false))
        ]);
    };
    Sidebar.prototype._getMode = function () {
        return "right";
    };
    Sidebar.prototype._customInitEvents = function () {
        var _this = this;
        this.events.on(ts_navbar_1.NavigationBarEvents.inputFocus, function () {
            if (_this.config.collapsed) {
                _this._waitRestore = true;
                _this.toggle();
            }
        });
        this.events.on(ts_navbar_1.NavigationBarEvents.inputBlur, function () {
            if (_this._waitRestore) {
                _this.toggle();
                _this._waitRestore = false;
            }
        });
    };
    return Sidebar;
}(ts_navbar_1.Navbar));
exports.Sidebar = Sidebar;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(201));
__export(__webpack_require__(80));


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var Keymanager_1 = __webpack_require__(13);
var ts_layout_1 = __webpack_require__(12);
var types_1 = __webpack_require__(80);
var Tabbar = /** @class */ (function (_super) {
    __extends(Tabbar, _super);
    function Tabbar(container, config) {
        var _this = _super.call(this, container, core_1.extend({
            mode: types_1.RenderMode.top,
            tabWidth: 200,
            tabHeight: 45,
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        return _this;
    }
    Tabbar.prototype.toVDOM = function () {
        var activeView = null;
        if (!this.config.noContent) {
            activeView = this.cell(this.config.activeView);
            if (activeView) {
                activeView.config.css = activeView.config.css || "";
            }
        }
        return dom_1.el("div", {
            class: "dhx_widget dhx_tabbar" +
                (this.config.mode ? " dhx_tabbar--" + this.config.mode : "") +
                (this.config.css ? " " + this.config.css : "")
        }, [
            this._drawTabs(),
            activeView ? activeView.toVDOM() : null
        ]);
    };
    Tabbar.prototype.destructor = function () {
        this._hotkeysDestructor();
        _super.prototype.destructor.call(this);
    };
    Tabbar.prototype.removeCell = function (id) {
        var _this = this;
        if (id === this.config.activeView) {
            var cellLength = this._cells.length;
            var index = core_1.findIndex(this._cells, function (cell) { return cell.id === _this.config.activeView; });
            if (index < 0) {
                return;
            }
            if (index === cellLength - 1) {
                index = index - 1;
            }
            _super.prototype.removeCell.call(this, id);
            if (cellLength === 1) {
                this.config.activeView = null;
            }
            else {
                this.setActive(this._cells[index].id);
            }
        }
        else {
            _super.prototype.removeCell.call(this, id);
        }
        this.events.fire(types_1.TabbarEvents.close, [id]);
    };
    Tabbar.prototype.setActive = function (id) {
        var prev = this.config.activeView;
        this.cell(id).show();
        this._focusTab(id);
        this.events.fire(types_1.TabbarEvents.change, [id, prev]);
    };
    Tabbar.prototype.getActive = function () {
        return this.config ? this.config.activeView : null;
    };
    Tabbar.prototype._initHandlers = function () {
        var _this = this;
        _super.prototype._initHandlers.call(this);
        this._handlers = __assign({}, this._handlers, { onTabClick: function (e) {
                var tabId = html_1.locate(e, "dhx_tabid");
                if (!tabId) {
                    return;
                }
                var prev = _this.config.activeView;
                if (e.target.classList.contains("dhx_tabbar-tab__close")) {
                    _this.removeCell(tabId);
                }
                else {
                    _this.config.activeView = tabId;
                    _this.events.fire(types_1.TabbarEvents.change, [_this.config.activeView, prev]);
                }
                _this.paint();
            } });
        var activeNextTab = function (e) {
            e.preventDefault();
            var activeIndex = core_1.findIndex(_this._cells, function (cell) { return cell.id === _this.config.activeView; });
            var prev = _this.config.activeView;
            if (activeIndex === -1) {
                return;
            }
            if (activeIndex === _this.config.views.length - 1) {
                _this.config.activeView = _this._cells[0].id;
            }
            else {
                _this.config.activeView = _this._cells[activeIndex + 1].id;
            }
            _this.events.fire(types_1.TabbarEvents.change, [_this.config.activeView, prev]);
            _this._focusTab(_this.config.activeView);
            _this.paint();
        };
        var activePrevTab = function (e) {
            e.preventDefault();
            var activeIndex = core_1.findIndex(_this._cells, function (cell) { return cell.id === _this.config.activeView; });
            var prev = _this.config.activeView;
            if (activeIndex === -1) {
                return;
            }
            if (activeIndex === 0) {
                _this.config.activeView = _this._cells[_this.config.views.length - 1].id;
            }
            else {
                _this.config.activeView = _this._cells[activeIndex - 1].id;
            }
            _this.events.fire(types_1.TabbarEvents.change, [_this.config.activeView, prev]);
            _this._focusTab(_this.config.activeView);
            _this.paint();
        };
        var isVertical = this.config.mode === "right" || this.config.mode === "left";
        this._hotkeysDestructor = Keymanager_1.addHotkeys({
            arrowright: activeNextTab,
            arrowup: isVertical ? activePrevTab : activeNextTab,
            arrowleft: activePrevTab,
            arrowdown: isVertical ? activeNextTab : activePrevTab,
        }, function () { return html_1.locate(document.activeElement, "tabs_id") === _this._uid; });
    };
    Tabbar.prototype._focusTab = function (id) {
        var _this = this;
        setTimeout(function () {
            _this.getRootView().refs[id].el.focus();
        }, 10);
    };
    Tabbar.prototype._getIndicatorPosition = function () {
        var _this = this;
        var activeIndex = core_1.findIndex(this._cells, function (cell) { return cell.id === _this.config.activeView; });
        if (activeIndex === -1) {
            activeIndex = 0;
        }
        switch (this.config.mode) {
            case types_1.RenderMode.bottom:
            case types_1.RenderMode.top:
                return {
                    transform: "translateX(" + (this.config.tabWidth * activeIndex + "px") + ")",
                    width: this.config.tabWidth + "px",
                    height: "2px"
                };
            case types_1.RenderMode.left:
            case types_1.RenderMode.right:
                return {
                    transform: "translateY(" + (this.config.tabHeight * activeIndex + "px") + ")",
                    height: this.config.tabHeight + "px",
                    width: "2px"
                };
        }
    };
    Tabbar.prototype._drawTabs = function () {
        var _this = this;
        if (!this._cells.length) {
            return null;
        }
        var tabStyle = this.config.tabWidth ? {
            width: this.config.tabWidth + "px",
            height: this.config.tabHeight + "px",
        } : null;
        return dom_1.el(".dhx_tabbar-header__wrapper", [
            dom_1.el(".dhx_tabbar-header-active", {
                style: this._getIndicatorPosition()
            }),
            dom_1.el("ul" + "." + this.config.mode, {
                tabs_id: this._uid,
                class: "dhx_tabbar-header ",
                onclick: this._handlers.onTabClick
            }, this._cells.map(function (cell) {
                return dom_1.el("li", {
                    class: "dhx_tabbar-tab" + (cell.config.tabCss ? " " + cell.config.tabCss : ""),
                    dhx_tabid: cell.id,
                    role: "presentation",
                }, [
                    dom_1.el("button.dhx_button.dhx_tabbar-tab-button" + (_this.config.activeView === cell.id ? ".dhx_tabbar-tab-button--active" : ""), {
                        "tabindex": "0",
                        "style": tabStyle,
                        "aria-controls": cell.id,
                        "id": "tab-content-" + cell.id,
                        "aria-selected": "" + (_this.config.activeView === cell.id),
                        "_ref": cell.id,
                    }, [dom_1.el("span.dhx_button__text", cell.config.tab)]),
                    _this.config.closeButtons
                        ? dom_1.el("div.dhx_tabbar-tab__close.dxi--small.dxi.dxi-close", {
                            "tabindex": 0,
                            "role": "button",
                            "aria-pressed": "false"
                        })
                        : null
                ]);
            }).slice())
        ]);
    };
    return Tabbar;
}(ts_layout_1.Layout));
exports.Tabbar = Tabbar;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(203));
__export(__webpack_require__(81));
__export(__webpack_require__(82));


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(21);
var view_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var Editor_1 = __webpack_require__(81);
var KeyNavigation_1 = __webpack_require__(204);
var types_2 = __webpack_require__(82);
function getSelectionIndent(level) {
    return level * 20;
}
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(element, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, element, core_1.extend({
            dropBehaviour: ts_data_1.DropBehaviour.child,
            icon: {
                file: "dxi dxi-file-outline",
                folder: "dxi dxi-folder",
                openFolder: "dxi dxi-folder-open"
            }
        }, config)) || this;
        var init = function (item) {
            item.opened = item.opened;
            item.$mark = types_2.SelectStatus.unselected;
            item.checkbox = _this.config.checkbox;
            item.$autoload = Boolean(item.items && _this.config.autoload);
            item.$editor = false;
            return item;
        };
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({ autoload: _this.config.autoload, init: init }, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.data.config.init = init;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.TreeCollection({ autoload: _this.config.autoload, init: init }, _this.events);
        }
        _this._isSelectionActive = true;
        _this.selection = new ts_data_1.Selection({}, _this.data, _this.events);
        if (_this.config.keyNavigation) {
            KeyNavigation_1.keyNavigation.add(_this._uid, _this);
        }
        _this._editor = Editor_1.default;
        _this._initEvents();
        _this._initHandlers();
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        _this._root = _this.data.getRoot();
        var render = function () { return _this._draw(); };
        _this.mount(element, dom_1.create({ render: render }));
        return _this;
    }
    Tree.prototype.focusItem = function (id) {
        var _this = this;
        this._focusId = id;
        this.data.eachParent(id, function (item) {
            if (!item.opened) {
                _this.open(item.id);
            }
        });
        this.paint();
    };
    Tree.prototype.destructor = function () {
        this.events.clear();
        this.unmount();
    };
    Tree.prototype.editItem = function (id, config) {
        this.data.update(id, { $edit: true, $editConfig: config });
    };
    Tree.prototype.getState = function () {
        var state = {};
        this.data.eachChild(this._root, function (item) {
            state[item.id] = {
                open: item.opened,
                selected: item.$mark
            };
        }, true);
        return state;
    };
    Tree.prototype.setState = function (state) {
        this.data.eachChild(this._root, function (item) {
            if (item.id in state) {
                item.opened = state[item.id].open;
                item.$mark = state[item.id].selected;
            }
        }, true);
        this.paint();
    };
    Tree.prototype.close = function (id) {
        this.data.update(id, { opened: false });
    };
    Tree.prototype.openAll = function () {
        var _this = this;
        this.data.eachChild(this._root, function (_a) {
            var id = _a.id;
            return _this.data.haveItems(id) && _this.data.update(id, { opened: true });
        }, true);
    };
    Tree.prototype.closeAll = function () {
        var _this = this;
        this.data.eachChild(this._root, function (_a) {
            var id = _a.id;
            return _this.data.haveItems(id) && _this.data.update(id, { opened: false });
        }, true);
    };
    Tree.prototype.open = function (id) {
        this.data.update(id, { opened: true });
    };
    Tree.prototype.toggle = function (id) {
        var item = this.data.getItem(id);
        if (item.$autoload) {
            this.data.loadItems(id);
            this.data.update(id, {
                $autoload: false,
                opened: true
            });
        }
        else {
            this.data.update(id, { opened: !item.opened });
        }
    };
    Tree.prototype.getChecked = function () {
        var checked = [];
        this.data.eachChild(this._root, function (item) {
            if (item.$mark === types_2.SelectStatus.selected) {
                checked.push(item.id);
            }
        });
        return checked;
    };
    Tree.prototype.checkItem = function (id) {
        this._updateItemCheck(id, types_2.SelectStatus.selected);
    };
    Tree.prototype.unCheckItem = function (id) {
        this._updateItemCheck(id, types_2.SelectStatus.unselected);
    };
    Tree.prototype._draw = function () {
        var items = this._drawItems(this.data.getRoot());
        return dom_1.el("ul", __assign({ class: "dhx_widget dhx_tree" +
                (!this._isSelectionActive ? " dhx_tree--no-selection " : "") +
                (this.config.css ? " " + this.config.css : ""), dhx_widget_id: this._uid }, this._handlers), items);
    };
    Tree.prototype._initEvents = function () {
        var _this = this;
        this.data.events.on(ts_data_1.DataEvents.change, function (id, status, obj) {
            if (status === "remove") {
                _this._updateParents(obj.parent, true);
            }
            if (status === "add") {
                _this._updateParents(id);
            }
            _this.paint();
        });
        this._editor.events.on(Editor_1.EditorEvents.end, function (target, id, value) {
            if (_this._uid === target) {
                _this.data.update(id, { $edit: false, value: value });
            }
            KeyNavigation_1.keyNavigation.block(false);
        });
        this._editor.events.on(Editor_1.EditorEvents.begin, function (id) {
            if (id === _this._uid) {
                KeyNavigation_1.keyNavigation.block(true);
            }
        });
        this.events.on(ts_data_1.DragEvents.beforeDrag, function (item, ghost) {
            var isFolder = _this.config.isFolder ? _this.config.isFolder(item) : _this.data.haveItems(item.id);
            var iconType = getItemIconType(isFolder, item.opened);
            var icon = (item.icon || _this.config.icon)[iconType] || _this.config.icon[iconType];
            ghost.innerHTML = "<div class=\"dhx_tree-list-item__icon " + icon + "\"></div><span class=\"dhx_tree-list-item__text\">" + (item.text || item.value) + "</span>";
        });
        this.events.on(ts_data_1.DragEvents.canDrop, function (id, pos) {
            var dropStatus;
            if (_this.config.dropBehaviour === ts_data_1.DropBehaviour.complex) {
                if (pos === ts_data_1.DropPosition.top) {
                    dropStatus = "dhx_tree-drop--top";
                }
                else if (pos === ts_data_1.DropPosition.bot) {
                    dropStatus = "dhx_tree-drop--bottom";
                }
                else {
                    dropStatus = "dhx_tree-drop--in-folder";
                }
            }
            else {
                dropStatus = _this.config.dropBehaviour === ts_data_1.DropBehaviour.child ? "dhx_tree-drop--in-folder" : "dhx_tree-drop--bottom";
            }
            if (_this.data.exists(id)) {
                _this.data.update(id, { $drophere: dropStatus });
            }
        });
        this.events.on(ts_data_1.DragEvents.cancelDrop, function (id) {
            if (_this.data.exists(id)) {
                _this.data.update(id, { $drophere: null });
            }
        });
        this.events.on(ts_data_1.DragEvents.dropComplete, function (id, pos) {
            if (_this.config.dropBehaviour === ts_data_1.DropBehaviour.child || (_this.config.dropBehaviour === ts_data_1.DropBehaviour.complex && pos === ts_data_1.DropPosition.in)) {
                _this.open(id);
            }
        });
        this.events.on(ts_data_1.DragEvents.dragStart, function () {
            _this._isSelectionActive = false;
            _this.paint();
        });
        this.events.on(ts_data_1.DragEvents.dragEnd, function () {
            _this._isSelectionActive = true;
            _this.paint();
        });
        this.events.on(types_1.SelectionEvents.afterSelect, function (id) { return _this._focusId = id; });
        if (this.config.editing) {
            this.events.on(types_2.TreeEvents.itemDblClick, function (id) { return _this.editItem(id); });
        }
    };
    Tree.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onmouseleave: function (e) {
                ts_data_1.dragManager._cancelCanDrop();
            },
            onclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                if (e.target.classList.contains("dhx_tree-toggle-button")) {
                    _this.toggle(id);
                    return;
                }
                if (e.target.classList.contains("dhx_tree-checkbox")) {
                    var item = _this.data.getItem(id);
                    if (item.$mark === types_2.SelectStatus.unselected) {
                        _this.checkItem(id);
                    }
                    else {
                        _this.unCheckItem(id);
                    }
                    return;
                }
                _this.events.fire(types_2.TreeEvents.itemClick, [id, e]);
                if (_this.data.exists(id)) {
                    _this.selection.add(id);
                }
            },
            ondblclick: function (e) {
                var id = html_1.locate(e);
                _this.events.fire(types_2.TreeEvents.itemDblClick, [id, e]);
            },
            ondragstart: function (e) {
                e.preventDefault();
            },
            onmousedown: function (e) {
                if (_this.config.dragMode && _this.config.dragMode !== ts_data_1.DragMode.target) {
                    ts_data_1.dragManager.onMouseDown(e);
                }
            },
            oncontextmenu: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.events.fire(types_2.TreeEvents.itemContextMenu, [id, e]);
            }
        };
    };
    Tree.prototype._drawItems = function (parent, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        return this.data.map(function (item) {
            if (!item) {
                return;
            }
            var toggleButton;
            var childs;
            var select;
            var isFolder = _this.config.isFolder ? _this.config.isFolder(item) : false;
            if (item.$autoload || _this.data.haveItems(item.id)) {
                isFolder = true;
                toggleButton = dom_1.el("div", { class: "dxi dxi-menu-right dhx_tree-toggle-button" }, "");
                if (item.opened) {
                    toggleButton = dom_1.el("div", { class: "dxi dxi-menu-down dhx_tree-toggle-button dhx_tree-toggle-button--open" }, "");
                    childs = _this._drawItems(item.id, level + 1);
                }
            }
            if (item.checkbox) {
                var className = item.$mark === types_2.SelectStatus.indeterminate ? "dxi-minus-box" :
                    (item.$mark === types_2.SelectStatus.selected ? "dxi-checkbox-marked" : "dxi-checkbox-blank-outline");
                select = dom_1.el("div", {
                    class: "dhx_tree-checkbox dxi " + className
                });
            }
            var iconType = getItemIconType(isFolder, item.opened);
            var icon = (item.icon || _this.config.icon)[iconType] || _this.config.icon[iconType];
            var itemValue;
            if (item.$edit) {
                itemValue = _this._editor.edit(_this._uid, __assign({ item: item }, item.$editConfig));
            }
            else {
                itemValue = dom_1.el("span", { class: "dhx_tree-list-item__text" }, item.text || item.value);
            }
            if (isFolder) {
                return dom_1.el("li", {
                    class: "dhx_tree-list-item dhx_tree-list-item--parent" + (item.css ? " " + item.css : ""),
                    dhx_id: item.id,
                    _key: item.id
                }, [
                    dom_1.el("div.dhx_tree-folder", {
                        class: (item.id === _this._focusId ? " dhx_tree-folder--focused" : "") +
                            (item.$selected ? " dhx_tree-folder--selected" : "") +
                            (item.$drophere ? (" " + item.$drophere) : ""),
                        style: {
                            "left": -getSelectionIndent(level) + "px",
                            "right": -getSelectionIndent(level) + "px",
                            "margin-left": getSelectionIndent(level) + "px"
                        }
                    }, [
                        toggleButton,
                        dom_1.el("div.dhx_tree-list-item__content", [
                            select,
                            dom_1.el("div", { class: "dhx_tree-list-item__icon " + icon }),
                            itemValue
                        ]),
                    ]),
                    childs && dom_1.el("ul.dhx_tree-list", childs)
                ]);
            }
            else {
                return dom_1.el("li", {
                    class: "dhx_tree-list__item dhx_tree-list-item" +
                        (item.id === _this._focusId ? " dhx_tree-list-item--focused" : "") +
                        (item.$selected ? " dhx_tree-list-item--selected" : "") +
                        (item.$drophere ? (" " + item.$drophere) : "") +
                        (isFolder ? "dhx_tree-list-item--folder" : ""),
                    style: {
                        "left": -getSelectionIndent(level) + "px",
                        "right": -getSelectionIndent(level) + "px",
                        "margin-left": getSelectionIndent(level) + "px"
                    },
                    dhx_id: item.id,
                    level: level,
                }, [
                    toggleButton,
                    dom_1.el("div", {
                        class: "dhx_tree-list-item__content"
                    }, [
                        select,
                        dom_1.el("div", { class: "dhx_tree-list-item__icon " + icon }),
                        itemValue
                    ]),
                ]);
            }
        }, parent, false);
    };
    Tree.prototype._updateItemCheck = function (id, status) {
        this.data.update(id, { $mark: status });
        this.data.eachChild(id, function (obj) { return obj.$mark = status; }); // mark all childs
        this._updateParents(id);
    };
    Tree.prototype._updateParents = function (id, self) {
        var _this = this;
        if (self === void 0) { self = false; }
        if (id === this._root) {
            return;
        }
        this.data.eachParent(id, function (obj) {
            var selected = 0;
            var unselected = 0;
            _this.data.eachChild(obj.id, function (child) {
                if (!child.checkbox) {
                    return;
                }
                switch (child.$mark) {
                    case types_2.SelectStatus.unselected:
                        unselected++;
                        break;
                    case types_2.SelectStatus.selected:
                        selected++;
                        break;
                    default:
                        break;
                }
            }, true);
            if (selected !== 0 && unselected !== 0) {
                obj.$mark = types_2.SelectStatus.indeterminate;
            }
            else if (selected === 0 && unselected !== 0) {
                obj.$mark = types_2.SelectStatus.unselected;
            }
            else {
                obj.$mark = types_2.SelectStatus.selected;
            }
        }, self);
    };
    return Tree;
}(view_1.View));
exports.Tree = Tree;
function getItemIconType(isFolder, isOpened) {
    if (!isFolder) {
        return types_2.ItemIcon.file;
    }
    if (isOpened) {
        return types_2.ItemIcon.openFolder;
    }
    return types_2.ItemIcon.folder;
}


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(3);
var Keymanager_1 = __webpack_require__(13);
var KeyNavigation = /** @class */ (function () {
    function KeyNavigation() {
        this._store = {};
        this._keyManager = Keymanager_1.keyManager;
        this._listen = false;
        this._blocked = false;
    }
    KeyNavigation.prototype.add = function (id, target) {
        if (!this._listen) {
            this._listen = true;
            this._initKeys();
            this._addListeners();
        }
        this._store[id] = target;
    };
    KeyNavigation.prototype.block = function (val) {
        this._blocked = val;
    };
    KeyNavigation.prototype._initKeys = function () {
        var _this = this;
        this._keyManager.addHotKey("arrowleft", function (e) {
            if (_this._blocked) {
                return;
            }
            e.preventDefault();
            var target = _this._store[_this._activeTarget];
            if (!target) {
                return;
            }
            var focused = _this._getFocused();
            var parent = target.data.getParent(focused);
            if (target.data.getRoot() === parent) {
                target.close(focused);
                return;
            }
            var isClosed = !target.data.getItem(focused).opened;
            if (isClosed) {
                target.focusItem(parent);
            }
            else {
                if (focused !== target.data.getRoot()) {
                    target.close(focused);
                }
            }
        });
        this._keyManager.addHotKey("arrowright", function (e) {
            if (_this._blocked) {
                return;
            }
            e.preventDefault();
            var target = _this._store[_this._activeTarget];
            if (!target) {
                return;
            }
            var focused = _this._getFocused();
            if (target.data.haveItems(focused)) {
                target.open(focused);
            }
        });
        this._keyManager.addHotKey("arrowup", function (e) {
            if (_this._blocked) {
                return;
            }
            e.preventDefault();
            var target = _this._store[_this._activeTarget];
            if (!target) {
                return;
            }
            var focused = _this._getFocused();
            var data = target.data;
            var next = _this._getClosestTop(focused, data);
            if (next) {
                target.focusItem(next);
            }
        });
        this._keyManager.addHotKey("arrowdown", function (e) {
            if (_this._blocked) {
                return;
            }
            e.preventDefault();
            var target = _this._store[_this._activeTarget];
            if (!target) {
                return;
            }
            var focused = _this._getFocused();
            var data = target.data;
            var next = _this._getClosestBot(focused, data);
            if (next) {
                target.focusItem(next);
            }
        });
        this._keyManager.addHotKey("enter", function () {
            if (_this._blocked) {
                return;
            }
            var target = _this._store[_this._activeTarget];
            if (!target) {
                return;
            }
            var focused = _this._getFocused();
            if (focused) {
                target.selection.add(focused);
            }
        });
    };
    KeyNavigation.prototype._getFocused = function () {
        var target = this._store[this._activeTarget];
        var focused = target._focusId;
        if (focused) {
            return focused;
        }
        else {
            var root = target.data.getRoot();
            return target.data.getItems(root)[0].id;
        }
    };
    KeyNavigation.prototype._addListeners = function () {
        var _this = this;
        document.addEventListener("click", function (e) {
            var id = html_1.locate(e, "dhx_widget_id");
            if (id in _this._store) {
                _this._activeTarget = id;
            }
        });
        Keymanager_1.keyManager.addHotKey("tab", function (e) {
            var id = html_1.locate(e, "dhx_widget_id");
            if (id in _this._store) {
                _this._activeTarget = id;
            }
        }, this);
    };
    KeyNavigation.prototype._getClosestBot = function (id, data, ignore) {
        if (ignore === void 0) { ignore = false; }
        var item = data.getItem(id);
        var haveItems = data.haveItems(id);
        if (haveItems && item.opened && !ignore) { // item opened
            return data.getItems(id)[0].id;
        }
        else { // item not opened
            var parent_1 = data.getParent(id);
            var childs = data.getItems(parent_1);
            var index = core_1.findIndex(childs, function (child) { return child.id === id; });
            var len = childs.length;
            if (index + 1 < len) { // item have next element on this level
                return childs[index + 1].id;
            }
            else {
                if (parent_1 === data.getRoot()) {
                    return null;
                }
                return this._getClosestBot(parent_1, data, true);
            }
        }
    };
    KeyNavigation.prototype._getClosestTop = function (id, data) {
        var index = data.getIndex(id);
        var parent = data.getParent(id);
        if (index > 0) {
            var childs = data.getItems(parent);
            var current = childs[index - 1];
            if (!data.haveItems(current.id) || !current.opened) {
                return current.id;
            }
            while (data.haveItems(current.id) && current.opened) {
                var allChilds = data.getItems(current.id);
                current = allChilds[allChilds.length - 1];
            }
            return current.id;
        }
        else {
            if (parent === data.getRoot()) {
                return null;
            }
            return parent;
        }
    };
    return KeyNavigation;
}());
exports.keyNavigation = new KeyNavigation();


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(206));


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(2);
var Keymanager_1 = __webpack_require__(13);
var ts_layout_1 = __webpack_require__(12);
var ts_toolbar_1 = __webpack_require__(27);
var types_1 = __webpack_require__(207);
var WindowController_1 = __webpack_require__(208);
function detectDrag(e) {
    return new Promise(function (res) {
        var timeout = setTimeout(function () {
            handleMouseUp();
        }, 1000);
        var handleMouseUp = function () {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            res(false);
        };
        var handleMouseMove = function (moveEvent) {
            if (Math.abs(moveEvent.pageX - e.pageX) > 4 || Math.abs(moveEvent.pageY - e.pageY) > 4) {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                clearTimeout(timeout);
                res({ x: e.pageX, y: e.pageY });
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
}
var Window = /** @class */ (function () {
    function Window(config) {
        this.config = core_1.extend({
            movable: false,
            resizable: false,
            header: true,
            closable: config.modal,
            minWidth: 100,
            minHeight: 100
        }, config);
        this._uid = core_1.uid();
        this.events = new events_1.EventSystem(this);
        var popup = this._popup = document.createElement("div");
        popup.className = "dhx_popup dhx_widget dhx_popup--window" + (this.config.modal ? " dhx_popup--window_modal" : "");
        popup.tabIndex = 1;
        popup.style.position = "absolute";
        if (!this.config.modal) {
            WindowController_1.default.add(this._uid, this._popup);
        }
        this._isActive = false;
        this._initHandlers();
        this._initUI();
        if (this.config.html) {
            this.attachHTML(this.config.html);
        }
    }
    Window.prototype.paint = function () {
        this._layout.paint();
    };
    Window.prototype.fullScreen = function () {
        this.setSize(window.innerWidth, window.innerHeight);
        this.setPosition(window.pageXOffset, window.pageYOffset);
    };
    Window.prototype.setSize = function (width, height) {
        var oldsize = {
            width: this._popup.offsetWidth,
            height: this._popup.offsetHeight
        };
        var size = {
            width: oldsize.width,
            height: oldsize.height
        };
        if (core_1.isDefined(width)) {
            size.width = width;
        }
        if (core_1.isDefined(height)) {
            size.height = height;
        }
        this._popup.style.width = size.width + "px";
        this._popup.style.height = size.height + "px";
        this.events.fire(types_1.WindowEvents.resize, [
            size,
            oldsize,
            { left: true, top: true, bottom: true, right: true }
        ]);
    };
    Window.prototype.getSize = function () {
        return {
            width: this._popup.offsetWidth,
            height: this._popup.offsetHeight
        };
    };
    Window.prototype.setPosition = function (left, top) {
        var oldposition = {
            left: this._popup.offsetLeft,
            top: this._popup.offsetTop,
        };
        var position = {
            left: oldposition.left,
            top: oldposition.top
        };
        if (core_1.isDefined(left)) {
            this.config.left = position.left = left;
        }
        if (core_1.isDefined(top)) {
            this.config.top = position.top = top;
        }
        this._popup.style.left = position.left + "px";
        this._popup.style.top = position.top + "px";
        this.events.fire(types_1.WindowEvents.resize, [
            position,
            oldposition,
            { left: true, top: true, bottom: true, right: true }
        ]);
    };
    Window.prototype.getPosition = function () {
        return {
            left: this._popup.offsetLeft,
            top: this._popup.offsetTop,
        };
    };
    Window.prototype.show = function (left, top) {
        if (left === void 0) { left = this.config.left; }
        if (top === void 0) { top = this.config.top; }
        if (!this.events.fire(types_1.WindowEvents.beforeShow, [left, top])) {
            return;
        }
        var height = this.config.height = this.config.height || this.config.minHeight || window.innerHeight / 2;
        var width = this.config.width = this.config.width || this.config.minWidth || window.innerWidth / 2;
        this.config.left = left = core_1.isDefined(left) ? left : (window.innerWidth - width) / 2 + window.pageXOffset;
        this.config.top = top = core_1.isDefined(top) ? top : (window.innerHeight - height) / 2 + window.pageYOffset;
        if (this._isActive) {
            this._popup.style.left = left + "px";
            this._popup.style.top = top + "px";
            return;
        }
        if (this.config.viewportOverflow) {
            WindowController_1.default.openFreeWindow();
        }
        if (this.config.modal) {
            this._blockScreen();
        }
        this._popup.style.width = width + "px";
        this._popup.style.height = height + "px";
        this._popup.style.left = left + "px";
        this._popup.style.top = top + "px";
        document.body.appendChild(this._popup);
        this._popup.focus();
        this._isActive = true;
        this.events.fire(types_1.WindowEvents.afterShow, []);
    };
    Window.prototype.hide = function () {
        if (!this._isActive || !this.events.fire(types_1.WindowEvents.beforeHide, [])) {
            return;
        }
        if (this.config.viewportOverflow) {
            WindowController_1.default.closeFreeWindow();
        }
        if (this._blocker) {
            document.body.removeChild(this._blocker);
            if (this.config.closable) {
                Keymanager_1.keyManager.removeHotKey(null, this);
            }
            this._blocker = null;
        }
        document.body.removeChild(this._popup);
        this._isActive = false;
        this.events.fire(types_1.WindowEvents.afterHide, []);
    };
    Window.prototype.isVisible = function () {
        return this._isActive;
    };
    Window.prototype.attach = function (name, config) {
        this._layout.cell("content").attach(name, config);
    };
    Window.prototype.attachHTML = function (html) {
        this._layout.cell("content").attach(function () { return dom_1.el(".dhx_window__inner-html-content", {
            ".innerHTML": html
        }); });
    };
    Window.prototype.getRootView = function () {
        return this._layout.getRootView();
    };
    Window.prototype.destructor = function () {
        if (this._isActive) {
            this.hide();
        }
        if (this.header) {
            this.header.destructor();
        }
        if (this.footer) {
            this.footer.destructor();
        }
        this._layout.destructor();
        this._popup = null;
    };
    Window.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            headerDblClick: function () { return _this.events.fire(types_1.WindowEvents.headerDoubleClick, []); },
            move: function (e) {
                if (e.which === 3) {
                    return;
                }
                e.preventDefault();
                WindowController_1.default.setActive(_this._uid);
                detectDrag(e).then(function (pos) {
                    if (pos) {
                        _this._startDrag(pos.x, pos.y);
                    }
                });
            },
            resize: {
                ".dhx_window-resizer": function (e) {
                    if (e.which === 3) {
                        return;
                    }
                    e.preventDefault();
                    WindowController_1.default.setActive(_this._uid);
                    detectDrag(e).then(function (pos) {
                        if (pos) {
                            var classList = e.target.classList;
                            if (classList.contains("dhx_window-resizer--left")) {
                                _this._startResize({ left: true });
                            }
                            else if (classList.contains("dhx_window-resizer--right")) {
                                _this._startResize({ right: true });
                            }
                            else if (classList.contains("dhx_window-resizer--top")) {
                                _this._startResize({ top: true });
                            }
                            else if (classList.contains("dhx_window-resizer--bottom")) {
                                _this._startResize({ bottom: true });
                            }
                            else if (classList.contains("dhx_window-resizer--bottom_left")) {
                                _this._startResize({ left: true, bottom: true });
                            }
                            else if (classList.contains("dhx_window-resizer--bottom_right")) {
                                _this._startResize({ bottom: true, right: true });
                            }
                            else if (classList.contains("dhx_window-resizer--top_left")) {
                                _this._startResize({ top: true, left: true });
                            }
                            else if (classList.contains("dhx_window-resizer--top_right")) {
                                _this._startResize({ top: true, right: true });
                            }
                        }
                    });
                }
            },
            setActive: function () {
                WindowController_1.default.setActive(_this._uid);
            },
        };
    };
    Window.prototype._initUI = function () {
        var _this = this;
        var rows = [];
        if (this.config.header) {
            rows.push({
                id: "header",
                gravity: false,
                css: "dhx_window-header " + (this.config.movable ? "dhx_window-header--movable" : ""),
                on: {
                    mousedown: this.config.movable && this._handlers.move,
                    dblclick: this._handlers.headerDblClick,
                }
            });
        }
        rows.push({ id: "content", css: "dhx_window-content" });
        if (this.config.footer) {
            rows.push({ id: "footer", gravity: false, css: "dhx_window-footer" });
        }
        if (this.config.resizable) {
            rows.push({ id: "resizers", gravity: false, css: "resizers" });
        }
        var layout = this._layout = new ts_layout_1.Layout(this._popup, {
            css: "dhx_window" + (this.config.modal ? " dhx_window--modal" : "") + (this.config.css ? " " + this.config.css : ""),
            rows: rows,
            on: {
                click: this._handlers.setActive
            }
        });
        if (this.config.header) {
            var header = this.header = new ts_toolbar_1.Toolbar();
            if (this.config.title) {
                this.header.data.add({
                    type: ts_toolbar_1.ItemType.title,
                    value: this.config.title,
                    id: "title",
                });
            }
            if (this.config.closable) {
                this.header.data.add({
                    type: ts_toolbar_1.ItemType.spacer
                });
                this.header.data.add({
                    id: "close",
                    type: ts_toolbar_1.ItemType.button,
                    view: "link",
                    size: "medium",
                    color: "secondary",
                    circle: true,
                    icon: "dxi dxi-close"
                });
                header.events.on(ts_toolbar_1.NavigationBarEvents.click, function (id) {
                    if (id === "close") {
                        _this.hide();
                    }
                });
            }
            layout.cell("header").attach(header);
        }
        if (this.config.footer) {
            var footer = this.footer = new ts_toolbar_1.Toolbar();
            layout.cell("footer").attach(footer);
        }
        if (this.config.resizable) {
            layout.cell("resizers").attach(function () { return _this._drawResizers(); });
        }
    };
    Window.prototype._drawResizers = function () {
        return dom_1.el(".dhx-resizers", {
            onmousedown: this._handlers.resize
        }, [
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--left"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--right"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--bottom"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--top"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--bottom_right"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--bottom_left"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--top_right"),
            dom_1.el(".dhx_window-resizer.dhx_window-resizer--top_left")
        ]);
    };
    Window.prototype._startDrag = function (x, y) {
        var _this = this;
        document.body.classList.add("dhx_window--stop_selection");
        var deltaX = x - this._popup.offsetLeft;
        var deltaY = y - this._popup.offsetTop;
        var width = this._popup.offsetWidth;
        var height = this._popup.offsetHeight;
        var mousemove = function (e) {
            var oldposition = {
                left: _this._popup.offsetLeft,
                top: _this._popup.offsetTop,
            };
            var initX = window.pageXOffset;
            var initY = window.pageYOffset;
            var newX = e.pageX - deltaX;
            var newY = e.pageY - deltaY;
            if (!_this.config.viewportOverflow) {
                if (newX < initX) {
                    newX = initX;
                }
                else if (newX > initX + window.innerWidth - width) {
                    newX = initX + window.innerWidth - width;
                }
                if (newY < initY) {
                    newY = initY;
                }
                else if (newY > initY + window.innerHeight - height) {
                    newY = initY + window.innerHeight - height;
                }
            }
            _this.config.left = newX;
            _this.config.top = newY;
            _this._popup.style.left = newX + "px";
            _this._popup.style.top = newY + "px";
            var position = { left: newX, top: newY };
            _this.events.fire(types_1.WindowEvents.move, [
                position,
                oldposition,
                { left: true, top: true, bottom: true, right: true }
            ]);
        };
        var mouseup = function () {
            document.removeEventListener("mouseup", mouseup);
            document.removeEventListener("mousemove", mousemove);
            document.body.classList.remove("dhx_window--stop_selection");
        };
        document.addEventListener("mouseup", mouseup);
        document.addEventListener("mousemove", mousemove);
    };
    Window.prototype._startResize = function (resizeConfig) {
        var _this = this;
        var minWidth = this.config.minWidth;
        var minHeight = this.config.minHeight;
        var left = this._popup.offsetLeft;
        var top = this._popup.offsetTop;
        var width = this._popup.offsetWidth;
        var height = this._popup.offsetHeight;
        var resizeClassName;
        switch (true) {
            case resizeConfig.bottom && resizeConfig.left:
                resizeClassName = "dhx_window-body-pointer--bottom_left";
                break;
            case resizeConfig.bottom && resizeConfig.right:
                resizeClassName = "dhx_window-body-pointer--bottom_right";
                break;
            case resizeConfig.top && resizeConfig.left:
                resizeClassName = "dhx_window-body-pointer--top_left";
                break;
            case resizeConfig.top && resizeConfig.right:
                resizeClassName = "dhx_window-body-pointer--top-right";
                break;
            case resizeConfig.top:
                resizeClassName = "dhx_window-body-pointer--top";
                break;
            case resizeConfig.bottom:
                resizeClassName = "dhx_window-body-pointer--bottom";
                break;
            case resizeConfig.left:
                resizeClassName = "dhx_window-body-pointer--left";
                break;
            case resizeConfig.right:
                resizeClassName = "dhx_window-body-pointer--right";
                break;
        }
        document.body.classList.add("dhx_window--stop_selection");
        document.body.classList.add(resizeClassName);
        var mousemove = function (e) {
            var size = {
                width: e.pageX - left,
                height: e.pageY - top,
                left: e.pageX,
                top: e.pageY
            };
            if (resizeConfig.right) {
                if (size.width < minWidth) {
                    size.width = minWidth;
                }
                else if (size.width > window.pageXOffset + window.innerWidth - left) {
                    size.width = window.pageXOffset + window.innerWidth - left;
                }
                _this._popup.style.width = size.width + "px";
            }
            if (resizeConfig.bottom) {
                if (size.height < minHeight) {
                    size.height = minHeight;
                }
                else if (size.height > window.pageYOffset + window.innerHeight - top) {
                    size.height = window.pageYOffset + window.innerHeight - top;
                }
                _this._popup.style.height = size.height + "px";
            }
            if (resizeConfig.left) {
                if (left + width - size.left < minWidth) {
                    size.left = left + width - minWidth;
                }
                size.width = left + width - size.left;
                _this.config.left = size.left;
                _this._popup.style.left = size.left + "px";
                _this._popup.style.width = size.width + "px";
            }
            if (resizeConfig.top) {
                if (size.top < window.pageYOffset) {
                    size.top = window.pageYOffset;
                }
                else if (top + height - size.top < minHeight) {
                    size.top = top + height - minHeight;
                }
                size.height = top + height - size.top;
                _this.config.top = size.top;
                _this._popup.style.top = size.top + "px";
                _this._popup.style.height = size.height + "px";
            }
            _this.config.width = _this._popup.offsetWidth;
            _this.config.height = _this._popup.offsetHeight;
            _this.events.fire(types_1.WindowEvents.resize, [size, { left: left, top: top, height: height, width: width }, resizeConfig]);
        };
        var mouseup = function () {
            document.removeEventListener("mouseup", mouseup);
            document.removeEventListener("mousemove", mousemove);
            document.body.classList.remove("dhx_window--stop_selection");
            document.body.classList.remove(resizeClassName);
        };
        document.addEventListener("mouseup", mouseup);
        document.addEventListener("mousemove", mousemove);
    };
    Window.prototype._blockScreen = function () {
        var _this = this;
        var blocker = document.createElement("div");
        blocker.className = "dhx_window__overlay";
        document.body.appendChild(blocker);
        this._blocker = blocker;
        if (this.config.closable) {
            blocker.addEventListener("click", function () { return _this.hide(); });
            Keymanager_1.keyManager.addHotKey("escape", function () { return _this.hide(); }, this);
        }
    };
    return Window;
}());
exports.Window = Window;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WindowEvents;
(function (WindowEvents) {
    WindowEvents["resize"] = "resize";
    WindowEvents["headerDoubleClick"] = "headerdoubleclick";
    WindowEvents["move"] = "move";
    WindowEvents["afterShow"] = "aftershow";
    WindowEvents["afterHide"] = "afterhide";
    WindowEvents["beforeShow"] = "beforeshow";
    WindowEvents["beforeHide"] = "beforehide";
})(WindowEvents = exports.WindowEvents || (exports.WindowEvents = {}));


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    popups: {},
    lastActive: null,
    freeCount: 0,
    add: function (id, popup) {
        if (this.lastActive) {
            this.popups[this.lastActive].classList.remove("dhx_popup--window_active");
        }
        this.lastActive = id;
        popup.classList.add("dhx_popup--window_active");
        this.popups[id] = popup;
    },
    setActive: function (id) {
        if (id === this.lastActive) {
            return;
        }
        var popup = this.popups[id];
        if (popup) {
            if (this.lastActive) {
                this.popups[this.lastActive].classList.remove("dhx_popup--window_active");
            }
            this.lastActive = id;
            popup.classList.add("dhx_popup--window_active");
        }
    },
    openFreeWindow: function () {
        if (this.freeCount === 0) {
            document.body.classList.add("dhx_window--no-scroll");
        }
        this.freeCount++;
    },
    closeFreeWindow: function () {
        this.freeCount--;
        if (this.freeCount === 0) {
            document.body.classList.remove("dhx_window--no-scroll");
        }
    }
};


/***/ })
/******/ ]);
});if (window.dhx_legacy) { if (window.dhx){ for (var key in dhx) dhx_legacy[key] = dhx[key]; } window.dhx = dhx_legacy; delete window.dhx_legacy; }