declare module Session {
  export interface SessionUser {
    /**
     * 用户的唯一标识符，通常是一个字符串类型的ID。
     * 该字段是可选的，可能在某些情况下不存在。
     */
    id?: string;
    /**
     * 用户的显示名称，通常用于界面展示。
     * 该字段是可选的，可能在某些情况下不存在。
     */
    name?: string;
    /**
     * 用户的头像URL，用于展示用户的头像图片。
     * 该字段是可选的，可能在某些情况下不存在。
     */
    avatar?: string;
  }

  export interface Session {
    /**
     * 包含用户信息的对象，类型为 `SessionUser`。
     * 该字段是必需的，表示当前会话的用户信息。
     */
    user: SessionUser;
    /**
     * 访问令牌，用于身份验证和授权。
     * 该字段是必需的，表示当前会话的访问令牌。
     */
    accessToken: string;
  }
}
