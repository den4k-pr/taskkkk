(() => {
  var __webpack_modules__ = {
    618(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
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
    },
    486(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const footer__timer = () => {
        const init = () => {
          const footer = document.getElementById("footer");
          if (!footer) return;
          const handleScroll = () => {
            if (window.scrollY >= 200) footer.classList.add("active"); else footer.classList.remove("active");
          };
          window.addEventListener("scroll", handleScroll);
          handleScroll();
          const hoursEl = footer.querySelector(".footer-timer-item:nth-child(1) .footer-timer-value");
          const minutesEl = footer.querySelector(".footer-timer-item:nth-child(2) .footer-timer-value");
          const secondsEl = footer.querySelector(".footer-timer-item:nth-child(3) .footer-timer-value");
          if (!hoursEl || !minutesEl || !secondsEl) return;
          const STORAGE_KEY = "footer_timer_end";
          const FULL_DURATION = 24 * 60 * 60 * 1e3;
          const startTimer = () => {
            let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);
            if (isNaN(endTime) || endTime < Date.now()) {
              endTime = Date.now() + FULL_DURATION;
              localStorage.setItem(STORAGE_KEY, endTime);
            }
            const update = () => {
              let remaining = Math.max(0, endTime - Date.now());
              if (remaining <= 0) {
                endTime = Date.now() + FULL_DURATION;
                localStorage.setItem(STORAGE_KEY, endTime);
                remaining = FULL_DURATION;
              }
              const hrs = Math.floor(remaining / (1e3 * 60 * 60));
              const mins = Math.floor(remaining % (1e3 * 60 * 60) / (1e3 * 60));
              const secs = Math.floor(remaining % (1e3 * 60) / 1e3);
              hoursEl.textContent = String(hrs).padStart(2, "0");
              minutesEl.textContent = String(mins).padStart(2, "0");
              secondsEl.textContent = String(secs).padStart(2, "0");
              requestAnimationFrame(update);
            };
            update();
          };
          startTimer();
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = footer__timer;
    },
    762(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
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
    },
    910(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__
      });
      const questions__main = () => {
        const init = () => {
          const items = document.querySelectorAll(".questionsContainer-item");
          if (!items.length) return;
          items.forEach(item => {
            const top = item.querySelector(".questionsContainer-item-top");
            const bottom = item.querySelector(".questionsContainer-item-bottom");
            const label = item.querySelector(".label");
            if (!top || !bottom || !label) return;
            bottom.style.maxHeight = "0";
            bottom.style.overflow = "hidden";
            bottom.style.transition = "max-height 0.4s ease";
            top.addEventListener("click", () => {
              const isActive = item.classList.contains("active");
              items.forEach(el => {
                el.classList.remove("active");
                const elBottom = el.querySelector(".questionsContainer-item-bottom");
                const elLabel = el.querySelector(".label");
                if (elBottom) elBottom.style.maxHeight = "0";
                if (elLabel) elLabel.textContent = "+";
              });
              if (!isActive) {
                item.classList.add("active");
                bottom.style.maxHeight = bottom.scrollHeight + "px";
                label.textContent = "–";
              }
            });
          });
        };
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", init);
        } else {
          init();
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = questions__main;
    },
    526() {},
    530() {
      {}
      (function() {
        const popup = document.getElementById("videoPopup");
        const video = document.getElementById("popupVideo");
        function openPopup(src) {
          if (!src) return;
          video.src = src;
          video.currentTime = 0;
          video.play();
          popup.classList.add("active");
        }
        function closePopup() {
          video.pause();
          video.removeAttribute("src");
          video.load();
          popup.classList.remove("active");
        }
        document.addEventListener("click", e => {
          const trigger = e.target.closest(".slider_video_1-trigger");
          if (trigger) {
            const src = trigger.dataset.videoSrc;
            openPopup(src);
            return;
          }
          if (e.target.classList.contains("slider_video_1-popup-overlay") || e.target.classList.contains("slider_video_1-popup-close")) {
            closePopup();
          }
        });
        $(document).ready(function() {
          initSlider(".slider_video_1-slider", ".slider_video_1-buttons-prev", ".slider_video_1-buttons-next");
        });
        function initSlider(slider, prev, next) {
          $(slider).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $(prev),
            nextArrow: $(next),
            autoplay: true,
            autoplaySpeed: 3e3,
            pauseOnHover: true,
            pauseOnFocus: true,
            fade: false,
            cssEase: "ease-in-out",
            speed: 500
          });
        }
      })();
    },
    422() {
      document.addEventListener("DOMContentLoaded", () => {
        const dateBlock = document.querySelector(".badge_1_date-block");
        const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        if (dateBlock) {
          const tomorrow = new Date;
          tomorrow.setDate(tomorrow.getDate() + 1);
          const day = tomorrow.getDate();
          const month = months[tomorrow.getMonth()];
          dateBlock.textContent = `${day} ${month}`;
        }
      });
    },
    200() {
      document.addEventListener("DOMContentLoaded", () => {
        const dateBlock = document.querySelector(".badge_2_date-block");
        const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        if (dateBlock) {
          const tomorrow = new Date;
          tomorrow.setDate(tomorrow.getDate() + 1);
          const day = tomorrow.getDate();
          const month = months[tomorrow.getMonth()];
          dateBlock.textContent = `${day} ${month}`;
        }
      });
    },
    147(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./days__video/days__video.js": 618,
        "./footer__timer/footer__timer.js": 486,
        "./header_component_1/header_component_1.js": 762,
        "./questions__main/questions__main.js": 910,
        "./slider_image_1/slider_image_1.js": 526,
        "./slider_video_1/slider_video_1.js": 530,
        "./start_date_badge_1/start_date_badge_1.js": 422,
        "./start_date_badge_2/start_date_badge_2.js": 200
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }
        return map[req];
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 147;
    },
    980(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      function importAll(r) {
        r.keys().forEach(key => {
          const module = r(key);
          if (module.default) module.default();
        });
      }
      importAll(__webpack_require__(147));
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
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
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(980);
    var _components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_0__);
    document.addEventListener("DOMContentLoaded", async () => {
      console.log("🚀 System initialized");
      initSpecificComponents();
      const mainComponent = document.querySelector('[data-component="main"]');
      const otherComponents = Array.from(document.querySelectorAll('[data-component]:not([data-component="main"])'));
      if (mainComponent) {
        await waitUntilReady(mainComponent);
        mainComponent.classList.add("is-ready");
        loadedComponentsCache.set(mainComponent, true);
      }
      requestAnimationFrame(() => {
        revealSequentially(otherComponents, {
          minDelay: 30
        });
      });
    });
    const loadedComponentsCache = new WeakMap;
    function initSpecificComponents() {}
    async function revealSequentially(components, {minDelay = 50} = {}) {
      for (const component of components) {
        if (!loadedComponentsCache.has(component)) {
          await waitUntilReady(component);
          loadedComponentsCache.set(component, true);
        }
        component.classList.add("is-ready");
        await delay(minDelay);
      }
    }
    function waitUntilReady(component) {
      return new Promise(resolve => {
        const images = Array.from(component.querySelectorAll("img"));
        const videos = Array.from(component.querySelectorAll("video"));
        const total = images.length + videos.length;
        if (total === 0) {
          waitForFonts().then(resolve);
          return;
        }
        let loaded = 0;
        const timeout = setTimeout(resolve, 3e3);
        const check = () => {
          loaded++;
          if (loaded >= total) {
            clearTimeout(timeout);
            waitForFonts().then(resolve);
          }
        };
        images.forEach(img => {
          if (img.complete && img.naturalHeight !== 0) check(); else {
            img.addEventListener("load", check);
            img.addEventListener("error", check);
          }
        });
        videos.forEach(video => {
          if (video.readyState >= 3) check(); else {
            video.addEventListener("loadeddata", check);
            video.addEventListener("error", check);
          }
        });
      });
    }
    function waitForFonts() {
      return document.fonts ? document.fonts.ready : Promise.resolve();
    }
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  })();
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();