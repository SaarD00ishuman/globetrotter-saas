
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Calendar, Map, Users, DollarSign, ArrowUp, MapPin } from "lucide-react";
import GlobeComponent from './GlobeComponent';

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-travel-ocean" />,
    title: "Smart Itinerary Builder",
    description: "Our AI analyzes thousands of options to create personalized day-by-day plans based on your preferences, budget, and travel style.",
    position: { top: '15%', left: '20%' }
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
    position: { top: '50%', left: '10%' }
  },
  {
    icon: <MapPin className="h-6 w-6 text-travel-sunset" />,
    title: "On-trip Companion",
    description: "Access your plans offline and get real-time guidance, translations, and emergency assistance during your travels.",
    position: { top: '50%', right: '10%' }
  }
];

const FeaturesSection = () => {
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
        
        <div className="relative h-[600px] md:h-[800px] mx-auto">
          {/* Globe Canvas */}
          <div className="absolute inset-0 z-0 opacity-80">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <GlobeComponent />
              </Suspense>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 2 - 0.5}
                maxPolarAngle={Math.PI / 2 + 0.5}
              />
            </Canvas>
          </div>
          
          {/* Feature Cards positioned around the globe */}
          {features.map((feature, index) => (
            <div 
              key={index} 
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
