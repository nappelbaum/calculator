<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
document.title = route.meta.title
</script>

<template>
  <h1 class="fs-2 fw-bold">Some Features</h1>
</template>
