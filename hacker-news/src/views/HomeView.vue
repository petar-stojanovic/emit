<script setup>
import {ref, watch} from "vue";
import ArticleList from "@/components/ArticleList.vue";
import {useRoute} from "vue-router";
import useLocalStorage from "@/composables/useLocalStorage.js";

const route = useRoute();
const isLoading = ref(true);
const error = ref(null);
const searchResult = ref(null);


const fetchNews = async (query) => {
  try {
    const localStorageKey = `searchResult-${query}`;
    const cachedResult = useLocalStorage(null, localStorageKey);

    if (cachedResult.value) {
      console.log('Using cached data');
      searchResult.value = cachedResult.value;
    } else {

      let url = 'http://hn.algolia.com/api/v1/search?tags=(story,poll,job)';
      if (query) {
        url += `&query=${query}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log("FETCHING DATA", data);

      searchResult.value = data;
      cachedResult.value = data;
    }

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
      fetchNews(query || '');
    },
    {immediate: true}
);
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="searchResult">
    <ArticleList :searchResult="searchResult"/>
  </div>
  <div v-else>
    {{ error }}
  </div>
</template>

<style scoped>

</style>