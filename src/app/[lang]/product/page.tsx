import StayInformed from "@/components/StayInformed"
import CDLvs from "./_components/cdl-vs/CDLvs"
import Comprehensive from "./_components/Comprehensive"
import FilterSearch from "./_components/FilterSearch"
import HowDoes from "./_components/HowDoes"
import ServiceMain from "./_components/ServiceMain"
import SimpleScalabale from "./_components/SimpleScalabale"
import TokenPowers from "./_components/TokenPowers"
import VersatileDelivery from "./_components/VersatileDelivery"
import Graphs from "./_components/Graphs"

const ServicesPage = () => {
  return (
    <div className="max-w-screen flex flex-col overflow-hidden">
        <ServiceMain />
        <HowDoes />
        <Comprehensive />
        {/* <Graphs /> */}
        <VersatileDelivery />
        <FilterSearch />
        <CDLvs />
        <SimpleScalabale />
        <TokenPowers />
        <StayInformed />
    </div>
  )
}

export default ServicesPage