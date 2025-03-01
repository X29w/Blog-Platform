import { cn } from "@/utils/common/tailwind";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";
import { useOnClickOutside } from "usehooks-ts";

interface SideBarProps extends PropsWithChildren {
  /** 触发侧边栏的图标 */
  triggerIcon: ReactNode;

  /** 触发侧边栏的按钮类名 */
  triggerClassName?: string;
}

const SideBar: FC<SideBarProps> = ({
  triggerIcon,
  triggerClassName,
  children,
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef<RefObject<HTMLElement>>(null);
  useOnClickOutside(ref as any, () => setShow(false));

  return (
    <>
      <button
        className={triggerClassName}
        onClick={() => setShow((prev) => !prev)}
      >
        {triggerIcon}
      </button>
      <div
        ref={ref as any}
        className={cn(
          "w-60 absolute top-0 z-50 duration-300  transition-all bg-white rounded-r-md min-h-screen",
          {
            "-left-full": !show,
            "left-0": show,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default SideBar;
