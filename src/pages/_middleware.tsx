import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest) {
    const url = req.nextUrl
    console.log(url)
    if (url.pathname == '/') {
        return NextResponse.redirect(url.origin + '/resume/professional')
    }
    return NextResponse.next()
}