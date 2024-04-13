<template>
  <nav class="navbar navbar-expand-md bg-white py-3 py-md-2 shadow-sm">
    <div class="container-xxl">
      <router-link to="/" class="navbar-brand">The Bank</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0 pt-3 pt-md-0" id="navbarNavDropdown">
        <ul class="navbar-nav gap-md-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/features" class="nav-link">Features</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: #222;
}
</style>
