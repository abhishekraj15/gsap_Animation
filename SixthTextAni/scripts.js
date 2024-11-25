function breakTheText() {
  let h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  // console.log(h1Text);
  const splitedText = h1Text.split("");
  // console.log("🚀 ~ splitedText:", splitedText);
  var halfValue = Math.floor(splitedText.length / 2);
  console.log("🚀 ~ breakTheText ~ halfValue:", halfValue);

  var clutter = "";

  splitedText.forEach(function (text, index) {
    if (index < halfValue) {
      clutter += `<span class="a">${text}</span>`;
    } else {
      clutter += `<span class="b">${text}</span>`;
    }
  });
  console.log(clutter);
  h1.innerHTML = clutter;
}

breakTheText();

// inline element pr transform translate work nhi krega
// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   //   stagger: -0.15,
//   stagger: 0.15,
// });

// for lrft to canter and right to center
gsap.from("h1 .a", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("h1 .b", {
  y: -50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
