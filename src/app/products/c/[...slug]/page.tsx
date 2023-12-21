'use client';
import Baju from "@/components/c-baju";
import CategoryNotfound from "@/components/c-not-found";
import Sepatu from "@/components/c-sepetu";
import { useParams } from "next/navigation";

export default function Category() {
    const params = useParams()
    let content = null;

    if (params.slug == 'sepatu') {
        content = <Sepatu />;
    } else if (params.slug == 'baju') {
        content = <Baju />
    } else {
        content = <CategoryNotfound />
    }

    return (
        <main className="w-screen min-h-screen my-10">
            {content}
        </main>
    )
}