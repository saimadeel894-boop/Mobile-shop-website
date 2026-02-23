import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Discover the Latest iPhones",
    subtitle: "Experience Power • Design • Innovation",
    cta: "Shop Now",
    link: "/category/iphone",
    bg: "from-ya-navy via-ya-dark to-ya-navy",
    image: "https://yaphones.shop/wp-content/uploads/2024/11/iPhone-16-Pro-Max-Desert-Titanium-1.webp",
  },
  {
    title: "Samsung Galaxy Collection",
    subtitle: "Flagship Performance • Foldable Innovation",
    cta: "Shop Now",
    link: "/category/samsung",
    bg: "from-ya-dark via-ya-navy to-ya-dark",
    image: "https://yaphones.shop/wp-content/uploads/2024/11/S24-Ultra-1.webp",
  },
  {
    title: "Google Pixel Series",
    subtitle: "Pure Android • AI Photography • Smart Features",
    cta: "Shop Now",
    link: "/category/pixel",
    bg: "from-ya-navy via-ya-dark to-ya-navy",
    image: "https://yaphones.shop/wp-content/uploads/2024/12/Google-pixel-9-pro-1.webp",
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
    <section className="relative bg-gradient-to-r from-ya-navy to-ya-dark overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 min-h-[400px]">
        <div className="flex-1 z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">{slide.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{slide.subtitle}</p>
          <Link
            to={slide.link}
            className="inline-block bg-ya-orange text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {slide.cta}
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={slide.image}
            alt={slide.title}
            className="max-h-72 md:max-h-96 object-contain drop-shadow-2xl"
          />
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-ya-blue" : "bg-primary-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
