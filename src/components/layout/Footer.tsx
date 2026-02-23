import { Link } from "react-router-dom";
import { Facebook, Instagram, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ya-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Profile */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company Profile</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              YA Phones Group, founded in 1997, is headquartered in Shenzhen, China. We specialize in wholesale and retail of new and used smartphones.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors">
                <Music className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Service & Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-ya-blue transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-ya-blue transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Orders & Deliveries */}
          <div>
            <h3 className="text-lg font-bold mb-4">Orders & Deliveries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-ya-blue transition-colors">Shipping Information</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Warranty Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-ya-dark text-primary-foreground text-sm border border-border/20 outline-none focus:border-ya-blue"
              />
              <button className="bg-ya-blue px-4 py-2 rounded text-sm font-medium hover:bg-ya-blue-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-border/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2023 YA Phones. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="bg-ya-dark px-2 py-1 rounded">VISA</span>
            <span className="bg-ya-dark px-2 py-1 rounded">MasterCard</span>
            <span className="bg-ya-dark px-2 py-1 rounded">PayPal</span>
            <span className="bg-ya-dark px-2 py-1 rounded">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
