type FunctionType<K> = (...props: any[]) => K

type MyReturnType<T> = T extends FunctionType<infer K> ? K : any
