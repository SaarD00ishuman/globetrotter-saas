import React, { useRef, useEffect } from 'react';
import { Calendar, Map, Users, DollarSign, ArrowUp, MapPin } from "lucide-react";
import GlobeComponent from './GlobeComponent';

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-travel-ocean" />,
    title: "Smart Itinerary Builder",
    description: "Our AI analyzes thousands of options to create personalized day-by-day plans based on your preferences, budget, and travel style.",
    position: { top: '10%', left: '25%' }
  },
  {
    icon: <Map className="h-6 w-6 text-travel-forest" />,
    title: "Local Insights",
    description: "Discover hidden gems and authentic experiences with recommendations from locals and seasoned travelers.",
    position: { top: '20%', right: '20%' }
  },
  {
    icon: <Users className="h-6 w-6 text-travel-sunset" />,
    title: "Collaborative Planning",
    description: "Invite friends and family to contribute to your travel plans with real-time collaboration and voting features.",
    position: { bottom: '20%', left: '15%' }
  },
  {
    icon: <DollarSign className="h-6 w-6 text-travel-sand" />,
    title: "Budget Optimization",
    description: "Track expenses and get AI-powered suggestions to maximize your travel budget without compromising on experiences.",
    position: { bottom: '15%', right: '15%' }
  },
  {
    icon: <ArrowUp className="h-6 w-6 text-travel-ocean" />,
    title: "Real-time Alerts",
    description: "Stay informed with price drops, weather changes, and travel advisories that might affect your journey.",
    position: { top: '30%', left: '7%' }
  },
  {
    icon: <MapPin className="h-6 w-6 text-travel-sunset" />,
    title: "On-trip Companion",
    description: "Access your plans offline and get real-time guidance, translations, and emergency assistance during your travels.",
    position: { top: '40%', right: '5%' }
  }
];

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const drawConnectingLines = () => {
      if (!containerRef.current || !svgRef.current) return;

      const svg = svgRef.current;
      const container = containerRef.current;

      // Clear previous paths
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      // Get the center point of the container (where the globe is)
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      // Create paths for each card
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate card center position relative to container
        const cardCenterX = (cardRect.left + cardRect.width / 3) - containerRect.left;
        const cardCenterY = (cardRect.top + cardRect.height / 2) - containerRect.top;

        // Create path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        // Calculate control points for a curved line
        const dx = cardCenterX - centerX;
        const dy = cardCenterY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Adjust control points to create a nice curve
        const controlX = centerX + dx * 0.5 - dy * 0.2;
        const controlY = centerY + dy * 0.5 + dx * 0.2;

        // Create path data for a quadratic curve
        const pathData = `M ${centerX},${centerY} Q ${controlX},${controlY} ${cardCenterX},${cardCenterY}`;

        path.setAttribute('d', pathData);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', `url(#gradient-${index})`);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-dasharray', '5,5');
        path.setAttribute('class', 'connecting-line');

        // Add the path to the SVG
        svg.appendChild(path);
      });

      // Add gradient definitions
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

      // Create different gradients for variety
      const colors = [
        ['#0EA5E9', '#10B981'], // ocean to forest
        ['#10B981', '#F97316'], // forest to sunset
        ['#F97316', '#FBBF24'], // sunset to sand
        ['#FBBF24', '#0EA5E9'], // sand to ocean
        ['#0EA5E9', '#F97316'], // ocean to sunset
        ['#F97316', '#10B981']  // sunset to forest
      ];

      colors.forEach((color, index) => {
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', `gradient-${index}`);
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', color[0]);

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', color[1]);

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
      });

      svg.appendChild(defs);
    };

    // Draw lines initially and on window resize
    drawConnectingLines();
    window.addEventListener('resize', drawConnectingLines);

    // Cleanup
    return () => {
      window.removeEventListener('resize', drawConnectingLines);
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your complete travel companion
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            From initial inspiration to on-the-ground guidance, our AI-powered platform streamlines every aspect of your travel experience.
          </p>
        </div>

        <div ref={containerRef} className="relative h-[600px] md:h-[800px] mx-auto">
          {/* SVG for connecting lines */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>

          {/* Globe Canvas - now a direct component instead of Three.js Canvas */}
          <div className="absolute inset-0 z-0 opacity-80 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <GlobeComponent />
            </div>
          </div>

          {/* Feature Cards positioned around the globe */}
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="absolute w-64 p-4 rounded-xl border bg-white/95 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              style={feature.position as React.CSSProperties}
            >
              <div className="p-3 rounded-full w-fit bg-muted mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
