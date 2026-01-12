
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

// Define Three.js elements as constants to fix "Property does not exist on type 'JSX.IntrinsicElements'" errors.
// This is a common workaround when the TypeScript environment does not have @react-three/fiber's JSX definitions in scope.
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;

const Book = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  // Custom texture creation (simulation)
  const bookTexture = new THREE.MeshStandardMaterial({
    color: '#F3EFEA', // Beige base
  });
  
  const spineTexture = new THREE.MeshStandardMaterial({
    color: '#7FB8A6', // Green spine
  });

  return (
    // Fixed: Using defined Group constant instead of intrinsic 'group' tag
    <Group rotation={[0.4, -0.5, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Fixed: Using defined Mesh constant instead of intrinsic 'mesh' tag */}
        <Mesh ref={mesh} receiveShadow castShadow>
          {/* Fixed: Using defined BoxGeometry constant instead of intrinsic 'boxGeometry' tag */}
          <BoxGeometry args={[3, 4.5, 0.5]} />
          {/* Fixed: Using defined MeshStandardMaterial constant instead of intrinsic 'meshStandardMaterial' tag */}
          <MeshStandardMaterial color="#F3EFEA" />
          
          {/* Spine indicator */}
          <Mesh position={[-1.55, 0, 0]}>
            <BoxGeometry args={[0.1, 4.5, 0.52]} />
            <MeshStandardMaterial color="#7FB8A6" />
          </Mesh>

          {/* Simulated Cover Content */}
          <Text
            position={[0, 0.8, 0.26]}
            fontSize={0.25}
            color="#3A3A3A"
            font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K4E3Xc_mH67Jc7-qP0Bkl9ySdWgh0n6mR_kL1a.woff"
            anchorX="center"
            anchorY="middle"
            maxWidth={2.5}
            textAlign="center"
          >
            SOZINHA, MAS NÃO SEM CAMINHOS
          </Text>
          <Text
            position={[0, -0.5, 0.26]}
            fontSize={0.15}
            color="#C97C5D"
            font="https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QvOXsp2fSls.woff"
            anchorX="center"
            anchorY="middle"
          >
            O guia para mães solo
          </Text>
        </Mesh>
      </Float>
    </Group>
  );
};

const EbookViewer3D: React.FC = () => {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        {/* Fixed: Using defined Light constants instead of intrinsic light tags */}
        <AmbientLight intensity={0.7} />
        <PointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <SpotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <Book />
        
        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default EbookViewer3D;
