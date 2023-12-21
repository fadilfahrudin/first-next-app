"use client"
import Image from "next/image";
import { useGetProductsQuery } from "../lib/redux-toolkit/reducer/products-slice";
export default function Sepatu() {
    const { data, isSuccess } = useGetProductsQuery({})
    return (
        <div>
            <div className="flex gap-4 flex-wrap  justify-center">
                {isSuccess && data.data.map((product: any) => (
                    <div key={product.id} className="basis-[400px] h-[350px] shrink-2 grow-1 bg-slate-50 flex flex-col px-2 pt-2 pb-4 rounded-lg overflow-hidden">
                        <Image src={product.imgUrl} alt={product.name} width={400} height={200} className="rounded-lg aspect-square object-cover object-center overflow-hidden mb-4" />
                        <h2 className="text-ellipsis overflow-hidden h-[60px] text-2xl font-bold font-sans text-dark-100">{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
