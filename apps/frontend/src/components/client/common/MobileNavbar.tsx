import type { FC, PropsWithChildren } from "react";
import SideBar from "./SideBar";
import { Bars3Icon } from "@heroicons/react/16/solid";

interface MobileNavbarProps extends PropsWithChildren {}

const MobileNavbar: FC<MobileNavbarProps> = ({ children }) => (
  <div className="md:hidden">
    <SideBar
      triggerIcon={<Bars3Icon className="w-4" />}
      triggerClassName="absolute top-2 left-2"
      children={children}
    />
  </div>
);

export default MobileNavbar;
