<script setup>
import {AkSettingsHorizontal, BySearch} from '@kalimahapps/vue-icons';
</script>

<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo"/>
      <div class="logo-text">Search Hacker News</div>
    </div>

    <div class="search flex align-center justify-center">
      <BySearch class="search-icon"/>
      <input type="text" placeholder="Search stories by title, url or author"/>
      <span>
        <small>by</small>
        <img class="algolia-logo" src="@/assets/algolia.png" alt="Algolia Logo"/>
      </span>
    </div>

    <div>
      <AkSettingsHorizontal class="icon"/>
    </div>

  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.logo {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.search {
  gap: 1rem;
  width: 100%;
  padding: 0.5rem;
  position: relative;
}

.search input {
  width: 100%;
  border-radius: 10rem;
  padding: 0.75rem 0 0.75rem 2.75rem;
}

.search span {
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.algolia-logo {
  max-height: 2rem;
}

.icon {
  font-size: 2rem;
  margin-left: 2rem;
}

.search-icon {
  position: absolute;
  font-size: 1.25rem;
  color: orangered;
  left: 1.75rem;
}

.logo-text {
  color: gray;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1rem;
}
</style>