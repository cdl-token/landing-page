import Link from "next/link";

const NavLinks = ({ lang = "en" }) => {
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
      title: "Services",
      href: `/${lang}/services`,
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
    <div className="flex items-center gap-8 px-10">
      {headerLinks.map((link, index) => (
        <Link
          className="font-apfel text-lg font-bold"
          key={index}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
