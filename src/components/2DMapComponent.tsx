
import React, { useEffect, useRef } from 'react';

const Map2DComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Create a simple visualization of a 2D map
    const canvas = document.createElement('canvas');
    canvas.width = mapRef.current.clientWidth;
    canvas.height = mapRef.current.clientHeight;
    mapRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Draw a simple world map outline
    const drawMap = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set map background
      ctx.fillStyle = '#e0f2fe';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw continents (simplified)
      ctx.fillStyle = '#93c5fd';
      
      // North America
      drawContinent(ctx, [
        {x: 0.1, y: 0.2},
        {x: 0.3, y: 0.2},
        {x: 0.35, y: 0.45},
        {x: 0.15, y: 0.55},
        {x: 0.05, y: 0.45}
      ], canvas.width, canvas.height);
      
      // South America
      drawContinent(ctx, [
        {x: 0.25, y: 0.55},
        {x: 0.3, y: 0.55},
        {x: 0.35, y: 0.85},
        {x: 0.25, y: 0.85},
        {x: 0.2, y: 0.65}
      ], canvas.width, canvas.height);
      
      // Europe & Africa
      drawContinent(ctx, [
        {x: 0.45, y: 0.2},
        {x: 0.55, y: 0.2},
        {x: 0.6, y: 0.45},
        {x: 0.55, y: 0.8},
        {x: 0.45, y: 0.8},
        {x: 0.4, y: 0.45}
      ], canvas.width, canvas.height);
      
      // Asia & Australia
      drawContinent(ctx, [
        {x: 0.6, y: 0.2},
        {x: 0.85, y: 0.25},
        {x: 0.9, y: 0.45},
        {x: 0.8, y: 0.6},
        {x: 0.85, y: 0.75},
        {x: 0.75, y: 0.8},
        {x: 0.65, y: 0.5},
        {x: 0.55, y: 0.35}
      ], canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.strokeStyle = '#bfdbfe';
      ctx.lineWidth = 1;
      
      // Latitude lines
      for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.moveTo(0, (canvas.height / 6) * i);
        ctx.lineTo(canvas.width, (canvas.height / 6) * i);
        ctx.stroke();
      }
      
      // Longitude lines
      for (let i = 0; i < 9; i++) {
        ctx.beginPath();
        ctx.moveTo((canvas.width / 8) * i, 0);
        ctx.lineTo((canvas.width / 8) * i, canvas.height);
        ctx.stroke();
      }
      
      // Add animation dots
      const time = Date.now() / 1000;
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time * 0.5 + i * 0.5) * 0.3 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.5 + i * 0.7) * 0.3 + 0.5) * canvas.height;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0.7)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    const drawContinent = (ctx: CanvasRenderingContext2D, points: {x: number, y: number}[], width: number, height: number) => {
      if (points.length < 3) return;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x * width, points[0].y * height);
      
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x * width, points[i].y * height);
      }
      
      ctx.closePath();
      ctx.fill();
    };
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      drawMap();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!mapRef.current) return;
      canvas.width = mapRef.current.clientWidth;
      canvas.height = mapRef.current.clientHeight;
      drawMap();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mapRef.current && mapRef.current.contains(canvas)) {
        mapRef.current.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-xl bg-blue-50"></div>;
};

export default Map2DComponent;
