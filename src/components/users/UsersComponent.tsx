import {UserCardComponent} from "@/src/components/users/UserCardComponent";
import {users} from "@/src/helpers/fetchDataHelpers";

export const UsersComponent = async () => {


    return (
        <div className='grid grid-cols-2 w-[65%] m-auto py-8 gap-4'>
            {
                users.map(user => <UserCardComponent user={user} key={user.id}/>)
            }
        </div>
    );
}