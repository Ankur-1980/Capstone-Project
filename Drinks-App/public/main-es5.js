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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/MOCK_DATA/mock-posts.ts":
  /*!*****************************************!*\
    !*** ./src/app/MOCK_DATA/mock-posts.ts ***!
    \*****************************************/

  /*! exports provided: MOCK_POSTS */

  /***/
  function srcAppMOCK_DATAMockPostsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOCK_POSTS", function () {
      return MOCK_POSTS;
    });

    var MOCK_POSTS = [{
      post_id: '3e4b9ea8-9370-4842-b2e3-e2cda2a3453f',
      post_name: 'Fully-configurable needs-based challenge',
      rating: 4.4,
      glassware: 'composite',
      description: 'Persevering hybrid framework',
      post_location: 'Pan de Azúcar',
      post_date: '05/14/2020',
      post_modified: '2020-04-08 00:55:09'
    }, {
      post_id: 'd2dcb170-1aa9-4105-95a8-17e744c94925',
      post_name: 'Open-source 6th generation workforce',
      rating: 2.8,
      glassware: 'artificial intelligence',
      description: 'Assimilated fresh-thinking project',
      post_location: 'Volzhskiy',
      post_date: '10/13/2019',
      post_modified: '2019-10-07 00:09:10'
    }, {
      post_id: '5574ae49-b5dd-4412-b3e2-0d19b19b02bc',
      post_name: 'Self-enabling encompassing moderator',
      rating: 1.8,
      glassware: '6th generation',
      description: 'Implemented zero defect architecture',
      post_location: 'Az Zawr',
      post_date: '07/25/2019',
      post_modified: '2019-12-22 10:44:36'
    }, {
      post_id: '0a42cb2f-a4af-4181-afa8-bde15302d7fb',
      post_name: 'Stand-alone context-sensitive customer loyalty',
      rating: 2.2,
      glassware: 'multi-state',
      description: 'User-centric zero administration framework',
      post_location: 'Yanglin',
      post_date: '03/07/2020',
      post_modified: '2020-03-15 04:57:57'
    }, {
      post_id: '543a6b1f-c3c3-4877-a26a-c34434dcbb05',
      post_name: 'Automated directional architecture',
      rating: 1.5,
      glassware: 'time-frame',
      description: 'User-friendly bandwidth-monitored task-force',
      post_location: 'Cabano',
      post_date: '01/18/2020',
      post_modified: '2019-12-03 07:47:06'
    }, {
      post_id: '488e9300-c28e-4695-87fc-4202ae31ce4d',
      post_name: 'Universal user-facing challenge',
      rating: 4.0,
      glassware: 'clear-thinking',
      description: 'Organic foreground productivity',
      post_location: 'General Luna',
      post_date: '04/19/2020',
      post_modified: '2020-04-27 04:02:01'
    }, {
      post_id: '40c352a7-c6f2-4456-8a26-49689c7a0905',
      post_name: 'Reduced intangible Graphic Interface',
      rating: 1.3,
      glassware: 'Sharable',
      description: 'Focused well-modulated orchestration',
      post_location: 'Xirikxiy',
      post_date: '10/29/2019',
      post_modified: '2020-05-01 07:31:26'
    }, {
      post_id: 'ee5912b8-5c3d-4cb5-9ba8-e1b69af996b8',
      post_name: 'Customer-focused directional internet solution',
      rating: 1.1,
      glassware: 'systemic',
      description: 'Vision-oriented explicit definition',
      post_location: 'Kushiro',
      post_date: '07/25/2019',
      post_modified: '2019-12-09 19:29:20'
    }, {
      post_id: 'da375e18-2397-48f0-b1a5-4460f59dba3b',
      post_name: 'Streamlined directional functionalities',
      rating: 4.3,
      glassware: 'human-resource',
      description: 'Vision-oriented heuristic help-desk',
      post_location: 'Jinqu',
      post_date: '07/30/2019',
      post_modified: '2019-12-30 04:26:12'
    }, {
      post_id: '334ae42c-005a-4324-ba71-5a94bf135d6a',
      post_name: 'Re-contextualized multimedia support',
      rating: 1.2,
      glassware: 'pricing structure',
      description: 'Polarised well-modulated hierarchy',
      post_location: 'Cibunar',
      post_date: '06/20/2019',
      post_modified: '2019-09-12 04:30:21'
    }, {
      post_id: '30207fe8-9617-43f2-ac61-9485ad4ca1bd',
      post_name: 'Advanced analyzing benchmark',
      rating: 4.5,
      glassware: 'Fully-configurable',
      description: 'Open-architected executive adapter',
      post_location: 'Al Qūşīyah',
      post_date: '07/23/2019',
      post_modified: '2020-03-31 08:08:50'
    }, {
      post_id: 'b31bb4c6-916e-407c-b1b8-5f8f290e7915',
      post_name: 'Fundamental well-modulated interface',
      rating: 1.2,
      glassware: 'disintermediate',
      description: 'Innovative radical info-mediaries',
      post_location: 'Mendeleyevsk',
      post_date: '12/16/2019',
      post_modified: '2019-08-04 17:37:01'
    }, {
      post_id: '2faae4b4-9f7a-43dc-a693-0f21ff064f61',
      post_name: 'Proactive bifurcated internet solution',
      rating: 3.9,
      glassware: 'pricing structure',
      description: 'Seamless disintermediate database',
      post_location: 'Burhānuddin',
      post_date: '02/13/2020',
      post_modified: '2019-11-25 22:08:13'
    }, {
      post_id: 'e4b01167-df1c-4332-b9f7-eae87306005d',
      post_name: 'User-friendly methodical interface',
      rating: 1.6,
      glassware: 'monitoring',
      description: 'Synchronised 24 hour intranet',
      post_location: 'Utrecht',
      post_date: '08/02/2019',
      post_modified: '2020-04-19 15:38:14'
    }, {
      post_id: '00e144cc-fcd4-4b6c-b513-1fd89372bb54',
      post_name: 'Switchable modular process improvement',
      rating: 4.8,
      glassware: 'value-added',
      description: 'Diverse clear-thinking firmware',
      post_location: 'Velikovechnoye',
      post_date: '03/20/2020',
      post_modified: '2020-01-05 20:29:52'
    }, {
      post_id: 'c66d5683-9ac7-4fa4-862c-48ccea4dce7c',
      post_name: 'Business-focused zero defect protocol',
      rating: 2.0,
      glassware: 'projection',
      description: 'Diverse well-modulated standardization',
      post_location: 'La Foa',
      post_date: '11/09/2019',
      post_modified: '2019-08-04 17:53:06'
    }, {
      post_id: 'e516dab2-a3f3-4683-8ed8-83b33d08e359',
      post_name: 'Expanded bi-directional paradigm',
      rating: 1.9,
      glassware: 'Synergistic',
      description: 'Optimized systematic policy',
      post_location: 'Ilhéus',
      post_date: '04/22/2020',
      post_modified: '2020-01-26 14:42:21'
    }, {
      post_id: '01531c0c-a037-4672-8cf4-d08570069a3d',
      post_name: 'Expanded motivating firmware',
      rating: 2.5,
      glassware: 'modular',
      description: 'Switchable 24/7 policy',
      post_location: 'Luhansk',
      post_date: '04/09/2020',
      post_modified: '2019-08-24 22:50:29'
    }, {
      post_id: '1f9cac8b-9818-4a09-a289-8222c9aba114',
      post_name: 'Upgradable user-facing toolset',
      rating: 2.2,
      glassware: 'Quality-focused',
      description: 'Visionary web-enabled firmware',
      post_location: 'Águas de Lindóia',
      post_date: '12/18/2019',
      post_modified: '2019-10-02 10:53:06'
    }, {
      post_id: '9ba3e166-2df9-42de-9e37-f151112968fb',
      post_name: 'Reverse-engineered real-time emulation',
      rating: 2.1,
      glassware: 'info-mediaries',
      description: 'Vision-oriented secondary open system',
      post_location: 'Bakovci',
      post_date: '01/31/2020',
      post_modified: '2019-06-24 16:12:37'
    }, {
      post_id: '9bbca1eb-cd70-4659-b3ca-fd919963b6c4',
      post_name: 'Enterprise-wide maximized time-frame',
      rating: 1.4,
      glassware: 'systemic',
      description: 'Synergized intangible function',
      post_location: 'Jinja',
      post_date: '04/14/2020',
      post_modified: '2019-07-08 16:51:46'
    }, {
      post_id: '3e0f1680-5211-467f-b5d5-b3295eafe61c',
      post_name: 'Robust full-range concept',
      rating: 3.5,
      glassware: 'human-resource',
      description: 'Team-oriented demand-driven software',
      post_location: 'Acaraú',
      post_date: '06/20/2019',
      post_modified: '2019-07-14 14:09:58'
    }, {
      post_id: '6ade3cca-af78-4f52-b4d2-d9831b99db24',
      post_name: 'Multi-tiered encompassing groupware',
      rating: 1.9,
      glassware: 'encompassing',
      description: 'Extended analyzing secured line',
      post_location: 'Zdounky',
      post_date: '09/04/2019',
      post_modified: '2020-05-01 09:17:15'
    }, {
      post_id: '3c621d70-ef93-4ee3-8001-fadbc3663831',
      post_name: 'Synergized 4th generation flexibility',
      rating: 3.1,
      glassware: 'systemic',
      description: 'Persevering bandwidth-monitored middleware',
      post_location: 'Paphos',
      post_date: '08/26/2019',
      post_modified: '2020-05-06 02:37:17'
    }, {
      post_id: 'f61b0bba-e528-4a7f-85d9-d838941e9c36',
      post_name: 'Expanded web-enabled archive',
      rating: 2.3,
      glassware: 'workforce',
      description: 'Function-based multimedia approach',
      post_location: 'Eldoret',
      post_date: '08/07/2019',
      post_modified: '2019-11-13 12:27:27'
    }, {
      post_id: '1ed3b3b1-80c7-4391-b92f-e7caf5c4f342',
      post_name: 'Decentralized next generation emulation',
      rating: 4.0,
      glassware: 'moderator',
      description: 'Realigned discrete adapter',
      post_location: 'Krutja e Poshtme',
      post_date: '08/01/2019',
      post_modified: '2020-04-21 12:02:06'
    }, {
      post_id: '6f7464a0-3da3-4ebe-b64a-40bebce4471a',
      post_name: 'Cross-group context-sensitive process improvement',
      rating: 3.1,
      glassware: 'bandwidth-monitored',
      description: 'Expanded optimizing attitude',
      post_location: 'Fornos',
      post_date: '05/06/2020',
      post_modified: '2019-06-24 03:11:06'
    }, {
      post_id: '6254cfb6-79cd-4b50-8978-07babf4f277c',
      post_name: 'Networked bi-directional data-warehouse',
      rating: 1.3,
      glassware: 'Diverse',
      description: 'Team-oriented logistical architecture',
      post_location: 'Kindersley',
      post_date: '11/02/2019',
      post_modified: '2019-10-12 16:39:08'
    }, {
      post_id: '78b62284-51af-4090-9a5e-7d1081704ee5',
      post_name: 'Quality-focused client-server attitude',
      rating: 3.7,
      glassware: 'functionalities',
      description: 'Assimilated bifurcated knowledge base',
      post_location: 'Lakkha Nëvre',
      post_date: '06/26/2019',
      post_modified: '2019-07-21 14:52:49'
    }, {
      post_id: '88b4bf10-d18d-488f-91d2-bab9e088ea93',
      post_name: 'Implemented client-server support',
      rating: 2.5,
      glassware: 'Adaptive',
      description: 'Seamless clear-thinking infrastructure',
      post_location: 'Kungsör',
      post_date: '08/21/2019',
      post_modified: '2020-04-24 21:01:52'
    }, {
      post_id: '3d74580a-3ce2-4a9b-9d68-54d89e6836fe',
      post_name: 'Profit-focused didactic hub',
      rating: 1.4,
      glassware: 'Focused',
      description: 'Re-contextualized reciprocal strategy',
      post_location: 'Cibeureum',
      post_date: '02/01/2020',
      post_modified: '2020-04-12 17:28:13'
    }, {
      post_id: 'f8a46ea0-7580-43df-ae1c-2d21829054e3',
      post_name: 'Multi-channelled contextually-based secured line',
      rating: 3.5,
      glassware: 'Ergonomic',
      description: 'Customizable fault-tolerant website',
      post_location: 'Duzhenwan',
      post_date: '10/02/2019',
      post_modified: '2019-12-03 03:03:50'
    }, {
      post_id: '6cf76e68-eb3e-48b5-82f7-a6a16dd9da4c',
      post_name: 'Monitored non-volatile strategy',
      rating: 2.5,
      glassware: 'Monitored',
      description: 'Adaptive multi-state help-desk',
      post_location: 'Indaial',
      post_date: '09/24/2019',
      post_modified: '2020-05-26 18:23:22'
    }, {
      post_id: '020ff351-c7fe-42b2-9d56-ab4f4b8251ad',
      post_name: 'Realigned well-modulated paradigm',
      rating: 3.0,
      glassware: 'attitude-oriented',
      description: 'Proactive modular firmware',
      post_location: 'Köpingsvik',
      post_date: '05/24/2020',
      post_modified: '2019-12-27 09:04:45'
    }, {
      post_id: '4cacbcd6-b554-4a23-b00a-859acc3b38c4',
      post_name: 'Customer-focused methodical implementation',
      rating: 1.6,
      glassware: 'open architecture',
      description: 'Synergistic radical hardware',
      post_location: 'Le Hochet',
      post_date: '10/12/2019',
      post_modified: '2019-12-23 15:31:08'
    }, {
      post_id: '3d2f9511-c10f-4384-8c4a-38d267030b56',
      post_name: 'Implemented high-level instruction set',
      rating: 1.8,
      glassware: 'Profound',
      description: 'Public-key analyzing alliance',
      post_location: 'Luotang',
      post_date: '09/05/2019',
      post_modified: '2020-01-27 13:19:09'
    }, {
      post_id: '919607e9-9ea9-452a-b26c-b0b2db69d6ff',
      post_name: 'Business-focused bandwidth-monitored service-desk',
      rating: 2.7,
      glassware: 'matrix',
      description: 'Fundamental optimal ability',
      post_location: 'Rybnoye',
      post_date: '02/07/2020',
      post_modified: '2019-10-12 02:14:48'
    }, {
      post_id: '49059181-23ff-45c6-8ee3-50e78494d362',
      post_name: 'Synergistic hybrid analyzer',
      rating: 4.9,
      glassware: 'Decentralized',
      description: 'Secured upward-trending middleware',
      post_location: 'Itauguá',
      post_date: '01/02/2020',
      post_modified: '2020-02-19 13:00:35'
    }, {
      post_id: 'aa24b95a-2d24-4ac2-b773-4c32b4b81b00',
      post_name: 'Realigned user-facing process improvement',
      rating: 3.3,
      glassware: 'paradigm',
      description: 'Seamless 4th generation emulation',
      post_location: 'Pingzhuang',
      post_date: '08/29/2019',
      post_modified: '2019-08-19 22:01:47'
    }, {
      post_id: '6083d2ea-a653-4d17-b912-39ebd250162b',
      post_name: 'Organized systemic internet solution',
      rating: 1.0,
      glassware: 'scalable',
      description: 'Automated regional attitude',
      post_location: 'Gawul',
      post_date: '08/05/2019',
      post_modified: '2019-11-05 02:16:44'
    }, {
      post_id: '92fd4ef9-fd2f-4d04-a095-9335e76af415',
      post_name: 'Robust mobile structure',
      rating: 1.9,
      glassware: 'policy',
      description: 'Profound impactful concept',
      post_location: 'Francisco Villa',
      post_date: '06/07/2020',
      post_modified: '2020-01-06 22:27:29'
    }, {
      post_id: '2444945b-4f48-4bd7-854d-98d7ed99cedf',
      post_name: 'Focused tangible complexity',
      rating: 2.7,
      glassware: '5th generation',
      description: 'Fully-configurable asynchronous system engine',
      post_location: 'Zarzal',
      post_date: '03/06/2020',
      post_modified: '2020-04-01 15:02:03'
    }, {
      post_id: '9268f649-f029-41a1-88f0-c0fca9ee4f42',
      post_name: 'Open-architected multi-tasking complexity',
      rating: 1.7,
      glassware: 'strategy',
      description: 'Reduced uniform encryption',
      post_location: 'Cheongsong gun',
      post_date: '09/01/2019',
      post_modified: '2019-10-12 09:05:06'
    }, {
      post_id: 'fe092e3b-fb59-4d8a-9baf-f762a0369fe2',
      post_name: 'Streamlined needs-based collaboration',
      rating: 3.3,
      glassware: 'client-driven',
      description: 'Adaptive motivating matrix',
      post_location: 'Pohrebyshche',
      post_date: '01/09/2020',
      post_modified: '2019-08-27 12:02:53'
    }, {
      post_id: '74b21799-1e3a-431a-855d-d69986261611',
      post_name: 'Re-contextualized exuding utilisation',
      rating: 4.7,
      glassware: 'Grass-roots',
      description: 'Networked upward-trending extranet',
      post_location: 'Xincheng',
      post_date: '04/06/2020',
      post_modified: '2019-07-19 18:40:55'
    }, {
      post_id: 'bf7d2f77-ae0a-4a18-9226-6c7489377f2a',
      post_name: 'Universal asynchronous alliance',
      rating: 3.1,
      glassware: 'moderator',
      description: 'Open-source content-based attitude',
      post_location: 'Bielice',
      post_date: '09/10/2019',
      post_modified: '2020-05-13 00:47:11'
    }, {
      post_id: 'eabf7910-987a-4e82-9150-298135b5754f',
      post_name: 'Switchable mission-critical definition',
      rating: 3.2,
      glassware: 'support',
      description: 'Compatible fault-tolerant capability',
      post_location: 'Ogurugu',
      post_date: '08/13/2019',
      post_modified: '2020-02-04 11:50:46'
    }, {
      post_id: 'd8d85bae-cf12-4005-a97f-1d0992fd516c',
      post_name: 'Versatile impactful flexibility',
      rating: 1.2,
      glassware: 'function',
      description: 'Operative responsive ability',
      post_location: 'Montemor-o-Velho',
      post_date: '10/17/2019',
      post_modified: '2020-02-10 08:26:03'
    }, {
      post_id: 'bff729fc-f141-4a63-8763-048c5c9c04f1',
      post_name: 'Down-sized mission-critical artificial intelligence',
      rating: 2.4,
      glassware: 'optimal',
      description: 'Ergonomic high-level leverage',
      post_location: 'Almaznyy',
      post_date: '08/16/2019',
      post_modified: '2020-06-01 14:19:18'
    }, {
      post_id: 'b3db9b86-22d1-444d-a035-945f8929ef9a',
      post_name: 'Integrated client-driven ability',
      rating: 3.8,
      glassware: 'client-server',
      description: 'Expanded content-based open system',
      post_location: 'Berlin',
      post_date: '05/11/2020',
      post_modified: '2019-11-10 14:45:32'
    }];
    /***/
  },

  /***/
  "./src/app/MOCK_DATA/mock-recipes.ts":
  /*!*******************************************!*\
    !*** ./src/app/MOCK_DATA/mock-recipes.ts ***!
    \*******************************************/

  /*! exports provided: MOCK_RECIPES */

  /***/
  function srcAppMOCK_DATAMockRecipesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOCK_RECIPES", function () {
      return MOCK_RECIPES;
    });

    var MOCK_RECIPES = [{
      recipe_id: '03982017-e5b1-4e9f-8bff-bfe8f799b99b',
      drink_name: 'pricing structure',
      rating: 4.2,
      glassware: 'Asteraceae',
      location: 'Tangzi',
      ingredient_1: 'Cheese - St. Paulin',
      ingredient_2: 'Beef - Bones, Marrow',
      ingredient_3: 'Shrimp - 16/20, Peeled Deviened',
      ingredient_4: 'Nut - Walnut, Chopped',
      ingredient_5: 'Cheese - Brie, Cups 125g',
      amount_1: 1.28,
      amount_2: 1.95,
      amount_3: 0.41,
      amount_4: 0.89,
      amount_5: 0.5,
      date_created: '06/24/2019',
      date_modified: '2019-06-28 20:11:44',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '6d8fd2cd-c40a-488d-b420-88c2079dd84d',
      drink_name: 'Virtual',
      rating: 3.2,
      glassware: 'Brassicaceae',
      location: 'N’dalatando',
      ingredient_1: 'Olive - Spread Tapenade',
      ingredient_2: 'Curry Powder',
      ingredient_3: 'Munchies Honey Sweet Trail Mix',
      ingredient_4: 'Oil - Shortening,liqud, Fry',
      ingredient_5: 'Duck - Fat',
      amount_1: 2.39,
      amount_2: 1.99,
      amount_3: 0.73,
      amount_4: 0.46,
      amount_5: 0.5,
      date_created: '07/29/2019',
      date_modified: '2019-07-21 17:16:54',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '206a3460-7920-4c29-8861-122c24deef7c',
      drink_name: 'focus group',
      rating: 3.9,
      glassware: 'Cyperaceae',
      location: 'Tourcoing',
      ingredient_1: 'Cut Wakame - Hanawakaba',
      ingredient_2: 'Turnip - Wax',
      ingredient_3: 'Syrup - Monin - Blue Curacao',
      ingredient_4: 'Tuna - Loin',
      ingredient_5: 'Cheese - Ricotta',
      amount_1: 2.5,
      amount_2: 1.76,
      amount_3: 0.65,
      amount_4: 0.68,
      amount_5: null,
      date_created: '03/13/2020',
      date_modified: '2020-05-07 02:41:22',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '28a40354-04fa-4a06-a711-7d421f56f834',
      drink_name: 'attitude',
      rating: 4.0,
      glassware: 'Dryopteridaceae',
      location: 'Fryazino',
      ingredient_1: 'Pickles - Gherkins',
      ingredient_2: 'Savory',
      ingredient_3: 'Chevere Logs',
      ingredient_4: 'Lid - 10,12,16 Oz',
      ingredient_5: 'Pepper - Paprika, Spanish',
      amount_1: 1.88,
      amount_2: 1.73,
      amount_3: 0.44,
      amount_4: 0.65,
      amount_5: 0.3,
      date_created: '09/17/2019',
      date_modified: '2020-03-06 11:05:50',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '3266897f-339d-467d-aaa8-7d28b7da035b',
      drink_name: 'Public-key',
      rating: 4.7,
      glassware: 'Dryopteridaceae',
      location: 'Shangxing',
      ingredient_1: 'Milk - Chocolate 500ml',
      ingredient_2: 'Bread - Bistro White',
      ingredient_3: 'Ice Cream - Life Savers',
      ingredient_4: 'Otomegusa Dashi Konbu',
      ingredient_5: 'Chocolate - Milk',
      amount_1: 1.71,
      amount_2: 1.24,
      amount_3: 0.94,
      amount_4: 0.7,
      amount_5: 0.8,
      date_created: '08/22/2019',
      date_modified: '2019-06-27 01:54:02',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '85efa5c4-99f6-4dcf-9239-ae3b6ed2ac23',
      drink_name: 'Horizontal',
      rating: 2.3,
      glassware: 'Asteraceae',
      location: 'Sumbergedong',
      ingredient_1: 'Peach - Fresh',
      ingredient_2: 'Cakes Assorted',
      ingredient_3: 'Sea Bass - Whole',
      ingredient_4: 'Cleaner - Lime Away',
      ingredient_5: 'Mussels - Cultivated',
      amount_1: 1.61,
      amount_2: 1.43,
      amount_3: 0.6,
      amount_4: 0.33,
      amount_5: 0.6,
      date_created: '04/14/2020',
      date_modified: '2019-08-11 11:14:49',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '56ca6112-1513-44f5-8fff-4a5de8ca2d90',
      drink_name: 'capability',
      rating: 3.5,
      glassware: 'Rubiaceae',
      location: 'Shuiji',
      ingredient_1: 'Dates',
      ingredient_2: 'Squid - U - 10 Thailand',
      ingredient_3: 'Lettuce - Green Leaf',
      ingredient_4: 'Soup - Knorr, Veg / Beef',
      ingredient_5: 'Veal - Brisket, Provimi,bnls',
      amount_1: 2.83,
      amount_2: 1.82,
      amount_3: 0.68,
      amount_4: 0.63,
      amount_5: 0.3,
      date_created: '04/27/2020',
      date_modified: '2020-03-29 12:59:36',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'd05a2c8a-ec0d-438d-b59e-dbebeab1dd37',
      drink_name: 'open architecture',
      rating: 3.9,
      glassware: 'Lemnaceae',
      location: 'Chociwel',
      ingredient_1: 'Apples - Sliced / Wedge',
      ingredient_2: 'Liners - Banana, Paper',
      ingredient_3: 'Rosemary - Fresh',
      ingredient_4: 'Sausage - Andouille',
      ingredient_5: 'Tofu - Soft',
      amount_1: 2.42,
      amount_2: 1.9,
      amount_3: 0.29,
      amount_4: 0.31,
      amount_5: 0.7,
      date_created: '11/04/2019',
      date_modified: '2020-01-16 17:32:43',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'cc2d686e-0919-48b3-ad56-c39f2d77eef3',
      drink_name: 'alliance',
      rating: 2.8,
      glassware: 'Asteraceae',
      location: 'Kīevka',
      ingredient_1: 'Cognac - Courvaisier',
      ingredient_2: 'Beans - Green',
      ingredient_3: 'Compound - Passion Fruit',
      ingredient_4: 'Sausage - Meat',
      ingredient_5: 'Madeira',
      amount_1: 2.65,
      amount_2: 1.7,
      amount_3: 0.27,
      amount_4: 0.29,
      amount_5: 0.5,
      date_created: '04/07/2020',
      date_modified: '2019-06-22 02:46:24',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'ce7ced37-9dfa-4ed7-932e-893e6625e14e',
      drink_name: 'info-mediaries',
      rating: 1.9,
      glassware: 'Salicaceae',
      location: 'Augustów',
      ingredient_1: 'Lettuce - Spring Mix',
      ingredient_2: 'Liners - Baking Cups',
      ingredient_3: 'Soup - Knorr, Ministrone',
      ingredient_4: 'Oil - Shortening,liqud, Fry',
      ingredient_5: 'Soup - Campbells - Tomato',
      amount_1: 1.72,
      amount_2: 1.09,
      amount_3: 0.51,
      amount_4: 0.77,
      amount_5: 0.5,
      date_created: '05/03/2020',
      date_modified: '2019-12-01 03:13:26',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'c7ed632f-d706-4493-ad30-a9a34c1d8e6f',
      drink_name: 'foreground',
      rating: 4.3,
      glassware: 'Fabaceae',
      location: 'La Rochelle',
      ingredient_1: 'Sauce - Fish 25 Ozf Bottle',
      ingredient_2: 'Wine - Cabernet Sauvignon',
      ingredient_3: 'Stock - Beef, White',
      ingredient_4: 'Clams - Canned',
      ingredient_5: 'Towel Multifold',
      amount_1: 2.44,
      amount_2: 1.14,
      amount_3: 0.49,
      amount_4: 0.26,
      amount_5: null,
      date_created: '07/25/2019',
      date_modified: '2019-12-25 00:42:03',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '8efd8c1f-454d-4cd1-8563-5c31694f0b37',
      drink_name: 'Persevering',
      rating: 1.9,
      glassware: 'Asteraceae',
      location: 'Niushou',
      ingredient_1: 'Wine - Harrow Estates, Vidal',
      ingredient_2: 'Bread - Bagels, Plain',
      ingredient_3: 'Petite Baguette',
      ingredient_4: 'Black Currants',
      ingredient_5: 'Pepper Squash',
      amount_1: 1.54,
      amount_2: 1.05,
      amount_3: 0.32,
      amount_4: 1.0,
      amount_5: null,
      date_created: '07/16/2019',
      date_modified: '2020-01-11 23:56:44',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '4885a9a8-01d8-4353-956b-f08f2d732eb7',
      drink_name: 'capacity',
      rating: 4.3,
      glassware: 'Capparaceae',
      location: 'Reno',
      ingredient_1: 'Beer - Sleemans Honey Brown',
      ingredient_2: 'Bouq All Italian - Primerba',
      ingredient_3: 'Cheese - Brick With Onion',
      ingredient_4: 'Mushroom - Crimini',
      ingredient_5: 'Chocolate Bar - Reese Pieces',
      amount_1: 1.71,
      amount_2: 1.28,
      amount_3: 0.71,
      amount_4: 0.96,
      amount_5: 1.0,
      date_created: '04/14/2020',
      date_modified: '2020-03-17 18:05:49',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'aa264d68-23fe-4a40-84bd-55f67167ddc4',
      drink_name: 'encryption',
      rating: 3.7,
      glassware: 'Saxifragaceae',
      location: 'Lian',
      ingredient_1: 'Jolt Cola - Red Eye',
      ingredient_2: 'Vector Energy Bar',
      ingredient_3: 'Pepper - Black, Ground',
      ingredient_4: 'Chocolate - Mi - Amere Semi',
      ingredient_5: 'Cheese - Gouda Smoked',
      amount_1: 1.66,
      amount_2: 1.21,
      amount_3: 0.42,
      amount_4: 0.28,
      amount_5: 0.5,
      date_created: '06/30/2019',
      date_modified: '2020-04-18 14:59:38',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'a53b4394-528c-4c02-b9e5-cd6cf271f7e1',
      drink_name: 'regional',
      rating: 1.8,
      glassware: 'Fabaceae',
      location: 'Luga',
      ingredient_1: 'Pepper - Black, Whole',
      ingredient_2: 'Wine - Casillero Del Diablo',
      ingredient_3: 'Ginger - Ground',
      ingredient_4: 'Rambutan',
      ingredient_5: 'Eggplant - Baby',
      amount_1: 1.57,
      amount_2: 1.64,
      amount_3: 0.48,
      amount_4: 0.68,
      amount_5: 0.3,
      date_created: '06/06/2020',
      date_modified: '2020-03-13 17:29:31',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '47622535-3bf4-45fd-bebe-7b473eea80f5',
      drink_name: 'Open-architected',
      rating: 3.3,
      glassware: 'Capparaceae',
      location: 'Finiq',
      ingredient_1: 'Beef - Shank',
      ingredient_2: 'Eggroll',
      ingredient_3: 'Ginger - Pickled',
      ingredient_4: 'Quail - Whole, Bone - In',
      ingredient_5: 'Sour Cream',
      amount_1: 2.01,
      amount_2: 1.07,
      amount_3: 0.48,
      amount_4: 0.35,
      amount_5: 0.5,
      date_created: '07/20/2019',
      date_modified: '2019-12-27 11:55:05',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '01dd5a39-5247-4e64-ab67-0fceb45dfb2a',
      drink_name: 'Sharable',
      rating: 3.0,
      glassware: 'Graphidaceae',
      location: 'Villefontaine',
      ingredient_1: 'Artichokes - Knobless, White',
      ingredient_2: 'Bread Cranberry Foccacia',
      ingredient_3: 'Beef - Diced',
      ingredient_4: 'Mushroom Morel Fresh',
      ingredient_5: 'Taro Leaves',
      amount_1: 1.8,
      amount_2: 1.25,
      amount_3: 0.8,
      amount_4: 0.85,
      amount_5: null,
      date_created: '12/17/2019',
      date_modified: '2019-12-19 13:38:50',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '867e9c56-b9d1-4558-b37a-94cdc9f4a516',
      drink_name: 'Mandatory',
      rating: 3.2,
      glassware: 'Candelariaceae',
      location: 'Santong',
      ingredient_1: 'Cake - Mini Cheesecake',
      ingredient_2: 'Scampi Tail',
      ingredient_3: 'Pepper - Chipotle, Canned',
      ingredient_4: 'Chips Potato All Dressed - 43g',
      ingredient_5: 'Muskox - French Rack',
      amount_1: 2.16,
      amount_2: 1.59,
      amount_3: 1.0,
      amount_4: 0.67,
      amount_5: 0.8,
      date_created: '11/27/2019',
      date_modified: '2020-03-07 00:16:19',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '8bccb5a0-c3c8-408d-ae80-1c9ba874cdda',
      drink_name: 'functionalities',
      rating: 4.4,
      glassware: 'Alismataceae',
      location: 'Nanxia',
      ingredient_1: 'Beer - Maudite',
      ingredient_2: 'Wine - Magnotta, Merlot Sr Vqa',
      ingredient_3: 'Wine - Conde De Valdemar',
      ingredient_4: 'Wine - Zonnebloem Pinotage',
      ingredient_5: 'Onions Granulated',
      amount_1: 2.97,
      amount_2: 1.54,
      amount_3: 0.57,
      amount_4: 0.28,
      amount_5: 0.8,
      date_created: '02/29/2020',
      date_modified: '2019-12-18 18:29:56',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'a54f2c8a-8500-4aca-b932-099e8d4c1f86',
      drink_name: 'pricing structure',
      rating: 1.2,
      glassware: 'Orchidaceae',
      location: 'Sarreguemines',
      ingredient_1: 'Wine - Wyndham Estate Bin 777',
      ingredient_2: 'Nut - Pine Nuts, Whole',
      ingredient_3: 'Melon - Cantaloupe',
      ingredient_4: 'Raisin - Dark',
      ingredient_5: 'Lotus Root',
      amount_1: 2.43,
      amount_2: 1.68,
      amount_3: 0.36,
      amount_4: 0.66,
      amount_5: null,
      date_created: '10/08/2019',
      date_modified: '2019-10-17 23:02:24',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'b1bd1a52-d0f6-403b-8710-db65a0fae73a',
      drink_name: 'Multi-lateral',
      rating: 2.5,
      glassware: 'Saxifragaceae',
      location: 'Paulista',
      ingredient_1: 'Cup - Translucent 7 Oz Clear',
      ingredient_2: 'Rum - Mount Gay Eclipes',
      ingredient_3: 'Coffee Decaf Colombian',
      ingredient_4: 'Dome Lid Clear P92008h',
      ingredient_5: 'Knife Plastic - White',
      amount_1: 2.88,
      amount_2: 1.93,
      amount_3: 0.8,
      amount_4: 0.7,
      amount_5: 0.6,
      date_created: '06/26/2019',
      date_modified: '2019-07-08 06:41:29',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'b5993b7d-51c3-4d0a-bee3-b7371c896d7f',
      drink_name: 'Synchronised',
      rating: 4.0,
      glassware: 'Taxaceae',
      location: 'Martyush',
      ingredient_1: 'Vinegar - White',
      ingredient_2: 'Sambuca - Opal Nera',
      ingredient_3: 'Guava',
      ingredient_4: 'Cheese - Wine',
      ingredient_5: 'Kolrabi',
      amount_1: 1.99,
      amount_2: 1.54,
      amount_3: 0.79,
      amount_4: 0.68,
      amount_5: 0.3,
      date_created: '05/19/2020',
      date_modified: '2019-07-02 06:22:39',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'b032eb06-fd95-48fb-8059-c0afc072342c',
      drink_name: 'circuit',
      rating: 3.9,
      glassware: 'Poaceae',
      location: 'Preko',
      ingredient_1: 'Food Colouring - Green',
      ingredient_2: 'Chinese Lemon Pork',
      ingredient_3: 'Cheese - Perron Cheddar',
      ingredient_4: 'Red Cod Fillets - 225g',
      ingredient_5: 'Sun - Dried Tomatoes',
      amount_1: 1.91,
      amount_2: 1.7,
      amount_3: 0.43,
      amount_4: 0.35,
      amount_5: 0.9,
      date_created: '04/26/2020',
      date_modified: '2019-09-02 20:33:50',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'eb2ed546-dc61-4bd2-b504-938b88bca52f',
      drink_name: 'systemic',
      rating: 2.7,
      glassware: 'Acanthaceae',
      location: 'Ambositra',
      ingredient_1: 'Lobster - Base',
      ingredient_2: 'Cheese - Le Cheve Noir',
      ingredient_3: 'Sauce - Gravy, Au Jus, Mix',
      ingredient_4: 'Wine - Harrow Estates, Vidal',
      ingredient_5: 'Bread - White Epi Baguette',
      amount_1: 2.89,
      amount_2: 1.82,
      amount_3: 0.32,
      amount_4: 0.63,
      amount_5: 0.7,
      date_created: '01/18/2020',
      date_modified: '2019-11-12 12:29:17',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'c14355dc-0a20-4da7-93fa-b2ee2c678512',
      drink_name: 'Multi-lateral',
      rating: 3.5,
      glassware: 'Blechnaceae',
      location: 'Kuafeu',
      ingredient_1: 'Butter Balls Salted',
      ingredient_2: 'Squid - U 5',
      ingredient_3: 'Carroway Seed',
      ingredient_4: 'Cheese - Havarti, Roasted Garlic',
      ingredient_5: 'Bread Base - Goodhearth',
      amount_1: 2.78,
      amount_2: 1.24,
      amount_3: 0.67,
      amount_4: 0.79,
      amount_5: 0.3,
      date_created: '11/15/2019',
      date_modified: '2019-09-12 18:53:31',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '7d831c8e-0123-499c-ab22-cdef1cef5bf1',
      drink_name: 'cohesive',
      rating: 4.8,
      glassware: 'Collemataceae',
      location: 'Ţubarjal',
      ingredient_1: 'Fennel',
      ingredient_2: 'Sachet',
      ingredient_3: 'Muffin Batt - Choc Chk',
      ingredient_4: 'Piping - Bags Quizna',
      ingredient_5: 'Hagen Daza - Dk Choocolate',
      amount_1: 1.27,
      amount_2: 1.6,
      amount_3: 0.4,
      amount_4: 0.97,
      amount_5: 0.5,
      date_created: '03/01/2020',
      date_modified: '2020-02-14 01:35:59',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '8fdd8b3c-b16f-4d47-ad53-e00aafbff6a1',
      drink_name: 'project',
      rating: 1.6,
      glassware: 'Chenopodiaceae',
      location: 'Mendefera',
      ingredient_1: 'Wine - Champagne Brut Veuve',
      ingredient_2: 'Nut - Chestnuts, Whole',
      ingredient_3: 'Wine - White, Mosel Gold',
      ingredient_4: 'Beans - Green',
      ingredient_5: 'Bread - Raisin Walnut Oval',
      amount_1: 1.08,
      amount_2: 1.25,
      amount_3: 0.29,
      amount_4: 0.42,
      amount_5: 0.5,
      date_created: '09/02/2019',
      date_modified: '2019-12-31 08:27:47',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '5764f24f-2a2a-4aba-8fc6-9d01b25635ec',
      drink_name: 'Object-based',
      rating: 2.2,
      glassware: 'Pertusariaceae',
      location: 'Dawuhan',
      ingredient_1: 'Yokaline',
      ingredient_2: 'Toothpick Frilled',
      ingredient_3: 'Pepper - Scotch Bonnet',
      ingredient_4: 'Spinach - Spinach Leaf',
      ingredient_5: 'Muffin Mix - Carrot',
      amount_1: 2.87,
      amount_2: 1.54,
      amount_3: 0.32,
      amount_4: 0.57,
      amount_5: 0.5,
      date_created: '11/27/2019',
      date_modified: '2020-02-22 10:16:34',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'd5d9078d-b006-4792-bbaa-93bef4645812',
      drink_name: 'full-range',
      rating: 2.9,
      glassware: 'Capparaceae',
      location: 'Selianítika',
      ingredient_1: 'Juice - Cranberry, 341 Ml',
      ingredient_2: 'Jam - Blackberry, 20 Ml Jar',
      ingredient_3: 'Flour - Whole Wheat',
      ingredient_4: 'Wine - Red, Lurton Merlot De',
      ingredient_5: 'Wine - Balbach Riverside',
      amount_1: 1.56,
      amount_2: 1.09,
      amount_3: 0.38,
      amount_4: 0.46,
      amount_5: 0.9,
      date_created: '09/21/2019',
      date_modified: '2019-12-27 15:57:24',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '0c72f151-ec42-4bb9-91a4-550bf3baa566',
      drink_name: 'projection',
      rating: 4.3,
      glassware: 'Hymeneliaceae',
      location: 'Baisha',
      ingredient_1: 'Energy Drink Red Bull',
      ingredient_2: 'Chutney Sauce - Mango',
      ingredient_3: 'Beans - Green',
      ingredient_4: 'Sauce - Alfredo',
      ingredient_5: 'Juice - Lime',
      amount_1: 2.91,
      amount_2: 1.02,
      amount_3: 0.79,
      amount_4: 0.93,
      amount_5: 0.9,
      date_created: '09/27/2019',
      date_modified: '2019-10-13 00:02:46',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'ad04c9c8-b49e-4129-acd9-22e6a3c7711c',
      drink_name: 'frame',
      rating: 4.4,
      glassware: 'Poaceae',
      location: 'Tysmenytsya',
      ingredient_1: 'Calvados - Boulard',
      ingredient_2: 'Cheese - Gouda',
      ingredient_3: 'Onion - Dried',
      ingredient_4: 'Wine - Beaujolais Villages',
      ingredient_5: 'Toamtoes 6x7 Select',
      amount_1: 1.41,
      amount_2: 1.79,
      amount_3: 0.88,
      amount_4: 0.74,
      amount_5: 1.0,
      date_created: '09/20/2019',
      date_modified: '2019-09-25 06:40:54',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'c7541453-d2c1-4c59-9600-53501ea056e8',
      drink_name: 'Persevering',
      rating: 3.4,
      glassware: 'Ranunculaceae',
      location: 'Aras-asan',
      ingredient_1: 'Mousse - Banana Chocolate',
      ingredient_2: 'Potatoes - Peeled',
      ingredient_3: 'Napkin Colour',
      ingredient_4: 'Shortbread - Cookie Crumbs',
      ingredient_5: 'Bread - Hamburger Buns',
      amount_1: 1.89,
      amount_2: 1.16,
      amount_3: 0.74,
      amount_4: 0.37,
      amount_5: null,
      date_created: '05/25/2020',
      date_modified: '2019-10-17 20:48:27',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '2c524165-1ad5-4b06-94c9-beeead889d83',
      drink_name: 'utilisation',
      rating: 4.2,
      glassware: 'Polygonaceae',
      location: 'Grivenskaya',
      ingredient_1: 'Pastry - Baked Scones - Mini',
      ingredient_2: 'Lamb - Pieces, Diced',
      ingredient_3: 'Bread Crumbs - Panko',
      ingredient_4: 'Gherkin',
      ingredient_5: 'Energy Drink',
      amount_1: 1.2,
      amount_2: 1.81,
      amount_3: 0.31,
      amount_4: 0.8,
      amount_5: 0.6,
      date_created: '02/14/2020',
      date_modified: '2019-11-29 08:00:05',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'd33e9676-f8ef-44d3-b147-6096aab7bc0a',
      drink_name: 'projection',
      rating: 3.8,
      glassware: 'Polygalaceae',
      location: 'Matagalpa',
      ingredient_1: 'Hot Choc Vending',
      ingredient_2: 'Wine - Ruffino Chianti',
      ingredient_3: 'Table Cloth 53x53 White',
      ingredient_4: 'Ham - Cooked Bayonne Tinned',
      ingredient_5: 'Spring Roll Veg Mini',
      amount_1: 2.2,
      amount_2: 1.76,
      amount_3: 0.82,
      amount_4: 0.73,
      amount_5: 0.4,
      date_created: '02/13/2020',
      date_modified: '2019-08-08 10:57:35',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '5bbea3ff-33c3-4c9e-8222-9e626a99e962',
      drink_name: 'workforce',
      rating: 2.3,
      glassware: 'Onagraceae',
      location: 'Bacalan',
      ingredient_1: 'Mayonnaise',
      ingredient_2: 'Drambuie',
      ingredient_3: 'Stock - Veal, Brown',
      ingredient_4: 'Bok Choy - Baby',
      ingredient_5: 'Broccoli - Fresh',
      amount_1: 2.19,
      amount_2: 1.82,
      amount_3: 0.92,
      amount_4: 0.6,
      amount_5: 0.5,
      date_created: '02/24/2020',
      date_modified: '2020-03-17 10:06:51',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '93515416-84d1-4bcd-a0e6-8fa444b043fe',
      drink_name: 'Fundamental',
      rating: 1.0,
      glassware: 'Asclepiadaceae',
      location: 'Cumaná',
      ingredient_1: 'Flour - Corn, Fine',
      ingredient_2: 'Syrup - Kahlua Chocolate',
      ingredient_3: 'Milk - Homo',
      ingredient_4: 'Onions - Dried, Chopped',
      ingredient_5: 'Cheese - Cheddarsliced',
      amount_1: 2.92,
      amount_2: 1.9,
      amount_3: 0.41,
      amount_4: 0.28,
      amount_5: 0.5,
      date_created: '05/23/2020',
      date_modified: '2019-12-12 03:23:31',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '199aa472-3928-4eb7-b761-4111f3f79760',
      drink_name: 'methodical',
      rating: 2.6,
      glassware: 'Fabaceae',
      location: 'Parang',
      ingredient_1: 'Wine - Fontanafredda Barolo',
      ingredient_2: 'Bread Base - Toscano',
      ingredient_3: 'Sugar - Sweet N Low, Individual',
      ingredient_4: 'Beef - Texas Style Burger',
      ingredient_5: 'Cookies Cereal Nut',
      amount_1: 1.78,
      amount_2: 1.35,
      amount_3: 0.98,
      amount_4: 0.97,
      amount_5: null,
      date_created: '02/09/2020',
      date_modified: '2020-05-15 21:52:11',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '15654459-7021-4685-adc4-9f19240388db',
      drink_name: 'Persistent',
      rating: 4.2,
      glassware: 'Gyalectaceae',
      location: 'Khawr Maksar',
      ingredient_1: 'Ice Cream Bar - Drumstick',
      ingredient_2: 'Muffin Carrot - Individual',
      ingredient_3: 'Zucchini - Mini, Green',
      ingredient_4: 'Steam Pan - Half Size Deep',
      ingredient_5: 'Bread - Mini Hamburger Bun',
      amount_1: 1.7,
      amount_2: 1.93,
      amount_3: 0.71,
      amount_4: 0.69,
      amount_5: 0.8,
      date_created: '12/20/2019',
      date_modified: '2019-08-29 04:11:33',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'c68ea54d-5f06-4048-a8b5-0c33a07a7ed0',
      drink_name: 'interactive',
      rating: 1.4,
      glassware: 'Polygonaceae',
      location: 'Xinrong',
      ingredient_1: 'Crush - Grape, 355 Ml',
      ingredient_2: 'Lamb - Rack',
      ingredient_3: 'Rootbeer',
      ingredient_4: 'Table Cloth 91x91 Colour',
      ingredient_5: 'French Pastry - Mini Chocolate',
      amount_1: 2.88,
      amount_2: 1.39,
      amount_3: 0.29,
      amount_4: 0.91,
      amount_5: 0.6,
      date_created: '03/27/2020',
      date_modified: '2019-09-27 20:04:01',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '3b932085-f637-4059-903f-59a639e3ebe8',
      drink_name: 'internet solution',
      rating: 3.9,
      glassware: 'Papaveraceae',
      location: 'Giebułtów',
      ingredient_1: 'Cloves - Ground',
      ingredient_2: 'Fond - Neutral',
      ingredient_3: 'Aspic - Amber',
      ingredient_4: 'Onions - Green',
      ingredient_5: 'Pastry - Chocolate Chip Muffin',
      amount_1: 2.54,
      amount_2: 1.74,
      amount_3: 0.79,
      amount_4: 0.69,
      amount_5: null,
      date_created: '03/31/2020',
      date_modified: '2019-08-26 14:41:41',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '2156d499-3ae5-4966-96a6-b1d468d91dec',
      drink_name: 'internet solution',
      rating: 3.2,
      glassware: 'Asteraceae',
      location: 'Shimen',
      ingredient_1: 'Whmis - Spray Bottle Trigger',
      ingredient_2: 'Country Roll',
      ingredient_3: 'Orange Roughy 6/8 Oz',
      ingredient_4: 'Soup - Campbells Chicken',
      ingredient_5: 'Marjoram - Fresh',
      amount_1: 1.46,
      amount_2: 1.58,
      amount_3: 0.75,
      amount_4: 0.97,
      amount_5: 0.6,
      date_created: '10/15/2019',
      date_modified: '2019-09-24 15:41:23',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'a462334a-ae23-458f-b711-300ab36d833b',
      drink_name: 'Innovative',
      rating: 4.2,
      glassware: 'Caryophyllaceae',
      location: 'Đoan Hùng',
      ingredient_1: 'Cheese - Mix',
      ingredient_2: 'Wine - White, Riesling, Henry Of',
      ingredient_3: 'Silicone Paper 16.5x24',
      ingredient_4: 'Guinea Fowl',
      ingredient_5: 'Sesame Seed Black',
      amount_1: 1.19,
      amount_2: 1.37,
      amount_3: 0.66,
      amount_4: 0.64,
      amount_5: 0.8,
      date_created: '04/02/2020',
      date_modified: '2020-05-13 08:04:11',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'd3429ef3-e8db-4161-9e7c-4fdb03b04bcd',
      drink_name: 'Synchronised',
      rating: 1.5,
      glassware: 'Poaceae',
      location: 'Kalidawe',
      ingredient_1: 'Wine - Ice Wine',
      ingredient_2: 'Cup Translucent 9 Oz',
      ingredient_3: 'Soup - Tomato Mush. Florentine',
      ingredient_4: 'Wine - White, Concha Y Toro',
      ingredient_5: 'Coffee Cup 16oz Foam',
      amount_1: 2.92,
      amount_2: 1.69,
      amount_3: 0.85,
      amount_4: 0.52,
      amount_5: 0.7,
      date_created: '04/15/2020',
      date_modified: '2019-07-04 19:29:16',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '1f26fa5c-e81f-4e7b-880f-e4a10178acae',
      drink_name: 'model',
      rating: 2.4,
      glassware: 'Liliaceae',
      location: 'Bungsuan',
      ingredient_1: 'Corn Shoots',
      ingredient_2: 'Split Peas - Green, Dry',
      ingredient_3: 'Chinese Lemon Pork',
      ingredient_4: 'Sponge Cake Mix - Chocolate',
      ingredient_5: 'Dry Ice',
      amount_1: 2.34,
      amount_2: 1.67,
      amount_3: 0.84,
      amount_4: 0.67,
      amount_5: null,
      date_created: '10/28/2019',
      date_modified: '2019-11-22 23:05:01',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'd2b13a38-6940-4534-9b52-50bf9d9ff649',
      drink_name: 'Polarised',
      rating: 2.5,
      glassware: 'Cyperaceae',
      location: 'Longhe',
      ingredient_1: 'Spoon - Soup, Plastic',
      ingredient_2: 'Lamb - Whole, Frozen',
      ingredient_3: 'Shiro Miso',
      ingredient_4: 'Pastry - Raisin Muffin - Mini',
      ingredient_5: 'Tortillas - Flour, 10',
      amount_1: 1.51,
      amount_2: 1.66,
      amount_3: 0.5,
      amount_4: 0.44,
      amount_5: 0.8,
      date_created: '10/12/2019',
      date_modified: '2019-12-07 08:50:35',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '146d0f5c-08ed-4edf-971e-d715db3eb63d',
      drink_name: 'emulation',
      rating: 1.3,
      glassware: 'Salicaceae',
      location: 'Samajie Ewenkeminzu',
      ingredient_1: 'Pears - Bartlett',
      ingredient_2: 'Bread - Kimel Stick Poly',
      ingredient_3: 'Chef Hat 25cm',
      ingredient_4: 'Sobe - Tropical Energy',
      ingredient_5: 'Cherries - Frozen',
      amount_1: 2.42,
      amount_2: 1.74,
      amount_3: 0.72,
      amount_4: 0.66,
      amount_5: 1.0,
      date_created: '05/03/2020',
      date_modified: '2020-01-23 19:48:41',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: 'ec8ac615-f701-42fb-a207-86f8aa452f5c',
      drink_name: 'Multi-tiered',
      rating: 3.3,
      glassware: 'Mycocaliciaceae',
      location: 'Funza',
      ingredient_1: 'Muffin Hinge Container 6',
      ingredient_2: 'Island Oasis - Ice Cream Mix',
      ingredient_3: 'Juice - Apple Cider',
      ingredient_4: 'Pork - Side Ribs',
      ingredient_5: 'Wine - Vovray Sec Domaine Huet',
      amount_1: 2.96,
      amount_2: 1.13,
      amount_3: 0.82,
      amount_4: 0.81,
      amount_5: 1.0,
      date_created: '08/31/2019',
      date_modified: '2019-07-08 08:39:21',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '3458e93c-9ceb-4419-a280-7f25326ef899',
      drink_name: 'Managed',
      rating: 2.1,
      glassware: 'Grossulariaceae',
      location: 'Gyangkar',
      ingredient_1: 'Blouse / Shirt / Sweater',
      ingredient_2: 'Cabbage - Savoy',
      ingredient_3: 'Currants',
      ingredient_4: 'Coffee Swiss Choc Almond',
      ingredient_5: 'Wine - Casillero Del Diablo',
      amount_1: 2.6,
      amount_2: 1.17,
      amount_3: 0.79,
      amount_4: 0.67,
      amount_5: 0.8,
      date_created: '06/04/2020',
      date_modified: '2019-12-27 02:31:53',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '0f99f649-4323-4a24-b76b-47a6ee28c872',
      drink_name: 'Balanced',
      rating: 2.0,
      glassware: 'Sapotaceae',
      location: 'Mbanga',
      ingredient_1: 'Juice - Lime',
      ingredient_2: 'Langers - Mango Nectar',
      ingredient_3: 'Yoghurt Tubes',
      ingredient_4: 'Scallops - 20/30',
      ingredient_5: 'Irish Cream - Butterscotch',
      amount_1: 1.77,
      amount_2: 2.0,
      amount_3: 0.5,
      amount_4: 0.79,
      amount_5: null,
      date_created: '09/24/2019',
      date_modified: '2020-05-02 22:32:15',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }, {
      recipe_id: '46fc2d48-2c9e-4f34-8e3f-8b59ab734a98',
      drink_name: '4th generation',
      rating: 2.4,
      glassware: 'Asteraceae',
      location: 'Ridderkerk',
      ingredient_1: 'Soup Knorr Chili With Beans',
      ingredient_2: 'Halibut - Whole, Fresh',
      ingredient_3: 'Puree - Pear',
      ingredient_4: 'Longos - Burritos',
      ingredient_5: 'Rabbit - Frozen',
      amount_1: 2.42,
      amount_2: 1.64,
      amount_3: 0.65,
      amount_4: 0.63,
      amount_5: null,
      date_created: '04/15/2020',
      date_modified: '2019-11-05 06:32:09',
      picture: '../../../../assets/adam-jaime-dmkmrNptMpw-unsplash.jpg'
    }];
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


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/new-user/login-form/login-form.component */
    "./src/app/components/new-user/login-form/login-form.component.ts");
    /* harmony import */


    var _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/new-user/new-user-form/new-user-form.component */
    "./src/app/components/new-user/new-user-form/new-user-form.component.ts");
    /* harmony import */


    var _components_post_drink_form_post_drink_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/post-drink-form/post-drink-form.component */
    "./src/app/components/post-drink-form/post-drink-form.component.ts");
    /* harmony import */


    var _components_the_feed_the_feed_posts_the_feed_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/the-feed/the-feed-posts/the-feed-posts.component */
    "./src/app/components/the-feed/the-feed-posts/the-feed-posts.component.ts");
    /* harmony import */


    var _services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/auth-guard.guard */
    "./src/app/services/auth-guard.guard.ts");
    /* harmony import */


    var _services_guest_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/guest.guard */
    "./src/app/services/guest.guard.ts");

    var routes = [{
      path: '',
      component: _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
      canActivate: [_services_guest_guard__WEBPACK_IMPORTED_MODULE_8__["GuestGuard"]]
    }, {
      path: 'profile',
      component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'the-feed',
      component: _components_the_feed_the_feed_posts_the_feed_posts_component__WEBPACK_IMPORTED_MODULE_6__["TheFeedPostsComponent"],
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'login',
      component: _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
      canActivate: [_services_guest_guard__WEBPACK_IMPORTED_MODULE_8__["GuestGuard"]]
    }, {
      path: 'register',
      component: _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_4__["NewUserFormComponent"],
      canActivate: [_services_guest_guard__WEBPACK_IMPORTED_MODULE_8__["GuestGuard"]]
    }, {
      path: 'drink-post',
      component: _components_post_drink_form_post_drink_form_component__WEBPACK_IMPORTED_MODULE_5__["PostDrinkFormComponent"],
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'quiz',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/quiz/quiz.module */
        "./src/app/components/quiz/quiz.module.ts")).then(function (m) {
          return m.QuizModule;
        });
      },
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'preferences',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/preferences/preferences.module */
        "./src/app/components/preferences/preferences.module.ts")).then(function (module) {
          return module.PreferencesModule;
        });
      },
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'recipe-book',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/recipe-book/recipe-book.module */
        "./src/app/components/recipe-book/recipe-book.module.ts")).then(function (module) {
          return module.RecipeBookModule;
        });
      },
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'user-recipes',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./components/user-recipes/user-recipes.module */
        "./src/app/components/user-recipes/user-recipes.module.ts")).then(function (module) {
          return module.UserRecipesModule;
        });
      },
      canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.checkAuth();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhcHAtbmF2YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG59ICovXHJcbiJdfQ== */"]
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
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
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
    /* harmony import */


    var _components_post_drink_form_post_drink_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/post-drink-form/post-drink-form.component */
    "./src/app/components/post-drink-form/post-drink-form.component.ts");
    /* harmony import */


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _components_the_feed_the_feed_posts_the_feed_posts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/the-feed/the-feed-posts/the-feed-posts.component */
    "./src/app/components/the-feed/the-feed-posts/the-feed-posts.component.ts");
    /* harmony import */


    var _components_quiz_quiz_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/quiz/quiz.module */
    "./src/app/components/quiz/quiz.module.ts");
    /* harmony import */


    var _components_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/image-upload/image-upload.module */
    "./src/app/components/image-upload/image-upload.module.ts");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"], _components_quiz_quiz_module__WEBPACK_IMPORTED_MODULE_17__["QuizModule"], _components_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_18__["ImageUploadModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_post_drink_form_post_drink_form_component__WEBPACK_IMPORTED_MODULE_14__["PostDrinkFormComponent"], _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"], _components_the_feed_the_feed_posts_the_feed_posts_component__WEBPACK_IMPORTED_MODULE_16__["TheFeedPostsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"], _components_quiz_quiz_module__WEBPACK_IMPORTED_MODULE_17__["QuizModule"], _components_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_18__["ImageUploadModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _components_new_user_new_user_form_new_user_form_component__WEBPACK_IMPORTED_MODULE_7__["NewUserFormComponent"], _components_new_user_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_post_drink_form_post_drink_form_component__WEBPACK_IMPORTED_MODULE_14__["PostDrinkFormComponent"], _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"], _components_the_feed_the_feed_posts_the_feed_posts_component__WEBPACK_IMPORTED_MODULE_16__["TheFeedPostsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _components_recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"], _components_preferences_preferences_module__WEBPACK_IMPORTED_MODULE_12__["PreferencesModule"], _components_user_recipes_user_recipes_module__WEBPACK_IMPORTED_MODULE_13__["UserRecipesModule"], _components_quiz_quiz_module__WEBPACK_IMPORTED_MODULE_17__["QuizModule"], _components_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_18__["ImageUploadModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/image-upload/image-upload.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/image-upload/image-upload.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ImageUploadComponent */

  /***/
  function srcAppComponentsImageUploadImageUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function () {
      return ImageUploadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./image-upload.service */
    "./src/app/components/image-upload/image-upload.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageUploadComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image Uploaded Successfully!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImageUploadComponent_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image Upload Failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function ImageUploadComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageUploadComponent_div_7_div_2_Template, 3, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageUploadComponent_div_7_div_3_Template, 3, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("img-preview", ctx_r2.selectedFile.status === "fail" ? "error" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r2.selectedFile.src + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedFile.status === "ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedFile.status === "fail");
      }
    } // import { ImageSnippet } from 'src/app/interfaces/imageSnippet';


    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
      this.pending = false;
      this.status = 'init';
      this.src = src;
      this.file = file;
    };

    var ImageUploadComponent = /*#__PURE__*/function () {
      function ImageUploadComponent(imageService) {
        _classCallCheck(this, ImageUploadComponent);

        this.imageService = imageService;
      }

      _createClass(ImageUploadComponent, [{
        key: "onSuccess",
        value: function onSuccess() {
          this.selectedFile.pending = false;
          this.selectedFile.status = 'ok';
        }
      }, {
        key: "onError",
        value: function onError() {
          this.selectedFile.pending = false;
          this.selectedFile.status = 'fail';
          this.selectedFile.src = '';
        }
      }, {
        key: "processFile",
        value: function processFile(imageInput) {
          var _this = this;

          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            console.log('event', event.target);
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log('selected file', _this.selectedFile.src);
            _this.selectedFile.pending = true;

            _this.imageService.uploadImage(_this.selectedFile.src).subscribe(function (res) {
              console.log('comp response', res);

              _this.onSuccess();
            }, function (err) {
              console.log('component', err);

              _this.onError();
            });
          });
          reader.readAsDataURL(file);
        }
      }]);

      return ImageUploadComponent;
    }();

    ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) {
      return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_upload_service__WEBPACK_IMPORTED_MODULE_1__["ImageUploadService"]));
    };

    ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageUploadComponent,
      selectors: [["image-upload"]],
      decls: 8,
      vars: 1,
      consts: [[1, "img-upload-container"], ["type", "button", 1, "file-select", 3, "click"], ["type", "file", "accept", "image/*", 3, "change"], ["fileInput", "", "imgInput", ""], ["class", "img-preview-container", 4, "ngIf"], [1, "img-preview-container"], [3, "ngStyle"], [4, "ngIf"], [1, "success"], [1, "fail"]],
      template: function ImageUploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select File ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.processFile(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageUploadComponent_div_7_Template, 4, 8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.image-upload-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.img-preview-container[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  position: relative;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%] {\r\n  background: center center no-repeat;\r\n  background-size: contain;\r\n  height: 120px;\r\n  width: 120px;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.success[_ngcontent-%COMP%] {\r\n  color: green;\r\n  z-index: 1;\r\n}\r\n\r\n.fail[_ngcontent-%COMP%] {\r\n  color: red;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZC1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltZy1wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmltZy1wcmV2aWV3IHtcclxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZmFpbCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'image-upload',
          templateUrl: './image-upload.component.html',
          styleUrls: ['./image-upload.component.css']
        }]
      }], function () {
        return [{
          type: _image_upload_service__WEBPACK_IMPORTED_MODULE_1__["ImageUploadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/image-upload/image-upload.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/image-upload/image-upload.module.ts ***!
    \****************************************************************/

  /*! exports provided: ImageUploadModule */

  /***/
  function srcAppComponentsImageUploadImageUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function () {
      return ImageUploadModule;
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


    var _image_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./image-upload.component */
    "./src/app/components/image-upload/image-upload.component.ts");

    var ImageUploadModule = function ImageUploadModule() {
      _classCallCheck(this, ImageUploadModule);
    };

    ImageUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImageUploadModule
    });
    ImageUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImageUploadModule_Factory(t) {
        return new (t || ImageUploadModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageUploadModule, {
        declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]],
          exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/image-upload/image-upload.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/image-upload/image-upload.service.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageUploadService */

  /***/
  function srcAppComponentsImageUploadImageUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageUploadService", function () {
      return ImageUploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ImageUploadService = /*#__PURE__*/function () {
      function ImageUploadService(http) {
        _classCallCheck(this, ImageUploadService);

        this.http = http;
      }

      _createClass(ImageUploadService, [{
        key: "uploadImage",
        value: function uploadImage(image) {
          var formData = new FormData(); // formData.append('image', image);
          // console.log('formData Get', formData.get('image'));
          // console.log('formdata', formData);

          console.log('service image', image);
          return this.http.post('/api/drink-posts/images', 'image being sent');
        }
      }]);

      return ImageUploadService;
    }();

    ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
      return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ImageUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageUploadService,
      factory: ImageUploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadService, [{
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
      decls: 0,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {},
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


    var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavbarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(nav, auth) {
        _classCallCheck(this, NavbarComponent);

        this.nav = nav;
        this.auth = auth;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.auth.sharedToken.subscribe(function (token) {
            console.log(token);

            if ((token === null || token === void 0 ? void 0 : token.length) > 0) {
              _this2.token = token;

              _this2.nav.getUserPic().subscribe(function (response) {
                var picture = response.pic[0].picture;
                _this2.userPic = picture;
                console.log(_this2.userPic);
              });
            } else {
              _this2.token = undefined;
              _this2.userPic = undefined;
            }
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 1,
      vars: 1,
      consts: [["class", "nav-parent", 4, "ngIf"], [1, "nav-parent"], ["routerLink", "/the-feed", 1, "feed"], ["routerLink", "/drink-post", 1, "drink-post"], ["routerLink", "/profile", 1, "profile"], ["alt", " ", "width", " ", "height", " ", 3, "src"], ["routerLink", "/preferences", 1, "preferences"], ["routerLink", "/quiz", 1, "quiz"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 7, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.token);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
<<<<<<< HEAD
      styles: [".nav-parent[_ngcontent-%COMP%] {\n  top: 0;\n  position: fixed;\n  width: 100%;\n  height: 80px;\n  background-color: rgba(17, 31, 44, 0.75);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  border-bottom: 2px solid rgb(236, 184, 94);\n}\n\na[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  color: #80bdad;\n}\n\n\n\n.feed[_ngcontent-%COMP%] {\n  background-image: url('Feed.svg');\n  background-repeat: no-repeat;\n}\n\n.drink-post[_ngcontent-%COMP%] {\n  background-image: url('drinks.svg');\n  background-repeat: no-repeat;\n}\n\n.preferences[_ngcontent-%COMP%] {\n  background-image: url('preferances.svg');\n  background-repeat: no-repeat;\n}\n\n.quiz[_ngcontent-%COMP%] {\n  background-image: url('quiz.svg');\n  background-repeat: no-repeat;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 85px;\n  height: auto;\n  margin-left: -30px;\n  border-radius: 100%;\n  background-color: white;\n  border: 2px solid rgb(236, 184, 94);\n}\n\n\n\n@media screen and (max-width: 768px) {\n  .nav-parent[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n\n\n\n@media screen and (max-width: 411px) {\n  .nav-parent[_ngcontent-%COMP%] {\n    bottom: 0 !important;\n    width: 100%;\n    height: 80px;\n    position: fixed;\n    border-top: 2px solid rgb(236, 184, 94);\n  }\n\n  img[_ngcontent-%COMP%] {\n    margin-left: -12px;\n    width: 50px;\n    height: 50px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFNO0VBQ04sZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsaUNBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUF1RDtFQUN2RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3Q0FBNkQ7RUFDN0QsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsaUNBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUNBQW1DO0FBQ3JDOztBQUVBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGFyZW50IHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDMxLCA0NCwgMC43NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5NCk7XG59XG5cbmEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogIzgwYmRhZDtcbn1cblxuLyogYTpob3ZlciB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59ICovXG5cbi5mZWVkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0ljb25zL05hdkJhcl9GZWVkL0ZlZWQuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmRyaW5rLXBvc3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX0RyaW5rL2RyaW5rcy5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucHJlZmVyZW5jZXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX015RmF2cy9wcmVmZXJhbmNlcy5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnF1aXoge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX1F1aXovcXVpei5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pbWcge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDk0KTtcbn1cblxuLyogVGFibGV0ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2LXBhcmVudCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuXG4vKiBQaG9uZSBTaXppbmcgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gIC5uYXYtcGFyZW50IHtcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDk0KTtcbiAgfVxuXG4gIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuXG4gIGEge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogM3ZoOyAqL1xuICB9XG59XG4iXX0= */"]
=======
      styles: [".nav-parent[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: rgba(17, 31, 44, 0.75);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  border-bottom: 2px solid rgb(236, 184, 94);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  color: #80bdad;\r\n}\r\n\r\n\r\n\r\n.feed[_ngcontent-%COMP%] {\r\n  background-image: url('Feed.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.drink-post[_ngcontent-%COMP%] {\r\n  background-image: url('drinks.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.preferences[_ngcontent-%COMP%] {\r\n  background-image: url('preferances.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.quiz[_ngcontent-%COMP%] {\r\n  background-image: url('quiz.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 85px;\r\n  height: auto;\r\n  margin-left: -30px;\r\n  border-radius: 100%;\r\n  background-color: white;\r\n  border: 2px solid rgb(236, 184, 94);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav-parent[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 411px) {\r\n  .nav-parent[_ngcontent-%COMP%] {\r\n    bottom: 0 !important;\r\n    width: 100%;\r\n    height: 80px;\r\n    position: fixed;\r\n    border-top: 2px solid rgb(236, 184, 94);\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    margin-left: -12px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFNO0VBQ04sZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsaUNBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1DQUF1RDtFQUN2RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3Q0FBNkQ7RUFDN0QsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsaUNBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUNBQW1DO0FBQ3JDOztBQUVBLFdBQVc7O0FBQ1g7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGFyZW50IHtcclxuICB0b3A6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAzMSwgNDQsIDAuNzUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDk0KTtcclxufVxyXG5cclxuYSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAjODBiZGFkO1xyXG59XHJcblxyXG4vKiBhOmhvdmVyIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn0gKi9cclxuXHJcbi5mZWVkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX0ZlZWQvRmVlZC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5kcmluay1wb3N0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX0RyaW5rL2RyaW5rcy5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5wcmVmZXJlbmNlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0ljb25zL05hdkJhcl9NeUZhdnMvcHJlZmVyYW5jZXMuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5xdWl6IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vSWNvbnMvTmF2QmFyX1F1aXovcXVpei5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTQpO1xyXG59XHJcblxyXG4vKiBUYWJsZXQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LXBhcmVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogUGhvbmUgU2l6aW5nICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XHJcbiAgLm5hdi1wYXJlbnQge1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDk0KTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogM3ZoOyAqL1xyXG4gIH1cclxufVxyXG4iXX0= */"]
>>>>>>> cb46ae8c5ac8ff3f4f01a4a50c6e8899e1c50798
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
        return [{
          type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginFormComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r5.message);
      }
    }

    function LoginFormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginFormComponent_div_4_span_1_Template, 2, 1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
      }
    }

    function LoginFormComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
      }
    }

    function LoginFormComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter user name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginFormComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(usersService, auth, fb, nav, route, router) {
        _classCallCheck(this, LoginFormComponent);

        this.usersService = usersService;
        this.auth = auth;
        this.fb = fb;
        this.nav = nav;
        this.route = route;
        this.router = router;
        this.errors = [];
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkLoginMessage();
          this.nav.hide();
          this.loginForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            loginDate: this.fb.control(new Date())
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this3 = this;

          // console.log(this.loginForm.value);
          if (this.loginForm.invalid) {
            return;
          }

          this.errors = [];
          return this.auth.login(this.loginForm.value).subscribe(function () {
            if (_this3.auth.redirectUrl) {
              _this3.router.navigate([_this3.auth.redirectUrl]);

              _this3.auth.redirectUrl = null;
            } else {
              _this3.router.navigate(['/the-feed']);
            }
          }, function (errors) {
            _this3.errors = errors;
          });
        }
      }, {
        key: "checkLoginMessage",
        value: function checkLoginMessage() {
          var _this4 = this;

          this.route.queryParams.subscribe(function (params) {
            _this4.message = params['message'] ? params['message'] : null;
            _this4.messageTimeout = window.setTimeout(function () {
              _this4.router.navigate([], {
                replaceUrl: true,
                queryParams: {
                  message: null
                },
                queryParamsHandling: 'merge'
              });

              _this4.message = '';
            }, 3000);
          });
        }
      }, {
        key: "ngOnDestroy",
        // this doesn't work for some reason
        // get loginFormControl() {
        //   return this.loginForm.controls;
        // }
        value: function ngOnDestroy() {
          this.messageTimeout && window.clearTimeout(this.messageTimeout);
        }
      }, {
        key: "userName",
        get: function get() {
          return this.loginForm.get('userName');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["login-form"]],
      decls: 23,
      vars: 6,
      consts: [[1, "background-img"], [1, "global-parent"], ["class", "errors", 4, "ngIf"], ["class", "success", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "userName"], ["type", "text", "name", "userName", "formControlName", "userName", "placeholder", "Enter Username"], [4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "Enter Password"], ["type", "submit", 3, "disabled"], [1, "linkInfo"], ["routerLink", "/register", 1, "center"], [1, "errors"], [4, "ngFor", "ngForOf"], [1, "success"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginFormComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginFormComponent_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginFormComponent_div_11_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginFormComponent_div_16_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New to Top Shelf?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click Here to Create a Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.invalid && ctx.userName.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && ctx.password.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  \r\n  background-image: url('margarita.svg');\r\n  background-repeat: no-repeat;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n}\r\n\r\n.linkInfo[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  align-self: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n}\r\n\r\n@media screen and (max-width: 640px) {\r\n}\r\n@media screen and (max-width: 360px) {\r\n  .background-img[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    height: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixzQ0FBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUVBLDBCQUEwQjtBQUUxQjtBQUNBO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWcge1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMzB2aDsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9NYXJnYXJpdGEvbWFyZ2FyaXRhLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi8qIE5ldyB0byA/ICAqL1xyXG4ubGlua0luZm8ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBtZWRpYSBRdWVyeSBmb3IgVGFibGV0cyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgcGhvbmUgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmJhY2tncm91bmQtaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
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
          type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/navbar.service */
    "./src/app/services/navbar.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewUserFormComponent_div_4_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r10.message);
      }
    }

    function NewUserFormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewUserFormComponent_div_4_span_1_Template, 2, 1, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
      }
    }

    function NewUserFormComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are too young");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewUserFormComponent_span_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NewUserFormComponent = /*#__PURE__*/function () {
      function NewUserFormComponent(fb, usersService, nav, auth, router) {
        _classCallCheck(this, NewUserFormComponent);

        this.fb = fb;
        this.usersService = usersService;
        this.nav = nav;
        this.auth = auth;
        this.router = router;
        this.registered = false;
        this.errors = [];
      }

      _createClass(NewUserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav.hide();
          this.newUserForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(21), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,,]],
            bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            date: this.fb.control(new Date())
          }, {
            validator: this.usersService.PasswordValidation('password', 'password2')
          });
        }
      }, {
        key: "validateDOB",
        value: function validateDOB(dob) {
          var year = new Date(dob.target.value).getFullYear();
          var today = new Date().getFullYear();

          if (today - year >= 21) {
            console.log("you can drink");
          } else {
            console.log("you are not old enough");
          }
        } // // this doesn't work :()
        // get newUserFormControl() {
        //   return this.newUserForm.controls;
        // }

      }, {
        key: "register",
        value: function register() {
          var _this5 = this;

          if (this.newUserForm.invalid) {
            return;
          } // empty errors array on submit


          this.errors = [];
          this.auth.register(this.newUserForm.value).subscribe(function (data) {
            _this5.router.navigate(['/login'], {
              queryParams: {
                message: 'You have been successfully registered!'
              }
            });
          }, function (errors) {
            _this5.errors = errors;
            console.log(_this5.errors);
          });
        }
      }, {
        key: "firstName",
        get: function get() {
          return this.newUserForm.get('firstName');
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.newUserForm.get('lastName');
        }
      }, {
        key: "userName",
        get: function get() {
          return this.newUserForm.get('userName');
        }
      }, {
        key: "age",
        get: function get() {
          return this.newUserForm.get('age');
        }
      }, {
        key: "email",
        get: function get() {
          return this.newUserForm.get('firstName');
        }
      }, {
        key: "password",
        get: function get() {
          return this.newUserForm.get('password');
        }
      }, {
        key: "password2",
        get: function get() {
          return this.newUserForm.get('password2');
        }
      }]);

      return NewUserFormComponent;
    }();

    NewUserFormComponent.ɵfac = function NewUserFormComponent_Factory(t) {
      return new (t || NewUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    NewUserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewUserFormComponent,
      selectors: [["new-user-form"]],
      decls: 56,
      vars: 11,
      consts: [[1, "background-img"], [1, "global-parent"], [1, "center"], ["class", "errors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "two-col"], [1, "first-name-container"], ["for", "firstName", "for", "label-control"], ["type", "text", "formControlName", "firstName", 1, "first-name"], [4, "ngIf"], [1, "last-name-container"], ["for", "lastName", "for", "label-control"], ["type", "text", "formControlName", "lastName", 1, "last-name"], ["for", "userName", "for", "label-control"], ["type", "text", "formControlName", "userName", 1, "form-control"], ["for", "age", "for", "label-control"], ["formControlName", "age", "type", "number", "name", "age", "placeholder", "age", 1, "form-control"], ["for", "email", "for", "label-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "password", "for", "label-control"], ["type", "password", "formControlName", "password", "placeholder", "Enter Password", 1, "form-control"], ["for", "password2", "for", "label-control"], ["type", "password", "formControlName", "password2", "placeholder", "Confirm Password", 1, "form-control"], ["for", "bio", "for", "label-control", "rows", "9", "cols", "50"], ["formControlName", "bio", "placeholder", "Limit 140 Characters", 1, "form-control"], ["type", "submit", 3, "disabled"], ["href", "#"], [1, "errors"], [4, "ngFor", "ngForOf"]],
      template: function NewUserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New User Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewUserFormComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewUserFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewUserFormComponent_span_12_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewUserFormComponent_span_17_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewUserFormComponent_span_22_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NewUserFormComponent_span_27_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NewUserFormComponent_span_32_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NewUserFormComponent_span_37_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Confirm Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NewUserFormComponent_span_42_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NewUserFormComponent_span_43_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Biography:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "textarea", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Already registered? Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " to login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newUserForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName.touched && (ctx.firstName.errors == null ? null : ctx.firstName.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastName.touched && (ctx.lastName.errors == null ? null : ctx.lastName.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName.touched && (ctx.userName.errors == null ? null : ctx.userName.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.age.errors == null ? null : ctx.age.errors.min) && ctx.age.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.touched && (ctx.email.errors == null ? null : ctx.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.touched && (ctx.password.errors == null ? null : ctx.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password2.touched && (ctx.password2.errors == null ? null : ctx.password2.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password2.touched && (ctx.password2.errors == null ? null : ctx.password2.errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newUserForm.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('margarita.svg');\r\n  background-repeat: no-repeat;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: -1;\r\n}\r\n\r\n.two-col[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\r\n.first-name[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.last-name-container[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n.last-name[_ngcontent-%COMP%] {\r\n  width: 110%;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n  .background[_ngcontent-%COMP%] {\r\n    margin-top: 5vh;\r\n    height: 80vh;\r\n    width: 100vw;\r\n  }\r\n  .last-name[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .center[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9uZXctdXNlci1mb3JtL25ldy11c2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUI7QUFDekI7RUFDRSxzQ0FBNEQ7RUFDNUQsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBLEtBQUs7QUFDTDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7O0dBRUc7QUFFSCw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQSw0QkFBNEI7QUFDNUI7OzBCQUUwQjtBQUMxQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbmV3LXVzZXItZm9ybS9uZXctdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgYmFja2dyb3VuZCBJbWFnZSAqL1xyXG4uYmFja2dyb3VuZC1pbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9sb2dpbi1mb3JtL01hcmdhcml0YS9tYXJnYXJpdGEuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qICAqL1xyXG4udHdvLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5maXJzdC1uYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGFzdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4ubGFzdC1uYW1lIHtcclxuICB3aWR0aDogMTEwJTtcclxufVxyXG5zcGFuIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8qIC5zdHlsZSB7XHJcbiAgdGV4dC1lbXBoYXNpcy1zdHlsZTogdHJpYW5nbGU7XHJcbn0gKi9cclxuXHJcbi8qIHNldCBmb3JtIHdpZHRoIGFuZCBIZWlnaHQgKi9cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBmb3JtIGNoaWxkIGxheW91dCovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogbWVkaWEgUXVlcnkgZm9yIFRhYmxldHMgKi9cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHt9XHJcblxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgcGhvbmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuYmFja2dyb3VuZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIC5sYXN0LW5hbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuIl19 */"]
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
          type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post-drink-form/post-drink-form.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/post-drink-form/post-drink-form.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ImageSnippet, PostDrinkFormComponent */

  /***/
  function srcAppComponentsPostDrinkFormPostDrinkFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSnippet", function () {
      return ImageSnippet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDrinkFormComponent", function () {
      return PostDrinkFormComponent;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/recipeAPI.service */
    "./src/app/services/recipeAPI.service.ts");
    /* harmony import */


    var src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/drink-post.service */
    "./src/app/services/drink-post.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../image-upload/image-upload.component */
    "./src/app/components/image-upload/image-upload.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PostDrinkFormComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

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

    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
    };

    var PostDrinkFormComponent = /*#__PURE__*/function () {
      function PostDrinkFormComponent(fb, recipeApi, drinkPostService, auth, route) {
        _classCallCheck(this, PostDrinkFormComponent);

        this.fb = fb;
        this.recipeApi = recipeApi;
        this.drinkPostService = drinkPostService;
        this.auth = auth;
        this.route = route;
      }

      _createClass(PostDrinkFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.recipeApi.getGlassware().subscribe(function (data) {
            _this6.glassware = data['drinks'];
          });
          this.drinkPostForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rating: [0],
            glassware: [''],
            description: [''],
            location: [''],
            imageLocation: [null],
            dateAdded: [moment__WEBPACK_IMPORTED_MODULE_2__().format()],
            username: [this.auth.username]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // console.log(this.drinkPostForm.value);
          this.drinkPostService.postADrink(this.drinkPostForm.value);
          this.route.navigate(['/the-feed']);
        }
      }]);

      return PostDrinkFormComponent;
    }();

    PostDrinkFormComponent.ɵfac = function PostDrinkFormComponent_Factory(t) {
      return new (t || PostDrinkFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_4__["DrinkPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    PostDrinkFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostDrinkFormComponent,
      selectors: [["post-drink-form"]],
      decls: 26,
      vars: 3,
      consts: [[1, "background-img"], [1, "global-parent"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Drink Name"], ["type", "range", "min", "1", "max", "5", "value", "0", "step", ".5", "id", "rating-slider", "formControlName", "rating", 1, "slider"], ["formControlName", "glassware", "name", "glassware", "id", "glassware"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["name", "description", "formControlName", "description", "id", "description", "cols", "25", "rows", "4", 1, "description"], ["type", "submit"], [3, "value"]],
      template: function PostDrinkFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostDrinkFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drink Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "image-upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Glassware");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostDrinkFormComponent_option_19_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.drinkPostForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rating: ", ctx.drinkPostForm.value.rating, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glassware);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('Highball.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  color: rgb(236, 184, 92);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  background-color: #80bdad;\r\n  color: #204051;\r\n  border-style: none;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 768px) {\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRyaW5rLWZvcm0vcG9zdC1kcmluay1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBOEM7RUFDOUMsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBLGlCQUFpQjs7QUFDakI7OztHQUdHOztBQUVILGFBQWE7O0FBQ2I7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUEsMkJBQTJCOztBQUMzQjtBQUNBOztBQUVBLDBCQUEwQjs7QUFDMUI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kcmluay1mb3JtL3Bvc3QtZHJpbmstZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9IaWdoYmFsbC9IaWdoYmFsbC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi8qIHNsaWRlciBzdHlsZSAqL1xyXG4vKiBcclxuLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbn0gKi9cclxuXHJcbi8qIGRyb3Bkb3duICovXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmRhZDtcclxuICBjb2xvcjogIzIwNDA1MTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5IGZvciBUYWJsZXQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgZm9yIHBob25lICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDrinkFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'post-drink-form',
          templateUrl: './post-drink-form.component.html',
          styleUrls: ['./post-drink-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"]
        }, {
          type: src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_4__["DrinkPostService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
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
    /* harmony import */


    var _preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../preferences.service */
    "./src/app/components/preferences/preferences.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesBartendersComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesBartendersComponent_div_4_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onDelete(item_r3.fav_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.fav_info);
      }
    }

    function PreferencesBartendersComponent_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't like any bartenders?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreferencesBartendersComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesBartendersComponent_div_4_div_1_Template, 5, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreferencesBartendersComponent_div_4_div_2_Template, 2, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bartenders);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bartenders.length <= 0);
      }
    }

    var PreferencesBartendersComponent = /*#__PURE__*/function () {
      function PreferencesBartendersComponent(preferService) {
        _classCallCheck(this, PreferencesBartendersComponent);

        this.preferService = preferService; // bartenders = MOCK_PREFER;

        this.bartenders = [];
      }

      _createClass(PreferencesBartendersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // console.log('working');
          this.preferService.getItems();
          this.itemsSub = this.preferService.getItemUpdateListener().subscribe(function (items) {
            _this7.bartenders = items.filter(function (item) {
              return item.fav_cat === 'bartenders';
            });
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(itemId) {
          this.preferService.deleteItem(itemId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.itemsSub.unsubscribe();
        }
      }]);

      return PreferencesBartendersComponent;
    }();

    PreferencesBartendersComponent.ɵfac = function PreferencesBartendersComponent_Factory(t) {
      return new (t || PreferencesBartendersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]));
    };

    PreferencesBartendersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesBartendersComponent,
      selectors: [["preferences-bartenders"]],
      decls: 5,
      vars: 1,
      consts: [[1, "global-parent"], [1, "child-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PreferencesBartendersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bartenders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreferencesBartendersComponent_div_4_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bartenders.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%] {\r\n  border: red 1px solid;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTs7Ozs7O0dBTUc7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBib3JkZXI6IHJlZCAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi8qIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59ICovXHJcbi8qIC5uYW1lIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBXaGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaG93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesBartendersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-bartenders',
          templateUrl: './preferences-bartenders.component.html',
          styleUrls: [// './preferences-bartenders.component.css',
          '../preferences-pages.css']
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesCreateComponent_option_6_Template(rf, ctx) {
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
      function PreferencesCreateComponent(preferService, fb, auth) {
        _classCallCheck(this, PreferencesCreateComponent);

        this.preferService = preferService;
        this.fb = fb;
        this.auth = auth;
        this.categories = _categories__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES"];
      }

      _createClass(PreferencesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itemForm = this.fb.group({
            info: [''],
            category: [''],
            user_id: [this.auth.userID]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // console.log('component', this.itemForm.value);
          this.preferService.addItems(this.itemForm.value);
          this.itemForm.reset();
        }
      }]);

      return PreferencesCreateComponent;
    }();

    PreferencesCreateComponent.ɵfac = function PreferencesCreateComponent_Factory(t) {
      return new (t || PreferencesCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_2__["PreferencesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    PreferencesCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesCreateComponent,
      selectors: [["preferences-create"]],
      decls: 9,
      vars: 2,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "name", "title", "formControlName", "info", "placeholder", "Description"], ["formControlName", "category", "name", "category", "id", "category"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]],
      template: function PreferencesCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PreferencesCreateComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreferencesCreateComponent_option_6_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.itemForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["form[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1jcmVhdGUvcHJlZmVyZW5jZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZWZlcmVuY2VzL3ByZWZlcmVuY2VzLWNyZWF0ZS9wcmVmZXJlbmNlcy1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"]
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
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
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
    /* harmony import */


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PreferencesDrinksComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't have any recipes?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreferencesDrinksComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesDrinksComponent_div_4_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onDelete(item_r2.saved_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "saved-drinks/", item_r2.saved_id, "");
      }
    }

    var PreferencesDrinksComponent = /*#__PURE__*/function () {
      function PreferencesDrinksComponent(favoriteService) {
        _classCallCheck(this, PreferencesDrinksComponent);

        this.favoriteService = favoriteService;
        this.favorites = [];
      }

      _createClass(PreferencesDrinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.favoriteService.getFavorites();
          this.favSub = this.favoriteService.getFavoriteUpdateListener().subscribe(function (data) {
            _this8.favorites = data;
            console.log(_this8.favorites);
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(drinkId) {
          this.favoriteService.deleteFromPref(drinkId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.favSub.unsubscribe();
        }
      }]);

      return PreferencesDrinksComponent;
    }();

    PreferencesDrinksComponent.ɵfac = function PreferencesDrinksComponent_Factory(t) {
      return new (t || PreferencesDrinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]));
    };

    PreferencesDrinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesDrinksComponent,
      selectors: [["preferences-drinks"]],
      decls: 5,
      vars: 2,
      consts: [[1, "global-parent"], [4, "ngIf"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [3, "routerLink"], [3, "click"]],
      template: function PreferencesDrinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saved Recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreferencesDrinksComponent_p_3_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreferencesDrinksComponent_div_4_Template, 7, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.favorites.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favorites);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["section[_ngcontent-%COMP%] {\r\n  border: red 1px solid;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTs7Ozs7O0dBTUc7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBib3JkZXI6IHJlZCAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi8qIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59ICovXHJcbi8qIC5uYW1lIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBXaGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaG93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesDrinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-drinks',
          templateUrl: './preferences-drinks.component.html',
          styleUrls: [// './preferences-drinks.component.css',
          '../preferences-pages.css']
        }]
      }], function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/preferences-home-bar/preferences-home-bar.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-home-bar/preferences-home-bar.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PreferencesHomeBarComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesHomeBarPreferencesHomeBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesHomeBarComponent", function () {
      return PreferencesHomeBarComponent;
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

    function PreferencesHomeBarComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have nothing to drink at home?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreferencesHomeBarComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesHomeBarComponent_div_4_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onDelete(item_r3.fav_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.fav_info);
      }
    }

    function PreferencesHomeBarComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesHomeBarComponent_div_4_div_1_Template, 5, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.homeBar);
      }
    }

    var PreferencesHomeBarComponent = /*#__PURE__*/function () {
      function PreferencesHomeBarComponent(preferService) {
        _classCallCheck(this, PreferencesHomeBarComponent);

        this.preferService = preferService;
        this.homeBar = [];
      }

      _createClass(PreferencesHomeBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.preferService.getItems();
          this.itemsSub = this.preferService.getItemUpdateListener().subscribe(function (items) {
            _this9.homeBar = items.filter(function (item) {
              return item.fav_cat === 'home_bar';
            });
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

      return PreferencesHomeBarComponent;
    }();

    PreferencesHomeBarComponent.ɵfac = function PreferencesHomeBarComponent_Factory(t) {
      return new (t || PreferencesHomeBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]));
    };

    PreferencesHomeBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesHomeBarComponent,
      selectors: [["preferences-home-bar"]],
      decls: 5,
      vars: 2,
      consts: [[1, "global-parent"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PreferencesHomeBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreferencesHomeBarComponent_p_3_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreferencesHomeBarComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homeBar.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homeBar.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtaG9tZS1iYXIvcHJlZmVyZW5jZXMtaG9tZS1iYXIuY29tcG9uZW50LmNzcyJ9 */", "section[_ngcontent-%COMP%] {\r\n  border: red 1px solid;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTs7Ozs7O0dBTUc7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBib3JkZXI6IHJlZCAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi8qIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59ICovXHJcbi8qIC5uYW1lIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBXaGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaG93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesHomeBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-home-bar',
          templateUrl: './preferences-home-bar.component.html',
          styleUrls: ['./preferences-home-bar.component.css', '../preferences-pages.css']
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
    /* harmony import */


    var _preferences_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../preferences.service */
    "./src/app/components/preferences/preferences.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreferencesLocationsComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't have any favorite places?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreferencesLocationsComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesLocationsComponent_div_4_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onDelete(item_r3.fav_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.fav_info);
      }
    }

    function PreferencesLocationsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreferencesLocationsComponent_div_4_div_1_Template, 5, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.locations);
      }
    }

    var PreferencesLocationsComponent = /*#__PURE__*/function () {
      function PreferencesLocationsComponent(preferService) {
        _classCallCheck(this, PreferencesLocationsComponent);

        this.preferService = preferService;
        this.locations = [];
      }

      _createClass(PreferencesLocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.preferService.getItems();
          this.itemsSub = this.preferService.getItemUpdateListener().subscribe(function (items) {
            _this10.locations = items.filter(function (item) {
              return item.fav_cat === 'places';
            });
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

      return PreferencesLocationsComponent;
    }();

    PreferencesLocationsComponent.ɵfac = function PreferencesLocationsComponent_Factory(t) {
      return new (t || PreferencesLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_preferences_service__WEBPACK_IMPORTED_MODULE_1__["PreferencesService"]));
    };

    PreferencesLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesLocationsComponent,
      selectors: [["preferences-locations"]],
      decls: 5,
      vars: 2,
      consts: [[1, "global-parent"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function PreferencesLocationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "locations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreferencesLocationsComponent_p_3_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreferencesLocationsComponent_div_4_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locations.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locations.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtbG9jYXRpb25zL3ByZWZlcmVuY2VzLWxvY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */", "section[_ngcontent-%COMP%] {\r\n  border: red 1px solid;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.child-container[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTs7Ozs7O0dBTUc7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1wYWdlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBib3JkZXI6IHJlZCAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi8qIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59ICovXHJcbi8qIC5uYW1lIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBXaGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaG93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesLocationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'preferences-locations',
          templateUrl: './preferences-locations.component.html',
          styleUrls: ['./preferences-locations.component.css', '../preferences-pages.css']
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../preferences-create/preferences-create.component */
    "./src/app/components/preferences/preferences-create/preferences-create.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../preferences-locations/preferences-locations.component */
    "./src/app/components/preferences/preferences-locations/preferences-locations.component.ts");
    /* harmony import */


    var _preferences_home_bar_preferences_home_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../preferences-home-bar/preferences-home-bar.component */
    "./src/app/components/preferences/preferences-home-bar/preferences-home-bar.component.ts");
    /* harmony import */


    var _preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../preferences-drinks/preferences-drinks.component */
    "./src/app/components/preferences/preferences-drinks/preferences-drinks.component.ts");
    /* harmony import */


    var _preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../preferences-bartenders/preferences-bartenders.component */
    "./src/app/components/preferences/preferences-bartenders/preferences-bartenders.component.ts");

    function PreferencesMainComponent_preferences_locations_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preferences-locations");
      }
    }

    function PreferencesMainComponent_preferences_home_bar_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preferences-home-bar");
      }
    }

    function PreferencesMainComponent_preferences_drinks_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preferences-drinks");
      }
    }

    function PreferencesMainComponent_preferences_bartenders_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preferences-bartenders");
      }
    }

    var PreferencesMainComponent = /*#__PURE__*/function () {
      function PreferencesMainComponent() {
        _classCallCheck(this, PreferencesMainComponent);

        this.displayOthers = null;
      }

      _createClass(PreferencesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayFavorite",
        value: function displayFavorite(value) {
          this.displayOthers = value;
        }
      }]);

      return PreferencesMainComponent;
    }();

    PreferencesMainComponent.ɵfac = function PreferencesMainComponent_Factory(t) {
      return new (t || PreferencesMainComponent)();
    };

    PreferencesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesMainComponent,
      selectors: [["preferences-main"]],
      decls: 23,
      vars: 4,
      consts: [[1, "background-img"], [1, "global-parent"], [1, "preferences-nav"], ["routerLink", "/recipe-book"], ["routerLink", "/user-recipes/user-recipe-form"], ["id", "home", 1, "secondary", 3, "click"], ["id", "places", 1, "secondary", 3, "click"], ["id", "bartenders", 1, "secondary", 3, "click"], ["id", "save", 1, "secondary", 3, "click"], [4, "ngIf"]],
      template: function PreferencesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preferences Main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search for a recipe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add a recipe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesMainComponent_Template_button_click_10_listener() {
            return ctx.displayFavorite("home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " What's at Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesMainComponent_Template_button_click_12_listener() {
            return ctx.displayFavorite("bars");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Favorite Places ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesMainComponent_Template_button_click_14_listener() {
            return ctx.displayFavorite("bartenders");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Favorite Bartenders ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreferencesMainComponent_Template_button_click_16_listener() {
            return ctx.displayFavorite("favDrinks");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Saved Recipes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "preferences-create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PreferencesMainComponent_preferences_locations_19_Template, 1, 0, "preferences-locations", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PreferencesMainComponent_preferences_home_bar_20_Template, 1, 0, "preferences-home-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PreferencesMainComponent_preferences_drinks_21_Template, 1, 0, "preferences-drinks", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PreferencesMainComponent_preferences_bartenders_22_Template, 1, 0, "preferences-bartenders", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayOthers === "bars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayOthers === "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayOthers === "favDrinks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayOthers === "bartenders");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesCreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_4__["PreferencesLocationsComponent"], _preferences_home_bar_preferences_home_bar_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesHomeBarComponent"], _preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesDrinksComponent"], _preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_7__["PreferencesBartendersComponent"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('goblet.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.preferences-nav[_ngcontent-%COMP%] {\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 0 10px 0 10px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.secondary[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border: 2px solid rgb(236, 184, 92);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 360px) {\r\n  button[_ngcontent-%COMP%] {\r\n    margin: 0 10px 0 10px;\r\n    padding: 5px 6px;\r\n  }\r\n  .secondary[_ngcontent-%COMP%] {\r\n    background-color: rgb(236, 184, 92, 0.3);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1tYWluL3ByZWZlcmVuY2VzLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1DQUFtQztBQUNyQzs7QUFFQSxlQUFlOztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7O0FBRUgsMkJBQTJCOztBQUMzQjtHQUNHOztBQUVILDBCQUEwQjs7QUFDMUI7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1tYWluL3ByZWZlcmVuY2VzLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0dvYmxldC9nb2JsZXQuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5wcmVmZXJlbmNlcy1uYXYge1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG59XHJcblxyXG4vKiBsaW5rIEljb25zICovXHJcblxyXG4vKiAjaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL0ljb25zL1JlY2lwZUJvb2svUmJvb2tfd2hpdGUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59IFxyXG5cclxuI3BsYWNlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL0ljb25zL0xvY2F0aW9uSWNvbldoaXRlL2xvY2F0aW9ud2hpdGUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jYmFydGVuZGVycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL0ljb25zL2JhcnRlbmRlci5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbiNzYXZlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vSWNvbnMvU3Rhckljb25XaGl0ZS9mYXZfd2hpdGUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59ICovXHJcblxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgVGFibGV0ICovXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbn0gKi9cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5IGZvciBwaG9uZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gIH1cclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIsIDAuMyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
  "./src/app/components/preferences/preferences-navigation/preferences-navigation.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/preferences/preferences-navigation/preferences-navigation.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: PreferencesNavigationComponent */

  /***/
  function srcAppComponentsPreferencesPreferencesNavigationPreferencesNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferencesNavigationComponent", function () {
      return PreferencesNavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PreferencesNavigationComponent = /*#__PURE__*/function () {
      function PreferencesNavigationComponent() {
        _classCallCheck(this, PreferencesNavigationComponent);
      }

      _createClass(PreferencesNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferencesNavigationComponent;
    }();

    PreferencesNavigationComponent.ɵfac = function PreferencesNavigationComponent_Factory(t) {
      return new (t || PreferencesNavigationComponent)();
    };

    PreferencesNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreferencesNavigationComponent,
      selectors: [["prefer-nav"]],
      decls: 17,
      vars: 0,
      consts: [[1, "navbar"], ["routerLink", "/home-bar"], ["routerLink", "/locations"], ["routerLink", "/bartenders"], ["routerLink", "/drinks"], ["routerLink", "/"]],
      template: function PreferencesNavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's at Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Favorite Places");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Favorite Bartenders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Favorite Drinks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".create[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlcy1uYXZpZ2F0aW9uL3ByZWZlcmVuY2VzLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMtbmF2aWdhdGlvbi9wcmVmZXJlbmNlcy1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'prefer-nav',
          templateUrl: './preferences-navigation.component.html',
          styleUrls: ['./preferences-navigation.component.css']
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
    /* harmony import */


    var _saved_drinks_saved_drinks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./saved-drinks/saved-drinks.component */
    "./src/app/components/preferences/saved-drinks/saved-drinks.component.ts");

    var routes = [{
      path: '',
      component: _preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesMainComponent"]
    }, {
      path: 'saved-drinks/:id',
      component: _saved_drinks_saved_drinks_component__WEBPACK_IMPORTED_MODULE_3__["SavedDrinksComponent"]
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


    var _preferences_home_bar_preferences_home_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preferences-home-bar/preferences-home-bar.component */
    "./src/app/components/preferences/preferences-home-bar/preferences-home-bar.component.ts");
    /* harmony import */


    var _preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./preferences-bartenders/preferences-bartenders.component */
    "./src/app/components/preferences/preferences-bartenders/preferences-bartenders.component.ts");
    /* harmony import */


    var _preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./preferences-locations/preferences-locations.component */
    "./src/app/components/preferences/preferences-locations/preferences-locations.component.ts");
    /* harmony import */


    var _preferences_navigation_preferences_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./preferences-navigation/preferences-navigation.component */
    "./src/app/components/preferences/preferences-navigation/preferences-navigation.component.ts");
    /* harmony import */


    var _preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./preferences-drinks/preferences-drinks.component */
    "./src/app/components/preferences/preferences-drinks/preferences-drinks.component.ts");
    /* harmony import */


    var _recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../recipe-book/recipe-book.module */
    "./src/app/components/recipe-book/recipe-book.module.ts");
    /* harmony import */


    var _saved_drinks_saved_drinks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./saved-drinks/saved-drinks.component */
    "./src/app/components/preferences/saved-drinks/saved-drinks.component.ts");

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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreferencesModule, {
        declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"], _preferences_home_bar_preferences_home_bar_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesHomeBarComponent"], _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesCreateComponent"], _preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_7__["PreferencesBartendersComponent"], _preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_8__["PreferencesLocationsComponent"], _preferences_navigation_preferences_navigation_component__WEBPACK_IMPORTED_MODULE_9__["PreferencesNavigationComponent"], _preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_10__["PreferencesDrinksComponent"], _saved_drinks_saved_drinks_component__WEBPACK_IMPORTED_MODULE_12__["SavedDrinksComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreferencesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_preferences_main_preferences_main_component__WEBPACK_IMPORTED_MODULE_3__["PreferencesMainComponent"], _preferences_home_bar_preferences_home_bar_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesHomeBarComponent"], _preferences_create_preferences_create_component__WEBPACK_IMPORTED_MODULE_5__["PreferencesCreateComponent"], _preferences_bartenders_preferences_bartenders_component__WEBPACK_IMPORTED_MODULE_7__["PreferencesBartendersComponent"], _preferences_locations_preferences_locations_component__WEBPACK_IMPORTED_MODULE_8__["PreferencesLocationsComponent"], _preferences_navigation_preferences_navigation_component__WEBPACK_IMPORTED_MODULE_9__["PreferencesNavigationComponent"], _preferences_drinks_preferences_drinks_component__WEBPACK_IMPORTED_MODULE_10__["PreferencesDrinksComponent"], _saved_drinks_saved_drinks_component__WEBPACK_IMPORTED_MODULE_12__["SavedDrinksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferences_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferencesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _recipe_book_recipe_book_module__WEBPACK_IMPORTED_MODULE_11__["RecipeBookModule"]]
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var PreferencesService = /*#__PURE__*/function () {
      function PreferencesService(http, auth) {
        _classCallCheck(this, PreferencesService);

        this.http = http;
        this.auth = auth;
        this.items = [];
        this.itemsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      } // // local
      //   getItems() {
      //     let headers = new HttpHeaders();
      //     headers = headers.set(
      //       'authorization',
      //       localStorage.getItem('topShelf_token')
      //     );
      //     this.http
      //       .get<{ message: string; items: any }>('/api/preferences', { headers })
      //       .subscribe((data) => {
      //         console.log(data.message);
      //         // console.log(data.items);
      //         this.items = data.items;
      //         this.itemsUpdated.next([...this.items]);
      //       });
      //   }
      // AWS


      _createClass(PreferencesService, [{
        key: "getItems",
        value: function getItems() {
          var _this11 = this;

          // console.log('service working?');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.get('/api/favorites', {
            headers: headers
          }).subscribe(function (data) {
            console.log(data.message); // console.log(data.items, 'data working');

            _this11.items = data.items;

            _this11.itemsUpdated.next(_toConsumableArray(_this11.items));
          });
        }
      }, {
        key: "getItemUpdateListener",
        value: function getItemUpdateListener() {
          return this.itemsUpdated.asObservable();
        } // // local
        // addItems(formValue) {
        //   // console.log('service', formValue);
        //   let headers = new HttpHeaders();
        //   headers = headers.set(
        //     'authorization',
        //     localStorage.getItem('topShelf_token')
        //   );
        //   this.http
        //     .post<{ message: string; items: any }>('/api/preferences', formValue, {
        //       headers,
        //     })
        //     .subscribe((response) => {
        //       console.log(response.message);
        //       // console.log('additems', response.items);
        //       this.itemsUpdated.next(response.items);
        //     });
        // }
        // aws

      }, {
        key: "addItems",
        value: function addItems(formValue) {
          var _this12 = this;

          // console.log('service', formValue);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.post('/api/favorites', formValue, {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.message); // console.log('additems', response.items);

            _this12.itemsUpdated.next(response.items);
          });
        } // local
        // deleteItem(itemId) {
        //   this.http
        //     .delete<{ message: string; items: any }>(`/api/preferences/${itemId}`)
        //     .subscribe(() => {
        //       this.items = this.items.filter((item) => item.preference_id !== itemId);
        //       this.itemsUpdated.next([...this.items]);
        //     });
        // }
        // AWS

      }, {
        key: "deleteItem",
        value: function deleteItem(itemId) {
          var _this13 = this;

          this.http["delete"]("/api/favorites/".concat(itemId)).subscribe(function () {
            _this13.items = _this13.items.filter(function (item) {
              return item.fav_id !== itemId;
            });

            _this13.itemsUpdated.next(_toConsumableArray(_this13.items));
          });
        }
      }]);

      return PreferencesService;
    }();

    PreferencesService.ɵfac = function PreferencesService_Factory(t) {
      return new (t || PreferencesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
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
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/preferences/saved-drinks/saved-drinks.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/preferences/saved-drinks/saved-drinks.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SavedDrinksComponent */

  /***/
  function srcAppComponentsPreferencesSavedDrinksSavedDrinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavedDrinksComponent", function () {
      return SavedDrinksComponent;
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


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SavedDrinksComponent_div_2_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure1, " ", recipe_r1.ingredient1, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure2, " ", recipe_r1.ingredient2, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure3, " ", recipe_r1.ingredient3, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure4, " ", recipe_r1.ingredient4, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure5, " ", recipe_r1.ingredient5, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure6, " ", recipe_r1.ingredient6, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure7, " ", recipe_r1.ingredient7, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure8, " ", recipe_r1.ingredient8, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure9, " ", recipe_r1.ingredient9, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure10, " ", recipe_r1.ingredient10, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure11, " ", recipe_r1.ingredient11, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure12, " ", recipe_r1.ingredient12, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.measure13, " ", recipe_r1.ingredient13, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.strMeasure14, " ", recipe_r1.ingredient14, " ");
      }
    }

    function SavedDrinksComponent_div_2_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", recipe_r1.strMeasure15, " ", recipe_r1.ingredient15, " ");
      }
    }

    function SavedDrinksComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Glassware:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingredients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SavedDrinksComponent_div_2_li_10_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SavedDrinksComponent_div_2_li_11_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SavedDrinksComponent_div_2_li_12_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SavedDrinksComponent_div_2_li_13_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SavedDrinksComponent_div_2_li_14_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SavedDrinksComponent_div_2_li_15_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SavedDrinksComponent_div_2_li_16_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SavedDrinksComponent_div_2_li_17_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SavedDrinksComponent_div_2_li_18_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SavedDrinksComponent_div_2_li_19_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SavedDrinksComponent_div_2_li_20_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SavedDrinksComponent_div_2_li_21_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SavedDrinksComponent_div_2_li_22_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SavedDrinksComponent_div_2_li_23_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SavedDrinksComponent_div_2_li_24_Template, 2, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Method:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.glassware);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure1 || !!recipe_r1.ingredient1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure2 || !!recipe_r1.ingredient2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure3 || !!recipe_r1.ingredient3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure4 || !!recipe_r1.ingredient4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure5 || !!recipe_r1.ingredient5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure6 || !!recipe_r1.ingredient6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure7 || !!recipe_r1.ingredient7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure8 || !!recipe_r1.ingredient8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure9 || !!recipe_r1.ingredient9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure10 || !!recipe_r1.ingredient10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure11 || !!recipe_r1.ingredient11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure12 || !!recipe_r1.ingredient12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure13 || !!recipe_r1.ingredient13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure14 || !!recipe_r1.ingredient14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.measure15 || !!recipe_r1.ingredient15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.instructions);
      }
    }

    var SavedDrinksComponent = /*#__PURE__*/function () {
      function SavedDrinksComponent(route, favService) {
        _classCallCheck(this, SavedDrinksComponent);

        this.route = route;
        this.favService = favService;
      }

      _createClass(SavedDrinksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.recipeID = this.route.snapshot.params.id;
          console.log('component', this.recipeID);
          this.favService.getDetails(this.recipeID).subscribe(function (data) {
            console.log(data.items);
            _this14.recipes = data.items;
          });
        }
      }]);

      return SavedDrinksComponent;
    }();

    SavedDrinksComponent.ɵfac = function SavedDrinksComponent_Factory(t) {
      return new (t || SavedDrinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]));
    };

    SavedDrinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SavedDrinksComponent,
      selectors: [["app-saved-drinks"]],
      decls: 3,
      vars: 1,
      consts: [[1, "background-img"], [1, "global-parent"], ["class", "details", 4, "ngFor", "ngForOf"], [1, "details"], [1, "info"], [4, "ngIf"], [1, "method"]],
      template: function SavedDrinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SavedDrinksComponent_div_2_Template, 30, 18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  margin-top: 5vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n  background-image: url('goblet.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 15px 0 5px 0;\r\n  color: rgb(236, 184, 92);\r\n  align-self: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  width: 400px;\r\n  height: auto;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  box-shadow: 3px 3px 5px black;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  color: White;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  row-gap: 10px;\r\n  -moz-column-gap: 30px;\r\n       column-gap: 30px;\r\n}\r\n\r\n.method[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 5px;\r\n  margin-bottom: 8px;\r\n  background-color: rgba(52, 43, 56, 0.8);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  padding: 10px 15px;\r\n  background-color: #80bdad;\r\n  color: #204051;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid rgb(236, 184, 92);\r\n    box-shadow: 3px 3px 5px black;\r\n  }\r\n  .method[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 5px;\r\n    margin-bottom: 8px;\r\n    background-color: rgba(52, 43, 56, 0.8);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .details[_ngcontent-%COMP%] {\r\n    margin-top: 5vh;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n  img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    width: 250px;\r\n  }\r\n\r\n  .method[_ngcontent-%COMP%] {\r\n    width: 340px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVmZXJlbmNlcy9zYXZlZC1kcmlua3Mvc2F2ZWQtZHJpbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLG1DQUEyQztFQUMzQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztFQUNuQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IscUJBQWdCO09BQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZmVyZW5jZXMvc2F2ZWQtZHJpbmtzL3NhdmVkLWRyaW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAtMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vR29ibGV0L2dvYmxldC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbjogMTVweCAwIDVweCAwO1xyXG4gIGNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IFdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxudWwge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICByb3ctZ2FwOiAxMHB4O1xyXG4gIGNvbHVtbi1nYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5tZXRob2Qge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgNDMsIDU2LCAwLjgpO1xyXG59XHJcblxyXG5hIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBiZGFkO1xyXG4gIGNvbG9yOiAjMjA0MDUxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBibGFjaztcclxuICB9XHJcbiAgLm1ldGhvZCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCA0MywgNTYsIDAuOCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gIC5kZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAubWV0aG9kIHtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedDrinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-saved-drinks',
          templateUrl: './saved-drinks.component.html',
          styleUrls: ['./saved-drinks.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/quiz/intro/intro.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/quiz/intro/intro.component.ts ***!
    \**********************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsQuizIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent(router) {
        _classCallCheck(this, IntroComponent);

        this.router = router;
      }

      _createClass(IntroComponent, [{
        key: "startQuiz",
        value: function startQuiz() {
          this.router.navigateByUrl('quiz/question/1');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 7,
      vars: 0,
      consts: [[1, "center"], [1, "intro"], [3, "click"]],
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Discover Your Ideal Cocktail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Click below to begin the quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntroComponent_Template_button_click_5_listener() {
            return ctx.startQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start the Quiz!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
<<<<<<< HEAD
      styles: ["@media screen and (max-width: 411px) {\n  h1[_ngcontent-%COMP%] {\n    margin-top: 13vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWl6L2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTN2aDtcbiAgfVxufVxuIl19 */"]
=======
      styles: ["@media screen and (max-width: 411px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    margin-top: 13vh;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWl6L2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEzdmg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
>>>>>>> cb46ae8c5ac8ff3f4f01a4a50c6e8899e1c50798
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/quiz/question/question.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/quiz/question/question.component.ts ***!
    \****************************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppComponentsQuizQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "on": a0
      };
    };

    function QuestionComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }

      if (rf & 2) {
        var question_r4 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.currentQuestion >= question_r4.questionId));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "selected": a0
      };
    };

    function QuestionComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_div_7_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r7 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onSelect(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.status && ctx_r1.selectedIndex === i_r7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.optionText);
      }
    }

    function QuestionComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_div_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.navigateToNextQuestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QuestionComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_div_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.navigateToResults();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Complete the Quiz!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent(route, router) {
        var _this15 = this;

        _classCallCheck(this, QuestionComponent);

        this.route = route;
        this.router = router;
        this.questionID = 0;
        this.currentQuestion = 0;
        this.status = false;
        this.allQuestions = [{
          questionId: 1,
          questionText: 'What type of food are you craving?',
          options: [{
            optionValue: '1',
            optionText: 'Mexican'
          }, {
            optionValue: '2',
            optionText: 'Italian'
          }, {
            optionValue: '3',
            optionText: 'Greek'
          }, {
            optionValue: '4',
            optionText: 'American'
          }, {
            optionValue: '5',
            optionText: 'Asian'
          }],
          selectedOption: ''
        }, {
          questionId: 2,
          questionText: 'What mood describes you best right now?',
          options: [{
            optionValue: '1',
            optionText: 'Vacation mode'
          }, {
            optionValue: '2',
            optionText: 'Sunday funday'
          }, {
            optionValue: '3',
            optionText: 'Casual night out'
          }, {
            optionValue: '4',
            optionText: 'Permanent Homebody'
          }],
          selectedOption: ''
        }, {
          questionId: 3,
          questionText: 'What type of cocktail drinker are you?',
          options: [{
            optionValue: '1',
            optionText: 'The Classic'
          }, {
            optionValue: '2',
            optionText: 'The Explorer'
          }, {
            optionValue: '3',
            optionText: 'The Tried and True'
          }, {
            optionValue: '4',
            optionText: 'The Novice'
          }],
          selectedOption: ''
        }, {
          questionId: 4,
          questionText: 'What meal is this accompanying?',
          options: [{
            optionValue: '1',
            optionText: 'Brunch'
          }, {
            optionValue: '2',
            optionText: 'Lunch'
          }, {
            optionValue: '3',
            optionText: 'Dinner'
          }, {
            optionValue: '4',
            optionText: 'Happy Hour'
          }, {
            optionValue: '5',
            optionText: 'Nothing, the cocktail is the main event'
          }],
          selectedOption: ''
        }, {
          questionId: 5,
          questionText: 'What is your preferred liquor?',
          options: [{
            optionValue: '1',
            optionText: 'Vodka'
          }, {
            optionValue: '2',
            optionText: 'Tequila'
          }, {
            optionValue: '3',
            optionText: 'Gin'
          }, {
            optionValue: '4',
            optionText: 'Whiskey'
          }, {
            optionValue: '5',
            optionText: 'Rum'
          }, {
            optionValue: '6',
            optionText: 'Bourbon'
          }, {
            optionValue: '7',
            optionText: 'IDK, surprise me'
          }],
          selectedOption: ''
        }];
        this.route.paramMap.subscribe(function (params) {
          _this15.setQuestionID(+params.get('questionId')); // get the question ID and store it


          _this15.question = _this15.getQuestion;
        });
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.question = this.getQuestion;
          this.totalQuestions = this.allQuestions.length;
          this.currentQuestion = this.questionID;
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          this.status = !this.status;
        }
      }, {
        key: "onSelect",
        value: function onSelect(index) {
          this.selectedIndex = index;
          this.changeStatus();
        }
      }, {
        key: "displayNextQuestion",
        value: function displayNextQuestion() {
          this.questionIndex = this.questionID++;
          this.currentQuestion === this.currentQuestion++;
          this.selectedIndex = null;
          this.changeStatus();

          if (typeof document.getElementById('question') !== 'undefined' && this.getQuestionID() <= this.totalQuestions) {
            document.getElementById('question').innerHTML = this.allQuestions[this.questionIndex]['questionText'];
          } else {
            this.navigateToResults();
          }
        }
      }, {
        key: "navigateToNextQuestion",
        value: function navigateToNextQuestion() {
          this.router.navigate(['quiz/question', this.getQuestionID() + 1]);
          this.displayNextQuestion();
        }
      }, {
        key: "navigateToResults",
        value: function navigateToResults() {
          this.changeStatus();
          this.router.navigate(['quiz/results'], {
            state: {
              totalQuestions: this.totalQuestions,
              allQuestions: this.allQuestions
            }
          });
        } // METHODS

      }, {
        key: "getQuestionID",
        value: function getQuestionID() {
          return this.questionID;
        }
      }, {
        key: "setQuestionID",
        value: function setQuestionID(id) {
          return this.questionID = id;
        }
      }, {
        key: "isThereAnotherQuestion",
        value: function isThereAnotherQuestion() {
          return this.questionID <= this.allQuestions.length;
        }
      }, {
        key: "isFinalQuestion",
        value: function isFinalQuestion() {
          return this.currentQuestion === this.totalQuestions;
        }
      }, {
        key: "getQuestion",
        get: function get() {
          var _this16 = this;

          return this.allQuestions.filter(function (question) {
            return question.questionId === _this16.questionID;
          })[0];
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
      return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionComponent,
      selectors: [["app-question"]],
      inputs: {
        answer: "answer"
      },
      outputs: {
        question: "question"
      },
      decls: 10,
      vars: 6,
      consts: [[1, "quiz-container"], [1, "progress", "center"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "question", 3, "ngClass"], [1, "txt"], [1, "ans-container"], [4, "ngFor", "ngForOf"], ["class", "feedback", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [1, "ans", 3, "ngClass", "click"], [1, "feedback"], [1, "continue", "btn", 3, "click"], ["type", "button", 3, "click"]],
      template: function QuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionComponent_div_2_Template, 1, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionComponent_div_7_Template, 3, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionComponent_div_8_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionComponent_div_9_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allQuestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status ? "answered" : "unanswered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question.questionText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.question.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question && ctx.question.questionId !== ctx.totalQuestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question && ctx.question.questionId === ctx.totalQuestions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
<<<<<<< HEAD
      styles: ["Progress[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgb(236, 184, 92, 0.5);\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\n  background-color: rgb(236, 184, 92);\n}\n\n\n\n.ans-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.ans[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid rgb(236, 184, 92);\n  border-radius: 6px;\n  padding: 10px;\n  margin: 0px 15px 15px 0px;\n}\n\n.ans.selected[_ngcontent-%COMP%] {\n  border-color: #80bdad;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 184, 92, 0.5);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n\n\n.feedback[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  transition: opacity 1.5s, margin-top 1.5s;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #80bdad;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #80bdad;\n  background-color: rgb(236, 184, 92);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 768px) {\n  .ans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJQcm9ncmVzcyBcblxuLnByb2dyZXNzIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyLCAwLjUpO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcm9ncmVzcyBkaXYub24sXG4ucHJvZ3Jlc3MgZGl2LmFuc3dlcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XG59XG5cbi8qIFF1ZXN0aW9uICovXG4uYW5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYW5zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweCAxNXB4IDE1cHggMHB4O1xufVxuXG4uYW5zLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGFkO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBGZWVkYmFjayAqL1xuXG4uZmVlZGJhY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMsIG1hcmdpbi10b3AgMS41cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmVlZGJhY2sgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcbn1cblxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODBiZGFkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hbnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iXX0= */", ".quiz-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 13vh auto;\n  border: 2px solid rgb(236, 184, 92, 0.5);\n  border-radius: 6px;\n  padding: 20px;\n  margin-top: 120px;\n}\n\n\n\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgb(236, 184, 92, 0.5);\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\n  background-color: rgb(236, 184, 92);\n}\n\n\n\n.ans-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.ans[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid rgb(236, 184, 92);\n  border-radius: 6px;\n  padding: 10px;\n  margin: 0px 7.5px 15px 7.5px;\n}\n\n.ans.selected[_ngcontent-%COMP%] {\n  border-color: #80bdad;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 184, 92, 0.5);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n\n\n.feedback[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  transition: opacity 1.5s, margin-top 1.5s;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #80bdad;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #80bdad;\n  background-color: rgb(236, 184, 92);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 10px;\n}\n\n\n\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 10px 10px 8px 42px;\n  background-repeat: no-repeat;\n  background-position: 10px 5px;\n  background-size: 25px 25px;\n  border-radius: 4px;\n  color: #342b38;\n  width: 180px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\n  background-image: url('mail.svg');\n  background-color: white;\n  padding-right: 16px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter.svg');\n  background-color: white;\n}\n\n@media screen and (max-width: 411px) {\n  .ans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ans[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px 0 5px 0;\n  }\n  .quiz-container[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    padding: 10px;\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59XG5cbi5yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTUwMHB4O1xufVxuXG4uaW50cm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59ICAqL1xuXG4ucXVpei1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEzdmggYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLyogUHJvZ3Jlc3MgICovXG5cbi5wcm9ncmVzcyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxuLnByb2dyZXNzIGRpdi5hbnN3ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xufVxuXG4vKiBRdWVzdGlvbiAqL1xuLmFucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYW5zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xufVxuXG4uYW5zLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGFkO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBGZWVkYmFjayAqL1xuXG4uZmVlZGJhY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMsIG1hcmdpbi10b3AgMS41cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmVlZGJhY2sgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcbn1cblxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODBiZGFkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qIFJlc3VsdHMgICovXG5cbi5yZXN1bHRzIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHggNDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMzQyYjM4O1xuICB3aWR0aDogMTgwcHg7XG59XG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21haWwuc3ZnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy90d2l0dGVyLnN2Zyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICAuYW5zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xuICB9XG4gIC5xdWl6LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuIl19 */"]
=======
      styles: ["Progress[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\r\n  background-color: rgb(236, 184, 92);\r\n}\r\n\r\n\r\n\r\n.ans-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.ans[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  margin: 0px 15px 15px 0px;\r\n}\r\n\r\n.ans.selected[_ngcontent-%COMP%] {\r\n  border-color: #80bdad;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\n.feedback[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  transition: opacity 1.5s, margin-top 1.5s;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  background: #80bdad;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background: #80bdad;\r\n  background-color: rgb(236, 184, 92);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .ans-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxhQUFhOztBQUViO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlDQUF5QztFQUN6QyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJQcm9ncmVzcyBcclxuXHJcbi5wcm9ncmVzcyBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIsIDAuNSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyBkaXYub24sXHJcbi5wcm9ncmVzcyBkaXYuYW5zd2VyZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG59XHJcblxyXG4vKiBRdWVzdGlvbiAqL1xyXG4uYW5zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYW5zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHggMTVweCAxNXB4IDBweDtcclxufVxyXG5cclxuLmFucy5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGFkO1xyXG59XHJcblxyXG4udW5hbnN3ZXJlZCAuYW5zIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51bmFuc3dlcmVkIC5hbnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG4uYW5zd2VyZWQgLmFucyB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKiBGZWVkYmFjayAqL1xyXG5cclxuLmZlZWRiYWNrIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cywgbWFyZ2luLXRvcCAxLjVzO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZmVlZGJhY2sgLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICM4MGJkYWQ7XHJcbn1cclxuXHJcbi5mZWVkYmFjayAuYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjODBiZGFkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5hbnN3ZXJlZCAuZmVlZGJhY2sge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5hbnMtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".quiz-container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin: 13vh auto;\r\n  border: 2px solid rgb(236, 184, 92, 0.5);\r\n  border-radius: 6px;\r\n  padding: 20px;\r\n  margin-top: 120px;\r\n}\r\n\r\n\r\n\r\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\r\n  background-color: rgb(236, 184, 92);\r\n}\r\n\r\n\r\n\r\n.ans-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.ans[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  margin: 0px 7.5px 15px 7.5px;\r\n}\r\n\r\n.ans.selected[_ngcontent-%COMP%] {\r\n  border-color: #80bdad;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\n.feedback[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  transition: opacity 1.5s, margin-top 1.5s;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  background: #80bdad;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background: #80bdad;\r\n  background-color: rgb(236, 184, 92);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  padding: 10px 10px 8px 42px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px 5px;\r\n  background-size: 25px 25px;\r\n  border-radius: 4px;\r\n  color: #342b38;\r\n  width: 180px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\r\n  background-image: url('mail.svg');\r\n  background-color: white;\r\n  padding-right: 16px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\r\n  background-image: url('twitter.svg');\r\n  background-color: white;\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .ans-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .ans[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 5px 0 5px 0;\r\n  }\r\n  .quiz-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 10px;\r\n    margin-top: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUwMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn0gICovXHJcblxyXG4ucXVpei1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxM3ZoIGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3MgICovXHJcblxyXG4ucHJvZ3Jlc3MgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyLCAwLjUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxyXG4ucHJvZ3Jlc3MgZGl2LmFuc3dlcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxufVxyXG5cclxuLyogUXVlc3Rpb24gKi9cclxuLmFucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xyXG59XHJcblxyXG4uYW5zLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICM4MGJkYWQ7XHJcbn1cclxuXHJcbi51bmFuc3dlcmVkIC5hbnMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVuYW5zd2VyZWQgLmFuczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbi5hbnN3ZXJlZCAuYW5zIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qIEZlZWRiYWNrICovXHJcblxyXG4uZmVlZGJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzLCBtYXJnaW4tdG9wIDEuNXM7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mZWVkYmFjayAuYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcclxufVxyXG5cclxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM4MGJkYWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFJlc3VsdHMgICovXHJcblxyXG4ucmVzdWx0cyAuYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCA0MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMzQyYjM4O1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWFpbC5zdmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3R3aXR0ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAuYW5zLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuYW5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICB9XHJcbiAgLnF1aXotY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
>>>>>>> cb46ae8c5ac8ff3f4f01a4a50c6e8899e1c50798
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-question',
          templateUrl: './question.component.html',
          styleUrls: ['./question.component.css', '../quiz.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        answer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        question: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/quiz/quiz-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/quiz/quiz-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: QuizRoutingModule */

  /***/
  function srcAppComponentsQuizQuizRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function () {
      return QuizRoutingModule;
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


    var _question_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/components/quiz/question/question.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/components/quiz/results/results.component.ts");
    /* harmony import */


    var _quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./quiz.component */
    "./src/app/components/quiz/quiz.component.ts");
    /* harmony import */


    var src_app_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth-guard.guard */
    "./src/app/services/auth-guard.guard.ts");

    var routes = [{
      path: '',
      component: _quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"]
    }, {
      path: 'question/:questionId',
      component: _question_question_component__WEBPACK_IMPORTED_MODULE_2__["QuestionComponent"],
      canActivate: [src_app_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'results',
      component: _results_results_component__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"],
      canActivate: [src_app_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];

    var QuizRoutingModule = function QuizRoutingModule() {
      _classCallCheck(this, QuizRoutingModule);
    };

    QuizRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QuizRoutingModule
    });
    QuizRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QuizRoutingModule_Factory(t) {
        return new (t || QuizRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuizRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizRoutingModule, [{
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
  "./src/app/components/quiz/quiz.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/quiz/quiz.component.ts ***!
    \***************************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppComponentsQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
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


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/components/quiz/intro/intro.component.ts");

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent(api) {
        _classCallCheck(this, QuizComponent);

        this.api = api;
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuizComponent;
    }();

    QuizComponent.ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]));
    };

    QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      decls: 2,
      vars: 0,
      consts: [[1, "quiz-container"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-intro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"]],
<<<<<<< HEAD
      styles: [".quiz-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 13vh auto;\n  border: 2px solid rgb(236, 184, 92, 0.5);\n  border-radius: 6px;\n  padding: 20px;\n  margin-top: 120px;\n}\n\n\n\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgb(236, 184, 92, 0.5);\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\n  background-color: rgb(236, 184, 92);\n}\n\n\n\n.ans-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.ans[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid rgb(236, 184, 92);\n  border-radius: 6px;\n  padding: 10px;\n  margin: 0px 7.5px 15px 7.5px;\n}\n\n.ans.selected[_ngcontent-%COMP%] {\n  border-color: #80bdad;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 184, 92, 0.5);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n\n\n.feedback[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  transition: opacity 1.5s, margin-top 1.5s;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #80bdad;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #80bdad;\n  background-color: rgb(236, 184, 92);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 10px;\n}\n\n\n\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 10px 10px 8px 42px;\n  background-repeat: no-repeat;\n  background-position: 10px 5px;\n  background-size: 25px 25px;\n  border-radius: 4px;\n  color: #342b38;\n  width: 180px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\n  background-image: url('mail.svg');\n  background-color: white;\n  padding-right: 16px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter.svg');\n  background-color: white;\n}\n\n@media screen and (max-width: 411px) {\n  .ans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ans[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px 0 5px 0;\n  }\n  .quiz-container[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    padding: 10px;\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59XG5cbi5yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTUwMHB4O1xufVxuXG4uaW50cm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59ICAqL1xuXG4ucXVpei1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEzdmggYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLyogUHJvZ3Jlc3MgICovXG5cbi5wcm9ncmVzcyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxuLnByb2dyZXNzIGRpdi5hbnN3ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xufVxuXG4vKiBRdWVzdGlvbiAqL1xuLmFucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYW5zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xufVxuXG4uYW5zLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGFkO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBGZWVkYmFjayAqL1xuXG4uZmVlZGJhY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMsIG1hcmdpbi10b3AgMS41cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmVlZGJhY2sgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcbn1cblxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODBiZGFkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qIFJlc3VsdHMgICovXG5cbi5yZXN1bHRzIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHggNDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMzQyYjM4O1xuICB3aWR0aDogMTgwcHg7XG59XG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21haWwuc3ZnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy90d2l0dGVyLnN2Zyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICAuYW5zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xuICB9XG4gIC5xdWl6LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuIl19 */"]
=======
      styles: [".quiz-container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin: 13vh auto;\r\n  border: 2px solid rgb(236, 184, 92, 0.5);\r\n  border-radius: 6px;\r\n  padding: 20px;\r\n  margin-top: 120px;\r\n}\r\n\r\n\r\n\r\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\r\n  background-color: rgb(236, 184, 92);\r\n}\r\n\r\n\r\n\r\n.ans-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.ans[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  margin: 0px 7.5px 15px 7.5px;\r\n}\r\n\r\n.ans.selected[_ngcontent-%COMP%] {\r\n  border-color: #80bdad;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\n.feedback[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  transition: opacity 1.5s, margin-top 1.5s;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  background: #80bdad;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background: #80bdad;\r\n  background-color: rgb(236, 184, 92);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  padding: 10px 10px 8px 42px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px 5px;\r\n  background-size: 25px 25px;\r\n  border-radius: 4px;\r\n  color: #342b38;\r\n  width: 180px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\r\n  background-image: url('mail.svg');\r\n  background-color: white;\r\n  padding-right: 16px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\r\n  background-image: url('twitter.svg');\r\n  background-color: white;\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .ans-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .ans[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 5px 0 5px 0;\r\n  }\r\n  .quiz-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 10px;\r\n    margin-top: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUwMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn0gICovXHJcblxyXG4ucXVpei1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxM3ZoIGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3MgICovXHJcblxyXG4ucHJvZ3Jlc3MgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyLCAwLjUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxyXG4ucHJvZ3Jlc3MgZGl2LmFuc3dlcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxufVxyXG5cclxuLyogUXVlc3Rpb24gKi9cclxuLmFucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xyXG59XHJcblxyXG4uYW5zLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICM4MGJkYWQ7XHJcbn1cclxuXHJcbi51bmFuc3dlcmVkIC5hbnMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVuYW5zd2VyZWQgLmFuczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbi5hbnN3ZXJlZCAuYW5zIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qIEZlZWRiYWNrICovXHJcblxyXG4uZmVlZGJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzLCBtYXJnaW4tdG9wIDEuNXM7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mZWVkYmFjayAuYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcclxufVxyXG5cclxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM4MGJkYWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFJlc3VsdHMgICovXHJcblxyXG4ucmVzdWx0cyAuYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCA0MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMzQyYjM4O1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWFpbC5zdmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3R3aXR0ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAuYW5zLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuYW5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICB9XHJcbiAgLnF1aXotY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
>>>>>>> cb46ae8c5ac8ff3f4f01a4a50c6e8899e1c50798
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quiz',
          templateUrl: './quiz.component.html',
          styleUrls: ['./quiz.component.css']
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
  "./src/app/components/quiz/quiz.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/quiz/quiz.module.ts ***!
    \************************************************/

  /*! exports provided: QuizModule */

  /***/
  function srcAppComponentsQuizQuizModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizModule", function () {
      return QuizModule;
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


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/components/quiz/intro/intro.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/components/quiz/question/question.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/components/quiz/results/results.component.ts");
    /* harmony import */


    var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./quiz-routing.module */
    "./src/app/components/quiz/quiz-routing.module.ts");
    /* harmony import */


    var _quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quiz.component */
    "./src/app/components/quiz/quiz.component.ts");

    var QuizModule = function QuizModule() {
      _classCallCheck(this, QuizModule);
    };

    QuizModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QuizModule
    });
    QuizModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QuizModule_Factory(t) {
        return new (t || QuizModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QuizModule, {
        declarations: [_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/quiz/results/results.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/quiz/results/results.component.ts ***!
    \**************************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppComponentsQuizResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ResultsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View More Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strDrink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recipe_r1.strDrinkThumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", recipe_r1.strDrink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/recipe-book/recipe-details/", recipe_r1.idDrink, "");
      }
    }

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(recipeApi) {
        _classCallCheck(this, ResultsComponent);

        this.recipeApi = recipeApi;
      }

      _createClass(ResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.recipeApi.getRandom().subscribe(function (data) {
            _this17.recipes = data['drinks'];
          });
        }
      }, {
        key: "nameSearch",
        value: function nameSearch(results) {
          this.recipes = results;
        }
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ɵfac = function ResultsComponent_Factory(t) {
      return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]));
    };

    ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultsComponent,
      selectors: [["app-results"]],
      decls: 12,
      vars: 1,
      consts: [[1, "quiz-container"], [1, "results"], ["class", "details", 4, "ngFor", "ngForOf"], [1, "center"], [1, "share", "center"], ["href", "mailto:", 1, "btn", "email"], ["href", "https://twitter.com/share?ref_src=twsrc%5Etfw", "data-text", "Check out my quiz results from Top Shelf", "data-hashtags", "#topshelf #social #cocktails", "data-show-count", "false", 1, "twitter-share-button", "btn", "twitter"], [1, "details"], [1, "card-container"], [1, "drink-name"], [1, "image", 3, "src", "alt"], [3, "routerLink"]],
      template: function ResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResultsComponent_div_4_Template, 7, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Use the links below to share with your friends.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tweet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
<<<<<<< HEAD
      styles: [".card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 10px 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXovcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXN1bHRzIFxuXG4ucmVzdWx0cyAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggOHB4IDQycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI1cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzM0MmIzODtcbiAgd2lkdGg6IDE4MHB4O1xufVxuLnJlc3VsdHMgLmJ0bi5lbWFpbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9tYWlsLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy90d2l0dGVyLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59ICovXG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn0iXX0= */", ".quiz-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 13vh auto;\n  border: 2px solid rgb(236, 184, 92, 0.5);\n  border-radius: 6px;\n  padding: 20px;\n  margin-top: 120px;\n}\n\n\n\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgb(236, 184, 92, 0.5);\n  margin-right: 15px;\n  margin-top: 15px;\n}\n\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\n  background-color: rgb(236, 184, 92);\n}\n\n\n\n.ans-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.ans[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 2px solid rgb(236, 184, 92);\n  border-radius: 6px;\n  padding: 10px;\n  margin: 0px 7.5px 15px 7.5px;\n}\n\n.ans.selected[_ngcontent-%COMP%] {\n  border-color: #80bdad;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\n  background-color: rgb(236, 184, 92, 0.5);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n\n\n.feedback[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  transition: opacity 1.5s, margin-top 1.5s;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #80bdad;\n}\n\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #80bdad;\n  background-color: rgb(236, 184, 92);\n  transition: all 0.3s ease 0s;\n}\n\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 10px;\n}\n\n\n\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 10px 10px 8px 42px;\n  background-repeat: no-repeat;\n  background-position: 10px 5px;\n  background-size: 25px 25px;\n  border-radius: 4px;\n  color: #342b38;\n  width: 180px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\n  background-image: url('mail.svg');\n  background-color: white;\n  padding-right: 16px;\n}\n\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('twitter.svg');\n  background-color: white;\n}\n\n@media screen and (max-width: 411px) {\n  .ans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ans[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 5px 0 5px 0;\n  }\n  .quiz-container[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    padding: 10px;\n    margin-top: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59XG5cbi5yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTUwMHB4O1xufVxuXG4uaW50cm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNTAwcHg7XG59ICAqL1xuXG4ucXVpei1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEzdmggYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLyogUHJvZ3Jlc3MgICovXG5cbi5wcm9ncmVzcyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxuLnByb2dyZXNzIGRpdi5hbnN3ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xufVxuXG4vKiBRdWVzdGlvbiAqL1xuLmFucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYW5zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xufVxuXG4uYW5zLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGFkO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5hbnN3ZXJlZCAuYW5zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5hbnN3ZXJlZCAuYW5zIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBGZWVkYmFjayAqL1xuXG4uZmVlZGJhY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMsIG1hcmdpbi10b3AgMS41cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZmVlZGJhY2sgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcbn1cblxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjODBiZGFkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qIFJlc3VsdHMgICovXG5cbi5yZXN1bHRzIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHggNDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMzQyYjM4O1xuICB3aWR0aDogMTgwcHg7XG59XG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21haWwuc3ZnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy90d2l0dGVyLnN2Zyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICAuYW5zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYW5zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xuICB9XG4gIC5xdWl6LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuIl19 */"]
=======
      styles: [".card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: 10px 0 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXovcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXN1bHRzIFxyXG5cclxuLnJlc3VsdHMgLmJ0biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHggNDJweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb2xvcjogIzM0MmIzODtcclxuICB3aWR0aDogMTgwcHg7XHJcbn1cclxuLnJlc3VsdHMgLmJ0bi5lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL21haWwuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59ICovXHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG59Il19 */", ".quiz-container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin: 13vh auto;\r\n  border: 2px solid rgb(236, 184, 92, 0.5);\r\n  border-radius: 6px;\r\n  padding: 20px;\r\n  margin-top: 120px;\r\n}\r\n\r\n\r\n\r\n.progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  margin-right: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]   div.on[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   div.answered[_ngcontent-%COMP%] {\r\n  background-color: rgb(236, 184, 92);\r\n}\r\n\r\n\r\n\r\n.ans-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.ans[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  margin: 0px 7.5px 15px 7.5px;\r\n}\r\n\r\n.ans.selected[_ngcontent-%COMP%] {\r\n  border-color: #80bdad;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.unanswered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(236, 184, 92, 0.5);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\n.feedback[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  transition: opacity 1.5s, margin-top 1.5s;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  background: #80bdad;\r\n}\r\n\r\n.feedback[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background: #80bdad;\r\n  background-color: rgb(236, 184, 92);\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.answered[_ngcontent-%COMP%]   .feedback[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  padding: 10px 10px 8px 42px;\r\n  background-repeat: no-repeat;\r\n  background-position: 10px 5px;\r\n  background-size: 25px 25px;\r\n  border-radius: 4px;\r\n  color: #342b38;\r\n  width: 180px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.email[_ngcontent-%COMP%] {\r\n  background-image: url('mail.svg');\r\n  background-color: white;\r\n  padding-right: 16px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%]   .btn.twitter[_ngcontent-%COMP%] {\r\n  background-image: url('twitter.svg');\r\n  background-color: white;\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .ans-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n  .ans[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 5px 0 5px 0;\r\n  }\r\n  .quiz-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 10px;\r\n    margin-top: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxtQ0FBbUM7QUFDckM7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGlDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQTJDO0VBQzNDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAucXVlc3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUwMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNTAwcHg7XHJcbn0gICovXHJcblxyXG4ucXVpei1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAxM3ZoIGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuLyogUHJvZ3Jlc3MgICovXHJcblxyXG4ucHJvZ3Jlc3MgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyLCAwLjUpO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgZGl2Lm9uLFxyXG4ucHJvZ3Jlc3MgZGl2LmFuc3dlcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxODQsIDkyKTtcclxufVxyXG5cclxuLyogUXVlc3Rpb24gKi9cclxuLmFucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5hbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjM2LCAxODQsIDkyKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweCA3LjVweCAxNXB4IDcuNXB4O1xyXG59XHJcblxyXG4uYW5zLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICM4MGJkYWQ7XHJcbn1cclxuXHJcbi51bmFuc3dlcmVkIC5hbnMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVuYW5zd2VyZWQgLmFuczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5MiwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbi5hbnN3ZXJlZCAuYW5zIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qIEZlZWRiYWNrICovXHJcblxyXG4uZmVlZGJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzLCBtYXJnaW4tdG9wIDEuNXM7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mZWVkYmFjayAuYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzgwYmRhZDtcclxufVxyXG5cclxuLmZlZWRiYWNrIC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM4MGJkYWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmFuc3dlcmVkIC5mZWVkYmFjayB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFJlc3VsdHMgICovXHJcblxyXG4ucmVzdWx0cyAuYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDhweCA0MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjMzQyYjM4O1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4ucmVzdWx0cyAuYnRuLmVtYWlsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWFpbC5zdmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIC5idG4udHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3R3aXR0ZXIuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAuYW5zLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuYW5zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICB9XHJcbiAgLnF1aXotY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
>>>>>>> cb46ae8c5ac8ff3f4f01a4a50c6e8899e1c50798
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-results',
          templateUrl: './results.component.html',
          styleUrls: ['./results.component.css', '../quiz.component.css']
        }]
      }], function () {
        return [{
          type: _services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]
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
    /* harmony import */


    var _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipe-details/recipe-details.component */
    "./src/app/components/recipe-book/recipe-details/recipe-details.component.ts");

    var routes = [{
      path: '',
      component: _recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_2__["RecipeMainComponent"]
    }, {
      path: 'recipe-details/:recipeID',
      component: _recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsComponent"]
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeBookRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
        exports: [_recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeBookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_recipe_book_recipe_main_recipe_main_component__WEBPACK_IMPORTED_MODULE_3__["RecipeMainComponent"], _recipe_book_recipe_favorites_recipe_favorites_component__WEBPACK_IMPORTED_MODULE_4__["RecipeFavoritesComponent"], _recipe_book_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"], _recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"], _recipe_book_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_7__["RecipeSearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipe_book_recipe_book_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeBookRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
          exports: [_recipe_book_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_6__["RecipeCardComponent"]]
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


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipeCardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }
    }

    function RecipeCardComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    var RecipeCardComponent = /*#__PURE__*/function () {
      function RecipeCardComponent(favoriteService) {
        _classCallCheck(this, RecipeCardComponent);

        this.favoriteService = favoriteService;
        this.show = true;
      }

      _createClass(RecipeCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleAddRemove",
        value: function toggleAddRemove() {
          if (this.show) {
            this.favoriteService.addToFavorites(this.recipe);
            this.show = !this.show;
          } else {
            this.favoriteService.removeFromFavorites(this.recipe);
            this.show = !this.show;
          } //   if (this.favoriteService.containsFavorite(this.recipe)) {
          //     this.favoriteService.removeFromFavorites(this.recipe);
          //   } else {
          //     this.favoriteService.addToFavorites(this.recipe);
          //   }

        }
      }]);

      return RecipeCardComponent;
    }();

    RecipeCardComponent.ɵfac = function RecipeCardComponent_Factory(t) {
      return new (t || RecipeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]));
    };

    RecipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeCardComponent,
      selectors: [["recipe-card"]],
      inputs: {
        recipe: "recipe"
      },
      decls: 10,
      vars: 6,
      consts: [[1, "card-container"], [1, "card"], ["width", "125px", 1, "image", 3, "src", "alt"], [1, "drink-name"], [3, "routerLink"], [1, "saved", 3, "click"], ["class", "unsaved", 4, "ngIf"], ["class", "save", 4, "ngIf"], [1, "unsaved"], [1, "save"]],
      template: function RecipeCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent_Template_div_click_7_listener() {
            return ctx.toggleAddRemove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecipeCardComponent_div_8_Template, 1, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecipeCardComponent_div_9_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.strDrinkThumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.strDrink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.strDrink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "recipe-details/", ctx.recipe.idDrink, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.drink-name[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  margin-top: 10px;\r\n  color: rgb(236, 184, 92);\r\n  font-size: 20px;\r\n}\r\n\r\n.unsaved[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-image: url('fav_white.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.save[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-image: url('fav.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.saved[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .drink-name[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 412px) {\r\n  .drink-name[_ngcontent-%COMP%] {\r\n    \r\n    font-size: 16px;\r\n    \r\n    flex-wrap: wrap;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtYm9vay9yZWNpcGUtY2FyZC9yZWNpcGUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUE4RDtFQUM5RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFtRDtFQUNuRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWJvb2svcmVjaXBlLWNhcmQvcmVjaXBlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kcmluay1uYW1lIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udW5zYXZlZCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9JY29ucy9TdGFySWNvbldoaXRlL2Zhdl93aGl0ZS5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zYXZlIHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL0ljb25zL1N0YXJJY29uL2Zhdi5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zYXZlZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5kcmluay1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XHJcbiAgLmRyaW5rLW5hbWUge1xyXG4gICAgLyogd2lkdGg6IDE1MHB4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]
        }];
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipeDetailsComponent_div_2_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient1);
      }
    }

    function RecipeDetailsComponent_div_2_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient2);
      }
    }

    function RecipeDetailsComponent_div_2_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient3);
      }
    }

    function RecipeDetailsComponent_div_2_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient4);
      }
    }

    function RecipeDetailsComponent_div_2_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient5);
      }
    }

    function RecipeDetailsComponent_div_2_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient6);
      }
    }

    function RecipeDetailsComponent_div_2_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient7);
      }
    }

    function RecipeDetailsComponent_div_2_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient8);
      }
    }

    function RecipeDetailsComponent_div_2_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient9);
      }
    }

    function RecipeDetailsComponent_div_2_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient10);
      }
    }

    function RecipeDetailsComponent_div_2_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient11);
      }
    }

    function RecipeDetailsComponent_div_2_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient12);
      }
    }

    function RecipeDetailsComponent_div_2_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient13);
      }
    }

    function RecipeDetailsComponent_div_2_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient14);
      }
    }

    function RecipeDetailsComponent_div_2_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strMeasure15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strIngredient15);
      }
    }

    function RecipeDetailsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Glassware:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingredients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecipeDetailsComponent_div_2_li_11_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeDetailsComponent_div_2_li_12_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecipeDetailsComponent_div_2_li_13_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecipeDetailsComponent_div_2_li_14_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeDetailsComponent_div_2_li_15_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecipeDetailsComponent_div_2_li_16_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecipeDetailsComponent_div_2_li_17_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RecipeDetailsComponent_div_2_li_18_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RecipeDetailsComponent_div_2_li_19_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RecipeDetailsComponent_div_2_li_20_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RecipeDetailsComponent_div_2_li_21_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RecipeDetailsComponent_div_2_li_22_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RecipeDetailsComponent_div_2_li_23_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RecipeDetailsComponent_div_2_li_24_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RecipeDetailsComponent_div_2_li_25_Template, 5, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Method:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back to search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recipe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strDrink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", recipe_r1.strDrinkThumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", recipe_r1.strDrink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strGlass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure1 || !!recipe_r1.strIngredient1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure2 || !!recipe_r1.strIngredient2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure3 || !!recipe_r1.strIngredient3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure4 || !!recipe_r1.strIngredient4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure5 || !!recipe_r1.strIngredient5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure6 || !!recipe_r1.strIngredient6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure7 || !!recipe_r1.strIngredient7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure8 || !!recipe_r1.strIngredient8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure9 || !!recipe_r1.strIngredient9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure10 || !!recipe_r1.strIngredient10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure11 || !!recipe_r1.strIngredient11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure12 || !!recipe_r1.strIngredient12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure13 || !!recipe_r1.strIngredient13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure14 || !!recipe_r1.strIngredient14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!recipe_r1.strMeasure15 || !!recipe_r1.strIngredient15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recipe_r1.strInstructions);
      }
    }

    var RecipeDetailsComponent = /*#__PURE__*/function () {
      function RecipeDetailsComponent(recipeAPI, route) {
        _classCallCheck(this, RecipeDetailsComponent);

        this.recipeAPI = recipeAPI;
        this.route = route;
      }

      _createClass(RecipeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.recipeID = this.route.snapshot.params.recipeID;
          console.log('component', this.recipeID);
          this.recipeAPI.getDetails(this.recipeID).subscribe(function (data) {
            _this18.recipes = data['drinks'];
            console.log('details', _this18.recipes);
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
      selectors: [["recipe-details"]],
      decls: 3,
      vars: 1,
      consts: [[1, "background-img"], [1, "global-parent"], ["class", "details", 4, "ngFor", "ngForOf"], [1, "details"], ["width", "125px", 1, "image", 3, "src", "alt"], [1, "info"], [4, "ngIf"], [1, "method"], ["routerLink", "/recipe-book"]],
      template: function RecipeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipeDetailsComponent_div_2_Template, 33, 20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('Hurricane.svg');\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 15px 0 5px 0;\r\n  color: rgb(236, 184, 92);\r\n  align-self: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  width: 400px;\r\n  height: auto;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  box-shadow: 3px 3px 5px black;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  color: White;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, auto);\r\n  row-gap: 10px;\r\n  -moz-column-gap: 30px;\r\n       column-gap: 30px;\r\n}\r\n\r\n.method[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 5px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  padding: 10px 15px;\r\n  background-color: #80bdad;\r\n  color: #204051;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    width: 400px;\r\n    height: auto;\r\n    border: 2px solid rgb(236, 184, 92);\r\n    box-shadow: 3px 3px 5px black;\r\n  }\r\n  .method[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    padding: 5px;\r\n    margin-bottom: 8px;\r\n    background-color: rgba(52, 43, 56, 0.8);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .details[_ngcontent-%COMP%] {\r\n    margin-top: 5vh;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n  img[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    width: 250px;\r\n  }\r\n\r\n  .method[_ngcontent-%COMP%] {\r\n    width: 340px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQWlEO0VBQ2pELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixxQkFBZ0I7T0FBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWxzL3JlY2lwZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9IdXJyaWNhbmUvSHVycmljYW5lLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbiAgY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTg0LCA5Mik7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogV2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG51bCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xyXG4gIHJvdy1nYXA6IDEwcHg7XHJcbiAgY29sdW1uLWdhcDogMzBweDtcclxufVxyXG5cclxuLm1ldGhvZCB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuYSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmRhZDtcclxuICBjb2xvcjogIzIwNDA1MTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggYmxhY2s7XHJcbiAgfVxyXG4gIC5tZXRob2Qge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgNDMsIDU2LCAwLjgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAuZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1ldGhvZCB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'recipe-details',
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

    function RecipeMainComponent_recipe_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "recipe-card", 4);
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
          var _this19 = this;

          this.recipeApi.getRandom().subscribe(function (data) {
            _this19.recipes = data['drinks']; // console.log(this.recipes);
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
      decls: 4,
      vars: 1,
      consts: [[1, "background-img"], [3, "searchResults"], [1, "card-container"], [3, "recipe", 4, "ngFor", "ngForOf"], [3, "recipe"]],
      template: function RecipeMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "recipe-search", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchResults", function RecipeMainComponent_Template_recipe_search_searchResults_1_listener($event) {
            return ctx.nameSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecipeMainComponent_recipe_card_3_Template, 1, 1, "recipe-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_2__["RecipeSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_4__["RecipeCardComponent"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  margin-left: 5vh;\r\n  background-image: url('Hurricane.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  margin: 5vh 5vw;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, auto);\r\n  gap: 15px;\r\n}\r\n\r\n.drink-name[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .card-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(4, auto);\r\n  }\r\n  .drink-name[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .card-container[_ngcontent-%COMP%] {\r\n    margin: 10vh 5vw;\r\n    width: 400px;\r\n    grid-template-columns: repeat(2, auto);\r\n    gap: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n  .card-container[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtYm9vay9yZWNpcGUtbWFpbi9yZWNpcGUtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNDQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtYm9vay9yZWNpcGUtbWFpbi9yZWNpcGUtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICBtYXJnaW4tbGVmdDogNXZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9IdXJyaWNhbmUvSHVycmljYW5lLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogNXZoIDV2dztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGF1dG8pO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLmRyaW5rLW5hbWUge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XHJcbiAgfVxyXG4gIC5kcmluay1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTB2aCA1dnc7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function RecipeSearchComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

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
          // this.recipeAPI.getGlassware().subscribe((data) => {
          //   this.glassware = data['drinks'];
          // });
          // this.recipeAPI.getAlcoholic().subscribe((data) => {
          //   this.alcoholic = data['drinks'];
          // });
          // this.recipeAPI.getCategories().subscribe((data) => {
          //   this.categories = data['drinks'];
          // });
          // this.recipeAPI.filterCocktailType().subscribe((data) => {
          //   console.log('filter cocktails', data['drinks']);
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
          var _this20 = this;

          this.recipeAPI.searchByName(this.nameSearch.value).subscribe(function (data) {
            return _this20.searchResults.emit(data['drinks']);
          });
        }
      }, {
        key: "searchByLetter",
        value: function searchByLetter() {
          var _this21 = this;

          this.recipeAPI.searchByLetter(this.letterSearch.value).subscribe(function (data) {
            _this21.searchResults.emit(data['drinks']);
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
      decls: 20,
      vars: 3,
      consts: [[1, "global-parent"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Search by Name", "formControlName", "searchName"], ["type", "submit"], [1, "form-group2"], ["for", "alphabet"], ["formControlName", "letter", "name", "letter", "id", "letter"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["routerLink", "/preferences"], [3, "value"]],
      template: function RecipeSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Drinks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeSearchComponent_Template_form_ngSubmit_3_listener() {
            return ctx.searchByName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeSearchComponent_Template_form_ngSubmit_8_listener() {
            return ctx.searchByLetter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Choose a Letter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Letters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeSearchComponent_option_15_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back to preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.nameSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.letterSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alphabet);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["a[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  padding: 10px 15px;\r\n  background-color: #80bdad;\r\n  color: #204051;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUtYm9vay9yZWNpcGUtc2VhcmNoL3JlY2lwZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS1ib29rL3JlY2lwZS1zZWFyY2gvcmVjaXBlLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwYmRhZDtcclxuICBjb2xvcjogIzIwNDA1MTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"]
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
  "./src/app/components/the-feed/the-feed-posts/the-feed-posts.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/the-feed/the-feed-posts/the-feed-posts.component.ts ***!
    \********************************************************************************/

  /*! exports provided: TheFeedPostsComponent */

  /***/
  function srcAppComponentsTheFeedTheFeedPostsTheFeedPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TheFeedPostsComponent", function () {
      return TheFeedPostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/drink-post.service */
    "./src/app/services/drink-post.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TheFeedPostsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rating: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Glassware: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Description: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Location: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Username: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image_location, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.glassware);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 9, item_r1.date_added));
      }
    }

    var TheFeedPostsComponent = /*#__PURE__*/function () {
      function TheFeedPostsComponent(postService) {
        _classCallCheck(this, TheFeedPostsComponent);

        this.postService = postService;
        this.commentHide = true;
      }

      _createClass(TheFeedPostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.postService.getAllPosts().subscribe(function (data) {
            _this22.theFeed = data;
            console.log(_this22.theFeed);
          });
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.commentHide = !this.commentHide;
        }
      }]);

      return TheFeedPostsComponent;
    }();

    TheFeedPostsComponent.ɵfac = function TheFeedPostsComponent_Factory(t) {
      return new (t || TheFeedPostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_1__["DrinkPostService"]));
    };

    TheFeedPostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TheFeedPostsComponent,
      selectors: [["the-feed-posts"]],
      decls: 3,
      vars: 1,
      consts: [[1, "background-img"], [1, "global-parent"], ["class", "info-parent-container", 4, "ngFor", "ngForOf"], [1, "info-parent-container"], ["width", "400px", 1, "border", 3, "src", "alt"], [1, "info-child-container"], [1, "info-container"], [1, "item"], [1, "item-description"]],
      template: function TheFeedPostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TheFeedPostsComponent_div_2_Template, 36, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theFeed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('lowball.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.info-parent-container[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(17, 31, 44, 0.85);\r\n  border: 3px solid rgb(236, 184, 92);\r\n}\r\n\r\n.info-child-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-bottom: 8px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n  margin-right: 5px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  padding: 0 30px;\r\n  width: 460px;\r\n  height: 540px;\r\n}\r\n\r\nimg.border[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  -o-border-image: url('feedImgBorder.svg') 50;\r\n     border-image: url('feedImgBorder.svg') 50;\r\n  border-color: rgb(236, 184, 92);\r\n  border-style: outset;\r\n  border-width: 40px;\r\n}\r\n\r\n.comments-container[_ngcontent-%COMP%] {\r\n  margin: 10px 0 0px 0;\r\n  width: 200px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 411px) {\r\n  .info-parent-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n    padding: 15px;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .item-description[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    width: 180px;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    padding: 0, 15px;\r\n    margin-top: 3vh;\r\n    width: 250px;\r\n    height: 320px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGUtZmVlZC90aGUtZmVlZC1wb3N0cy90aGUtZmVlZC1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViw0Q0FBcUQ7S0FBckQseUNBQXFEO0VBQ3JELCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlLWZlZWQvdGhlLWZlZWQtcG9zdHMvdGhlLWZlZWQtcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0xvd0JhbGwvbG93YmFsbC5zdmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmluZm8tcGFyZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDMxLCA0NCwgMC44NSk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIzNiwgMTg0LCA5Mik7XHJcbn1cclxuXHJcbi5pbmZvLWNoaWxkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIHdpZHRoOiA0NjBweDtcclxuICBoZWlnaHQ6IDU0MHB4O1xyXG59XHJcblxyXG5pbWcuYm9yZGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItaW1hZ2U6IHVybCguLi9GZWVkQm9yZGVyL2ZlZWRJbWdCb3JkZXIuc3ZnKSA1MDtcclxuICBib3JkZXItY29sb3I6IHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xyXG4gIGJvcmRlci13aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMHB4IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKiBwaG9uZSBzaXppbmcgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XHJcbiAgLmluZm8tcGFyZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBwYWRkaW5nOiAwLCAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TheFeedPostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'the-feed-posts',
          templateUrl: './the-feed-posts.component.html',
          styleUrls: ['./the-feed-posts.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_1__["DrinkPostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-profile/user-profile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-profile/user-profile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_MOCK_DATA_mock_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/MOCK_DATA/mock-posts */
    "./src/app/MOCK_DATA/mock-posts.ts");
    /* harmony import */


    var src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/drink-post.service */
    "./src/app/services/drink-post.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserProfileComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_2_div_2_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("User Name: ", item_r4.first_name, " ", item_r4.last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bio: ", item_r4.bio, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Age: ", item_r4.age, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("username: ", item_r4.username, "");
      }
    }

    function UserProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileComponent_div_2_div_2_Template, 11, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userInfo);
      }
    }

    function UserProfileComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_4_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var post_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.deletePost(post_r7.post_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", post_r7.image_location, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", post_r7.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Drink Name: ", post_r7.drink_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", post_r7.rating, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", post_r7.description, "");
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(drinkPosts, auth, userService) {
        _classCallCheck(this, UserProfileComponent);

        this.drinkPosts = drinkPosts;
        this.auth = auth;
        this.userService = userService; // postSub: Subscription

        this.userInfo = [];
        this.mockPosts = src_app_MOCK_DATA_mock_posts__WEBPACK_IMPORTED_MODULE_1__["MOCK_POSTS"];
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.drinkPosts.getUserPosts().subscribe(function (data) {
            // console.log('data', data);
            _this23.posts = data.items;
            console.log('this.posts', _this23.posts);
          });
          this.userService.getUsers().subscribe(function (data) {
            _this23.userInfo = data.users; // console.log(this.userInfo);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.auth.logOut();
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          var _this24 = this;

          console.log(postId);
          this.drinkPosts.deletePost(postId).subscribe(function (data) {
            _this24.posts = data.items;
          });
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_2__["DrinkPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["user-profile"]],
      decls: 5,
      vars: 2,
      consts: [[1, "background-img"], [1, "global-parent"], ["class", "info-container", 4, "ngFor", "ngForOf"], [1, "feed-parent"], [4, "ngFor", "ngForOf"], [1, "info-container"], ["width", " ", "alt", "", 1, "profile-pic", 3, "src"], ["class", "user-info-container", 4, "ngFor", "ngForOf"], [1, "user-info-container"], [3, "click"], ["width", " ", 1, "feed-images", 3, "src", "alt"], [1, "post-actions"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileComponent_div_2_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserProfileComponent_div_4_Template, 12, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userInfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('Mojito.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.profile-pic[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  margin-right: 40px;\r\n  width: 300;\r\n  height: 300;\r\n  background-color: white;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  box-shadow: 3px 3px 5px black;\r\n  border-radius: 100%;\r\n}\r\n\r\n.user-info-container[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  \r\n  height: auto;\r\n}\r\n\r\n.feed-parent[_ngcontent-%COMP%] {\r\n  margin-top: 5vh;\r\n  margin-left: 3vw;\r\n  width: 800px;\r\n  height: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, auto);\r\n  gap: 40px;\r\n}\r\n\r\n.feed-images[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  height: 180px;\r\n  border: 2px solid rgb(236, 184, 92);\r\n  box-shadow: 3px 3px 5px black;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 769px) {\r\n  .info-container[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n  }\r\n\r\n  .profile-pic[_ngcontent-%COMP%] {\r\n    margin-top: 10vh;\r\n    width: 175px;\r\n    height: 175px;\r\n  }\r\n\r\n  .feed-parent[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    grid-template-columns: repeat(3, auto);\r\n    gap: 15px;\r\n  }\r\n\r\n  .feed-images[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: auto;\r\n  }\r\n  button[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 411px) {\r\n  .info-container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    \r\n  }\r\n\r\n  .profile-pic[_ngcontent-%COMP%] {\r\n    margin-top: 15vh;\r\n    align-self: center;\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n  .user-info-container[_ngcontent-%COMP%] {\r\n    margin-top: 4vh;\r\n    margin-left: 25px;\r\n    width: 300px;\r\n  }\r\n\r\n  .feed-parent[_ngcontent-%COMP%] {\r\n    margin-left: 25px;\r\n    width: 200px;\r\n    grid-template-columns: repeat(2, auto);\r\n    gap: 20px;\r\n  }\r\n\r\n  .feed-images[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 250px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBd0Q7RUFDeEQsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vdXNlci1wcm9maWxlL01vaml0by9Nb2ppdG8uc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxuICB3aWR0aDogMzAwO1xyXG4gIGhlaWdodDogMzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIC8qIHdpZHRoOiAzMHZ3OyAqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZlZWQtcGFyZW50IHtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDN2dztcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgYXV0byk7XHJcbiAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uZmVlZC1pbWFnZXMge1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMzYsIDE4NCwgOTIpO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG59XHJcblxyXG4vKiBUYWJsZXQgU2l6aW5nICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgLmluZm8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLXBpYyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICB9XHJcblxyXG4gIC5mZWVkLXBhcmVudCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcblxyXG4gIC5mZWVkLWltYWdlcyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQaG9uZSBTaXppbmcgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAuaW5mby1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtcGljIHtcclxuICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICAudXNlci1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5mZWVkLXBhcmVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZlZWQtaW1hZ2VzIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_drink_post_service__WEBPACK_IMPORTED_MODULE_2__["DrinkPostService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-recipes/user-recipe-details/user-recipe-details.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/user-recipes/user-recipe-details/user-recipe-details.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UserRecipeDetailsComponent */

  /***/
  function srcAppComponentsUserRecipesUserRecipeDetailsUserRecipeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRecipeDetailsComponent", function () {
      return UserRecipeDetailsComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserRecipeDetailsComponent = /*#__PURE__*/function () {
      function UserRecipeDetailsComponent(recipeApi, route) {
        _classCallCheck(this, UserRecipeDetailsComponent);

        this.recipeApi = recipeApi;
        this.route = route;
      }

      _createClass(UserRecipeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recipeID = this.route.snapshot.params.recipeID;
          console.log('component', this.recipeID);
        }
      }]);

      return UserRecipeDetailsComponent;
    }();

    UserRecipeDetailsComponent.ɵfac = function UserRecipeDetailsComponent_Factory(t) {
      return new (t || UserRecipeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    UserRecipeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipeDetailsComponent,
      selectors: [["app-user-recipe-details"]],
      decls: 2,
      vars: 0,
      template: function UserRecipeDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-recipe-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWNpcGVzL3VzZXItcmVjaXBlLWRldGFpbHMvdXNlci1yZWNpcGUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-recipe-details',
          templateUrl: './user-recipe-details.component.html',
          styleUrls: ['./user-recipe-details.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_1__["RecipeApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
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


    var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/favorites.service */
    "./src/app/services/favorites.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRecipesCreateComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);

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
      function UserRecipesCreateComponent(fb, recipeAPI, favService, auth) {
        _classCallCheck(this, UserRecipesCreateComponent);

        this.fb = fb;
        this.recipeAPI = recipeAPI;
        this.favService = favService;
        this.auth = auth;
      }

      _createClass(UserRecipesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.recipeAPI.getGlassware().subscribe(function (data) {
            _this25.glassware = data['drinks'];
          });
          this.userRecipe = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            glassware: [''],
            method: [''],
            ingredient1: [''],
            ingredient2: [''],
            ingredient3: [''],
            ingredient4: [''],
            ingredient5: [''],
            ingredient6: [''],
            ingredient7: [''],
            ingredient8: [''],
            amount1: [''],
            amount2: [''],
            amount3: [''],
            amount4: [''],
            amount5: [''],
            amount6: [''],
            amount7: [''],
            amount8: [''],
            user_id: [this.auth.userID]
          });
          this.userRecipe.valueChanges.subscribe(function (value) {
            _this25.ratingDisplay = value.rating;
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
        key: "onSubmit",
        value: function onSubmit() {
          // console.log(this.userRecipe.value);
          this.favService.userRecipes(this.userRecipe.value);
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this26 = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            _this26.latitude = position.coords.latitude;
            _this26.longitude = position.coords.longitude;
          });
        }
      }]);

      return UserRecipesCreateComponent;
    }();

    UserRecipesCreateComponent.ɵfac = function UserRecipesCreateComponent_Factory(t) {
      return new (t || UserRecipesCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recipeAPI_service__WEBPACK_IMPORTED_MODULE_2__["RecipeApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    UserRecipesCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipesCreateComponent,
      selectors: [["user-recipes-create"]],
      decls: 69,
      vars: 2,
      consts: [[1, "background-img"], [1, "global-parent"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name"], ["formControlName", "glassware", "name", "glassware", "id", "glassware"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "parts"], [1, "table-parent"], [1, "table-amount"], ["for", "amount1"], ["type", "text", "formControlName", "amount1"], [1, "table-ingredient"], ["for", "ingredient1", 1, "ingredient"], ["type", "text", "formControlName", "ingredient1"], ["type", "text", "formControlName", "amount2"], ["type", "text", "formControlName", "ingredient2"], ["type", "text", "formControlName", "amount3"], ["type", "text", "formControlName", "ingredient3"], ["type", "text", "formControlName", "amount4"], ["type", "text", "formControlName", "ingredient4"], ["type", "text", "formControlName", "amount5"], ["type", "text", "formControlName", "ingredient5"], ["type", "text", "formControlName", "amount6"], ["type", "text", "formControlName", "ingredient6"], ["type", "text", "formControlName", "amount7"], ["type", "text", "formControlName", "ingredient7"], ["type", "text", "formControlName", "amount8"], ["type", "text", "formControlName", "ingredient8"], ["name", "method", "formControlName", "method", "id", "method", "cols", "10", "rows", "5", 1, "methodInput"], ["type", "submit"], [3, "value"]],
      template: function UserRecipesCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Recipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserRecipesCreateComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drink Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pick a Glass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Glassware");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserRecipesCreateComponent_option_15_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter Measurements & Ingredients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ingredient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userRecipe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.glassware);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".background-img[_ngcontent-%COMP%] {\r\n  background-image: url('PocoGrande.svg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 90%;\r\n  position: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.parts[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.table-parent[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.table-amount[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.table-ingredient[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 75%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlY2lwZXMvdXNlci1yZWNpcGVzLWNyZWF0ZS91c2VyLXJlY2lwZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUYsMkJBQTJCOztBQUMzQjtHQUNHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXJlY2lwZXMvdXNlci1yZWNpcGVzLWNyZWF0ZS91c2VyLXJlY2lwZXMtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9Qb2NvR3JhbmRlL1BvY29HcmFuZGUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnBhcnRzIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYmxlLXBhcmVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi50YWJsZS1hbW91bnQge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRhYmxlLWluZ3JlZGllbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgVGFibGV0XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbn0qL1xyXG5cclxuLyogTWVkaWEgUXVlcnkgZm9yIHBob25lICAqL1xyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG59ICovXHJcbiJdfQ== */"]
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
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
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


    var src_app_MOCK_DATA_mock_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/MOCK_DATA/mock-recipes */
    "./src/app/MOCK_DATA/mock-recipes.ts");
    /* harmony import */


    var src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/user-recipes/user-recipes.service */
    "./src/app/components/user-recipes/user-recipes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserRecipesMainComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.drink_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Drink Name: ", item_r1.drink_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", item_r1.rating, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Glassware: ", item_r1.glassware, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", item_r1.location, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("location: ", item_r1.location, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Ingredient 1 ", item_r1.amount_1, " ", item_r1.ingredient_1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Ingredient 2 ", item_r1.amount_2, " ", item_r1.ingredient_2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Ingredient 3 ", item_r1.amount_3, " ", item_r1.ingredient_3, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Ingredient 4 ", item_r1.amount_4, " ", item_r1.ingredient_4, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Ingredient 5 ", item_r1.amount_5, " ", item_r1.ingredient_5, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Created: ", item_r1.date_created, "");
      }
    }

    var UserRecipesMainComponent = /*#__PURE__*/function () {
      function UserRecipesMainComponent(userRecipeService) {
        _classCallCheck(this, UserRecipesMainComponent);

        this.userRecipeService = userRecipeService;
        this.mockRecipes = src_app_MOCK_DATA_mock_recipes__WEBPACK_IMPORTED_MODULE_1__["MOCK_RECIPES"];
      }

      _createClass(UserRecipesMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.userRecipeService.getRecipes().subscribe(function (data) {
            _this27.recipes = data;
            console.log(_this27.recipes);
          });
        }
      }]);

      return UserRecipesMainComponent;
    }();

    UserRecipesMainComponent.ɵfac = function UserRecipesMainComponent_Factory(t) {
      return new (t || UserRecipesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_2__["UserRecipesService"]));
    };

    UserRecipesMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRecipesMainComponent,
      selectors: [["user-recipes-main"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["width", "200px", 3, "src", "alt"]],
      template: function UserRecipesMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Inputted Recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserRecipesMainComponent_div_3_Template, 24, 18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mockRecipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
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
          type: src_app_components_user_recipes_user_recipes_service__WEBPACK_IMPORTED_MODULE_2__["UserRecipesService"]
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
    /* harmony import */


    var _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-recipes-create/user-recipes-create.component */
    "./src/app/components/user-recipes/user-recipes-create/user-recipes-create.component.ts");

    var routes = [{
      path: '',
      component: _user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"]
    }, {
      path: 'user-recipe-form',
      component: _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"]
    }, {
      path: 'saved-drinks/:recipeID',
      component: _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"]
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
    /* harmony import */


    var _user_recipe_details_user_recipe_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-recipe-details/user-recipe-details.component */
    "./src/app/components/user-recipes/user-recipe-details/user-recipe-details.component.ts");

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
        declarations: [_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"], _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"], _user_recipe_details_user_recipe_details_component__WEBPACK_IMPORTED_MODULE_6__["UserRecipeDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _user_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRecipesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_recipes_main_user_recipes_main_component__WEBPACK_IMPORTED_MODULE_2__["UserRecipesMainComponent"], _user_recipes_create_user_recipes_create_component__WEBPACK_IMPORTED_MODULE_3__["UserRecipesCreateComponent"], _user_recipe_details_user_recipe_details_component__WEBPACK_IMPORTED_MODULE_6__["UserRecipeDetailsComponent"]],
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
          // console.log(formValue);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.post('/api/recipes', formValue, {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.message);
          });
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          return this.http.get('/api/recipes', {
            headers: headers
          });
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
  "./src/app/helpers/functions.ts":
  /*!**************************************!*\
    !*** ./src/app/helpers/functions.ts ***!
    \**************************************/

  /*! exports provided: extractError, getToken */

  /***/
  function srcAppHelpersFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extractError", function () {
      return extractError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getToken", function () {
      return getToken;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var extractError = function extractError(resError) {
      var errors = [{
        message: 'something went wrong'
      }];

      if (resError && resError.error) {
        // console.log(resError.error.message);
        errors = [{
          message: resError.error.message
        }];
      }

      return errors;
    }; //


    var getToken = function getToken() {
      var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
      headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
    };
    /***/

  },

  /***/
  "./src/app/services/auth-guard.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/auth-guard.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.checkIfCanNavigate(state.url);
        }
      }, {
        key: "checkIfCanNavigate",
        value: function checkIfCanNavigate(url) {
          if (this.auth.isAuthenticated) {
            return true;
          }

          this.auth.redirectUrl = url;
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _helpers_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helpers/functions */
    "./src/app/helpers/functions.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();

    var DecodedToken = function DecodedToken() {
      _classCallCheck(this, DecodedToken);

      this.exp = 0;
      this.username = '';
      this.sub = '';
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.topShelfToken = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.sharedToken = this.topShelfToken.asObservable();
        this.decodedToken = new DecodedToken();
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(formData) {
          return this.http.post('/api/users/register', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (resError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_3__["extractError"])(resError));
          }));
        }
      }, {
        key: "login",
        value: function login(formData) {
          var _this28 = this;

          return this.http.post('/api/users/login', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this28.saveToken(data.token);

            return data.token;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (resError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_3__["extractError"])(resError));
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem('topShelf_token');
          this.decodedToken = new DecodedToken();
          this.topShelfToken.next('');
          this.router.navigate(['/login'], {
            queryParams: {
              message: 'You are logged out'
            }
          });
        }
      }, {
        key: "checkAuth",
        value: function checkAuth() {
          var authToken = localStorage.getItem('topShelf_token');

          if (!authToken) {
            return false;
          } else {
            this.topShelfToken.next(authToken);
          }

          var decodedToken = jwt.decodeToken(authToken);

          if (!decodedToken) {
            return false;
          }

          this.decodedToken = decodedToken;
          return true;
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          var decodedToken = jwt.decodeToken(token);

          if (!decodedToken) {
            return null;
          }

          this.decodedToken = decodedToken;
          localStorage.setItem('topShelf_token', token);
          this.topShelfToken.next(token); // console.log('decoded token', this.decodedToken);

          return token;
        } // gets the username from the encoded token

      }, {
        key: "username",
        get: function get() {
          return this.decodedToken.username;
        } // gets userID from the encoded token

      }, {
        key: "userID",
        get: function get() {
          return this.decodedToken.sub;
        } // checks to see if token expiration is before current time

      }, {
        key: "isAuthenticated",
        get: function get() {
          return moment__WEBPACK_IMPORTED_MODULE_5__().isBefore(this.expiration);
        }
      }, {
        key: "expiration",
        get: function get() {
          return moment__WEBPACK_IMPORTED_MODULE_5__["unix"](this.decodedToken.exp);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/drink-post.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/drink-post.service.ts ***!
    \************************************************/

  /*! exports provided: DrinkPostService */

  /***/
  function srcAppServicesDrinkPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrinkPostService", function () {
      return DrinkPostService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DrinkPostService = /*#__PURE__*/function () {
      function DrinkPostService(http, router) {
        _classCallCheck(this, DrinkPostService);

        this.http = http;
        this.router = router;
      } // all posts


      _createClass(DrinkPostService, [{
        key: "getAllPosts",
        value: function getAllPosts() {
          return this.http.get('/api/drink-posts');
        } // Logged in users posts

      }, {
        key: "getUserPosts",
        value: function getUserPosts() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          return this.http.get('/api/drink-posts/users', {
            headers: headers
          });
        }
      }, {
        key: "postADrink",
        value: function postADrink(formValue) {
          // console.log('formValue', formValue);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.post('/api/drink-posts/users', formValue, {
            headers: headers
          }).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          console.log('service', postId);
          return this.http["delete"]("api/drink-posts/".concat(postId), {
            headers: headers
          });
        }
      }]);

      return DrinkPostService;
    }();

    DrinkPostService.ɵfac = function DrinkPostService_Factory(t) {
      return new (t || DrinkPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DrinkPostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DrinkPostService,
      factory: DrinkPostService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrinkPostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/favorites.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/favorites.service.ts ***!
    \***********************************************/

  /*! exports provided: FavoritesService */

  /***/
  function srcAppServicesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
      return FavoritesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FavoritesService = /*#__PURE__*/function () {
      function FavoritesService(http, router) {
        _classCallCheck(this, FavoritesService);

        this.http = http;
        this.router = router;
        this.favorites = [];
        this.favoritesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(FavoritesService, [{
        key: "addToFavorites",
        value: function addToFavorites(drink) {
          var _this29 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.post('/api/recipes', drink, {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.message);

            _this29.favorites.push(drink);

            _this29.favoritesUpdated.next(_toConsumableArray(_this29.favorites)); // console.log('service', this.favorites);

          });
        }
      }, {
        key: "userRecipes",
        value: function userRecipes(recipe) {
          var _this30 = this;

          console.log('service', recipe);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.post('/api/recipes/created', recipe, {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.message);

            _this30.favorites.push(recipe);

            _this30.favoritesUpdated.next(_toConsumableArray(_this30.favorites));

            _this30.router.navigate(['/preferences']); // console.log('service', this.favorites);

          });
        }
      }, {
        key: "getFavorites",
        value: function getFavorites() {
          var _this31 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          this.http.get('/api/recipes', {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.message);
            _this31.favorites = response.items;

            _this31.favoritesUpdated.next(_toConsumableArray(_this31.favorites));
          });
        }
      }, {
        key: "getFavoriteUpdateListener",
        value: function getFavoriteUpdateListener() {
          return this.favoritesUpdated.asObservable();
        }
      }, {
        key: "removeFromFavorites",
        value: function removeFromFavorites(drink) {
          var _this32 = this;

          // console.log('service', drinkId);
          var parsedId = drink.idDrink;
          this.http["delete"]("/api/recipes/".concat(parsedId)).subscribe(function (response) {
            console.log(response.message);
            _this32.favorites = _this32.favorites.filter(function (fav) {
              return fav.id_drink !== parsedId;
            });

            _this32.favoritesUpdated.next(_toConsumableArray(_this32.favorites));
          });
        }
      }, {
        key: "deleteFromPref",
        value: function deleteFromPref(drinkId) {
          var _this33 = this;

          // console.log('drinkID', drinkId);
          this.http["delete"]("/api/recipes/".concat(drinkId)).subscribe(function (response) {
            console.log(response.message);
            _this33.favorites = _this33.favorites.filter(function (fav) {
              return fav.saved_id !== drinkId;
            });

            _this33.favoritesUpdated.next(_toConsumableArray(_this33.favorites));
          });
        }
      }, {
        key: "containsFavorite",
        value: function containsFavorite(drink) {
          return this.favorites.includes(drink);
        }
      }, {
        key: "savedRecipeDetails",
        value: function savedRecipeDetails(recipeID) {
          console.log(recipeID);
          return this.http.get("/api/recipes/".concat(recipeID));
        }
      }, {
        key: "getDetails",
        value: function getDetails(recipeID) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token')); // console.log('service', recipeID);

          return this.http.get("/api/recipes/".concat(recipeID), {
            headers: headers
          });
        }
      }]);

      return FavoritesService;
    }();

    FavoritesService.ɵfac = function FavoritesService_Factory(t) {
      return new (t || FavoritesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    FavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FavoritesService,
      factory: FavoritesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/guest.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/guest.guard.ts ***!
    \*****************************************/

  /*! exports provided: GuestGuard */

  /***/
  function srcAppServicesGuestGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuestGuard", function () {
      return GuestGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GuestGuard = /*#__PURE__*/function () {
      function GuestGuard(auth, router) {
        _classCallCheck(this, GuestGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(GuestGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.checkIfCanNavigate(state.url);
        }
      }, {
        key: "checkIfCanNavigate",
        value: function checkIfCanNavigate(url) {
          if (this.auth.isAuthenticated) {
            this.router.navigate(['/the-feed']);
            return false;
          }

          return true;
        }
      }]);

      return GuestGuard;
    }();

    GuestGuard.ɵfac = function GuestGuard_Factory(t) {
      return new (t || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    GuestGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GuestGuard,
      factory: GuestGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/navbar.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/navbar.service.ts ***!
    \********************************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppServicesNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NavbarService = /*#__PURE__*/function () {
      function NavbarService(http) {
        _classCallCheck(this, NavbarService);

        this.http = http;
        this.visible = true;
      }

      _createClass(NavbarService, [{
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
      }, {
        key: "getUserPic",
        value: function getUserPic() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          return this.http.get('/api/users/pic', {
            headers: headers
          });
        }
      }]);

      return NavbarService;
    }();

    NavbarService.ɵfac = function NavbarService_Factory(t) {
      return new (t || NavbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavbarService,
      factory: NavbarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
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
      }, {
        key: "getRandom",
        value: function getRandom() {
          return this.http.get("".concat(this.baseUrl, "randomselection.php"));
        }
      }, {
        key: "getDetails",
        value: function getDetails(recipeID) {
          // console.log('service', recipeID);
          return this.http.get("".concat(this.baseUrl, "lookup.php?i=").concat(recipeID));
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
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http, router) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.router = router;
        this.userNameList = [];
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('authorization', localStorage.getItem('topShelf_token'));
          return this.http.get('/api/users', {
            headers: headers
          });
        }
      }, {
        key: "addNewUser",
        value: function addNewUser(formValue) {
          var _this34 = this;

          this.http.post('/api/users/register', formValue).subscribe(function (response) {
            if (!response.goodToGo) {
              _this34.errorMessage = response.message; // console.log(this.errorMessage);

              _this34.warning = response.goodToGo; // console.log(this.warning);
            } else {
              // console.log(response.message);
              console.log(response.token);
              localStorage.setItem('token', response.token);

              _this34.router.navigate(['/the-feed']);
            }
          });
        }
      }, {
        key: "login",
        value: function login(formValue) {
          var _this35 = this;

          this.http.post('api/users/login', formValue).subscribe(function (response) {
            // console.log('service', response.user);
            if (!response.goodToGo) {
              // console.log(response.goodToGo);
              console.log(response.message);
            } else {
              console.log(response.message);
              localStorage.setItem('token', response.token);

              _this35.router.navigate(['/the-feed']);
            }
          });
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          // looks for token in local storage
          // returns true/false
          return !!localStorage.getItem('token');
        }
      }, {
        key: "logOutUser",
        value: function logOutUser() {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "PasswordValidation",
        value: function PasswordValidation(password, password2) {
          return function (formGroup) {
            // get the passwords from the controls
            var passwordControl = formGroup.controls[password];
            var password2Control = formGroup.controls[password2];

            if (!passwordControl || !password2Control) {
              return null;
            }

            if (password2Control.errors && !password2Control.errors.passwordMismatch) {
              return null;
            }

            if (passwordControl.value !== password2Control.value) {
              password2Control.setErrors({
                passwordMismatch: true
              });
            } else {
              password2Control.setErrors(null);
            }
          };
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    /*! C:\Users\arvju\Desktop\Grand_Circus\Projects\Capstone2\Capstone-Project-clone\Drinks-App\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map