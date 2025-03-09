"use server";

import { authFetchGraphQL, fetchGraphQL } from "@/utils/common/graphql";
import { print } from "graphql";
import {
  CREATE_POST_MUTATION,
  DELETE_POST_MUTATION,
  GET_POST_BY_ID,
  GET_POSTS,
  GET_USER_POSTS,
  UPDATE_POST_MUTATION,
} from "../queries/post";
import { transformTakeSkip } from "@/utils/common/pagination";
import { PostFormSchema } from "@/utils/feature/zodSchema/post";

export const fetchPosts = async ({ page, pageSize }: Pagination) => {
  const { skip, take } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_POSTS), { skip, take });

  return { posts: data.posts as Post.IPost[], totalPosts: data.postCount };
};

export const fetchPostById = async (id: number) => {
  const data = await fetchGraphQL(print(GET_POST_BY_ID), { id });

  return data.getPostById as Post.IPost;
};

export const fetchUserPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize: number;
}) => {
  const { take, skip } = transformTakeSkip({ page, pageSize });
  const data = await authFetchGraphQL(print(GET_USER_POSTS), {
    take,
    skip,
  });

  return {
    posts: data.getUserPosts as Post.IPost[],
    totalPosts: data.userPostCount as number,
  };
};

export async function saveNewPost(
  state: Post.IPostForm,
  formData: FormData
): Promise<Post.IPostForm> {
  const validatedFields = PostFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  // let thumbnailUrl = "";
  // Todo:Upload Thumbnail to supabase
  // if (validatedFields.data.thumbnail)
  // thumbnailUrl = await uploadThumbnail(validatedFields.data.thumbnail);

  // Todo: call garphql api

  const input = {
    ...validatedFields.data,
    ...(validatedFields.data.postId && {
      postId: validatedFields.data.postId,
    }),
    thumbnail: "",
  };
  if (isNaN(validatedFields.data.postId as number)) {
    delete input.postId;
  }

  console.log("****************************", input);

  const data = await authFetchGraphQL(print(CREATE_POST_MUTATION), {
    input,
  });

  if (data) return { message: "Success! New Post Saved", ok: true };
  return {
    message: "Oops, Something Went Wrong",
    data: Object.fromEntries(formData.entries()),
  };
}

export async function updatePost(
  state: Post.IPostForm,
  formData: FormData
): Promise<Post.IPostForm> {
  const validatedFields = PostFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  // Todo: check if thumbnail has been changed
  const { ...inputs } = validatedFields.data;

  // Todo:Upload Thumbnail to supabase

  const data = await authFetchGraphQL(print(UPDATE_POST_MUTATION), {
    input: {
      ...inputs,
      thumbnail: "",
    },
  });

  if (data) return { message: "Success! The Post Updated", ok: true };
  return {
    message: "Oops, Something Went Wrong",
    data: Object.fromEntries(formData.entries()),
  };
}

export const deletePost = async (postId: number) => {
  const data = await authFetchGraphQL(print(DELETE_POST_MUTATION), {
    postId,
  });

  return data.deletePost;
};
