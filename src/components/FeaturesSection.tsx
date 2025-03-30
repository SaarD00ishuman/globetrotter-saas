
import { Calendar, Map, Users, DollarSign, ArrowUp, MapPin } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-travel-ocean" />,
    title: "Smart Itinerary Builder",
    description: "Our AI analyzes thousands of options to create personalized day-by-day plans based on your preferences, budget, and travel style."
  },
  {
    icon: <Map className="h-6 w-6 text-travel-forest" />,
    title: "Local Insights",
    description: "Discover hidden gems and authentic experiences with recommendations from locals and seasoned travelers."
  },
  {
    icon: <Users className="h-6 w-6 text-travel-sunset" />,
    title: "Collaborative Planning",
    description: "Invite friends and family to contribute to your travel plans with real-time collaboration and voting features."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-travel-sand" />,
    title: "Budget Optimization",
    description: "Track expenses and get AI-powered suggestions to maximize your travel budget without compromising on experiences."
  },
  {
    icon: <ArrowUp className="h-6 w-6 text-travel-ocean" />,
    title: "Real-time Alerts",
    description: "Stay informed with price drops, weather changes, and travel advisories that might affect your journey."
  },
  {
    icon: <MapPin className="h-6 w-6 text-travel-sunset" />,
    title: "On-trip Companion",
    description: "Access your plans offline and get real-time guidance, translations, and emergency assistance during your travels."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your complete travel companion
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            From initial inspiration to on-the-ground guidance, our AI-powered platform streamlines every aspect of your travel experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full w-fit bg-muted mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
