import RenderList from "@/components/general/RenderList";
import PostListItem from "./PostListItem";
import Pagination from "@/components/server/common/pagination";
import { FC } from "react";

interface PostListProps {
  posts: Post.IPost[];
  currentPage: number;
  totalPages: number;
}

const PostList: FC<PostListProps> = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <div className="grid grid-cols-8 rounded-md shadow-md m-3 p-3 text-center">
        <div className="col-span-2"></div>
        <div></div>
        <div>Date</div>
        <div>Published</div>
        <div>Likes</div>
        <div>Comments</div>
        <div></div>
      </div>

      <RenderList
        items={posts}
        extraKey={(item) => item.id}
        renderItems={(item) => <PostListItem post={item} />}
      />

      <Pagination {...{ currentPage, totalPages }} className="my-4" />
    </>
  );
};

export default PostList;
