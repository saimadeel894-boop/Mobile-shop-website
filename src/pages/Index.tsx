import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import ProductCategories from "@/components/home/ProductCategories";
import WhoWeAre from "@/components/home/WhoWeAre";
import HotProducts from "@/components/home/HotProducts";
import OurTeam from "@/components/home/OurTeam";
import OurFactory from "@/components/home/OurFactory";
import OurWarehouse from "@/components/home/OurWarehouse";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ProductCategories />
      <WhoWeAre />
      <HotProducts />
      <OurTeam />
      <OurFactory />
      <OurWarehouse />
    </Layout>
  );
};

export default Index;
