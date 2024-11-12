<script setup>
import {onMounted, ref, watch} from "vue";
import ArticleList from "@/components/ArticleList.vue";
import {useRoute} from "vue-router";
import useLocalStorage from "@/composables/useLocalStorage.js";

const searchResult = useLocalStorage('', "searchResult");
const isLoading = ref(true);
const error = ref(null);
const route = useRoute();


onMounted(() => {
  fetchNews(route.query.q || "");
});

const fetchNews = async (query) => {
  try {
    if (searchResult.value) {
      console.log('Using cached data');
      isLoading.value = false;
      return;
    }
    //TODO: Refactor. Use Repository.
    let url = 'http://hn.algolia.com/api/v1/search?tags=(story,poll,job)';
    if (query) {
      url += `&query=${query}`;
    }
    const response = await fetch(url);
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

watch(
    () => route.query.q,
    (query) => {
      isLoading.value = true;
      fetchNews(query);
    },
    {immediate: true}
);
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