import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "iPhones",
    link: "/category/iphone",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/33cfc21b2279781656ad20f048207cb2.jpg",
    count: "50+ Models",
  },
  {
    name: "Samsung",
    link: "/category/samsung",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/d3a201688435a25ea5516a51498fcfbf.jpg",
    count: "30+ Models",
  },
  {
    name: "Google Pixel",
    link: "/category/pixel",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/google-2023-1.jpg",
    count: "15+ Models",
  },
  {
    name: "iPad",
    link: "/category/ipad",
    image: "https://yaphones.shop/wp-content/uploads/2024/11/iPhone-15-Pro-Max-1-300x300.webp",
    count: "10+ Models",
  },
  {
    name: "Laptops",
    link: "/category/laptop",
    image: "/assets/hp-elitebook-1030-g3-1.jpeg",
    count: "HP EliteBook",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">Browse</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Product Categories</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Premium smartphones, tablets & laptops at factory-direct pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={cat.link}
                className="relative group block rounded-2xl overflow-hidden aspect-[3/4] bg-ya-dark premium-card"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ya-navy via-ya-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-xs text-ya-blue-light font-medium mb-1">{cat.count}</p>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{cat.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-primary-foreground/70 group-hover:text-ya-blue-light transition-colors">
                    Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
