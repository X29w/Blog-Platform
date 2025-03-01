import DeskTopNavbar from "@/components/client/common/DeskTopNavbar";
import MobileNavbar from "@/components/client/common/MobileNavbar";
import type { FC, PropsWithChildren } from "react";

interface NavbarContainerProps extends PropsWithChildren {}

const NavbarContainer: FC<NavbarContainerProps> = ({ children }) => (
  <div className="relative">
    <DeskTopNavbar children={children} />
    <MobileNavbar children={children} />
  </div>
);

export default NavbarContainer;
