import { CheckCheck, ChevronRight, X } from "lucide-react";
import PrimaryButton from "./buttons/PrimaryButton";
import { useContext } from "react";
import { Store } from "@/context/Store/Store";

export default function TransactionSuccessModal() {
  const { setTransactionSuccess, transactionHash } = useContext(Store);

  const handleLinkOpen = () => {
    window.open(transactionHash, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/80 py-40">
      <div className="bg-custom-bg flex w-[350px] flex-col items-center gap-1 rounded-2xl p-8">
        <div className="text-gray-400 flex w-full justify-end">
          <button onClick={() => setTransactionSuccess(false)}>
            <X size={12} />
          </button>
        </div>
        <div className="bg-gray-900 mb-3 rounded-xl p-3 text-primary">
          <CheckCheck size={52} />
        </div>
        <span className="text-center text-xl" onClick={handleLinkOpen}>
          Transaction Success
        </span>
        <button
          className="text-gray-400 mb-3 flex items-center gap-2 font-sans text-sm"
          onClick={handleLinkOpen}
        >
          Transaction details <ChevronRight size={16} />
        </button>
        <PrimaryButton
          title="BUY MORE TOKENS"
          onClick={() => setTransactionSuccess(false)}
        />
      </div>
    </div>
  );
}
