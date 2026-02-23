import { Link } from "react-router-dom";
import { Star, Eye, Heart, ShoppingCart } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

const HotProducts = () => {
  const products = getFeaturedProducts();
  const { toggleItem, isInWishlist } = useWishlist();

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Hot Products</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-2" />
        <p className="text-center text-muted-foreground mb-8">You can see more categories in the navigation bar.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-secondary/50 flex items-center justify-center p-4">
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-ya-blue text-primary-foreground text-xs font-bold px-2 py-0.5 rounded z-10">
                    Sale!
                  </span>
                )}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                {/* Hover actions */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-background/90 rounded-full p-2 hover:bg-ya-blue hover:text-primary-foreground transition-colors shadow">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => toggleItem(product.id)}
                    className={`rounded-full p-2 transition-colors shadow ${
                      isInWishlist(product.id) ? "bg-ya-blue text-primary-foreground" : "bg-background/90 hover:bg-ya-blue hover:text-primary-foreground"
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-background/90 rounded-full p-2 hover:bg-ya-blue hover:text-primary-foreground transition-colors shadow"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-3">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 hover:text-ya-blue transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < product.rating ? "fill-ya-orange text-ya-orange" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                </div>
                <p className="text-sm font-bold text-card-foreground mt-1">
                  ${product.priceRange[0].toFixed(2)} – ${product.priceRange[1].toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 flex items-center justify-center gap-4">
          <Link
            to="/shop"
            className="inline-block bg-ya-blue text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold hover:bg-ya-blue-light transition-colors"
          >
            Show All
          </Link>
          <Link
            to="/shop"
            className="inline-block border border-ya-blue text-ya-blue px-6 py-2.5 rounded text-sm font-semibold hover:bg-ya-blue hover:text-primary-foreground transition-colors"
          >
            All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
