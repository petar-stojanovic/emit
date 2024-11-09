<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>

  <main>
    <aside>

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
