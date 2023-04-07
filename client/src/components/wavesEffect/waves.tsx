import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Preload } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

// const WaveShaderMaterial = shaderMaterial(
//   // Uniform
//   {
//     uTime: 0,
//     uColor: new THREE.Color(0.0, 0.0, 0.0),
//     uTexture: new THREE.Texture(),
//   },
//   // Vertex Shader
//   `
//     precision mediump float;
//     varying vec2 vUv;
//     varying float vWave;
//     uniform float uTime;
//     #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
//     void main() {
//       vUv = uv;
//       vec3 pos = position;
//       float noiseFreq = 2.0;
//       float noiseAmp = 0.4;
//       vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
//       pos.z += snoise3(noisePos) * noiseAmp;
//       vWave = pos.z;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//     }
//   `,
//   // Fragment Shader
//   `
//     precision mediump float;
//     uniform vec3 uColor;
//     uniform float uTime;
//     uniform sampler2D uTexture;
//     varying vec2 vUv;
//     varying float vWave;
//     void main() {
//       float wave = vWave * 0.2;
//       vec3 texture = texture2D(uTexture, vUv + wave).rgb;
//       gl_FragColor = vec4(texture, 1.0);
//     }
//   `
// );

// extend({ WaveShaderMaterial });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       waveShaderMaterial: any;
//     }
//   }
// }

// const Wave = ({ src }: { src: string }) => {
//   const ref = useRef(null);
//   useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

//   return (
//     <mesh>
//       <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
//       {/* <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={} /> */}
//     </mesh>
//   );
// };

// const Scene = ({ src }: { src: string }) => {
//   return (
//     <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
//       <Wave src={src} />
//     </Canvas>
//   );
// };

export default function WavyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 12 }}>
      <Suspense fallback={null}>
        <WavyMesh src={src} alt={alt} />
      </Suspense>
    </Canvas>
  );
}

function WavyMesh({ src, alt }: { src: string; alt: string }) {
  const image = useLoader(TextureLoader, src);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={0.2} />
      <planeGeometry args={[2, 2, 16, 16]} />
      <meshStandardMaterial map={image} />
    </mesh>
  );
}
