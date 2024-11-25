// // gsap.to("#box", {
// //   x: 1200,
// //   duration: 2,
// //   delay: 2,
// // });

// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });
// // gsap.from("#page2 #box", {
// //   scale: 0,
// //   delay: 1,
// //   duration: 2,
// //   rotate: 360,
// // });
// gsap.from("#page2 #box", {
//   scale: 0,
//   //   delay: 1,
//   duration: 2,
//   rotate: 360,
//   //   scrollTrigger: "#page2 #box",
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   x: 500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });
// gsap.from("#page2 h2", {
//   opacity: 0,
//   x: -500,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

gsap.from("#page2 #box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    // for basis on continues scrooling
    // true
    scrub: true,
    // number - 1-5
    scrub: 2,
  },
});
