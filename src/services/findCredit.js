export default function findCredit(banks, id) {
  const bank = banks.find((bank) => {
    return bank.creditResultRows.some((credit) => credit.id === +id)
  })
  return bank.creditResultRows.find((credit) => credit.id === +id)
}

// поиск кредита по id (для загрзки на страницу отдельного кредита)
