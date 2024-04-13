<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
// import PostService from './API/PostService'

onMounted(async () => {
  // console.log(await PostService.getBanks())
})
</script>

<template>
  <nav-bar />
  <main class="main py-5">
    <div class="container-xxl">
      <router-view></router-view>
    </div>
  </main>
  <my-footer />
</template>

<style>
@import './styles/_main.scss';

body {
  font-family:
    'Montserrat',
    'Segoe UI',
    'Roboto',
    -apple-system,
    BlinkMacSystemFont,
    Arial,
    sans-serif !important;
}

.main {
  background-color: var(--bg-color);
}
</style>
