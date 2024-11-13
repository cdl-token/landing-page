import SecondaryButton from "@/components/buttons/SecondaryButton";
import HeaderLogo from "./HeaderLogo";
import MovingBar from "./MovingBar";
import NavLinks from "./NavLinks";

const Header = ({ lang = "en" }) => {
  return (
    <header className="flex fixed w-full flex-col z-50">
      <MovingBar />
      <div className="flex w-full items-center justify-center py-3">
        <div className="flex w-full max-w-[85rem] items-center justify-between gap-10 px-5">
          <div className="flex items-center">
            <HeaderLogo />
            <NavLinks lang={lang} />
          </div>
          <SecondaryButton title="Contact" />
        </div>
      </div>
    </header>
  );
};

export default Header;
