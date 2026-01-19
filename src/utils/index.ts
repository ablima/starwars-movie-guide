const numberToRoman: { [key: number]: string } = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
}

export const convertNumberToRoman = (num: number): string => {
  return numberToRoman[num] || '';
}
