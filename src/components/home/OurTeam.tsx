const team = [
  { name: "Leila Yu", title: "CEO & Founder", image: "https://yaphones.shop/wp-content/uploads/2024/11/Leila-Yu.webp" },
  { name: "Benny Wu", title: "Sales Director", image: "https://yaphones.shop/wp-content/uploads/2024/11/Benny-Wu.webp" },
  { name: "Wendy Liu", title: "Operations Manager", image: "https://yaphones.shop/wp-content/uploads/2024/11/Wendy-Liu.webp" },
  { name: "Charles Zhang", title: "Technical Director", image: "https://yaphones.shop/wp-content/uploads/2024/11/Charles-Zhang.webp" },
  { name: "Sunny Liu", title: "Marketing Manager", image: "https://yaphones.shop/wp-content/uploads/2024/11/Sunny-Liu.webp" },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Team</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
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
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
