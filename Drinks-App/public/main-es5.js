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
    /* harmony import */


    var _components_recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-details/recipe-details.component */
    "./src/app/components/recipe-book/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-main/recipe-main.component */
    "./src/app/components/recipe-book/recipe-main/recipe-main.component.ts");
    /* harmony import */


    var _components_preferences_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/preferences/preferences-main/preferences-main.component */
    "./src/app/components/preferences/preferences-main/preferences-main.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: 'recipe-details/:recipeID',
      component: _components_recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsComponent"]
    }, {
      path: 'recipe-book',
      component: _components_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_4__["RecipeMainComponent"]
    }, {
      path: 'preferences',
      component: _components_preferences_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesMainComponent"]
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


    var _components_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-main/recipe-main.component */
    "./src/app/components/recipe-book/recipe-main/recipe-main.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-favorites/recipe-favorites.component */
    "./src/app/components/recipe-book/recipe-favorites/recipe-favorites.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-details/recipe-details.component */
    "./src/app/components/recipe-book/recipe-details/recipe-details.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-card/recipe-card.component */
    "./src/app/components/recipe-book/recipe-card/recipe-card.component.ts");
    /* harmony import */


    var _components_recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/recipe-book/recipe-search/recipe-search.component */
    "./src/app/components/recipe-book/recipe-search/recipe-search.component.ts");
    /* harmony import */


    var _components_user_recipes_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-recipes/user-recipes-main/user-recipes-main.component */
    "./src/app/components/user-recipes/user-recipes-main/user-recipes-main.component.ts");
    /* harmony import */


    var _components_user_recipes_user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/user-recipes/user-recipes-create/user-recipes-create.component */
    "./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts");
    /* harmony import */


    var _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/new-user/login-form/login-form.component */
    "./src/app/components/new-user/login-form/login-form.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_preferences_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/preferences/preferences-main/preferences-main.component */
    "./src/app/components/preferences/preferences-main/preferences-main.component.ts");
    /* harmony import */


    var _components_preferences_preferences_homebar_preferences_homebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/preferences/preferences-homebar/preferences-homebar.component */
    "./src/app/components/preferences/preferences-homebar/preferences-homebar.component.ts");
    /* harmony import */


    var _components_preferences_preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/preferences/preferences-locations/preferences-locations.component */
    "./src/app/components/preferences/preferences-locations/preferences-locations.component.ts");
    /* harmony import */


    var _components_preferences_preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/preferences/preferences-bartenders/preferences-bartenders.component */
    "./src/app/components/preferences/preferences-bartenders/preferences-bartenders.component.ts");
    /* harmony import */


    var _components_preferences_preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/preferences/preferences-drinks/preferences-drinks.component */
    "./src/app/components/preferences/preferences-drinks/preferences-drinks.component.ts");
    /* harmony import */


    var _components_preferences_preferences_input_preferences_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/preferences/preferences-input/preferences-input.component */
    "./src/app/components/preferences/preferences-input/preferences-input.component.ts");
    /* harmony import */


    var _components_preferences_preferences_post_preferences_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/preferences/preferences-post/preferences-post.component */
    "./src/app/components/preferences/preferences-post/preferences-post.component.ts");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_9__["RecipeMainComponent"], _components_recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_10__["RecipeFavoritesComponent"], _components_recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__["RecipeDetailsComponent"], _components_recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_12__["RecipeCardComponent"], _components_recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_13__["RecipeSearchComponent"], _components_user_recipes_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_14__["UserRecipesMainComponent"], _components_user_recipes_user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_15__["UserRecipesCreateComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _components_preferences_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_18__["PreferencesMainComponent"], _components_preferences_preferences_homebar_preferences_homebar_component__WEBPACK_IMPORTED_MODULE_19__["PreferencesHomebarComponent"], _components_preferences_preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_20__["PreferencesLocationsComponent"], _components_preferences_preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_21__["PreferencesBartendersComponent"], _components_preferences_preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesDrinksComponent"], _components_preferences_preferences_input_preferences_input_component__WEBPACK_IMPORTED_MODULE_23__["PreferencesInputComponent"], _components_preferences_preferences_post_preferences_post_component__WEBPACK_IMPORTED_MODULE_24__["PreferencesPostComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_9__["RecipeMainComponent"], _components_recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_10__["RecipeFavoritesComponent"], _components_recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_11__["RecipeDetailsComponent"], _components_recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_12__["RecipeCardComponent"], _components_recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_13__["RecipeSearchComponent"], _components_user_recipes_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_14__["UserRecipesMainComponent"], _components_user_recipes_user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_15__["UserRecipesCreateComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _components_preferences_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_18__["PreferencesMainComponent"], _components_preferences_preferences_homebar_preferences_homebar_component__WEBPACK_IMPORTED_MODULE_19__["PreferencesHomebarComponent"], _components_preferences_preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_20__["PreferencesLocationsComponent"], _components_preferences_preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_21__["PreferencesBartendersComponent"], _components_preferences_preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesDrinksComponent"], _components_preferences_preferences_input_preferences_input_component__WEBPACK_IMPORTED_MODULE_23__["PreferencesInputComponent"], _components_preferences_preferences_post_preferences_post_component__WEBPACK_IMPORTED_MODULE_24__["PreferencesPostComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
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


    var _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.strCategory);
      }
    }

    function MainComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var glass_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](glass_r4.strGlass);
      }
    }

    function MainComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var alcoholic_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alcoholic_r5.strAlcoholic);
      }
    }

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(recipeApi, loginService) {
        _classCallCheck(this, MainComponent);

        this.recipeApi = recipeApi;
        this.loginService = loginService;
        this.zoom = 12;
        this.options = {
          mapTypeId: 'hybrid',
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          maxZoom: 15,
          minZoom: 8
        };
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginService.getUsers().subscribe(function (data) {
            return console.log(data);
          });
          this.recipeApi.getCategories().subscribe(function (data) {
            _this.categories = data['drinks']; // console.log(this.categories);
          });
          this.recipeApi.getGlassware().subscribe(function (data) {
            _this.glasses = data['drinks']; // console.log(this.glasses);
          });
          this.recipeApi.getIngredients().subscribe(function (data) {
            _this.ingredients = data['drinks'];
            console.log('Ingredients', _this.ingredients);
          });
          this.recipeApi.getAlcoholic().subscribe(function (data) {
            _this.alcoholics = data['drinks']; // console.log(this.alcoholics);
          });
          this.recipeApi.getLetterA().subscribe(function (data) {
            console.log('letter A', data);
          }); // navigator.geolocation.getCurrentPosition((position) => {
          //   this.center = {
          //     lat: position.coords.latitude,
          //     lng: position.coords.longitude,
          //   };
          //   this.latitude = position.coords.latitude;
          //   this.longitude = position.coords.longitude;
          // });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 12,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_li_3_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Glasses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainComponent_li_7_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Alcoholic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainComponent_li_11_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alcoholics);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
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
        return [{
          type: _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }];
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
      consts: [["href", "#"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Favorites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
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
      decls: 13,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userName"], ["type", "text", "name", "userName", "formControlName", "userName", "placeholder", "Username"], ["for", "password"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "Password"], ["type", "submit"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Already registered? Click here to login");

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
  "./src/app/components/preferences/preferences-bartenders/preferences-bartenders.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-bartenders/preferences-bartenders.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: PreferencesBartendersComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesBartendersPreferencesBartendersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesBartendersComponent", function () {
      return PreferencesBartendersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreferencesBartendersComponent = /*#__PURE__*/function () {
      function PreferencesBartendersComponent() {
        _classCallCheck(this, PreferencesBartendersComponent);
      }

      _createClass(PreferencesBartendersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesBartendersComponent;
    }();

    PreferencesBartendersComponent.ɵfac = function PreferencesBartendersComponent_Factory(t) {
      return new (t || PreferencesBartendersComponent)();
    };

    PreferencesBartendersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesBartendersComponent,
      selectors: [["app-preferences-bartenders"]],
      decls: 2,
      vars: 0,
      template: function PreferencesBartendersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preferences-bartenders works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtYmFydGVuZGVycy9wcmVmZXJlbmNlcy1iYXJ0ZW5kZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesBartendersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preferences-bartenders',
          templateUrl: './preferences-bartenders.component.html',
          styleUrls: ['./preferences-bartenders.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-drinks/preferences-drinks.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-drinks/preferences-drinks.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PreferencesDrinksComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesDrinksPreferencesDrinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesDrinksComponent", function () {
      return PreferencesDrinksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreferencesDrinksComponent = /*#__PURE__*/function () {
      function PreferencesDrinksComponent() {
        _classCallCheck(this, PreferencesDrinksComponent);
      }

      _createClass(PreferencesDrinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesDrinksComponent;
    }();

    PreferencesDrinksComponent.ɵfac = function PreferencesDrinksComponent_Factory(t) {
      return new (t || PreferencesDrinksComponent)();
    };

    PreferencesDrinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesDrinksComponent,
      selectors: [["app-preferences-drinks"]],
      decls: 2,
      vars: 0,
      template: function PreferencesDrinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preferences-drinks works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtZHJpbmtzL3ByZWZlcmVuY2VzLWRyaW5rcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesDrinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preferences-drinks',
          templateUrl: './preferences-drinks.component.html',
          styleUrls: ['./preferences-drinks.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-homebar/preferences-homebar.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-homebar/preferences-homebar.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PreferencesHomebarComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesHomebarPreferencesHomebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesHomebarComponent", function () {
      return PreferencesHomebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreferencesHomebarComponent = /*#__PURE__*/function () {
      function PreferencesHomebarComponent() {
        _classCallCheck(this, PreferencesHomebarComponent);
      }

      _createClass(PreferencesHomebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesHomebarComponent;
    }();

    PreferencesHomebarComponent.ɵfac = function PreferencesHomebarComponent_Factory(t) {
      return new (t || PreferencesHomebarComponent)();
    };

    PreferencesHomebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesHomebarComponent,
      selectors: [["app-preferences-homebar"]],
      decls: 2,
      vars: 0,
      template: function PreferencesHomebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preferences-homebar works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtaG9tZWJhci9wcmVmZXJlbmNlcy1ob21lYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesHomebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preferences-homebar',
          templateUrl: './preferences-homebar.component.html',
          styleUrls: ['./preferences-homebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-input/preferences-input.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-input/preferences-input.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PreferencesInputComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesInputPreferencesInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesInputComponent", function () {
      return PreferencesInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PreferencesInputComponent = /*#__PURE__*/function () {
      function PreferencesInputComponent(fb) {
        _classCallCheck(this, PreferencesInputComponent);

        this.fb = fb;
      }

      _createClass(PreferencesInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.preferenceInput = this.fb.group({
            textInput: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.preferenceInput.value);
        }
      }]);

      return PreferencesInputComponent;
    }();

    PreferencesInputComponent.ɵfac = function PreferencesInputComponent_Factory(t) {
      return new (t || PreferencesInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    PreferencesInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesInputComponent,
      selectors: [["preferences-input"]],
      decls: 7,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], ["for", "textInput"], ["type", "text", "name", "textInput", "id", "textInput", "formControlName", "textInput"], ["type", "submit"]],
      template: function PreferencesInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preferences input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PreferencesInputComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.preferenceInput);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtaW5wdXQvcHJlZmVyZW5jZXMtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-input',
          templateUrl: './preferences-input.component.html',
          styleUrls: ['./preferences-input.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-locations/preferences-locations.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-locations/preferences-locations.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: PreferencesLocationsComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesLocationsPreferencesLocationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesLocationsComponent", function () {
      return PreferencesLocationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreferencesLocationsComponent = /*#__PURE__*/function () {
      function PreferencesLocationsComponent() {
        _classCallCheck(this, PreferencesLocationsComponent);
      }

      _createClass(PreferencesLocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesLocationsComponent;
    }();

    PreferencesLocationsComponent.ɵfac = function PreferencesLocationsComponent_Factory(t) {
      return new (t || PreferencesLocationsComponent)();
    };

    PreferencesLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesLocationsComponent,
      selectors: [["app-preferences-locations"]],
      decls: 2,
      vars: 0,
      template: function PreferencesLocationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "preferences-locations works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtbG9jYXRpb25zL3ByZWZlcmVuY2VzLWxvY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesLocationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preferences-locations',
          templateUrl: './preferences-locations.component.html',
          styleUrls: ['./preferences-locations.component.css']
        }]
      }], function () {
        return [];
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


    var src_app_services_preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/preferences.service */
    "./src/app/services/preferences.service.ts");
    /* harmony import */


    var _preferences_input_preferences_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../preferences-input/preferences-input.component */
    "./src/app/components/preferences/preferences-input/preferences-input.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesMainComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.home_bar_info);
      }
    }

    var PreferencesMainComponent = /*#__PURE__*/function () {
      function PreferencesMainComponent(preferencesService) {
        _classCallCheck(this, PreferencesMainComponent);

        this.preferencesService = preferencesService;
        this.homeBar = [];
      }

      _createClass(PreferencesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.preferencesService.getHomeBar().subscribe(function (data) {
            // console.log(data);
            _this2.homeBar = [data];
          });
        }
      }]);

      return PreferencesMainComponent;
    }();

    PreferencesMainComponent.ɵfac = function PreferencesMainComponent_Factory(t) {
      return new (t || PreferencesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]));
    };

    PreferencesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesMainComponent,
      selectors: [["preferences-main"]],
      decls: 2,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function PreferencesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preferences-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesMainComponent_div_1_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeBar);
        }
      },
      directives: [_preferences_input_preferences_input_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
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
        return [{
          type: src_app_services_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-post/preferences-post.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-post/preferences-post.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PreferencesPostComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesPostPreferencesPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesPostComponent", function () {
      return PreferencesPostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreferencesPostComponent = /*#__PURE__*/function () {
      function PreferencesPostComponent() {
        _classCallCheck(this, PreferencesPostComponent);
      }

      _createClass(PreferencesPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.item);
        }
      }]);

      return PreferencesPostComponent;
    }();

    PreferencesPostComponent.ɵfac = function PreferencesPostComponent_Factory(t) {
      return new (t || PreferencesPostComponent)();
    };

    PreferencesPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesPostComponent,
      selectors: [["preferences-post"]],
      inputs: {
        item: "item"
      },
      decls: 4,
      vars: 1,
      template: function PreferencesPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home Bar Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.home_bar_info);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtcG9zdC9wcmVmZXJlbmNlcy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-post',
          templateUrl: './preferences-post.component.html',
          styleUrls: ['./preferences-post.component.css']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
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
          var _this3 = this;

          this.recipeApi.getLetterA().subscribe(function (data) {
            _this3.recipes = data['drinks'];
            console.log(_this3.recipes);
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
          var _this4 = this;

          this.recipeAPI.getGlassware().subscribe(function (data) {
            _this4.glassware = data['drinks'];
          });
          this.recipeAPI.getAlcoholic().subscribe(function (data) {
            _this4.alcoholic = data['drinks'];
          });
          this.recipeAPI.getCategories().subscribe(function (data) {
            _this4.categories = data['drinks'];
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
          var _this5 = this;

          this.recipeAPI.searchByName(this.nameSearch.value).subscribe(function (data) {
            return _this5.searchResults.emit(data['drinks']);
          });
        }
      }, {
        key: "searchByLetter",
        value: function searchByLetter() {
          var _this6 = this;

          this.recipeAPI.searchByLetter(this.letterSearch.value).subscribe(function (data) {
            _this6.searchResults.emit(data['drinks']);
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


    var src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user-recipes.service */
    "./src/app/services/user-recipes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRecipesCreateComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

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
          var _this7 = this;

          this.recipeAPI.getGlassware().subscribe(function (data) {
            _this7.glassware = data['drinks'];
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
            ingredient5: element,
            date: this.fb.control(new Date())
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
          var _this8 = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            _this8.latitude = position.coords.latitude;
            _this8.longitude = position.coords.longitude;
          });
        }
      }]);

      return UserRecipesCreateComponent;
    }();

    UserRecipesCreateComponent.ɵfac = function UserRecipesCreateComponent_Factory(t) {
      return new (t || UserRecipesCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_2__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__["UserRecipesService"]));
    };

    UserRecipesCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipesCreateComponent,
      selectors: [["user-recipes-create"]],
      decls: 48,
      vars: 4,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name"], ["type", "range", "min", "1", "max", "5", "value", "0", "step", ".5", "id", "rating-slider", "formControlName", "rating", 1, "slider"], ["formControlName", "glassware", "name", "glassware", "id", "glassware"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], ["for", "method"], ["name", "method", "formControlName", "method", "id", "method", "cols", "30", "rows", "10"], ["formGroupName", "ingredient1"], ["type", "text", "formControlName", "amount"], ["type", "text", "formControlName", "ingredient"], ["formGroupName", "ingredient2"], ["formGroupName", "ingredient3"], ["formGroupName", "ingredient4"], ["formGroupName", "ingredient5"], ["type", "submit"], [3, "value"]],
      template: function UserRecipesCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create recipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserRecipesCreateComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Drink Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Glassware");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserRecipesCreateComponent_option_13_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRecipesCreateComponent_Template_button_click_15_listener() {
            return ctx.getLocation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Latitude: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xB0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Longitude: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xB0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Method:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userRecipe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glassware);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.latitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.longitude);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWNpcGVzL3VzZXItcmVjaXBlcy1jcmVhdGUvdXNlci1yZWNpcGVzLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"]
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
          type: src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_3__["UserRecipesService"]
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


    var src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/user-recipes.service */
    "./src/app/services/user-recipes.service.ts");
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
      return new (t || UserRecipesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__["UserRecipesService"]));
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
          type: src_app_services_user_recipes_service__WEBPACK_IMPORTED_MODULE_1__["UserRecipesService"]
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
  "./src/app/services/preferences.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/preferences.service.ts ***!
    \*************************************************/

  /*! exports provided: PreferencesService */

  /***/
  function srcAppServicesPreferencesServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PreferencesService = /*#__PURE__*/function () {
      function PreferencesService(http) {
        _classCallCheck(this, PreferencesService);

        this.http = http;
        this.home_bar = [];
      }

      _createClass(PreferencesService, [{
        key: "getHomeBar",
        value: function getHomeBar() {
          return this.http.get('api/preferences/home-bar');
        }
      }]);

      return PreferencesService;
    }();

    PreferencesService.ɵfac = function PreferencesService_Factory(t) {
      return new (t || PreferencesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
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
  "./src/app/services/user-recipes.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/user-recipes.service.ts ***!
    \**************************************************/

  /*! exports provided: UserRecipesService */

  /***/
  function srcAppServicesUserRecipesServiceTs(module, __webpack_exports__, __webpack_require__) {
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