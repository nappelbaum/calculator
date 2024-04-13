import PostService from '@/API/PostService'

export default {
  actions: {
    /** получение данных о банках и кредитах с фильтрами по сумме, ставке и сроке кредита*/
    async fetchBanks({ commit }, { sum, rate, period }) {
      const getData = await PostService.getBanks(sum, rate, period)
      commit('SET_BANKS', getData)
    }
  },
  mutations: {
    /** запись данных о банках с фильтрами*/
    SET_BANKS(state, getData) {
      if (getData) {
        state.banks = getData
      }
    }
  },
  state: {
    banks: []
  },
  getters: {
    banks(state) {
      return state.banks
    }
  },
  namespaced: true
}
