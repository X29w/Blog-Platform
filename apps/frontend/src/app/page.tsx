import Hero from "@/components/server/feature/Hero";
import Posts from "@/components/server/feature/Posts";
import { DEFAULT_PAGE_SIZE } from "@/constant/config";
import { fetchPosts } from "@/service/services/post";
import { getSession } from "@/utils/config/session";
import type { FC } from "react";

interface HomeProps {
  searchParams: Promise<{
    [key: string]: OneOf<[string, string[], undefined]>;
  }>;
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({
    page: page ? +page : undefined,
  });
  const session = await getSession();

  return (
    <>
      <Hero />
      <Posts
        posts={posts}
        currentPage={page ? +page : 1}
        totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
      />
    </>
  );
};

export default Home;
