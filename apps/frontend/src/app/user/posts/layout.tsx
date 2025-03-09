import { FC, Fragment, PropsWithChildren, ReactNode } from "react";

interface PostsLayoutProps extends PropsWithChildren {
  modal: ReactNode;
}

const PostsLayout: FC<PostsLayoutProps> = ({ children, modal }) => (
  <Fragment>
    {children}
    {modal}
  </Fragment>
);

export default PostsLayout;
