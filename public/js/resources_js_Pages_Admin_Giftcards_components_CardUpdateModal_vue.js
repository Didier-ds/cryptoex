"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Giftcards_components_CardUpdateModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quasar */ "./node_modules/quasar/dist/quasar.esm.prod.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['toggleModal'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var $q = (0,quasar__WEBPACK_IMPORTED_MODULE_1__.useQuasar)(); // import Modal from '@/Jetstream/Modal.vue'
    // import CategoryCard from '@/components/Admin/CategoryCard.vue'
    // const props = defineProps({
    //     categories: {
    //         type: Array,
    //         default: () => [],
    //     },
    //     cardname: {
    //         type: Object,
    //         default: () => {},
    //     },
    // })

    var closeModal = function closeModal() {
      emit('toggleModal');
    };

    var form = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      name: '',
      type: '',
      country: '',
      rate: '',
      min: 50,
      max: 100
    });
    var range = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.ref)({
      min: 50,
      max: 100
    });

    var submit = function submit() {
      // form.filename = `https://drive.google.com/uc?id=${form.filename}`
      var _range$value = range.value,
          min = _range$value.min,
          max = _range$value.max;
      form.min = min;
      form.max = max;
      form.transform(function (data) {
        return _objectSpread({}, data);
      }) // eslint-disable-next-line no-undef
      .post("/admin/giftcards/create", {
        onSuccess: function onSuccess() {
          form.reset();
          $q.notify({
            type: 'positive',
            message: 'Receipt Created',
            position: 'top-right'
          });
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    };

    var __returned__ = {
      $q: $q,
      emit: emit,
      closeModal: closeModal,
      form: form,
      range: range,
      submit: submit,
      ref: _utils__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: _utils__WEBPACK_IMPORTED_MODULE_0__.computed,
      useForm: _utils__WEBPACK_IMPORTED_MODULE_0__.useForm,
      useQuasar: quasar__WEBPACK_IMPORTED_MODULE_1__.useQuasar
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1a95de40"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "box",
  "class": "w-11/12 mx-auto p-2 z-20 rounded-sm"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Modal", -1
  /* HOISTED */
  );
});

var _hoisted_3 = ["onSubmit"];

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "my-1 work font-medium"
  }, "Card Price Range", -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "q-mt-xl"
};
var _hoisted_6 = {
  "class": "grid grid-cols-2"
};
var _hoisted_7 = {
  "class": "mb-2"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "type",
    "class": "my-1 work font-medium pb-2"
  }, " Card Rate ", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "flex p-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_range = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-range");

  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");

  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "overlay",
    onClick: $setup.closeModal
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_range, {
    name: "price_range",
    modelValue: $setup.range,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.range = $event;
    }),
    min: 0,
    max: 1000,
    "label-always": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
    modelValue: $setup.range.min,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.range.min = $event;
    }),
    "class": "m-2 px-2 border rounded",
    type: "number",
    dense: "",
    borderless: "",
    label: "min"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
    modelValue: $setup.range.max,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.range.max = $event;
    }),
    "class": "m-2 px-2 border rounded",
    type: "number",
    dense: "",
    borderless: "",
    label: "max"
  }, null, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
    modelValue: $setup.form.rate,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.rate = $event;
    }),
    "class": "px-2 border rounded",
    type: "number",
    dense: "",
    borderless: "",
    label: "rate"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <q-input @update:model-value=\"val => { form.image = val[0] }\" class=\"m-2\" standout type=\"file\" @change=\"handleChange\" outlined label=\"icon_url\"/> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
    color: "primary",
    label: "Submit",
    type: "submit",
    disabled: $setup.form.processing,
    "class": "mx-auto",
    "no-cap": ""
  }, null, 8
  /* PROPS */
  , ["disabled"])])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3)])]);
}

/***/ }),

/***/ "./resources/js/utils/Loading.js":
/*!***************************************!*\
  !*** ./resources/js/utils/Loading.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

  var toggleLoader = function toggleLoader() {
    isLoading.value = !isLoading.value;
  };

  return {
    isLoading: isLoading,
    toggleLoader: toggleLoader
  };
}

/***/ }),

/***/ "./resources/js/utils/breakpoints.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/breakpoints.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tablet": () => (/* binding */ tablet)
/* harmony export */ });
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");

var breakpoints = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_0__.useBreakpoints)({
  sm: '640px',
  md: '769px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
});
var tablet = breakpoints.greater('md');


/***/ }),

/***/ "./resources/js/utils/cards.js":
/*!*************************************!*\
  !*** ./resources/js/utils/cards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExactCardImg": () => (/* binding */ ExactCardImg)
/* harmony export */ });
var ExactCardImg = function ExactCardImg(cardName) {
  var allCardImgName = ['amazon', 'steam', 'best buy', 'itunes', 'walmart', 'sephora', 'american express', 'ebay', 'gamestop', 'google play', 'greendot', 'macy', 'playstation', 'sephora', 'nike', 'razer gold', 'sephora', 'target', 'xbox']; // let exactImg = null;
  // let card = this.card.card.name;

  var exactName = allCardImgName.find(function (image) {
    return image.toLowerCase().indexOf(cardName.toLowerCase()) >= 0;
  });
  return exactName === undefined ? 'Logo1' : exactName; // if (exactName === undefined) {
  //     return 'Logo1'
  // } else {
  //     return exactName;
  // }
};

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "watch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "Head": () => (/* reexport safe */ _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.Head),
/* harmony export */   "statusColor": () => (/* binding */ statusColor),
/* harmony export */   "reactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "tablet": () => (/* reexport safe */ _breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.tablet),
/* harmony export */   "computed": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "onMounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "usePage": () => (/* reexport safe */ _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.usePage),
/* harmony export */   "stepsCrementer": () => (/* reexport safe */ _stepsCrementer_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Inertia": () => (/* reexport safe */ _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia),
/* harmony export */   "loader": () => (/* reexport safe */ _Loading_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useForm": () => (/* reexport safe */ _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm),
/* harmony export */   "ExactCardImg": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_2__.ExactCardImg),
/* harmony export */   "isValidEmail": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_7__.isValidEmail),
/* harmony export */   "isValidFullName": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_7__.isValidFullName),
/* harmony export */   "confirmPassword": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_7__.confirmPassword),
/* harmony export */   "isValidPWd": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_7__.isValidPWd)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./resources/js/utils/cards.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakpoints.js */ "./resources/js/utils/breakpoints.js");
/* harmony import */ var _stepsCrementer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepsCrementer.js */ "./resources/js/utils/stepsCrementer.js");
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loading.js */ "./resources/js/utils/Loading.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate.js */ "./resources/js/utils/validate.js");









var statusColor = function statusColor(status) {
  var color;

  switch (status) {
    case 'pending':
      color = 'orange';
      break;

    case 'paid':
      color = 'green';
      break;

    case 'cancelled':
      color = 'red';
      break;

    default:
      color = 'orange';
  }

  return color;
};



/***/ }),

/***/ "./resources/js/utils/stepsCrementer.js":
/*!**********************************************!*\
  !*** ./resources/js/utils/stepsCrementer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var currentStep = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);

  var nextStep = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(loader) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(currentStep.value >= 2)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              loader();
              _context.next = 5;
              return new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(currentStep.value++);
                  window.scrollTo(0, 0);
                }, 1000);
              });

            case 5:
              loader();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function nextStep(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var prevStep = function prevStep() {
    if (currentStep.value <= 0) {
      window.history.back();
    }

    currentStep.value--;
  };

  return {
    currentStep: currentStep,
    nextStep: nextStep,
    prevStep: prevStep
  };
}

/***/ }),

/***/ "./resources/js/utils/validate.js":
/*!****************************************!*\
  !*** ./resources/js/utils/validate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),
/* harmony export */   "isValidFullName": () => (/* binding */ isValidFullName),
/* harmony export */   "isValidPWd": () => (/* binding */ isValidPWd),
/* harmony export */   "confirmPassword": () => (/* binding */ confirmPassword)
/* harmony export */ });
// check email validity
var isValidEmail = function isValidEmail(val) {
  var emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || 'Invalid email';
}; // check fullname validity

var isValidFullName = function isValidFullName(name) {
  var validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  return validNamePattern.test(name) || 'Numerical values are not required';
}; // check passwords validity

var isValidPWd = function isValidPWd(val) {
  return val.length >= 7 || 'Please use minimum 7 characters';
}; // check if passwords are the same

var confirmPassword = function confirmPassword(password) {
  return [function (v) {
    return !!v || 'Confirm password is required';
  }, function (v) {
    return v === password || 'passwords are not the same, please check';
  }];
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#overlay[data-v-1a95de40] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 300;\n  background-color: #00000026;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n}\n#box[data-v-1a95de40] {\n  margin: 0 auto;\n  width: 90%;\n  max-width: 47.375rem;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  border-radius: 1rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  background: #fff;\n}\n@media (max-width: 425px) {\n#box[data-v-1a95de40] {\n    margin: 1em;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_style_index_0_id_1a95de40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_style_index_0_id_1a95de40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_style_index_0_id_1a95de40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardUpdateModal_vue_vue_type_template_id_1a95de40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true */ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true");
/* harmony import */ var _CardUpdateModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardUpdateModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _CardUpdateModal_vue_vue_type_style_index_0_id_1a95de40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true */ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CardUpdateModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardUpdateModal_vue_vue_type_template_id_1a95de40_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1a95de40"],['__file',"resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardUpdateModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_template_id_1a95de40_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_template_id_1a95de40_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=template&id=1a95de40&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardUpdateModal_vue_vue_type_style_index_0_id_1a95de40_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Giftcards/components/CardUpdateModal.vue?vue&type=style&index=0&id=1a95de40&lang=scss&scoped=true");


/***/ })

}]);