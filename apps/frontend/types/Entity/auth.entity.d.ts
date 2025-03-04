declare module Auth {
  /** 注册时的表单数据 */
  interface ISignUpFormData {
    name?: string;
    email?: string;
    password?: string;
  }

  /** 注册时的表单错误信息 */
  interface ISignUpFormErrors {
    name?: string[];
    email?: string[];
    password?: string[];
  }

  /** 注册表单的基本类型 */
  interface ISignUpFormBase {
    data: ISignUpFormData;
    errors?: ISignUpFormErrors;
    message?: string;
  }

  /** 注册表单的状态类型 */
  export type ISignUpFormState = OneOf<[ISignUpFormBase, undefined]>;
}
