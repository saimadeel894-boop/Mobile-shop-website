import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Discover the Latest iPhones",
    subtitle: "Experience Power • Design • Innovation",
    cta: "Shop Now",
    link: "/category/iphone",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/33cfc21b2279781656ad20f048207cb2.jpg",
    badge: "NEW ARRIVALS",
  },
  {
    title: "Explore the New Galaxy Series",
    subtitle: "Power • Style • Innovation",
    cta: "Shop Now",
    link: "/category/samsung",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/d3a201688435a25ea5516a51498fcfbf.jpg",
    badge: "BESTSELLER",
  },
  {
    title: "Experience the Power of Google Pixel",
    subtitle: "Smart • Fast • Innovative",
    cta: "Shop Now",
    link: "/category/pixel",
    bgImage: "https://yaphones.shop/wp-content/uploads/2025/11/google-2023-1.jpg",
    badge: "TRENDING",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-ya-navy/80 via-ya-navy/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ya-navy/60 via-transparent to-transparent" />

          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block bg-ya-blue/20 text-ya-blue-light border border-ya-blue/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6"
              >
                {slide.badge}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-primary-foreground/70 text-lg md:text-xl mb-8 font-light"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link
                  to={slide.link}
                  className="group inline-flex items-center gap-3 bg-ya-blue text-primary-foreground px-8 py-4 rounded-full text-sm font-bold hover:bg-ya-blue-light transition-all duration-300 hover:shadow-lg hover:shadow-ya-blue/30"
                >
                  {slide.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 z-10 transition-all">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/20 z-10 transition-all">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 48 : 16 }}
          >
            <div className="absolute inset-0 bg-primary-foreground/30 rounded-full" />
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-ya-blue rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
