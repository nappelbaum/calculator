import PostService from '@/API/PostService'

export default {
  actions: {
    /** получение данных о банках и кредитах с фильтрами по сумме, ставке и сроке кредита*/
    async fetchBanks({ commit, rootGetters }, { sum, rate, period }) {
      const sort = rootGetters['banks/sort']
      const getBanks = await PostService.getBanks(sum, rate, period, sort)
      commit('SET_BANKS', getBanks)
      commit('SET_TOTAL_OFFERS', getBanks)
    },
    setSort({ commit }, sort) {
      commit('SET_SORT', sort)
    }
  },
  mutations: {
    /** запись данных о банках с фильтрами*/
    SET_BANKS(state, getBanks) {
      if (getBanks) state.banks = getBanks
      else state.banksLoadError = true
    },
    SET_TOTAL_OFFERS(state, getBanks) {
      state.totalOffers = getBanks.reduce((acc, el) => acc + el.creditResultRows.length, 0)
    },
    SET_SORT(state, sort) {
      state.sort = sort
    }
  },
  state: {
    banks: [],
    totalOffers: null,
    sort: '',
    banksLoadError: false
  },
  getters: {
    banks(state) {
      return state.banks
    },
    totalOffers(state) {
      return state.totalOffers
    },
    sort(state) {
      return state.sort
    },
    banksLoadError(state) {
      return state.banksLoadError
    }
  },
  namespaced: true
}
