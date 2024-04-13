<script setup>
import { ref } from 'vue'

let date = ref(new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="container-xxl">
      <div class="footer__title">
        <div>&copy;&nbsp; Название вашей компании</div>
        <div>
          {{ date }}
          Все права защищены
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background-color: rgb(0 0 0 / 10%);
  padding: 20px;

  &__title {
    text-align: center;
    font-size: 1rem;

    > div {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
