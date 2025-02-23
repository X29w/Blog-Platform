"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import type { FC } from "react";

const DeskTopNavbar: FC<PropsWithChildren> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  const isScrollDown = scrollPosition > 10;
  const isHome = pathname === "/";

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={cn(
        "hidden fixed transition-colors w-full z-50 text-white top-0 md:block",
        {
          "bg-white text-gray-700 shadow-md": isScrollDown || !isHome,
        }
      )}
    >
      <div className="flex items-center px-4 py-4 container">{children}</div>
      <hr className="border-b border-gray-100 opacity-25 " />
    </nav>
  );
};

export default DeskTopNavbar;
