type MyOmit<T, K> = {
  [F in keyof T as F extends K ? never : F]: T[F]
}
