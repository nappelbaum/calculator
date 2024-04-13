export default function getNoun(arg, titles) {
  let cases = [2, 0, 1, 1, 1, 2]
  return titles[arg % 100 > 4 && arg % 100 < 20 ? 2 : cases[Math.min(arg % 10, 5)]]
}
