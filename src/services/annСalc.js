export default function annCalc(sum, rate, period) {
  const ratePart = rate / 100
  const monthRate = ratePart / 12
  const topPart = +(sum * monthRate)
  const bottomPart = +(1 - 1 / Math.pow(monthRate + 1, period))
  const annMonts = +(topPart / bottomPart).toFixed(0)

  return rate ? annMonts : 0
}

// Расчет ежемесячного платежа по кредиту
