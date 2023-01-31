type MyOmit<T, K extends keyof T> = {
  [F in keyof T as F extends K ? never : F]: T[F]
}
