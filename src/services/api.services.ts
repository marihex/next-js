import {IUserModel} from "@/src/models/IUserModel";

export const getAllUsers = async (): Promise<IUserModel[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 5}})
   const response = await users.json()
    return response
}