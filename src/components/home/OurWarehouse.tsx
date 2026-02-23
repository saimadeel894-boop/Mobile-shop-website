const warehouses = [
  { location: "Shenzhen", image: "https://yaphones.shop/wp-content/uploads/2024/11/warehouse-shenzhen.webp" },
  { location: "Dubai", image: "https://yaphones.shop/wp-content/uploads/2024/11/warehouse-dubai.webp" },
  { location: "Amsterdam", image: "https://yaphones.shop/wp-content/uploads/2024/11/warehouse-amsterdam.webp" },
  { location: "Chicago USA", image: "https://yaphones.shop/wp-content/uploads/2024/11/warehouse-chicago.webp" },
];

const OurWarehouse = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Warehouse</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {warehouses.map((wh) => (
            <div key={wh.location} className="group">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark mb-3">
                <img
                  src={wh.image}
                  alt={`Warehouse ${wh.location}`}
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
