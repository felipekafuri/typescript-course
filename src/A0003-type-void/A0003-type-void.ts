function noReturn(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  name: 'felipe',
  last_name: 'kafuri'
}

noReturn(pessoa.name, pessoa.last_name)

export { pessoa }
