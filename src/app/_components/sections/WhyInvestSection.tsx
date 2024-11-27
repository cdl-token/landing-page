import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Image from "next/image";

const WhyInvestSection = () => {
  return (
    <section className="max-w-screen flex w-full items-center justify-center overflow-hidden">
      <div className="grid w-full max-w-7xl gap-10 border-t border-white/30 px-5 py-20 sm:min-h-[1300px] md:min-h-[700px] md:grid-cols-2 lg:min-h-[700px] 2xl:min-h-[800px]">
        <div className="relative hidden w-full md:block">
          <Image
            src="/static/shape.png"
            className="hidden md:absolute md:-top-20 md:block"
            width={223}
            height={315}
            alt="shape"
          />
          <Image
            src="/static/shape-1.png"
            className="sm:max-w-full md:absolute md:top-20 md:max-w-[450px]"
            width={624}
            height={600}
            alt="shape"
          />
        </div>
        <div className="static z-10 flex w-full flex-col gap-5 md:justify-center">
          <span className="font-neue font-bold">Unbreakable protection</span>
          <div className="flex items-center">
            <h1 className="font-neue text-3xl font-bold md:text-5xl">
              Why invest in CDL Token?
            </h1>
            <div className="relative h-[70px] w-10 md:hidden">
              <Image
                src="/static/shape.png"
                className="absolute bottom-0 right-0"
                width={30}
                height={35}
                alt="shape"
              />
              <Image
                src="/static/shape.png"
                className="absolute right-6 top-0"
                width={30}
                height={35}
                alt="shape"
              />
              <Image
                src="/static/shape.png"
                className="absolute bottom-0 right-12"
                width={30}
                height={35}
                alt="shape"
              />
            </div>
          </div>
          <span className="text-">
            CDL Token empowers investors with real-time analytics, live charts
            and secure transactions on the Binance Smart chain. With plans to
            expand features and partnerships, CDL Token offers exclusive
            insights and innovative tools for informed, data-driven
            investing--positioning itself as a crypto leader in crypto data
            solutions.
          </span>
          <div className="flex w-full mt-10 items-center gap-2">
            <PrimaryButton className="w-full sm:w-fit" title="Buy CDL Token" />
            <SecondaryButton className="w-full sm:w-fit" title="Launch Dapp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
