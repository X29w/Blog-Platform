import type { FC } from "react";

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage: FC<PostPageProps> = async ({ params }) => {
  const postId = (await params).id;
  return <div className="text-red-200">123</div>;
};

export default PostPage;
