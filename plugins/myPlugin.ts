import apiData from "@/api";
export default defineNuxtPlugin(() => {
  // now available on `nuxtApp.$injected`
  return{
    provide:{
      api:  apiData()
    }
  }
});
