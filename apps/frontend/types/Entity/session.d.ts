declare module Session {
  export interface SessionUser {
    id?: string;
    name?: string;
    avatar?: string;
  }

  export interface Session {
    user: SessionUser;
    accessToken: string;
  }
}
