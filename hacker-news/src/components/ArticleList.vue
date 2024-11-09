<script setup>
import Article from "@/components/Article.vue";
import {onMounted, toRaw} from "vue";

const {searchResult} = defineProps(["searchResult"]);

onMounted(() => {
  console.log("SEARCH RESULT", toRaw(searchResult));
})
</script>

<template>
  <Article v-for="article of searchResult.hits" :key="article.objectID" :article="article"/>

</template>

<style scoped>

</style>