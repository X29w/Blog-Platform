"use server";

import { authFetchGraphQL, fetchGraphQL } from "@/utils/common/graphql";
import { CREATE_COMMENT_MUTATION, GET_POST_COMMENTS } from "../queries/comment";
import { print } from "graphql";
import { CommentFormSchema } from "@/utils/feature/zodSchema/comment";

export async function getPostComments({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) {
  const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
    postId,
    take,
    skip,
  });

  return {
    comments: data.getPostComments as Comment.IComment[],
    count: data.postCommentCount as number,
  };
}

export async function saveComment(
  state: Comment.ICommentFormState,
  formData: FormData
): Promise<Comment.ICommentFormState> {
  const validatedFields = CommentFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await authFetchGraphQL(print(CREATE_COMMENT_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  console.log({ data });

  if (data)
    return {
      message: "Success! Your comment saved!",
      ok: true,
      open: false,
    };

  return {
    message: "Oops! Something went wrong!",
    ok: false,
    open: true,
    data: Object.fromEntries(formData.entries()),
  };
}
