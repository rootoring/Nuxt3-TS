<template>
  <section class="user-create">
    <div class="user-create__box">
      <h2 class="user-create__title">Create User</h2>
      <form class="user-create__form">
        <input type="text" v-model="name" />
        <select v-model="job">
          <option value="senior">Senior</option>
          <option value="middle">Middle</option>
          <option value="junior">Junior</option>
        </select>
        <button @click.prevent="sendUserData">Send</button>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useStore } from "~/store";
import {} from "@/types/userTypes";
const store = useStore();

let name: Ref<String> = ref("");
let job: Ref<String> = ref("middle");

const sendUserData = async () => {
  await store.createUser({ job, name });
};
</script>

<style>
.user-create {
  padding: 35px 0;
  max-width: 1000px;
  margin: 0 auto;
}
.user-create__box {
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
}
.user-create__title {
  font-size: 33px;
  font-family: "Courier New", Courier, monospace;
}
.user-create__form {
  padding: 15px;
  background: rgba(5, 145, 52, 0.247);
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input,
select {
  width: 50%;
}
button:active {
  background: #205e2546;
}
</style>
