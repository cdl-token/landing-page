import StayInformed from "@/components/StayInformed";
import CDLvs from "./_components/cdl-vs/CDLvs";
import Comprehensive from "./_components/Comprehensive";
import FilterSearch from "./_components/FilterSearch";
import HowDoes from "./_components/HowDoes";
import ServiceMain from "./_components/ServiceMain";
import SimpleScalabale from "./_components/SimpleScalabale";
import TokenPowers from "./_components/TokenPowers";
import VersatileDelivery from "./_components/VersatileDelivery";
import ExploreNow from "./_components/ExploreNow";

const ServicesPage = async ({ params }) => {
  const lang = (await params).lang;
  return (
    <div className="max-w-screen flex flex-col overflow-hidden">
      <ServiceMain />
      <HowDoes />
      <Comprehensive />
      <ExploreNow />
      <VersatileDelivery />
      <FilterSearch />
      <CDLvs />
      <SimpleScalabale lang={lang} />
      <TokenPowers />
      <StayInformed />
    </div>
  );
};

export default ServicesPage;
