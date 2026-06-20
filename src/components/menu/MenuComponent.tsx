import Link from "next/link";

export const MenuComponent = () => {
    return (
        <>
            <ul className="flex gap-5 items-center justify-center w-full py-3">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
                <li><Link href={'/posts'}>Posts</Link></li>
                <li><Link href={'/comments'}>Comments</Link></li>
            </ul>
        </>
    );
};