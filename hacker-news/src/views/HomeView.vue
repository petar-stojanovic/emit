<script setup>
import {onMounted} from "vue";

onMounted(() => {
  // fetchNews();
});

const fetchNews = async () => {
  const response = await fetch('http://hn.algolia.com/api/v1/search_by_date');
  const data = await response.json();
  console.log(data);
}

</script>

<template>
asd
</template>

<style scoped>

</style>