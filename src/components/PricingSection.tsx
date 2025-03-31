
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Free",
    description: "Perfect for occasional travelers",
    price: "$0",
    duration: "forever",
    features: [
      "Basic itinerary creation",
      "Up to 3 trips per year",
      "Standard recommendations",
      "Public transport options",
      "Community access"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    description: "For frequent travelers and explorers",
    price: "$12",
    duration: "per month",
    features: [
      "Advanced AI itinerary planning",
      "Unlimited trips",
      "Personalized recommendations",
      "Offline access",
      "Real-time alerts & updates",
      "Trip sharing with 5 people",
      "Budget optimization",
      "24/7 chat support"
    ],
    cta: "Start 14-day free trial",
    highlight: true
  },
  {
    name: "Enterprise",
    description: "For travel agencies and businesses",
    price: "Custom",
    duration: "pricing",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
      "Advanced analytics",
      "Unlimited team members",
      "Enterprise-grade security"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const PricingCard = ({ tier, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-xl border relative z-10 transition-all duration-500 ${
        tier.highlight ? 'pricing-card-highlight shadow-lg' : 'pricing-card-gradient shadow-sm'
      } p-8 transform-gpu perspective-[1000px] cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? `rotateY(${index % 2 === 0 ? '5deg' : '-5deg'}) rotateX(5deg) scale(1.05)` 
          : 'rotateY(0) rotateX(0) scale(1)',
        boxShadow: isHovered 
          ? '0 20px 30px -10px rgba(14, 165, 233, 0.2)' 
          : tier.highlight ? '0 10px 20px -5px rgba(14, 165, 233, 0.15)' : '0 4px 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      {tier.highlight && (
        <div className="absolute -top-4 inset-x-0 mx-auto w-fit px-4 py-1 bg-travel-ocean text-white text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
      <p className="text-muted-foreground mb-6">{tier.description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{tier.price}</span>
        <span className="text-muted-foreground"> {tier.duration}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-travel-ocean shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full ${tier.highlight ? 'bg-travel-ocean hover:bg-travel-ocean/90' : 'bg-travel-ocean/10 text-travel-ocean hover:bg-travel-ocean/20'}`}
      >
        {tier.cta}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose your travel companion
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            From solo explorers to global enterprises, we have the perfect plan for your travel needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-2">
            All plans include a 14-day money-back guarantee
          </p>
          <p className="text-sm text-muted-foreground">
            Need help choosing? <a href="#" className="text-travel-ocean underline">Compare plans</a> or <a href="#" className="text-travel-ocean underline">contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
