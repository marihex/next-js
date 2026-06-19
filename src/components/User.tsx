import {FC} from "react";
import {IUser} from "@/src/models/IUser";
import Link from "next/link";

type UserProps = {
    user: IUser
}

export const User: FC <UserProps> = ({user}) => {
    return (
        <div className='flex flex-col  gap-2 border-2 border-gray-500 py-5 px-20'>
            <span><Link href={'/users/' + user.id.toString()}>Name: {user.name}</Link></span>
            <span>Email: {user.email}</span>
            <span>UserName: {user.username}</span>
            <span>ID: {user.id}</span>

        </div>
    );
};