import React from 'react';
import {UserComponent} from "@/src/components/users/UserComponent";
import {Metadata} from "next";

type Props = {
    params: Promise<{id: string}>;
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `User ${id} Page`,
        description: `User ${id} Page`
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