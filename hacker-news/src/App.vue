<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <aside>
      <Sidebar/>
    </aside>

    <main>
      <router-view/>
    </main>
  </main>
</template>

<style scoped>

@media (min-width: 1024px) {

}
</style>
