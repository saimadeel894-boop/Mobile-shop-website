import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Who we are", path: "/about" },
  {
    label: "Iphones",
    path: "/category/iphone",
    children: [
      { label: "New iPhones", path: "/category/iphone/new" },
      { label: "Used iPhones", path: "/category/iphone/used" },
    ],
  },
  {
    label: "Samsung",
    path: "/category/samsung",
    children: [
      { label: "New Samsung", path: "/category/samsung/new" },
      { label: "Used Samsung", path: "/category/samsung/used" },
    ],
  },
  {
    label: "Google Pixel",
    path: "/category/pixel",
    children: [
      { label: "New Google Pixel", path: "/category/pixel/new" },
      { label: "Used Google Pixel", path: "/category/pixel/used" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const { totalItems, totalPrice } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-ya-dark text-primary-foreground sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://yaphones.shop/wp-content/uploads/2021/02/WhatsApp_Image_2025-10-16_at_01.03.39_fafd1217-removebg-preview-e1762945705759.png"
            alt="YA PHONES"
            className="h-12 w-auto"
          />
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="flex w-full rounded-md overflow-hidden">
            <select className="bg-ya-navy text-primary-foreground text-sm px-3 py-2.5 border-r border-border/20 outline-none">
              <option>All</option>
              <option>iPhones</option>
              <option>Samsung</option>
              <option>Google Pixel</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2.5 bg-primary-foreground text-foreground text-sm outline-none"
            />
            <button className="bg-ya-blue px-4 hover:bg-ya-blue-light transition-colors">
              <Search className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
            <ChevronDown className="h-4 w-4" />
            <span>Recently Viewed Products</span>
          </div>
          <Link to="/account" className="hover:text-ya-blue-light transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="relative hover:text-ya-blue-light transition-colors">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-ya-blue text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-ya-blue-light transition-colors">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-ya-blue text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-sm font-semibold">${totalPrice.toFixed(2)}</span>
          </Link>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-ya-navy border-t border-border/10">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center gap-0">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className="relative group flex items-center"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {index > 0 && (
                  <span className="text-border/30 text-lg">|</span>
                )}
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-3 text-sm font-medium hover:text-ya-blue transition-colors ${
                    item.label === "Home" ? "text-ya-blue" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-ya-dark border border-border/20 rounded-md shadow-lg min-w-48 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-primary-foreground hover:bg-ya-navy hover:text-ya-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ya-dark border-t border-border/10 px-4 py-4">
          <div className="flex mb-4 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2.5 bg-primary-foreground text-foreground text-sm outline-none"
            />
            <button className="bg-ya-blue px-4">
              <Search className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className="block py-2.5 text-sm font-medium text-primary-foreground hover:text-ya-blue"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-ya-blue"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
