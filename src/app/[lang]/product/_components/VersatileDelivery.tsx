import Image from "next/image";

const VersatileDelivery = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-7xl sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-20">
        <h1 className="font-neue text-[40px] font-bold uppercase leading-[50px]">
          Versatile delivery methods
        </h1>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/clock.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Real-time</h1>
          <span className="leading-[20px] text-white/70">
            On-chain → queryable in less than 3 seconds.
          </span>
        </div>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/websockets.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Websockets</h1>
          <span className="leading-[20px] text-white/70">
          Live-streaming data over unbroken connections.
          </span>
        </div>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/webhooks.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Webhooks</h1>
          <span className="leading-[20px] text-white/70">
          Get alerted when anything happens on-chain.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VersatileDelivery;
