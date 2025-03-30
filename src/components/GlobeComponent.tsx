
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlobeComponent = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={globeRef} args={[1, 36, 36]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#0EA5E9" 
        metalness={0.1}
        roughness={0.7}
        opacity={0.9}
        transparent
      />
    </Sphere>
  );
};

export default GlobeComponent;
