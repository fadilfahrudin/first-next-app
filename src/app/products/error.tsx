'use client'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body className="flex justify-center items-center h-screen w-screen">
                <div className='flex flex-col gap-4 items-center'>
                    <h2 className='text-3xl text-white'>Something when wrong</h2>
                    <button onClick={() => reset()} className='text-white bg-slate-400 p-3 block w-max'>Return Home</button>
                </div>
            </body>
        </html>
    )
}