import React, {FC} from 'react';

type Props = {
    params: Promise<{[key: string]: string | string[] | undefined}>
}

const UserPage: FC<Props> = async ({params}) => {
   const id = (await params).id

    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.json())
    console.log(user);

    return (
        <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
    );
};

export default UserPage;