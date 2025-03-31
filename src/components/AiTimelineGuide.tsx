
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const AiTimelineGuide = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "Understand",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-10">
          <p className="text-neutral-800 dark:text-neutral-200 mb-4">
            Our AI travel assistant analyzes your preferences, past travels, and current interests to understand what makes a perfect trip for you.
          </p>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e" 
                alt="AI analyzing travel preferences" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Plan",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-10">
          <p className="text-neutral-800 dark:text-neutral-200 mb-4">
            Based on your unique profile, our AI crafts intelligent itineraries that balance your must-see destinations with hidden gems you wouldn't find on your own.
          </p>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1527489377706-5bf97e608852" 
                alt="AI planning travel itinerary" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Optimize",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-10">
          <p className="text-neutral-800 dark:text-neutral-200 mb-4">
            The AI continuously refines your trip by monitoring weather forecasts, ticket prices, local events, and real-time travel conditions to ensure you get the best experience.
          </p>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8" 
                alt="AI optimizing travel plans" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Assist",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-10">
          <p className="text-neutral-800 dark:text-neutral-200 mb-4">
            During your journey, our AI companion provides real-time assistance with local recommendations, navigation help, language translation, and instant solutions to any travel hiccups.
          </p>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83" 
                alt="AI providing real-time travel assistance" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Learn",
      content: (
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 mb-10">
          <p className="text-neutral-800 dark:text-neutral-200 mb-4">
            After each trip, the AI learns from your feedback and experiences to make your next adventure even more tailored to your evolving preferences and travel style.
          </p>
          <div className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06" 
                alt="AI learning from travel experiences" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-6 text-center font-bold text-gradient">
          How Our AI Travel Assistant Works
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-center text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Your personal AI travel companion that makes every journey seamless, personalized, and unforgettable.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 border border-blue-600 dark:border-blue-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-600 dark:text-blue-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AiTimelineGuide;
