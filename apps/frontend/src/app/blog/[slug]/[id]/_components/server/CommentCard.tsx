import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "@heroicons/react/20/solid";

interface CommentCardProps {
  comment: Comment.IComment;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => (
  <div className="p-2 shadow rounded">
    <div className="flex gap-2 text-slate-500 items-center">
      <Avatar className="border-2">
        <AvatarImage src={comment.author.avatar} />
        <AvatarFallback>
          <UserIcon className="w-8" />
        </AvatarFallback>
      </Avatar>
      <p>{comment.author.name} | </p>
      <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
    </div>
    <p className="mt-4">{comment.content}</p>
  </div>
);

export default CommentCard;
