import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";

const WhyInvestSection = () => {
  return (
    <section className="max-w-screen flex w-full items-center justify-center overflow-hidden">
      <div className="grid w-full max-w-7xl gap-10 border-t border-white/30 px-5 py-20 sm:min-h-[1300px] md:min-h-[700px] md:grid-cols-2 lg:min-h-[700px] 2xl:min-h-[800px]">
        <div className="relative w-full">
          <Image
            src="/static/shape.png"
            className="md:absolute hidden md:block md:-top-20"
            width={223}
            height={315}
            alt="shape"
          />
          <Image
            src="/static/shape-1.png"
            className="md:absolute md:top-20 md:max-w-[450px] sm:max-w-full"
            width={624}
            height={600}
            alt="shape"
          />
        </div>
        <div className="static z-10 flex w-full flex-col gap-5 md:justify-center">
          <span className="font-neue font-bold">Unbreakable protection</span>
          <h1 className="font-neue text-3xl md:text-5xl font-bold">
            Why invest in CDL Token?
          </h1>
          <span className="text-">
            CDL Token empowers investors with real-time analytics, live charts
            and secure transactions on the Binance Smart chain. With plans to
            expand features and partnerships, CDL Token offers exclusive
            insights and innovative tools for informed, data-driven
            investing--positioning itself as a crypto leader in crypto data
            solutions.
          </span>
          <PrimaryButton className="mt-10 w-fit" title="Buy CDL Token" />
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
