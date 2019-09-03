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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderCards */ \"./src/modules/renderCards.js\");\n/* harmony import */ var _modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCatalog */ \"./src/modules/renderCatalog.js\");\n/* harmony import */ var _modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleCheckbox */ \"./src/modules/toggleCheckbox.js\");\n/* harmony import */ var _modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleCart */ \"./src/modules/toggleCart.js\");\n/* harmony import */ var _modules_addCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addCart */ \"./src/modules/addCart.js\");\n/* harmony import */ var _modules_actionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/actionPage */ \"./src/modules/actionPage.js\");\n\r\n\r\n // дописывать .js не надо в файле, вебпак понимает что берет\r\n\r\n\r\n\r\n\r\n\r\n\r\n// filter не импортируем!\r\n\r\n(async function() {\r\n    const db = await Object(_modules_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        Object(_modules_renderCards__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(db);\r\n        Object(_modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // все render лучше вначале ставить, чтобы код не поломался\r\n        Object(_modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        Object(_modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n        Object(_modules_addCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n        Object(_modules_actionPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n})();\r\n\r\n// getData().then((data) => {\r\n//     renderCards(data);\r\n//     renderCatalog(); // все render лучше вначале ставить, чтобы код не поломался\r\n//     toggleCheckbox();\r\n//     toggleCart();\r\n//     addCart();\r\n//     actionPage();\r\n// });  // второй способ -это запихнуть  getDate в самовызыв. функцию\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/actionPage.js":
/*!***********************************!*\
  !*** ./src/modules/actionPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return actionPage; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\nfunction actionPage() {\r\n    const cards = document.querySelectorAll('.goods .card'),\r\n        discountCheckbox = document.querySelector('#discount-checkbox'),\r\n        min = document.querySelector('#min'),\r\n        max = document.querySelector('#max'),\r\n        search = document. querySelector('.search-wrapper_input'),\r\n        searchBtn = document. querySelector('.search-btn');\r\n\r\n     //   фильтр по акции\r\n    discountCheckbox.addEventListener('click', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    // фильтр по цене\r\n    min.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    max.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n    // function filterPrice() {\r\n    //     cards.forEach(card => {\r\n    //         const cardPrice = card.querySelector('.card-price');\r\n    //         const price = parseFloat(cardPrice.textContent);\r\n    //         // console.log(price);\r\n    //         // console.log(max.value);\r\n    //         // console.log(min.value);\r\n    //         if ((min.value && price < min.value) || (max.value && price > max.value)) {\r\n    //             card.parentNode.style.display = 'none';\r\n    //         } else {\r\n    //             //document.querySelector('.goods').appendChild(card.parentNode);\r\n    //             card.parentNode.style.display = '';\r\n    //         }\r\n    //     });\r\n    // }    \r\n\r\n    //search\r\n    searchBtn.addEventListener('click', () => {\r\n        //const searchText = search.value;\r\n        const searchText = new RegExp(search.value.trim(), 'i'); // 'ig'\r\n        cards.forEach(card => {\r\n            const title = card.querySelector('.card-title');\r\n            if (!searchText.test(title.textContent)) {\r\n                card.parentNode.style.display = 'none';\r\n            } else {\r\n                card.parentNode.style.display = '';\r\n            }\r\n        });\r\n        search.value = '';\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/actionPage.js?");

/***/ }),

/***/ "./src/modules/addCart.js":
/*!********************************!*\
  !*** ./src/modules/addCart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addCart; });\nfunction addCart() {\r\n    const cards = document.querySelectorAll('.goods .card'),\r\n        cardWrapper = document.querySelector('.cart-wrapper'),\r\n        cardEmpty = document.getElementById('cart-empty'),\r\n        countGoods = document.querySelector('.counter');\r\n\r\n    cards.forEach((item) => {\r\n        const btn = item.querySelector('button');\r\n\r\n        btn.addEventListener('click', () => {\r\n            //console.log(item);\r\n            const cardClone = item.cloneNode(true);\r\n            cardWrapper.appendChild(cardClone);\r\n            //cardEmpty.remove();\r\n            showData();\r\n\r\n            const removeBtn = cardClone.querySelector('.btn');\r\n            removeBtn.textContent = 'Удалить из корзины';\r\n            removeBtn.addEventListener('click', () => {\r\n                cardClone.remove();\r\n                showData();\r\n            });\r\n        });\r\n\r\n    });\r\n\r\n    function showData() {\r\n        const cardsCart = cardWrapper.querySelectorAll('.card'),\r\n            cardsPrice = cardWrapper.querySelectorAll('.card-price'),\r\n            cardTotal = document.querySelector('.cart-total span');\r\n        let sum = 0;\r\n        countGoods.textContent = cardsCart.length;\r\n        //console.log(cardsCart.length);\r\n\r\n        cardsPrice.forEach(item => {\r\n            let price = parseFloat(item.textContent);   \r\n            sum += price;\r\n            console.log(sum);\r\n        });\r\n\r\n        cardTotal.textContent = sum;\r\n\r\n        if (cardsCart.length !== 0) {\r\n            cardEmpty.remove();\r\n        } else {\r\n            cardWrapper.appendChild(cardEmpty);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/addCart.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filter; });\nfunction filter() {\r\n    const cards = document.querySelectorAll('.goods .card'),\r\n        discountCheckbox = document.querySelector('#discount-checkbox'),\r\n        min = document.querySelector('#min'),\r\n        max = document.querySelector('#max'),\r\n        activeLi = document.querySelector('.catalog-list li.active');\r\n\r\n    cards.forEach(card => {\r\n        const cardPrice = card.querySelector('.card-price');\r\n        const price = parseFloat(cardPrice.textContent);\r\n        const discount = card.querySelector('.card-sale');\r\n\r\n        card.parentNode.style.display = '';\r\n\r\n        if ((min.value && price < min.value) || (max.value && price > max.value)) {\r\n            card.parentNode.style.display = 'none';\r\n        } else if (discountCheckbox.checked && !discount) {\r\n            card.parentNode.style.display = 'none';\r\n        } else if (activeLi) {\r\n            if (card.dataset.category !== activeLi.textContent) {\r\n                card.parentNode.style.display = 'none';\r\n            } \r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\nfunction getData(){\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    //console.log(fetch('../db/db.json'));\r\n    //fetch('../db/db.json') //'../db/db1.json' - тобы отловить ошибку\r\n    return fetch('../db/db.json')\r\n        .then((response) => {\r\n            if (response.ok) {\r\n                return response.json(); //(response.json()) // (response.text()) // (response)\r\n            } else {\r\n                throw new Error('Данные не были получены, ошибка: ' + response.status);\r\n            }\r\n\r\n        })\r\n        .then((data) => { //then(data => console.log(data))\r\n            //console.log(data);\r\n            //renderCards(data); //убираем эту функцию и дабавляем перед фетч return чтобы после добавления карточки функционал заработал\r\n            //b далеее при вызове функ getData добавляем then и в нем вызывваем все функции вообще обязательно return(data) ставим\r\n            return(data);\r\n        })\r\n        .catch((err) => { //catch(err => console.warn(err))\r\n            console.warn(err);\r\n            goodsWrapper.innerHTML = '<div style=\"color: red; font-size: 30px\">Упс, что-то пошло не так</div>';\r\n        });\r\n}\n\n//# sourceURL=webpack:///./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderCards; });\nfunction renderCards(data) { //передаются данные из функции getData\r\n    console.log(data);\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    data.goods.forEach(good => { //data.goods - это данные с сервера, массив goods\r\n        const card = document.createElement('div');\r\n        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';\r\n        card.innerHTML = `\r\n                                <div class=\"card\" data-category=\"${good.category}\">\r\n                                ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${good.img}')\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\" style=\"${good.sale ? 'color: red' : ''}\">${good.price} ₽</div>\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${good.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n        `;\r\n        goodsWrapper.appendChild(card);\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/renderCards.js?");

/***/ }),

/***/ "./src/modules/renderCatalog.js":
/*!**************************************!*\
  !*** ./src/modules/renderCatalog.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderCatalog; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./src/modules/filter.js\");\n\r\n\r\nfunction renderCatalog() {\r\n    // добавили сначала через дата атрибут в карточку категорию\r\n        const cards = document.querySelectorAll('.goods .card');\r\n        const catalogList = document.querySelector('.catalog-list');\r\n        const catalogWrapper = document.querySelector('.catalog');\r\n        const catalogBtn = document.querySelector('.catalog-button');\r\n        const categories = new Set();\r\n        const filterTitle = document.querySelector('.filter-title h5');\r\n    \r\n        cards.forEach(card => {\r\n            //console.dir(card); //dir- вывод в иде объекта. раскрываем его- там есть dataset? и в нем пункт category\r\n            console.dir(card.dataset.category);\r\n            categories.add(card.dataset.category);\r\n        });\r\n    \r\n        categories.forEach((item) => {\r\n            const li = document.createElement('li');\r\n            li.textContent = item;\r\n            catalogList.appendChild(li);\r\n        });\r\n        //console.log(categories);\r\n    \r\n        const allLi = catalogList.querySelectorAll('li');\r\n        // кнопка каталог вверху\r\n        catalogBtn.addEventListener('click', (event) => {\r\n            if (catalogWrapper.style.display) {\r\n                catalogWrapper.style.display = '';\r\n            } else {\r\n                catalogWrapper.style.display = 'block';\r\n            }\r\n            \r\n            if (event.target.tagName === 'LI') {\r\n                // cards.forEach(card => {\r\n                //     if (card.dataset.category === event.target.textContent) { // фильтр в каталоге\r\n                //         card.parentNode.style.display = ''; //без parentNode -при выборе в каталоге карточки будут оставаться на своем месте и будет пустое место\r\n                //     } else {\r\n                //         card.parentNode.style.display = 'none';\r\n                //     }\r\n                // });\r\n                allLi.forEach(it => {\r\n                    if (it === event.target) {\r\n                        it.classList.add('active');\r\n                    } else {\r\n                        it.classList.remove('active');\r\n                    }\r\n                });\r\n                filterTitle.textContent = event.target.textContent;\r\n                Object(_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            }\r\n        });\r\n    }\n\n//# sourceURL=webpack:///./src/modules/renderCatalog.js?");

/***/ }),

/***/ "./src/modules/toggleCart.js":
/*!***********************************!*\
  !*** ./src/modules/toggleCart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleCart; });\nfunction toggleCart() {\r\n    const btnCart = document.getElementById('cart');\r\n    const modalCart = document.querySelector('.cart');\r\n    const closeBtn = document.querySelector('.cart-close');\r\n\r\n    btnCart.addEventListener('click', () => {\r\n        modalCart.style.display = 'flex';\r\n        document.body.style.overflow = 'hidden';\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modalCart.style.display = 'none';\r\n        document.body.style.overflow = '';\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/toggleCart.js?");

/***/ }),

/***/ "./src/modules/toggleCheckbox.js":
/*!***************************************!*\
  !*** ./src/modules/toggleCheckbox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleCheckbox; });\nfunction toggleCheckbox() {\r\n    let checkbox = document.querySelector('#discount-checkbox');\r\n    checkbox.addEventListener('change', function() {\r\n        console.log(this);\r\n        if (this.checked === true) {\r\n            this.nextElementSibling.classList.add('checked');\r\n        } else {\r\n            this.nextElementSibling.classList.remove('checked'); // или toggle\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/modules/toggleCheckbox.js?");

/***/ })

/******/ });