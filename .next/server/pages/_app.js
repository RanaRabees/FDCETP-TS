/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.json */ \"./config/config.json\");\n/* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/theme.json */ \"./config/theme.json\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-gtm-module */ \"react-gtm-module\");\n/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    const pf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.primary;\n    const sf = _config_theme_json__WEBPACK_IMPORTED_MODULE_2__.fonts.font_family.secondary;\n    const [fontcss, setFontcss] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? \"&family=\" + sf : \"\"}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));\n    }, [\n        pf,\n        sf\n    ]);\n    // google tag manager (gtm)\n    const tagManagerArgs = {\n        gtmId: _config_config_json__WEBPACK_IMPORTED_MODULE_1__.params.tag_manager_id\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n             false && 0;\n        }, 5000);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        type: \"text/javascript\",\n                        dangerouslySetInnerHTML: {\n                            __html: `\n            window.$crisp=[];\n            window.CRISP_WEBSITE_ID=\"7edbb99b-03e2-40b8-95a5-80b9d93c3c4c\";\n            (function(){\n              d = document;\n              s=d.createElement(\"script\");\n              s.src=\"https://client.crisp.chat/l.js\";\n              s.async=1;\n              d.getElementsByTagName(\"head\")[0].appendChild(s);\n            })();\n        `\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"true\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        dangerouslySetInnerHTML: {\n                            __html: `${fontcss}`\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=5\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\fdcetp\\\\pages\\\\_app.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDRjtBQUNaO0FBQ2U7QUFDRjtBQUNaO0FBRTlCLE1BQU1NLE1BQU0sQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUFLO0lBQ3hDLE1BQU1DLEtBQUtSLHlFQUErQjtJQUMxQyxNQUFNWSxLQUFLWiwyRUFBaUM7SUFDNUMsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQTtJQUN0Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxNQUNFLENBQUMseUNBQXlDLEVBQUVSLEdBQUcsRUFBRUksS0FBSyxhQUFhQSxLQUFLLEVBQUUsQ0FDekUsYUFBYSxDQUFDLEVBQ2ZLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLEdBQUdGLElBQUksQ0FBQyxDQUFDRyxNQUFRTCxXQUFXSztJQUN0RCxHQUFHO1FBQUNaO1FBQUlJO0tBQUc7SUFFWCwyQkFBMkI7SUFDM0IsTUFBTVMsaUJBQWlCO1FBQ3JCQyxPQUFPdkIsc0VBQTRCO0lBQ3JDO0lBQ0FHLGdEQUFTQSxDQUFDLElBQU07UUFDZHVCLFdBQVcsSUFBTTtZQXZCckIsTUF5Qm9DLElBQzVCckIsQ0FBcUNpQjtRQUN6QyxHQUFHO0lBQ0gsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJQTs7a0NBRUgsOERBQUMwQjt3QkFDQ0MsTUFBSzt3QkFDTEMseUJBQXlCOzRCQUN2QkMsUUFBUSxDQUFDOzs7Ozs7Ozs7O1FBVWIsQ0FBQzt3QkFDQzs7Ozs7O2tDQUVGLDhEQUFDQzt3QkFDQ0MsS0FBSTt3QkFDSkMsTUFBSzt3QkFDTEMsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDQ04seUJBQXlCOzRCQUN2QkMsUUFBUSxDQUFDLEVBQUVoQixRQUFRLENBQUM7d0JBQ3RCOzs7Ozs7a0NBRUYsOERBQUNzQjt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDaEM7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZkY2V0cC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZy5qc29uXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2NvbmZpZy90aGVtZS5qc29uXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFnTWFuYWdlciBmcm9tIFwicmVhY3QtZ3RtLW1vZHVsZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBwZiA9IHRoZW1lLmZvbnRzLmZvbnRfZmFtaWx5LnByaW1hcnk7XG4gIGNvbnN0IHNmID0gdGhlbWUuZm9udHMuZm9udF9mYW1pbHkuc2Vjb25kYXJ5O1xuICBjb25zdCBbZm9udGNzcywgc2V0Rm9udGNzc10gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFxuICAgICAgYGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9JHtwZn0ke3NmID8gXCImZmFtaWx5PVwiICsgc2YgOiBcIlwiXG4gICAgICB9JmRpc3BsYXk9c3dhcGBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKS50aGVuKChjc3MpID0+IHNldEZvbnRjc3MoY3NzKSkpO1xuICB9LCBbcGYsIHNmXSk7XG5cbiAgLy8gZ29vZ2xlIHRhZyBtYW5hZ2VyIChndG0pXG4gIGNvbnN0IHRhZ01hbmFnZXJBcmdzID0ge1xuICAgIGd0bUlkOiBjb25maWcucGFyYW1zLnRhZ19tYW5hZ2VyX2lkLFxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGNvbmZpZy5wYXJhbXMudGFnX21hbmFnZXJfaWQgJiZcbiAgICAgICAgVGFnTWFuYWdlci5pbml0aWFsaXplKHRhZ01hbmFnZXJBcmdzKTtcbiAgICB9LCA1MDAwKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LiRjcmlzcD1bXTtcbiAgICAgICAgICAgIHdpbmRvdy5DUklTUF9XRUJTSVRFX0lEPVwiN2VkYmI5OWItMDNlMi00MGI4LTk1YTUtODBiOWQ5M2MzYzRjXCI7XG4gICAgICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgZCA9IGRvY3VtZW50O1xuICAgICAgICAgICAgICBzPWQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgcy5zcmM9XCJodHRwczovL2NsaWVudC5jcmlzcC5jaGF0L2wuanNcIjtcbiAgICAgICAgICAgICAgcy5hc3luYz0xO1xuICAgICAgICAgICAgICBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYCR7Zm9udGNzc31gLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9NVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiY29uZmlnIiwidGhlbWUiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUYWdNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicGYiLCJmb250cyIsImZvbnRfZmFtaWx5IiwicHJpbWFyeSIsInNmIiwic2Vjb25kYXJ5IiwiZm9udGNzcyIsInNldEZvbnRjc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiY3NzIiwidGFnTWFuYWdlckFyZ3MiLCJndG1JZCIsInBhcmFtcyIsInRhZ19tYW5hZ2VyX2lkIiwic2V0VGltZW91dCIsImluaXRpYWxpemUiLCJzY3JpcHQiLCJ0eXBlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIiwic3R5bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"Future Demanding Cutting Edge Technologies Providers","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"48","logo_text":"FDCETP"},"settings":{"pagination":4,"summary_length":200,"project_folder":"projects"},"nav_button":{"enable":true,"label":"Get Started","link":"/pricing"},"params":{"contact_form_action":"","tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.","copyright":"@2023 - All Rights Reserved by [FDCETP](https://fdcetp.vercel.app)"},"metadata":{"meta_author":"FDCETP","meta_image":"/images/ogimage.png","meta_description":"Official Website FDcetp"}}');

/***/ }),

/***/ "./config/theme.json":
/*!***************************!*\
  !*** ./config/theme.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"colors":{"default":{"theme_color":{"primary":"#1ccdeb","body":"#fff","border":"#e9e9e9","theme_light":"#edf6f5"},"text_color":{"default":"#777","dark":"#222"}}},"fonts":{"font_family":{"primary":"Lato:wght@300;400;700","primary_type":"sans-serif"},"font_size":{"base":"16","scale":"1.250"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();