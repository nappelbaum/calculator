<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import toString from '@/services/toString'

const route = useRoute()
const id = route.params.id

const store = useStore()

const creditLoadError = computed(() => store.getters['banks/creditLoadError'])
const credit = computed(() => store.getters['banks/singleCredit'])

onMounted(() => {
  store.dispatch('banks/fetchCredit', id)
})

watch(credit, () => (document.title = `Credit id ${credit.value.id}`), { once: true })
</script>

<template>
  <div v-if="creditLoadError" class="mt-4 text-danger"><b>Data loading error</b></div>
  <section v-else class="d-flex flex-column gap-1">
    <h3>Банк: {{ credit.bankName }}</h3>
    <h2>Кредит: {{ credit.creditName }}</h2>
    <div class="mt-3">
      <p>Минимальная ставка: {{ credit.rateMin }}</p>
      <p>Максимальная ставка: {{ credit.rateMax }}</p>
      <p>Сумма до: {{ toString(credit.amountTo) }} ₽</p>
      <p>Срок до {{ Math.round(credit.periodTo / 365) }} лет</p>
      <p>Условия:</p>
      <p v-html="credit.positive"></p>
    </div>
  </section>
</template>
