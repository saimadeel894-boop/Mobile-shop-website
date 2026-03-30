import { motion } from "framer-motion";
import staff1 from "@/assets/staff-1.jpeg";
import staff2 from "@/assets/staff-2.jpeg";
import staffTeam from "@/assets/staff-team.jpeg";

const team = [
  { name: "Leila Yu", title: "Operations Manager", image: staff1 },
  { name: "Benny Wu", title: "Sales Director", image: staff2 },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-ya-blue text-sm font-bold tracking-widest uppercase">Meet Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">Our Team</h2>
          <p className="text-muted-foreground mt-3">We are pleased to serve you!</p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group w-52"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary mb-4 ring-2 ring-transparent group-hover:ring-ya-blue transition-all duration-300 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
              <p className="text-sm text-ya-blue font-medium">{member.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border"
        >
          <img
            src={staffTeam}
            alt="Apex Grade Phones Team"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
