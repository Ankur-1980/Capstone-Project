function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: 'preferences',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/preferences/preferences.module */
        "./src/app/components/preferences/preferences.module.ts")).then(function (m) {
          return m.PreferencesModule;
        });
      }
    }, {
      path: 'recipe-book',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/recipe-book/recipe-book.module */
        "./src/app/components/recipe-book/recipe-book.module.ts")).then(function (m) {
          return m.RecipeBookModule;
        });
      }
    }, {
      path: 'user-recipes',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/user-recipes/user-recipes.module */
        "./src/app/components/user-recipes/user-recipes.module.ts")).then(function (m) {
          return m.UserRecipesModule;
        });
      }
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/new-user/new-user-form/new-user-form.component */
    "./src/app/components/new-user/new-user-form/new-user-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/new-user/login-form/login-form.component */
    "./src/app/components/new-user/login-form/login-form.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-book.module */
    "./src/app/components/recipe-book/recipe-book.module.ts");
    /* harmony import */


    var _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/preferences/preferences.module */
    "./src/app/components/preferences/preferences.module.ts");
    /* harmony import */


    var _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/user-recipes/user-recipes.module */
    "./src/app/components/user-recipes/user-recipes.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 14,
      vars: 0,
      consts: [["routerLink", "/preferences"], ["routerLink", "/user-recipes"], ["routerLink", "/recipe-book"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Testing Routing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nav Bar Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Side Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "User Recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recipe Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 12,
      vars: 0,
      consts: [["href", "#"], ["routerLink", "/preferences"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NavBar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Drinks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Favorites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/new-user/login-form/login-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/new-user/login-form/login-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppComponentsNewUserLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(loginService, fb) {
        _classCallCheck(this, LoginFormComponent);

        this.loginService = loginService;
        this.fb = fb;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            userName: [''],
            password: [''],
            loginDate: this.fb.control(new Date())
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.loginForm.value);
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["login-form"]],
      decls: 15,
      vars: 1,
      consts: [[1, "background"], [1, "body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userName"], ["type", "text", "name", "userName", "formControlName", "userName"], ["for", "password"], ["type", "password", "name", "password", "formControlName", "password"], ["type", "submit"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".background[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  background-image: url('margarita.svg');\r\n  background-repeat: no-repeat;\r\n  background-color: rgb(52, 43, 56);\r\n  height: 115vh;\r\n  width: 125vw;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 60vw;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  color: rgb(236, 184, 92);\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  height: auto;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  color: rgb(236, 184, 92);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 10px 5px;\r\n  color: hsl(0, 0%, 100%);\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  border: 2pt solid rgb(236, 184, 92);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:hover {\r\n  border: 2pt solid #80bdad;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  padding: 10px 0px;\r\n  background-color: rgb(236, 184, 92);\r\n  \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #80bdad;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n  .background[_ngcontent-%COMP%] {\r\n    margin-top: 10vh;\r\n    height: 80vh;\r\n    width: 100vw;\r\n  }\r\n\r\n  .body[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 50vw;\r\n  }\r\n  .form-group[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    width: 30vw;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n  .background[_ngcontent-%COMP%] {\r\n    margin-top: 10vh;\r\n    height: 80vh;\r\n    width: 100vw;\r\n  }\r\n\r\n  .body[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 60vh;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    width: 40vw;\r\n    height: auto;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQ0FBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL01hcmdhcml0YS9tYXJnYXJpdGEuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNDMsIDU2KTtcclxuICBoZWlnaHQ6IDExNXZoO1xyXG4gIHdpZHRoOiAxMjV2dztcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDYwdnc7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICBib3JkZXI6IDJwdCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcclxufVxyXG5pbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHQgc29saWQgIzgwYmRhZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIC8qIGJveC1zaGFkb3c6IGJsYWNrIC0xcHQgMXB0IDNwdDsgKi9cclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGJkYWQ7XHJcbn1cclxuXHJcbi8qIG1lZGlhIFF1ZXJ5IGZvciBUYWJsZXRzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJhY2tncm91bmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcblxyXG4gIC5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNTB2dztcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgcGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuYmFja2dyb3VuZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuXHJcbiAgLmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login-form',
          templateUrl: './login-form.component.html',
          styleUrls: ['./login-form.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/new-user/new-user-form/new-user-form.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/new-user/new-user-form/new-user-form.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NewUserFormComponent */

  /***/
  function srcAppComponentsNewUserNewUserFormNewUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewUserFormComponent", function () {
      return NewUserFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");

    var NewUserFormComponent = /*#__PURE__*/function () {
      function NewUserFormComponent(fb, loginService) {
        _classCallCheck(this, NewUserFormComponent);

        this.fb = fb;
        this.loginService = loginService;
      }

      _createClass(NewUserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newUserForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
            bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            date: this.fb.control(new Date())
          });
        }
      }, {
        key: "validateDOB",
        value: function validateDOB(dob) {
          console.log(dob.target.value);
          var year = new Date(dob.target.value).getFullYear();
          var today = new Date().getFullYear();

          if (today - year >= 21) {
            console.log("you can drink");
          } else {
            console.log("you are not old enough");
          }
        } // getFirstName() {
        //   return this.newUserForm.get('firstName');
        // }
        // getUserName() {
        //   return this.newUserForm.get('userName');
        // }
        // getAge() {
        //   return this.newUserForm.get('age');
        // }
        // getEmail() {
        //   return this.newUserForm.get('getEmail');
        // }

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // console.log('form', this.newUserForm.value);
          this.loginService.addNewUser(this.newUserForm.value);
        }
      }]);

      return NewUserFormComponent;
    }();

    NewUserFormComponent.ɵfac = function NewUserFormComponent_Factory(t) {
      return new (t || NewUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
    };

    NewUserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewUserFormComponent,
      selectors: [["new-user-form"]],
      decls: 40,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName", "for", "label-control"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["for", "lastName", "for", "label-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["for", "userName", "for", "label-control"], ["type", "text", "formControlName", "userName", 1, "form-control"], ["for", "age", "for", "label-control"], ["formControlName", "age", "type", "date", "name", "dob", "placeholder", "DOB", 1, "form-control", 3, "change"], ["for", "email", "for", "label-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "password", "for", "label-control"], ["type", "password", "formControlName", "password", "placeholder", "password", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Confirm Password", 1, "form-control"], ["for", "bio", "for", "label-control", "rows", "4", "cols", "50"], ["formControlName", "bio", 1, "form-control"], ["type", "submit"], ["href", "#"]],
      template: function NewUserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New User Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewUserFormComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewUserFormComponent_Template_input_change_18_listener($event) {
            return ctx.validateDOB($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Biography:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Already registered? Click here to login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newUserForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbmV3LXVzZXItZm9ybS9uZXctdXNlci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'new-user-form',
          templateUrl: './new-user-form.component.html',
          styleUrls: ['./new-user-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/categories.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/preferences/categories.ts ***!
    \******************************************************/

  /*! exports provided: CATEGORIES */

  /***/
  function srcAppComponentsPreferencesCategoriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CATEGORIES", function () {
      return CATEGORIES;
    });

    var CATEGORIES = [{
      name: 'Things at Home',
      value: 'home_bar'
    }, {
      name: 'Bartenders',
      value: 'bartenders'
    }, {
      name: 'Places',
      value: 'places'
    }];
    /***/
  },

  /***/
  "./src/app/components/preferences/preferences-create/preferences-create.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-create/preferences-create.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PreferencesCreateComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesCreatePreferencesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesCreateComponent", function () {
      return PreferencesCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../categories */
    "./src/app/components/preferences/categories.ts");
    /* harmony import */


    var _preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../preferences.service */
    "./src/app/components/preferences/preferences.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesCreateComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
      }
    }

    var PreferencesCreateComponent = /*#__PURE__*/function () {
      function PreferencesCreateComponent(preferService, fb) {
        _classCallCheck(this, PreferencesCreateComponent);

        this.preferService = preferService;
        this.fb = fb;
        this.categories = _categories__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES"];
      }

      _createClass(PreferencesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itemForm = this.fb.group({
            info: [''],
            category: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // console.log(this.itemForm.value);
          this.preferService.addItems(this.itemForm.value);
          this.itemForm.reset();
        }
      }]);

      return PreferencesCreateComponent;
    }();

    PreferencesCreateComponent.ɵfac = function PreferencesCreateComponent_Factory(t) {
      return new (t || PreferencesCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_2__["PreferencesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    PreferencesCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesCreateComponent,
      selectors: [["preferences-create"]],
      decls: 10,
      vars: 2,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "name", "title", "formControlName", "info", "placeholder", "Description"], ["formControlName", "category", "name", "category", "id", "category"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function PreferencesCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PreferencesCreateComponent_Template_form_submit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreferencesCreateComponent_option_7_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.itemForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtY3JlYXRlL3ByZWZlcmVuY2VzLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-create',
          templateUrl: './preferences-create.component.html',
          styleUrls: ['./preferences-create.component.css']
        }]
      }], function () {
        return [{
          type: _preferences_service__WEBPACK_IMPORTED_MODULE_2__["PreferencesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-list/preferences-list.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-list/preferences-list.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PreferencesListComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesListPreferencesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesListComponent", function () {
      return PreferencesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../preferences.service */
    "./src/app/components/preferences/preferences.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesListComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesListComponent_div_1_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onDelete(item_r3.preference_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.preference_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.preference_info);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.preference_cat);
      }
    }

    function PreferencesListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesListComponent_div_1_div_1_Template, 9, 3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
      }
    }

    function PreferencesListComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No posts yet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PreferencesListComponent = /*#__PURE__*/function () {
      function PreferencesListComponent(preferService) {
        _classCallCheck(this, PreferencesListComponent);

        this.preferService = preferService;
        this.items = [];
      }

      _createClass(PreferencesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.preferService.getItems();
          this.itemsSub = this.preferService.getItemUpdateListener().subscribe(function (items) {
            _this.items = items;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(itemId) {
          this.preferService.deleteItem(itemId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.itemsSub.unsubscribe();
        }
      }]);

      return PreferencesListComponent;
    }();

    PreferencesListComponent.ɵfac = function PreferencesListComponent_Factory(t) {
      return new (t || PreferencesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]));
    };

    PreferencesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesListComponent,
      selectors: [["preferences-list"]],
      decls: 3,
      vars: 2,
      consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PreferencesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesListComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreferencesListComponent_p_2_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length < 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtbGlzdC9wcmVmZXJlbmNlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-list',
          templateUrl: './preferences-list.component.html',
          styleUrls: ['./preferences-list.component.css']
        }]
      }], function () {
        return [{
          type: _preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-main/preferences-main.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-main/preferences-main.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PreferencesMainComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesMainPreferencesMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesMainComponent", function () {
      return PreferencesMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../preferences-create/preferences-create.component */
    "./src/app/components/preferences/preferences-create/preferences-create.component.ts");
    /* harmony import */


    var _preferences_list_preferences_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../preferences-list/preferences-list.component */
    "./src/app/components/preferences/preferences-list/preferences-list.component.ts");

    var PreferencesMainComponent = /*#__PURE__*/function () {
      function PreferencesMainComponent() {
        _classCallCheck(this, PreferencesMainComponent);
      }

      _createClass(PreferencesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesMainComponent;
    }();

    PreferencesMainComponent.ɵfac = function PreferencesMainComponent_Factory(t) {
      return new (t || PreferencesMainComponent)();
    };

    PreferencesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesMainComponent,
      selectors: [["preferences-main"]],
      decls: 5,
      vars: 0,
      template: function PreferencesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preferences Main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "preferences-create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "preferences-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_1__["PreferencesCreateComponent"], _preferences_list_preferences_list_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtbWFpbi9wcmVmZXJlbmNlcy1tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-main',
          templateUrl: './preferences-main.component.html',
          styleUrls: ['./preferences-main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/preferences/preferences-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PreferencesRoutingModule */

  /***/
  function srcAppComponentsPreferencesPreferencesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesRoutingModule", function () {
      return PreferencesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./preferences-main/preferences-main.component */
    "./src/app/components/preferences/preferences-main/preferences-main.component.ts");

    var routes = [{
      path: '',
      component: _preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesMainComponent"]
    }];

    var PreferencesRoutingModule = function PreferencesRoutingModule() {
      _classCallCheck(this, PreferencesRoutingModule);
    };

    PreferencesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PreferencesRoutingModule
    });
    PreferencesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PreferencesRoutingModule_Factory(t) {
        return new (t || PreferencesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreferencesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/preferences/preferences.module.ts ***!
    \**************************************************************/

  /*! exports provided: PreferencesModule */

  /***/
  function srcAppComponentsPreferencesPreferencesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesModule", function () {
      return PreferencesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./preferences-routing.module */
    "./src/app/components/preferences/preferences-routing.module.ts");
    /* harmony import */


    var _preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preferences-main/preferences-main.component */
    "./src/app/components/preferences/preferences-main/preferences-main.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preferences-create/preferences-create.component */
    "./src/app/components/preferences/preferences-create/preferences-create.component.ts");
    /* harmony import */


    var _preferences_list_preferences_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preferences-list/preferences-list.component */
    "./src/app/components/preferences/preferences-list/preferences-list.component.ts");

    var PreferencesModule = function PreferencesModule() {
      _classCallCheck(this, PreferencesModule);
    };

    PreferencesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PreferencesModule
    });
    PreferencesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PreferencesModule_Factory(t) {
        return new (t || PreferencesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreferencesModule, {
        declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"], _preferences_list_preferences_list_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesListComponent"], _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesCreateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"], _preferences_list_preferences_list_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesListComponent"], _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesCreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/preferences/preferences.service.ts ***!
    \***************************************************************/

  /*! exports provided: PreferencesService */

  /***/
  function srcAppComponentsPreferencesPreferencesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesService", function () {
      return PreferencesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PreferencesService = /*#__PURE__*/function () {
      function PreferencesService(http) {
        _classCallCheck(this, PreferencesService);

        this.http = http;
        this.itemsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(PreferencesService, [{
        key: "getItems",
        value: function getItems() {
          var _this2 = this;

          this.http.get('/api/preferences').subscribe(function (data) {
            console.log(data.message);
            _this2.items = data.items;

            _this2.itemsUpdated.next(_toConsumableArray(_this2.items));
          });
        }
      }, {
        key: "getItemUpdateListener",
        value: function getItemUpdateListener() {
          return this.itemsUpdated.asObservable();
        }
      }, {
        key: "addItems",
        value: function addItems(formValue) {
          var _this3 = this;

          console.log(formValue);
          this.http.post('/api/preferences', formValue).subscribe(function (response) {
            console.log(response.message);

            _this3.itemsUpdated.next(response.items);
          });
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(itemId) {
          var _this4 = this;

          this.http["delete"]("/api/preferences/".concat(itemId)).subscribe(function (response) {
            // console.log(response.message);
            // console.log('service', response.items);
            _this4.items = response.items;
            _this4.items = _this4.items.filter(function (item) {
              return item.preference_id !== itemId;
            });

            _this4.itemsUpdated.next(_toConsumableArray(_this4.items));
          });
        }
      }]);

      return PreferencesService;
    }();

    PreferencesService.ɵfac = function PreferencesService_Factory(t) {
      return new (t || PreferencesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PreferencesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PreferencesService,
      factory: PreferencesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-book-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-book-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: RecipeBookRoutingModule */

  /***/
  function srcAppComponentsRecipeBookRecipeBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeBookRoutingModule", function () {
      return RecipeBookRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipe-main/recipe-main.component */
    "./src/app/components/recipe-book/recipe-main/recipe-main.component.ts");

    var routes = [{
      path: '',
      component: _recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_2__["RecipeMainComponent"]
    }];

    var RecipeBookRoutingModule = function RecipeBookRoutingModule() {
      _classCallCheck(this, RecipeBookRoutingModule);
    };

    RecipeBookRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RecipeBookRoutingModule
    });
    RecipeBookRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RecipeBookRoutingModule_Factory(t) {
        return new (t || RecipeBookRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipeBookRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeBookRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-book.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-book.module.ts ***!
    \**************************************************************/

  /*! exports provided: RecipeBookModule */

  /***/
  function srcAppComponentsRecipeBookRecipeBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeBookModule", function () {
      return RecipeBookModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recipe-book/recipe-book-routing.module */
    "./src/app/components/recipe-book/recipe-book-routing.module.ts");
    /* harmony import */


    var _recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../recipe-book/recipe-main/recipe-main.component */
    "./src/app/components/recipe-book/recipe-main/recipe-main.component.ts");
    /* harmony import */


    var _recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../recipe-book/recipe-favorites/recipe-favorites.component */
    "./src/app/components/recipe-book/recipe-favorites/recipe-favorites.component.ts");
    /* harmony import */


    var _recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../recipe-book/recipe-details/recipe-details.component */
    "./src/app/components/recipe-book/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../recipe-book/recipe-card/recipe-card.component */
    "./src/app/components/recipe-book/recipe-card/recipe-card.component.ts");
    /* harmony import */


    var _recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../recipe-book/recipe-search/recipe-search.component */
    "./src/app/components/recipe-book/recipe-search/recipe-search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RecipeBookModule = function RecipeBookModule() {
      _classCallCheck(this, RecipeBookModule);
    };

    RecipeBookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RecipeBookModule
    });
    RecipeBookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RecipeBookModule_Factory(t) {
        return new (t || RecipeBookModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeBookRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipeBookModule, {
        declarations: [_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_3__["RecipeMainComponent"], _recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_4__["RecipeFavoritesComponent"], _recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"], _recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"], _recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_7__["RecipeSearchComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeBookRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeBookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_3__["RecipeMainComponent"], _recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_4__["RecipeFavoritesComponent"], _recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"], _recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"], _recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_7__["RecipeSearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeBookRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-card/recipe-card.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-card/recipe-card.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RecipeCardComponent */

  /***/
  function srcAppComponentsRecipeBookRecipeCardRecipeCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeCardComponent", function () {
      return RecipeCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RecipeCardComponent = /*#__PURE__*/function () {
      function RecipeCardComponent() {
        _classCallCheck(this, RecipeCardComponent);
      }

      _createClass(RecipeCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeCardComponent;
    }();

    RecipeCardComponent.ɵfac = function RecipeCardComponent_Factory(t) {
      return new (t || RecipeCardComponent)();
    };

    RecipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeCardComponent,
      selectors: [["recipe-card"]],
      inputs: {
        recipe: "recipe"
      },
      decls: 44,
      vars: 36,
      consts: [[1, "card-container"], [3, "routerLink"], ["width", "100px", 3, "src", "alt"]],
      template: function RecipeCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "more details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ingredients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.strDrink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "recipe-details/", ctx.recipe.idDrink, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.strDrinkThumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.strDrink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Glassware: ", ctx.recipe.strGlass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure1, " ", ctx.recipe.strIngredient1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure2, " ", ctx.recipe.strIngredient2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure3, " ", ctx.recipe.strIngredient3, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure4, " ", ctx.recipe.strIngredient4, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure5, " ", ctx.recipe.strIngredient5, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure6, " ", ctx.recipe.strIngredient6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure7, " ", ctx.recipe.strIngredient7, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure8, " ", ctx.recipe.strIngredient8, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure9, " ", ctx.recipe.strIngredient9, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure10, " ", ctx.recipe.strIngredient10, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure11, " ", ctx.recipe.strIngredient11, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure12, " ", ctx.recipe.strIngredient12, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure13, " ", ctx.recipe.strIngredient13, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure14, " ", ctx.recipe.strIngredient14, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.recipe.strMeasure15, " ", ctx.recipe.strIngredient15, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Method: ", ctx.recipe.strInstructions, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLWNhcmQvcmVjaXBlLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'recipe-card',
          templateUrl: './recipe-card.component.html',
          styleUrls: ['./recipe-card.component.css']
        }]
      }], function () {
        return [];
      }, {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-details/recipe-details.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-details/recipe-details.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: RecipeDetailsComponent */

  /***/
  function srcAppComponentsRecipeBookRecipeDetailsRecipeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function () {
      return RecipeDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RecipeDetailsComponent = /*#__PURE__*/function () {
      function RecipeDetailsComponent(recipeAPI, route) {
        _classCallCheck(this, RecipeDetailsComponent);

        this.recipeAPI = recipeAPI;
        this.route = route;
      }

      _createClass(RecipeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recipeID = this.route.snapshot.params.recipeID;
          this.recipeAPI.getDetails(this.recipeID).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return RecipeDetailsComponent;
    }();

    RecipeDetailsComponent.ɵfac = function RecipeDetailsComponent_Factory(t) {
      return new (t || RecipeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    RecipeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeDetailsComponent,
      selectors: [["app-recipe-details"]],
      decls: 2,
      vars: 0,
      template: function RecipeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recipe-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-details',
          templateUrl: './recipe-details.component.html',
          styleUrls: ['./recipe-details.component.css']
        }]
      }], function () {
        return [{
          type: _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-favorites/recipe-favorites.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-favorites/recipe-favorites.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: RecipeFavoritesComponent */

  /***/
  function srcAppComponentsRecipeBookRecipeFavoritesRecipeFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeFavoritesComponent", function () {
      return RecipeFavoritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecipeFavoritesComponent = /*#__PURE__*/function () {
      function RecipeFavoritesComponent() {
        _classCallCheck(this, RecipeFavoritesComponent);
      }

      _createClass(RecipeFavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeFavoritesComponent;
    }();

    RecipeFavoritesComponent.ɵfac = function RecipeFavoritesComponent_Factory(t) {
      return new (t || RecipeFavoritesComponent)();
    };

    RecipeFavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeFavoritesComponent,
      selectors: [["app-recipe-favorites"]],
      decls: 2,
      vars: 0,
      template: function RecipeFavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recipe-favorites works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLWZhdm9yaXRlcy9yZWNpcGUtZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeFavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-favorites',
          templateUrl: './recipe-favorites.component.html',
          styleUrls: ['./recipe-favorites.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-main/recipe-main.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-main/recipe-main.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RecipeMainComponent */

  /***/
  function srcAppComponentsRecipeBookRecipeMainRecipeMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeMainComponent", function () {
      return RecipeMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var _recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recipe-search/recipe-search.component */
    "./src/app/components/recipe-book/recipe-search/recipe-search.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../recipe-card/recipe-card.component */
    "./src/app/components/recipe-book/recipe-card/recipe-card.component.ts");

    function RecipeMainComponent_recipe_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "recipe-card", 2);
      }

      if (rf & 2) {
        var recipe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipe_r1);
      }
    }

    var RecipeMainComponent = /*#__PURE__*/function () {
      function RecipeMainComponent(recipeApi) {
        _classCallCheck(this, RecipeMainComponent);

        this.recipeApi = recipeApi;
      }

      _createClass(RecipeMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.recipeApi.getLetterA().subscribe(function (data) {
            _this5.recipes = data['drinks'];
            console.log(_this5.recipes);
          });
        }
      }, {
        key: "nameSearch",
        value: function nameSearch(results) {
          // console.log(results);
          this.recipes = results;
        }
      }]);

      return RecipeMainComponent;
    }();

    RecipeMainComponent.ɵfac = function RecipeMainComponent_Factory(t) {
      return new (t || RecipeMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]));
    };

    RecipeMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeMainComponent,
      selectors: [["recipe-main"]],
      decls: 2,
      vars: 1,
      consts: [[3, "searchResults"], [3, "recipe", 4, "ngFor", "ngForOf"], [3, "recipe"]],
      template: function RecipeMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "recipe-search", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchResults", function RecipeMainComponent_Template_recipe_search_searchResults_0_listener($event) {
            return ctx.nameSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeMainComponent_recipe_card_1_Template, 1, 1, "recipe-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_2__["RecipeSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLW1haW4vcmVjaXBlLW1haW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'recipe-main',
          templateUrl: './recipe-main.component.html',
          styleUrls: ['./recipe-main.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-book/recipe-search/alphabet.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-search/alphabet.ts ***!
    \******************************************************************/

  /*! exports provided: ALPHABET */

  /***/
  function srcAppComponentsRecipeBookRecipeSearchAlphabetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALPHABET", function () {
      return ALPHABET;
    });

    var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    /***/
  },

  /***/
  "./src/app/components/recipe-book/recipe-search/recipe-search.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/recipe-book/recipe-search/recipe-search.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: RecipeSearchComponent */

  /***/
  function srcAppComponentsRecipeBookRecipeSearchRecipeSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeSearchComponent", function () {
      return RecipeSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alphabet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alphabet */
    "./src/app/components/recipe-book/recipe-search/alphabet.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipeSearchComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var letters_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", letters_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letters_r1);
      }
    }

    var RecipeSearchComponent = /*#__PURE__*/function () {
      function RecipeSearchComponent(fb, recipeAPI) {
        _classCallCheck(this, RecipeSearchComponent);

        this.fb = fb;
        this.recipeAPI = recipeAPI;
        this.alphabet = _alphabet__WEBPACK_IMPORTED_MODULE_1__["ALPHABET"];
        this.searchResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RecipeSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.recipeAPI.getGlassware().subscribe(function (data) {
            _this6.glassware = data['drinks'];
          });
          this.recipeAPI.getAlcoholic().subscribe(function (data) {
            _this6.alcoholic = data['drinks'];
          });
          this.recipeAPI.getCategories().subscribe(function (data) {
            _this6.categories = data['drinks'];
          });
          this.recipeAPI.filterCocktailType().subscribe(function (data) {
            console.log('filter cocktails', data['drinks']);
          }); // this.filterForm = this.fb.group({
          //   glassware: [''],
          //   categories: [''],
          //   booze: [''],
          //   alphabet: [''],
          // });

          this.nameSearch = this.fb.group({
            searchName: ['']
          });
          this.letterSearch = this.fb.group({
            letter: ['']
          });
        }
      }, {
        key: "searchByName",
        value: function searchByName() {
          var _this7 = this;

          this.recipeAPI.searchByName(this.nameSearch.value).subscribe(function (data) {
            return _this7.searchResults.emit(data['drinks']);
          });
        }
      }, {
        key: "searchByLetter",
        value: function searchByLetter() {
          var _this8 = this;

          this.recipeAPI.searchByLetter(this.letterSearch.value).subscribe(function (data) {
            _this8.searchResults.emit(data['drinks']);
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.filterForm.reset();
        }
      }]);

      return RecipeSearchComponent;
    }();

    RecipeSearchComponent.ɵfac = function RecipeSearchComponent_Factory(t) {
      return new (t || RecipeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"]));
    };

    RecipeSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeSearchComponent,
      selectors: [["recipe-search"]],
      outputs: {
        searchResults: "searchResults"
      },
      decls: 15,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Search by Name", "formControlName", "searchName"], ["type", "submit"], ["for", "alphabet"], ["formControlName", "letter", "name", "letter", "id", "letter"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function RecipeSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeSearchComponent_Template_form_ngSubmit_0_listener() {
            return ctx.searchByName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeSearchComponent_Template_form_ngSubmit_5_listener() {
            return ctx.searchByLetter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose a Letter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Letters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeSearchComponent_option_12_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.nameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.letterSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alphabet);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLXNlYXJjaC9yZWNpcGUtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'recipe-search',
          templateUrl: './recipe-search.component.html',
          styleUrls: ['./recipe-search.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"]
        }];
      }, {
        searchResults: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UserRecipesCreateComponent */

  /***/
  function srcAppComponentsUserRecipesUserRecipesCreateUserRecipesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipesCreateComponent", function () {
      return UserRecipesCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/user-recipes/user-recipes.service */
    "./src/app/components/user-recipes/user-recipes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRecipesCreateComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var glass_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", glass_r1.strGlass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](glass_r1.strGlass);
      }
    }

    var UserRecipesCreateComponent = /*#__PURE__*/function () {
      function UserRecipesCreateComponent(fb, recipeAPI, userRecipeService) {
        _classCallCheck(this, UserRecipesCreateComponent);

        this.fb = fb;
        this.recipeAPI = recipeAPI;
        this.userRecipeService = userRecipeService;
      }

      _createClass(UserRecipesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.recipeAPI.getGlassware().subscribe(function (data) {
            _this9.glassware = data['drinks'];
          });
          var element = this.fb.group({
            amount: [''],
            ingredient: ['']
          });
          this.userRecipe = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rating: [''],
            glassware: [''],
            latitude: [''],
            longitude: [''],
            method: [''],
            ingredient1: element,
            ingredient2: element,
            ingredient3: element,
            ingredient4: element,
            ingredient5: element
          });
        } // removeIngredient(i) {
        //   let ingredientsArray = this.userRecipe.controls.ingredients as FormArray;
        //   ingredientsArray.removeAt(i);
        // }
        // addIngredient() {
        //   let ingredientsArray = this.userRecipe.controls.ingredients as FormArray;
        //   let arrayLen = ingredientsArray.length;
        //   let newIngredientGroup: FormGroup = this.fb.group({
        //     amount: [''],
        //     ingredient: [''],
        //   });
        //   ingredientsArray.insert(arrayLen, newIngredientGroup);
        // }

      }, {
        key: "changeRating",
        value: function changeRating(value) {
          console.log(value); // this.ratingChange = value;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.userRecipeService.addNewRecipe(this.userRecipe.value);
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this10 = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            _this10.latitude = position.coords.latitude;
            _this10.longitude = position.coords.longitude;
          });
        }
      }]);

      return UserRecipesCreateComponent;
    }();

    UserRecipesCreateComponent.ɵfac = function UserRecipesCreateComponent_Factory(t) {
      return new (t || UserRecipesCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_2__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__["UserRecipesService"]));
    };

    UserRecipesCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipesCreateComponent,
      selectors: [["user-recipes-create"]],
      decls: 54,
      vars: 4,
      consts: [[1, "background"], [1, "body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name"], ["type", "range", "min", "1", "max", "5", "value", "0", "step", ".5", "id", "rating-slider", "formControlName", "rating", 1, "slider"], ["formControlName", "glassware", "name", "glassware", "id", "glassware"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], ["for", "method"], ["name", "method", "formControlName", "method", "id", "method", "cols", "1", "rows", "1", 1, "methodInput"], [1, "formGroupLabel"], ["for", "amount", 1, "amount"], ["for", "ingredient", 1, "ingredient"], [1, "formFields"], ["formGroupName", "ingredient1"], ["type", "text", "formControlName", "amount"], ["type", "text", "formControlName", "ingredient"], ["formGroupName", "ingredient2"], ["type", "text", "formControlName", "amount", 1, ""], ["formGroupName", "ingredient3"], ["formGroupName", "ingredient4"], ["formGroupName", "ingredient5"], ["type", "submit"], [3, "value"]],
      template: function UserRecipesCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Recipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserRecipesCreateComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drink Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Glassware");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserRecipesCreateComponent_option_15_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRecipesCreateComponent_Template_button_click_17_listener() {
            return ctx.getLocation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Latitude: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Longitude: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ingredient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userRecipe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glassware);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.latitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.longitude);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
      styles: [".background[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  \r\n  \r\n  background-color: rgb(52, 43, 56);\r\n  height: 125vh;\r\n  width: 125vw;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 90vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 40vh;\r\n  font-size: 50px;\r\n  color: rgb(236, 184, 92);\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  height: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.methodInput[_ngcontent-%COMP%] {\r\n  padding: 10px 5px;\r\n  color: hsl(0, 0%, 100%);\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  border: 2pt solid rgb(236, 184, 92);\r\n}\r\n\r\n.methodInput[_ngcontent-%COMP%]:hover {\r\n  border: 2pt solid #80bdad;\r\n}\r\n\r\n.formGroupLabel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 3vh;\r\n}\r\n\r\n.formFields[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n.formGroupName[_ngcontent-%COMP%] {\r\n  width: 10vw;\r\n  height: auto;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  color: rgb(236, 184, 92);\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  padding: 10px 5px;\r\n  color: hsl(0, 0%, 100%);\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  border: 2pt solid rgb(236, 184, 92);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:hover {\r\n  border: 2pt solid #80bdad;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  padding: 10px 0px;\r\n  background-color: rgb(236, 184, 92);\r\n  \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #80bdad;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlY2lwZXMvdXNlci1yZWNpcGVzLWNyZWF0ZS91c2VyLXJlY2lwZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0RBQXNEO0VBQ3RELGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDRCQUE0Qjs7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzQks7O0FBRUwsMEJBQTBCOztBQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0JLIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlY2lwZXMvdXNlci1yZWNpcGVzLWNyZWF0ZS91c2VyLXJlY2lwZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9NYXJnYXJpdGEvbWFyZ2FyaXRhLnN2Zyk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDQzLCA1Nik7XHJcbiAgaGVpZ2h0OiAxMjV2aDtcclxuICB3aWR0aDogMTI1dnc7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiA0MHZoO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubWV0aG9kSW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIsIDAuNSk7XHJcbiAgYm9yZGVyOiAycHQgc29saWQgcmdiKDIzNiwgMTg0LCA5Mik7XHJcbn1cclxuXHJcbi5tZXRob2RJbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHQgc29saWQgIzgwYmRhZDtcclxufVxyXG5cclxuLmZvcm1Hcm91cExhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxufVxyXG4uZm9ybUZpZWxkcyB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZm9ybUdyb3VwTmFtZSB7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxufVxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyLCAwLjUpO1xyXG4gIGJvcmRlcjogMnB0IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG59XHJcbmlucHV0OmhvdmVyIHtcclxuICBib3JkZXI6IDJwdCBzb2xpZCAjODBiZGFkO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgLyogYm94LXNoYWRvdzogYmxhY2sgLTFwdCAxcHQgM3B0OyAqL1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmRhZDtcclxufVxyXG5cclxuLyogbWVkaWEgUXVlcnkgZm9yIFRhYmxldHMgKi9cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYm9keSB7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfSAqL1xyXG5cclxuLyogTWVkaWEgUXVlcnkgZm9yIHBob25lICovXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJvZHkge1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9ybSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIH0gKi9cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-recipes-create',
          templateUrl: './user-recipes-create.component.html',
          styleUrls: ['./user-recipes-create.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_2__["RecipeApiService"]
        }, {
          type: src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__["UserRecipesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipes-main/user-recipes-main.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipes-main/user-recipes-main.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: UserRecipesMainComponent */

  /***/
  function srcAppComponentsUserRecipesUserRecipesMainUserRecipesMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipesMainComponent", function () {
      return UserRecipesMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/components/user-recipes/user-recipes.service */
    "./src/app/components/user-recipes/user-recipes.service.ts");
    /* harmony import */


    var _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-recipes-create/user-recipes-create.component */
    "./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts");

    var UserRecipesMainComponent = /*#__PURE__*/function () {
      function UserRecipesMainComponent(userRecipeService) {
        _classCallCheck(this, UserRecipesMainComponent);

        this.userRecipeService = userRecipeService;
      }

      _createClass(UserRecipesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userRecipeService.getRecipes().subscribe(function (data) {
            return console.log('User Recipes', data);
          });
        }
      }]);

      return UserRecipesMainComponent;
    }();

    UserRecipesMainComponent.ɵfac = function UserRecipesMainComponent_Factory(t) {
      return new (t || UserRecipesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__["UserRecipesService"]));
    };

    UserRecipesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipesMainComponent,
      selectors: [["user-recipes-main"]],
      decls: 1,
      vars: 0,
      template: function UserRecipesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-recipes-create");
        }
      },
      directives: [_user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesCreateComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWNpcGVzL3VzZXItcmVjaXBlcy1tYWluL3VzZXItcmVjaXBlcy1tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-recipes-main',
          templateUrl: './user-recipes-main.component.html',
          styleUrls: ['./user-recipes-main.component.css']
        }]
      }], function () {
        return [{
          type: src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__["UserRecipesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipes-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipes-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: UserRecipesRoutingModule */

  /***/
  function srcAppComponentsUserRecipesUserRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipesRoutingModule", function () {
      return UserRecipesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-recipes-main/user-recipes-main.component */
    "./src/app/components/user-recipes/user-recipes-main/user-recipes-main.component.ts");

    var routes = [{
      path: '',
      component: _user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"]
    }];

    var UserRecipesRoutingModule = function UserRecipesRoutingModule() {
      _classCallCheck(this, UserRecipesRoutingModule);
    };

    UserRecipesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRecipesRoutingModule
    });
    UserRecipesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRecipesRoutingModule_Factory(t) {
        return new (t || UserRecipesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRecipesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipes.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipes.module.ts ***!
    \****************************************************************/

  /*! exports provided: UserRecipesModule */

  /***/
  function srcAppComponentsUserRecipesUserRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipesModule", function () {
      return UserRecipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-recipes-main/user-recipes-main.component */
    "./src/app/components/user-recipes/user-recipes-main/user-recipes-main.component.ts");
    /* harmony import */


    var _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-recipes-create/user-recipes-create.component */
    "./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-recipes-routing.module */
    "./src/app/components/user-recipes/user-recipes-routing.module.ts");

    var UserRecipesModule = function UserRecipesModule() {
      _classCallCheck(this, UserRecipesModule);
    };

    UserRecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserRecipesModule
    });
    UserRecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserRecipesModule_Factory(t) {
        return new (t || UserRecipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _user_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRecipesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRecipesModule, {
        declarations: [_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"], _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _user_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRecipesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"], _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _user_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRecipesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipes.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipes.service.ts ***!
    \*****************************************************************/

  /*! exports provided: UserRecipesService */

  /***/
  function srcAppComponentsUserRecipesUserRecipesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipesService", function () {
      return UserRecipesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserRecipesService = /*#__PURE__*/function () {
      function UserRecipesService(http) {
        _classCallCheck(this, UserRecipesService);

        this.http = http;
      }

      _createClass(UserRecipesService, [{
        key: "addNewRecipe",
        value: function addNewRecipe(formValue) {
          console.log(formValue);
          this.http.post('/api/recipes', formValue).subscribe(function (response) {
            console.log(response.message);
          });
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.http.get('/api/recipes');
        }
      }]);

      return UserRecipesService;
    }();

    UserRecipesService.ɵfac = function UserRecipesService_Factory(t) {
      return new (t || UserRecipesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserRecipesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserRecipesService,
      factory: UserRecipesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get('/api/users');
        }
      }, {
        key: "addNewUser",
        value: function addNewUser(formValue) {
          this.http.post('/api/users', formValue).subscribe(function (response) {
            console.log(response.message);
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/recipeAPI.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/recipeAPI.service.ts ***!
    \***********************************************/

  /*! exports provided: RecipeApiService */

  /***/
  function srcAppServicesRecipeAPIServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeApiService", function () {
      return RecipeApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RecipeApiService = /*#__PURE__*/function () {
      function RecipeApiService(http) {
        _classCallCheck(this, RecipeApiService);

        this.http = http;
        this.baseUrl = 'https://www.thecocktaildb.com/api/json/v2/9973533/';
      } // list the categories


      _createClass(RecipeApiService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get("".concat(this.baseUrl, "list.php?c=list"));
        } // glassware

      }, {
        key: "getGlassware",
        value: function getGlassware() {
          return this.http.get("".concat(this.baseUrl, "list.php?g=list"));
        }
      }, {
        key: "getAlcoholic",
        value: function getAlcoholic() {
          return this.http.get("".concat(this.baseUrl, "list.php?a=list"));
        }
      }, {
        key: "getLetterA",
        value: function getLetterA() {
          return this.http.get("".concat(this.baseUrl, "search.php?f=a"));
        }
      }, {
        key: "getLetter",
        value: function getLetter(letter) {
          return this.http.get("".concat(this.baseUrl, "search.php?f=").concat(letter));
        }
      }, {
        key: "getIngredients",
        value: function getIngredients() {
          return this.http.get("".concat(this.baseUrl, "list.php?i=list"));
        }
      }, {
        key: "getDetails",
        value: function getDetails(recipeID) {
          return this.http.get("".concat(this.baseUrl, "lookup.php?i=").concat(recipeID));
        }
      }, {
        key: "filterNA",
        value: function filterNA(something) {
          return this.http.get("".concat(this.baseUrl, "filter.php?a=Alcoholic"));
        }
      }, {
        key: "filterCocktailType",
        value: function filterCocktailType() {
          return this.http.get("".concat(this.baseUrl, "filter.php?g=Cocktail_glass"));
        }
      }, {
        key: "searchByName",
        value: function searchByName(name) {
          return this.http.get("".concat(this.baseUrl, "search.php?s=").concat(name.searchName));
        }
      }, {
        key: "searchByLetter",
        value: function searchByLetter(letter) {
          // console.log(letter);
          return this.http.get("".concat(this.baseUrl, "search.php?f=").concat(letter.letter));
        }
      }]);

      return RecipeApiService;
    }();

    RecipeApiService.ɵfac = function RecipeApiService_Factory(t) {
      return new (t || RecipeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RecipeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecipeApiService,
      factory: RecipeApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\arvju\Desktop\Grand_Circus\Projects\Capstone-Project\Drinks-App\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map