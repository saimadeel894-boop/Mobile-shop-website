import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import warehouse1 from "@/assets/warehouse-1.jpeg";
import warehouse2 from "@/assets/warehouse-2.jpeg";
import warehouse3 from "@/assets/warehouse-3.jpeg";

const warehouses = [
  { location: "Shenzhen", country: "China", image: warehouse1 },
  { location: "Dubai", country: "UAE", image: warehouse2 },
  { location: "Amsterdam", country: "Netherlands", image: warehouse3 },
];

const OurWarehouse = () => {
  return (
    <section className="py-20 bg-ya-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">Global Reach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2">Our Warehouses</h2>
          <p className="text-primary-foreground/50 mt-3">Fast, reliable delivery from 3 continents</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {warehouses.map((wh, i) => (
            <motion.div
              key={wh.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-ya-dark mb-4 ring-1 ring-white/10 shadow-xl">
                <img
                  src={wh.image}
                  alt={`${wh.location} Warehouse`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-ya-blue" />
                <h3 className="font-bold text-primary-foreground text-lg">{wh.location}</h3>
                <span className="text-primary-foreground/40 text-sm">• {wh.country}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWarehouse;
