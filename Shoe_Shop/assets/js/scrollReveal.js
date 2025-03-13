/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "64px",
  duration: 2500,
  delay: 300,
  // reset: true, // Animations repeat
});

sr.reveal(`nav, .home_text, .products>h1, .about>h1, .review>h1, .services>h1`);
sr.reveal(`.home_image`, {
  origin: "center",
  duration: 3000,
  delay: 600,
  rotate: { z: -180 },
});
sr.reveal(`.social_icon`, {
  origin: "right",
});
sr.reveal(`.card, .services_box`, { interval: 500 });
sr.reveal(`.big_image, .login_form>.left, body>.btn_one`, {
  origin: "left",
});
sr.reveal(`.about_small_image img, .footer_main>.tag`, {
  origin: "left",
  interval: 500,
});
sr.reveal(`.about_text, .login_form>.right`, { origin: "right" });
sr.reveal(`.about_btn, .mySwiper`, { origin: "bottom" });
