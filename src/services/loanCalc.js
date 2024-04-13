export default function loanCalc(sum, rate, period) {
  const ratePart = rate / 100
  const monthRate = ratePart / 12
  const topPart = +(sum * monthRate)
  const bottomPart = +(1 - 1 / Math.pow(monthRate + 1, period))
  const annMonts = +(topPart / bottomPart).toFixed(0)
  const totalSum = annMonts * period
  const overPay = totalSum - sum

  const options = {
    year: 'numeric',
    month: 'long',
    timezone: 'UTC'
  }
  let restSum = sum
  let percent, paid, localDate
  const schedule = []

  for (let i = 1; i <= period; i++) {
    const date = new Date()
    date.setMonth(date.getMonth() + i)
    localDate = date.toLocaleString('ru', options)
    percent = +((restSum * ratePart) / 12).toFixed(2)
    paid = +(annMonts - percent).toFixed(2)
    restSum = +(restSum - paid).toFixed(2)
    if (restSum < 0) restSum = 0

    schedule.push({
      date: localDate,
      restSum,
      percent,
      paid
    })
  }

  return period
    ? { annMonts, overPay, totalSum, schedule }
    : { annMonts: '', overPay: '', totalSum: '', schedule: [] }
}
