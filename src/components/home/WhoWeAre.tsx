const stats = [
  { label: "Since", value: "1997" },
  { label: "Factory Area", value: "694m²" },
  { label: "Staffs", value: "76+" },
  { label: "Annual Sales", value: "17,386,704+" },
];

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Who We Are</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              YA Phones Group, founded in 1997, is headquartered in Shenzhen, China. With over 25 years of experience in the mobile phone industry, we have established ourselves as a leading wholesale and retail provider of new and used smartphones. Our product range includes the latest iPhones, Samsung Galaxy devices, and Google Pixel phones.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We pride ourselves on offering factory-direct pricing, ensuring our customers get the best deals on premium smartphones. With warehouses in Shenzhen, Dubai, Amsterdam, and Chicago, we deliver worldwide with speed and reliability.
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-ya-dark">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YA Phones Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-background rounded-xl p-6 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-ya-blue">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
