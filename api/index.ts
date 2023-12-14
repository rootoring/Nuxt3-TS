import { usersType, userData, supportType  } from "@/types/userTypes";
interface respUser {
  data: userData
  support: supportType
}
export default () =>({
  async	fetchAllUsers(): Promise<usersType> {
    const data = await fetch('https://reqres.in/api/users')
    return await data.json()
  	},
    async	fetchUserPage(page: number): Promise<respUser> {
      const data = await fetch(`https://reqres.in/api/users?page=${page}`)
      return await data.json()
    }, 
    async	fetchUser(id:number): Promise<respUser>{
      const data = await fetch(`https://reqres.in/api/users/${id}`)
      return await data.json()
    }, 
    async createUser(data: any){
      await fetch('https://reqres.in/api/users',{
        method:'POST',
        body: JSON.stringify(data),
      })
    },
    async deleteUser(id:number | undefined): Promise<void>{
      await fetch(`https://reqres.in/api/users/${id}`,{
        method:'DELETE',
      })
    }
});