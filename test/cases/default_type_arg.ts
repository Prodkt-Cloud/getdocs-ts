export class Foo<T = number, V = T[]> {
  constructor(readonly value: T, readonly content: V) {}
}

export const x = new Foo(2, [2]);
export const y = new Foo(2, 'hello');
export const z = new Foo('oh', ['wow']);
