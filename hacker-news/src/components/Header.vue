<script setup>
import {AkSettingsHorizontal} from '@kalimahapps/vue-icons';
import Searchbar from "@/components/Searchbar.vue";
</script>

<template>
  <nav>
    <router-link to="/">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo"/>
        <div class="logo-text">Search Hacker News</div>
      </div>
    </router-link>

    <div class="search flex align-center justify-center">
      <Searchbar/>
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
</style>