import ConditionalRender from "@/components/general/ConditionalRender";
import SignInPanel from "@/components/server/common/SignInPanel";
import { getSession } from "@/utils/config/session";
import Link from "next/link";
import type { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = async () => {
  const session = await getSession();
  return (
    <>
      <h1 className="text-2xl font-bold p-2">My Modern Blog</h1>
      <div className="md:ml-auto  px-2 flex flex-col md:flex-row gap-2 md:items-center md:justify-center [&>a:hover]:bg-sky-500 [&>a:hover]:text-sky-100 [&>a]:rounded-md [&>a]:transition [&>a]:duration-200 [&>a]:px-4 md:[&>a]:py-2 [&>a]:py-1 ">
        <Link href="/" className="">
          Blog
        </Link>
        <Link href="#about" className="">
          About
        </Link>
        <Link href="#contact" className="">
          Contact
        </Link>

        <ConditionalRender
          condition={!!(session && session.user)}
          fallback={<SignInPanel />}
        >
          <a href="/api/auth/signout">Sign Out</a>
        </ConditionalRender>
      </div>
    </>
  );
};

export default NavBar;
