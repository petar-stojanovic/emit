<script setup>

</script>

<template>
  <div class="sidebar">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>

</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  background-color: var(--sidebar-background);
  width: 10rem;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid #ccc;
}
</style>