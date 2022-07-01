export type PickSameTypes<T, U> = Pick<T, Extract<keyof T, keyof U>>;

export * from './style';
