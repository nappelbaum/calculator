<script setup>
import NavBar from './components/NavBar.vue'
import MyFooter from './components/MyFooter.vue'
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

.main {
  background-color: var(--bg-color);
}
</style>
