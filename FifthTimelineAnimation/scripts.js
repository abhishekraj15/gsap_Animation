let open = document.querySelector("#nav i");
let close = document.querySelector("#full i");

var tl = gsap.timeline();
// var tl = gsap.timeline({ paused: true });

tl.to("#full", {
  right: 0,
  duration: 0.4,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.28,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();

open.addEventListener("click", () => {
  tl.play();
});
close.addEventListener("click", () => {
  tl.reverse();
});
