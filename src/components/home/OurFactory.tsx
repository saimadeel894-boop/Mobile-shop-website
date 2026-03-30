import { motion } from "framer-motion";

const factoryImages = [
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103180927_74939-e1764070754399.jpg", label: "Workshop 1" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103180959_45850.jpg", label: "Workshop 2" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103181535_32588.jpg", label: "Workshop 3" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103181545_67883-e1764071076213.jpg", label: "Workshop 4" },
];

const OurFactory = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">Production</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Our Factory</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A professional digital & communication product manufacturing facility with 694m² of production space.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {factoryImages.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-ya-dark ring-1 ring-border shadow-lg">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center font-semibold text-foreground mt-3 text-sm">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFactory;
