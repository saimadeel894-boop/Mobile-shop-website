import { Link } from "react-router-dom";

const categories = [
  {
    name: "Iphones",
    link: "/category/iphone",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/33cfc21b2279781656ad20f048207cb2.jpg",
  },
  {
    name: "Samsung",
    link: "/category/samsung",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/d3a201688435a25ea5516a51498fcfbf.jpg",
  },
  {
    name: "Google Pixel",
    link: "/category/pixel",
    image: "https://yaphones.shop/wp-content/uploads/2025/11/google-2023-1.jpg",
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
              className="relative group rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ya-navy/40 group-hover:bg-ya-navy/50 transition-colors" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
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
