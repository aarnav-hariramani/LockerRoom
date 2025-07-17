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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isHomeOpen, setIsHomeOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSportsOpen, setIsSportsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isProfileOpen, setIsProfileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white shadow-md py-4 px-8 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl font-bold\",\n                children: \"Stevens Flock\"\n            }, void 0, false, {\n                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-6 items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        onMouseEnter: ()=>setIsHomeOpen(true),\n                        onMouseLeave: ()=>setIsHomeOpen(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"hover:text-blue-600 text-blue-700\",\n                                children: \"Home ▾\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            isHomeOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bg-white border rounded shadow-lg top-full mt-2 py-2 w-40 z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: router.pathname === \"/\" ? \"#mission\" : \"/#mission\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Our Mission\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: router.pathname === \"/\" ? \"#contact\" : \"/#contact\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Contact Us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        onMouseEnter: ()=>setIsSportsOpen(true),\n                        onMouseLeave: ()=>setIsSportsOpen(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:text-blue-600\",\n                                children: \"Sports ▾\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            isSportsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bg-white border rounded shadow-lg top-full mt-2 py-2 w-40 z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/sports?type=basketball\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Basketball\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/sports?type=soccer\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Soccer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/sports?type=swimming\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Swimming\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        onMouseEnter: ()=>setIsProfileOpen(true),\n                        onMouseLeave: ()=>setIsProfileOpen(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"hover:text-blue-600\",\n                                children: \"Profile ▾\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            isProfileOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bg-white border rounded shadow-lg top-full mt-2 py-2 w-40 z-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/signup\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Create Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/login\",\n                                        className: \"block px-4 py-2 hover:bg-gray-100\",\n                                        children: \"Log In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aarnavhariramani/flock/components/Navbar.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQ1c7QUFFekIsU0FBU0k7SUFDdEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUVuRCxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUdwQyw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUdiLDhEQUFDQzt3QkFDQ0QsV0FBVTt3QkFDVkUsY0FBYyxJQUFNUixjQUFjO3dCQUNsQ1MsY0FBYyxJQUFNVCxjQUFjOzswQ0FFbEMsOERBQUNMLGtEQUFJQTtnQ0FBQ2UsTUFBSztnQ0FBSUosV0FBVTswQ0FBb0M7Ozs7Ozs0QkFHNURQLDRCQUNDLDhEQUFDUTtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUNDRCxNQUFNWixPQUFPYyxRQUFRLEtBQUssTUFBTSxhQUFhO3dDQUM3Q04sV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDSzt3Q0FDQ0QsTUFBTVosT0FBT2MsUUFBUSxLQUFLLE1BQU0sYUFBYTt3Q0FDN0NOLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FRUCw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLGNBQWMsSUFBTU4sZ0JBQWdCO3dCQUNwQ08sY0FBYyxJQUFNUCxnQkFBZ0I7OzBDQUVwQyw4REFBQ1c7Z0NBQU9QLFdBQVU7MENBQXNCOzs7Ozs7NEJBQ3ZDTCw4QkFDQyw4REFBQ007Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDWCxrREFBSUE7d0NBQUNlLE1BQUs7d0NBQTBCSixXQUFVO2tEQUFvQzs7Ozs7O2tEQUduRiw4REFBQ1gsa0RBQUlBO3dDQUFDZSxNQUFLO3dDQUFzQkosV0FBVTtrREFBb0M7Ozs7OztrREFHL0UsOERBQUNYLGtEQUFJQTt3Q0FBQ2UsTUFBSzt3Q0FBd0JKLFdBQVU7a0RBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUXZGLDhEQUFDQzt3QkFDQ0QsV0FBVTt3QkFDVkUsY0FBYyxJQUFNSixpQkFBaUI7d0JBQ3JDSyxjQUFjLElBQU1MLGlCQUFpQjs7MENBRXJDLDhEQUFDUztnQ0FBT1AsV0FBVTswQ0FBc0I7Ozs7Ozs0QkFDdkNILCtCQUNDLDhEQUFDSTtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNYLGtEQUFJQTt3Q0FBQ2UsTUFBSzt3Q0FBVUosV0FBVTtrREFBb0M7Ozs7OztrREFHbkUsOERBQUNYLGtEQUFJQTt3Q0FBQ2UsTUFBSzt3Q0FBU0osV0FBVTtrREFBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2NrLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzSG9tZU9wZW4sIHNldElzSG9tZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTcG9ydHNPcGVuLCBzZXRJc1Nwb3J0c09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNQcm9maWxlT3Blbiwgc2V0SXNQcm9maWxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCBweS00IHB4LTggZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICB7LyogTG9nbyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+U3RldmVucyBGbG9jazwvZGl2PlxuXG4gICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogSE9NRSBEcm9wZG93biAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG9tZU9wZW4odHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvbWVPcGVuKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ibHVlLTYwMCB0ZXh0LWJsdWUtNzAwXCI+XG4gICAgICAgICAgICBIb21lIOKWvlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7aXNIb21lT3BlbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkIHNoYWRvdy1sZyB0b3AtZnVsbCBtdC0yIHB5LTIgdy00MCB6LTEwXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBcIiNtaXNzaW9uXCIgOiBcIi8jbWlzc2lvblwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPdXIgTWlzc2lvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBcIiNjb250YWN0XCIgOiBcIi8jY29udGFjdFwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBTUE9SVFMgRHJvcGRvd24gKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1Nwb3J0c09wZW4odHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc1Nwb3J0c09wZW4oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+U3BvcnRzIOKWvjwvYnV0dG9uPlxuICAgICAgICAgIHtpc1Nwb3J0c09wZW4gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy13aGl0ZSBib3JkZXIgcm91bmRlZCBzaGFkb3ctbGcgdG9wLWZ1bGwgbXQtMiBweS0yIHctNDAgei0xMFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0cz90eXBlPWJhc2tldGJhbGxcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICBCYXNrZXRiYWxsXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9ydHM/dHlwZT1zb2NjZXJcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICBTb2NjZXJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0cz90eXBlPXN3aW1taW5nXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIGhvdmVyOmJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgU3dpbW1pbmdcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFBST0ZJTEUgRHJvcGRvd24gKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1Byb2ZpbGVPcGVuKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNQcm9maWxlT3BlbihmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmx1ZS02MDBcIj5Qcm9maWxlIOKWvjwvYnV0dG9uPlxuICAgICAgICAgIHtpc1Byb2ZpbGVPcGVuICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWQgc2hhZG93LWxnIHRvcC1mdWxsIG10LTIgcHktMiB3LTQwIHotMTBcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVJvdXRlciIsIk5hdmJhciIsInJvdXRlciIsImlzSG9tZU9wZW4iLCJzZXRJc0hvbWVPcGVuIiwiaXNTcG9ydHNPcGVuIiwic2V0SXNTcG9ydHNPcGVuIiwiaXNQcm9maWxlT3BlbiIsInNldElzUHJvZmlsZU9wZW4iLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJocmVmIiwiYSIsInBhdGhuYW1lIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/aarnavhariramani/flock/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/aarnavhariramani/flock/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDWDtBQUUvQixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFOzswQkFDRSw4REFBQ0gsMERBQU1BOzs7OzswQkFDUCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2NrLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();