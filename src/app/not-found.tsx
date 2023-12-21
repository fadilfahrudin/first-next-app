import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-3xl text-white'>Not Found</h2>
                <p className='text-white'>Could not find requested resource</p>
                <Link href="/" className='text-white bg-slate-400 p-3 block w-max'>Return Home</Link>
            </div>
        </div>
    )
}