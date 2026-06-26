import React from 'react';
import {getAllUsers} from "@/src/services/api.services";

const UsersPage = async () => {
    const users = await getAllUsers();

    return (
        <div>
            <h2>{Date.now()}</h2>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;