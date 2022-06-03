interface Options {
  [p: string]: any
}

export function classNames(
  type: string,
  className: string | undefined,
  options: Options,
): string {
  //   return options.map((element, index) => {
  //     return index + ''
  //   })
  return type
}
