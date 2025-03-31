
import { useRef, useState, MouseEvent } from 'react';

export const use3DCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    // Center is 0,0 rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation in degrees
    const maxRotation = 10;
    
    // Calculate rotation (further from center = more rotation)
    const rotateY = maxRotation * ((x - centerX) / centerX);
    const rotateX = -maxRotation * ((y - centerY) / centerY);
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset rotation when mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  const cardStyle = isHovered
    ? {
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`,
        transition: 'transform 0.1s ease'
      }
    : {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.5s ease'
      };

  return {
    cardRef,
    cardStyle,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default use3DCard;
