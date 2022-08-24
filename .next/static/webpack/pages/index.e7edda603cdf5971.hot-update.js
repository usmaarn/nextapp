"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/authcontext */ \"./contexts/authcontext.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), users = ref1[0], setUsers = ref1[1];\n    var auth = (0,_contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/users\").then(function(res) {\n            return setUsers(res.data);\n        });\n    }, []);\n    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\", {\n        autoConnect: false\n    });\n    socket.on(\"message\", function(msg) {\n        console.log(msg);\n    });\n    var connect = function() {\n        return socket.connect();\n    };\n    var disconnect = function() {\n        return socket.disconnect();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen grid grid-cols-[300px_auto]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-700 flex flex-col\",\n                children: users && users.map(function(user) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setActive(user);\n                        },\n                        className: \"p-3 border-b text-left \" + ((active === null || active === void 0 ? void 0 : active.id) == user.id ? \"bg-zinc-500\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl text-zinc-300\",\n                            children: user.name\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, _this)\n                    }, user.id, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connect,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: disconnect,\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"qqPOmJkY9IKvlvhRFxzrN0EjfBY=\", false, function() {\n    return [\n        _contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0s7QUFDWjtBQUNYO0FBR1gsU0FBU0ssSUFBSSxDQUFDQyxLQUFLLEVBQUU7OztJQUVoQyxJQUE0QkwsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQS9CTSxNQUFNLEdBQWVOLEdBQVUsR0FBekIsRUFBRU8sU0FBUyxHQUFJUCxHQUFVLEdBQWQ7SUFDeEIsSUFBMEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3QlEsS0FBSyxHQUFjUixJQUFVLEdBQXhCLEVBQUVTLFFBQVEsR0FBSVQsSUFBVSxHQUFkO0lBQ3RCLElBQU1VLElBQUksR0FBR1QsOERBQU8sRUFBRTtJQUV0QkYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pJLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQ2xCUyxJQUFJLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlKLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDeEMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1DLE1BQU0sR0FBR2Isb0RBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUN2Q2MsV0FBVyxFQUFFLEtBQUs7S0FDckIsQ0FBQztJQUVGRCxNQUFNLENBQUNFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBQ0MsR0FBRyxFQUFLO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7S0FDcEIsQ0FBQztJQUVGLElBQU1HLE9BQU8sR0FBRztlQUFNTixNQUFNLENBQUNNLE9BQU8sRUFBRTtLQUFBO0lBQ3RDLElBQU1DLFVBQVUsR0FBRztlQUFNUCxNQUFNLENBQUNPLFVBQVUsRUFBRTtLQUFBO0lBRTVDLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7OzBCQUNqRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjswQkFDckNoQixLQUFLLElBQUlBLEtBQUssQ0FBQ2lCLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtrQ0FDcEIscUVBQUNDLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTXJCLFNBQVMsQ0FBQ21CLElBQUksQ0FBQzt5QkFBQTt3QkFDcEJGLFNBQVMsRUFBRSx5QkFBeUIsR0FBRyxDQUFDbEIsQ0FBQUEsTUFBTSxhQUFOQSxNQUFNLFdBQUksR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxNQUFNLENBQUV1QixFQUFFLEtBQUlILElBQUksQ0FBQ0csRUFBRSxHQUFHLGFBQWEsR0FBRyxFQUFFLENBQUM7a0NBQ2pHLDRFQUFDQyxJQUFFOzRCQUFDTixTQUFTLEVBQUMsdUJBQXVCO3NDQUFFRSxJQUFJLENBQUNLLElBQUk7Ozs7O2lDQUFNO3VCQURqREwsSUFBSSxDQUFDRyxFQUFFOzs7OzZCQUVQO2lCQUNaLENBQUM7Ozs7O29CQUNBOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsRUFBRTs7a0NBQ2IsOERBQUNHLFFBQU07d0JBQUNDLE9BQU8sRUFBRVAsT0FBTztrQ0FBRSxTQUFPOzs7Ozs0QkFBUztrQ0FDMUMsOERBQUNNLFFBQU07d0JBQUNDLE9BQU8sRUFBRU4sVUFBVTtrQ0FBRSxZQUFVOzs7Ozs0QkFBUzs7Ozs7O29CQUM5Qzs7Ozs7O1lBQ0osQ0FDVDtDQUVKO0dBdkN1QmxCLElBQUk7O1FBSVhILDBEQUFPOzs7QUFKQUcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9jb250ZXh0cy9hdXRoY29udGV4dCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VycycpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gc2V0VXNlcnMocmVzLmRhdGEpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzb2NrZXQgPSBpbyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLCB7XG4gICAgICAgIGF1dG9Db25uZWN0OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgc29ja2V0Lm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb25uZWN0ID0gKCkgPT4gc29ja2V0LmNvbm5lY3QoKTtcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gKCkgPT4gc29ja2V0LmRpc2Nvbm5lY3QoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZ3JpZCBncmlkLWNvbHMtWzMwMHB4X2F1dG9dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtNzAwIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICB7dXNlcnMgJiYgdXNlcnMubWFwKHVzZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5pZH0gY2xhc3NOYW1lPXtcInAtMyBib3JkZXItYiB0ZXh0LWxlZnQgXCIgKyAoYWN0aXZlPy5pZCA9PSB1c2VyLmlkID8gJ2JnLXppbmMtNTAwJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXppbmMtMzAwXCI+e3VzZXIubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3R9PkNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PkRpc2Nvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiaW8iLCJheGlvcyIsIkhvbWUiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZXJzIiwic2V0VXNlcnMiLCJhdXRoIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzb2NrZXQiLCJhdXRvQ29ubmVjdCIsIm9uIiwibXNnIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidXNlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImgxIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});