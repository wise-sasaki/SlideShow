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
        this._xSize = 0;
        this._ySize = 0;
        var img = new Image();
        img.src = url;
        img.onload = function () {
            _this._xSize = img.width;
            _this._ySize = img.height;
        };
        this._fileName = file.name;
        this._filePath = url;
    }
    Object.defineProperty(PhotoData.prototype, "xSize", {
        get: function () {
            return this._xSize;
        },
        set: function (size) {
            this._xSize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhotoData.prototype, "ySize", {
        get: function () {
            return this._ySize;
        },
        set: function (size) {
            this._ySize = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhotoData.prototype, "filePath", {
        get: function () {
            return this._filePath;
        },
        set: function (path) {
            this._filePath = path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PhotoData.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        set: function (name) {
            this._fileName = name;
        },
        enumerable: false,
        configurable: true
    });
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

/***/ "./src/SlideShowManager.ts":
/*!*********************************!*\
  !*** ./src/SlideShowManager.ts ***!
  \*********************************/
/*! exports provided: SlideShowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowManager", function() { return SlideShowManager; });
/* harmony import */ var _SsToggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SsToggleMenu */ "./src/SsToggleMenu.ts");
/* harmony import */ var _SsPhotoChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsPhotoChange */ "./src/SsPhotoChange.ts");
/* harmony import */ var _SsStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SsStatus */ "./src/SsStatus.ts");



var SlideShowManager = (function () {
    function SlideShowManager(element, array) {
        this.toggleMenu = new _SsToggleMenu__WEBPACK_IMPORTED_MODULE_0__["SsToggleMenu"](this);
        this.change = new _SsPhotoChange__WEBPACK_IMPORTED_MODULE_1__["SsPhotoChange"](element, array);
        this._addEventListener();
    }
    SlideShowManager.prototype._addEventListener = function () {
        var _this = this;
        $('#play').on('click', function () {
            $('div.explanation').hide();
            _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
        });
        this.addChangeEventListener();
        this.addKeybordEventListener();
        this.addMousewheelEventListener();
    };
    SlideShowManager.prototype.addChangeEventListener = function () {
        var _this = this;
        $('#left-button').on('click', function () {
            if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
            }
        });
        $('#right-button').on('click', function () {
            if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
            }
        });
    };
    SlideShowManager.prototype.addKeybordEventListener = function () {
        var _this = this;
        $("#slideshow-wrap").on('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                    _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
                }
            }
            else if (e.key === 'ArrowRight') {
                if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                    _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
                }
            }
            else if (e.key === 'ArrowDown') {
                _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock = _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock ? false : true;
                if (_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                    var lockDiv = document.createElement('div');
                    lockDiv.id = "lock";
                    lockDiv.classList.add('locked');
                    lockDiv.innerText = "Locked";
                    $('#file-area').append(lockDiv);
                }
                else {
                    $('#lock').remove();
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                    _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
                }
            }
        });
    };
    SlideShowManager.prototype.addMousewheelEventListener = function () {
        var _this = this;
        $("#slideshow-wrap").on('mousewheel', function (ev) {
            if (ev.originalEvent.wheelDelta > 0) {
                if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].subCount();
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                    _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
                }
            }
            else {
                if (!_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isLock) {
                    _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].reset();
                    _this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
                }
            }
        });
    };
    SlideShowManager.prototype.destructor = function () {
        $('#play').off('click');
        $('#left-button').off('click');
        $('#right-button').off('click');
        $("#slideshow-wrap").off('keydown');
        $("#slideshow-wrap").off('mousewheel');
        _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].endFlg = true;
        this.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].time);
        this.toggleMenu.destructor();
    };
    SlideShowManager.prototype.changePhoto = function (sec) {
        var _this = this;
        if (_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].resetFlg) {
            clearInterval(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].interval);
            _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].interval = null;
            _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].resetFlg = false;
        }
        else if (_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].endFlg) {
            clearInterval(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].interval);
            _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].interval = null;
            _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].endFlg = false;
            return;
        }
        this.change.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].mode, sec);
        _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].interval = setInterval(function () {
            _this.change.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].mode, sec);
        }, sec * 1000);
    };
    SlideShowManager.prototype.changeOrder = function (order) {
        _SsStatus__WEBPACK_IMPORTED_MODULE_2__["SsStatus"].isDefaultOrder = order;
    };
    return SlideShowManager;
}());



/***/ }),

/***/ "./src/SsDomCreate.ts":
/*!****************************!*\
  !*** ./src/SsDomCreate.ts ***!
  \****************************/
/*! exports provided: SsDomCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsDomCreate", function() { return SsDomCreate; });
var SsDomCreate = (function () {
    function SsDomCreate() {
        this.createDom();
    }
    SsDomCreate.prototype.createDom = function () {
        var element = $("#slideshow-wrap")[0];
        if (!element) {
            var slideshowWrap = $("<div></div>");
            slideshowWrap.attr({ id: "slideshow-wrap", class: "background-image" });
            var fileArea = $("<div></div>");
            fileArea.attr({ id: "file-area" });
            var fileAreaItem1 = $("<div></div>");
            fileAreaItem1.attr({ class: "file-area-item" });
            var fileDialog = $("<input webkitdirectory multiple />");
            fileDialog.attr({
                id: "file",
                type: "file",
                title: "読み込んだファイルは、サーバーにアップロードされません。",
            });
            fileAreaItem1.append(fileDialog);
            fileArea.append(fileAreaItem1);
            var fileAreaItem2 = $("<div></div>");
            fileAreaItem2.attr({ class: "file-area-item" });
            var playButton = $("<button></button>");
            playButton.attr({ id: "play", title: "再生ボタン" });
            var buttonIcon = $("<span></span>");
            buttonIcon.attr({ class: "ui-icon ui-icon-play" });
            playButton.append(buttonIcon);
            fileAreaItem2.append(playButton);
            fileArea.append(fileAreaItem2);
            var hr = $("<hr>");
            hr.attr({ class: "line" });
            fileArea.append(hr);
            slideshowWrap.append(fileArea);
            var settingArea = $("<div></div>");
            settingArea.attr({ class: "setting-area" });
            var settingButton = $("<button></button>");
            settingButton.attr({ id: "setting", title: "設定ボタン" });
            var settingButtonIcon = $("<span></span>");
            settingButtonIcon.attr({ class: "ui-icon ui-icon-gear" });
            settingButton.append(settingButtonIcon);
            settingArea.append(settingButton);
            slideshowWrap.append(settingArea);
            var displayArea = $("<div></div>");
            displayArea.attr({ id: "display-area" });
            var explanationText = $("<div></div>");
            explanationText.attr({ class: "explanation" });
            explanationText.html("&lt;説明&gt;<br />"
                + "画像ファイルをスライドショーの様に順番に表示するアプリケーションです。<br />"
                + "右上の設定ボタンから表示方法、表示時間の変更ができます。<br />"
                + "読み込んだファイルは、サーバーにアップロードされません。<br />"
                + "スマートフォンからもご利用頂けます。<br />"
                + "<br />"
                + "&lt;explanation&gt;<br />"
                + "It is an application that displays image files in order like a slide show.<br />"
                + "You can change the display method and display time from the setting button in the upper right.<br />"
                + "The loaded file is not uploaded to the server.<br />"
                + "It can also be used from a smartphone.<br />");
            displayArea.append(explanationText);
            var leftButtonDiv = $("<div></div>");
            leftButtonDiv.attr({ id: "left-side", class: "hidden-area" });
            var leftButton = $("<div></div>");
            leftButton.attr({ id: "left-button", class: "change-button button-left" });
            leftButtonDiv.append(leftButton);
            displayArea.append(leftButtonDiv);
            var rightButtonDiv = $("<div></div>");
            rightButtonDiv.attr({ id: "right-side", class: "hidden-area" });
            var rightButton = $("<div></div>");
            rightButton.attr({ id: "right-button", class: "change-button button-right" });
            rightButtonDiv.append(rightButton);
            displayArea.append(rightButtonDiv);
            var photoArea = $("<div></div>");
            photoArea.attr({ id: "photo-area" });
            displayArea.append(photoArea);
            slideshowWrap.append(displayArea);
            $('body').append(slideshowWrap);
        }
    };
    return SsDomCreate;
}());



/***/ }),

/***/ "./src/SsFileReader.ts":
/*!*****************************!*\
  !*** ./src/SsFileReader.ts ***!
  \*****************************/
/*! exports provided: SsFileReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsFileReader", function() { return SsFileReader; });
/* harmony import */ var _MimeType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MimeType */ "./src/MimeType.ts");
/* harmony import */ var _PhotoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoData */ "./src/PhotoData.ts");
/* harmony import */ var _SlideShowManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideShowManager */ "./src/SlideShowManager.ts");
/* harmony import */ var _SsProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SsProgressBar */ "./src/SsProgressBar.ts");
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




var SsFileReader = (function () {
    function SsFileReader(file, photo) {
        this.slideShowManager = null;
        this.fileElement = file;
        this.photoAreaElement = photo;
        this.photoArray = new Array();
        this.progressBar = new _SsProgressBar__WEBPACK_IMPORTED_MODULE_3__["SsProgressBar"](photo);
        this._addEventListener();
    }
    SsFileReader.prototype._addEventListener = function () {
        var _this = this;
        $(this.fileElement).on('change', function (ev) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._readFiles(ev)];
                    case 1:
                        _a.sent();
                        this.slideShowManager = new _SlideShowManager__WEBPACK_IMPORTED_MODULE_2__["SlideShowManager"](this.photoAreaElement, this.photoArray);
                        return [2];
                }
            });
        }); });
    };
    SsFileReader.prototype._readFiles = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var fileMax, fileCount, _loop_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.slideShowManager != null) {
                    this.slideShowManager.destructor();
                }
                this.photoArray = new Array();
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
                        var _this = this;
                        return __generator(this, function (_a) {
                            url = fileReader.result;
                            photo = new _PhotoData__WEBPACK_IMPORTED_MODULE_1__["PhotoData"](file, url);
                            this.photoArray.push(photo);
                            this._fileSort(this.photoArray);
                            fileCount++;
                            this.progressBar.value(fileCount / fileMax * 100);
                            this.progressBar.text(fileCount + " / " + fileMax + " Complete");
                            if (fileMax == fileCount) {
                                setTimeout(function () {
                                    _this.progressBar.hide();
                                }, 500);
                            }
                            else {
                                this.progressBar.show();
                            }
                            return [2];
                        });
                    }); };
                };
                for (i = 0; i < fileMax; i++) {
                    _loop_1(i);
                }
                return [2];
            });
        });
    };
    SsFileReader.prototype._fileSort = function (array) {
        array.sort(this._compareName);
    };
    SsFileReader.prototype._compareName = function (a, b) {
        if (a.fileName > b.fileName) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return SsFileReader;
}());



/***/ }),

/***/ "./src/SsPhotoChange.ts":
/*!******************************!*\
  !*** ./src/SsPhotoChange.ts ***!
  \******************************/
/*! exports provided: SsPhotoChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsPhotoChange", function() { return SsPhotoChange; });
/* harmony import */ var _PhotoMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoMode */ "./src/PhotoMode.ts");
/* harmony import */ var _SsStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsStatus */ "./src/SsStatus.ts");


var SsPhotoChange = (function () {
    function SsPhotoChange(element, array) {
        this.time = 5;
        this.photoAreaElemet = element;
        this.photoArray = array;
        _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount = 0;
    }
    SsPhotoChange.prototype.changePhoto = function (mode, time) {
        this.time = time;
        this.countLoop();
        var photo = this.photoArray[_SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount];
        $(this.photoAreaElemet).empty();
        $("#slideshow-wrap").css({
            'background-image': "url(" + photo.filePath + ")",
        });
        switch (mode) {
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL:
                this.changeByHeight(photo);
                break;
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].ZOOMOUT:
                this.changeByZoomOut(photo);
                break;
            case _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].SLIDEIN:
                this.changeBySlideIn(photo);
                break;
            default:
                break;
        }
        if (!_SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].isLock) {
            if (!_SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].isDefaultOrder) {
                _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount = Math.floor(Math.random() * this.photoArray.length);
            }
            else {
                _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].addCount();
            }
        }
    };
    SsPhotoChange.prototype.changeByHeight = function (photo) {
        $(this.photoAreaElemet).css({ "text-align": "center" });
        var areaHeight = $(this.photoAreaElemet).height();
        var areaWidth = $(this.photoAreaElemet).width();
        var url = photo.filePath;
        var element = $('<img>').addClass('photo').attr('src', url);
        if (areaHeight && areaWidth) {
            var size = this.calculation(photo, areaHeight, 0);
            element.width(size['photoX'] + "px");
            element.height(size['photoY'] + "px");
            if (areaWidth < size['photoX']) {
                var reSize = this.calculation(photo, 0, areaWidth);
                element.width(reSize['photoX'] + "px");
                element.height(reSize['photoY'] + "px");
            }
        }
        else {
            element.height(areaHeight + "px");
        }
        $(this.photoAreaElemet).append(element);
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.changeByZoomOut = function (photo) {
        $(this.photoAreaElemet).css({ "position": "relative" });
        var areaHeight = $(this.photoAreaElemet).height();
        var areaWidth = $(this.photoAreaElemet).width();
        var url = photo.filePath;
        var photoWidth = photo.xSize;
        var photoHeight = photo.ySize;
        var element = $('<img>').addClass('photo').attr('src', url);
        if (photoWidth < photoHeight) {
            if (areaHeight && areaWidth) {
                var size = this.calculation(photo, areaHeight * 2, 0);
                element.height(size['photoY'] + "px");
                this.animationScale(element, (areaWidth / 2) - (size['photoX'] / 2), (areaHeight / 2) - (size['photoY'] / 2));
            }
            else {
                element.height(areaHeight + "px");
            }
        }
        else {
            if (areaHeight && areaWidth) {
                if (areaHeight < areaWidth) {
                    var size = this.calculation(photo, areaHeight * 2, 0);
                    element.height(size['photoY'] + "px");
                    this.animationScale(element, (areaWidth / 2) - (size['photoX'] / 2), (areaHeight / 2) - (size['photoY'] / 2));
                }
                else {
                    var size = this.calculation(photo, 0, areaWidth * 2);
                    element.width(size['photoX'] + "px");
                    this.animationScale(element, (areaWidth / 2) - (size['photoX'] / 2), (areaHeight / 2) - (size['photoY'] / 2));
                }
            }
            else {
                element.width(areaWidth + "px");
            }
        }
        $(this.photoAreaElemet).append(element);
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.changeBySlideIn = function (photo) {
        $(this.photoAreaElemet).css({ "position": "relative" });
        var areaHeight = $(this.photoAreaElemet).height();
        var areaWidth = $(this.photoAreaElemet).width();
        var url = photo.filePath;
        var photoWidth = photo.xSize;
        var photoHeight = photo.ySize;
        var element = $('<img>').addClass('photo').attr('src', url);
        if (photoWidth < photoHeight) {
            if (areaHeight && areaWidth) {
                var size = this.calculation(photo, 0, areaWidth);
                element.width(size['photoX'] + "px");
                var random = Math.floor(Math.random() * 11);
                if (5 < random) {
                    if (areaHeight < areaWidth) {
                        this.animationMoveDown(element, areaHeight - size['photoY']);
                    }
                    else {
                        if (areaHeight < size['photoY']) {
                            this.animationMoveDown(element, areaHeight - size['photoY']);
                        }
                    }
                }
                else {
                    if (areaHeight < areaWidth) {
                        this.animationMoveUp(element, areaHeight - size['photoY']);
                    }
                    else {
                        if (areaHeight < size['photoY']) {
                            this.animationMoveUp(element, areaHeight - size['photoY']);
                        }
                    }
                }
            }
            else {
                element.height(areaHeight + "px");
            }
        }
        else {
            if (areaHeight && areaWidth) {
                var random = Math.floor(Math.random() * 11);
                if (5 < random) {
                    if (areaHeight < areaWidth) {
                        var size = this.calculation(photo, 0, areaWidth);
                        element.width(size['photoX'] + "px");
                        this.animationMoveDown(element, areaHeight - size['photoY']);
                    }
                    else {
                        var size = this.calculation(photo, areaHeight, 0);
                        element.height(size['photoY'] + "px");
                        this.animationMoveRight(element, areaWidth - size['photoX']);
                    }
                }
                else {
                    if (areaHeight < areaWidth) {
                        var size = this.calculation(photo, 0, areaWidth);
                        element.width(size['photoX'] + "px");
                        this.animationMoveUp(element, areaHeight - size['photoY']);
                    }
                    else {
                        var size = this.calculation(photo, areaHeight, 0);
                        element.height(size['photoY'] + "px");
                        this.animationMoveLeft(element, areaWidth - size['photoX']);
                    }
                }
            }
            else {
                element.width(areaWidth + "px");
            }
        }
        $(this.photoAreaElemet).append(element);
        element.addClass("animation-fadein");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.animationScale = function (element, rangeX, rangeY) {
        element.css({
            "position": "absolute",
            "transform-origin": "center",
            "left": rangeX + "px",
            "top": rangeY + "px",
        });
        element.addClass("animation-scale");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.animationMoveDown = function (element, range) {
        element.css({
            "position": "absolute",
            "left": "0px",
            "top": range + "px",
        });
        element.addClass("animation-moveDown");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.animationMoveUp = function (element, range) {
        element.css({
            "position": "absolute",
            "left": "0px",
            "bottom": range + "px",
        });
        element.addClass("animation-moveUp");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.animationMoveLeft = function (element, range) {
        element.css({
            "position": "absolute",
            "right": range + "px",
            "top": "0px",
        });
        element.addClass("animation-moveLeft");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.animationMoveRight = function (element, range) {
        element.css({
            "position": "absolute",
            "left": range + "px",
            "top": "0px",
        });
        element.addClass("animation-moveRight");
        element.css({ "animation-duration": this.time + "s" });
    };
    SsPhotoChange.prototype.countLoop = function () {
        if (_SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount < 0) {
            _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount = this.photoArray.length - 1;
        }
        else if (this.photoArray.length <= _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount) {
            _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].photoCount = 0;
        }
    };
    SsPhotoChange.prototype.calculation = function (photo, height, width) {
        var size = {};
        if (0 < height) {
            size['photoY'] = height;
            var percent = height / photo.ySize;
            size['photoX'] = photo.xSize * percent;
        }
        else if (0 < width) {
            size['photoX'] = width;
            var percent = width / photo.xSize;
            size['photoY'] = photo.ySize * percent;
        }
        else {
            throw Error("Either argument should be 0. height or width");
        }
        return size;
    };
    return SsPhotoChange;
}());



/***/ }),

/***/ "./src/SsPlayButton.ts":
/*!*****************************!*\
  !*** ./src/SsPlayButton.ts ***!
  \*****************************/
/*! exports provided: SsPlayButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsPlayButton", function() { return SsPlayButton; });
var SsPlayButton = (function () {
    function SsPlayButton(element) {
        this.button = element;
        $(this.button).prop('disabled', true);
        $('#left-side').css({ "display": "none" });
        $('#right-side').css({ "display": "none" });
        this._addEventListener();
    }
    SsPlayButton.prototype._addEventListener = function () {
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
    return SsPlayButton;
}());



/***/ }),

/***/ "./src/SsProgressBar.ts":
/*!******************************!*\
  !*** ./src/SsProgressBar.ts ***!
  \******************************/
/*! exports provided: SsProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsProgressBar", function() { return SsProgressBar; });
var SsProgressBar = (function () {
    function SsProgressBar(photo) {
        this.$photoElement = $(photo);
        this._meterDomCreate();
        this.hide();
    }
    SsProgressBar.prototype._meterDomCreate = function () {
        var progressBarArea = $("<div></div>");
        progressBarArea.attr({ id: "progress-bar-area" });
        var progress = $("<progress></progress>");
        progress.attr({ id: "meter", max: "100", value: "0" });
        progressBarArea.append(progress);
        var meterText = $("<label></label>");
        meterText.attr({ id: "meter-text", for: "meter" });
        progressBarArea.append(meterText);
        this.$photoElement.append(progressBarArea);
    };
    SsProgressBar.prototype.hide = function () {
        $("#progress-bar-area").hide();
    };
    SsProgressBar.prototype.show = function () {
        $("#progress-bar-area").show();
    };
    SsProgressBar.prototype.value = function (value) {
        $("#meter").val(value);
    };
    SsProgressBar.prototype.text = function (text) {
        $("#meter-text").text(text);
    };
    return SsProgressBar;
}());



/***/ }),

/***/ "./src/SsStatus.ts":
/*!*************************!*\
  !*** ./src/SsStatus.ts ***!
  \*************************/
/*! exports provided: SsStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsStatus", function() { return SsStatus; });
/* harmony import */ var _PhotoMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoMode */ "./src/PhotoMode.ts");

var SsStatus = (function () {
    function SsStatus() {
    }
    Object.defineProperty(SsStatus, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (interval) {
            this._interval = interval;
        },
        enumerable: false,
        configurable: true
    });
    SsStatus.reset = function () {
        this._resetFlg = true;
    };
    Object.defineProperty(SsStatus, "resetFlg", {
        get: function () {
            return this._resetFlg;
        },
        set: function (resetFlg) {
            this._resetFlg = resetFlg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsStatus, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsStatus, "endFlg", {
        get: function () {
            return this._endFlg;
        },
        set: function (endFlg) {
            this._endFlg = endFlg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsStatus, "time", {
        get: function () {
            return this._time;
        },
        set: function (time) {
            this._time = time;
        },
        enumerable: false,
        configurable: true
    });
    SsStatus.addCount = function () {
        this._photoCount++;
    };
    SsStatus.subCount = function () {
        this._photoCount--;
    };
    Object.defineProperty(SsStatus, "photoCount", {
        get: function () {
            return this._photoCount;
        },
        set: function (count) {
            this._photoCount = count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsStatus, "isLock", {
        get: function () {
            return this._isLock;
        },
        set: function (lock) {
            this._isLock = lock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsStatus, "isDefaultOrder", {
        get: function () {
            return this._isDefaultOrder;
        },
        set: function (order) {
            this._isDefaultOrder = order;
        },
        enumerable: false,
        configurable: true
    });
    SsStatus._interval = null;
    SsStatus._resetFlg = false;
    SsStatus._endFlg = false;
    SsStatus._mode = _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL;
    SsStatus._time = 5;
    SsStatus._isLock = false;
    SsStatus._isDefaultOrder = true;
    return SsStatus;
}());



/***/ }),

/***/ "./src/SsToggleMenu.ts":
/*!*****************************!*\
  !*** ./src/SsToggleMenu.ts ***!
  \*****************************/
/*! exports provided: SsToggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsToggleMenu", function() { return SsToggleMenu; });
/* harmony import */ var _PhotoMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoMode */ "./src/PhotoMode.ts");
/* harmony import */ var _SsStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsStatus */ "./src/SsStatus.ts");


var SsToggleMenu = (function () {
    function SsToggleMenu(manager) {
        this.slideShowManager = manager;
        this.menuInit();
        this.addTogglemenuEventListener();
    }
    SsToggleMenu.prototype.menuInit = function () {
        $('#toggle-menu').remove();
        var menuDiv = $('<div></div>');
        menuDiv.attr({
            id: "toggle-menu",
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
    SsToggleMenu.prototype.addTogglemenuEventListener = function () {
        $('#setting').on('click', function () {
            $('#toggle-menu').slideToggle();
            $('#toggle-menu').toggleClass('active');
        });
        this.modeAddEvent($("#normal"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].NORMAL);
        this.modeAddEvent($("#zoomout"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].ZOOMOUT);
        this.modeAddEvent($("#slidein"), _PhotoMode__WEBPACK_IMPORTED_MODULE_0__["PhotoMode"].SLIDEIN);
        this.timeAddEvent($("#sec3"), 3);
        this.timeAddEvent($("#sec5"), 5);
        this.timeAddEvent($("#sec10"), 10);
        this.orderAddEvent($("#default"), true);
        this.orderAddEvent($("#random"), false);
    };
    SsToggleMenu.prototype.destructor = function () {
        $('#setting').off('click');
        $("#zoomout").off('change');
        $("#slidein").off('change');
        $("#sec3").off('change');
        $("#sec5").off('change');
        $("#sec10").off('change');
        $("#default").off('change');
        $("#random").off('change');
    };
    SsToggleMenu.prototype.modeAddEvent = function ($elem, mode) {
        $elem.on('change', function () {
            _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].mode = mode;
        });
    };
    SsToggleMenu.prototype.timeAddEvent = function ($elem, sec) {
        var _this = this;
        $elem.on('change', function () {
            _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].time = sec;
            _SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].reset();
            _this.slideShowManager.changePhoto(_SsStatus__WEBPACK_IMPORTED_MODULE_1__["SsStatus"].time);
        });
    };
    SsToggleMenu.prototype.orderAddEvent = function ($elem, flg) {
        var _this = this;
        $elem.on('change', function () {
            _this.slideShowManager.changeOrder(flg);
        });
    };
    return SsToggleMenu;
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
/* harmony import */ var _SsDomCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SsDomCreate */ "./src/SsDomCreate.ts");
/* harmony import */ var _SsFileReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsFileReader */ "./src/SsFileReader.ts");
/* harmony import */ var _SsPlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SsPlayButton */ "./src/SsPlayButton.ts");



var Main = (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        var _this = this;
        new _SsDomCreate__WEBPACK_IMPORTED_MODULE_0__["SsDomCreate"]();
        var $fileArea = $('#file-area');
        var $photoArea = $('#photo-area');
        this.setDisplaySize($fileArea, $photoArea);
        $(window).on('resize', function () {
            _this.setDisplaySize($fileArea, $photoArea);
        });
        new _SsFileReader__WEBPACK_IMPORTED_MODULE_1__["SsFileReader"]($('#file')[0], $photoArea[0]);
        new _SsPlayButton__WEBPACK_IMPORTED_MODULE_2__["SsPlayButton"]($('#play')[0]);
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
$(window).on('load', function () {
    new Main().main();
});


/***/ })

/******/ });
//# sourceMappingURL=SlideShow.js.map