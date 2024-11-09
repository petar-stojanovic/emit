<script setup>

import {computed, onMounted, toRaw} from "vue";
import {AkStar, BsShare, AkHeart, AkPerson, BxTimeFive} from "@kalimahapps/vue-icons";
import {formatDistanceToNow} from "date-fns/formatDistanceToNow";

const formattedDate = computed(() => {
  return formatDistanceToNow(new Date(article.created_at), {addSuffix: true});
});
const {article} = defineProps(["article"]);
onMounted(() => {
  console.log("ARTICLE", toRaw(article));
})
</script>

<template>
  <div class="article flex align-center space-between">
    <div class="article-details gap-1">
      <div class="title">{{ article.title }}</div>

      <div class="article-metadata flex gap-1">
        <span class="flex align-center">
          <AkHeart class="icon"/> {{ article.points }}</span>
        <span class="flex align-center">
          <AkPerson class="icon"/> {{ article.author }}
        </span>
        <span class="flex align-center">
          <BxTimeFive class="icon"/>
          {{ formattedDate }}
        </span>
        <a :href="article.url" target="_blank">({{ article.url.split('/')[2] }})</a>
      </div>
    </div>

    <div class="flex align-center gap-1">
      <span class="num-comments">{{ article.num_comments }}</span>
      <BsShare class="icon"/>
      <AkStar class="icon"/>
    </div>
  </div>
</template>

<style scoped>

.article {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.article-details {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
}

a {
  color: #1c6f9a;
}

.gap-1 {
  gap: 1rem;
}

.icon {
  font-size: 1.15rem;
  margin-right: 0.5rem;
}

.num-comments {
  padding: 0.25rem;
  border-radius: 0.25rem;
  background: #b6b5b5;
}

.article-metadata {
  font-size: 0.85rem;
}
</style>