import Link from "next/link";

export const Menu = () => {
    return (
        <>
        <ul className='flex gap-2 items-center justify-center'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contacts'}>Contacts</Link></li>
            <li><Link href={'/users'}>Users</Link></li>
        </ul>
        </>
    );
};