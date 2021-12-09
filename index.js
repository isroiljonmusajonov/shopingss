const userr = document.querySelector(".userr");
const login = document.querySelector(".login-box");
const submitt = document.querySelector(".submit");
const box = document.querySelector(".nav-box");
const bars = document.querySelector(".bars");
const tim = document.querySelector(".tim");
tim.addEventListener("click", () => {
  box.classList.add("show");
});
bars.addEventListener("click", () => {
  box.classList.toggle("active");
});

userr.addEventListener("click", () => {
  login.classList.add("active");
});
submitt.addEventListener("click", () => {
  login.classList.add("show");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
