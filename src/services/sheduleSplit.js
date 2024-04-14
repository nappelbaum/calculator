export default function sheduleSplit(schedule, annMonts) {
  const addIdAnn = schedule.map((el, i) => ({
    ...el,
    id: i + 1,
    annMonts: annMonts
  }))

  let result1 = [],
    result2 = [],
    result3 = []

  if (addIdAnn.length < 8) {
    result1 = addIdAnn
  } else {
    result1 = addIdAnn.slice(0, 4)
    result2 = addIdAnn.slice(4, -2)
    result3 = addIdAnn.slice(-2)
  }

  return { result1, result2, result3 }
}
