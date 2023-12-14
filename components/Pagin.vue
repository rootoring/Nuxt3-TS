<template>
  <ul class="pag">
    <li v-for="page of pages.users.total_pages" :key="page">
      <Nuxt-link :to="`/users/${page}`"> {{ page }}</Nuxt-link>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "~/store";
const pages = useStore();

onMounted(async () => {
  console.log(pages.users.total_pages);
});
</script>

<style scoped>
.router-link-active {
  color: red !important;
}
.router-link-exact-active {
  color: brown !important;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
.pag {
  display: flex;
  font-size: 25px;
}
li {
  cursor: pointer;
  margin-left: 9px;
  transition: 0.5s all;
  text-decoration: none;
  list-style: none;
}
li:hover {
  opacity: 0.5;
}
</style>
