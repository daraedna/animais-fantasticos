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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nclass initAccordion {\r\n    constructor(list) {\r\n        this.accordionList = document.querySelectorAll(list);\r\n        this.activeClass = 'ativo'\r\n    }\r\n\r\n\r\n    toggleAccordion(item) {\r\n        item.classList.toggle(this.activeClass);\r\n        item.nextElementSibling.classList.toggle(this.activeClass);\r\n    }\r\n\r\n    // adiciona os eventos ao accordion\r\n    addAccordionEvent() {\r\n        this.accordionList.forEach((item) => {\r\n            item.addEventListener('click', () => this.toggleAccordion(item));\r\n        });\r\n    }\r\n\r\n    // iniciar função\r\n    init() {\r\n        if(this.accordionList.length) {\r\n            this.toggleAccordion(this.accordionList[0]) // ativar primeiro item\r\n            this.addAccordionEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n    constructor(numeros, observerTarget, observerClass) {\r\n        this.numeros = document.querySelectorAll(numeros);\r\n        this.observerTarget = document.querySelector(observerTarget);\r\n        this.observerClass = observerClass;\r\n\r\n        this.handleMutation = this.handleMutation.bind(this);\r\n    }\r\n\r\n    static incrementarNumero(numero) {\r\n        const total = +numero.innerText;\r\n        const incremento = Math.floor(total / 100);\r\n\r\n        let start = 0;\r\n        const timer = setInterval(() => {\r\n            start += incremento\r\n            numero.innerText = start;\r\n\r\n            if (start > total) {\r\n                numero.innerText = total;\r\n                clearInterval(timer);\r\n            }\r\n        }, 25 * Math.random());\r\n    }\r\n\r\n    animaNumeros() {\r\n        this.numeros.forEach(numero => {\r\n            this.constructor.incrementarNumero(numero)\r\n        })\r\n    }\r\n\r\n    handleMutation(mutation) { //mutation é parecido com o event\r\n        if (mutation[0].target.classList.contains(this.observerClass)) {\r\n            this.observer.disconnect();\r\n            this.animaNumeros();\r\n        }\r\n    }\r\n\r\n    addMutationOberser() {\r\n        this.observer = new MutationObserver(this.handleMutation);\r\n        this.observer.observe(this.observerTarget, { attributes: true })\r\n    }\r\n\r\n    init() {\r\n        if (this.numeros.length && this.observerTarget && this.observerClass)\r\n        this.addMutationOberser();\r\n        return this;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n    const numerosGrid = document.querySelector(target);\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement('div');\r\n        div.classList.add('numero-animal');\r\n\r\n        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n\r\n        return div;\r\n    }\r\n\r\n    function preencherAnimais(animal) {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal)\r\n    }\r\n\r\n    function animaAnimaisNumeros() {\r\n        const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-numero]', '.numeros', 'ativo');\r\n        animaNumeros.init();\r\n    }\r\n\r\n    async function criarAnimais() {\r\n        try{\r\n            const animaisResponse = await fetch(url);\r\n            const animaisJSON = await animaisResponse.json();\r\n\r\n            animaisJSON.forEach(animal => preencherAnimais(animal));\r\n            animaAnimaisNumeros();\r\n        } catch(erro) {\r\n            console.log(erro);\r\n        }\r\n    }\r\n\r\n    return criarAnimais()\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n    fetch(url)\r\n    .then(response => response.json())\r\n    .then((bitcoin) => {\r\n        const btcPreco = document.querySelector(target);\r\n        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)\r\n    }).catch(erro => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nclass initModal {\r\n\r\n    constructor(botaoAbrir, botaoFechar, containerModal) {\r\n        this.botaoAbrir = document.querySelector(botaoAbrir);\r\n        this.botaoFechar = document.querySelector(botaoFechar);\r\n        this.containerModal = document.querySelector(containerModal);\r\n\r\n        // bind this ao callback para fazer referência ao objeto da classe\r\n        this.eventToggleModal = this.eventToggleModal.bind(this);\r\n        this.clickForaModal = this.clickForaModal.bind(this);\r\n    }\r\n\r\n    toggleModal(event) {\r\n        this.containerModal.classList.toggle('ativo');\r\n    }\r\n\r\n    eventToggleModal(event) {\r\n        event.preventDefault();\r\n        this.toggleModal(event);\r\n    }\r\n\r\n    clickForaModal(event) {\r\n        if (event.target === this.containerModal) {\r\n            this.toggleModal()\r\n        }\r\n    }\r\n\r\n    addModalEvent() {\r\n        this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n        this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n        this.containerModal.addEventListener('click', this.clickForaModal);\r\n    }\r\n\r\n    init() {\r\n        if (this.botaoAbrir && this.botaoFechar && this.containerModal){\r\n            this.addModalEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n    constructor(links, options) {\r\n        this.linksInternos = document.querySelectorAll(links);\r\n        if (options === undefined) {\r\n            this.options = { behavior: 'smooth', block: 'start' };\r\n        } else {\r\n            this.options = options;\r\n        }\r\n\r\n        this.scrollToSection = this.scrollToSection.bind(this);\r\n    }\r\n\r\n    scrollToSection(event) {\r\n        event.preventDefault();\r\n        const href = event.currentTarget.getAttribute('href');\r\n        const section = document.querySelector(href);\r\n        section.scrollIntoView(this.options);\r\n\r\n    }\r\n    //scroll suave tbm\r\n    //const topo = section.offsetTop;\r\n    //window.scrollTo({\r\n    //    top: topo,\r\n    //   behavior:'smooth'\r\n\r\n    //})\r\n\r\n    addLinkEvent() {\r\n        this.linksInternos.forEach((link) => {\r\n            link.addEventListener('click', (event) => {\r\n                this.scrollToSection(event);\r\n            });\r\n        });\r\n    }\r\n\r\n    init() {\r\n        if (this.linksInternos.length) {\r\n            this.addLinkEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n\r\nclass initTabNav {\r\n    constructor(menu, content) {\r\n        this.tabMenu = document.querySelectorAll(menu);\r\n        this.tabContent = document.querySelectorAll(content);\r\n        this.activeClass = 'ativo'\r\n    }\r\n\r\n    // ativa a tab de acordo com o index da lista\r\n    activeTab(index) {\r\n        this.tabContent.forEach((section) => {\r\n            section.classList.remove(this.activeClass);\r\n        });\r\n        const direcao = this.tabContent[index].dataset.anime;\r\n        this.tabContent[index].classList.add(this.activeClass, direcao);\r\n    }\r\n\r\n    // adiciona os eventos nas tabs\r\n    addTabNavEvent() {\r\n        this.tabMenu.forEach((itemMenu, index) => {\r\n            itemMenu.addEventListener('click', () => {\r\n                this.activeTab(index)\r\n            })\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if (this.tabMenu.length && this.tabContent.length) {\r\n            this.activeTab(0); // ativar primeiro item\r\n            this.addTabNavEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n    constructor(tooltips) {\r\n        this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n        this.onMouseLeave = this.onMouseLeave.bind(this);\r\n        this.onMouseMove = this.onMouseMove.bind(this);\r\n        this.onMouseOver = this.onMouseOver.bind(this);\r\n    }\r\n\r\n    onMouseMove(event) {\r\n        this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n        if (event.pageX + 240 > window.innerWidth) {\r\n            this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n        }else {\r\n            this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n        }\r\n    };\r\n\r\n    onMouseLeave({ currentTarget }) {\r\n        this.tooltipBox.remove();\r\n        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n        currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n    };\r\n\r\n    criarTooltipBox(element) {\r\n        const tooltipBox = document.createElement('div');\r\n        const text = element.getAttribute('aria-label');\r\n        tooltipBox.classList.add('tooltip');\r\n        tooltipBox.innerText = text;\r\n\r\n        document.body.appendChild(tooltipBox);\r\n        this.tooltipBox = tooltipBox;\r\n    }\r\n\r\n    onMouseOver({ currentTarget }) {\r\n\r\n        this.criarTooltipBox(currentTarget);\r\n        currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n        currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n    }\r\n\r\n    addTooltipsEvent() {\r\n        this.tooltips.forEach((item) => {\r\n            item.addEventListener('mouseover', this.onMouseOver)\r\n        });\r\n    }\r\n\r\n    init() {\r\n        if (this.tooltips.length) {\r\n            this.addTooltipsEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-tab=\"menu\"]  li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default('[data-tooltip]');\r\ntooltip.init();\r\n\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__.default)('../../animaisapi.json', '.numeros-grid');\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)('https://blockchain.info/ticker', '.btc-preco')\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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