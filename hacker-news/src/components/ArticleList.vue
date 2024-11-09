<script setup>
import Article from "@/components/Article.vue";
import {onMounted, toRaw} from "vue";

const {searchResult} = defineProps(["searchResult"]);

onMounted(() => {
  console.log("SEARCH RESULT", toRaw(searchResult));
})
</script>

<template>
  <div v-for="article of searchResult.hits" :key="article.objectID">
    <Article :article="article"/>
  </div>

</template>

<style scoped>

</style>