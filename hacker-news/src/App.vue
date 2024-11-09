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

main {
  margin-left: 10rem;
  padding: 0 1rem;
}

@media (min-width: 1024px) {

}
</style>
