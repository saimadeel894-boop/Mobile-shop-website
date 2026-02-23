const team = [
  { name: "Leila Yu.", title: "", image: "https://yaphones.shop/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-16-at-01.03.43_ffd2e924-e1763227028850.jpg" },
  { name: "Benny Wu", title: "", image: "https://yaphones.shop/wp-content/uploads/2025/11/6bae6e2a308007596152329c931d6291.jpeg" },
  { name: "wendy liu", title: "", image: "https://yaphones.shop/wp-content/uploads/2025/11/9c7cfbac79fcf703ca2272b98db4621a.jpg" },
  { name: "charles Zhang", title: "", image: "https://yaphones.shop/wp-content/uploads/2025/11/ee5ded528e2abb3b11fc0e907a5614cc.jpg" },
  { name: "Sunny Liu", title: "", image: "https://yaphones.shop/wp-content/uploads/2025/11/e87b0376a0da493000ca3b316395ea26.jpg" },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Team</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-2" />
        <p className="text-center text-muted-foreground mb-8">This is our team, we are pleasure to serve you!</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              {member.title && <p className="text-sm text-muted-foreground">{member.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
