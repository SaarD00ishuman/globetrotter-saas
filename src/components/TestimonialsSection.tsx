
const testimonials = [
  {
    quote: "TravelAI transformed our family vacation planning from a stressful experience to an exciting adventure. The AI recommendations were spot-on!",
    author: "Sarah J.",
    role: "Family Traveler",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    quote: "As a solo traveler, safety is my priority. TravelAI not only suggested amazing off-the-beaten-path locations but also provided crucial safety insights.",
    author: "Marcus T.",
    role: "Adventure Seeker",
    avatar: "https://i.pravatar.cc/100?img=2"
  },
  {
    quote: "We used TravelAI to plan our honeymoon and it exceeded all expectations. The personalized itinerary hit every romantic spot we hoped for!",
    author: "Emma & David",
    role: "Newlyweds",
    avatar: "https://i.pravatar.cc/100?img=3"
  }
];

const companies = [
  "TravelMag", "AdventureWeek", "GlobalExplorer", "TripAdvisor", "Wanderlust"
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by travelers worldwide
          </h2>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Join thousands of satisfied travelers who have transformed their travel experience with TravelAI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-white shadow-sm border flex flex-col"
            >
              <div className="mb-4 text-travel-ocean">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-foreground mb-6 flex-grow italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-6">FEATURED IN</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {companies.map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
