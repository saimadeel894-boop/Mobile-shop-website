import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Star, Eye, Heart, ShoppingCart, Grid3X3, List, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";

const Shop = () => {
  const { toggleItem, isInWishlist } = useWishlist();
  const [priceRange, setPriceRange] = useState<[number, number]>([85, 1000]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) => p.priceRange[0] >= priceRange[0] && p.priceRange[1] <= priceRange[1]
    );
    if (selectedBrand) {
      filtered = filtered.filter((p) => p.brand === selectedBrand);
    }
    if (sortBy === "price-asc") filtered.sort((a, b) => a.priceRange[0] - b.priceRange[0]);
    if (sortBy === "price-desc") filtered.sort((a, b) => b.priceRange[0] - a.priceRange[0]);
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
    return filtered;
  }, [priceRange, selectedBrand, sortBy]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const categories = [
    { name: "Samsung", value: "samsung", children: [] },
    { name: "Google Pixel", value: "pixel", children: [] },
    { name: "iPhone", value: "iphone", children: [] },
    { name: "iPad", value: "ipad", children: [] },
    { name: "Laptops", value: "laptop", children: [] },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-ya-blue">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shop</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b-2 border-ya-blue pb-2">Price</h3>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="bg-ya-blue text-primary-foreground px-2 py-0.5 rounded text-xs">${priceRange[0]}</span>
                <span className="bg-ya-blue text-primary-foreground px-2 py-0.5 rounded text-xs">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min={85}
                max={1000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-ya-blue"
              />
              <div className="flex items-center gap-2 mt-3">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-ya-blue" />
                  Featured products
                </label>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="accent-ya-blue" />
                  In stock
                </label>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b-2 border-ya-blue pb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <button
                      onClick={() => {
                        setSelectedBrand(selectedBrand === cat.value ? null : cat.value);
                        toggleCategory(cat.value);
                      }}
                      className={`flex items-center gap-2 text-sm w-full text-left ${
                        selectedBrand === cat.value ? "text-ya-blue font-semibold" : "text-muted-foreground"
                      } hover:text-ya-blue`}
                    >
                      <span>·</span>
                      {cat.name}
                      <ChevronDown className="h-3 w-3 ml-auto" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b-2 border-ya-blue pb-2">Product Color</h3>
              <div className="flex flex-wrap gap-2">
                {["bg-black", "bg-blue-600", "bg-pink-500", "bg-yellow-400"].map((color) => (
                  <button key={color} className={`w-8 h-8 rounded-full ${color} border-2 border-border`} />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-ya-blue text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-ya-blue text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
                >
                  <List className="h-4 w-4" />
                </button>
                <span className="text-sm text-muted-foreground ml-2">
                  Showing 1–{Math.min(12, filteredProducts.length)} of {filteredProducts.length} results
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded px-3 py-1.5 text-sm bg-background text-foreground"
                >
                  <option value="default">Default sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"} gap-4 md:gap-6`}>
              {filteredProducts.slice(0, 12).map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square bg-secondary/50 flex items-center justify-center p-4">
                    {product.isSale && (
                      <span className="absolute top-2 left-2 bg-ya-blue text-primary-foreground text-xs font-bold px-2 py-0.5 rounded z-10">
                        Sale
                      </span>
                    )}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
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
                          className={`h-3 w-3 ${i < Math.round(product.rating) ? "fill-ya-orange text-ya-orange" : "text-muted-foreground"}`}
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
