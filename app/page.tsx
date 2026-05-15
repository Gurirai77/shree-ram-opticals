import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import CategorySection from "@/components/home/CategorySection";
import TrendingCollections from "@/components/home/TrendingCollections";
import BestSellers from "@/components/home/BestSellers";
import Brands from "@/components/home/Brands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurJourney from "@/components/home/OurJourney";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
// import CustomCursor from "@/components/ui/CustomCursor";
// import Categories from "@/components/home/Categories";
// import BestSellers from "@/components/home/BestSellers";
// import BrandSection from "@/components/home/BrandSection";
// import OfferBanner from "@/components/home/OfferBanner";
// import WhyChoose from "@/components/home/WhyChoose";
// import Testimonials from "@/components/home/Testimonials";
// import StoreSection from "@/components/home/StoreSection";
// import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    {/* <CustomCursor /> */}


      <Topbar />
      <Navbar />
      <HeroSlider />
      <CategorySection />
      <TrendingCollections />
      <BestSellers />
      <Brands/>
      <WhyChooseUs />
      <OurJourney />
      <Testimonials />
      <Footer />
      {/* <Categories />
      <BestSellers />
      <BrandSection />
      <OfferBanner />
      <WhyChoose />
      <Testimonials />
      <StoreSection />
      <Footer /> */}
    </>
  );
}