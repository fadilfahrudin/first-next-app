'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathName = usePathname();

    const revalidate = async () => {
        await fetch('http://localhost:3000/api/revalidate?tag=products', {
            method: 'POST',
        })
    }

    return (
        <div className='flex gap-4 w-screen justify-between items-center px-10 py-5 bg-dark-100 z-50 sticky top-[-1px] overflow-hidden'>
            <Link href="/" className={`text-3xl text-dark-25`}>My Store</Link>
            {pathName !== "/dashboard" && (
                <div className='flex gap-4'>
                    <Link href="/" className={`text-1xl text-dark-25 hover:text-dark-50 ${pathName === '/' ? 'text-dark-50' : ''}`}>Home</Link>
                    <Link href="/products" className={`text-1xl text-dark-25 hover:text-dark-50 ${pathName === '/products' ? 'text-dark-50' : ''}`}>Product</Link>
                </div>
            )}

            {
                pathName === "/dashboard" && (
                    <div className='flex gap-4'>
                        <Link href="/" className={`text-1xl text-dark-25 hover:text-dark-50`}>Logout</Link>
                        <button type="button" onClick={() => revalidate()} className="text-1xl hover:text-dark-50 text-dark-25">↺Revalidate</button>
                    </div>
                )
            }
        </div>
    )
}