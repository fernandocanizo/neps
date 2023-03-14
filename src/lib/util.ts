export const parseDecimal = (str: string | undefined): number =>
  str ? parseInt(str, 10) : 0
