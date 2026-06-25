import Link from "next/link";

export const Menu = () => {
    return (
        <nav className='w-full flex items-center justify-center p-4'>
            <ul className='flex gap-8'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/add-car'}>Add New Car</Link></li>
            </ul>
        </nav>
    );
};