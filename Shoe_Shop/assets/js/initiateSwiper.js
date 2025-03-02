let swiper;

function initSwiper() {
  if (window.innerWidth <= 425) {
    if (!swiper) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true); // Destroy swiper
      swiper = null; // Reset swiper
    }
  }
}

// Initialize on load
initSwiper();

// Re-check on window resize
window.addEventListener("resize", initSwiper);
