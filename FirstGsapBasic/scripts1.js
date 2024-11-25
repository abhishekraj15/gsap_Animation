// gsap.to("#box", {
//   x: 1200,
//   duration: 2,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "yellow",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 2,
//     rotate: 360,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     scale: 0.5,
//   });
// gsap.from("#box2", {
//   x: 1200,
//   duration: 2,
//   delay: 2,
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   y: 30,
//   //   stagger: -1, -1
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 1200,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   repeat: -1, initial to final
//   //   yoyo: true, make a complte cycle go anf back
//   //   repeat: 1,
// });

// Timeline

// gsap.to("#box", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 1500,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 4,
// });

// var tl = gsap.timeline();

// tl.to("#box", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1500,
//   duration: 1.5,
// });
// tl.to("#box3", {
//   x: 1500,
//   duration: 4,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tl.from("h1", {
  y: 500,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
