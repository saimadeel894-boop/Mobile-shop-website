const factoryImages = [
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103180927_74939-e1764070754399.jpg", label: "YaPhones Workshop-1" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103180959_45850.jpg", label: "YaPhones Workshop-2" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103181535_32588.jpg", label: "YaPhones Workshop-3" },
  { image: "https://yaphones.shop/wp-content/uploads/2025/11/20201103181545_67883-e1764071076213.jpg", label: "YaPhones Workshop-4" },
];

const OurFactory = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Our Factory</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-4" />
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          <strong>YAPHONES</strong> Electronic about cell phone area : it is professional digital and communication product manufacturing, refurbished & repair service provider.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {factoryImages.map((item) => (
            <div key={item.label} className="group">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-ya-dark">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <h3 className="text-center font-semibold text-foreground mt-2 text-sm">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFactory;
