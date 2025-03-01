declare global {
  /** 携带 id 属性的类型 */
  export type WithId<T> = T & { id: string };

  /**多种类型择其一 */
  export type OneOf<T extends unknown[]> = T[number];

  /** 分页参数类型 */
  export interface Pagination {
    page?: number;
    pageSize?: number;
  }
}

// 确保文件被视为模块
export {};
