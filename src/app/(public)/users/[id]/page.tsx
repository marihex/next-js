import React from 'react';
import {UserComponent} from "@/src/components/users/UserComponent";
import {Metadata} from "next";
import {getById} from "@/src/services/api.services";
import {IUser} from "@/src/models/IUser";

type Props = {
    params: Promise<{id: string}>;
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;
    const user = await getById<IUser>('/users/', Number(id))

    return {
        title: `${user.name} - User Page`,
        description: `User ${user.name} - User Page`
    }
}

const UserPage = ({params}: Props) => {
    return (
        <div>
            <UserComponent params={params}/>
        </div>
    );
};

export default UserPage;