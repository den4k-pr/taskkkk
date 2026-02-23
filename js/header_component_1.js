(() => {
  "use strict";
  var __webpack_require__ = {};
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.r = exports => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    };
  })();
  var __webpack_exports__ = {};
  __webpack_require__.r(__webpack_exports__);
  __webpack_require__.d(__webpack_exports__, {
    default: () => __WEBPACK_DEFAULT_EXPORT__
  });
  const marqueeComponent = () => {
    const init = () => {
      const marquee = document.getElementById("marquee");
      if (!marquee) return;
      let speed = .3;
      let offset = 0;
      marquee.innerHTML += marquee.innerHTML;
      const animate = () => {
        offset -= speed;
        if (Math.abs(offset) >= marquee.scrollWidth / 2) {
          offset = 0;
        }
        marquee.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animate);
      };
      animate();
      marquee.addEventListener("mouseenter", () => speed = 0);
      marquee.addEventListener("mouseleave", () => speed = .3);
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  };
  const __WEBPACK_DEFAULT_EXPORT__ = marqueeComponent;
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();