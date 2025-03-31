
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Map, Globe, CreditCard, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", url: "#", icon: Home },
  { name: "Features", url: "#features", icon: Map },
  { name: "Testimonials", url: "#testimonials", icon: Globe },
  { name: "Pricing", url: "#pricing", icon: CreditCard },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const isMobile = useIsMobile();

  // Set active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (!section.id) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("id");
          if (sectionId === "hero") {
            setActiveTab("Home");
          } else {
            // Capitalize first letter for matching with nav items
            const formattedId = sectionId!.charAt(0).toUpperCase() + sectionId!.slice(1);
            setActiveTab(formattedId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="py-4 border-b backdrop-blur-sm bg-white/70 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-travel-ocean" />
          <span className="font-bold text-xl">TravelAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-3 bg-background/5 border border-travel-ocean/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.name);
                  const element = document.querySelector(item.url);
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth"
                    });
                  }
                }}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors flex items-center gap-2",
                  "text-foreground/80 hover:text-travel-ocean",
                  isActive ? "text-travel-ocean" : ""
                )}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 w-full bg-travel-ocean/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-travel-ocean rounded-b-full">
                      <div className="absolute w-12 h-6 bg-travel-ocean/20 rounded-full blur-md -bottom-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-travel-ocean/20 rounded-full blur-md -bottom-1" />
                      <div className="absolute w-4 h-4 bg-travel-ocean/20 rounded-full blur-sm bottom-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </div>
        
        {/* Mobile navigation */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            className="p-2"
            onClick={() => {
              const mobileNav = document.getElementById("mobile-nav");
              if (mobileNav) {
                mobileNav.classList.toggle("hidden");
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="bg-travel-ocean hover:bg-travel-ocean/90">Sign Up Free</Button>
        </div>
      </div>
      
      {/* Mobile navigation drawer */}
      <div id="mobile-nav" className="hidden md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-travel-ocean/10 shadow-lg py-4 px-6">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            
            return (
              <a
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.name);
                  const element = document.querySelector(item.url);
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth"
                    });
                  }
                  
                  // Hide mobile nav after clicking
                  const mobileNav = document.getElementById("mobile-nav");
                  if (mobileNav) {
                    mobileNav.classList.add("hidden");
                  }
                }}
                className={cn(
                  "flex items-center gap-3 text-sm font-medium p-2 rounded-md",
                  isActive ? "text-travel-ocean bg-travel-ocean/10" : "text-foreground/80"
                )}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </a>
            );
          })}
          
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-travel-ocean/10">
            <Button variant="ghost" size="sm" className="justify-start">
              <User size={18} className="mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-travel-ocean hover:bg-travel-ocean/90 mt-2">Sign Up Free</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
