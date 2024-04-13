<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

// store.dispatch('banks/fetchBanks')
const banks = computed(() => store.getters['banks/banks'])
onMounted(() => {
  setTimeout(() => {
    console.log(banks.value)
  }, 400)
})
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
      <div v-for="bank in banks" :key="bank.bankId" class="shadow-sm bg-white rounded-2">
        <div class="p-4 d-flex justify-content-between">
          <div class="d-flex">
            <img :src="bank.creditResultRows[0]?.bankLogo" alt="logo" />
          </div>
          <div class="">Flex item</div>
          <div class="">Flex item</div>
        </div>
      </div>
    </div>
  </section>
  <pre>{{ banks }}</pre>
</template>

<style lang="scss" scoped>
.sort-offers > div {
  column-gap: 3rem;
}
</style>
