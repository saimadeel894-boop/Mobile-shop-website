import Layout from "@/components/layout/Layout";
import { MapPin, MessageCircle, Mail } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Address",
    details: "Shenzhen, Guangdong, China",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "+1 (332) 2637184",
    link: "https://wa.me/13322637184",
  },
  {
    icon: Mail,
    title: "Email",
    details: "support@yaphones.shop",
    link: "mailto:support@yaphones.shop",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-foreground mb-2">Contact Us</h1>
          <div className="w-16 h-1 bg-ya-blue mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="bg-ya-blue/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="h-6 w-6 text-ya-blue" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{card.title}</h3>
                {card.link ? (
                  <a href={card.link} className="text-sm text-ya-blue hover:underline">{card.details}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{card.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
