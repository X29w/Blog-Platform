import { fetchUserPosts } from "@/service/services/post";
import NoPost from "./_components/server/NoPost";
import PostList from "./_components/server/PostList";
import { DEFAULT_PAGE_SIZE } from "@/constant/config";
import { FC } from "react";
import ConditionalRender from "@/components/general/ConditionalRender";

interface UserPostPageProps {
  searchParams: Promise<{
    [key: string]: OneOf<[string, string[], undefined]>;
  }>;
}

const UserPostPage: FC<UserPostPageProps> = async ({ searchParams }) => {
  const { page } = await searchParams;
  const { totalPosts, posts } = await fetchUserPosts({
    page: page ? +page : 1,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  return (
    <div>
      <ConditionalRender condition={posts.length > 0} fallback={<NoPost />}>
        <PostList
          posts={posts}
          currentPage={page ? +page : 1}
          totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
        />
      </ConditionalRender>
    </div>
  );
};

export default UserPostPage;
