declare module Auth {
  /** 注册/登录时的表单数据 */
  interface IAuthFormData {
    name?: string;
    email?: string;
    password?: string;
  }

  /** 注册/登录时的表单错误信息 */
  interface IAuthFormErrors {
    name?: string[];
    email?: string[];
    password?: string[];
  }

  /** 注册/登录表单的基本类型 */
  interface IAuthFormBase {
    data: IAuthFormData;
    errors?: IAuthFormErrors;
    message?: string;
  }

  /** 注册/登录表单的状态类型 */
  export type IAuthFormState = OneOf<[IAuthFormBase, undefined]>;
}
