<template>
  <section class="user-section">
    <div class="user-data">
      <img class="user-data__avatar" :src="user.avatar" />
      <div class="user-data__content user-content">
        <p class="user-content__first-name">{{ user.first_name }}</p>
        <p class="user-content__last-name">{{ user.last_name }}</p>
        <p class="user-content__email">{{ user.email }}</p>
      </div>
      <button @click="store.deleteUser(user.id)">DELETE</button>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useStore } from "~/store";
import { userData } from "@/types/userTypes";
const store = useStore();
const route = useRoute();
const user = ref<userData>({});
onMounted(async () => {
  await store.fetchUser(route.params.id);
  console.log(route.params);
  user.value = store.getUser;
});
</script>
<style>
p {
  margin: 0;
}
.user-section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 0;
}
.user-data {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-data__avatar {
  border-radius: 50%;
}
.user-content {
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}
.user-content__first-name {
  font-size: 22px;
}
</style>
