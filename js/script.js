import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

new Swiper(".block-swiper", {
  direction: "vertical",
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 1000,
  },
});
