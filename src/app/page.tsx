import Image from "next/image";
import Link from "next/link";

// unsplas API
async function unsplash() {
    const res = await fetch('https://api.unsplash.com/search/photos?query=t-shirt&page=1&per_page=2&client_id=hGSVwpcfEvWgE49pmqO8sTSiI3na4KEZVC8cvla4thU')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function fakeProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=2');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Home() {
    const data = await fakeProducts();
    const data2 = await unsplash();
    console.log(data2.results);
    return (
        <main className="w-screen flex flex-col items-center gap-10 p-10 overflow-hidden">
            {/* <h1 className="text-3xl text-dark-25 text-center cursor-default">Home Page</h1> */}
            <div className="w-[100%] h-[400px] overflow-hidden rounded-lg relative">
                <h1 className="text-6xl text-dark-100 font-bold cursor-default absolute left-[10%] top-[30%]">Baju Keren</h1>
                <p className="text-3xl text-dark-75  cursor-default absolute left-[10%] top-[45%] w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam, sint ipsam natus explicabo.</p>
                <img src="/images/baju-dummy.jpg" alt="banner-baju" width={'100%'} height={'100%'} className="aspect-[9/3] object-cover object-left-bottom" />
            </div>
            <div className="flex w-[100%] justify-between gap-6">
                <div className="w-[80%] h-[400px] overflow-hidden rounded-lg relative">
                    <h1 className="text-4xl text-dark-100 font-bold cursor-default absolute left-[10%] top-[10%]">Sepatu Keren</h1>
                    <p className="text-2xl text-dark-75  cursor-default absolute left-[10%] top-[20%] w-2/3">Lorem ipsum dolor sit amet consectetur.</p>
                    <Link href={'/products/c/sepatu'} className="text-dark-75 font-bold hover:text-dark-50   absolute left-[10%] top-[40%] cursor-pointer">See more</Link>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95526a28-5170-4f8e-ad59-37bc2395e8d8/air-trainer-1-shoes-ZLtGj0.png" alt="Nike" width={'100%'} height={'100%'} className="aspect-[3/2] object-cover object-center" />
                </div>
                <div className="flex gap-5 w-[100%]">
                    {data2.results.map((product: any) => (
                        <div key={product.id} className="w-[100%] h-[400px] shrink-2 grow-1 bg-white flex flex-col p-2 rounded-lg overflow-hidden">
                            <Image src={product.urls.regular} alt={product.description} width={400} height={200} className="aspect-[5/4] rounded-lg object-cover object-center overflow-hidden" />
                            <h2 className="text-ellipsis overflow-hidden h-[60px] text-2xl font-bold font-sans text-dark-100">{product.description}</h2>
                            <Link href={'/products/c/baju'} className="text-dark-75 hover:text-dark-100 hover:font-bold">See more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
