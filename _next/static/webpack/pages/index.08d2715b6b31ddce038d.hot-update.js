webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "D:\\Workspace\\_ReactJS\\next-cv\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fab"]);
var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var personal = _ref.personal,
      skills = _ref.skills,
      experiences = _ref.experiences,
      educations = _ref.educations,
      achievements = _ref.achievements;
  var introRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var scrollDown = function scrollDown() {
    introRef.current.scrollToView();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, personal.fullname, " - CV")), __jsx("div", {
    className: "flex flex-col lg:flex-row h-full min-h-screen relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-4 lg:grid-rows-6 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row-span-1 col-span-12 lg:row-span-6 lg:col-span-4 w-full bg-gray-800 lg:bg-gray-900 justify-center pt-10 lg:p-10 lg:p-auto flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: personal.picture,
    alt: personal.fullname,
    className: "rounded-full object-cover h-40 w-40 lg:h-56 lg:w-56 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "row-span-1 col-span-12 lg:row-span-4 lg:col-span-8 bg-gray-800 px-10 lg:py-20 flex flex-1 flex-col justify-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text-4xl lg:text-5xl font-hairline lg:font-thin text-gray-500 text-center lg:text-left uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, personal.first_name), __jsx("p", {
    className: "text-5xl lg:text-6xl text-yellow-600 text-center lg:text-left uppercase font-bold -mt-6 lg:-mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, personal.last_name)), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full lg:w-3/4 lg:px-1 my-3 lg:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-sm lg:text-2xl font-hairline text-gray-400 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, personal.position)), __jsx("div", {
    className: "w-full lg:w-1/4 flex justify-center lg:justify-end space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, personal.social_media.map(function (val, index) {
    return __jsx("a", {
      href: val.url,
      key: index,
      target: "_blank",
      className: "bg-gray-600 hover:bg-gray-900 border border-gray-600 text-gray-400 hover:text-yellow-600 w-8 h-8 p-3 lg:w-10 lg:h-10 rounded inline-flex justify-center items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", val.icon],
      size: "lg",
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    }));
  })))), __jsx("div", {
    className: "row-span-2 col-span-12 lg:row-span-4 lg:col-span-8 bg-gray-800 p-10 flex flex-1 flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "border-t-2 border-gray-600 w-full flex flex-col lg:flex-row lg:space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, "Alamat"), __jsx("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, personal.address)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Telpon"), __jsx("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, personal.phone)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, "Website"), __jsx("a", {
    href: personal.website,
    target: "_blank",
    className: "text-gray-400 hover:text-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, personal.website)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, "E-Mail"), __jsx("a", {
    href: "mailto:" + personal.email,
    target: "_blank",
    className: "text-gray-400 hover:text-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, personal.email)))), __jsx("div", {
    className: "flex w-full justify-center items-center text-white bg-transparent absolute h-16 bottom-0 py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ["fas", "chevron-down"],
    size: "lg",
    className: "animate-bounce cursor-pointer",
    onClick: scrollDown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    ref: introRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "Intro"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Tak Kenal Maka Tak Sayang."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-gray-400 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, personal.intro)))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Kemampuan"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Apa Yang Bisa Aku Lakukan."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-wrap flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, skills.map(function (val, index) {
    return __jsx("div", {
      key: index,
      className: "min-h-16 text-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "w-10 inline-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "text-gray-100 text-lg font-bold inline-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, val.percentage, __jsx("small", {
      className: "font-thin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 101
      }
    }, "%"))), __jsx("span", {
      className: "inline-block text-lg font-bold text-gray-400 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }
    }, val.title), __jsx("div", {
      className: "w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "shadow rounded w-full bg-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bg-yellow-600 rounded text-xs leading-none py-1 my-2",
      style: {
        width: "".concat(val.percentage, "%")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 27
      }
    }))));
  })))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "Pengalaman"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Apa Saja Kontribusiku di Dunia Industri."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 py-10 pl-3 pr-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "border-t-2 border-gray-600 absolute w-5 top-0",
    style: {
      left: 6
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "border-r-2 border-gray-600 absolute h-full top-0",
    style: {
      left: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "list-none text-white m-0 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, experiences.map(function (val, index) {
    return __jsx("li", {
      className: "mb-5",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex items-center mb-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bg-yellow-600 border-8 border-gray-800 rounded-full z-10 h-8 w-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "block ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 27
      }
    }, __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, val.date), __jsx("h3", {
      className: "text-md lg:text-xl font-bold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }, val.company), __jsx("h4", {
      className: "text-md text-gray-400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, val.position), __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, val.address))), __jsx("div", {
      className: "ml-12 lg:ml-0 text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }, val.description)));
  })), __jsx("div", {
    className: "border-t-2 border-gray-600 absolute w-5 bottom-0",
    style: {
      left: 6
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "Pendidikan"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "Dimana Aku Belajar."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 py-10 pl-3 pr-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "border-t-2 border-gray-600 absolute w-5 top-0",
    style: {
      left: 6
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "border-r-2 border-gray-600 absolute h-full top-0",
    style: {
      left: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "list-none text-white m-0 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, educations.map(function (val, index) {
    return __jsx("li", {
      className: "mb-5",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex items-center mb-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bg-yellow-600 border-8 border-gray-800 rounded-full z-10 h-8 w-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "block ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 27
      }
    }, __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 29
      }
    }, val.date), __jsx("h3", {
      className: "text-md lg:text-xl font-bold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, val.school), __jsx("h4", {
      className: "text-md text-gray-400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }, val.study), __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    }, "B", val.address))), __jsx("div", {
      className: "ml-12 lg:ml-0 text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    })));
  })), __jsx("div", {
    className: "border-t-2 border-gray-600 absolute w-5 bottom-0",
    style: {
      left: 6
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, "Prestasi"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, "Penghargaan Yang Berhasil Kuraih."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex grid grid-cols-1 lg:grid-cols-3 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, achievements.map(function (val, index) {
    return __jsx("div", {
      className: "w-full min-h-16",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 19
      }
    }, __jsx("hr", {
      className: "py-1 mb-2 w-1/4 border-0 bg-yellow-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 21
      }
    }), __jsx("h3", {
      className: "text-md lg:text-lg font-semibold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, val.title), __jsx("p", {
      className: "text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }, val.description));
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, "Portofolio"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, "Sistem Yang Sudah kubangun."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex grid grid-cols-1 lg:grid-cols-3 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full min-h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, __jsx("hr", {
    className: "py-1 mb-2 w-1/4 border-0 bg-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "text-md lg:text-lg font-semibold uppercase text-gray-300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, "WIP"), __jsx("p", {
    className: "text-sm lg:text-md text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, "Coming Soon. . . . :)")))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-1 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bg-black border-t border-b border-gray-500 lg:border-0 px-10 py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, "Dibuat Dengan NextJS dan Tailwind \xA9 Hafid Riyadi - Bogor"))))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJmYXIiLCJmYWIiLCJIb21lIiwicGVyc29uYWwiLCJza2lsbHMiLCJleHBlcmllbmNlcyIsImVkdWNhdGlvbnMiLCJhY2hpZXZlbWVudHMiLCJpbnRyb1JlZiIsImNyZWF0ZVJlZiIsInNjcm9sbERvd24iLCJjdXJyZW50Iiwic2Nyb2xsVG9WaWV3IiwiZnVsbG5hbWUiLCJwaWN0dXJlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBvc2l0aW9uIiwic29jaWFsX21lZGlhIiwibWFwIiwidmFsIiwiaW5kZXgiLCJ1cmwiLCJpY29uIiwiYWRkcmVzcyIsInBob25lIiwid2Vic2l0ZSIsImVtYWlsIiwiaW50cm8iLCJwZXJjZW50YWdlIiwidGl0bGUiLCJ3aWR0aCIsImxlZnQiLCJkYXRlIiwiY29tcGFueSIsImRlc2NyaXB0aW9uIiwic2Nob29sIiwic3R1ZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMscUVBQVosRUFBaUJDLHVFQUFqQixFQUFzQkMsc0VBQXRCOztBQUVlLFNBQVNDLElBQVQsT0FBMkU7QUFBQTs7QUFBQSxNQUEzREMsUUFBMkQsUUFBM0RBLFFBQTJEO0FBQUEsTUFBakRDLE1BQWlELFFBQWpEQSxNQUFpRDtBQUFBLE1BQXpDQyxXQUF5QyxRQUF6Q0EsV0FBeUM7QUFBQSxNQUE1QkMsVUFBNEIsUUFBNUJBLFVBQTRCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUV4RixNQUFNQyxRQUFRLGdCQUFHQyx1REFBUyxFQUExQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRixZQUFRLENBQUNHLE9BQVQsQ0FBaUJDLFlBQWpCO0FB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QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsMERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixDQURGLENBREYsQ0FQRixDQURGLENBL0xGLEVBb05FO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBREYsQ0FERixDQURGLENBREYsQ0FwTkYsQ0FESjtBQWdPRDtLQXZPdUJqQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4ZDI3MTViNmIzMWRkY2UwMzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5saWJyYXJ5LmFkZChmYXMsIGZhciwgZmFiKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcGVyc29uYWwsIHNraWxscywgZXhwZXJpZW5jZXMsIGVkdWNhdGlvbnMsIGFjaGlldmVtZW50cyB9KSB7XG5cbiAgY29uc3QgaW50cm9SZWYgPSBjcmVhdGVSZWYoKTtcbiAgY29uc3Qgc2Nyb2xsRG93biA9ICgpID0+IHtcbiAgICBpbnRyb1JlZi5jdXJyZW50LnNjcm9sbFRvVmlldygpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cGVyc29uYWwuZnVsbG5hbWV9IC0gQ1Y8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBoLWZ1bGwgbWluLWgtc2NyZWVuIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtcm93cy00IGxnOmdyaWQtcm93cy02IGdyaWQtY29scy0xMiBnYXAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0xIGNvbC1zcGFuLTEyIGxnOnJvdy1zcGFuLTYgbGc6Y29sLXNwYW4tNCB3LWZ1bGwgYmctZ3JheS04MDAgbGc6YmctZ3JheS05MDAganVzdGlmeS1jZW50ZXIgcHQtMTAgbGc6cC0xMCBsZzpwLWF1dG8gZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3BlcnNvbmFsLnBpY3R1cmV9IGFsdD17cGVyc29uYWwuZnVsbG5hbWV9IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgaC00MCB3LTQwIGxnOmgtNTYgbGc6dy01NiBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMSBjb2wtc3Bhbi0xMiBsZzpyb3ctc3Bhbi00IGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcHgtMTAgbGc6cHktMjAgZmxleCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1oYWlybGluZSBsZzpmb250LXRoaW4gdGV4dC1ncmF5LTUwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgdXBwZXJjYXNlXCI+e3BlcnNvbmFsLmZpcnN0X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIGxnOnRleHQtNnhsIHRleHQteWVsbG93LTYwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgdXBwZXJjYXNlIGZvbnQtYm9sZCAtbXQtNiBsZzotbXQtMTBcIj57cGVyc29uYWwubGFzdF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMy80IGxnOnB4LTEgbXktMyBsZzpteS0wXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtMnhsIGZvbnQtaGFpcmxpbmUgdGV4dC1ncmF5LTQwMCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj57cGVyc29uYWwucG9zaXRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS80IGZsZXgganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1lbmQgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICB7cGVyc29uYWwuc29jaWFsX21lZGlhLm1hcCgodmFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWwudXJsfSBrZXk9e2luZGV4fSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTkwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC15ZWxsb3ctNjAwIHctOCBoLTggcC0zIGxnOnctMTAgbGc6aC0xMCByb3VuZGVkIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFiXCIsIHZhbC5pY29uXX0gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBjb2wtc3Bhbi0xMiBsZzpyb3ctc3Bhbi00IGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcC0xMCBmbGV4IGZsZXgtMSBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktNjAwIHctZnVsbCBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOnNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS80IG1pbi1oLTE2IG15LTMgbGc6bXktNSB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZFwiPkFsYW1hdDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3BlcnNvbmFsLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS80IG1pbi1oLTE2IG15LTMgbGc6bXktNSB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZFwiPlRlbHBvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+e3BlcnNvbmFsLnBob25lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvNCBtaW4taC0xNiBteS0zIGxnOm15LTUgdGV4dC1jZW50ZXIgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwMCBmb250LWJvbGRcIj5XZWJzaXRlPC9oND5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BlcnNvbmFsLndlYnNpdGV9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC15ZWxsb3ctNjAwXCI+e3BlcnNvbmFsLndlYnNpdGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS80IG1pbi1oLTE2IG15LTMgbGc6bXktNSB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZFwiPkUtTWFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIm1haWx0bzpcIiArIHBlcnNvbmFsLmVtYWlsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQteWVsbG93LTYwMFwiPntwZXJzb25hbC5lbWFpbH08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGJnLXRyYW5zcGFyZW50IGFic29sdXRlIGgtMTYgYm90dG9tLTAgcHktNVwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1tcImZhc1wiLCBcImNoZXZyb24tZG93blwiXX0gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYW5pbWF0ZS1ib3VuY2UgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtzY3JvbGxEb3dufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIiByZWY9e2ludHJvUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgYmctZ3JheS05MDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHB4LTEwIHB5LTUgbGc6cC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5JbnRybzwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXRoaW5cIj5UYWsgS2VuYWwgTWFrYSBUYWsgU2F5YW5nLjwvcD5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBwLTEwXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgdGV4dC1qdXN0aWZ5XCI+e3BlcnNvbmFsLmludHJvfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtcm93cy0xIGdyaWQtY29scy0xMiBnYXAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IGJnLWdyYXktOTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCBsZzpib3JkZXItMCBweC0xMCBweS01IGxnOnAtMTBcIj5cbiAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJsZzp0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+S2VtYW1wdWFuPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPkFwYSBZYW5nIEJpc2EgQWt1IExha3VrYW4uPC9wPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi04IGJnLWdyYXktODAwIHAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAge3NraWxscy5tYXAoKHZhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtaW4taC0xNiB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIHRleHQtbGcgZm9udC1ib2xkIGlubGluZS1ibG9ja1wiPnt2YWwucGVyY2VudGFnZX08c21hbGwgY2xhc3NOYW1lPVwiZm9udC10aGluXCI+JTwvc21hbGw+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZVwiPnt2YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyByb3VuZGVkIHctZnVsbCBiZy1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy02MDAgcm91bmRlZCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIG15LTJcIiBzdHlsZT17e3dpZHRoOiBgJHt2YWwucGVyY2VudGFnZX0lYH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgYmctZ3JheS05MDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHB4LTEwIHB5LTUgbGc6cC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5QZW5nYWxhbWFuPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPkFwYSBTYWphIEtvbnRyaWJ1c2lrdSBkaSBEdW5pYSBJbmR1c3RyaS48L3A+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcHktMTAgcGwtMyBwci01IGxnOnAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktNjAwIGFic29sdXRlIHctNSB0b3AtMFwiIHN0eWxlPXt7bGVmdDogNn19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItMiBib3JkZXItZ3JheS02MDAgYWJzb2x1dGUgaC1mdWxsIHRvcC0wXCIgc3R5bGU9e3tsZWZ0OiAxNX19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBtLTAgcC0wXCI+XG4gICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZXMubWFwKCh2YWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi01XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC0yIGxnOmdhcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNjAwIGJvcmRlci04IGJvcmRlci1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgei0xMCBoLTggdy04XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e3ZhbC5kYXRlfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbWQgbGc6dGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS0zMDBcIj57dmFsLmNvbXBhbnl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNDAwXCI+e3ZhbC5wb3NpdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e3ZhbC5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEyIGxnOm1sLTAgdGV4dC1zbSBsZzp0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktNjAwIGFic29sdXRlIHctNSBib3R0b20tMFwiIHN0eWxlPXt7bGVmdDogNn19PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtcm93cy0xIGdyaWQtY29scy0xMiBnYXAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IGJnLWdyYXktOTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCBsZzpib3JkZXItMCBweC0xMCBweS01IGxnOnAtMTBcIj5cbiAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJsZzp0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+UGVuZGlkaWthbjwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXRoaW5cIj5EaW1hbmEgQWt1IEJlbGFqYXIuPC9wPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi04IGJnLWdyYXktODAwIHB5LTEwIHBsLTMgcHItNSBsZzpwLTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdC0yIGJvcmRlci1ncmF5LTYwMCBhYnNvbHV0ZSB3LTUgdG9wLTBcIiBzdHlsZT17e2xlZnQ6IDZ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yLTIgYm9yZGVyLWdyYXktNjAwIGFic29sdXRlIGgtZnVsbCB0b3AtMFwiIHN0eWxlPXt7bGVmdDogMTV9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIHRleHQtd2hpdGUgbS0wIHAtMFwiPlxuICAgICAgICAgICAgICAgICAge2VkdWNhdGlvbnMubWFwKCh2YWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi01XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC0yIGxnOmdhcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNjAwIGJvcmRlci04IGJvcmRlci1ncmF5LTgwMCByb3VuZGVkLWZ1bGwgei0xMCBoLTggdy04XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+e3ZhbC5kYXRlfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbWQgbGc6dGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS0zMDBcIj57dmFsLnNjaG9vbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS00MDBcIj57dmFsLnN0dWR5fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5Ce3ZhbC5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEyIGxnOm1sLTAgdGV4dC1zbSBsZzp0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdC0yIGJvcmRlci1ncmF5LTYwMCBhYnNvbHV0ZSB3LTUgYm90dG9tLTBcIiBzdHlsZT17e2xlZnQ6IDZ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ3JpZCBncmlkLXJvd3MtMSBncmlkLWNvbHMtMTIgZ2FwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBiZy1ncmF5LTkwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgbGc6Ym9yZGVyLTAgcC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5QcmVzdGFzaTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXRoaW5cIj5QZW5naGFyZ2FhbiBZYW5nIEJlcmhhc2lsIEt1cmFpaC48L3A+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIHthY2hpZXZlbWVudHMubWFwKCh2YWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC0xNlwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHktMSBtYi0yIHctMS80IGJvcmRlci0wIGJnLXllbGxvdy02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZCBsZzp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS0zMDBcIj57dmFsLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgYmctZ3JheS05MDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHAtMTBcIj5cbiAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJsZzp0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTEwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+UG9ydG9mb2xpbzwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBmb250LXRoaW5cIj5TaXN0ZW0gWWFuZyBTdWRhaCBrdWJhbmd1bi48L3A+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLTE2XCI+XG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwicHktMSBtYi0yIHctMS80IGJvcmRlci0wIGJnLXllbGxvdy02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbWQgbGc6dGV4dC1sZyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktMzAwXCI+V0lQPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbWluZyBTb29uLiAuIC4gLiA6KVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtcm93cy0xIGdyaWQtY29scy0xIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCBsZzpib3JkZXItMCBweC0xMCBweS01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPkRpYnVhdCBEZW5nYW4gTmV4dEpTIGRhbiBUYWlsd2luZCAmY29weTsgSGFmaWQgUml5YWRpIC0gQm9nb3I8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5TZXJ2ZXJVUkx9RGF0YVByb2ZpbGUuanNvbmApO1xuICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLi4ucHJvZmlsZXNcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=