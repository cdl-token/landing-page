import MainBanner from "../_components/sections/main-banner/MainBanner";
import { OurServices } from "../_components/sections/our-services/OurServices";
import TokenomicsSection from "../_components/sections/tokenomics/TokenomicsSection";
import TopCompaniesStrip from "../_components/sections/top-companies/TopCompaniesStrip";
import WhyInvestSection from "../_components/sections/WhyInvestSection";
import PresaleSection from "../_components/sections/presale/PresaleSection";
import FeaturesSection from "../_components/sections/FeaturesSection";
import Roadmap from "../_components/sections/Roadmap";
import TokenSection from "../_components/sections/TokenSection";
import UnlockSection from "../_components/sections/UnlockSection";
import PopularQuestions from "../_components/sections/popular-questions/PopularQuestions";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden flex flex-col">
      <MainBanner />
      <TopCompaniesStrip />
      <PresaleSection />
      <WhyInvestSection />
      <OurServices />
      <TokenomicsSection />
      <FeaturesSection />
      <Roadmap />
      <TokenSection />
      <UnlockSection />
      <PopularQuestions />
    </div>
  );
}
