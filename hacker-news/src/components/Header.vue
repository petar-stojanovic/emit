<script setup>
import {AkSettingsHorizontal} from '@kalimahapps/vue-icons';
</script>

<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo"/>
      <div class="logo-text">Search Hacker News</div>
    </div>

    <div class="search flex align-center justify-center">
      <input type="text" placeholder="Search stories by title, url or author"/>
      <span>by Algolia</span>
    </div>

    <div>
      <AkSettingsHorizontal class="icon"/>
    </div>

  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  height: 6rem;
  top: 0;
  background-color: var(--color-background);
  z-index: 10;
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
  gap: 0.5rem;
  flex-grow: 1;
  width: 100%;
  padding: 0.5rem;
}

.search input {
  width: 100%;
  border-radius: 10rem;
  padding: 0.5rem 1rem;
}

.search span {
  white-space: nowrap;
}

.icon {
  font-size: 2rem;
}

.logo-text {
  color: gray;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.15rem;
}
</style>