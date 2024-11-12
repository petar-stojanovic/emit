<script setup>

const {comment} = defineProps(["comment"]);

</script>

<template>
  <div class="comment">
    <div class="title">
      {{ comment.author }} on {{ new Date(comment.created_at).toLocaleString() }}
    </div>
    <p v-html="comment.text"/>

    <div v-if="comment.children" class="comment-reply">
      <Comment v-for="comment in comment.children" :key="comment.id" :comment="comment"/>
    </div>

  </div>
</template>

<style scoped>
.comment {
  position: relative;
  font-weight: 600;
  margin: 1rem 0;
}

.title {
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

a {
  text-decoration: underline !important;
}

.comment-reply {
  margin-left: 1rem;
  border-left: 2px solid #ccc;
  padding-left: 1.25rem;
}
</style>