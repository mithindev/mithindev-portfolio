// /* eslint-disable no-unused-vars */

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Crystal = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} /> {/* Increase ambient light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1} // Increase directional light intensity
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024} // Adjust shadow map size
        shadow-mapSize-height={1024}
        shadow-camera-far={15} // Extend shadow camera far
        shadow-camera-left={-5} // Set shadow camera boundaries
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} /> {/* Use a sphere geometry */}
        <meshStandardMaterial
          color="#6c63ff"
          emissive="#f5f7fa"
          roughness={0.5}
          metalness={0.8}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const CrystalCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      shadows // Enable shadows in the canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Crystal imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CrystalCanvas;
