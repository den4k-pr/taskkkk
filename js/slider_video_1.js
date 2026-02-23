(() => {
  var __webpack_exports__ = {};
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
  var __webpack_export_target__ = window;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", {
    value: true
  });
})();