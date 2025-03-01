import RenderList from "@/components/general/RenderList";
import type { FC } from "react";
import PostItem from "./PostItem";
import Pagination from "../common/pagination";

interface PostsProps {
  /** 文章列表 */
  posts: Post.IPost[];

  /** 当前页码 */
  currentPage: number;

  /** 总页数 */
  totalPages: number;
}

const Posts: FC<PostsProps> = ({ posts, currentPage, totalPages }) => (
  <section className="container m-8 max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-center text-gray-600  leading-tight">
      Latest Posts
    </h2>
    <div className="h-1 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-96 mb-9 rounded-t-md mt-5"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <RenderList
        items={posts}
        extraKey={(item) => item.id}
        renderItems={(item) => <PostItem {...item} />}
      />
    </div>
    <Pagination
      className="mt-4"
      currentPage={currentPage}
      totalPages={totalPages}
    />
  </section>
);

export default Posts;
