import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-foreground mb-2">Who We Are</h1>
          <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Apex Grade Phones Group, founded in 1997, is headquartered in Shenzhen, China. With over 25 years of experience in the mobile phone industry, we have established ourselves as a leading wholesale and retail provider of new and used smartphones.
            </p>
            <p>
              Our product range includes the latest iPhones, Samsung Galaxy devices, and Google Pixel phones. We offer both brand new and certified pre-owned devices at factory-direct pricing, ensuring our customers always get the best value.
            </p>
            <p>
              With a factory area of over 694m² and a dedicated team of 76+ skilled professionals, we process and ship over 17 million units annually. Our global warehouse network spans four continents — Shenzhen, Dubai, Amsterdam, and Chicago — enabling fast, reliable delivery worldwide.
            </p>
            <p>
              Quality is at the heart of everything we do. Every device undergoes rigorous testing and inspection before reaching our customers, ensuring you receive only the best products.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
