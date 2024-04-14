<script setup>
import MainForm from '@/components/MainForm.vue'
import OffersList from '@/components/OffersList.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
document.title = route.meta.title
</script>

<template>
  <h1 class="fs-2 fw-bold">Кредитный калькулятор</h1>
  <section class="main-form">
    <main-form />
  </section>
  <offers-list />
</template>
