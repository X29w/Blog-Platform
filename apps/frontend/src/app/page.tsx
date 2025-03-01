import Hero from "@/components/server/feature/Hero";
import Posts from "@/components/server/feature/Posts";
import { fetchPosts } from "@/service/services/post";
import type { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = async () => {
  // const posts = await fetchPosts()
  return (
    <>
      <Hero />
      <Posts posts={[]} />
    </>
  );
};

export default Home;
