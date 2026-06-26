import {IUserModel} from "@/src/models/IUserModel";

export const getAllUsers = async (): Promise<IUserModel[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
   const response = await users.json()
    return response
}