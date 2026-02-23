import staff1 from "@/assets/staff-1.jpeg";
import staff2 from "@/assets/staff-2.jpeg";
import staffTeam from "@/assets/staff-team.jpeg";

const team = [
  { name: "Leila Yu", title: "Operations Manager", image: staff1 },
  { name: "Benny Wu", title: "Sales Director", image: staff2 },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Team</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-2" />
        <p className="text-center text-muted-foreground mb-8">This is our team, we are pleased to serve you!</p>
        <div className="flex justify-center gap-6 mb-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group w-48">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden">
          <img
            src={staffTeam}
            alt="Apex Grade Phones Team"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
