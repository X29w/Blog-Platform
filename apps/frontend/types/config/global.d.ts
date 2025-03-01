/** 携带 id 属性的类型 */
export type WithId<T> = T & { id: string };

/**多种类型择其一 */
export type OneOf<T extends unknown[]> = T[number];
