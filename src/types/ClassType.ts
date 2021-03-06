/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-type-alias
export type ClassType<T = unknown> = new (...args: any[]) => T;

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type InstanceType<T extends ClassType<T>> = T extends ClassType<infer R> ? R : never;

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type FunctionProperty<T> = {
  [K in keyof T]: T[K] extends Function ? T[K] : never;
}[keyof T];
