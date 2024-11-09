<script setup>
import {BxSolidHot} from '@kalimahapps/vue-icons';
</script>

<template>
  <div class="sidebar">
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      All
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Hot
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Show HN
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Ask HN
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Polls
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Jobs
    </router-link>

    <hr/>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Shipow
    </router-link>
    <router-link class="link" to="">
      <BxSolidHot class="icon"/>
      Starred
    </router-link>

  </div>

</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 1rem 0;
  background-color: var(--sidebar-background);
  width: 10rem;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid #ccc;
}

.link {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
}

.link:hover {
  background-color: #e3e3e5;
}

hr {
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
}

.icon {
  font-size: 1.25rem;
}
</style>