"use client";

import { useActionState } from "react";
import { saveNewPost } from "@/service/services/post";
import UpsertPostForm from "./UpsertPostForm";

const CreatePostContainer = () => {
  const [state, action] = useActionState(saveNewPost, undefined);
  return <UpsertPostForm state={state} formAction={action} />;
};

export default CreatePostContainer;
