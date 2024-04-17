export default function creditsSort(banks) {
  banks.sort((a, b) => {
    const minCalc = (credits) => {
      let min = credits[0].rateMin
      for (let i = 1; i < credits.length; i++) {
        if (credits[i].rateMin < credits[i - 1].rateMin) min = credits[i].rateMin
      }
      return min
    }

    a = minCalc(a.creditResultRows)
    b = minCalc(b.creditResultRows)

    return a - b
  })
}

// Сортировка массива банков по минимальному платежу кредита
