import PostService from '@/API/PostService'

export default {
  actions: {
    /** получение данных о банках и кредитах с фильтрами по сумме, ставке и сроке кредита*/
    async fetchBanks({ commit, state }, { sum, rate, period }) {
      const getBanks = await PostService.getBanks(sum, rate, period, state.sort)
      commit('SET_BANKS', getBanks)
      commit('SET_TOTAL_OFFERS', getBanks)
    },
    /** запись условия сортировки*/
    setSort({ commit }, sort) {
      commit('SET_SORT', sort)
    },
    /** получение данных о кредите по id для страницы кредита*/
    async fetchCredit({ commit }, id) {
      const credit = await PostService.getCredit(id)
      commit('SET_SINGLE_CREDIT', credit)
    }
  },
  mutations: {
    /** запись данных о банках с фильтрами*/
    SET_BANKS(state, getBanks) {
      if (getBanks) state.banks = getBanks
      else state.banksLoadError = true
    },
    /** запись общего количества всех предложений*/
    SET_TOTAL_OFFERS(state, getBanks) {
      state.totalOffers = getBanks.reduce((acc, el) => acc + el.creditResultRows.length, 0)
    },
    /** запись условия сортировки*/
    SET_SORT(state, sort) {
      state.sort = sort
    },
    /** запись данных о кредите для страницы кредита*/
    SET_SINGLE_CREDIT(state, credit) {
      if (credit) state.singleCredit = credit
      else state.creditLoadError = true
    }
  },
  state: {
    banks: [],
    totalOffers: null,
    sort: '',
    singleCredit: {},
    banksLoadError: false,
    creditLoadError: false
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
    },
    singleCredit(state) {
      return state.singleCredit
    },
    creditLoadError(state) {
      return state.creditLoadError
    }
  },
  namespaced: true
}
