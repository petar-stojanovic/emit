<script setup>
import {AkSettingsHorizontal} from '@kalimahapps/vue-icons';
</script>

<template>
  <nav>
    <div class="flex justify-center align-center">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo"/>
      </div>
      <div class="logo-text">Search<br/>Hacker News</div>
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
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.search {
  gap: 1rem;
  flex-grow: 1;
  width: 100%;
  padding: 0.51rem;
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
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 1rem
}
</style>