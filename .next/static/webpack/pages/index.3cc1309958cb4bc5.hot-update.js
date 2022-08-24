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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/authcontext */ \"./contexts/authcontext.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/db */ \"./utils/db.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), active = ref[0], setActive = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), users = ref1[0], setUsers = ref1[1];\n    var auth = (0,_contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"/api/users\").then(function(res) {\n            return console.log(res.data.map());\n        });\n    }, []);\n    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\", {\n        autoConnect: false\n    });\n    socket.on(\"message\", function(msg) {\n        console.log(msg);\n    });\n    var connect = function() {\n        return socket.connect();\n    };\n    var disconnect = function() {\n        return socket.disconnect();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen grid grid-cols-[300px_auto]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-700 flex flex-col\",\n                children: users && users.map(function(user) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setActive(user);\n                        },\n                        className: \"p-3 border-b text-left \" + ((active === null || active === void 0 ? void 0 : active.id) == user.id ? \"bg-zinc-500\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl text-zinc-300\",\n                            children: user.name\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, _this)\n                    }, user.id, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connect,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: disconnect,\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"qqPOmJkY9IKvlvhRFxzrN0EjfBY=\", false, function() {\n    return [\n        _contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNLO0FBQ1o7QUFDVDtBQUNGO0FBR1gsU0FBU00sSUFBSSxDQUFDQyxLQUFLLEVBQUU7OztJQUVoQyxJQUE0Qk4sR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQS9CTyxNQUFNLEdBQWVQLEdBQVUsR0FBekIsRUFBRVEsU0FBUyxHQUFJUixHQUFVLEdBQWQ7SUFDeEIsSUFBMEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3QlMsS0FBSyxHQUFjVCxJQUFVLEdBQXhCLEVBQUVVLFFBQVEsR0FBSVYsSUFBVSxHQUFkO0lBQ3RCLElBQU1XLElBQUksR0FBR1YsOERBQU8sRUFBRTtJQUV0QkYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pLLGdEQUFTLENBQUMsWUFBWSxDQUFDLENBQ2xCUyxJQUFJLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDakQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1DLE1BQU0sR0FBR2pCLG9EQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFDdkNrQixXQUFXLEVBQUUsS0FBSztLQUNyQixDQUFDO0lBRUZELE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFDQyxHQUFHLEVBQUs7UUFDMUJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxHQUFHLENBQUMsQ0FBQztLQUNwQixDQUFDO0lBRUYsSUFBTUMsT0FBTyxHQUFHO2VBQU1KLE1BQU0sQ0FBQ0ksT0FBTyxFQUFFO0tBQUE7SUFDdEMsSUFBTUMsVUFBVSxHQUFHO2VBQU1MLE1BQU0sQ0FBQ0ssVUFBVSxFQUFFO0tBQUE7SUFFNUMscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNDQUFzQzs7MEJBQ2pELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzBCQUNyQ2pCLEtBQUssSUFBSUEsS0FBSyxDQUFDUyxHQUFHLENBQUNTLFNBQUFBLElBQUk7a0NBQ3BCLHFFQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1yQixTQUFTLENBQUNtQixJQUFJLENBQUM7eUJBQUE7d0JBQ3BCRCxTQUFTLEVBQUUseUJBQXlCLEdBQUcsQ0FBQ25CLENBQUFBLE1BQU0sYUFBTkEsTUFBTSxXQUFJLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsTUFBTSxDQUFFdUIsRUFBRSxLQUFJSCxJQUFJLENBQUNHLEVBQUUsR0FBRyxhQUFhLEdBQUcsRUFBRSxDQUFDO2tDQUNqRyw0RUFBQ0MsSUFBRTs0QkFBQ0wsU0FBUyxFQUFDLHVCQUF1QjtzQ0FBRUMsSUFBSSxDQUFDSyxJQUFJOzs7OztpQ0FBTTt1QkFEakRMLElBQUksQ0FBQ0csRUFBRTs7Ozs2QkFFUDtpQkFDWixDQUFDOzs7OztvQkFDQTswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7O2tDQUNiLDhEQUFDRSxRQUFNO3dCQUFDQyxPQUFPLEVBQUVOLE9BQU87a0NBQUUsU0FBTzs7Ozs7NEJBQVM7a0NBQzFDLDhEQUFDSyxRQUFNO3dCQUFDQyxPQUFPLEVBQUVMLFVBQVU7a0NBQUUsWUFBVTs7Ozs7NEJBQVM7Ozs7OztvQkFDOUM7Ozs7OztZQUNKLENBQ1Q7Q0FFSjtHQXZDdUJuQixJQUFJOztRQUlYSiwwREFBTzs7O0FBSkFJLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dHMvYXV0aGNvbnRleHQnO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5pbXBvcnQgREIgZnJvbSAnQC91dGlscy9kYic7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdXNlcnMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhLm1hcCgpKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIiwge1xuICAgICAgICBhdXRvQ29ubmVjdDogZmFsc2VcbiAgICB9KTtcblxuICAgIHNvY2tldC5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29ubmVjdCA9ICgpID0+IHNvY2tldC5jb25uZWN0KCk7XG4gICAgY29uc3QgZGlzY29ubmVjdCA9ICgpID0+IHNvY2tldC5kaXNjb25uZWN0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGdyaWQgZ3JpZC1jb2xzLVszMDBweF9hdXRvXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTcwMCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAge3VzZXJzICYmIHVzZXJzLm1hcCh1c2VyID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUodXNlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT17XCJwLTMgYm9yZGVyLWIgdGV4dC1sZWZ0IFwiICsgKGFjdGl2ZT8uaWQgPT0gdXNlci5pZCA/ICdiZy16aW5jLTUwMCcgOiAnJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC16aW5jLTMwMFwiPnt1c2VyLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0fT5Db25uZWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkaXNjb25uZWN0fT5EaXNjb25uZWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsImlvIiwiREIiLCJheGlvcyIsIkhvbWUiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZXJzIiwic2V0VXNlcnMiLCJhdXRoIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIiwic29ja2V0IiwiYXV0b0Nvbm5lY3QiLCJvbiIsIm1zZyIsImNvbm5lY3QiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImgxIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});