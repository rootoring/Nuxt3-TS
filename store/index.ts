import { defineStore } from 'pinia'
import { usersType, userData  } from "@/types/userTypes";

type State = {
  users:[] | usersType | userData
  userData:userData
  windowStatus:boolean
}
export const useStore = defineStore({
  id: 'Products',
  state: (): State =>({
    users:[],
    userData: {},
    windowStatus:true
  }),
  getters:{
    getUsers({ users }):[] | usersType | userData{
      return users
    },
    getUser({ userData }):userData{
      return userData
    },
    getwindowStatus({windowStatus}):boolean{
      return windowStatus
    }
  },

  actions: {
    async	fetchAllUsers(): Promise<void>{
      const {$api} = useNuxtApp()
      const data = await $api.fetchAllUsers();
      this.users = data
    },

    async	fetchUserPage(page: number): Promise<void>{
      const {$api} = useNuxtApp()
      const {data} = await $api.fetchUserPage(page);
      console.log(data)
      this.users = data
    },  

    async fetchUser(id: number): Promise<void>{
      const {$api} = useNuxtApp()
      const { data } = await $api.fetchUser(id);
      this.userData = data
    },   

    async createUser(body:object): Promise<void>{
      const {$api} = useNuxtApp()
      await $api.createUser(body);

    }, 

    async deleteUser(id: number | undefined): Promise<void>{
      const {$api} = useNuxtApp()
      await $api.deleteUser(id);
    },
    windowChange(status:boolean): void{
      this.windowStatus = status
    }
  }
})