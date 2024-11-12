<script setup>

import {computed, onMounted, toRaw} from "vue";
import {AkStar, BsShare, AkHeart, AkPerson, BxTimeFive} from "@kalimahapps/vue-icons";
import {formatDistanceToNow} from "date-fns/formatDistanceToNow";

const {article} = defineProps(["article"]);

const formattedDate = computed(() => {
  return formatDistanceToNow(new Date(article.created_at), {addSuffix: true});
});


onMounted(() => {
  // console.log("ARTICLE", toRaw(article));
})
</script>

<template>
  <div class="article flex align-center space-between">
    <div class="article-details gap-1">
      <router-link :to="`/post/${article.objectID}`">
        <div class="title">{{ article.title }}</div>
      </router-link>

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
        <a v-if="article.url" :href="article.url" target="_blank">({{ article.url.split('/')[2] }})</a>
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
  color: var(--color-text);
  font-size: 1.1rem;
  font-weight: 600;
}

.title:hover {
  text-decoration: underline;
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