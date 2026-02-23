import { MessageCircle, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <>
      {/* Second marquee bar */}
      <div className="bg-ya-dark text-primary-foreground py-1.5 overflow-hidden whitespace-nowrap border-b border-border/10">
        <div className="animate-marquee inline-block">
          <span className="mx-4 text-sm">| Factory-Direct Smartphones-Save More with Yaphones |</span>
          <span className="mx-4 text-sm">New year Cheer: Flat 20% OFF — Until 31/01/26 use "NEWYEAR2026" at checkout! |</span>
          <span className="mx-4 text-sm">iPhones, Samsung & Pixel — Cheapest Factory Pricing |</span>
          <span className="mx-4 text-sm">| Factory-Direct Smartphones-Save More with Yaphones |</span>
          <span className="mx-4 text-sm">New year Cheer: Flat 20% OFF — Until 31/01/26 use "NEWYEAR2026" at checkout! |</span>
          <span className="mx-4 text-sm">iPhones, Samsung & Pixel — Cheapest Factory Pricing |</span>
        </div>
      </div>
      {/* Contact info */}
      <div className="bg-ya-dark text-primary-foreground py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <a href="https://wa.me/13322637184" className="flex items-center gap-2 hover:text-ya-blue-light transition-colors">
              <MessageCircle className="h-5 w-5 text-ya-green" />
              <div>
                <div className="text-sm font-semibold">Whatsapp</div>
                <div className="text-xs text-muted-foreground">+1 (332) 2637184</div>
              </div>
            </a>
            <a href="mailto:support@yaphones.shop" className="flex items-center gap-2 hover:text-ya-blue-light transition-colors">
              <Mail className="h-5 w-5 text-ya-blue" />
              <div>
                <div className="text-sm font-semibold">E-mail</div>
                <div className="text-xs text-muted-foreground">support@yaphones.shop</div>
              </div>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 border border-border/30 rounded-full px-3 py-1.5 text-sm">
            <span>🇬🇧</span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
