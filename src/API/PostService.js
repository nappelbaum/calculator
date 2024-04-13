import axios from 'axios'
import creditsFilter from '@/services/creditsFilter'

export default class PostService {
  static async getBanks(sum, rate, period) {
    try {
      const res = await axios.get('/src/API/banksList.json')
      return creditsFilter(res.data.groupedCredits, sum, rate, period)
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
