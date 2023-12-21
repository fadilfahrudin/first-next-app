import Link from "next/link";

type DetailProductProps = Readonly<{ params: { slug: string[] } }>;

export default function DetailProduct({ params }: DetailProductProps) {
    const { slug } = params;
    if (slug) {
        console.log(slug);
    }
    return (
        <main className="w-screen min-h-screen">
            <h1 className="text-3xl text-dark-25 text-center cursor-default mb-10">Kategori</h1>
            <ul className="flex justify-center gap-6">
                <Link href={'/products/c/sepatu'} as={'/products/c/sepatu'} >
                    <div className="w-[500px] h-[400px] bg-white flex flex-col p-3 overflow-hidden gap-5 rounded-lg">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98c69b43-bb6d-4775-8169-a2088f173475/air-force-1-07-pro-tech-shoes-KHLmTh.png" alt="kategori-sepatu" width={'100%'} height={'100%'} className="rounded-lg aspect-[3/2] object-cover object-center" />
                        <h1 className="text-3xl font-bold text-dark-100 text-center">Kategori Sepatu</h1>
                    </div>
                </Link>
                <Link href={'/products/c/baju'} as={'/products/c/baju'} >
                    <div className="w-[500px] h-[400px] bg-white flex flex-col p-3 overflow-hidden gap-5 rounded-lg">
                        <img src="/images/baju-dummy.jpg" alt="kategori-baju" width={'100%'} height={'100%'} className="rounded-lg aspect-[3/2] object-cover object-center" />
                        <h1 className="text-3xl font-bold text-dark-100 text-center">Kategori Baju</h1>
                    </div>
                </Link>
            </ul>
        </main>
    )
}