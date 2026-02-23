import warehouse1 from "@/assets/warehouse-1.jpeg";
import warehouse2 from "@/assets/warehouse-2.jpeg";
import warehouse3 from "@/assets/warehouse-3.jpeg";

const warehouses = [
  { location: "Shenzhen Warehouse", image: warehouse1 },
  { location: "Dubai Warehouse", image: warehouse2 },
  { location: "Amsterdam Warehouse", image: warehouse3 },
];

const OurWarehouse = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Warehouse</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
