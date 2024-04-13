<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import toString from '@/services/toString'
import annCalc from '@/services/annСalc'
import getNoun from '@/services/getNoun'

const store = useStore()
const show = ref(false)

const creditSum = computed(() => store.getters['params/creditSum'])
const creditPeriod = computed(() => store.getters['params/currentCreditPeriod'])

defineProps({
  offer: Array
})
</script>

<template>
  <div :class="{ 'credit-shadow': show }" class="overflow-hidden">
    <template v-for="(credit, i) in offer" :key="credit.id">
      <div
        class="credit shadow-sm bg-white rounded-2 border-bottom border-1 overflow-hidden"
        :class="[{ 'credit-collapse': i }, show && i ? 'credit-show' : '']"
      >
        <div class="p-4 d-flex">
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
            >
              <div class="d-flex align-items-center">
                <span class="text-primary fs-6 fw-bold"
                  >Еще {{ offer.length - 1 }}
                  {{ getNoun(offer.length - 1, ['кредит', 'кредита', 'кредитов']) }}</span
                >
                <span class="mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="#3e61fd"
                  >
                    <path
                      v-if="!show"
                      d="M8 12a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L8 9.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 8 12z"
                    ></path>
                    <path
                      v-if="show"
                      d="M8 4a.997.997 0 0 0-.707.293l-5 5a.999.999 0 1 0 1.414 1.414L8 6.414l4.293 4.293a.999.999 0 1 0 1.414-1.414l-5-5A.997.997 0 0 0 8 4z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="credit__col2">
            <div class="d-flex justify-content-between">
              <div>
                <span>Платёж</span>
                <div class="credit__important-info">
                  {{ toString(annCalc(creditSum, credit.rateMin, creditPeriod.months)) }} ₽ -
                  {{ toString(annCalc(creditSum, credit.rateMax, creditPeriod.months)) }} ₽
                </div>
              </div>
              <div>
                <span>Сумма</span>
                <div class="credit__important-info">до {{ toString(credit.amountTo) }} ₽</div>
              </div>
              <div>
                <span>Срок</span>
                <div class="credit__important-info">
                  до {{ Math.round(credit.periodTo / 365) }} лет
                </div>
              </div>
            </div>
            <div class="d-flex mt-2 gap-2">
              <span v-if="credit.specialTag" class="bg-info px-2 rounded-1 text-black">{{
                credit.specialTag
              }}</span>
              <span class="bg-light px-2 rounded-1 text-black">Без залога</span>
              <span class="bg-light px-2 rounded-1 text-black">На любые цели</span>
            </div>
          </div>
          <div class="credit__col3 d-flex align-items-center justify-content-center">
            <div class="border border-1 rounded-3" title="info">
              <img src="/img/info.svg" alt="info" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.credit {
  font-family: 'Roboto', sans-serif;
  height: 136px;

  &__col1 {
    flex: 0 0 35%;
    padding-right: 2em;

    .credit__show {
      display: inline-block !important;
      cursor: pointer;
      user-select: none;
    }
  }
  &__col2 {
    flex: 1 0 50%;
    padding-right: 3em;

    .credit__important-info {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  &__col3 {
    > div {
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
  height: 136px;
  color: #000;
  overflow: initial;
}

.credit-shadow {
  box-shadow: 0 0 15px -2px #727272 !important;
  transition: box-shadow 0.5s ease;
}
</style>
