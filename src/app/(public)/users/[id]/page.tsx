import React, {FC} from 'react';
import {Metadata} from "next";


type Props = {
    params: {id: string}
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `User ${id}  Page - title`,
        description: `User ${id} Page - description`,
    }
}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            User {id} page
        </div>
    );
};

export default UserPage;