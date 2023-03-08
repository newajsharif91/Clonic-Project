// Slider Js
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: false,
  pagination: ".swiper-pagination",
  grabCursor: false,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 0.1,
});

// scrollToSection(e) {
//   const dots = Array.from(this);
//   const window_height = window.innerHeight;

//   dots.forEach((dot, index) => {
//     if (dot == e.target) {

//       window.scrollTo({
//         top: window_height * index,
//         behavior: 'smooth',
//       });
//     }
//   });
// }
var current = 0;

function nextBackground() {
  current++;
  current = current % backgrounds.length;
  header.css("swiper-image", backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css("swiper-image", backgrounds[0]);

// Slider Js End
