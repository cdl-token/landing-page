import PrimaryButton from "@/components/buttons/PrimaryButton";
import FaqMain from "./_components/FaqMain";
import FAQs from "./_components/faq/FAQs";

const FaqPage = () => {
  return (
    <div className="max-w-screen flex h-full flex-col items-center overflow-hidden">
      <FaqMain />
      <div className="grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[7fr_3fr]">
        <FAQs />
        <div className="flex flex-col justify-end gap-3 pb-20">
          <h1 className="mb-2 font-neue text-[21px] font-bold">
            Can’t Find Answer? Ask Us
          </h1>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
            placeholder="Name*"
          />
          <input
            type="text"
            name="email"
            id="email"
            className="rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
            placeholder="Email*"
          />
          <textarea
            name="name"
            id="name"
            className="h-[200px] rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
            placeholder="Ask your question"
          ></textarea>
          <PrimaryButton title="Send a message" />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
