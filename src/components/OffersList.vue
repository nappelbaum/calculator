<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import OfferBank from './OfferBank.vue'

const store = useStore()

// store.dispatch('banks/fetchBanks')
const banks = computed(() => store.getters['banks/banks'])
</script>

<template>
  <section class="sort-offers p-4">
    <div class="d-flex flex-wrap align-items-center pt-4">
      <div class="mb-3">37 предложений</div>
      <u-select class="mb-3" />
    </div>
  </section>

  <section class="sort-list">
    <div class="d-flex flex-column mb-3 row">
      <template v-for="bank in banks" :key="bank.bankId">
        <offer-bank :offer="bank.creditResultRows" />
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sort-offers > div {
  column-gap: 3rem;
}
</style>
