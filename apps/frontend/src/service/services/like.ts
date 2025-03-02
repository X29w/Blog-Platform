"use server";
import { print } from "graphql";
import { authFetchGraphQL } from "@/utils/common/graphql";
import {
  LIKE_POST_MUTATION,
  POST_LIKES,
  UNLIKE_POST_MUTATION,
} from "../queries/like";

export const getPostLikeData = async (postId: number) => {
  const data = await authFetchGraphQL(print(POST_LIKES), {
    postId,
  });

  return {
    likeCount: data.postLikesCount as number,
    userLikedPost: data.userLikedPost as boolean,
  };
};

export const likePost = async (postId: number) => {
  const data = await authFetchGraphQL(print(LIKE_POST_MUTATION), {
    postId,
  });
};

export const unLikePost = async (postId: number) => {
  const data = await authFetchGraphQL(print(UNLIKE_POST_MUTATION), {
    postId,
  });
};
