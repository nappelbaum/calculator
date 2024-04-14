<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import toString from '@/services/toString'
import annCalc from '@/services/annСalc'
import OfferDropdown from './OfferDropdown.vue'

const store = useStore()
const show = ref(false)

const creditSum = computed(() => store.getters['params/creditSum'])
const creditPeriod = computed(() => store.getters['params/currentCreditPeriod'])

defineProps({
  offer: Array
})
</script>

<template>
  <div :class="{ 'credit-shadow': show }" class="credit-wrapper">
    <template v-for="(credit, i) in offer" :key="credit.id">
      <div
        class="credit shadow-sm bg-white rounded-2 border-bottom border-1 overflow-hidden"
        :class="[{ 'credit-collapse': i }, show && i ? 'credit-show' : '']"
      >
        <div class="p-4 d-flex flex-column flex-lg-row position-relative">
          <div class="credit__col1">
            <div class="d-flex gap-3 align-items-start">
              <div class="">
                <img :src="credit.bankLogo" width="48px" height="48px" alt="logo" />
              </div>
              <div>
                <h6 class="m-0">
                  <b>{{ credit.bankName }}</b>
                </h6>
                <span>{{ credit.creditName }}</span>
              </div>
            </div>
            <div
              v-if="offer.length > 1 && !i"
              class="credit__show mt-3"
              tabindex="0"
              @click="show = !show"
              @keydown.enter="show = !show"
            >
              <offer-dropdown :offerLength="offer.length" :show="show" />
            </div>
          </div>
          <div class="credit__col2 d-flex flex-column-reverse flex-lg-column">
            <div class="d-flex justify-content-between flex-column flex-lg-row">
              <div class="d-flex flex-wrap gap-2 justify-content-between mt-3 d-lg-block mt-lg-0">
                <span>Платёж</span>
                <div class="credit__important-info">
                  {{ toString(annCalc(creditSum, credit.rateMin, creditPeriod.months)) }} ₽ -
                  {{ toString(annCalc(creditSum, credit.rateMax, creditPeriod.months)) }} ₽
                </div>
              </div>
              <div class="d-flex justify-content-between mt-2 d-lg-block mt-lg-0">
                <span>Сумма</span>
                <div class="credit__important-info">до {{ toString(credit.amountTo) }} ₽</div>
              </div>
              <div class="d-flex justify-content-between mt-2 d-lg-block mt-lg-0">
                <span>Срок</span>
                <div class="credit__important-info">
                  до {{ Math.round(credit.periodTo / 365) }} лет
                </div>
              </div>
            </div>
            <div class="d-flex mt-3 mt-lg-2 gap-2">
              <span v-if="credit.specialTag" class="bg-info px-2 rounded-1 text-black">{{
                credit.specialTag
              }}</span>
              <span class="bg-light px-2 rounded-1 text-black">Без залога</span>
              <span class="bg-light px-2 rounded-1 text-black">На любые цели</span>
            </div>
          </div>
          <div
            class="credit__col3 d-flex align-items-center justify-content-start mt-2 justify-content-lg-center mt-lg-0"
          >
            <router-link :to="credit.productUrl" class="border border-1 rounded-3" title="info">
              <img src="/img/info.svg" alt="info" />
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.credit-wrapper {
  overflow: hidden;
  box-shadow: none;
  transition: box-shadow 0.5s ease;
}

.credit-shadow {
  box-shadow: 0 0 15px -2px #727272 !important;
  transition: box-shadow 0.5s ease;
}

.credit {
  font-family: 'Roboto', sans-serif;
  height: auto;

  &__col1 {
    flex: 0 0 35%;
    padding-right: 2em;

    @media (max-width: 992px) {
      padding-right: 0;
    }

    .credit__show {
      display: inline-block !important;
      cursor: pointer;
      user-select: none;
    }
  }
  &__col2 {
    flex: 1 0 50%;
    padding-right: 3em;

    @media (max-width: 992px) {
      padding-right: 0;
    }

    .credit__important-info {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  &__col3 {
    > a {
      padding: 0.8rem;
      cursor: pointer;
    }
  }

  span {
    font-size: var(--small-font);
    font-weight: 300;
  }
}

.credit-collapse {
  height: 0px;
  color: #ffffff;
  border-bottom: 0 !important;
  transition: all 0.5s ease;
}

.credit-show {
  height: 130px;
  color: #000;
  overflow: initial;

  @media (max-width: 992px) {
    height: 300px;
    border: solid 1px #dfdfdf;
  }
  @media (max-width: 480px) {
    height: auto;
  }
}
</style>
