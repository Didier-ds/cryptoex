"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: ['message']
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Mainlayout_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mainlayout/Header.vue */ "./resources/js/Layouts/components/Mainlayout/Header.vue");
/* harmony import */ var _components_Mainlayout_Sidenav_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Mainlayout/Sidenav.vue */ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var isSideBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var toggleSideBar = function toggleSideBar() {
      isSideBar.value = !isSideBar.value;
    };

    var __returned__ = {
      isSideBar: isSideBar,
      toggleSideBar: toggleSideBar,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Header: _components_Mainlayout_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      SideNav: _components_Mainlayout_Sidenav_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue */ "./resources/js/Layouts/MainLayout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      MainLayout: _MainLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_reusables_ProfilePic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/reusables_/ProfilePic.vue */ "./resources/js/components/reusables_/ProfilePic.vue");
/* harmony import */ var _components_reusables_MenuDropdown_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/reusables_/MenuDropdown.vue */ "./resources/js/components/reusables_/MenuDropdown.vue");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/headlessui.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['toggleSideBar'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var isDrop = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);

    var toggleModal = function toggleModal() {
      isDrop.value = !isDrop.value;
    };

    var logout = function logout() {
      // eslint-disable-next-line no-undef
      _utils__WEBPACK_IMPORTED_MODULE_3__.Inertia.post(route('logout')); // emits('toggleModal')
    }; // const toggleSideBar = () => {
    // };


    var __returned__ = {
      isDrop: isDrop,
      toggleModal: toggleModal,
      logout: logout,
      ProfilePic: _components_reusables_ProfilePic_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      MenuDropDown: _components_reusables_MenuDropdown_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.Menu,
      MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuButton,
      MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItems,
      MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_4__.MenuItem,
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      ChevronDownIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"],
      Inertia: _utils__WEBPACK_IMPORTED_MODULE_3__.Inertia
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import {useRouter} from 'vue-router'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isSideBar: {
      type: Boolean
    }
  },
  setup: function setup(props, context) {
    // const router = useRouter()
    return {
      changeRoute: function changeRoute(path) {
        //  router.push({'path': path})
        context.emit('toggleSideBar');
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_SettingsLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/SettingsLayout.vue */ "./resources/js/Layouts/SettingsLayout.vue");
/* harmony import */ var _Jetstream_InputError_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Jetstream/InputError.vue */ "./resources/js/Jetstream/InputError.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      fullname: null,
      email: null,
      phone: null
    });

    var submit = function submit() {
      form.put(route('user-profile-information.update'), {
        errorBag: 'updateProfileInformation',
        onSuccess: function onSuccess() {
          return form.reset();
        }
      });
    };

    var __returned__ = {
      form: form,
      submit: submit,
      SettingsLayout: _Layouts_SettingsLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      JetInputError: _Jetstream_InputError_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      useForm: _utils__WEBPACK_IMPORTED_MODULE_2__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['toggleModal', 'toggleForm'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emits = _ref.emit;
    expose(); // const close = () => {
    // };
    // const toggleForm = (any) => {
    //   this.close();
    //   emit("toggleForm", any);
    // };
    // const push = () => {
    //   this.close();
    //   // router.push({ name: any });
    // };

    var logout = function logout() {
      // eslint-disable-next-line no-undef
      _utils__WEBPACK_IMPORTED_MODULE_0__.Inertia.post(route('logout'));
      emits('toggleModal');
    };

    var __returned__ = {
      emits: emits,
      logout: logout,
      Inertia: _utils__WEBPACK_IMPORTED_MODULE_0__.Inertia
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isSize: {
      type: String,
      "default": 'mid'
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props; // import { computed } from "vue"

    var text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var letters = '';
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.usePage)().props.value.user.fullname.split(' ').forEach(function (word) {
        letters += word.charAt(0);
      });
      return letters;
    });
    var size = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      switch (props.isSize) {
        case 'small':
          return 'h-12 w-12 ';

        case 'mid':
          return 'h-16 w-16 text-xl';

        case 'big':
          return 'h-20 h-20 text-2xl';

        default:
          return 'h-12 h-12';
      }
    });
    var __returned__ = {
      props: props,
      text: text,
      size: size,
      usePage: _utils__WEBPACK_IMPORTED_MODULE_0__.usePage,
      computed: _utils__WEBPACK_IMPORTED_MODULE_0__.computed
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-sm text-red-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.message), 1
  /* TEXT */
  )], 512
  /* NEED_PATCH */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.message]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ec9a7772"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "main",
  "class": "relative bg-gray-50"
};
var _hoisted_2 = {
  id: "layout"
};
var _hoisted_3 = {
  "class": "bg-gray-50 rounded-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["overlay", $setup.isSideBar ? 'active' : '']),
    onClick: $setup.toggleSideBar
  }, null, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SideNav"], {
    "is-side-bar": $setup.isSideBar,
    onToggleSideBar: $setup.toggleSideBar
  }, null, 8
  /* PROPS */
  , ["is-side-bar"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"], {
    onToggleSideBar: $setup.toggleSideBar
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Toast class=\"custom\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Footer /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \n    <Spinner v-if=\"isLoading\" />\n    <SuccessModal :isSuccess=\"isSuccess\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <AccountForm @FormClickAway = \"ClickAway\" v-if=\"isShowForm\"/> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-2"
};
var _hoisted_2 = {
  "class": "flex flex-row justify-between items-center mx-4"
};
var _hoisted_3 = {
  "class": "my-1"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-lg work font-semibold p-ripple"
}, " Settings ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "p-4 mx-auto"
};
var _hoisted_6 = {
  id: "profile_info"
};
var _hoisted_7 = {
  "class": "max-w-3xl mx-auto"
};
var _hoisted_8 = {
  "class": "flex-nowrap flex overflow-x-auto"
};
var _hoisted_9 = {
  "class": "inline-block"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Basic Information");

var _hoisted_11 = {
  "class": "inline-block"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bank Information");

var _hoisted_13 = {
  "class": "inline-block"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Security");

var _hoisted_15 = {
  "class": "bg-white rounded-bl-lg shadow-lg p-4 md:p-10 rounded-tr-lg rounded-br-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GoBack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GoBack");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["MainLayout"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GoBack)]), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: "/settings/profile",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-white shadow font-medium': _ctx.$page.url === '/settings/profile'
        }, "bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_10];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: "/settings/banks",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-white shadow font-medium': _ctx.$page.url === '/settings/banks'
        }, "bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_12];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: "/user/profile",
        "class": "bg-gray-100 work text-gray-600 inline-block py-2 px-3 mr-2 rounded-tl-lg rounded-tr-lg"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_14];
        }),
        _: 1
        /* STABLE */

      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])])])];
    }),
    _: 3
    /* FORWARDED */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-db50f4b8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "flex py-5 px-4 static inset-x-0 w-full justify-between items-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"myHidden\" data-v-db50f4b8><svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-db50f4b8><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z\" fill=\"#111827\" data-v-db50f4b8></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z\" fill=\"#111827\" data-v-db50f4b8></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z\" fill=\"#111827\" data-v-db50f4b8></path></svg></div>", 1);

var _hoisted_3 = {
  "class": "w-56 text-right"
};
var _hoisted_4 = {
  "class": "hidden myHidden font-medium work px-2"
};
var _hoisted_5 = {
  "class": "px-1 py-1"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Trade Giftcards ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sell Bitcoin ");

var _hoisted_8 = {
  "class": "px-1 py-1"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Transactions ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings ");

var _hoisted_11 = {
  "class": "px-1 py-1"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sign Out ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_DeleteIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteIcon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "logo mx-2",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('toggleSideBar');
    })
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img src=\"/img/logo.svg\" class=\"w-full\" alt=\"\" /> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Menu"], {
    as: "div",
    "class": "relative inline-block text-left"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuButton"], {
        "class": "capitalize select-none flex items-center"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProfilePic"], {
            "is-size": 'small'
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.user.fullname), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ChevronDownIcon"], {
            "class": "w-5 h-5 -mr-1 text-secondary",
            "aria-hidden": "true"
          })];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItems"], {
            "class": "absolute right-0 w-56 mt-2 work z-20 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var active = _ref.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                    href: "/giftcards",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-primary text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm'])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_6];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                  var active = _ref2.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                    href: "/sell-bitcoin",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-primary text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm'])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_7];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                  var active = _ref3.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                    href: "/user/transactions",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-primary text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm'])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_9];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
                  var active = _ref4.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
                    href: "/settings/profile",
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-primary text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm'])
                  }, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [_hoisted_10];
                    }),
                    _: 2
                    /* DYNAMIC */

                  }, 1032
                  /* PROPS, DYNAMIC_SLOTS */
                  , ["class"])];
                }),
                _: 1
                /* STABLE */

              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MenuItem"], null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref5) {
                  var active = _ref5.active;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                    onClick: $setup.logout,
                    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-negative text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full font-medium cursor-default px-2 py-2 text-sm'])
                  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteIcon, {
                    active: active,
                    "class": "w-5 h-5 mr-2 text-violet-400",
                    "aria-hidden": "true"
                  }, null, 8
                  /* PROPS */
                  , ["active"]), _hoisted_12], 2
                  /* CLASS */
                  )];
                }),
                _: 1
                /* STABLE */

              })])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"capitalize select-none flex items-center\">\n             <div class=\"px-4\"><el-button v-if=\"role\" @click=\"() => $router.push({'path': '/admin'})\" color=\"#1D4ED8\" style=\"color: white\">Admin Dashboard</el-button></div> \n            <div\n                class=\"capitalize select-none flex items-center\"\n                @click=\"toggleModal()\">\n                <ProfilePic :is-size=\"'small'\" /><span\n                    class=\"hidden myHidden font-medium work px-2\"\n                    >{{ $page.props.user.fullname }}</span\n                >\n                <div>\n                    <svg\n                        width=\"20\"\n                        height=\"20\"\n                        viewBox=\"0 0 20 20\"\n                        fill=\"none\"\n                        xmlns=\"http://www.w3.org/2000/svg\">\n                        <path\n                            fill-rule=\"evenodd\"\n                            clip-rule=\"evenodd\"\n                            d=\"M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z\"\n                            fill=\"#111827\" />\n                    </svg>\n                </div>\n            </div>\n        </div>\n        <transition name=\"fade\">\n            <MenuDropDown\n                v-if=\"isDrop\"\n                @toggle-form=\"toggleForm\"\n                @toggle-modal=\"toggleModal\" />\n        </transition> ")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-51a69436"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex justify-center my-5 items-center uppercase select-none flex-row\" data-v-51a69436><div data-v-51a69436><svg width=\"44\" height=\"41\" viewBox=\"0 0 44 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-51a69436><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.1696 0.376465L43.3767 0.376465L41.0324 7.68837L39.5413 6.09666L30.7935 14.3536L30.6941 14.3039C29.3604 11.278 23.6114 8.71428 19.0139 10.1174C13.8365 11.7091 9.13954 18.1257 12.3537 24.7909L9.86852 27.2282L9.71941 27.1288C9.0277 24.9858 7.47034 22.6251 8.0295 19.2697C8.38363 17.164 8.71499 15.3091 9.62 13.7568C12.1942 9.34225 18.2394 4.54226 25.7735 6.84278C27.8445 7.4749 29.3832 8.47801 30.9509 9.57852L35.8218 5.00236C36.2132 4.61066 37.4662 3.71739 37.0644 3.36092L35.8715 1.96817V1.91843L43.1696 0.376465Z\" fill=\"#00C2FF\" data-v-51a69436></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.1013 1.37125C26.5313 1.27591 30.1017 2.86969 33.2288 5.05207L32.3839 5.94741L30.8431 7.39818C29.1408 6.4759 27.5461 5.55777 25.3757 5.00233C16.336 2.72254 9.19117 9.4044 7.085 15.3982C6.57968 16.8365 6.5714 18.366 6.28975 20.1236C5.93975 22.3101 7.05186 25.3982 7.68143 26.8386L8.52639 28.48L6.14064 30.7184L5.99153 30.6189L4.64954 28.1318C4.08975 26.8166 3.65702 25.4508 3.35726 24.0531C1.01707 13.6116 8.28615 5.51632 14.8884 2.71425C16.1558 2.17954 17.6055 1.86658 19.0552 1.57021L21.1013 1.37125Z\" fill=\"#00C2FF\" data-v-51a69436></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.8514 9.97656C38.3733 10.4781 38.6508 11.2905 38.9946 11.9662C40.9495 15.8149 41.662 21.7299 39.9886 26.4905C37.1121 34.6812 27.3847 42.3952 15.7832 38.2791C13.9545 37.6304 12.0555 36.8491 10.7632 35.6428L13.1986 33.3631C14.7912 34.2169 16.3196 35.1309 18.3181 35.6428C26.5688 37.7859 32.8624 32.7413 35.6644 27.9745C36.5529 26.4677 38.1496 22.5962 37.7023 19.9164C37.4082 18.1237 37.373 16.5444 36.8076 15.0916L35.4656 12.2066L37.8514 9.97656Z\" fill=\"#00C2FF\" data-v-51a69436></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.2009 11.4189C24.7216 11.3526 26.7014 12.4448 28.4079 14.1546C28.7952 14.5422 29.3585 14.9836 29.5014 15.6054L26.9665 17.9349L26.8671 17.8852C26.1899 15.7567 22.8308 14.0572 20.0081 15.1909C17.9992 16.0033 16.8312 17.6199 16.4874 20.1152C16.0235 23.4043 19.772 26.6106 23.247 25.7359C25.0695 25.2758 25.7177 24.1795 26.8257 23.0417L27.6706 23.8375L29.2611 25.5784C25.9476 30.4323 18.1276 30.3929 14.7478 25.6282C14.1616 24.7913 13.7089 23.8684 13.4058 22.8924C11.834 17.7836 15.0957 13.5246 18.4258 12.0987C19.2625 11.7546 20.2628 11.794 21.2009 11.4189Z\" fill=\"#00C2FF\" data-v-51a69436></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.1234 13.5081C34.6018 13.8355 34.7861 14.7246 35.0181 15.2987C36.4823 18.9194 36.0681 23.6055 34.4714 26.7391C32.0152 31.5619 25.4875 36.1629 17.8125 33.7443C15.9487 33.1619 14.499 32.1816 13.0907 31.1578H12.9913L6.72873 37.1267L6.82814 37.2262L8.12042 38.7184V38.7681L0.623535 40.3764L3.00928 33.0645L3.3075 33.3132L4.45068 34.6065L10.9121 28.5961C11.6556 27.9951 12.3473 26.7308 13.2978 26.4075C14.5135 29.3505 20.3391 32.0262 24.8787 30.6355C30.201 29.0023 34.7986 22.7246 31.6383 15.9205L34.1234 13.5081Z\" fill=\"#00C2FF\" data-v-51a69436></path></svg></div><p class=\"font-black work text-tiny px-2\" data-v-51a69436> Cryptomania<br data-v-51a69436>Exchange </p></div>", 1);

var _hoisted_2 = {
  "class": "link_list"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "link_icon"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    opacity: "0.4",
    d: "M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2Z",
    fill: "currentColor"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z",
    fill: "currentColor"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Home", -1
  /* HOISTED */
  );
});

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "link_icon"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M15.2428 4.73756C15.2428 6.95855 17.0459 8.75902 19.2702 8.75902C19.5151 8.75782 19.7594 8.73431 20 8.68878V16.6615C20 20.0156 18.0215 22 14.6624 22H7.34636C3.97851 22 2 20.0156 2 16.6615V9.3561C2 6.00195 3.97851 4 7.34636 4H15.3131C15.2659 4.243 15.2423 4.49001 15.2428 4.73756ZM13.15 14.8966L16.0078 11.2088V11.1912C16.2525 10.8625 16.1901 10.3989 15.8671 10.1463C15.7108 10.0257 15.5122 9.97345 15.3167 10.0016C15.1211 10.0297 14.9453 10.1358 14.8295 10.2956L12.4201 13.3951L9.6766 11.2351C9.51997 11.1131 9.32071 11.0592 9.12381 11.0856C8.92691 11.1121 8.74898 11.2166 8.63019 11.3756L5.67562 15.1863C5.57177 15.3158 5.51586 15.4771 5.51734 15.6429C5.5002 15.9781 5.71187 16.2826 6.03238 16.3838C6.35288 16.485 6.70138 16.3573 6.88031 16.0732L9.35125 12.8771L12.0948 15.0283C12.2508 15.1541 12.4514 15.2111 12.6504 15.1863C12.8494 15.1615 13.0297 15.0569 13.15 14.8966Z",
    fill: "currentColor"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    opacity: "0.4",
    cx: "19.5",
    cy: "4.5",
    r: "2.5",
    fill: "currentColor"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Transactions", -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "link_icon"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z",
    fill: "currentColor"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    opacity: "0.4",
    d: "M16.0374 12.2967C16.2465 13.2478 17.0805 13.9171 18.0326 13.8997H21.2825C21.6787 13.8997 22 13.5716 22 13.166V10.6345C21.9991 10.2298 21.6787 9.90086 21.2825 9.89999H17.9561C16.8731 9.90347 15.9983 10.8024 16 11.9103C16 12.0399 16.0128 12.1696 16.0374 12.2967Z",
    fill: "currentColor"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    cx: "18",
    cy: "11.9",
    r: "1",
    fill: "currentColor"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Account Details", -1
  /* HOISTED */
  );
});

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "link_icon"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M12.012 14.8301C10.4075 14.8301 9.10962 13.5801 9.10962 12.0101C9.10962 10.4401 10.4075 9.1801 12.012 9.1801C13.6165 9.1801 14.8837 10.4401 14.8837 12.0101C14.8837 13.5801 13.6165 14.8301 12.012 14.8301Z",
    fill: "currentColor"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    opacity: "0.4",
    d: "M21.2301 14.3701C21.036 14.0701 20.76 13.7701 20.4023 13.5801C20.1162 13.4401 19.9322 13.2101 19.7687 12.9401C19.2475 12.0801 19.5541 10.9501 20.4228 10.4401C21.4447 9.8701 21.7718 8.6001 21.179 7.6101L20.4943 6.4301C19.9118 5.4401 18.6344 5.0901 17.6226 5.6701C16.7233 6.1501 15.5685 5.8301 15.0473 4.9801C14.8838 4.7001 14.7918 4.4001 14.8122 4.1001C14.8429 3.7101 14.7203 3.3401 14.5363 3.0401C14.1582 2.4201 13.4735 2.0001 12.7172 2.0001H11.2763C10.5302 2.0201 9.84553 2.4201 9.4674 3.0401C9.27323 3.3401 9.16081 3.7101 9.18125 4.1001C9.20169 4.4001 9.10972 4.7001 8.9462 4.9801C8.425 5.8301 7.27019 6.1501 6.38109 5.6701C5.35913 5.0901 4.09191 5.4401 3.49917 6.4301L2.81446 7.6101C2.23194 8.6001 2.55897 9.8701 3.57071 10.4401C4.43937 10.9501 4.74596 12.0801 4.23498 12.9401C4.06125 13.2101 3.87729 13.4401 3.59115 13.5801C3.24368 13.7701 2.93709 14.0701 2.77358 14.3701C2.39546 14.9901 2.4159 15.7701 2.79402 16.4201L3.49917 17.6201C3.87729 18.2601 4.58245 18.6601 5.31825 18.6601C5.66572 18.6601 6.0745 18.5601 6.40153 18.3601C6.65702 18.1901 6.96361 18.1301 7.30085 18.1301C8.31259 18.1301 9.16081 18.9601 9.18125 19.9501C9.18125 21.1001 10.1215 22.0001 11.3069 22.0001H12.6968C13.872 22.0001 14.8122 21.1001 14.8122 19.9501C14.8429 18.9601 15.6911 18.1301 16.7029 18.1301C17.0299 18.1301 17.3365 18.1901 17.6022 18.3601C17.9292 18.5601 18.3278 18.6601 18.6855 18.6601C19.411 18.6601 20.1162 18.2601 20.4943 17.6201L21.2097 16.4201C21.5776 15.7501 21.6083 14.9901 21.2301 14.3701Z",
    fill: "currentColor"
  })])], -1
  /* HOISTED */
  );
});

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Settings", -1
  /* HOISTED */
  );
});

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute inset-x-0 bottom-0"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center text-sm font-medium text-grey"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cryptomania Exchange © 2021. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All rights reserved ")])], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "sidebar",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.isSideBar ? 'active' : '')
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"$route.path === '/' ? 'selectedLink' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.$page.url === '/'
    }),
    href: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, _hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"$route.path === '/transactions' ? 'selectedLink' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.$page.url === '/user/transactions/giftcards'
    }),
    href: "/user/transactions/giftcards"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5, _hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"$route.path === '/account-details' ? 'selectedLink' : ''\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.$page.url === ''
    }),
    href: "",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.changeRoute('/account-details');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, _hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"$route.path === '/profile' ? 'selectedLink' : ''\"  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      active: _ctx.$page.url.startsWith('/settings')
    }),
    href: _ctx.route('account.index')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "href"])]), _hoisted_11], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1bdc34e0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "font-medium text-gray-500 my-2"
  }, "Personal Information", -1
  /* HOISTED */
  );
});

var _hoisted_2 = ["onSubmit"];
var _hoisted_3 = {
  "class": "grid md:grid-cols-2 gap-4"
};
var _hoisted_4 = {
  "class": "input__container"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "work",
    "for": "fullname"
  }, "Fullname", -1
  /* HOISTED */
  );
});

var _hoisted_6 = ["placeholder"];
var _hoisted_7 = {
  "class": "grid md:grid-cols-2 gap-4"
};
var _hoisted_8 = {
  "class": "input__container"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "work",
    "for": "fullname"
  }, "Email Address:", -1
  /* HOISTED */
  );
});

var _hoisted_10 = ["placeholder"];
var _hoisted_11 = {
  "class": "input__container"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "work",
    "for": "fullname"
  }, "Phone Number:", -1
  /* HOISTED */
  );
});

var _hoisted_13 = ["placeholder"];

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex justify-end"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "px-4 py-2 shadow-lg bg-primary rounded text-white font-medium"
  }, " Save Changes ")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["SettingsLayout"], null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.fullname = $event;
        }),
        type: "text",
        required: "",
        placeholder: _ctx.$page.props.user.fullname,
        "class": "border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white"
      }, null, 8
      /* PROPS */
      , _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.fullname]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.email = $event;
        }),
        type: "text",
        required: "",
        placeholder: _ctx.$page.props.user.email,
        "class": "border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white"
      }, null, 8
      /* PROPS */
      , _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetInputError"], {
        message: $setup.form.errors.email,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.phone = $event;
        }),
        type: "text",
        required: "",
        placeholder: _ctx.$page.props.user.phone,
        "class": "border p-2 rounded-md w-full focus:border-cyan focus:shadow outline-none bg-white"
      }, null, 8
      /* PROPS */
      , _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.phone]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["JetInputError"], {
        message: $setup.form.errors.phone,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])])]), _hoisted_14], 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_2)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-315150cd"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "menudropdown border rounded shadow-lg bg-white w-full"
};
var _hoisted_2 = {
  "class": "px-4 font-medium capitalize px-4 text-base font-medium work text-gray-700 pt-2 select-none"
};
var _hoisted_3 = {
  id: "menu-dropdown",
  "class": "my-2"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your Profile ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.user.fullname), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <inertia-link @click=\"push('Login')\"> Login </inertia-link> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.push('Profile');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.push('Profile');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "w-full text-white bg-red font-medium text-center",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.logout();
    })
  }, " Sign out ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.size, "rounded-sm flex items-center justify-center uppercase dark text-white font-medium"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.text), 1
  /* TEXT */
  )], 2
  /* CLASS */
  );
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 769px) {\n#layout[data-v-ec9a7772] {\n    display: grid;\n    grid-template-columns: minmax(180px, 280px) 1fr;\n}\n}\n#layout[data-v-ec9a7772] {\n  min-height: 100vh;\n}\ninput[data-v-ec9a7772] {\n  -webkit-appearance: none !important;\n     -moz-appearance: none !important;\n          appearance: none !important;\n}\nmain[data-v-ec9a7772] {\n  transition: 0.5s ease-in-out;\n  margin-bottom: 50px;\n}\n.overlay[data-v-ec9a7772] {\n  background-color: #00000045;\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  opacity: 0;\n  transition: 0.5s ease-in-out;\n}\n@media (max-width: 769px) {\n.overlay.active[data-v-ec9a7772] {\n    opacity: 1;\n    display: block;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header[data-v-db50f4b8] {\n  z-index: 5;\n}\n@media (min-width: 769px) {\n.myHidden[data-v-db50f4b8] {\n    display: block !important;\n}\n}\n.disabled[data-v-db50f4b8],\n.disabled *[data-v-db50f4b8],\n[disabled][data-v-db50f4b8],\n[disabled] *[data-v-db50f4b8] {\n  outline: 0 !important;\n  cursor: default !important;\n  opacity: 1 !important;\n}\n.fade-enter-active[data-v-db50f4b8],\n.fade-leave-active[data-v-db50f4b8] {\n  transition: 0.2s ease-in-out;\n}\n.fade-enter[data-v-db50f4b8], .fade-leave-to[data-v-db50f4b8] {\n  opacity: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#sidebar[data-v-51a69436] {\n  min-height: 100vh;\n  width: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  transition: 0.5s ease-in-out;\n}\n.link_list[data-v-51a69436] {\n  margin: 8em 0;\n  width: 100%;\n}\n.link_list .link_icon[data-v-51a69436] {\n  align-self: center;\n  display: inline-flex;\n  min-width: 24px;\n  margin: 12px 0;\n  margin-right: 24px !important;\n}\n.link_list a[data-v-51a69436] {\n  display: flex;\n  align-items: center;\n  padding: 0 1em;\n  padding-left: 2.5em;\n  transition: 0.2s ease-in-out;\n  position: relative;\n  margin-bottom: 1.3em;\n  cursor: pointer;\n  border-top-left-radius: 0.4em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-bottom-left-radius: 0.4em;\n}\n.link_list a span[data-v-51a69436] {\n  font-family: \"DM SANS\";\n  font-weight: 500;\n  font-size: 1.1em;\n  line-height: 22px;\n  letter-spacing: -0.408px;\n}\n.link_list a[data-v-51a69436]:hover {\n  background-color: #f8f9fb;\n}\n.link_list a.active[data-v-51a69436] {\n  background-color: var(--q-primary);\n  color: white;\n  margin-left: 1.5em;\n}\n@media (max-width: 769px) {\n#sidebar[data-v-51a69436] {\n    z-index: 15;\n    transform: translateX(-100%);\n    width: 80%;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n#sidebar.active[data-v-51a69436] {\n    transform: translateX(0);\n}\n.overlay.active[data-v-51a69436] {\n    opacity: 1;\n    display: block;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".box_container[data-v-1bdc34e0] {\n  width: 100%;\n  font-family: \"Work Sans\", sans-serif;\n}\n.input_card_container[data-v-1bdc34e0] {\n  margin: 1em 0;\n}\n.input_card_container .input_box[data-v-1bdc34e0] {\n  margin-bottom: 1em;\n}\n.input_card_container .input_box p[data-v-1bdc34e0] {\n  width: 100%;\n}\nlabel[data-v-1bdc34e0] {\n  display: block;\n  margin: 0.4em 0;\n  font-medium: 500;\n}\n.input__container[data-v-1bdc34e0] {\n  margin-bottom: 1em;\n}\n@media (min-width: 769px) {\n.myHidden[data-v-1bdc34e0] {\n    display: block !important;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menudropdown[data-v-315150cd] {\n  max-width: 200px;\n  position: absolute;\n  top: 75px;\n  right: 10px;\n  z-index: 2;\n}\n.menudropdown a[data-v-315150cd],\n.menudropdown button[data-v-315150cd] {\n  display: block;\n  font-size: 0.9em;\n  cursor: pointer;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128/var(--tw-text-opacity));\n  padding: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.menudropdown a[data-v-315150cd]:hover,\n.menudropdown button[data-v-315150cd]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246/var(--tw-bg-opacity));\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_style_index_0_id_ec9a7772_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_style_index_0_id_ec9a7772_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_style_index_0_id_ec9a7772_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_db50f4b8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_db50f4b8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_db50f4b8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_style_index_0_id_51a69436_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_style_index_0_id_51a69436_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_style_index_0_id_51a69436_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_style_index_0_id_315150cd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_style_index_0_id_315150cd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_style_index_0_id_315150cd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue":
/*!***********************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputError.vue?vue&type=template&id=045826dc */ "./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc");
/* harmony import */ var _InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputError.vue?vue&type=script&lang=js */ "./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Jetstream/InputError.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/MainLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Layouts/MainLayout.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainLayout_vue_vue_type_template_id_ec9a7772_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true */ "./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true");
/* harmony import */ var _MainLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _MainLayout_vue_vue_type_style_index_0_id_ec9a7772_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true */ "./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MainLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainLayout_vue_vue_type_template_id_ec9a7772_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-ec9a7772"],['__file',"resources/js/Layouts/MainLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/SettingsLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/Layouts/SettingsLayout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsLayout_vue_vue_type_template_id_31b0a831__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsLayout.vue?vue&type=template&id=31b0a831 */ "./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831");
/* harmony import */ var _SettingsLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsLayout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SettingsLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SettingsLayout_vue_vue_type_template_id_31b0a831__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/SettingsLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Header.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Header.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_db50f4b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=db50f4b8&scoped=true */ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true");
/* harmony import */ var _Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_db50f4b8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true */ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_db50f4b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-db50f4b8"],['__file',"resources/js/Layouts/components/Mainlayout/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Sidenav.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidenav_vue_vue_type_template_id_51a69436_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=template&id=51a69436&scoped=true */ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true");
/* harmony import */ var _Sidenav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=script&lang=js */ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js");
/* harmony import */ var _Sidenav_vue_vue_type_style_index_0_id_51a69436_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true */ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Sidenav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidenav_vue_vue_type_template_id_51a69436_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-51a69436"],['__file',"resources/js/Layouts/components/Mainlayout/Sidenav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0&scoped=true */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true");
/* harmony import */ var _Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true */ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1bdc34e0"],['__file',"resources/js/Pages/Profile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/reusables_/MenuDropdown.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/reusables_/MenuDropdown.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuDropdown_vue_vue_type_template_id_315150cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true */ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true");
/* harmony import */ var _MenuDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuDropdown.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _MenuDropdown_vue_vue_type_style_index_0_id_315150cd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true */ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuDropdown_vue_vue_type_template_id_315150cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-315150cd"],['__file',"resources/js/components/reusables_/MenuDropdown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/reusables_/ProfilePic.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/reusables_/ProfilePic.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfilePic_vue_vue_type_template_id_6a003a1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePic.vue?vue&type=template&id=6a003a1e */ "./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e");
/* harmony import */ var _ProfilePic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePic.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_USER_laravel_course_prct_cryptjet_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProfilePic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProfilePic_vue_vue_type_template_id_6a003a1e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/reusables_/ProfilePic.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputError.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsLayout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidenav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuDropdown.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfilePic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfilePic_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfilePic.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc":
/*!*****************************************************************************!*\
  !*** ./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InputError_vue_vue_type_template_id_045826dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InputError.vue?vue&type=template&id=045826dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Jetstream/InputError.vue?vue&type=template&id=045826dc");


/***/ }),

/***/ "./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_ec9a7772_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_ec9a7772_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=template&id=ec9a7772&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831":
/*!*******************************************************************************!*\
  !*** ./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsLayout_vue_vue_type_template_id_31b0a831__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SettingsLayout_vue_vue_type_template_id_31b0a831__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SettingsLayout.vue?vue&type=template&id=31b0a831 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SettingsLayout.vue?vue&type=template&id=31b0a831");


/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_db50f4b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_db50f4b8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=db50f4b8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=template&id=db50f4b8&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_template_id_51a69436_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_template_id_51a69436_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidenav.vue?vue&type=template&id=51a69436&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=template&id=51a69436&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=template&id=1bdc34e0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true");


/***/ }),

/***/ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_template_id_315150cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_template_id_315150cd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=template&id=315150cd&scoped=true");


/***/ }),

/***/ "./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfilePic_vue_vue_type_template_id_6a003a1e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfilePic_vue_vue_type_template_id_6a003a1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfilePic.vue?vue&type=template&id=6a003a1e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/ProfilePic.vue?vue&type=template&id=6a003a1e");


/***/ }),

/***/ "./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_style_index_0_id_ec9a7772_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/MainLayout.vue?vue&type=style&index=0&id=ec9a7772&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_db50f4b8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Header.vue?vue&type=style&index=0&id=db50f4b8&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidenav_vue_vue_type_style_index_0_id_51a69436_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/components/Mainlayout/Sidenav.vue?vue&type=style&index=0&id=51a69436&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuDropdown_vue_vue_type_style_index_0_id_315150cd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/reusables_/MenuDropdown.vue?vue&type=style&index=0&id=315150cd&lang=scss&scoped=true");


/***/ })

}]);