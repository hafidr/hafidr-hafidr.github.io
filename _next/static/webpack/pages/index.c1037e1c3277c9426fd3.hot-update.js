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
    introRef.scrollIntoView();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, personal.fullname, " - CV")), __jsx("div", {
    className: "flex flex-col lg:flex-row h-full min-h-screen relative pb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-4 lg:grid-rows-6 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row-span-1 col-span-12 lg:row-span-6 lg:col-span-4 w-full bg-gray-800 lg:bg-gray-900 justify-center pt-10 lg:p-10 lg:p-auto flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: personal.picture,
    alt: personal.fullname,
    className: "rounded-full object-cover h-40 w-40 lg:h-56 lg:w-56 bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "row-span-1 col-span-12 lg:row-span-4 lg:col-span-8 bg-gray-800 px-10 lg:py-20 flex flex-1 flex-col justify-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text-4xl lg:text-5xl font-hairline lg:font-thin text-gray-500 text-center lg:text-left uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, personal.first_name), __jsx("p", {
    className: "text-5xl lg:text-6xl text-yellow-600 text-center lg:text-left uppercase font-bold -mt-6 lg:-mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, personal.last_name)), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full lg:w-3/4 lg:px-1 my-3 lg:my-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "text-sm lg:text-2xl font-hairline text-gray-400 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, personal.position)), __jsx("div", {
    className: "w-full lg:w-1/4 flex justify-center lg:justify-end space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", val.icon],
      size: "lg",
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }));
  })))), __jsx("div", {
    className: "row-span-2 col-span-12 lg:row-span-4 lg:col-span-8 bg-gray-800 p-10 flex flex-1 flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "border-t-2 border-gray-600 w-full flex flex-col lg:flex-row lg:space-x-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "Alamat"), __jsx("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, personal.address)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "Telpon"), __jsx("span", {
    className: "text-gray-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, personal.phone)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, "Website"), __jsx("a", {
    href: personal.website,
    target: "_blank",
    className: "text-gray-400 hover:text-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, personal.website)), __jsx("div", {
    className: "w-full lg:w-1/4 min-h-16 my-3 lg:my-5 text-center lg:text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "text-gray-100 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "E-Mail"), __jsx("a", {
    href: "mailto:" + personal.email,
    target: "_blank",
    className: "text-gray-400 hover:text-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, personal.email)))), __jsx("div", {
    className: "flex w-full justify-center items-center text-white bg-transparent absolute h-16 bottom-0 py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    ref: introRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Intro"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Tak Kenal Maka Tak Sayang."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-gray-400 text-justify",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, personal.intro)))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Kemampuan"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Apa Yang Bisa Aku Lakukan."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex flex-wrap flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, skills.map(function (val, index) {
    return __jsx("div", {
      key: index,
      className: "min-h-16 text-left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "w-10 inline-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "text-gray-100 text-lg font-bold inline-block",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, val.percentage, __jsx("small", {
      className: "font-thin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 101
      }
    }, "%"))), __jsx("span", {
      className: "inline-block text-lg font-bold text-gray-400 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, val.title), __jsx("div", {
      className: "w-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "shadow rounded w-full bg-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 103,
        columnNumber: 27
      }
    }))));
  })))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "Pengalaman"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Apa Saja Kontribusiku di Dunia Industri."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 py-10 pl-3 pr-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "list-none text-white m-0 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, experiences.map(function (val, index) {
    return __jsx("li", {
      className: "mb-5",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex items-center mb-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bg-yellow-600 border-8 border-gray-800 rounded-full z-10 h-8 w-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "block ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }, val.date), __jsx("h3", {
      className: "text-md lg:text-xl font-bold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, val.company), __jsx("h4", {
      className: "text-md text-gray-400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, val.position), __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 29
      }
    }, val.address))), __jsx("div", {
      className: "ml-12 lg:ml-0 text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
      lineNumber: 145,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 px-10 py-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "Pendidikan"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Dimana Aku Belajar."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 py-10 pl-3 pr-5 lg:p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "list-none text-white m-0 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, educations.map(function (val, index) {
    return __jsx("li", {
      className: "mb-5",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "flex flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "flex items-center mb-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "bg-yellow-600 border-8 border-gray-800 rounded-full z-10 h-8 w-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "block ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 27
      }
    }, __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, val.date), __jsx("h3", {
      className: "text-md lg:text-xl font-bold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }, val.school), __jsx("h4", {
      className: "text-md text-gray-400",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    }, val.study), __jsx("small", {
      className: "text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 29
      }
    }, "B", val.address))), __jsx("div", {
      className: "ml-12 lg:ml-0 text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
      lineNumber: 182,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, "Prestasi"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, "Penghargaan Yang Berhasil Kuraih."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex grid grid-cols-1 lg:grid-cols-3 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, achievements.map(function (val, index) {
    return __jsx("div", {
      className: "w-full min-h-16",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 19
      }
    }, __jsx("hr", {
      className: "py-1 mb-2 w-1/4 border-0 bg-yellow-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }), __jsx("h3", {
      className: "text-md lg:text-lg font-semibold uppercase text-gray-300",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }, val.title), __jsx("p", {
      className: "text-sm lg:text-md text-gray-500",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, val.description));
  }))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-12 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-span-12 lg:col-span-4 bg-gray-900 border-t border-b border-gray-500 lg:border-0 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "lg:text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "text-lg text-gray-100 font-bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, "Portofolio"), __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, "Sistem Yang Sudah kubangun."))), __jsx("div", {
    className: "col-span-12 lg:col-span-8 bg-gray-800 p-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex grid grid-cols-1 lg:grid-cols-3 gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "w-full min-h-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("hr", {
    className: "py-1 mb-2 w-1/4 border-0 bg-yellow-600",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "text-md lg:text-lg font-semibold uppercase text-gray-300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, "WIP"), __jsx("p", {
    className: "text-sm lg:text-md text-gray-500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, "Coming Soon. . . . :)")))))), __jsx("div", {
    className: "flex flex-col lg:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-1 grid grid-rows-1 grid-cols-1 gap-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bg-black border-t border-b border-gray-500 lg:border-0 px-10 py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text-gray-400 font-thin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJmYXIiLCJmYWIiLCJIb21lIiwicGVyc29uYWwiLCJza2lsbHMiLCJleHBlcmllbmNlcyIsImVkdWNhdGlvbnMiLCJhY2hpZXZlbWVudHMiLCJpbnRyb1JlZiIsImNyZWF0ZVJlZiIsInNjcm9sbERvd24iLCJzY3JvbGxJbnRvVmlldyIsImZ1bGxuYW1lIiwicGljdHVyZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwb3NpdGlvbiIsInNvY2lhbF9tZWRpYSIsIm1hcCIsInZhbCIsImluZGV4IiwidXJsIiwiaWNvbiIsImFkZHJlc3MiLCJwaG9uZSIsIndlYnNpdGUiLCJlbWFpbCIsImludHJvIiwicGVyY2VudGFnZSIsInRpdGxlIiwid2lkdGgiLCJsZWZ0IiwiZGF0ZSIsImNvbXBhbnkiLCJkZXNjcmlwdGlvbiIsInNjaG9vbCIsInN0dWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSx5RUFBTyxDQUFDQyxHQUFSLENBQVlDLHFFQUFaLEVBQWlCQyx1RUFBakIsRUFBc0JDLHNFQUF0Qjs7QUFFZSxTQUFTQyxJQUFULE9BQTJFO0FBQUE7O0FBQUEsTUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLE1BQWpEQyxNQUFpRCxRQUFqREEsTUFBaUQ7QUFBQSxNQUF6Q0MsV0FBeUMsUUFBekNBLFdBQXlDO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFFeEYsTUFBTUMsUUFBUSxnQkFBR0MsdURBQVMsRUFBMUI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkYsWUFBUSxDQUFDRyxjQUFUO0FBQ0QsR0FGRDs7QUFJQSxTQUNJLG1F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QUFTLEVBQUMsMERBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsa0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixDQURGLENBREYsQ0FQRixDQURGLENBL0xGLEVBb05FO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBREYsQ0FERixDQURGLENBREYsQ0FwTkYsQ0FESjtBQWdPRDtLQXhPdUJoQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxMDM3ZTFjMzI3N2M5NDI2ZmQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5saWJyYXJ5LmFkZChmYXMsIGZhciwgZmFiKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcGVyc29uYWwsIHNraWxscywgZXhwZXJpZW5jZXMsIGVkdWNhdGlvbnMsIGFjaGlldmVtZW50cyB9KSB7XG5cbiAgY29uc3QgaW50cm9SZWYgPSBjcmVhdGVSZWYoKTtcblxuICBjb25zdCBzY3JvbGxEb3duID0gKCkgPT4ge1xuICAgIGludHJvUmVmLnNjcm9sbEludG9WaWV3KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntwZXJzb25hbC5mdWxsbmFtZX0gLSBDVjwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGgtZnVsbCBtaW4taC1zY3JlZW4gcmVsYXRpdmUgcGItMjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTQgbGc6Z3JpZC1yb3dzLTYgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTEgY29sLXNwYW4tMTIgbGc6cm93LXNwYW4tNiBsZzpjb2wtc3Bhbi00IHctZnVsbCBiZy1ncmF5LTgwMCBsZzpiZy1ncmF5LTkwMCBqdXN0aWZ5LWNlbnRlciBwdC0xMCBsZzpwLTEwIGxnOnAtYXV0byBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyc29uYWwucGljdHVyZX0gYWx0PXtwZXJzb25hbC5mdWxsbmFtZX0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBoLTQwIHctNDAgbGc6aC01NiBsZzp3LTU2IGJnLXdoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0xIGNvbC1zcGFuLTEyIGxnOnJvdy1zcGFuLTQgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBweC0xMCBsZzpweS0yMCBmbGV4IGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWhhaXJsaW5lIGxnOmZvbnQtdGhpbiB0ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdCB1cHBlcmNhc2VcIj57cGVyc29uYWwuZmlyc3RfbmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgbGc6dGV4dC02eGwgdGV4dC15ZWxsb3ctNjAwIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdCB1cHBlcmNhc2UgZm9udC1ib2xkIC1tdC02IGxnOi1tdC0xMFwiPntwZXJzb25hbC5sYXN0X25hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0zLzQgbGc6cHgtMSBteS0zIGxnOm15LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGc6dGV4dC0yeGwgZm9udC1oYWlybGluZSB0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPntwZXJzb25hbC5wb3NpdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzQgZmxleCBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWVuZCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgIHtwZXJzb25hbC5zb2NpYWxfbWVkaWEubWFwKCh2YWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbC51cmx9IGtleT17aW5kZXh9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIGhvdmVyOmJnLWdyYXktOTAwIGJvcmRlciBib3JkZXItZ3JheS02MDAgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXllbGxvdy02MDAgdy04IGgtOCBwLTMgbGc6dy0xMCBsZzpoLTEwIHJvdW5kZWQgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgdmFsLmljb25dfSBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGNvbC1zcGFuLTEyIGxnOnJvdy1zcGFuLTQgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBwLTEwIGZsZXggZmxleC0xIGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQtMiBib3JkZXItZ3JheS02MDAgdy1mdWxsIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzQgbWluLWgtMTYgbXktMyBsZzpteS01IHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgZm9udC1ib2xkXCI+QWxhbWF0PC9oND5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57cGVyc29uYWwuYWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzQgbWluLWgtMTYgbXktMyBsZzpteS01IHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgZm9udC1ib2xkXCI+VGVscG9uPC9oND5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57cGVyc29uYWwucGhvbmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS80IG1pbi1oLTE2IG15LTMgbGc6bXktNSB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZFwiPldlYnNpdGU8L2g0PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cGVyc29uYWwud2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXllbGxvdy02MDBcIj57cGVyc29uYWwud2Vic2l0ZX08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzQgbWluLWgtMTYgbXktMyBsZzpteS01IHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgZm9udC1ib2xkXCI+RS1NYWlsPC9oND5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wibWFpbHRvOlwiICsgcGVyc29uYWwuZW1haWx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC15ZWxsb3ctNjAwXCI+e3BlcnNvbmFsLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgYWJzb2x1dGUgaC0xNiBib3R0b20tMCBweS01XCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17W1wiZmFzXCIsIFwiY2hldnJvbi1kb3duXCJdfSBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJhbmltYXRlLWJvdW5jZSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e3Njcm9sbERvd259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiIHJlZj17aW50cm9SZWZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ3JpZCBncmlkLXJvd3MtMSBncmlkLWNvbHMtMTIgZ2FwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBiZy1ncmF5LTkwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgbGc6Ym9yZGVyLTAgcHgtMTAgcHktNSBsZzpwLTEwXCI+XG4gICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibGc6dGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPkludHJvPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPlRhayBLZW5hbCBNYWthIFRhayBTYXlhbmcuPC9wPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi04IGJnLWdyYXktODAwIHAtMTBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LWp1c3RpZnlcIj57cGVyc29uYWwuaW50cm99PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgYmctZ3JheS05MDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHB4LTEwIHB5LTUgbGc6cC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5LZW1hbXB1YW48L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZm9udC10aGluXCI+QXBhIFlhbmcgQmlzYSBBa3UgTGFrdWthbi48L3A+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgodmFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1pbi1oLTE2IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgdGV4dC1sZyBmb250LWJvbGQgaW5saW5lLWJsb2NrXCI+e3ZhbC5wZXJjZW50YWdlfTxzbWFsbCBjbGFzc05hbWU9XCJmb250LXRoaW5cIj4lPC9zbWFsbD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlXCI+e3ZhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQgdy1mdWxsIGJnLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTYwMCByb3VuZGVkIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgbXktMlwiIHN0eWxlPXt7d2lkdGg6IGAke3ZhbC5wZXJjZW50YWdlfSVgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ3JpZCBncmlkLXJvd3MtMSBncmlkLWNvbHMtMTIgZ2FwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBiZy1ncmF5LTkwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgbGc6Ym9yZGVyLTAgcHgtMTAgcHktNSBsZzpwLTEwXCI+XG4gICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibGc6dGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlBlbmdhbGFtYW48L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZm9udC10aGluXCI+QXBhIFNhamEgS29udHJpYnVzaWt1IGRpIER1bmlhIEluZHVzdHJpLjwvcD5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBweS0xMCBwbC0zIHByLTUgbGc6cC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQtMiBib3JkZXItZ3JheS02MDAgYWJzb2x1dGUgdy01IHRvcC0wXCIgc3R5bGU9e3tsZWZ0OiA2fX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItci0yIGJvcmRlci1ncmF5LTYwMCBhYnNvbHV0ZSBoLWZ1bGwgdG9wLTBcIiBzdHlsZT17e2xlZnQ6IDE1fX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSB0ZXh0LXdoaXRlIG0tMCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoKHZhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTIgbGc6Z2FwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy02MDAgYm9yZGVyLTggYm9yZGVyLWdyYXktODAwIHJvdW5kZWQtZnVsbCB6LTEwIGgtOCB3LThcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57dmFsLmRhdGV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZCBsZzp0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTMwMFwiPnt2YWwuY29tcGFueX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS00MDBcIj57dmFsLnBvc2l0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57dmFsLmFkZHJlc3N9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTIgbGc6bWwtMCB0ZXh0LXNtIGxnOnRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQtMiBib3JkZXItZ3JheS02MDAgYWJzb2x1dGUgdy01IGJvdHRvbS0wXCIgc3R5bGU9e3tsZWZ0OiA2fX0+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEyIGdhcC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgYmctZ3JheS05MDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHB4LTEwIHB5LTUgbGc6cC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5QZW5kaWRpa2FuPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPkRpbWFuYSBBa3UgQmVsYWphci48L3A+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTggYmctZ3JheS04MDAgcHktMTAgcGwtMyBwci01IGxnOnAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktNjAwIGFic29sdXRlIHctNSB0b3AtMFwiIHN0eWxlPXt7bGVmdDogNn19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXItMiBib3JkZXItZ3JheS02MDAgYWJzb2x1dGUgaC1mdWxsIHRvcC0wXCIgc3R5bGU9e3tsZWZ0OiAxNX19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgdGV4dC13aGl0ZSBtLTAgcC0wXCI+XG4gICAgICAgICAgICAgICAgICB7ZWR1Y2F0aW9ucy5tYXAoKHZhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTIgbGc6Z2FwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy02MDAgYm9yZGVyLTggYm9yZGVyLWdyYXktODAwIHJvdW5kZWQtZnVsbCB6LTEwIGgtOCB3LThcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57dmFsLmRhdGV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZCBsZzp0ZXh0LXhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTMwMFwiPnt2YWwuc2Nob29sfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTQwMFwiPnt2YWwuc3R1ZHl9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkJ7dmFsLmFkZHJlc3N9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTIgbGc6bWwtMCB0ZXh0LXNtIGxnOnRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10LTIgYm9yZGVyLWdyYXktNjAwIGFic29sdXRlIHctNSBib3R0b20tMFwiIHN0eWxlPXt7bGVmdDogNn19PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBncmlkIGdyaWQtcm93cy0xIGdyaWQtY29scy0xMiBnYXAtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IGJnLWdyYXktOTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTUwMCBsZzpib3JkZXItMCBwLTEwXCI+XG4gICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibGc6dGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS0xMDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlByZXN0YXNpPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPlBlbmdoYXJnYWFuIFlhbmcgQmVyaGFzaWwgS3VyYWloLjwvcD5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBwLTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgICAge2FjaGlldmVtZW50cy5tYXAoKHZhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLTE2XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJweS0xIG1iLTIgdy0xLzQgYm9yZGVyLTAgYmcteWVsbG93LTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LW1kIGxnOnRleHQtbGcgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTMwMFwiPnt2YWwudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzp0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ3JpZCBncmlkLXJvd3MtMSBncmlkLWNvbHMtMTIgZ2FwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBiZy1ncmF5LTkwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS01MDAgbGc6Ym9yZGVyLTAgcC0xMFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImxnOnRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktMTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5Qb3J0b2ZvbGlvPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGZvbnQtdGhpblwiPlNpc3RlbSBZYW5nIFN1ZGFoIGt1YmFuZ3VuLjwvcD5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tOCBiZy1ncmF5LTgwMCBwLTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtMTZcIj5cbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJweS0xIG1iLTIgdy0xLzQgYm9yZGVyLTAgYmcteWVsbG93LTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZCBsZzp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS0zMDBcIj5XSVA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzp0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29taW5nIFNvb24uIC4gLiAuIDopXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdyaWQgZ3JpZC1yb3dzLTEgZ3JpZC1jb2xzLTEgZ2FwLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNTAwIGxnOmJvcmRlci0wIHB4LTEwIHB5LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZm9udC10aGluXCI+RGlidWF0IERlbmdhbiBOZXh0SlMgZGFuIFRhaWx3aW5kICZjb3B5OyBIYWZpZCBSaXlhZGkgLSBCb2dvcjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlNlcnZlclVSTH1EYXRhUHJvZmlsZS5qc29uYCk7XG4gIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAuLi5wcm9maWxlc1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==