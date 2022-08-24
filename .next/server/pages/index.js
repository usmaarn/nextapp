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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./contexts/authcontext.jsx":
/*!**********************************!*\
  !*** ./contexts/authcontext.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ \"./utils/helper.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _utils_helper__WEBPACK_IMPORTED_MODULE_3__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _utils_helper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"sessionId\");\n        token ? setUser((0,_utils_helper__WEBPACK_IMPORTED_MODULE_3__.unhash)(token)) : null;\n    }, []);\n    function logout() {\n        location.href = \"/api/logout\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/var/www/html/tut/socket/contexts/authcontext.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\nfunction useAuth() {\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n    if (!ctx || typeof ctx == \"undefined\") {\n        throw new Error(\"useAth must me called within an AuthProvider\");\n    }\n    return ctx;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoY29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUN1QztBQUM3QjtBQUd6QyxNQUFNTSxXQUFXLGlCQUFHTCxvREFBYSxFQUFFO0FBRTVCLFNBQVNNLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUV2QyxNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJTiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV0Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTVEsS0FBSyxHQUFHWCxxREFBVyxDQUFDLFdBQVcsQ0FBQztRQUN0Q1csS0FBSyxHQUFHRCxPQUFPLENBQUNMLHFEQUFNLENBQUNNLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3pDLEVBQUUsRUFBRSxDQUFDO0lBRU4sU0FBU0UsTUFBTSxHQUFHO1FBQ2RDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLGFBQWEsQ0FBQztLQUNqQztJQUVELHFCQUNJLDhEQUFDVCxXQUFXLENBQUNVLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVSLElBQUk7WUFBRUksTUFBTTtTQUFFO2tCQUN4Q0wsUUFBUTs7Ozs7WUFDVSxDQUMxQjtDQUNKO0FBRU0sU0FBU1UsT0FBTyxHQUFHO0lBQ3RCLE1BQU1DLEdBQUcsR0FBR2pCLGlEQUFVLENBQUNJLFdBQVcsQ0FBQztJQUNuQyxJQUFJLENBQUNhLEdBQUcsSUFBSSxPQUFPQSxHQUFHLElBQUksV0FBVyxFQUFFO1FBQ25DLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO0tBQ2xFO0lBQ0QsT0FBT0QsR0FBRyxDQUFDO0NBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bWFrLy4vY29udGV4dHMvYXV0aGNvbnRleHQuanN4Pzk4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1bmhhc2ggfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwic2Vzc2lvbklkXCIpO1xuICAgICAgICB0b2tlbiA/IHNldFVzZXIodW5oYXNoKHRva2VuKSkgOiBudWxsO1xuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy9hcGkvbG9nb3V0JztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9nb3V0IH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gICAgaWYgKCFjdHggfHwgdHlwZW9mIGN0eCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF0aCBtdXN0IG1lIGNhbGxlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJylcbiAgICB9XG4gICAgcmV0dXJuIGN0eDtcbn0iXSwibmFtZXMiOlsiY29va2llcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1bmhhc2giLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsImdldCIsImxvZ291dCIsImxvY2F0aW9uIiwiaHJlZiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY3R4IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/authcontext.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/authcontext */ \"./contexts/authcontext.jsx\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_3__]);\n([_contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home(props) {\n    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const auth = (0,_contexts_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/users\").then((res)=>setUsers(res.data));\n    }, []);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:5000\", {\n        autoConnect: false\n    });\n    socket.on(\"message\", (msg)=>{\n        console.log(msg);\n    });\n    const connect = ()=>socket.connect();\n    const disconnect = ()=>socket.disconnect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen grid grid-cols-[300px_auto]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-700 flex flex-col\",\n                children: users && users.filter((user)=>user.id !== auth.user.id).map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setActive(user),\n                        className: \"p-3 border-b text-left \" + (active?.id == user.id ? \"bg-zinc-500\" : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl text-zinc-300\",\n                            children: user.name\n                        }, void 0, false, {\n                            fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, this)\n                    }, user.id, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: connect,\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: disconnect,\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/html/tut/socket/pages/index.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDSztBQUNaO0FBQ1g7QUFHWCxTQUFTSyxJQUFJLENBQUNDLEtBQUssRUFBRTtJQUVoQyxNQUFNLEtBQUNDLE1BQU0sTUFBRUMsU0FBUyxNQUFJUCwrQ0FBUSxFQUFFO0lBQ3RDLE1BQU0sS0FBQ1EsS0FBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLEVBQUU7SUFDcEMsTUFBTVUsSUFBSSxHQUFHVCw4REFBTyxFQUFFO0lBRXRCRixnREFBUyxDQUFDLElBQU07UUFDWkksZ0RBQVMsQ0FBQyxZQUFZLENBQUMsQ0FDbEJTLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJSixRQUFRLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR1AsTUFBTUMsTUFBTSxHQUFHYixvREFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZDYyxXQUFXLEVBQUUsS0FBSztLQUNyQixDQUFDO0lBRUZELE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDQyxHQUFHLEdBQUs7UUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztLQUNwQixDQUFDO0lBRUYsTUFBTUcsT0FBTyxHQUFHLElBQU1OLE1BQU0sQ0FBQ00sT0FBTyxFQUFFO0lBQ3RDLE1BQU1DLFVBQVUsR0FBRyxJQUFNUCxNQUFNLENBQUNPLFVBQVUsRUFBRTtJQUU1QyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzswQkFDakQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7MEJBQ3JDaEIsS0FBSyxJQUFJQSxLQUFLLENBQUNpQixNQUFNLENBQUNDLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDQyxFQUFFLEtBQUlqQixJQUFJLENBQUNnQixJQUFJLENBQUNDLEVBQUUsQ0FBQyxDQUFDQyxHQUFHLENBQUNGLENBQUFBLElBQUksaUJBQzVELDhEQUFDRyxRQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTXZCLFNBQVMsQ0FBQ21CLElBQUksQ0FBQzt3QkFDcEJGLFNBQVMsRUFBRSx5QkFBeUIsR0FBRyxDQUFDbEIsTUFBTSxFQUFFcUIsRUFBRSxJQUFJRCxJQUFJLENBQUNDLEVBQUUsR0FBRyxhQUFhLEdBQUcsRUFBRSxDQUFDO2tDQUNqRyw0RUFBQ0ksSUFBRTs0QkFBQ1AsU0FBUyxFQUFDLHVCQUF1QjtzQ0FBRUUsSUFBSSxDQUFDTSxJQUFJOzs7OztnQ0FBTTt1QkFEakROLElBQUksQ0FBQ0MsRUFBRTs7Ozs0QkFFUCxDQUNYOzs7OztvQkFDQTswQkFDTiw4REFBQ0osS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7O2tDQUNiLDhEQUFDSyxRQUFNO3dCQUFDQyxPQUFPLEVBQUVULE9BQU87a0NBQUUsU0FBTzs7Ozs7NEJBQVM7a0NBQzFDLDhEQUFDUSxRQUFNO3dCQUFDQyxPQUFPLEVBQUVSLFVBQVU7a0NBQUUsWUFBVTs7Ozs7NEJBQVM7Ozs7OztvQkFDOUM7Ozs7OztZQUNKLENBQ1Q7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3VtYWsvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9jb250ZXh0cy9hdXRoY29udGV4dCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VycycpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gc2V0VXNlcnMocmVzLmRhdGEpKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsIHtcbiAgICAgICAgYXV0b0Nvbm5lY3Q6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiBzb2NrZXQuY29ubmVjdCgpO1xuICAgIGNvbnN0IGRpc2Nvbm5lY3QgPSAoKSA9PiBzb2NrZXQuZGlzY29ubmVjdCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBncmlkIGdyaWQtY29scy1bMzAwcHhfYXV0b11cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctemluYy03MDAgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIHt1c2VycyAmJiB1c2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLmlkIT09IGF1dGgudXNlci5pZCkubWFwKHVzZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXNlci5pZH0gY2xhc3NOYW1lPXtcInAtMyBib3JkZXItYiB0ZXh0LWxlZnQgXCIgKyAoYWN0aXZlPy5pZCA9PSB1c2VyLmlkID8gJ2JnLXppbmMtNTAwJyA6ICcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXppbmMtMzAwXCI+e3VzZXIubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3R9PkNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rpc2Nvbm5lY3R9PkRpc2Nvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiaW8iLCJheGlvcyIsIkhvbWUiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZXJzIiwic2V0VXNlcnMiLCJhdXRoIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzb2NrZXQiLCJhdXRvQ29ubmVjdCIsIm9uIiwibXNnIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJkaXNjb25uZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwidXNlciIsImlkIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./utils/helper.js":
/*!*************************!*\
  !*** ./utils/helper.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compare\": () => (/* binding */ compare),\n/* harmony export */   \"hash\": () => (/* binding */ hash),\n/* harmony export */   \"unhash\": () => (/* binding */ unhash),\n/* harmony export */   \"uuid\": () => (/* binding */ uuid)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);\nuuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\nfunction hash(data, secret = \"\") {\n    const string = JSON.stringify(data);\n    return CryptoJS.AES.encrypt(string, secret).toString();\n}\nfunction unhash(data, secret = \"\") {\n    var bytes = CryptoJS.AES.decrypt(data, secret);\n    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));\n}\nfunction compare(hash, string, secret = \"\") {\n    hash = unhash(hash, secret);\n    return hash === string;\n}\nfunction uuid() {\n    return (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9oZWxwZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDeEIsSUFBSUMsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDRCQUFXLENBQUM7QUFFNUIsU0FBU0MsSUFBSSxDQUFDQyxJQUFJLEVBQUVDLE1BQU0sR0FBQyxFQUFFLEVBQUU7SUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDO0lBQ25DLE9BQU9ILFFBQVEsQ0FBQ1EsR0FBRyxDQUFDQyxPQUFPLENBQUNKLE1BQU0sRUFBRUQsTUFBTSxDQUFDLENBQUNNLFFBQVEsRUFBRSxDQUFDO0NBQzFEO0FBRU0sU0FBU0MsTUFBTSxDQUFDUixJQUFJLEVBQUVDLE1BQU0sR0FBQyxFQUFFLEVBQUM7SUFDbkMsSUFBSVEsS0FBSyxHQUFJWixRQUFRLENBQUNRLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDVixJQUFJLEVBQUVDLE1BQU0sQ0FBQztJQUMvQyxPQUFPRSxJQUFJLENBQUNRLEtBQUssQ0FBQ0YsS0FBSyxDQUFDRixRQUFRLENBQUNWLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ3hEO0FBRU0sU0FBU0MsT0FBTyxDQUFDZixJQUFJLEVBQUVHLE1BQU0sRUFBRUQsTUFBTSxHQUFDLEVBQUUsRUFBQztJQUM1Q0YsSUFBSSxHQUFHUyxNQUFNLENBQUNULElBQUksRUFBRUUsTUFBTSxDQUFDLENBQUM7SUFDNUIsT0FBT0YsSUFBSSxLQUFLRyxNQUFNLENBQUM7Q0FDMUI7QUFFTSxTQUFTYSxJQUFJLEdBQUc7SUFDbkIsT0FBT25CLHdDQUFFLEVBQUUsQ0FBQztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW1hay8uL3V0aWxzL2hlbHBlci5qcz9mN2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7djR9IGZyb20gJ3V1aWQnO1xudmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2goZGF0YSwgc2VjcmV0PScnKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgcmV0dXJuIENyeXB0b0pTLkFFUy5lbmNyeXB0KHN0cmluZywgc2VjcmV0KS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5oYXNoKGRhdGEsIHNlY3JldD0nJyl7XG4gICAgdmFyIGJ5dGVzICA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGRhdGEsIHNlY3JldCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoaGFzaCwgc3RyaW5nLCBzZWNyZXQ9Jycpe1xuICAgIGhhc2ggPSB1bmhhc2goaGFzaCwgc2VjcmV0KTtcbiAgICByZXR1cm4gaGFzaCA9PT0gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICByZXR1cm4gdjQoKTtcbn0iXSwibmFtZXMiOlsidjQiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJoYXNoIiwiZGF0YSIsInNlY3JldCIsInN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJBRVMiLCJlbmNyeXB0IiwidG9TdHJpbmciLCJ1bmhhc2giLCJieXRlcyIsImRlY3J5cHQiLCJwYXJzZSIsImVuYyIsIlV0ZjgiLCJjb21wYXJlIiwidXVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/helper.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();