"use client";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useActionState, useEffect, type FC } from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { saveComment } from "@/service/services/comment";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/common/tailwind";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/client/common/SubmitButton";
import { toast } from "sonner";

interface AddCommentProps {
  postId: number;
  user: Session.SessionUser;
  className?: string;
  refetch: (options?: RefetchOptions) => Promise<
    QueryObserverResult<
      {
        comments: Comment.IComment[];
        count: number;
      },
      Error
    >
  >;
}

const AddComment: FC<AddCommentProps> = ({
  postId,
  user,
  className,
  refetch,
}) => {
  const [state, action] = useActionState(saveComment, undefined);

  useEffect(() => {
    if (state?.message) toast(state?.ok ? "Success" : "Oops!");
    if (state?.ok) refetch?.();
  }, [state]);
  return (
    <Dialog open={state?.open}>
      <DialogTrigger asChild>
        <Button>Leave Your Comment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Write Your Comment</DialogTitle>
        <form action={action} className={cn(className)}>
          <input hidden name="postId" defaultValue={postId} />
          <Label htmlFor="comment">Your Comment</Label>
          <div className="border-t border-x rounded-t-md">
            <Textarea
              className="border-none active:outline-none focus-visible:ring-0 shadow-none"
              name="content"
            />
            {!!state?.errors?.content && (
              <p className="text-red-500 animate-shake">
                {state.errors.content}
              </p>
            )}
          </div>
          <p className="border rounded-b-md p-2">
            <span className="text-slate-400">Write as </span>
            <span className="text-slate-700">{user.name}</span>
          </p>
          <SubmitButton className="mt-2">Submit</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddComment;
