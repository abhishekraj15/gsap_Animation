// import React from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const App = () => {

//   useGSAP(() => {
//     gsap.to(".box", {
//       x: 500,
//       duration: 0.6,
//       delay: 1,
//     });
//   });
//   return (
//     <main>
//       <div className="box">App</div>
//     </main>
//   );
// };

// export default App;

// 2nd Way
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const App = () => {
//   const gsapRef = useRef();
//   useGSAP(() => {
//     gsap.to(gsapRef.current, {
//       x: 1000,
//       rotate: 360,
//       duration: 0.6,
//       delay: 1,
//     });
//   });
//   return (
//     <main>
//       <div ref={gsapRef} className="box">
//         App
//       </div>
//     </main>
//   );
// };

// export default App;

// 3nd Way
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const App = () => {
//   const boxRef = useRef();
//   const circleRef = useRef();
//   useGSAP(() => {
//     gsap.from(boxRef.current, {
//       rotate: 360,
//       // y: 100,
//       duration: 1,
//       delay: 1,
//     });
//   });
//   return (
//     <main>
//       <div className="conatiner">
//         <div ref={circleRef} className="circle"></div>
//         <div ref={boxRef} className="box"></div>
//       </div>
//       <div className="kuch">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>
//     </main>
//   );
// };

// export default App;

// 4th Way Scope
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const App = () => {
//   const boxRef = useRef();
//   const circleRef = useRef();
//   const contRef = useRef();
//   useGSAP(
//     () => {
//       gsap.from(".box", {
//         rotate: 360,
//         scale: 0,
//         duration: 1,
//         delay: 1,
//       });
//     },
//     // { scope: ".conatiner" }
//     { scope: contRef }
//   );
//   return (
//     <main>
//       <div ref={contRef} className="conatiner">
//         <div ref={circleRef} className="circle"></div>
//         <div ref={boxRef} className="box"></div>
//       </div>
//       <div className="kuch">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>
//     </main>
//   );
// };

// export default App;

// 5th UseEffect Way
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const App = () => {
//   const boxRef = useRef();
//   const random = gsap.utils.random(-300, 300, 100);
//   const random1 = gsap.utils.random(-300, 300, 100);
//   const randomY = gsap.utils.random(-300, 300, 100);
//   const [xValue, setXValue] = useState(0);
//   const [yValue, setYValue] = useState(0);
//   const [move, setMove] = useState(0);

//   // useGSAP(() => {
//   //   gsap.to(".circle", {
//   //     x: circle,
//   //     duration: 0.5,
//   //   });
//   // }, [circle]);

//   useGSAP(
//     () => {
//       gsap.to(boxRef.current, {
//         x: xValue,
//         rotate: move,
//         y: yValue,
//         duration: 0.6,
//       });
//     },
//     { scope: "main", dependencies: [xValue, yValue, move] }
//   );

//   // useEffect(() => {
//   //   gsap.to(boxRef.current, {
//   //     x: xValue,
//   //     rotate: move,
//   //     y: yValue,
//   //     duration: 0.6,
//   //   });
//   // }, [xValue, move, yValue]);

//   return (
//     <main>
//       <button
//         onClick={() => {
//           setXValue(random);
//           setMove(random1);
//           setYValue(randomY);
//         }}
//       >
//         Animate
//       </button>
//       {/* <div ref={boxRef} className="box"></div> */}
//       <img
//         onClick={() => {
//           setXValue(random);
//           setMove(random1);
//           setYValue(randomY);
//         }}
//         ref={boxRef}
//         src="https://www.pngarts.com/files/8/Flies-PNG-High-Quality-Image.png"
//         height={200}
//         width={200}
//       />
//     </main>
//   );
// };

// export default App;

import React from "react";
import RotateBox from "./Animate";


const App = () => {
  return (
    <div>
      <RotateBox />
    </div>
  );
};

export default App;
