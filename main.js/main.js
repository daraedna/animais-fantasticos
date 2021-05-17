/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\r\n    const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n    const activeClass = 'ativo';\r\n\r\n    function activeAccordion() {\r\n        this.classList.toggle(activeClass);\r\n        this.nextElementSibling.classList.toggle(activeClass);\r\n    }\r\n\r\n    if(accordionList.length) {\r\n        accordionList[0].classList.add(activeClass);\r\n        accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n        accordionList.forEach((item) => {\r\n            item.addEventListener('click', activeAccordion);\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n    function animaNumeros() {\r\n        const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n        numeros.forEach(numero => {\r\n            const total = +numero.innerText;\r\n            const incremento = Math.floor(total / 100);\r\n\r\n            let start = 0;\r\n\r\n            const timer = setInterval(() => {\r\n                start += incremento\r\n                numero.innerText = start;\r\n\r\n                if (start > total) {\r\n                    numero.innerText = total;\r\n                    clearInterval(timer);\r\n                }\r\n            }, 25 * Math.random());\r\n        })\r\n    }\r\n    let observer;\r\n    function handleMutation(mutation) { //mutation é parecido com o event\r\n        if (mutation[0].target.classList.contains('ativo')) {\r\n            observer.disconnect();\r\n            animaNumeros();\r\n        }\r\n    }\r\n    observer = new MutationObserver(handleMutation);\r\n    const observerTarget = document.querySelector('.numeros');\r\n    observer.observe(observerTarget, { attributes: true })\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n    const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault();\r\n        this.classList.add('active');\r\n        (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__.default)(this,  ['touchstart', 'click'], () => {\r\n            this.classList.remove('active');\r\n        });\r\n    }\r\n\r\n    dropdownMenus.forEach((menu) => {\r\n        ['touchstart', 'click'].forEach((userEvent) => {\r\n            menu.addEventListener(userEvent, handleClick);\r\n        });\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFecthAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFecthAnimais() {\r\n    async function fetchAnimais(url) {\r\n        try{\r\n            const animaisResponse = await fetch(url);\r\n            const animaisJSON = await animaisResponse.json();\r\n            const numerosGrid = document.querySelector('.numeros-grid');\r\n\r\n            animaisJSON.forEach(animal => {\r\n                const divAnimal = createAnimal(animal);\r\n                numerosGrid.appendChild(divAnimal)\r\n            });\r\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        } catch(erro) {\r\n            console.log(erro);\r\n        }\r\n    }\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement('div');\r\n        div.classList.add('numero-animal');\r\n\r\n        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n\r\n        return div;\r\n    }\r\n\r\n    fetchAnimais('./animaisapi.json');\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n    fetch('https://blockchain.info/ticker')\r\n    .then(response => response.json())\r\n    .then((bitcoin) => {\r\n        const btcPreco = document.querySelector('.btc-preco');\r\n        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)\r\n    }).catch(erro => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n    const funcionamento = document.querySelector('[data-semana]');\r\n    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n\r\n    const dataAgora = new Date();\r\n    const diaAgora = dataAgora.getDay();\r\n    const horarioAgora = dataAgora.getHours();\r\n\r\n    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n\r\n    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\r\n\r\n    if (semanaAberto && horarioAberto) {\r\n        funcionamento.classList.add('aberto');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n    const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n    const menuList = document.querySelector('[data-menu=\"list\"]');\r\n    const eventos = ['click', 'touchstart'];\r\n\r\n    function openMenu() {\r\n        menuList.classList.add('active');\r\n        menuButton.classList.add('active');\r\n\r\n        (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\r\n            menuList.classList.remove('active');\r\n            menuButton.classList.remove('active');\r\n        });\r\n    }\r\n    if(menuButton) {\r\n        eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n    const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n    const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n    const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n    function toggleModal(event) {\r\n        event.preventDefault();\r\n        containerModal.classList.toggle('ativo');\r\n    }\r\n\r\n    function clickForaModal(event) {\r\n        if (event.target === this) {\r\n            toggleModal(event)\r\n        }\r\n    }\r\n\r\n    if (botaoAbrir && botaoFechar && containerModal){\r\n        botaoAbrir.addEventListener('click', toggleModal);\r\n        botaoFechar.addEventListener('click', toggleModal);\r\n        containerModal.addEventListener('click', clickForaModal);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n    const html = document.documentElement;\r\n    const outside = 'data-outside';\r\n\r\n    function handleOutsideClick(event) {\r\n        if(!element.contains(event.target)) {\r\n            element.removeAttribute(outside);\r\n            events.forEach((userEvent) => {\r\n                html.removeEventListener(userEvent, handleOutsideClick);\r\n            })\r\n            callback();\r\n        }\r\n    }\r\n\r\n    if (!element.hasAttribute(outside)) {\r\n        events.forEach((userEvent) => {\r\n            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n        });\r\n        element.setAttribute(outside, '');\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n\r\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n    const windowMetade = window.innerHeight * 0.6;\r\n\r\n    function animaScroll() {\r\n        sections.forEach((section) => {\r\n            const sectionTop = section.getBoundingClientRect().top - windowMetade;\r\n            const isSectionVisible = (sectionTop - windowMetade) < 0;\r\n\r\n            if (isSectionVisible) {\r\n                section.classList.add('ativo');\r\n            } else if (section.classList.contains('ativo')){\r\n                section.classList.remove('ativo');\r\n            }\r\n        })\r\n    }\r\n\r\n    animaScroll();\r\n    window.addEventListener('scroll', animaScroll)\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n    constructor(links, options) {\r\n        this.linksInternos = document.querySelectorAll(links);\r\n        if (options === undefined) {\r\n            this.options = { behavior: 'smooth', block: 'smart' };\r\n        } else {\r\n            this.options = options;\r\n        }\r\n    }\r\n\r\n    scrollToSection(event) {\r\n        event.preventDefault();\r\n        const href = event.currentTarget.getAttribute('href');\r\n        const section = document.querySelector(href);\r\n        section.scrollIntoView(this.options);\r\n\r\n    }\r\n    //scroll suave tbm\r\n    //const topo = section.offsetTop;\r\n    //window.scrollTo({\r\n    //    top: topo,\r\n    //   behavior:'smooth'\r\n\r\n    //})\r\n\r\n    addLinkEvent() {\r\n        this.linksInternos.forEach((link) => {\r\n            link.addEventListener('click', (event) => {\r\n                this.scrollToSection(event);\r\n            });\r\n        });\r\n    }\r\n\r\n    init() {\r\n        this.addLinkEvent();\r\n    }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n\r\nfunction initTabNav() {\r\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"]  li');\r\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n    if (tabMenu.length && tabContent.length) {\r\n        tabContent[0].classList.add('ativo');\r\n\r\n        function activeTab(index) {\r\n            tabContent.forEach((section) => {\r\n                section.classList.remove('ativo');\r\n            });\r\n            const direcao = tabContent[index].dataset.anime;\r\n            tabContent[index].classList.add('ativo', direcao);\r\n        }\r\n\r\n        tabMenu.forEach((itemMenu, index) => {\r\n            itemMenu.addEventListener('click', () => {\r\n                activeTab(index)\r\n            })\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n\r\n    const tooltips = document.querySelectorAll('[data-tooltip]');\r\n\r\n    const onMouseMove = {\r\n        handleEvent(event) {\r\n            this.tooltipBox.style.top = `${event.pageY + 20} px`;\r\n            this.tooltipBox.style.left = `${event.pageX + 20} px`;\r\n        },\r\n    };\r\n\r\n    const onMouseLeave = {\r\n        handleEvent() {\r\n            this.tooltipBox.remove();\r\n            this.element.removeEventListener('mouseleave', onMouseLeave);\r\n            this.element.removeEventListener('mousemove', onMouseMove);\r\n        },\r\n    };\r\n\r\n    function criarTooltipBox(element) {\r\n        const tooltipBox = document.createElement('div');\r\n        const text = element.getAttribute('aria-label');\r\n        tooltipBox.classList.add('tooltip');\r\n        tooltipBox.innerText = text;\r\n\r\n        document.body.appendChild(tooltipBox);\r\n        return tooltipBox;\r\n    }\r\n\r\n    function onMouseOver() {\r\n        const tooltipBox = criarTooltipBox(this);\r\n\r\n        onMouseMove.tooltipBox = tooltipBox;\r\n        onMouseLeave.tooltipBox = tooltipBox;\r\n        onMouseLeave.element = this;\r\n\r\n        this.addEventListener('mouseleave', onMouseLeave);\r\n        this.addEventListener('mousemove', onMouseMove);\r\n    }\r\n\r\n    tooltips.forEach((item) => {\r\n        item.addEventListener('mouseover', onMouseOver)\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;