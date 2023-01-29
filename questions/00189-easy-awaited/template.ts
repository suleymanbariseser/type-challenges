type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer K>
  ? K extends PromiseLike<any>
    ? MyAwaited<K>
    : K
  : T
