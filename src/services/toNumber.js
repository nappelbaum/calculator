export default function toNumber(string) {
  return string ? parseInt(String(string).replace(/[^0-9]/gim, '')) : 0
}
