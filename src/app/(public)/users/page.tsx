import React from 'react';
import {UsersComponent} from "@/src/components/users/UsersComponent";

const UsersPage = () => {
    return (
        <section className='py-3'>
            <h1 className='text-center text-2xl'>Users</h1>
           <UsersComponent/>
        </section>
    );
};

export default UsersPage;