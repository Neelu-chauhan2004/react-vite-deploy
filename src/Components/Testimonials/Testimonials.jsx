import React from "react";
import Slider from "react-slick"


const testimonialData = [
    {
       id: 1,
       name: "For Creators/Influencers",
       text: "Turn followers into income. Grow your brand, not just your audience.",
       img:  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
     {
       id: 2,
       name: "For Creators/Influencers",
       text: "Launch faster, stand out, and scale smart with growth-focused marketin.",
       img:  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format",
    },
     
  {
    id: 3,
    name: "For E-commerce",
    text: "Convert browsers into buyers. Boost sales with smarter digital marketing.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format" // (e-commerce store)
  },
  {
    id: 4,
    name: "For Real Estate",
    text: "Fill properties faster. Digital tools for modern realtors.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format" // (modern house)
  },
  {
    id: 5,
    name: "For Healthcare Providers",
    text: "Attract more patients. Build trust in your practice online.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format" // (doctor with tablet)
  },
  {
    id: 6,
    name: "For SMEs",
    text: "Enterprise-grade marketing for small business budgets.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format" // (small business team)
  },
  {
    id: 7,
    name: "For B2B Companies",
    text: "Generate quality leads that turn into long-term clients.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format" // (B2B meeting)
  },
  {
    id: 8,
    name: "For Local Businesses",
    text: "Get found by customers right in your neighborhood.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format" // (local storefront)
  },
  {
    id: 9,
    name: "For Education",
    text: "Increase enrollments with digital outreach that works.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format" // (campus students)
  }
];




const Testimonials = () => {
  const settings={
    dots: true,
    arrrows: false,
    infinite: true,
    speed: 600,
    slidersToShow: 1,
     slidersToScroll: 1,
     autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

  };
  return (
    <>  
      <div className="py-10">
  <div className="container">
    {/* Testimonials Section */}
    <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6 overflow-hidden">
      <Slider 
        {...settings}
        speed={300} // Slower transition speed
        autoplay={true}
        autoplaySpeed={1200} // Longer display time per slide
        cssEase="linear" // Smooth linear animation
        // className="tape-slider" // For custom styling
      >
        {testimonialData.map(({id, name, text, img}) => (
          <div key={id} className="my-6 px-4">
            <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-6 rounded-xl dark:bg-gray-800 relative bg-gray-100 shadow-lg">
              <div className="w-full sm:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={name} 
                  className="h-64 sm:h-96 w-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full sm:w-1/2 space-y-6 flex flex-col justify-center p-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  {name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
    </>
  );
};

export default Testimonials;
