"use strict";
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
exports.id = "pages/detail";
exports.ids = ["pages/detail"];
exports.modules = {

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ \"./src/hocs/withAnalytics.js\");\n\n\n\n\nconst Detail = ({ user  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/rayan/Documents/coding/courses/gostack/gostack6/bonus/nextssr/pages/detail.js\",\n            lineNumber: 7,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/rayan/Documents/coding/courses/gostack/gostack6/bonus/nextssr/pages/detail.js\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                },\n                __self: undefined,\n                children: user.login\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: user.avatar_url,\n                alt: user.login,\n                width: \"200\",\n                __source: {\n                    fileName: \"/home/rayan/Documents/coding/courses/gostack/gostack6/bonus/nextssr/pages/detail.js\",\n                    lineNumber: 9,\n                    columnNumber: 5\n                },\n                __self: undefined\n            })\n        ]\n    })\n;\nDetail.getInitialProps = async ({ query  })=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://api.github.com/users/${query.user}`);\n    return {\n        user: response.data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()(Detail));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0E7QUFFNEI7QUFFckQsS0FBSyxDQUFDRyxNQUFNLElBQUksQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyx5RUFDckJDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFFRixJQUFJLENBQUNHLEtBQUs7O2lGQUNkQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVMLElBQUksQ0FBQ00sVUFBVTtnQkFBRUMsR0FBRyxFQUFFUCxJQUFJLENBQUNHLEtBQUs7Z0JBQUVLLEtBQUssRUFBQyxDQUFLOzs7Ozs7Ozs7OztBQUkzRFQsTUFBTSxDQUFDVSxlQUFlLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDN0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDZCxnREFBUyxFQUM3Qiw2QkFBNkIsRUFBRWEsS0FBSyxDQUFDVixJQUFJO0lBRTVDLE1BQU0sQ0FBQyxDQUFDO1FBQUNBLElBQUksRUFBRVcsUUFBUSxDQUFDRSxJQUFJO0lBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsaUVBQWVmLG1FQUFhLEdBQUdDLE1BQU0sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNzci8uL3BhZ2VzL2RldGFpbC5qcz9iYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IHdpdGhBbmFseXRpY3MgZnJvbSBcIi4uL3NyYy9ob2NzL3dpdGhBbmFseXRpY3NcIjtcblxuY29uc3QgRGV0YWlsID0gKHsgdXNlciB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPnt1c2VyLmxvZ2lufTwvaDE+XG4gICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PXt1c2VyLmxvZ2lufSB3aWR0aD1cIjIwMFwiIC8+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtxdWVyeS51c2VyfWBcbiAgKTtcbiAgcmV0dXJuIHsgdXNlcjogcmVzcG9uc2UuZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFuYWx5dGljcygpKERldGFpbCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIndpdGhBbmFseXRpY3MiLCJEZXRhaWwiLCJ1c2VyIiwiZGl2IiwiaDEiLCJsb2dpbiIsImltZyIsInNyYyIsImF2YXRhcl91cmwiLCJhbHQiLCJ3aWR0aCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail.js\n");

/***/ }),

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"next/dist/shared/lib/utils\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>(Composed)=>class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n            static getInitialProps(ctx) {\n                return (0,next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__.loadGetInitialProps)(Composed, ctx);\n            }\n            componentDidMount() {\n                react_ga__WEBPACK_IMPORTED_MODULE_3___default().initialize(\"ID_ANALYTICS\");\n                react_ga__WEBPACK_IMPORTED_MODULE_3___default().pageview(window.location.pathname);\n            }\n            render() {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Composed, {\n                    ...this.props,\n                    __source: {\n                        fileName: \"/home/rayan/Documents/coding/courses/gostack/gostack6/bonus/nextssr/src/hocs/withAnalytics.js\",\n                        lineNumber: 17,\n                        columnNumber: 14\n                    },\n                    __self: this\n                }));\n            }\n        });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFDbEM7QUFFOUIsaUVBQWdCLEtBQU1JLFFBQVEsaUJBQ2RILDRDQUFTO21CQUNkSSxlQUFlLENBQUNDLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixNQUFNLENBQUNKLCtFQUFtQixDQUFDRSxRQUFRLEVBQUVFLEdBQUc7WUFDMUMsQ0FBQztZQUVEQyxpQkFBaUIsR0FBRyxDQUFDO2dCQUNuQkosMERBQWtCLENBQUMsQ0FBYztnQkFDakNBLHdEQUFnQixDQUFDTyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtZQUMzQyxDQUFDO1lBRURDLE1BQU0sR0FBRyxDQUFDO2dCQUNSLE1BQU0sc0VBQUVULFFBQVE7dUJBQUssSUFBSSxDQUFDVSxLQUFLOzs7Ozs7OztZQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNzci8uL3NyYy9ob2NzL3dpdGhBbmFseXRpY3MuanM/NWQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzXCI7XG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKENvbXBvc2VkKSA9PlxuICBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvc2VkLCBjdHgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgUmVhY3RHQS5pbml0aWFsaXplKFwiSURfQU5BTFlUSUNTXCIpO1xuICAgICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8Q29tcG9zZWQgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJSZWFjdEdBIiwiQ29tcG9zZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb21wb25lbnREaWRNb3VudCIsImluaXRpYWxpemUiLCJwYWdldmlldyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZW5kZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hocs/withAnalytics.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/dist/shared/lib/utils":
/*!*********************************************!*\
  !*** external "next/dist/shared/lib/utils" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/detail.js"));
module.exports = __webpack_exports__;

})();