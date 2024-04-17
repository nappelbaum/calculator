import axios from 'axios'
import creditsFilter from '@/services/creditsFilter'
import findCredit from '@/services/findCredit'

export default class PostService {
  // получение, фильтрация и (при необходимости) сортировка массива всех банков с кредитами:
  static async getBanks(sum, rate, period) {
    try {
      const res = await axios.get('/src/API/banksList.json')

      // фильтрация массива по параметрам суммы, ставки и срока кредита:
      const filteredData = creditsFilter(res.data.groupedCredits, sum, rate, period)

      return filteredData
    } catch (err) {
      return null
    }
  }

  // получение одного кредита по id:
  static async getCredit(id) {
    try {
      const res = await axios.get('/src/API/banksList.json')

      const credit = findCredit(res.data.groupedCredits, id)
      return credit
    } catch (err) {
      return null
    }
  }

  // получение таблицы со сроками кредита:
  static async getTerms() {
    try {
      const res = await axios.get('/src/API/creditTerms.json')
      return res.data.creditTerms
    } catch (err) {
      return null
    }
  }
}
