import {FC} from "react";
import {IUser} from "@/src/models/IUser";
import Link from "next/link";

type UserProps = {
    user: IUser;
}

export const UserCardComponent: FC<UserProps> = ({user}) => {
    return (
        <div className='flex flex-col gap-2 border border-gray-500 rounded-lg p-5'>
            <span>Name: <Link href={'/users/' + user.id.toString()} className='underline'>{user.name}</Link></span>
            <span>Email: {user.email}</span>
            <span>Username: {user.username}</span>
            <span>Website: {user.website}</span>
        </div>
    );
};