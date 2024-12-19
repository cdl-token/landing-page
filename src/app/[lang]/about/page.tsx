import AboutMain from "./_components/AboutMain";
import WhatIsCDL from "./_components/WhatIsCDL";
import JoinTheSystem from "./_components/JoinTheSystem";
import TransformingSection from "./_components/TransformingSection";
import OurTeam from "./_components/OurTeam";
import StayInformed from "../../../components/StayInformed";
import FAQs from "./_components/faq/FAQs";
import Link from "next/link";

const AboutPage = async ({ params }) => {
  const lang = (await params).lang;
  return (
    <div className="max-w-screen flex flex-col overflow-hidden">
      <AboutMain lang={lang} />
      <WhatIsCDL />
      <JoinTheSystem />
      <TransformingSection />
      <OurTeam />
      <FAQs />
      <div className="flex items-center justify-center px-5 py-10">
        <p className="font-neue text-xs sm:text-sm md:text-base">
          Haven’t got your answer?{" "}
          <Link href="/contact" className="text-primary">
            Contact our support now
          </Link>
        </p>
      </div>
      <StayInformed />
    </div>
  );
};

export default AboutPage;
