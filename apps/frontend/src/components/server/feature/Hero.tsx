import { Wave } from "@/components/icons";
import type { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white pt-12">
    <div className="container justify-center mx-auto flex flex-col md:flex-row items-center flex-wrap px-3">
      {/* Left col */}
      <div className="flex flex-col w-full justify-center items-start md:w-2/5 text-center md:text-left">
        <p className="capitalize tracking-wide w-full">
          Explore insights , tutorials, and stories for curious minds like yours
        </p>
        <h2 className="my-5 text-5xl font-bold leading-tight">
          Welcome To Sakura Dev Blog
        </h2>

        <p className="capitalize leading-normal text-xl">
          Join a community that thrives on learning, creating and growing
          together.
        </p>
      </div>

      {/* right col */}
      <div className="w-full flex justify-center text-center py-7 md:w-3/5">
        <img
          src="/images/home/hero.png"
          alt="hero section"
          className="w-full md:w-3/5  "
        />
      </div>
    </div>
    <div className="relative -mt-10 lg:-mt-24">
      <Wave />
    </div>
  </div>
);

export default Hero;
