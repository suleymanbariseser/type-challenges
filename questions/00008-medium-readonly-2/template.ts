type MyReadonly2<T, K extends keyof T = any> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
} & Omit<T, K>
