<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import OfferBank from './OfferBank.vue'
import getNoun from '@/services/getNoun'

const store = useStore()

const banks = computed(() => store.getters['banks/banks'])
const totalOffers = computed(() => store.getters['banks/totalOffers'])

const setSort = (value) => {
  store.dispatch('banks/setSort', value)
}
</script>

<template>
  <section class="sort-list">
    <div class="sort-offers p-4 pb-1">
      <div class="d-flex flex-wrap align-items-center pt-4">
        <div class="mb-3">
          {{ totalOffers }}
          {{ getNoun(totalOffers, ['предложение', 'предложения', 'предложений']) }}
        </div>
        <u-select
          class="mb-3"
          :options="[
            { value: '', name: 'По популярности' },
            { value: 'min', name: 'По минимальной сумме' }
          ]"
          @setSort="setSort"
        />
      </div>
    </div>

    <div name="banks" class="d-flex flex-column mb-3 row">
      <div v-for="bank in banks" :key="bank.bankId" class="mb-2">
        <offer-bank :offer="bank.creditResultRows" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sort-offers > div {
  column-gap: 3rem;
}

// .banks-enter-active,
// .banks-move {
//   transition: 0.4s ease all;
// }

// .banks-enter-from,
// .banks-leave-to {
//   opacity: 0;
//   transform: scale(0.6);
// }

// .banks-leave-active {
//   transition: 0.4s ease all;
//   position: absolute;
// }
</style>
