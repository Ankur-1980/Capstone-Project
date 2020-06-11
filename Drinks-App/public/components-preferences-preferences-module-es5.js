function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-preferences-preferences-module"], {
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesMainComponent_div_0_Template(rf, ctx) {
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
      }

      _createClass(PreferencesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.preferencesService.getHomeBar().subscribe(function (data) {
            // console.log(data);
            _this.homeBar = data;
            console.log('db', _this.homeBar);
          });
        }
      }, {
        key: "prefInput",
        value: function prefInput(value) {
          this.preferencesService.addHomeBar(value);
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
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function PreferencesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreferencesMainComponent_div_0_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeBar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreferencesModule, {
        declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"]]
        }]
      }], null, null);
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
        this.homeBar = [{
          home_bar_id: 1,
          home_bar_info: 'Vodka'
        }, {
          home_bar_id: 2,
          home_bar_info: 'Gin'
        }, {
          home_bar_id: 3,
          home_bar_info: 'Whiskey'
        }];
      }

      _createClass(PreferencesService, [{
        key: "getHomeBar",
        value: function getHomeBar() {
          return this.http.get('api/preferences/home-bar');
        }
      }, {
        key: "addHomeBar",
        value: function addHomeBar(formValue) {
          console.log('service', formValue); // this.http
          //   .post<{ message: string }>('/api/preferences', formValue)
          //   .subscribe((response) => {
          //     console.log(response.message);
          //   });
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

  }
}]);
//# sourceMappingURL=components-preferences-preferences-module-es5.js.map