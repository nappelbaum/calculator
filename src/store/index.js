import { createStore } from 'vuex'
import params from './modules/params'
import banks from './modules/banks'

const store = createStore({
  modules: {
    params,
    banks
  }
})

export default store
