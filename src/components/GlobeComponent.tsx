
import React, { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import FallbackSphere from "./FallbackSphere";

type MarkerType = {
  location: [number, number];
  size: number;
};

interface GlobeProps {
  className?: string;
}

const GlobeComponent: React.FC<GlobeProps> = ({ className }) => {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const markers: MarkerType[] = [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ];

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: any) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r, phi, width]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    if (!isClient) return;
    
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1] as [number, number, number],
      markerColor: [251 / 255, 100 / 255, 21 / 255] as [number, number, number],
      glowColor: [1, 1, 1] as [number, number, number],
      markers,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [isClient, onRender]);

  if (!isClient) {
    return <FallbackSphere />;
  }

  return (
    <div className={`relative w-full aspect-square max-w-[600px] mx-auto ${className || ""}`}>
      <canvas
        ref={canvasRef}
        style={{ 
          width: "100%", 
          height: "100%", 
          opacity: 0,
          transition: "opacity 0.5s ease"
        }}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
};

export default GlobeComponent;
