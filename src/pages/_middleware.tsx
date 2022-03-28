import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest) {
    const url = req.nextUrl
    console.log(url)
    if (url.pathname == '/') {
        return NextResponse.redirect(url.origin + '/resume/resumePage')
    }
    return NextResponse.next()
}