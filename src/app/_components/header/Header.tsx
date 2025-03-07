"use client";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import HeaderLogo from "./HeaderLogo";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import HeaderSheet from "./HeaderSheet";
import { cn } from "@/lib/utils";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

const Header = ({ lang = "en" }: { lang: string }) => {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 36 && window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!isClient) {
    return null;
  }

  return (
    <header
      className={cn(
        "fixed z-50 w-full flex-col transition-all duration-150 ease-in",
        isClient && window.scrollY > 36 && "top-0",
        isVisible ? "flex" : "hidden",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-center transition-all duration-150 ease-in",
          isClient && window.scrollY > 36 ? "bg-black/50" : "py-3",
        )}
      >
        <div className="flex w-full max-w-[82rem] items-center justify-between gap-5 pl-2 pr-5">
          <div className="flex items-center">
            <HeaderLogo />
            <NavLinks lang={lang} />
          </div>

          {isConnected ? (
            <div className="hidden lg:flex">
              <appkit-button size="md" />
            </div>
          ) : (
            <SecondaryButton
              className="hidden lg:flex"
              action={() => open()}
              title={"Connect Wallet"}
            />
          )}
          <HeaderSheet lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
