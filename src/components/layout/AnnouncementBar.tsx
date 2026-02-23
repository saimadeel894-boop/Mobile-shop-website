const AnnouncementBar = () => {
  const text =
    "YA Phones |New year Cheer: Flat 20% OFF — Until 31/01/26 use \"NEWYEAR2026\" at checkout! |iPhones, Samsung & Pixel — Cheapest Factory Pricing || Factory-Direct Smartphones — Best Wholesale Deals!";

  return (
    <div className="bg-ya-navy text-primary-foreground py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="mx-8 text-sm">{text}</span>
        <span className="mx-8 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
