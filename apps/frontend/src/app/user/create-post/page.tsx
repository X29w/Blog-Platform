import { FC } from "react";
import CreatePostContainer from "./_components/client/CreatePostContainer";

const CreatePostPage: FC<CommonComponent> = ({ className = "", style }) => (
  <div
    className={`bg-white shadow-md rounded-md p-6 max-w-2xl w-full ${className}`}
    style={style}
  >
    <h2 className="text-lg text-center font-bold text-slate-700">
      Create a New Post
    </h2>
    <CreatePostContainer />
  </div>
);

export default CreatePostPage;
