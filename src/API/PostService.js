import axios from 'axios'
import creditsFilter from '@/services/creditsFilter'
import creditsSort from '@/services/creditsSort'

export default class PostService {
  static async getBanks(sum, rate, period, sort) {
    try {
      console.log(sort)
      const res = await axios.get('/src/API/banksList.json')

      const filteredData = creditsFilter(res.data.groupedCredits, sum, rate, period)

      if (sort) creditsSort(filteredData)

      // return sort ? filteredData : sortedFilteredData
      return filteredData
    } catch (err) {
      return null
    }
  }

  static async getTerms() {
    try {
      const res = await axios.get('/src/API/creditTerms.json')
      return res.data.creditTerms
    } catch (err) {
      return null
    }
  }
}
