type MyParameters<T> = T extends (...args: infer P) => any ? P : never
