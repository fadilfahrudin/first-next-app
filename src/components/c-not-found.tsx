import Link from "next/link";

export default function CategoryNotfound() {
    return (
        <div className="m-auto w-[500px] h-[500px] bg-slate-500 flex justify-center items-center">
            <h1 className="text-3xl text-white text-center">Not Found</h1>
            <Link href={"/products"} className="text-white bg-slate-400 p-3 block w-max">Kembali</Link>
        </div>
    )
}