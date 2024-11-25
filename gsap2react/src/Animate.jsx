import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RotateBox = () => {
  const boxRef = useRef();
  const { contextSafe } = useGSAP();

  //   const rotateBoxFunction = () => {
  //     gsap.to(boxRef.current, {
  //       rotate: 360,
  //       duration: 1,
  //     });
  //   };

  const rotateBoxFunction = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: "+=360",
      duration: 1,
    });
  });

  return (
    <main>
      <button onClick={rotateBoxFunction}>Animate</button>
      <div
        ref={boxRef}
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "red",
          borderRadius: "10px",
          margin: "20px",
          textAlign: "center",
        }}
        className="box"
      >
        Box
      </div>
    </main>
  );
};

export default RotateBox;
