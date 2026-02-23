import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ya-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company Profile</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-ya-blue transition-colors">Who we are</Link></li>
              <li><Link to="/contact" className="hover:text-ya-blue transition-colors">Contact Us</Link></li>
              <li>Phone : +1 (332) 2637184</li>
              <li>Email: support@apexgradephones.com</li>
              <li>Address: Feiyang Times Building, Huafa South Road, Futian District, Shenzhen, Guangdong Province, China. Postcode: 518039</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Service & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-ya-blue transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Bulk phone renewal/refurbishment services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Orders & Deliveries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-ya-blue transition-colors">Shipping & Handling</a></li>
              <li><a href="#" className="hover:text-ya-blue transition-colors">Warranty & Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter :</h3>
            <p className="text-sm text-muted-foreground mb-4">Would you like to receive occasional info on products and offers?</p>
            <div className="flex gap-2 mb-6">
              <input type="email" placeholder="Email" className="flex-1 px-3 py-2 rounded bg-ya-dark text-primary-foreground text-sm border border-border/20 outline-none focus:border-ya-blue" />
              <button className="bg-ya-blue px-4 py-2 rounded text-sm font-medium hover:bg-ya-blue-light transition-colors">Submit</button>
            </div>
            <h4 className="text-sm font-bold mb-3">Social Icons :</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.tiktok.com/@apexgrade_retail" className="bg-ya-blue rounded-full p-2 hover:bg-ya-blue-light transition-colors text-xs font-bold flex items-center justify-center w-8 h-8">TT</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img src="https://yaphones.shop/wp-content/uploads/2020/12/84b87e9ae2c147d18f4c03cbc50079e8-2.png" alt="Payment methods" className="h-8 object-contain" loading="lazy" />
          </div>
          <p className="text-sm text-muted-foreground">Copyright © 2023. All Rights Reserved By Apex Grade Phones.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
