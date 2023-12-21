"use client";
import Image from "next/image";
import { useGetUnsplashBySearchQuery } from "../lib/redux-toolkit/reducer/unsplash-slice"

export default function Baju() {
    const { data, isSuccess } = useGetUnsplashBySearchQuery({ query: 't-shirt', page: 1, per_page: 12 });

    return (
        <div>
            <div className="flex gap-4 flex-wrap  justify-center">
                {isSuccess && data.results.map((product: any) => (
                    <div key={product.id} className="basis-[300px] h-[400px] shrink-2 grow-1 bg-slate-50 flex flex-col p-2 rounded-lg overflow-hidden">
                        <Image src={product.urls.regular} alt={product.description} width={300} height={300} className="rounded-lg aspect-square object-cover object-center" />
                        <h2 className="text-ellipsis overflow-hidden h-[60px] text-2xl font-bold font-sans">{product.description}</h2>
                        <p>$90</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
