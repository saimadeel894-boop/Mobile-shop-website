import { Link } from "react-router-dom";

const categories = [
  {
    name: "Iphones",
    link: "/category/iphone",
    image: "https://yaphones.shop/wp-content/uploads/2024/11/iPhone-16-Pro-Max-Desert-Titanium-1.webp",
  },
  {
    name: "Samsung",
    link: "/category/samsung",
    image: "https://yaphones.shop/wp-content/uploads/2024/11/S24-Ultra-1.webp",
  },
  {
    name: "Google Pixel",
    link: "/category/pixel",
    image: "https://yaphones.shop/wp-content/uploads/2024/12/Google-pixel-9-pro-1.webp",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Product Categories</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-2" />
        <p className="text-muted-foreground mb-8">You can see more categories in the navigation bar</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark flex items-center justify-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-ya-navy/60" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">{cat.name}</h3>
                <span className="text-sm text-primary-foreground/80 underline">View more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
