declare module Post {
  export interface IPost {
    /** 文章的唯一标识符，通常为自增的数字 */
    id: number;

    /** 文章的标题，用于展示和识别文章内容 */
    title: string;

    /** 文章的URL友好标识符，通常用于生成文章链接 */
    slug: string;

    /** 文章的作者，引用自User模块，包含作者的相关信息 */
    author: User.IUser;

    /** 文章的主要内容，通常为HTML或Markdown格式的文本 */
    content: string;

    /** 文章的缩略图URL，可能为空，表示没有缩略图 */
    thumbnail: string | null;

    /** 文章的发布状态，true表示已发布，false表示未发布 */
    published: boolean;

    /** 文章的作者ID，用于关联作者信息 */
    authorId: number;

    /** 文章的标签列表，可能为空，表示文章没有标签 */
    tags?: Tag[];

    /** 文章的创建时间，记录文章最初创建的时间戳 */
    createdAt: Date;

    /** 文章的更新时间，记录文章最后一次修改的时间戳 */
    updatedAt: Date;

    /** 文章的统计信息，包含点赞数和评论数 */
    _count: {
      /** 文章的点赞数，表示文章被点赞的次数 */
      likes: number;

      /** 文章的评论数，表示文章收到的评论数量 */
      comments: number;
    };
  }
}
