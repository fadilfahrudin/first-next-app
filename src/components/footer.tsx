import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-dark-75 w-screen">
            <div className="flex justify-between  px-10 pt-10 w-[100%] h-[300px] overflow-hidden">
                <div className="w-1/2 flex flex-wrap gap-[160px]">
                    <ul className="w-max flex flex-col gap-3">
                        <li className="text-dark-25 font-semibold">Find Store</li>
                        <li><Link href={'#'} className="text-white">Jakarta</Link></li>
                        <li><Link href={'#'} className="text-white">Lampung</Link></li>
                        <li><Link href={'#'} className="text-white">Bandung</Link></li>
                    </ul>
                    <ul className="w-max flex flex-col gap-3">
                        <li className="text-dark-25 font-semibold">Help</li>
                        <li><Link href={'#'} className="text-white">How to buy?</Link></li>
                        <li><Link href={'#'} className="text-white">Payment Methode</Link></li>
                        <li><Link href={'#'} className="text-white">Returns</Link></li>
                        <li><Link href={'#'} className="text-white">Contact Us</Link></li>
                    </ul>
                    <ul className="w-max flex flex-col gap-3">
                        <li className="text-dark-25 font-semibold">About Us</li>
                        <li><Link href={'#'} className="text-white">News</Link></li>
                        <li><Link href={'#'} className="text-white">Carrers</Link></li>
                        <li><Link href={'#'} className="text-white">Term of Use</Link></li>
                    </ul>
                </div>
                <div className="w-1/3 ">
                    <ul className="flex gap-3 justify-end">
                        <li>
                            <Link href={'#'}><i className="fi-ss fi-brands-instagram text-dark-25 text-3xl"></i></Link>
                        </li>
                        <li>
                            <Link href={'#'}><i className="fi fi-brands-tik-tok text-dark-25 text-3xl"></i></Link>
                        </li>
                        <li>
                            <Link href={'#'}><i className="fi fi-brands-twitter text-dark-25 text-3xl"></i></Link>
                        </li>
                        <li>
                            <Link href={'#'}><i className="fi fi-brands-youtube text-dark-25 text-3xl"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-screen h-[50px] bg-dark-50 flex items-center justify-center">
                <p id="licen" className={` text-white`}>Copyright © 2022. All Rights Reserved.</p>
            </div>
        </footer>
    )
}