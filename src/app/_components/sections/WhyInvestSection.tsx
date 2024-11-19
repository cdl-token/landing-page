import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";

const WhyInvestSection = () => {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden max-w-screen">
      <div className="grid min-h-screen w-full max-w-7xl gap-10 border-t border-white/30 px-5 py-20 md:grid-cols-2">
        <div className="relative w-full">
          <Image
            src="/static/shape.png"
            className="absolute -top-20"
            width={223}
            height={315}
            alt="shape"
          />
          <Image
            src="/static/shape-1.png"
            className="absolute top-20"
            width={624}
            height={600}
            alt="shape"
          />
        </div>
        <div className="flex w-full justify-center flex-col gap-5">
          <span className="font-neue font-bold">Unbreakable protection</span>
          <h1 className="font-neue text-5xl font-bold">
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
