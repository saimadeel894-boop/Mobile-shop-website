import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Discover the Latest iPhones",
    subtitle: "Experience Power • Design • Innovation",
    cta: "Shop Now",
    link: "/category/iphone",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/33cfc21b2279781656ad20f048207cb2.jpg",
  },
  {
    title: "Explore the New Galaxy Series",
    subtitle: "Power • Style • Innovation",
    cta: "Shop Now",
    link: "/category/samsung",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/d3a201688435a25ea5516a51498fcfbf.jpg",
  },
  {
    title: "Experience the Power of Google Pixel",
    subtitle: "Smart • Fast • Innovative",
    cta: "Shop Now",
    link: "/category/pixel",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/google-2023-1.jpg",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[400px] md:min-h-[500px] bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-ya-navy/50" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center min-h-[400px] md:min-h-[500px]">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{slide.title}</h1>
            <p className="text-primary-foreground/80 text-lg mb-6">{slide.subtitle}</p>
            <Link
              to={slide.link}
              className="inline-block bg-ya-orange text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground z-10">
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground z-10">
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
