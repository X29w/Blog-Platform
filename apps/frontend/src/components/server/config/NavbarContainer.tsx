import MobileNavbar from "@/components/client/common/MobileNavbar";
import type { FC, PropsWithChildren } from "react";

interface NavbarContainerProps extends PropsWithChildren {}

const NavbarContainer: FC<NavbarContainerProps> = ({ children }) => (
  <div className="relative">
    <DesktopNavbar>{children}</DesktopNavbar>
    <MobileNavbar>{children}</MobileNavbar>
  </div>
);

export default NavbarContainer;
