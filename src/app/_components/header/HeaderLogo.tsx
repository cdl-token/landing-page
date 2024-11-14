import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <Image src="/static/logo.svg" width={90} height={90} alt="LOGO" />
      <h1 className="text-2xl font-bold uppercase text-nowrap">CDL token</h1>
    </div>
  );
};

export default HeaderLogo;
