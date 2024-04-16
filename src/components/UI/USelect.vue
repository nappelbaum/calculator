<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  options: Array,
  sort: String
})

const selectValue = ref('')
const emit = defineEmits(['setSort'])

watch(selectValue, (value) => emit('setSort', value))

onMounted(() => {
  if (props.sort) selectValue.value = props.sort
})
</script>

<template>
  <select
    v-model="selectValue"
    class="outline-none p-1 border rounded-md text-base font-normal bg-transparent"
  >
    <option value>Сортировать</option>
    <option v-for="option in options" :key="option.name" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
