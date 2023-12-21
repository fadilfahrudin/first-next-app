"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

type Children = Readonly<{ children: React.ReactNode }>
export default function RootLayout({ children }: Children) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body className={`${inter.className} bg-dark-100 w-screen overflow-x-hidden min-h-screen`}>
                {pathname !== "/login" && pathname !== "/register" &&
                    <Navbar />
                }
                <StoreProvider>
                    {children}
                </StoreProvider>
                {pathname !== "/login" && pathname !== "/register" &&
                    <Footer />
                }
            </body>
        </html>
    )
}
