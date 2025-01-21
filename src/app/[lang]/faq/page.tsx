import PrimaryButton from "@/components/buttons/PrimaryButton";
import FaqMain from "./_components/FaqMain";
import FAQs from "./_components/faq/FAQs";
import FaqForm from "@/components/forms/FaqForm";

const FaqPage = () => {
  return (
    <div className="max-w-screen flex h-full flex-col items-center overflow-hidden">
      <FaqMain />
      <div className="grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[7fr_3fr]">
        <FAQs />
        <FaqForm />
      </div>
    </div>
  );
};

export default FaqPage;
