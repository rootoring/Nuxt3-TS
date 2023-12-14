export interface usersType {
	data:userData[]
	page:Number
	per_page:Number
	support:supportType
  total:Number
  total_pages:Number
}

export interface supportType{
  text:string
  url:string
}

export interface userData{
  avatar?: string
  email?:string
  first_name?:string
  id?: number
  last_name?:string
}


export interface createUser{
  name: string
  job: string
  id: string
  createdAt: string
}