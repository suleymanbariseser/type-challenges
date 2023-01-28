// reverse of Omit
type MyPick<T, K> = {
  [F in keyof T as F extends K ? F : never]: T[F]
}

