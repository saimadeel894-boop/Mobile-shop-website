import { motion } from "framer-motion";
import { Shield, Truck, Award, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Verified Quality", desc: "Every device tested & certified" },
  { icon: Truck, title: "Global Shipping", desc: "Fast delivery to 50+ countries" },
  { icon: Award, title: "Since 1997", desc: "25+ years of trusted service" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated account managers" },
];

const TrustBadges = () => {
  return (
    <section className="py-14 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="bg-ya-blue/10 rounded-2xl p-3 shrink-0">
                <f.icon className="h-6 w-6 text-ya-blue" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
