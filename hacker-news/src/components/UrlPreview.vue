<script setup>
import {onMounted, ref} from "vue";

const {url} = defineProps(["url"]);
const loading = ref(true);
const data = ref(null);

onMounted(() => {
  fetchUrlDetails();
});

const fetchUrlDetails = async () => {
  try {
    // TODO: SECURE API KEY
    const response = await fetch(`https://api.linkpreview.net/?q=${url}`, {
      headers: {
        'X-Linkpreview-Api-Key': "2e9931eb9b55f6dbd252181879572ae1",
      },
    });

    data.value = await response.json();
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="data">
    <div class="preview-card">
      <img :src="data.image" alt="preview" class="preview-image"/>
      <div class="preview-details">
        <div class="preview-title">{{ data.title }}</div>
        <div class="preview-description">{{ data.description }}</div>
        <a :href="url" target="_blank">{{ url }}</a>
      </div>
    </div>
  </div>

  <div v-else>
    No data
  </div>
</template>

<style scoped>

.preview-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}

.preview-card {
  max-width: 35rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.preview-image {
  border-radius: 10px 10px 0 0;
}

.preview-title {
  font-size: 1.25rem;
  font-weight: 600;
}

a {
  color: #1c6f9a;
  font-size: 1rem;
}

a:hover {
  text-decoration: underline;
}
</style>