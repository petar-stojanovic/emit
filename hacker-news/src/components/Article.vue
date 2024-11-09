<script setup>

import {onMounted, toRaw} from "vue";
import {AkStar, BsShare} from "@kalimahapps/vue-icons";

const {article} = defineProps(["article"]);
onMounted(() => {
  console.log("ARTICLE", toRaw(article));
})
</script>

<template>
  <div class="article">
    <h1>{{ article.author }}</h1>
    <div>{{ article.title }}</div>
    <div>
      <div>{{ article.points }}</div>
      <div>{{ article.author }}</div>
      <div>{{ article.created_at }}</div>
      <a :href="article.url" target="_blank">{{ article.url.split('/')[2] }}</a>
    </div>

    <div>
      <span>{{ article.num_comments }}</span>
      <AkStar class="icon"/>
      <BsShare class="icon"/>
    </div>
  </div>
</template>

<style scoped>

</style>