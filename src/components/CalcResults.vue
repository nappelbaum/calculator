<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import toString from '@/services/toString'
import toNumber from '@/services/toNumber'
import ModalWindow from './ModalWindow.vue'
import bodyLock from '@/services/bodyLock'

const store = useStore()

const showModal = ref(false)

const result = computed(() => store.getters['params/result'])
const creditSum = computed(() => toString(store.getters['params/creditSum']))

const results = computed(() => [
  { name: 'Ежемесячный платеж', value: toString(result.value.annMonts) },
  { name: 'Сумма кредита', value: creditSum.value },
  { name: 'Переплата', value: toString(result.value.overPay) },
  { name: 'Общая сумма займа', value: toString(result.value.totalSum) }
])

onMounted(() => {
  store.dispatch('params/getResult')
  bodyLock(showModal)
})
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <div
      v-for="(result, i) in results"
      :key="result.name"
      class="results-row d-sm-flex justify-content-between align-items-center flex-wrap"
    >
      <span
        class="d-flex align-items-center"
        :class="{ 'green-square': i == 1, 'blue-square': i == 2 }"
      >
        {{ result.name }}
      </span>
      <span :class="{ 'fs-2 fw-semibold': !i }">{{ result.value }} ₽</span>
    </div>
    <u-progress-bar :creditSum="toNumber(creditSum)" :totalSum="result.totalSum" />
    <button
      @click.prevent="showModal = true"
      class="result__btn d-flex align-items-center gap-2 cursor-pointer"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20 6c0-.551-.448-1-1-1h-3a1 1 0 1 1-2 0h-4a1 1 0 1 1-2 0H5c-.552 0-1 .449-1 1v2h16V6zm0 4H4v9c0 .551.448 1 1 1h14c.552 0 1-.449 1-1v-9zm2-4v13c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h3a1 1 0 1 1 2 0h4a1 1 0 1 1 2 0h3c1.654 0 3 1.346 3 3zm-7 12h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H7v2zm8-4h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H7v2z"
          ></path>
        </svg>
      </span>
      <span>График платежей</span>
    </button>
  </div>

  <modal-window
    :show="showModal"
    @close="() => (showModal = false)"
    :creditSum="creditSum"
    :result="result"
  />
</template>

<style lang="scss" scoped>
.result__btn {
  &:hover {
    color: var(--secondary-progress-color);
  }
  &:focus-visible {
    outline: solid 1px #000 !important;
  }
}

.green-square::before,
.blue-square::before {
  content: '';
  width: 0.8em;
  height: 0.8em;
  border-radius: 3px;
  margin-right: 5px;
}
.green-square::before {
  background-color: var(--primary-progress-color);
}
.blue-square::before {
  background-color: var(--secondary-progress-color);
}
</style>
