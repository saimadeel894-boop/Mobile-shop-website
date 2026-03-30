import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Who we are", path: "/about" },
  {
    label: "iPhones",
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
  {
    label: "iPad",
    path: "/category/ipad",
    children: [
      { label: "New iPads", path: "/category/ipad/new" },
    ],
  },
  {
    label: "Laptops",
    path: "/category/laptop",
    children: [
      { label: "HP Laptops", path: "/category/laptop/new" },
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
    <header className="glass-dark sticky top-0 z-50 text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Apex Grade Phones" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="flex w-full rounded-full overflow-hidden ring-1 ring-white/10">
            <select className="bg-ya-navy/80 text-primary-foreground text-sm px-4 py-2.5 border-r border-white/10 outline-none">
              <option>All</option>
              <option>iPhones</option>
              <option>Samsung</option>
              <option>Google Pixel</option>
              <option>iPad</option>
              <option>Laptops</option>
            </select>
            <input type="text" placeholder="Search products..." className="flex-1 px-4 py-2.5 bg-primary-foreground text-foreground text-sm outline-none" />
            <button className="bg-ya-blue px-5 hover:bg-ya-blue-light transition-colors">
              <Search className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/account" className="hover:text-ya-blue-light transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/wishlist" className="relative hover:text-ya-blue-light transition-colors">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-ya-blue text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">{wishlistCount}</span>
            )}
          </Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-ya-blue-light transition-colors">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-ya-blue text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">{totalItems}</span>
              )}
            </div>
            <span className="text-sm font-bold">${totalPrice.toFixed(2)}</span>
          </Link>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <nav className="bg-ya-navy/50 border-t border-white/5">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <li key={item.label} className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link to={item.path} className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:text-ya-blue transition-colors">
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 glass-dark rounded-xl shadow-2xl min-w-48 z-50 py-1 overflow-hidden">
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path} className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-ya-blue hover:bg-white/5 transition-colors">{child.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-ya-dark border-t border-white/5 px-4 py-4">
          <div className="flex mb-4 rounded-full overflow-hidden ring-1 ring-white/10">
            <input type="text" placeholder="Search products..." className="flex-1 px-4 py-2.5 bg-primary-foreground text-foreground text-sm outline-none" />
            <button className="bg-ya-blue px-4"><Search className="h-4 w-4 text-primary-foreground" /></button>
          </div>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link to={item.path} className="block py-2.5 text-sm font-medium text-primary-foreground hover:text-ya-blue" onClick={() => setMobileOpen(false)}>{item.label}</Link>
              {item.children?.map((child) => (
                <Link key={child.path} to={child.path} className="block py-2 pl-4 text-sm text-primary-foreground/50 hover:text-ya-blue" onClick={() => setMobileOpen(false)}>{child.label}</Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
