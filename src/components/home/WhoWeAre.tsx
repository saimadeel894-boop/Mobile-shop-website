import { Link } from "react-router-dom";

const stats = [
  { label: "Since", value: "694", icon: "https://yaphones.shop/wp-content/uploads/2025/11/2e7a0633b7c57d6d034ba14a39dea47d.png" },
  { label: "Our Factory(Square Meters)", value: "76+", icon: "https://yaphones.shop/wp-content/uploads/2025/11/789234ba4042539763784a07e10e517e.png" },
  { label: "Staffs", value: "153+", icon: "https://yaphones.shop/wp-content/uploads/2025/11/58cc85ce742c0cbd1e71f9f1eabb320c.png" },
  { label: "Annual Sales", value: "17,386,704+", icon: "https://yaphones.shop/wp-content/uploads/2025/11/9945d5d5cf6e259b3a6cc114b3417cbb.png" },
];

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-2">Who we are</h2>
        <div className="w-16 h-1 bg-ya-blue mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-center text-foreground mb-6">APEX GRADE PHONES GROUP</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tech is everywhere, so are we.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              About Apex Grade Phones Group: Apex Grade Phones Company was founded in May 1997. It is a group company, Founded by a group of high-tech personnel in Shenzhen, China. Apex Grade Electronics Limited (Apex Grade Group Subsidiary) It was established in Hong Kong Special Administrative Region of China on October 24, 2006. It is composed of engineers who specialize in software and hardware development. Our company specializes in the design and production of mobile phones, Bluetooth and digital products, GPS/CAR DVR.
            </p>
            <Link
              to="/about"
              className="inline-block bg-ya-blue text-primary-foreground px-6 py-2.5 rounded text-sm font-semibold hover:bg-ya-blue-light transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-ya-dark">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_-ro1UUFKOk"
              title="Apex Grade Phones Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-background rounded-xl p-6 shadow-sm">
              <img src={stat.icon} alt={stat.label} className="h-10 w-10 mx-auto mb-3 object-contain" loading="lazy" />
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl md:text-3xl font-bold text-ya-blue">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
