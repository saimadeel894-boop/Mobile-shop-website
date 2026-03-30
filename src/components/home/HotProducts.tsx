import { Link } from "react-router-dom";
import { Star, Eye, Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { motion } from "framer-motion";

const HotProducts = () => {
  const products = getFeaturedProducts();
  const { toggleItem, isInWishlist } = useWishlist();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">Featured</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Hot Products</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Handpicked devices at unbeatable wholesale prices
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden premium-card"
            >
              <div className="relative aspect-square bg-secondary/30 flex items-center justify-center p-6">
                {product.isSale && (
                  <span className="absolute top-3 left-3 bg-ya-blue text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full z-10 tracking-wider">
                    SALE
                  </span>
                )}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover actions */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="bg-card/95 backdrop-blur rounded-full p-2.5 hover:bg-ya-blue hover:text-primary-foreground transition-colors shadow-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleItem(product.id)}
                    className={`rounded-full p-2.5 transition-colors shadow-lg backdrop-blur ${
                      isInWishlist(product.id)
                        ? "bg-ya-blue text-primary-foreground"
                        : "bg-card/95 hover:bg-ya-blue hover:text-primary-foreground"
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-card/95 backdrop-blur rounded-full p-2.5 hover:bg-ya-blue hover:text-primary-foreground transition-colors shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 hover:text-ya-blue transition-colors leading-snug">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < product.rating ? "fill-ya-orange text-ya-orange" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                </div>
                <p className="text-base font-bold text-ya-blue mt-2">
                  ${product.priceRange[0].toFixed(2)} – ${product.priceRange[1].toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex items-center justify-center gap-4"
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 bg-ya-blue text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold hover:bg-ya-blue-light transition-all duration-300 hover:shadow-lg hover:shadow-ya-blue/30"
          >
            View All Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HotProducts;
