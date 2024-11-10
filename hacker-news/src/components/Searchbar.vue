<script setup>
import {BySearch} from "@kalimahapps/vue-icons";
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import debounce from 'lodash.debounce'

const router = useRouter();
const route = useRoute();
const searchTerm = ref(route.query.q || "");

watch(
    () => route.query.q,
    (newQuery) => {
      searchTerm.value = newQuery || "";
    },
    {immediate: true}
);

const onSearch = debounce(() => {
  router.push({path: '/', query: {q: searchTerm.value}});
}, 300);

</script>

<template>
  <BySearch class="search-icon"/>
  <input type="text" v-model="searchTerm" @input="onSearch" placeholder="Search stories by title, url or author"/>
  <span>
    <small>by</small>
      <a href="https://algolia.com" target="_blank">
        <img class="algolia-logo" src="@/assets/algolia.png" alt="Algolia Logo"/>
      </a>
  </span>
</template>

<style scoped>
.search-icon {
  position: absolute;
  font-size: 1.25rem;
  color: orangered;
  left: 1.75rem;
}

input {
  width: 100%;
  border-radius: 10rem;
  padding: 0.75rem 0 0.75rem 2.75rem;
}

span {
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.algolia-logo {
  max-height: 2rem;
}

.icon {
  font-size: 2rem;
  margin-left: 2rem;
}
</style>