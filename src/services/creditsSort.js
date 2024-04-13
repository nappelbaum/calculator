export default function creditsSort(filteredData) {
  filteredData.sort((a, b) => {
    const minCalc = (credits) => {
      let min = credits[0].amountFrom
      for (let i = 1; i < credits.length; i++) {
        if (credits[i].amountFrom < credits[i - 1].amountFrom) min = credits[i].amountFrom
      }
      return min
    }

    a = minCalc(a.creditResultRows)
    b = minCalc(b.creditResultRows)

    return a - b
  })
}
