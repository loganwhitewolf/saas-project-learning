"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "companions",
    href: "/companions",
  },
  {
    label: "my-journey",
    href: "/my-journey",
  },
  {
    label: "subscription",
    href: "/subscription",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={cn(pathname === item.href && "text-primary font-bold")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
