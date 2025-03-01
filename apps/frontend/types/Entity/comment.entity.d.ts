declare module Comment {
  export interface IComment {
    /**
     * 评论的唯一标识符
     */
    id: number;

    /**
     * 评论的内容
     */
    content: string;

    /**
     * 评论所属的帖子
     */
    post: Post.IPost;

    /**
     * 评论的作者
     */
    author: User.IUser;

    /**
     * 评论的创建时间
     */
    createdAt: Date;

    /**
     * 评论的最后更新时间
     */
    updatedAt: Date;
  }
}
