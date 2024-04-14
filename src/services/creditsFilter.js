export default function creditsFilter(data, sum, rate, period) {
  const filteredData = data.filter((bank) => {
    bank.creditResultRows = bank.creditResultRows.filter(
      (credit) =>
        sum >= credit.amountFrom &&
        sum <= credit.amountTo &&
        rate >= credit.rateMin &&
        rate <= credit.rateMax &&
        period >= (credit.periodFrom / 365) * 12 &&
        period <= (credit.periodTo / 365) * 12
    )

    return bank.creditResultRows.length
  })

  return filteredData
}

// Фильтрация массива банков по сумме, ставке и сроку кредита
