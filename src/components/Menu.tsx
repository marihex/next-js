import Link from "next/link";

export const Menu = () => {
    return (
        <ul className='w-full h-14 flex gap-3 justify-center items-center'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/form'}>Form</Link></li>
        </ul>
    );
};