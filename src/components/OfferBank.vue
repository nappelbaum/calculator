<script setup>
defineProps({
  offer: Array
})
</script>

<template>
  <div class="shadow-sm bg-white rounded-2">
    <div class="p-4 d-flex justify-content-between">
      <div class="d-flex gap-3">
        <img :src="offer[0]?.bankLogo" width="50px" height="50px" alt="logo" />
        <div>
          <h6>{{ offer[0]?.bankName }}</h6>
          <span>{{ offer[0]?.creditName }}</span>
        </div>
      </div>
      <div class="">Flex item</div>
      <div class="">Flex item</div>
    </div>
  </div>
</template>
