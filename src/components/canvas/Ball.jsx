import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { isWebGLSupported, isMobile } from "../../utils/device";

const Ball = (props) => {
  const decal = useTexture(props.imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ width: '100%', height: '100%' }}></div>;
    }
    return this.props.children;
  }
}

const BallCanvas = ({ icon }) => {
  if (!isWebGLSupported() || isMobile()) {
    return <div className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-full">
      <img src={icon} alt="tech" className="w-16 h-16 object-contain" />
    </div>; // Fallback to simple image on mobile or devices without WebGL
  }

  return (
    <ErrorBoundary>
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default BallCanvas;
