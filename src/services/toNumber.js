export default function toNumber(string) {
  const parseNumber = parseInt(String(string).replace(/[^0-9]/gim, ''))

  if (!parseNumber || Number.isNaN(parseNumber)) return 0

  return parseNumber
}
