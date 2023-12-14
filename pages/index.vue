<template>
  <div>
    <userList />
    <p v-for="text of texts" :key="text">{{ text }}</p>
    <button @click="send">send</button>
    <button @click="store.windowChange(true)">calls Window</button>
    <Pagin />
  </div>
</template>
<script setup lang="ts">
import { useStore } from "~/store";
const store = useStore();

let socket: Ref<object> = ref({});
let texts: Ref<[]> = ref([]);
const message = {
  event: "connection",
  username: "username",
  id: Date.now(),
};
const send = async () => {
  const message = {
    event: "message",
    username: "username",
    message: "Hello, world",
    id: Date.now(),
  };
  socket.send(JSON.stringify(message));
};

onMounted(() => {
  socket = new WebSocket("ws://localhost:5000");

  socket.onopen = function (e) {
    socket.send(JSON.stringify(message));
  };
  socket.onmessage = function (event) {
    let mes = JSON.parse(event.data);
    texts.value.push(mes.message);
  };
});
</script>
