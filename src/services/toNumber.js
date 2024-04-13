export default function toNumber(string) {
  return parseInt(String(string).replace(/[^0-9]/gim, ''))
}
