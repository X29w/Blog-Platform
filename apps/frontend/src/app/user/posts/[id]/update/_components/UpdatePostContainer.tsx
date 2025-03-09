"use client";

import UpsertPostForm from "@/app/user/create-post/_components/client/UpsertPostForm";
import { updatePost } from "@/service/services/post";
import { useActionState } from "react";

type Props = {
  post: Post.IPost;
};
const UpdatePostContainer = ({ post }: Props) => {
  console.log({ post });
  const [state, action] = useActionState(updatePost, {
    data: {
      postId: post.id,
      title: post.title,
      content: post.content,
      published: post.published ? "on" : undefined,
      tags: post.tags?.map((tag) => tag.name).join(","),
      previousThumbnailUrl: post.thumbnail ?? undefined,
    },
  });
  return <UpsertPostForm state={state} formAction={action} />;
};

export default UpdatePostContainer;
