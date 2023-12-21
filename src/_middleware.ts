import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    return NextResponse.json({ msg: 'testing' })
}

export const config = {
    matcher: '/products'
}