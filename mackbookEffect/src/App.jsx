import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar flex gap-10  py-10 line absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "mac",
          "product",
          "services",
          "iPhone",
          "iPad",
          "mac",
          "product",
          "services",
        ].map((e, index) => (
          <a
            key={index}
            href=""
            className="text-white font-[400] capitalize cursor-pointer hover:shadow-lg"
          >
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center  text-white top-[100px] left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook M2
        </h3>
        <h5>Oh so pro !</h5>
        <p className="text-center w-3/4 p-8">
          Apple Intelligence is the personal intelligence system that helps you
          write, express yourself and get things done effortlessly. With
          groundbreaking privacy protections, it gives you peace of mind that no
          one else can access your data — not even Apple.
        </p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>

        {/* <mesh>
        <boxGeometry />
        mesh material
      </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;
