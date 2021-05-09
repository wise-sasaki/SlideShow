/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MimeType.ts":
/*!*************************!*\
  !*** ./src/MimeType.ts ***!
  \*************************/
/*! exports provided: MimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeType", function() { return MimeType; });
var MimeType = (function () {
    function MimeType() {
    }
    MimeType.isAvailable = function (type) {
        switch (type) {
            case this.TYPE_JPG:
            case this.TYPE_PNG:
            case this.TYPE_BMP:
            case this.TYPE_GIF:
                return true;
            default:
                break;
        }
        return false;
    };
    MimeType.TYPE_JPG = "image/jpeg";
    MimeType.TYPE_PNG = "image/png";
    MimeType.TYPE_BMP = "image/bmp";
    MimeType.TYPE_GIF = "image/gif";
    return MimeType;
}());



/***/ }),

/***/ "./src/PhotoData.ts":
/*!**************************!*\
  !*** ./src/PhotoData.ts ***!
  \**************************/
/*! exports provided: PhotoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoData", function() { return PhotoData; });
var PhotoData = (function () {
    function PhotoData(file, url) {
        var _this = this;
        this.x_size = 0;
        this.y_size = 0;
        var img = new Image();
        img.src = url;
        img.onload = function () {
            _this.x_size = img.width;
            _this.y_size = img.height;
        };
        this.file_name = file.name;
        this.file_path = url;
    }
    PhotoData.prototype.setXsize = function (size) {
        this.x_size = size;
    };
    PhotoData.prototype.getXsize = function () {
        return this.x_size;
    };
    PhotoData.prototype.setYsize = function (size) {
        this.y_size = size;
    };
    PhotoData.prototype.getYsize = function () {
        return this.y_size;
    };
    PhotoData.prototype.setFilePath = function (path) {
        this.file_path = path;
    };
    PhotoData.prototype.getFIlePath = function () {
        return this.file_path;
    };
    PhotoData.prototype.setFileName = function (name) {
        this.file_name = name;
    };
    PhotoData.prototype.getFileName = function () {
        return this.file_name;
    };
    return PhotoData;
}());



/***/ }),

/***/ "./src/PhotoMode.ts":
/*!**************************!*\
  !*** ./src/PhotoMode.ts ***!
  \**************************/
/*! exports provided: PhotoMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoMode", function() { return PhotoMode; });
var PhotoMode;
(function (PhotoMode) {
    PhotoMode[PhotoMode["NORMAL"] = 0] = "NORMAL";
    PhotoMode[PhotoMode["ZOOMOUT"] = 1] = "ZOOMOUT";
    PhotoMode[PhotoMode["SLIDEIN"] = 2] = "SLIDEIN";
})(PhotoMode || (PhotoMode = {}));


/***/ }),

/***/ "./src/SlideShowFileReader.ts":
/*!************************************!*\
  !*** ./src/SlideShowFileReader.ts ***!
  \************************************/
/*! exports provided: SlideShowFileReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowFileReader", function() { return SlideShowFileReader; });
/* harmony import */ var _MimeType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MimeType */ "./src/MimeType.ts");
/* harmony import */ var _PhotoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoData */ "./src/PhotoData.ts");
/* harmony import */ var _SlideShowManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideShowManager */ "./src/SlideShowManager.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SlideShowFileReader = (function () {
    function SlideShowFileReader(file, photo) {
        this.slideShowManager = null;
        this.fileElement = file;
        this.photoAreaElement = photo;
        this.photoArray = new Array();
        this._addEventListener();
    }
    SlideShowFileReader.prototype._addEventListener = function () {
        var _this = this;
        $(this.fileElement).on('change', function (ev) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.readFiles(ev)];
                    case 1:
                        _a.sent();
                        this.slideShowManager = new _SlideShowManager__WEBPACK_IMPORTED_MODULE_2__["SlideShowManager"](this.photoAreaElement, this.photoArray);
                        return [2];
                }
            });
        }); });
    };
    SlideShowFileReader.prototype.readFiles = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var meter, meterText, fileMax, fileCount, _loop_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.slideShowManager != null) {
                    this.slideShowManager.destructor();
                }
                this.photoArray = new Array();
                meter = $("#meter");
                meterText = $("#meter-text");
                fileMax = ev.target.files.length;
                fileCount = 0;
                _loop_1 = function (i) {
                    var file = ev.target.files[i];
                    if (!_MimeType__WEBPACK_IMPORTED_MODULE_0__["MimeType"].isAvailable(file.type)) {
                        console.log( true ? file.type : undefined);
                        fileCount++;
                        return "continue";
                    }
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                        var url, photo;
                        return __generator(this, function (_a) {
                            url = fileReader.result;
                            photo = new _PhotoData__WEBPACK_IMPORTED_MODULE_1__["PhotoData"](file, url);
                            this.photoArray.push(photo);
                            this.fileSort(this.photoArray);
                            fileCount++;
                            meter.val(fileCount / fileMax * 100);
                            meterText.text(fileCount + " / " + fileMax + " Complete");
                            return [2];
                        });
                    }); };
                };
                for (i = 0; i < ev.target.files.length; i++) {
                    _loop_1(i);
                }
                return [2];
            });
        });
    };
    SlideShowFileReader.prototype.fileSort = function (array) {
        array.sort(this.compareName);
    };
    SlideShowFileReader.prototype.compareName = function (a, b) {
        if (a.getFileName() > b.getFileName()) {
            return 1;
        }
        else {
            return -1;
        }
    };
    SlideShowFileReader.prototype.getPhotData = function () {
        return this.photoArray;
    };
    return SlideShowFileReader;
}());



/***/ }),

/***/ "./src/SlideShowManager.ts":
/*!*********************************!*\
  !*** ./src/SlideShowManager.ts ***!
  \*********************************/
/*! exports provided: SlideShowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowManager", function() { return SlideShowManager; });
/* harmony import */ var _PhotoMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoMode */ "./src/PhotoMode.ts");
/* harmony import */ var _SlideShowToggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlideShowToggleMenu */ "./src/SlideShowToggleMenu.ts");


var SlideShowManager = (function () {
    function SlideShowManager(element, array) {
        this.interval = 0;
        this.resetFlg = false;
        this.endFlg = false;
        this.mode = _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL;
        this.type = 5;
        this.isLock = false;
        this.isDefaultOrder = true;
        this.photoAreaElemet = element;
        this.photoArray = array;
        this.photoCount = 0;
        this.slidshowToggleMenu = new _SlideShowToggleMenu__WEBPACK_IMPORTED_MODULE_1__["SlidshowToggleMenu"](this);
        this._addEventListener();
    }
    SlideShowManager.prototype._addEventListener = function () {
        var _this = this;
        $('#play').on('click', function () {
            $('div.howtouse').hide();
            _this.changePhoto(_this.type);
        });
        this.addChangeEventListener();
        this.addKeybordEventListener();
        this.addMousewheelEventListener();
    };
    SlideShowManager.prototype.addChangeEventListener = function () {
        var _this = this;
        $('#left-button').on('click', function () {
            if (!_this.isLock) {
                _this.photoCount--;
                _this.photoCount--;
                _this.resetFlg = true;
                _this.changePhoto(_this.type);
            }
        });
        $('#right-button').on('click', function () {
            if (!_this.isLock) {
                _this.resetFlg = true;
                _this.changePhoto(_this.type);
            }
        });
    };
    SlideShowManager.prototype.addKeybordEventListener = function () {
        var _this = this;
        $("#background-image").on('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                if (!_this.isLock) {
                    _this.photoCount--;
                    _this.photoCount--;
                    _this.resetFlg = true;
                    _this.changePhoto(_this.type);
                }
            }
            else if (e.key === 'ArrowRight') {
                if (!_this.isLock) {
                    _this.resetFlg = true;
                    _this.changePhoto(_this.type);
                }
            }
            else if (e.key === 'ArrowDown') {
                _this.isLock = _this.isLock ? false : true;
                if (_this.isLock) {
                    var lockDiv = document.createElement('div');
                    lockDiv.id = "lock";
                    lockDiv.classList.add('locked');
                    lockDiv.innerText = "Locked";
                    $('#file-area').append(lockDiv);
                }
                else {
                    $('#lock').remove();
                    _this.resetFlg = true;
                    _this.changePhoto(_this.type);
                }
            }
        });
    };
    SlideShowManager.prototype.addMousewheelEventListener = function () {
        var _this = this;
        $("#background-image").on('mousewheel', function (ev) {
            if (ev.wheelDelta > 0) {
                if (!_this.isLock) {
                    _this.photoCount--;
                    _this.photoCount--;
                    _this.resetFlg = true;
                    _this.changePhoto(_this.type);
                }
            }
            else {
                if (!_this.isLock) {
                    _this.resetFlg = true;
                    _this.changePhoto(_this.type);
                }
            }
        });
    };
    SlideShowManager.prototype.destructor = function () {
        $('#play').off('click');
        $('#left-button').off('click');
        $('right-button').off('click');
        $("#background-image").off('keydown');
        $("#background-image").off('mousewheel');
        this.endFlg = true;
        this.changePhoto(this.type);
        this.slidshowToggleMenu.destructor();
    };
    SlideShowManager.prototype.changePhoto = function (sec) {
        var _this = this;
        if (this.resetFlg) {
            clearInterval(this.interval);
            this.resetFlg = false;
        }
        else if (this.endFlg) {
            clearInterval(this.interval);
            this.endFlg = false;
            return;
        }
        this.changePhotoWrap();
        this.interval = setInterval(function () {
            _this.changePhotoWrap();
        }, sec * 1000);
    };
    SlideShowManager.prototype.changePhotoWrap = function () {
        this.countLoop();
        var photo = this.photoArray[this.photoCount];
        $(this.photoAreaElemet).empty();
        $("#background-image").css({
            'background-image': "url(" + photo.getFIlePath() + ")",
        });
        switch (this.mode) {
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL:
                this.changeByHeight(photo);
                break;
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].ZOOMOUT:
                this.changeByMoving(photo);
                break;
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].SLIDEIN:
                this.changeByMoving(photo);
                break;
            default:
                break;
        }
        if (!this.isLock) {
            if (!this.isDefaultOrder) {
                this.photoCount = Math.floor(Math.random() * this.photoArray.length);
            }
            else {
                this.photoCount++;
            }
        }
    };
    SlideShowManager.prototype.changeByHeight = function (photo) {
        $(this.photoAreaElemet).css({ "text-align": "center" });
        var areaHeight = this.photoAreaElemet.clientHeight;
        var areaWidth = this.photoAreaElemet.clientWidth;
        var url = photo.getFIlePath();
        var element = $('<img>').addClass('photo').attr('src', url);
        var size = this.calculation(photo, areaHeight, 0);
        element.width(size['photoX'] + "px");
        element.height(size['photoY'] + "px");
        if (size['photoY'] < size['photoX'] && size['photoY'] < areaHeight) {
            element.css({ "margin-top": (areaHeight - size['photoY']) / 2 + "px" });
        }
        if (areaWidth < size['photoX']) {
            var reSize = this.calculation(photo, 0, areaWidth);
            element.width(reSize['photoX'] + "px");
            element.height(reSize['photoY'] + "px");
            if (reSize['photoY'] < reSize['photoX'] && reSize['photoY'] < areaHeight) {
                element.css({ "margin-top": (areaHeight - reSize['photoY']) / 2 + "px" });
            }
        }
        $(this.photoAreaElemet).append(element);
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.type + "s" });
    };
    SlideShowManager.prototype.changeByMoving = function (photo) {
        $(this.photoAreaElemet).css({ "position": "relative" });
        var areaHeight = $(this.photoAreaElemet).height();
        var areaWidth = $(this.photoAreaElemet).width();
        var url = photo.getFIlePath();
        var photoWidth = photo.getXsize();
        var photoHeight = photo.getYsize();
        var element = $('<img>').addClass('photo').attr('src', url);
        if (photoWidth < photoHeight) {
            if (areaHeight && areaWidth) {
                var size = this.calculation(photo, 0, areaWidth);
                element.width(size['photoX'] + "px");
                var random = Math.floor(Math.random() * 11);
                if (5 < random) {
                    element.css({
                        "position": "absolute",
                        "left": "0px",
                        "top": areaHeight - size['photoY'] + "px",
                    });
                    element.addClass("animation-moveDown");
                    element.css({ "animation-duration": this.type + "s" });
                }
                else {
                    element.css({
                        "position": "absolute",
                        "left": "0px",
                        "bottom": areaHeight - size['photoY'] + "px",
                    });
                    element.addClass("animation-moveUp");
                    element.css({ "animation-duration": this.type + "s" });
                }
            }
            else {
                element.height(areaHeight + "px");
            }
        }
        else {
            if (areaHeight && areaWidth) {
                var size = this.calculation(photo, areaHeight * 2, 0);
                element.height(size['photoY'] + "px");
                element.css({
                    "position": "absolute",
                    "transform-origin": "center",
                    "left": (areaWidth / 2) - (size['photoX'] / 2) + "px",
                    "top": (areaHeight / 2) - (size['photoY'] / 2) + "px",
                });
                element.addClass("animation-scale");
                element.css({ "animation-duration": this.type + "s" });
            }
            else {
                element.height(areaHeight + "px");
            }
        }
        $(this.photoAreaElemet).append(element);
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.type + "s" });
    };
    SlideShowManager.prototype.countLoop = function () {
        if (this.photoCount < 0) {
            this.photoCount = this.photoArray.length - 1;
        }
        else if (this.photoArray.length <= this.photoCount) {
            this.photoCount = 0;
        }
    };
    SlideShowManager.prototype.calculation = function (photo, height, width) {
        var size = {};
        if (0 < height) {
            size['photoY'] = height;
            var percent = height / photo.getYsize();
            size['photoX'] = photo.getXsize() * percent;
        }
        else if (0 < width) {
            size['photoX'] = width;
            var percent = width / photo.getXsize();
            size['photoY'] = photo.getYsize() * percent;
        }
        else {
            size['photoY'] = height;
            size['photoX'] = width;
        }
        return size;
    };
    return SlideShowManager;
}());



/***/ }),

/***/ "./src/SlideShowPlayer.ts":
/*!********************************!*\
  !*** ./src/SlideShowPlayer.ts ***!
  \********************************/
/*! exports provided: SlideShowPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowPlayer", function() { return SlideShowPlayer; });
var SlideShowPlayer = (function () {
    function SlideShowPlayer(element) {
        this.button = element;
        $(this.button).prop('disabled', true);
        $('#left-side').css({ "display": "none" });
        $('#right-side').css({ "display": "none" });
        this._addEventListener();
    }
    SlideShowPlayer.prototype._addEventListener = function () {
        var _this = this;
        $('#file').on('change', function (ev) {
            if (ev.target.files.length > 0) {
                $(_this.button).prop('disabled', false);
                $('#left-side').css({ "display": "none" });
                $('#right-side').css({ "display": "none" });
            }
        });
        $('#play').on('click', function () {
            $(_this.button).prop('disabled', true);
            $('#left-side').css({ "display": "block" });
            $('#right-side').css({ "display": "block" });
        });
    };
    return SlideShowPlayer;
}());



/***/ }),

/***/ "./src/SlideShowToggleMenu.ts":
/*!************************************!*\
  !*** ./src/SlideShowToggleMenu.ts ***!
  \************************************/
/*! exports provided: SlidshowToggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidshowToggleMenu", function() { return SlidshowToggleMenu; });
/* harmony import */ var _PhotoMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoMode */ "./src/PhotoMode.ts");

var SlidshowToggleMenu = (function () {
    function SlidshowToggleMenu(slideShowManager) {
        this.slideShowManager = slideShowManager;
        this.menuInit();
        this.addTogglemenuEventListener();
    }
    SlidshowToggleMenu.prototype.menuInit = function () {
        var menuDiv = $('<div></div>');
        menuDiv.attr({
            id: "contextmenu",
            class: "menu"
        });
        var titleDiv = $('<div></div>');
        titleDiv.attr("id", "menu-title");
        titleDiv.text("Settings");
        menuDiv.append(titleDiv);
        var hr = $('<hr>');
        menuDiv.append(hr);
        var modeDiv = $('<div></div>');
        modeDiv.attr("id", "mode");
        var modeTitleDiv = $('<div></div>');
        modeTitleDiv.attr({ id: "menu-subtitle", class: "menu-subtitle" });
        modeTitleDiv.text("Mode:");
        modeDiv.append(modeTitleDiv);
        var normalDiv = $('<div></div>');
        normalDiv.attr({ id: "normal-mode", class: "menu-item" });
        var normalRadio = $('<input/>');
        normalRadio.attr({
            id: "normal",
            type: "radio",
            name: "mode",
        });
        normalRadio.prop("checked", true);
        normalDiv.append(normalRadio);
        var normalLabel = $('<label></label>');
        normalLabel.attr("for", "normal");
        normalLabel.text("Normal");
        normalDiv.append(normalLabel);
        modeDiv.append(normalDiv);
        var zoomoutDiv = $('<div></div>');
        zoomoutDiv.attr({ id: "zoomout-mode", class: "menu-item" });
        var zoomoutRadio = $('<input/>');
        zoomoutRadio.attr({
            id: "zoomout",
            type: "radio",
            name: "mode",
        });
        zoomoutDiv.append(zoomoutRadio);
        var zoomoutLabel = $('<label></label>');
        zoomoutLabel.attr("for", "zoomout");
        zoomoutLabel.text("ZoomOut");
        zoomoutDiv.append(zoomoutLabel);
        modeDiv.append(zoomoutDiv);
        var slideinDiv = $('<div></div>');
        slideinDiv.attr({ id: "slidein-mode", class: "menu-item" });
        var slideinRadio = $('<input/>');
        slideinRadio.attr({
            id: "slidein",
            type: "radio",
            name: "mode",
        });
        slideinDiv.append(slideinRadio);
        var slideinLabel = $('<label></label>');
        slideinLabel.attr("for", "slidein");
        slideinLabel.text("SlideIn");
        slideinDiv.append(slideinLabel);
        modeDiv.append(slideinDiv);
        menuDiv.append(modeDiv);
        var timeDiv = $('<div></div>');
        timeDiv.attr("id", "time");
        var timeTitleDiv = $('<div></div>');
        timeTitleDiv.attr({ id: "time-subtitle", class: "menu-subtitle" });
        timeTitleDiv.text("Time:");
        timeDiv.append(timeTitleDiv);
        var sec3Div = $('<div></div>');
        sec3Div.attr({ id: "sec3-time", class: "menu-item" });
        var sec3Radio = $('<input/>');
        sec3Radio.attr({
            id: "sec3",
            type: "radio",
            name: "time",
        });
        sec3Div.append(sec3Radio);
        var sec3Label = $('<label></label>');
        sec3Label.attr("for", "sec3");
        sec3Label.text("3s");
        sec3Div.append(sec3Label);
        timeDiv.append(sec3Div);
        var sec5Div = $('<div></div>');
        sec5Div.attr({ id: "sec5-time", class: "menu-item" });
        var sec5Radio = $('<input/>');
        sec5Radio.attr({
            id: "sec5",
            type: "radio",
            name: "time",
        });
        sec5Radio.prop("checked", true);
        sec5Div.append(sec5Radio);
        var sec5Label = $('<label></label>');
        sec5Label.attr("for", "sec5");
        sec5Label.text("5s");
        sec5Div.append(sec5Label);
        timeDiv.append(sec5Div);
        var sec10Div = $('<div></div>');
        sec10Div.attr({ id: "sec10-time", class: "menu-item" });
        var sec10Radio = $('<input/>');
        sec10Radio.attr({
            id: "sec10",
            type: "radio",
            name: "time",
        });
        sec10Div.append(sec10Radio);
        var sec10Label = $('<label></label>');
        sec10Label.attr("for", "sec10");
        sec10Label.text("10s");
        sec10Div.append(sec10Label);
        timeDiv.append(sec10Div);
        menuDiv.append(timeDiv);
        var orderDiv = $('<div></div>');
        orderDiv.attr("id", "order");
        var orderTitleDiv = $('<div></div>');
        orderTitleDiv.attr({ id: "order-subtitle", class: "menu-subtitle" });
        orderTitleDiv.text("Order:");
        orderDiv.append(orderTitleDiv);
        var defaultOrderDiv = $('<div></div>');
        defaultOrderDiv.attr({ id: "default-order", class: "menu-item" });
        var defaultOrderRadio = $('<input/>');
        defaultOrderRadio.attr({
            id: "default",
            type: "radio",
            name: "order",
        });
        defaultOrderRadio.prop("checked", true);
        defaultOrderDiv.append(defaultOrderRadio);
        var defaultOrderLabel = $('<label></label>');
        defaultOrderLabel.attr("for", "default");
        defaultOrderLabel.text("ByName");
        defaultOrderDiv.append(defaultOrderLabel);
        orderDiv.append(defaultOrderDiv);
        var randomOrderDiv = $('<div></div>');
        randomOrderDiv.attr({ id: "random-order", class: "menu-item" });
        var randomOrderRadio = $('<input/>');
        randomOrderRadio.attr({
            id: "random",
            type: "radio",
            name: "order",
        });
        randomOrderDiv.append(randomOrderRadio);
        var randomOrderLabel = $('<label></label>');
        randomOrderLabel.attr("for", "random");
        randomOrderLabel.text("ByRandom");
        randomOrderDiv.append(randomOrderLabel);
        orderDiv.append(randomOrderDiv);
        menuDiv.append(orderDiv);
        $('.setting-area').append(menuDiv);
    };
    SlidshowToggleMenu.prototype.addTogglemenuEventListener = function () {
        var _this = this;
        $('#setting').on('click', function () {
            $('#contextmenu').slideToggle();
            $('#contextmenu').toggleClass('active');
            _this.modeAddEvent($("#normal"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL);
            _this.modeAddEvent($("#zoomout"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].ZOOMOUT);
            _this.modeAddEvent($("#slidein"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].SLIDEIN);
            _this.typeAddEvent($("#sec3"), 3);
            _this.typeAddEvent($("#sec5"), 5);
            _this.typeAddEvent($("#sec10"), 10);
            _this.orderAddEvent($("#default"), true);
            _this.orderAddEvent($("#random"), false);
        });
    };
    SlidshowToggleMenu.prototype.destructor = function () {
        $('#setting').off('click');
        $("#zoomout").off('change');
        $("#slidein").off('change');
        $("#sec3").off('change');
        $("#sec5").off('change');
        $("#sec10").off('change');
        $("#default").off('change');
        $("#random").off('change');
    };
    SlidshowToggleMenu.prototype.modeAddEvent = function ($elem, mode) {
        var _this = this;
        $elem.on('change', function () {
            _this.slideShowManager.mode = mode;
        });
    };
    SlidshowToggleMenu.prototype.typeAddEvent = function ($elem, sec) {
        var _this = this;
        $elem.on('change', function () {
            _this.slideShowManager.type = sec;
            _this.slideShowManager.resetFlg = true;
            _this.slideShowManager.changePhoto(_this.slideShowManager.type);
        });
    };
    SlidshowToggleMenu.prototype.orderAddEvent = function ($elem, flg) {
        var _this = this;
        $elem.on('change', function () {
            _this.slideShowManager.isDefaultOrder = flg;
        });
    };
    return SlidshowToggleMenu;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlideShowFileReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideShowFileReader */ "./src/SlideShowFileReader.ts");
/* harmony import */ var _SlideShowPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlideShowPlayer */ "./src/SlideShowPlayer.ts");


var Main = (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var _this = this;
        var $fileArea = $('#file-area');
        var $photoArea = $('#photo-area');
        this.setDisplaySize($fileArea, $photoArea);
        $(window).on('resize', function () {
            _this.setDisplaySize($fileArea, $photoArea);
        });
        new _SlideShowFileReader__WEBPACK_IMPORTED_MODULE_0__["SlideShowFileReader"]($('#file')[0], $photoArea[0]);
        new _SlideShowPlayer__WEBPACK_IMPORTED_MODULE_1__["SlideShowPlayer"]($('#play')[0]);
    };
    Main.prototype.setDisplaySize = function ($fileArea, $photoArea) {
        var windowH = $(window).height();
        var windowW = $(window).width();
        var fileAreaH = $fileArea.height();
        if (windowH && windowW && fileAreaH) {
            $photoArea.css({
                'max-height': windowH - fileAreaH - 50 + "px",
                'height': windowH - fileAreaH - 50 + "px"
            });
        }
    };
    return Main;
}());
new Main().main();


/***/ })

/******/ });
//# sourceMappingURL=SlideShow.js.map