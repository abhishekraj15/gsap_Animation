var path = `M 10 100  Q 500 100 850 100`;
var finalPath = `M 10 100  Q 500 100 850 100`;

const string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  //   console.log(dets.y);
  path = `M 10 100  Q ${dets.x} ${dets.y} 850 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
  console.log(path);
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
  //   console.log("Clicked");
});
