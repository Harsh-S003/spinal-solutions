import HeroSection from "../sections/HeroSection";
import BannerStrip from "../components/BannerStrip";
import OrderingLogisticsSection from "../sections/OrderingLogisticsSection";
import LeadershipMessageSection from "../sections/LeadershipMessageSection";
import FabricationPortfolioSection from "../sections/FabricationPortfolioSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <BannerStrip />
      <FabricationPortfolioSection />

      <LeadershipMessageSection />
      <OrderingLogisticsSection />
    </div>
  );
};

export default Home;
