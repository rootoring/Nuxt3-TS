<template>
  <div
    class="window"
    :class="store.getwindowStatus ? 'show' : ''"
    @click="windowClose(false)"
  >
    <div
      class="window__block"
      @click.prevent="(event) => event.stopPropagation()"
    >
      <input type="text" v-model="text" />
      <p class="window__text">{{ text }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "~/store";
const store = useStore();
let text: Ref<string> = ref("");
let windowShow: Ref<string | boolean> = ref("");
const windowClose = (status: boolean) => store.windowChange(status);

onMounted(() => {
  windowShow.value = store.getwindowStatus;
});
</script>

<style scoped>
.show {
  display: flex !important;
  background: rgba(0, 0, 0, 0.7) !important;
}
.window {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0);
  display: none;
  justify-content: center;
  align-items: center;
  transition: 1s linear all;
}
.window__block {
  width: 500px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.window__text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 33px;
  text-align: center;
}
</style>
