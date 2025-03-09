"use client";
import { DEFAULT_PAGE_SIZE } from "@/constant/config";
import { getPostComments } from "@/service/services/comment";
import { useQuery } from "@tanstack/react-query";
import { useState, type FC } from "react";
import AddComment from "./AddComment";
import CommentCard from "../server/CommentCard";
import CommentPagination from "./CommentPagination";
import CommentCardSkeleton from "../server/CommentCardSkeleton";

interface CommentsProps {
  postId: number;
  user?: Session.SessionUser;
}

const Comments: FC<CommentsProps> = ({ postId, user }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["GET_POST_COMMENTS", postId, page],
    queryFn: async () =>
      await getPostComments({
        postId,
        skip: (page - 1) * DEFAULT_PAGE_SIZE,
        take: DEFAULT_PAGE_SIZE,
      }),
  });

  const totalPages = Math.ceil((data?.count ?? 0) / DEFAULT_PAGE_SIZE);
  return (
    <div className="p-2 rounded-md shadow-md">
      <button onClick={() => refetch()}></button>
      <h6 className="text-lg text-slate-700 ">Comments</h6>
      {!!user && <AddComment user={user} postId={postId} refetch={refetch} />}
      <div className="flex flex-col gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <CommentCardSkeleton key={index} />
            ))
          : data?.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
      </div>
      <CommentPagination
        className="p-2"
        currentPage={page}
        setCurrentPage={(p) => setPage(p)}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Comments;
