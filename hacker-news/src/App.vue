<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <header>
    <Header/>
  </header>

  <aside>
    <Sidebar/>
  </aside>

  <main>
    <router-view/>
  </main>
</template>

<style scoped>

header {
  position: fixed;
  width: 100%;
  height: 6rem;
  top: 0;
  background-color: var(--color-background);
  z-index: 10;
}

main {
  margin: 6rem 0 0 10rem;
  padding: 2rem;
}

@media (min-width: 1024px) {

}
</style>
