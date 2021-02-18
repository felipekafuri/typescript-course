interface IObjectA {
  readonly a: string
  b: string
  c: 'Carlos' | 'value c'
}

const objectA: IObjectA = {
  a: 'value a',
  b: 'value b',
  c: 'Carlos'
}

console.log(objectA)
