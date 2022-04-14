"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  computed: {
    errors: function errors() {
      return this.$page.props.errors;
    },
    hasErrors: function hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Jetstream_ValidationErrors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/ValidationErrors.vue */ "./resources/js/Jetstream/ValidationErrors.vue");
/* harmony import */ var _components_reusables_EyeIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/reusables_/EyeIcon.vue */ "./resources/js/components/reusables_/EyeIcon.vue");
/* harmony import */ var _components_reusables_Logo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/reusables_/Logo.vue */ "./resources/js/components/reusables_/Logo.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    canResetPassword: Boolean,
    status: {
      type: String,
      "default": null
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var isPwd = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ref)(true);
    var form = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useForm)({
      fullname: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      terms: false
    });
    var adText = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ref)("You Deserve Good, \nRates");

    var submit = function submit() {
      // eslint-disable-next-line no-undef
      form.post(route('register'), {
        onFinish: function onFinish() {
          return form.reset('password', 'password_confirmation');
        }
      });
    };

    var __returned__ = {
      isPwd: isPwd,
      form: form,
      adText: adText,
      submit: submit,
      JetValidationErrors: _Jetstream_ValidationErrors_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      EyeIcon: _components_reusables_EyeIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Logo: _components_reusables_Logo_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      ref: _utils__WEBPACK_IMPORTED_MODULE_3__.ref,
      useForm: _utils__WEBPACK_IMPORTED_MODULE_3__.useForm,
      confirmPassword: _utils__WEBPACK_IMPORTED_MODULE_3__.confirmPassword,
      isValidEmail: _utils__WEBPACK_IMPORTED_MODULE_3__.isValidEmail,
      isValidFullName: _utils__WEBPACK_IMPORTED_MODULE_3__.isValidFullName,
      isValidPWd: _utils__WEBPACK_IMPORTED_MODULE_3__.isValidPWd
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EyeIcon',
  props: ['show']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  "class": "mt-3 border border-red-300 rounded work list-disc p-2 w-fit bg-red-100/50 max-w-lg mx-auto list-inside text-xs text-red-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "enter-active-class": "animate__animated  animate__shakeX",
    "leave-active-class": "animate__animated  animate__fadeOut"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.hasErrors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.errors, function (error, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: key
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(error), 1
        /* TEXT */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-00670f5c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "py-4 pt-6"
};
var _hoisted_2 = {
  "class": "main_container"
};
var _hoisted_3 = {
  "class": "ads_container"
};
var _hoisted_4 = {
  "class": "whitespace-pre"
};
var _hoisted_5 = {
  id: "form_container"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "my-4"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "font-bold text-gray-800 work text-lg"
  }, " Create Account ")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = ["onSubmit"];
var _hoisted_8 = {
  "class": "input_container"
};
var _hoisted_9 = {
  "class": "input_container"
};
var _hoisted_10 = {
  "class": "input_container"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "work font-semibold text-black text-sm"
  }, " +234 ", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "input_container"
};
var _hoisted_13 = {
  "class": "input_container"
};
var _hoisted_14 = {
  "class": "mb-4"
};
var _hoisted_15 = {
  "class": "other_link_section flex flex-col"
};
var _hoisted_16 = {
  "class": "font-semibold"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Already have an account ? ");

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-cyan"
  }, "Log In", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");

  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_max_width_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("max-width-container");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_max_width_container, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Logo"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.adText), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetValidationErrors"], {
        "class": "mb-4"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" fullname Input Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        modelValue: $setup.form.fullname,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.fullname = $event;
        }),
        rules: [function (val) {
          return !!val || 'fullname is required';
        }, $setup.isValidFullName],
        required: "",
        "lazy-rules": "",
        type: "text",
        borderless: "",
        "input-class": "my_input",
        placeholder: "Fullname"
      }, null, 8
      /* PROPS */
      , ["modelValue", "rules"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Email Input Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        modelValue: $setup.form.email,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.email = $event;
        }),
        rules: [function (val) {
          return !!val || 'Email is missing';
        }, $setup.isValidEmail],
        required: "",
        "lazy-rules": "",
        type: "email",
        borderless: "",
        "input-class": "my_input",
        placeholder: "Email Address"
      }, null, 8
      /* PROPS */
      , ["modelValue", "rules"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Phone Input Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        modelValue: $setup.form.phone,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.phone = $event;
        }),
        required: "",
        "lazy-rules": "",
        type: "tel",
        borderless: "",
        "input-class": "my_input",
        rules: [function (val) {
          return !!val || 'Phone is required';
        }],
        placeholder: "Phone Number"
      }, {
        prepend: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <q-icon name=\"event\" /> "), _hoisted_11];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "rules"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" password Input Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        modelValue: $setup.form.password,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.form.password = $event;
        }),
        required: "",
        "lazy-rules": "",
        type: $setup.isPwd ? 'password' : 'text',
        borderless: "",
        rules: [$setup.isValidPWd],
        "input-class": "my_input ",
        placeholder: "Password"
      }, {
        append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EyeIcon"], {
            show: !$setup.isPwd,
            onClick: _cache[3] || (_cache[3] = function ($event) {
              return $setup.isPwd = !$setup.isPwd;
            })
          }, null, 8
          /* PROPS */
          , ["show"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "type", "rules"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" passowrd confirmation Input Container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
        modelValue: $setup.form.password_confirmation,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.form.password_confirmation = $event;
        }),
        required: "",
        "lazy-rules": "",
        type: $setup.isPwd ? 'password' : 'text',
        rules: $setup.confirmPassword($setup.form.password),
        borderless: "",
        "input-class": "my_input ",
        placeholder: "Confirm Password"
      }, {
        append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["EyeIcon"], {
            show: !$setup.isPwd,
            onClick: _cache[5] || (_cache[5] = function ($event) {
              return $setup.isPwd = !$setup.isPwd;
            })
          }, null, 8
          /* PROPS */
          , ["show"])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue", "type", "rules"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
        color: "primary",
        type: "submit",
        disabled: $setup.form.processing,
        unelevated: "",
        "class": "w-full primary_shadow py-3 work font-medium",
        label: "Create Account"
      }, null, 8
      /* PROPS */
      , ["disabled"])])], 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <inertia-link\n              to=\"/forgotpassword\"\n              class=\"forgot-password self-end inline-block mb-4 font-semibold text-cyan\"\n              >Forgot Your Password</inertia-link\n            > "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: "/login"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18];
        }),
        _: 1
        /* STABLE */

      })])])])])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "display flex items-center right-0 mx-2"
};
var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.9996 9.64136C10.6696 9.64136 9.58862 10.7234 9.58862 12.0534C9.58862 13.3824 10.6696 14.4634 11.9996 14.4634C13.3296 14.4634 14.4116 13.3824 14.4116 12.0534C14.4116 10.7234 13.3296 9.64136 11.9996 9.64136ZM11.9996 15.9634C9.84262 15.9634 8.08862 14.2094 8.08862 12.0534C8.08862 9.89636 9.84262 8.14136 11.9996 8.14136C14.1566 8.14136 15.9116 9.89636 15.9116 12.0534C15.9116 14.2094 14.1566 15.9634 11.9996 15.9634Z\" fill=\"black\"></path><mask id=\"mask0_33437_4760\" style=\"mask-type:alpha;\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"4\" width=\"20\" height=\"17\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.00024 4.00024H22.0001V20.1052H2.00024V4.00024Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_33437_4760)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.56999 12.0525C5.42999 16.1615 8.56299 18.6045 12 18.6055C15.437 18.6045 18.57 16.1615 20.43 12.0525C18.57 7.94451 15.437 5.50151 12 5.50051C8.56399 5.50151 5.42999 7.94451 3.56999 12.0525ZM12.002 20.1055H11.998H11.997C7.86099 20.1025 4.14699 17.2035 2.06099 12.3485C1.97999 12.1595 1.97999 11.9455 2.06099 11.7565C4.14699 6.90251 7.86199 4.00351 11.997 4.00051C11.999 3.99951 11.999 3.99951 12 4.00051C12.002 3.99951 12.002 3.99951 12.003 4.00051C16.139 4.00351 19.853 6.90251 21.939 11.7565C22.021 11.9455 22.021 12.1595 21.939 12.3485C19.854 17.2035 16.139 20.1025 12.003 20.1055H12.002Z\" fill=\"black\"></path></g></svg>", 1);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  key: 1
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.76082 15.6172C9.56882 15.6172 9.37682 15.5442 9.23082 15.3972C8.49282 14.6602 8.08582 13.6802 8.08582 12.6382C8.08582 10.4782 9.84182 8.72119 11.9998 8.72119C13.0378 8.72119 14.0458 9.14019 14.7648 9.87119C15.0548 10.1672 15.0518 10.6412 14.7558 10.9312C14.4608 11.2232 13.9868 11.2182 13.6958 10.9242C13.2568 10.4772 12.6388 10.2212 11.9998 10.2212C10.6688 10.2212 9.58582 11.3052 9.58582 12.6382C9.58582 13.2792 9.83682 13.8832 10.2908 14.3372C10.5838 14.6302 10.5838 15.1042 10.2918 15.3972C10.1448 15.5442 9.95282 15.6172 9.76082 15.6172Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.5674 16.4912C12.2124 16.4912 11.8964 16.2372 11.8304 15.8752C11.7564 15.4682 12.0264 15.0772 12.4344 15.0032C13.4144 14.8252 14.1904 14.0472 14.3664 13.0662C14.4404 12.6592 14.8304 12.3912 15.2374 12.4612C15.6454 12.5342 15.9164 12.9242 15.8434 13.3322C15.5564 14.9252 14.2944 16.1892 12.7024 16.4792C12.6574 16.4872 12.6114 16.4912 12.5674 16.4912Z\" fill=\"black\"></path><mask id=\"mask0_33437_4845\" style=\"mask-type:alpha;\" maskUnits=\"userSpaceOnUse\" x=\"2\" y=\"4\" width=\"17\" height=\"15\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 4.62439H18.0862V18.7225H2V4.62439Z\" fill=\"white\"></path></mask><g mask=\"url(#mask0_33437_4845)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.6545 18.7225C6.4925 18.7225 6.3295 18.6695 6.1915 18.5625C4.5005 17.2345 3.0715 15.2875 2.0615 12.9335C1.9795 12.7435 1.9795 12.5295 2.0615 12.3405C3.0825 9.97652 4.5205 8.01952 6.2205 6.68252C9.6865 3.93952 14.3005 3.93052 17.8015 6.70252C18.1265 6.95952 18.1815 7.43152 17.9245 7.75652C17.6665 8.07952 17.1965 8.13652 16.8705 7.87852C13.9045 5.53052 10.0835 5.53852 7.1495 7.86052C5.7135 8.99052 4.4805 10.6365 3.5705 12.6385C4.4715 14.6285 5.6935 16.2645 7.1185 17.3825C7.4445 17.6385 7.5005 18.1105 7.2445 18.4355C7.0965 18.6235 6.8765 18.7225 6.6545 18.7225Z\" fill=\"black\"></path></g><mask id=\"mask1_33437_4845\" style=\"mask-type:alpha;\" maskUnits=\"userSpaceOnUse\" x=\"8\" y=\"8\" width=\"14\" height=\"13\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.71753 8.74121H22.0001V20.6894H8.71753V8.74121Z\" fill=\"white\"></path></mask><g mask=\"url(#mask1_33437_4845)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.0002 20.6894C11.0632 20.6894 10.1312 20.5374 9.23116 20.2384C8.83816 20.1074 8.62516 19.6824 8.75616 19.2894C8.88716 18.8954 9.31016 18.6864 9.70516 18.8144C10.4522 19.0634 11.2242 19.1894 12.0002 19.1894C15.4282 19.1894 18.5612 16.7474 20.4302 12.6364C19.9742 11.6374 19.4432 10.7324 18.8492 9.94242C18.6002 9.61142 18.6662 9.14042 18.9972 8.89142C19.3272 8.64242 19.7982 8.71042 20.0472 9.04042C20.7712 10.0014 21.4072 11.1124 21.9382 12.3384C22.0212 12.5284 22.0212 12.7444 21.9382 12.9334C19.8422 17.7904 16.1272 20.6894 12.0002 20.6894Z\" fill=\"black\"></path></g><mask id=\"mask2_33437_4845\" style=\"mask-type:alpha;\" maskUnits=\"userSpaceOnUse\" x=\"3\" y=\"4\" width=\"18\" height=\"18\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.36353 4.00037H20.637V21.2734H3.36353V4.00037Z\" fill=\"white\"></path></mask><g mask=\"url(#mask2_33437_4845)\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.11328 21.2734C3.92128 21.2734 3.72928 21.2004 3.58328 21.0534C3.29028 20.7604 3.29028 20.2864 3.58328 19.9934L19.3573 4.21938C19.6503 3.92638 20.1243 3.92638 20.4173 4.21938C20.7103 4.51238 20.7103 4.98738 20.4173 5.28038L4.64328 21.0534C4.49728 21.2004 4.30528 21.2734 4.11328 21.2734Z\" fill=\"black\"></path></g></svg>", 1);

var _hoisted_7 = [_hoisted_6];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, _hoisted_4)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_7))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center work uppercase select-none flex-row"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div><svg width=\"44\" height=\"41\" viewBox=\"0 0 44 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1696 0.376465L43.3767 0.376465L41.0324 7.68837L39.5413 6.09666L30.7935 14.3536L30.6941 14.3039C29.3604 11.278 23.6114 8.71428 19.0139 10.1174C13.8365 11.7091 9.13954 18.1257 12.3537 24.7909L9.86852 27.2282L9.71941 27.1288C9.0277 24.9858 7.47034 22.6251 8.0295 19.2697C8.38363 17.164 8.71499 15.3091 9.62 13.7568C12.1942 9.34225 18.2394 4.54226 25.7735 6.84278C27.8445 7.4749 29.3832 8.47801 30.9509 9.57852L35.8218 5.00236C36.2132 4.61066 37.4662 3.71739 37.0644 3.36092L35.8715 1.96817V1.91843L43.1696 0.376465Z\" fill=\"#00C2FF\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1013 1.37125C26.5313 1.27591 30.1017 2.86969 33.2288 5.05207L32.3839 5.94741L30.8431 7.39818C29.1408 6.4759 27.5461 5.55777 25.3757 5.00233C16.336 2.72254 9.19117 9.4044 7.085 15.3982C6.57968 16.8365 6.5714 18.366 6.28975 20.1236C5.93975 22.3101 7.05186 25.3982 7.68143 26.8386L8.52639 28.48L6.14064 30.7184L5.99153 30.6189L4.64954 28.1318C4.08975 26.8166 3.65702 25.4508 3.35726 24.0531C1.01707 13.6116 8.28615 5.51632 14.8884 2.71425C16.1558 2.17954 17.6055 1.86658 19.0552 1.57021L21.1013 1.37125Z\" fill=\"#00C2FF\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.8514 9.97656C38.3733 10.4781 38.6508 11.2905 38.9946 11.9662C40.9495 15.8149 41.662 21.7299 39.9886 26.4905C37.1121 34.6812 27.3847 42.3952 15.7832 38.2791C13.9545 37.6304 12.0555 36.8491 10.7632 35.6428L13.1986 33.3631C14.7912 34.2169 16.3196 35.1309 18.3181 35.6428C26.5688 37.7859 32.8624 32.7413 35.6644 27.9745C36.5529 26.4677 38.1496 22.5962 37.7023 19.9164C37.4082 18.1237 37.373 16.5444 36.8076 15.0916L35.4656 12.2066L37.8514 9.97656Z\" fill=\"#00C2FF\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.2009 11.4189C24.7216 11.3526 26.7014 12.4448 28.4079 14.1546C28.7952 14.5422 29.3585 14.9836 29.5014 15.6054L26.9665 17.9349L26.8671 17.8852C26.1899 15.7567 22.8308 14.0572 20.0081 15.1909C17.9992 16.0033 16.8312 17.6199 16.4874 20.1152C16.0235 23.4043 19.772 26.6106 23.247 25.7359C25.0695 25.2758 25.7177 24.1795 26.8257 23.0417L27.6706 23.8375L29.2611 25.5784C25.9476 30.4323 18.1276 30.3929 14.7478 25.6282C14.1616 24.7913 13.7089 23.8684 13.4058 22.8924C11.834 17.7836 15.0957 13.5246 18.4258 12.0987C19.2625 11.7546 20.2628 11.794 21.2009 11.4189Z\" fill=\"#00C2FF\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.1234 13.5081C34.6018 13.8355 34.7861 14.7246 35.0181 15.2987C36.4823 18.9194 36.0681 23.6055 34.4714 26.7391C32.0152 31.5619 25.4875 36.1629 17.8125 33.7443C15.9487 33.1619 14.499 32.1816 13.0907 31.1578H12.9913L6.72873 37.1267L6.82814 37.2262L8.12042 38.7184V38.7681L0.623535 40.3764L3.00928 33.0645L3.3075 33.3132L4.45068 34.6065L10.9121 28.5961C11.6556 27.9951 12.3473 26.7308 13.2978 26.4075C14.5135 29.3505 20.3391 32.0262 24.8787 30.6355C30.201 29.0023 34.7986 22.7246 31.6383 15.9205L34.1234 13.5081Z\" fill=\"#00C2FF\"></path></svg></div><p class=\"font-bold opacity-80 px-2\">Cryptomania<br>Exchange</p>", 2);

var _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_4);
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
/* harmony export */   "statusColor": () => (/* binding */ statusColor),
/* harmony export */   "reactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "tablet": () => (/* reexport safe */ _breakpoints_js__WEBPACK_IMPORTED_MODULE_4__.tablet),
/* harmony export */   "computed": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "onMounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "usePage": () => (/* reexport safe */ _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.usePage),
/* harmony export */   "Inertia": () => (/* reexport safe */ _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia),
/* harmony export */   "loader": () => (/* reexport safe */ _Loading_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "useForm": () => (/* reexport safe */ _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm),
/* harmony export */   "ExactCardImg": () => (/* reexport safe */ _cards__WEBPACK_IMPORTED_MODULE_2__.ExactCardImg),
/* harmony export */   "isValidEmail": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.isValidEmail),
/* harmony export */   "isValidFullName": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.isValidFullName),
/* harmony export */   "confirmPassword": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.confirmPassword),
/* harmony export */   "isValidPWd": () => (/* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.isValidPWd)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./resources/js/utils/cards.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _breakpoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakpoints.js */ "./resources/js/utils/breakpoints.js");
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading.js */ "./resources/js/utils/Loading.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./resources/js/utils/validate.js");








var statusColor = function statusColor(status) {
  var color;

  switch (status) {
    case 'pending':
      color = 'orange';
      break;

    case 'success':
      color = 'green';
      break;

    case 'failed':
      color = 'red';
      break;

    default:
      color = 'orange';
  }

  return color;
};



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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input_container[data-v-00670f5c] {\n  margin-bottom: 2em;\n}\n.main_container[data-v-00670f5c] {\n  margin: 2em 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_style_index_0_id_00670f5c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_style_index_0_id_00670f5c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_style_index_0_id_00670f5c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Jetstream/ValidationErrors.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Jetstream/ValidationErrors.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ValidationErrors_vue_vue_type_template_id_0118f178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidationErrors.vue?vue&type=template&id=0118f178 */ "./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178");
/* harmony import */ var _ValidationErrors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationErrors.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ValidationErrors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ValidationErrors_vue_vue_type_template_id_0118f178__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/ValidationErrors.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Login2.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Login2.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login2_vue_vue_type_template_id_00670f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login2.vue?vue&type=template&id=00670f5c&scoped=true */ "./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true");
/* harmony import */ var _Login2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login2.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Login2_vue_vue_type_style_index_0_id_00670f5c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true */ "./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Login2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login2_vue_vue_type_template_id_00670f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-00670f5c"],['__file',"resources/js/Pages/Login2.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/reusables_/EyeIcon.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/reusables_/EyeIcon.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EyeIcon_vue_vue_type_template_id_688c65c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EyeIcon.vue?vue&type=template&id=688c65c6 */ "./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6");
/* harmony import */ var _EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EyeIcon.vue?vue&type=script&lang=js */ "./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EyeIcon_vue_vue_type_template_id_688c65c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/reusables_/EyeIcon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/reusables_/Logo.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/reusables_/Logo.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_25009768__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=25009768 */ "./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Logo_vue_vue_type_template_id_25009768__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/reusables_/Logo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationErrors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationErrors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ValidationErrors.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login2.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyeIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178":
/*!***********************************************************************************!*\
  !*** ./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationErrors_vue_vue_type_template_id_0118f178__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationErrors_vue_vue_type_template_id_0118f178__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ValidationErrors.vue?vue&type=template&id=0118f178 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/ValidationErrors.vue?vue&type=template&id=0118f178");


/***/ }),

/***/ "./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_template_id_00670f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_template_id_00670f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login2.vue?vue&type=template&id=00670f5c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=template&id=00670f5c&scoped=true");


/***/ }),

/***/ "./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_template_id_688c65c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EyeIcon_vue_vue_type_template_id_688c65c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EyeIcon.vue?vue&type=template&id=688c65c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/EyeIcon.vue?vue&type=template&id=688c65c6");


/***/ }),

/***/ "./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_25009768__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_25009768__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo.vue?vue&type=template&id=25009768 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/Logo.vue?vue&type=template&id=25009768");


/***/ }),

/***/ "./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login2_vue_vue_type_style_index_0_id_00670f5c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Login2.vue?vue&type=style&index=0&id=00670f5c&lang=scss&scoped=true");


/***/ })

}]);