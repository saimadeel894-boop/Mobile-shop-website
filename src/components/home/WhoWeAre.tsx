import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building2, Users, Package, Calendar } from "lucide-react";

const stats = [
  { label: "Founded", value: 1997, suffix: "", icon: Calendar, description: "Years of excellence" },
  { label: "Factory Area", value: 694, suffix: "m²", icon: Building2, description: "Production facility" },
  { label: "Team Members", value: 76, suffix: "+", icon: Users, description: "Skilled professionals" },
  { label: "Annual Sales", value: 17, suffix: "M+", icon: Package, description: "Units shipped yearly" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-ya-navy relative overflow-hidden">
      {/* Subtle grid pattern */}
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
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            APEX GRADE PHONES GROUP
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl font-light text-primary-foreground/90 mb-4 italic">
              "Tech is everywhere, so are we."
            </p>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 text-base">
              Apex Grade Phones Company was founded in May 1997. It is a group company, founded by a group of high-tech personnel in Shenzhen, China. Our company specializes in the design and production of mobile phones, digital products, and enterprise solutions — serving clients across 50+ countries worldwide.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-ya-blue text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold hover:bg-ya-blue-light transition-all duration-300 hover:shadow-lg hover:shadow-ya-blue/30"
            >
              Learn More About Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_-ro1UUFKOk"
              title="Apex Grade Phones Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-ya-blue mx-auto mb-3" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-primary-foreground/80 font-medium mt-1">{stat.label}</div>
              <div className="text-xs text-primary-foreground/40 mt-0.5">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
