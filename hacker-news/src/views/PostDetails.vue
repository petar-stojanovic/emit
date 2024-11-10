<script setup>

import {onMounted, ref} from "vue";
import {AkHeart, AkPerson, BxTimeFive} from "@kalimahapps/vue-icons";
import Comment from "@/components/Comment.vue";

const {id} = defineProps(["id"]);
const post = ref(null);
const isLoading = ref(true);
const error = ref(null);

const fetchPostDetails = async () => {
  try {
    //TODO: Refactor. Use Repository.
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

    <div class="title">
      {{ post.title }}
      <a v-if="post.url" :href="post.url" target="_blank">({{ post.url.split('/')[2] }})</a>
    </div>


    <div class="flex gap-1">
      {{ post.points }} points
      by {{ post.author }}
      on {{ new Date(post.created_at).toLocaleString() }}
    </div>

    <div class="comments">
      <Comment v-for="comment in post.children" :key="comment.id" :comment="comment"/>
    </div>
  </div>
</template>

<style scoped>

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

a {
  font-size: 1rem;
  color: #1c6f9a;
}

a:hover {
  text-decoration: underline;
}

.post-details {
  margin-bottom: 1rem;
}

.comments {
  margin: 2rem 0;
}
</style>