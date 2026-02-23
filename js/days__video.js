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
  const videoWrappers = document.querySelectorAll(".video-wrapper");
  const days__video = () => {
    videoWrappers.forEach(wrapper => {
      const video = wrapper.querySelector(".day__video-video");
      const playBtn = wrapper.querySelector(".play-btn");
      if (!video || !playBtn) return;
      video.controls = false;
      const togglePlay = () => {
        if (video.paused) {
          video.controls = true;
          video.play();
        } else {
          video.pause();
        }
      };
      playBtn.addEventListener("click", e => {
        e.stopPropagation();
        togglePlay();
      });
      video.addEventListener("click", () => {
        if (video.controls) return;
        togglePlay();
      });
      video.addEventListener("play", () => {
        playBtn.style.opacity = "0";
        playBtn.style.pointerEvents = "none";
        video.controls = true;
      });
      video.addEventListener("pause", () => {
        if (video.currentTime === 0) {
          playBtn.style.opacity = "1";
          playBtn.style.pointerEvents = "all";
          video.controls = false;
        }
      });
      video.addEventListener("ended", () => {
        video.controls = false;
        video.currentTime = 0;
        playBtn.style.opacity = "1";
        playBtn.style.pointerEvents = "all";
      });
    });
  };
  const __WEBPACK_DEFAULT_EXPORT__ = days__video;
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();