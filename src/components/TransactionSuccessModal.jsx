// import { CheckCheck, ChevronRight, X } from "lucide-react";
// import PrimaryButton from "./buttons/PrimaryButton";
// import { useContext } from "react";
// import { Store } from "@/context/Store/Store";

// export default function TransactionSuccessModal() {
//   const { setTransactionSuccess, transactionHash } = useContext(Store);

//   const handleLinkOpen = () => {
//     window.open(transactionHash, "_blank");
//   };

//   return (
//     <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/80 py-40">
//       <div className="bg-custom-bg flex w-[350px] flex-col items-center gap-1 rounded-2xl p-8">
//         <div className="text-gray-400 flex w-full justify-end">
//           <button onClick={() => setTransactionSuccess(false)}>
//             <X size={12} />
//           </button>
//         </div>
//         <div className="bg-gray-900 mb-3 rounded-xl p-3 text-primary">
//           <CheckCheck size={52} />
//         </div>
//         <span className="text-center text-xl" onClick={handleLinkOpen}>
//           Transaction Success
//         </span>
//         <button
//           className="text-gray-400 mb-3 flex items-center gap-2 font-sans text-sm"
//           onClick={handleLinkOpen}
//         >
//           Transaction details <ChevronRight size={16} />
//         </button>
//         <PrimaryButton
//           title="BUY MORE TOKENS"
//           onClick={() => setTransactionSuccess(false)}
//         />
//       </div>
//     </div>
//   );
// }

import { Store } from "@/context/Store/Store";
import { CheckCheck, ChevronRight, X } from "lucide-react";
import PrimaryButton from "./buttons/PrimaryButton";
import { useContext } from "react";

export default function TransactionModal() {
  const {
    approvalPending,
    transactionPending,
    transactionSuccess,
    setApprovalPending,
    setTransactionPending,
    setTransactionSuccess,
    setTransactionHash,
    setTransactionHashID,
    transactionFailed,
    setTransactionFailed,
    errorToast,
    setErrorToast,
    setShowModel,
    transactionHash,
  } = useContext(Store);

  const handleLinkOpen = () => {
    window.open(transactionHash, "_blank");
  };

  const handleStartTransaction = async () => {
    setErrorToast("");
    setTransactionHash("");
    setTransactionHashID("");
    setShowModel(false);
    setApprovalPending(false);
    setTransactionPending(false);
    setTransactionSuccess(false);
    setTransactionFailed(false);
  };

  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/80 py-40">
      <div className="flex w-[350px] flex-col items-center gap-1 rounded-2xl bg-custom-bg p-8">
        <div className="flex w-full justify-end text-gray-400">
          <button onClick={() => handleStartTransaction(false)}>
            <X size={12} />
          </button>
        </div>

        {approvalPending && (
          <div className="text-warning mb-3 rounded-xl bg-gray-900 p-3">
            {/* Approval Pending Icon or message */}
            <span className="text-center text-xl">
              Approval Request Pending...
            </span>
          </div>
        )}

        {transactionPending && (
          <div className="text-warning mb-3 rounded-xl bg-gray-900 p-3">
            {/* Transaction Pending Icon or message */}
            <span className="text-center text-xl">
              Please wait for the transaction to complete...
            </span>
          </div>
        )}

        {transactionFailed && (
          <div className="text-warning mb-3 rounded-xl bg-gray-900 p-3">
            {/* Transaction Pending Icon or message */}
            <span className="text-center text-xl">{errorToast}</span>
          </div>
        )}

        {transactionSuccess && (
          <div className="mb-3 rounded-xl bg-gray-900 p-3 text-primary">
            <CheckCheck size={52} />
          </div>
        )}

        {/* <span className="text-center text-xl">
          {approvalPending
            ? "Approval Request Pending..."
            : transactionPending
              ? "Transaction is being processed..."
              : transactionSuccess
                ? "Transaction Successful"
                : "Initiating Transaction"}
        </span> */}

        {transactionSuccess && (
          <button
            className="mb-3 flex items-center gap-2 font-sans text-sm text-gray-400"
            onClick={handleLinkOpen}
          >
            View Transaction <ChevronRight size={16} />
          </button>
        )}

        <PrimaryButton
          title={
            approvalPending || transactionPending
              ? "Please Wait..."
              : "Buy More Tokens"
          }
          onClick={handleStartTransaction}
          disabled={approvalPending || transactionPending}
        />
      </div>
    </div>
  );
}
