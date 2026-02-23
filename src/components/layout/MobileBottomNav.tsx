import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Heart, User } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";

const MobileBottomNav = () => {
  const location = useLocation();
  const { totalItems } = useWishlist();

  const items = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Heart, label: "Wishlist", path: "/wishlist", badge: totalItems },
    { icon: User, label: "Account", path: "/account" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-ya-dark border-t border-border/10 z-50">
      <div className="flex items-center justify-around py-2">
        {items.map(({ icon: Icon, label, path, badge }) => {
          const active = location.pathname === path;
          return (
            <Link key={path} to={path} className="flex flex-col items-center gap-0.5 relative">
              <Icon className={`h-5 w-5 ${active ? "text-ya-blue" : "text-muted-foreground"}`} />
              {badge !== undefined && badge > 0 && (
                <span className="absolute -top-1 right-0 bg-ya-blue text-primary-foreground text-[10px] rounded-full h-3.5 w-3.5 flex items-center justify-center">
                  {badge}
                </span>
              )}
              <span className={`text-[10px] ${active ? "text-ya-blue" : "text-muted-foreground"}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
