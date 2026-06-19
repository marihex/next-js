import {getAllUsers} from "@/src/services/api.services";
import {User} from "@/src/components/User";

export const Users = async  () => {

    const users = await getAllUsers();

    return (
        <section className='grid grid-cols-2 gap-10 w-[60%] py-8 mx-auto'>
            {
                users.map((user) => <User key={user.id} user={user} />)
            }
        </section>
    );
};