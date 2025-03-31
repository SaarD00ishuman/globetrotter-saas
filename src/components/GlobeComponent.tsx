
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Globe } from 'lucide-react';

const GlobeComponent = () => {
  const globeRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);
  
  useEffect(() => {
    if (globeRef.current) {
      // Create the globe geometry
      const sphereGeometry = new THREE.SphereGeometry(0.99, 64, 64);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: '#1a73e8',
        transparent: true,
        opacity: 0.1,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      globeRef.current.add(sphere);
      
      // Create dots on the globe
      const dotGeometry = new THREE.BufferGeometry();
      const positions = [];
      
      for (let i = 0; i < 1500; i++) {
        const phi = Math.acos(-1 + (2 * Math.random()));
        const theta = Math.random() * Math.PI * 2;
        
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);
        
        positions.push(x, y, z);
      }
      
      dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      
      const dotMaterial = new THREE.PointsMaterial({
        color: '#ffffff',
        size: 0.015,
        transparent: true,
        opacity: 0.6,
      });
      
      const dots = new THREE.Points(dotGeometry, dotMaterial);
      dotsRef.current = dots;
      globeRef.current.add(dots);
      
      // Add connections between random dots
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = [];
      const connectionCount = 100;
      
      for (let i = 0; i < connectionCount; i++) {
        const index1 = Math.floor(Math.random() * (positions.length / 3));
        const index2 = Math.floor(Math.random() * (positions.length / 3));
        
        const x1 = positions[index1 * 3];
        const y1 = positions[index1 * 3 + 1];
        const z1 = positions[index1 * 3 + 2];
        
        const x2 = positions[index2 * 3];
        const y2 = positions[index2 * 3 + 1];
        const z2 = positions[index2 * 3 + 2];
        
        linePositions.push(x1, y1, z1, x2, y2, z2);
      }
      
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({
        color: '#0EA5E9',
        transparent: true,
        opacity: 0.3,
      });
      
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      globeRef.current.add(lines);
    }
  }, []);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    
    if (dotsRef.current) {
      // Pulse the dots
      const pulseFactor = Math.sin(clock.getElapsedTime() * 0.5) * 0.1 + 0.9;
      (dotsRef.current.material as THREE.PointsMaterial).opacity = pulseFactor * 0.6;
    }
  });

  return <group ref={globeRef} />;
};

export default GlobeComponent;
