const warehouses = [
  { location: "Shenzhen Warehouse", image: "https://yaphones.shop/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-23.03.54_430c0f2d-e1763062306803.jpg" },
  { location: "Dubai Warehouse", image: "https://yaphones.shop/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-23.10.52_0decedf0-e1763062259666.jpg" },
  { location: "Amsterdam Warehouse", image: "https://yaphones.shop/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-23.16.51_8b3f3903-e1764071859330.jpg" },
  { location: "Chicago,USA Warehouse", image: "https://yaphones.shop/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-23.18.09_26ab41bd.jpg" },
];

const OurWarehouse = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our warhouse</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {warehouses.map((wh) => (
            <div key={wh.location} className="group">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark mb-3">
                <img
                  src={wh.image}
                  alt={wh.location}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center font-semibold text-foreground">{wh.location}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWarehouse;
