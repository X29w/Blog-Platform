import { FC, PropsWithChildren } from "react";

interface PostsLayoutProps extends PropsWithChildren {}

const PostsLayout: FC<PostsLayoutProps> = ({ children }) => (
  <div className="mt-24 flex flex-col justify-center items-center">
    {children}
  </div>
);

export default PostsLayout;
