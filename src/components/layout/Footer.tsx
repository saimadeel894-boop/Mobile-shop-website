import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-ya-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Apex Grade Phones" className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
              Premium graded smartphones, tablets & laptops at factory-direct pricing. Trusted by businesses in 50+ countries since 1997.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 rounded-full p-2.5 hover:bg-ya-blue transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="bg-white/10 rounded-full p-2.5 hover:bg-ya-blue transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.tiktok.com/@apexgrade_retail" className="bg-white/10 rounded-full p-2.5 hover:bg-ya-blue transition-colors text-xs font-bold flex items-center justify-center w-9 h-9">TT</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-primary-foreground/80">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-primary-foreground/50 hover:text-ya-blue transition-colors">Who We Are</Link></li>
              <li><Link to="/shop" className="text-primary-foreground/50 hover:text-ya-blue transition-colors">Shop All</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/50 hover:text-ya-blue transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-primary-foreground/50 hover:text-ya-blue transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-primary-foreground/50 hover:text-ya-blue transition-colors">Warranty & Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-primary-foreground/80">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-ya-blue mt-0.5 shrink-0" />
                <span className="text-primary-foreground/50">+1 (332) 2637184</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-ya-blue mt-0.5 shrink-0" />
                <span className="text-primary-foreground/50">support@apexgradephones.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-ya-blue mt-0.5 shrink-0" />
                <span className="text-primary-foreground/50">Feiyang Times Building, Huafa South Road, Futian District, Shenzhen, China</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-primary-foreground/80">Newsletter</h3>
            <p className="text-sm text-primary-foreground/50 mb-4">Get exclusive deals and product updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-white/5 text-primary-foreground text-sm border border-white/10 outline-none focus:border-ya-blue transition-colors"
              />
              <button className="bg-ya-blue px-5 py-2.5 rounded-full text-sm font-bold hover:bg-ya-blue-light transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img src="https://yaphones.shop/wp-content/uploads/2020/12/84b87e9ae2c147d18f4c03cbc50079e8-2.png" alt="Payment methods" className="h-8 object-contain opacity-60" loading="lazy" />
          </div>
          <p className="text-xs text-primary-foreground/30">© {new Date().getFullYear()} Apex Grade Phones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
