<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CalcResults from './CalcResults.vue'
import toString from '@/services/toString'
import toNumber from '@/services/toNumber'

const store = useStore()

const creditTerms = computed(() => store.getters['params/creditTerms'])
const currentCreditPeriod = computed(() => store.getters['params/currentCreditPeriod'])

const creditSum = computed(() => toString(store.getters['params/creditSum']))
const minMaxCreditSum = computed(() => store.getters['params/minMaxCreditSum'])
const creditRate = computed(() => store.getters['params/creditRate'])
const minMaxCreditRate = computed(() => store.getters['params/minmaxCreditRate'])

onMounted(() => {
  !creditTerms.value.length && store.dispatch('params/fetchTerms')
  store.dispatch('params/setBanks')
})
</script>

<template>
  <form @submit.prevent="" class="row mt-4 bg-white rounded-2 shadow-sm">
    <div class="calc col-lg p-4">
      <u-input
        title="Сумма кредита"
        name="sum"
        :data="{ value: creditSum, units: '₽' }"
        @setData="(sum) => store.dispatch('params/setSum', toNumber(sum))"
        @setDebounceData="(sum) => store.dispatch('params/setSumDeb', toNumber(sum))"
        :minmax="[toString(minMaxCreditSum.min) + ' ₽', toString(minMaxCreditSum.max) + ' ₽']"
        :max="minMaxCreditSum.max"
      />
      <u-input
        title="Ставка"
        name="rate"
        :data="{ value: creditRate, units: '%' }"
        @setData="(rate) => store.dispatch('params/setRate', toNumber(rate))"
        @setDebounceData="(rate) => store.dispatch('params/setRateDeb', toNumber(rate))"
        :minmax="['Ключевая ставка Банка России']"
        :max="minMaxCreditRate.max"
      />
      <u-dropdown
        :currentCreditPeriod="currentCreditPeriod"
        :creditTerms="creditTerms"
        @setCurrentCreditPeriod="(period) => store.dispatch('params/setCurrentPeriod', period)"
      />
    </div>
    <div class="result col-lg p-4">
      <div class="bg-light rounded-2 p-4">
        <h3 class="fs-4 fw-bold mb-3">Результаты расчета</h3>
        <calc-results />
        <h3 class="fs-4 fw-bold my-4">Получите реальные условия от банков</h3>
        <u-button color="blue" name="Заполнить анкету" />
      </div>
    </div>
  </form>
</template>
