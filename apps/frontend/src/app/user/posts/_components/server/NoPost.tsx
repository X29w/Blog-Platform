import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FC } from "react";

const NoPost: FC<CommonComponent> = ({ className = "", style }) => (
  <div
    className={`mt-32 flex flex-col items-center gap-5 ${className}`}
    style={style}
  >
    <p className="text-center p-4 text-5xl text-slate-400">No Post Yet!</p>
    <Button asChild>
      <Link
        className="flex items-center justify-center"
        href={"/user/create-post"}
      >
        <span>
          <PencilSquareIcon className="w-4" />
        </span>
        <span>Write Your First Post</span>
      </Link>
    </Button>
  </div>
);

export default NoPost;
