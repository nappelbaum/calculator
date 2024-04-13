import PostService from '@/API/PostService'
import loanСalc from '@/services/loanСalc'
import { watchEffect } from 'vue'

const start = {
  sum: 300000,
  rate: 16,
  minmax: { min: 5000, max: 100000000 },
  period: { months: 60, name: '5 лет' }
}

export default {
  actions: {
    /** получение данных о всех сроках кредита и отслеживание изменений суммы, ставки и срока кредита
     * (сумма и ставка отслеживаются с применением debounce) для запуска action получения списка банков*/
    async fetchTerms({ state, commit, dispatch }) {
      const getData = await PostService.getTerms()
      commit('SET_TERMS', getData)

      watchEffect(() => {
        console.log('effff')
        const { creditSumDebounce, creditRateDebounce, currentCreditPeriod } = state
        dispatch(
          'banks/fetchBanks',
          { sum: creditSumDebounce, rate: creditRateDebounce, period: currentCreditPeriod.months },
          {
            root: true
          }
        )
      })
    },
    /** расчет всех параметров кредита (ежемесячный платеж, общая сумма, график платежей ..) в зависимости от изменения суммы, ставки и срока кредита*/
    getResult({ state, commit }) {
      watchEffect(() => {
        const { creditSum, creditRate, currentCreditPeriod } = state
        const dataRes = loanСalc(creditSum, creditRate, currentCreditPeriod.months)
        commit('SET_RESULT', dataRes)
      })
    }
  },
  mutations: {
    /** запись данных о всех сроках и о начальном(текущем) периоде(сроке) кредита*/
    SET_TERMS(state, getData) {
      if (getData) {
        state.creditTerms = getData
      }
    },
    /** изменение текущего периода(срока) кредита*/
    SET_CURRENT_PERIOD(state, term) {
      state.currentCreditPeriod = term
    },
    /** изменение суммы кредита*/
    SET_SUM(state, sum) {
      if (sum > state.minMaxCreditSum.max) {
        state.creditSum = state.minMaxCreditSum.max
        return
      }
      state.creditSum = sum ? sum : 0
    },
    /** изменение ставки кредита*/
    SET_RATE(state, rate) {
      state.creditRate = rate ? rate : 0
    },
    /** запись всех параметров кредита*/
    SET_RESULT(state, dataRes) {
      state.result = dataRes
    },
    /** установка debounce-суммы кредита*/
    SET_SUM_DEB(state, sum) {
      state.creditSumDebounce = sum ? sum : 0
    },
    /** установка debounce-ставки кредита*/
    SET_RATE_DEB(state, rate) {
      state.creditRateDebounce = rate ? rate : 0
    }
  },
  state: {
    creditTerms: [],
    creditSum: start.sum,
    minMaxCreditSum: start.minmax,
    creditRate: start.rate,
    currentCreditPeriod: start.period,
    result: {},
    creditSumDebounce: start.sum,
    creditRateDebounce: start.rate
  },
  getters: {
    creditTerms(state) {
      return state.creditTerms
    },
    creditSum(state) {
      return state.creditSum
    },
    creditRate(state) {
      return state.creditRate
    },
    currentCreditPeriod(state) {
      return state.currentCreditPeriod
    },
    minMaxCreditSum(state) {
      return state.minMaxCreditSum
    },
    result(state) {
      return state.result
    }
  },
  namespaced: true
}