const factoryImages = [
  "https://yaphones.shop/wp-content/uploads/2024/11/factory-1.webp",
  "https://yaphones.shop/wp-content/uploads/2024/11/factory-2.webp",
  "https://yaphones.shop/wp-content/uploads/2024/11/factory-3.webp",
  "https://yaphones.shop/wp-content/uploads/2024/11/factory-4.webp",
];

const OurFactory = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Factory</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-4" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our state-of-the-art factory in Shenzhen covers over 694m² and employs 76+ skilled technicians who ensure every device meets our rigorous quality standards.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {factoryImages.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark">
              <img src={img} alt={`Factory ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFactory;
