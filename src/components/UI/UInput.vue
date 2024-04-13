<script setup>
import { ref } from 'vue'
import debounce from 'lodash.debounce'
import toNumber from '@/services/toNumber'
import toString from '@/services/toString'

const props = defineProps({
  title: String,
  name: String,
  data: Object,
  units: String,
  minmax: Array,
  max: Number
})

const emit = defineEmits(['setData', 'setDebounceData'])

const debouncedData = ref('')

const debounceData = debounce((e) => {
  debouncedData.value = e.target.value
  emit('setDebounceData', debouncedData.value)
}, 800)

const onInput = (e) => {
  emit('setData', e.target.value)
  e.target.value =
    toNumber(e.target.value) > props.max ? props.data.value : toString(toNumber(e.target.value))

  // if (props.name == 'rate' && e.target.value == 0) e.target.value = ''
  // if (e.target.value.match(/[^0-9\s]/gim)) e.target.value = props.data.value
  debounceData(e)
}
</script>

<template>
  <div class="input mb-4">
    <label
      :for="name"
      class="form-label input__main bg-light pt-2 border border-secondary-subtle rounded-2 w-100"
    >
      <span class="px-3">{{ title }}</span>
      <div class="input__wrapper">
        <div class="input__mask fw-semibold px-3">
          <span>{{ data.value }}</span>
          <span>{{ data.units }}</span>
        </div>
        <input
          type="text"
          :value="data.value"
          @input="onInput"
          class="form-control px-3 bg-transparent border-0 fw-semibold"
          :id="name"
          @keydown.enter.prevent=""
        />
      </div>
    </label>

    <div class="input__caption d-flex justify-content-between text-secondary">
      <div v-for="item in minmax" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input__main {
  &:hover {
    border-color: var(--input-border-color) !important;
    transition: all 0.5s;
  }
  &:has(input:focus) {
    background-color: #fff !important;
    border-color: var(--input-border-color) !important;
  }
  span {
    display: block;
    font-size: var(--small-font);
    margin-bottom: -4px;
  }
  input:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}

.input__wrapper {
  position: relative;

  .input__mask {
    display: flex;
    column-gap: 2px;
    flex-wrap: nowrap;
    position: absolute;
    pointer-events: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    line-height: 24px;

    span {
      font-size: inherit;

      &:first-child {
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
      }
    }
  }
}

.input__caption {
  font-size: var(--small-font);
}
</style>
