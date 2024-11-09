<script setup>
import {onMounted, ref} from "vue";
import ArticleList from "@/components/ArticleList.vue";

const searchResult = ref(null);
const isLoading = ref(true);
const error = ref(null);
onMounted(() => {
  fetchNews();
});

const fetchNews = async () => {
  try {
    const response = await fetch('http://hn.algolia.com/api/v1/search?tags=(story,comment,poll,job)');
    const data = await response.json();
    console.log(data);
    searchResult.value = data;
  } catch (err) {
    error.value = 'Failed to fetch news';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>

    <ArticleList :searchResult="searchResult"/>
  </div>
</template>

<style scoped>

</style>