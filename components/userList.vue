<template>
  <ul class="user-cards">
    <li class="user-card" v-for="user in users" :key="user.id">
      <Nuxt-link :to="`/user/${user.id}`">
        <img :src="user.avatar" alt="" />
        <p>{{ user.first_name }}</p>
      </Nuxt-link>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useStore } from "~/store";
import { usersType, userData } from "@/types/userTypes";
const store = useStore();
const route = useRoute();
const users: Ref<[] | usersType | userData> = ref([]);

const checkRoute = async (): Promise<void> => {
  if (route.params.id) {
    await store.fetchUserPage(route.params.id);
    users.value = store.getUsers.data;
    return;
  }
  console.log(false);
  await store.fetchAllUsers();
  users.value = store.getUsers.data;
};

onMounted(async () => {
  await checkRoute();
});
</script>
<style>
.user-cards {
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
  justify-content: space-between;
  margin-bottom: 50px;
}
.user-card {
  background: red;
}
</style>
