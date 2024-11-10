<script setup>

import {onMounted, ref} from "vue";

const {id} = defineProps(["id"]);
const post = ref(null);
const isLoading = ref(true);
const error = ref(null);

const fetchPostDetails =async () => {
  try {
    let url = `http://hn.algolia.com/api/v1/items/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    post.value = data;
  } catch (err) {
    error.value = 'Failed to fetch news';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchPostDetails();
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <h1>Post Details</h1>
    <pre>{{ post }}</pre>
  </div>
</template>

<style scoped>

</style>