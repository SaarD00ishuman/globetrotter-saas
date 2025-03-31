
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlobeComponent = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={globeRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshStandardMaterial 
        color="#0EA5E9" 
        metalness={0.1}
        roughness={0.7}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

export default GlobeComponent;
