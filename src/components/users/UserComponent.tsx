import {getById} from "@/src/services/api.services";
import {IUser} from "@/src/models/IUser";

type Props = {
    params: Promise<{id: string}>;
}

export const UserComponent = async ({params}: Props)=> {

    const {id} = await params;
    const user = await  getById<IUser>(`/users/`, id)

    return (
        <section>
            <div className='flex flex-col gap-3 m-10'>
                <h1 className='text-2xl'>{user.name}</h1>
                <h2 className='italic text-lg'>User Info</h2>
                <div className='text-gray-300 flex flex-col gap-1'><span>UserName: {user.username}</span>
                    <span>Email: {user.email}</span>
                    <span>Phone: {user.phone}</span>
                    <span>Website: {user.website}</span>
                    <span>Company: {user.company.name}</span></div>
            </div>
        </section>
    );
};