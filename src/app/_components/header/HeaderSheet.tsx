import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import Link from "next/link";

const HeaderSheet = ({ lang = "en" }: { lang: string }) => {
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
      title: "Docs",
      href: `/${lang}/docs`,
    },
    {
      title: "Roadmap",
      href: `/${lang}/roadmap`,
    },
  ];
  return (
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={20} />
        </SheetTrigger>
        <SheetContent className="bg-custom-bg border-none text-white">
          <SheetHeader>
            <SheetTitle className="text-white">
              <HeaderLogo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 px-3 py-10">
            {headerLinks.map((link, index) => (
              <SheetClose key={index} asChild>
                <Link className="font-apfel text-lg font-bold" href={link.href}>
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderSheet;
