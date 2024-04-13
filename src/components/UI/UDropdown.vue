<script setup>
defineProps({
  currentCreditPeriod: Object,
  creditTerms: Array
})

const emit = defineEmits(['setCurrentCreditPeriod'])
</script>

<template>
  <div class="dropdown">
    <button
      class="dropdown__btn btn btn-light dropdown-toggle w-100 px-3 py-2 d-flex align-items-center justify-content-between border border-secondary-subtle rounded-2"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div class="text-start">
        <div class="dropdown__term">Срок кредита</div>
        <div class="fw-semibold">{{ currentCreditPeriod.name }}</div>
      </div>
    </button>
    <ul class="dropdown__menu dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
      <li v-for="term in creditTerms" :key="term.months" class="mt-1">
        <button @click.prevent="emit('setCurrentCreditPeriod', term)" class="dropdown-item">
          {{ term.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  outline: none;
  border: none;

  .dropdown__btn {
    transition: all 0.5s;
    &:hover {
      border-color: var(--input-border-color) !important;
      background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
    }
    &:focus {
      background-color: #fff !important;
      border-color: var(--input-border-color) !important;
      background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
    }

    .dropdown__term {
      font-size: var(--small-font);
      margin-bottom: 2px;
    }
  }

  .dropdown__menu {
    max-height: 12em;
    overflow-y: scroll;
  }
}
</style>
