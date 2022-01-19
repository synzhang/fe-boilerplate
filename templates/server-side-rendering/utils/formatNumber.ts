interface IFormatNumberOptions {
  value: number
}

const formatNumber = (number: number | IFormatNumberOptions): string => {
  return String(number)
}

export default formatNumber
