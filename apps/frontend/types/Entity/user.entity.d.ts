declare module User {
  export interface IUser {
    /** 用户的名字 */
    name: string;
    /** 用户的唯一标识符 */
    id: number;
    /** 用户的电子邮件地址 */
    email: string;
    /** 用户的个人简介，可能为空 */
    bio: string | null;
    /** 用户的头像URL，可选 */
    avatar?: string;
    /** 用户的创建时间 */
    createdAt: Date;
    /** 用户的最后更新时间 */
    updatedAt: Date;
  }
}
