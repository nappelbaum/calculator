<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ModalTable from './ModalTable.vue'

defineProps({
  show: Boolean,
  creditSum: String,
  result: Object
})

const emit = defineEmits(['close', 'confirm'])

const store = useStore()

const currentCreditPeriod = computed(() => store.getters['params/currentCreditPeriod'])
const creditRate = computed(() => store.getters['params/creditRate'])
</script>

<template>
  <transition name="modal">
    <div v-if="show" class="modal-shadow" @click.self="emit('close')">
      <div class="modal-body">
        <div>
          <header class="modal-body__header">
            <h3 class="modal-body-title">График платежей по кредиту</h3>
            <div class="modal-body-close" @click.self="emit('close')">&#10006;</div>
          </header>
          <div class="modal-body__content">
            <div class="modal-body__subtitle">
              <div class="d-flex gap-2">
                <span>Сумма кредита:</span>
                <b>{{ creditSum }} ₽</b>
              </div>
              <div class="d-flex gap-2">
                <span>Срок:</span>
                <b>{{ currentCreditPeriod.name }}</b>
              </div>
              <div class="d-flex gap-2">
                <span>Ставка:</span>
                <b>{{ creditRate }} %</b>
              </div>
            </div>
            <div class="mt-3">
              <modal-table />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  z-index: 15;
}

.modal-body {
  display: inline-block;
  position: relative;
  z-index: 1001;
  max-width: 100%;
  width: 1024px;
  margin: 64px 0px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  vertical-align: middle;
  text-align: left;

  @media (max-width: 680px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    max-width: 160%;
  }

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #2a4cc7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-shadow: 0 0 10px -2px #00000a;
    z-index: 10;
  }

  &__header {
    font-weight: 700;
    z-index: 2;
    padding: 20px 48px 20px 32px;
    border-radius: 8px;
    position: sticky;
    top: 0px;
    background-color: #fff;
    box-shadow: 0 0 10px -3px #949494;
  }

  &__content {
    width: 100%;
    margin-top: 8px;
    padding: 32px;
  }

  &__subtitle {
    display: flex;
    column-gap: 36px;
    flex-wrap: wrap;

    > div {
      margin-bottom: 10px;
    }
  }
}
</style>
