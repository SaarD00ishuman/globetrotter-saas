
import React, { useCallback, useRef, useEffect, useState } from 'react';
import createGlobe from 'cobe';
import { useThree } from '@react-three/fiber';

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.3, 0.6, 0.9],
  markerColor: [0.9, 0.4, 0.1],
  glowColor: [0.8, 0.8, 1],
  markers: [
    // Popular travel destinations
    { location: [48.8566, 2.3522], size: 0.08 }, // Paris
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [13.7563, 100.5018], size: 0.07 }, // Bangkok
    { location: [35.6762, 139.6503], size: 0.09 }, // Tokyo
    { location: [25.2048, 55.2708], size: 0.08 }, // Dubai
    { location: [41.9028, 12.4964], size: 0.07 }, // Rome
    { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [19.4326, -99.1332], size: 0.07 }, // Mexico City
    { location: [-1.2921, 36.8219], size: 0.06 }, // Nairobi
    { location: [55.7558, 37.6173], size: 0.07 }, // Moscow
    { location: [-34.6037, -58.3816], size: 0.06 }, // Buenos Aires
  ],
};

const GlobeComponent = () => {
  // This component now renders a canvas instead of a Three.js mesh
  // But we use it as a fallback for the Three.js scene
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  let phi = 0;
  let width = 0;

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.003;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);
    
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  // This is a standalone component now that returns a canvas
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full opacity-0 transition-opacity duration-500"
      style={{
        contain: 'layout paint size',
        cursor: 'grab'
      }}
      onPointerDown={(e) =>
        updatePointerInteraction(
          e.clientX - pointerInteractionMovement.current,
        )
      }
      onPointerUp={() => updatePointerInteraction(null)}
      onPointerOut={() => updatePointerInteraction(null)}
      onMouseMove={(e) => updateMovement(e.clientX)}
      onTouchMove={(e) =>
        e.touches[0] && updateMovement(e.touches[0].clientX)
      }
    />
  );
};

export default GlobeComponent;
