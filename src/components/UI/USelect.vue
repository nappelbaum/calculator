<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  options: Array,
  sort: String
})

const select = ref(null)
const selectValue = ref('')
const emit = defineEmits(['setSort'])

watch(selectValue, (value) => emit('setSort', value))

onMounted(() => {
  if (props.sort)
    select.value.selectedIndex = props.options.findIndex((option) => option.value == props.sort) + 1
})
</script>

<template>
  <select
    v-model="selectValue"
    ref="select"
    class="outline-none p-1 border rounded-md text-base font-normal bg-transparent"
  >
    <option value>Сортировать</option>
    <option v-for="option in options" :key="option.name" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
