<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import OfferBank from './OfferBank.vue'
import getNoun from '@/services/getNoun'

const store = useStore()

const banksLoadError = computed(() => store.getters['banks/banksLoadError'])
const banks = computed(() => store.getters['banks/banks'])
const totalOffers = computed(() => store.getters['banks/totalOffers'])

const setSort = (value) => {
  store.dispatch('banks/setSort', value)
}

onMounted(() => {
  store.dispatch('banks/setSort', '')
})
</script>

<template>
  <div v-if="banksLoadError" class="mt-4 text-danger"><b>Data loading error</b></div>
  <section v-else class="sort-list">
    <div v-show="totalOffers === 0" class="text-center mt-5">
      <h3 class="fs-4">Кредитов по вашим параметрам не найдено</h3>
      <p>Измените, пожалуйста, параметры поиска</p>
    </div>
    <div v-show="totalOffers !== 0" class="sort-offers p-4 pb-1">
      <div class="d-flex flex-wrap align-items-center pt-3">
        <div class="mb-3 sort-offers__total">
          {{ totalOffers }}
          {{ getNoun(totalOffers, ['предложение', 'предложения', 'предложений']) }}
        </div>
        <u-select
          class="mb-3"
          :options="[
            { value: '', name: 'По популярности' },
            { value: 'min', name: 'По минимальному платежу' }
          ]"
          @setSort="setSort"
        />
      </div>
    </div>

    <transition-group tag="ul" name="mybanks" class="d-flex flex-column mb-3 p-0 row">
      <li v-for="bank in banks" :key="bank.bankId" class="mb-2">
        <offer-bank :offer="bank.creditResultRows" />
      </li>
    </transition-group>
  </section>
</template>

<style lang="scss" scoped>
.sort-offers > div {
  column-gap: 3rem;

  .sort-offers__total {
    user-select: none;
  }
}

.mybanks-move {
  transition: transform 0.5s ease-in;
}
</style>
