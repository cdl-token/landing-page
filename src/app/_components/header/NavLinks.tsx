"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface NavLinksProps {
  lang?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ lang = "en" }) => {
  const headerLinks = [
    {
      title: "Home",
      href: `/${lang}/`,
    },
    {
      title: "About",
      href: `/${lang}/about`,
    },
    {
      title: "Product",
      href: `/${lang}/product`,
    },
    {
      title: "Contact",
      href: `/${lang}/contact`,
    },
  ];

  const [docsDropdown, setDocsDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDocsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden items-center gap-8 px-10 lg:flex">
      {headerLinks.map((link, index) => (
        <Link
          className="font-apfel text-lg font-bold"
          key={index}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDocsDropdown(!docsDropdown)}
          className="font-apfel text-lg font-bold"
        >
          Docs
        </button>
        <div
          className={cn(
            "absolute left-[-12px] top-8 flex flex-col rounded bg-custom-bg transition-all duration-100 ease-in",
            docsDropdown ? "h-fit p-1" : "h-0 overflow-hidden",
          )}
        >
          <button
            onClick={() =>
              router.push("https://cdl-token.gitbook.io/cdl-token")
            }
            className="border-b border-white/10 px-3 py-2 text-start hover:bg-white/5"
          >
            Lightpaper
          </button>
          <button className="px-3 py-2 text-start hover:bg-white/5">
            Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
