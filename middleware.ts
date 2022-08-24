import { NextResponse } from 'next/server';

export default async function handler(req) {

  const sessionId = req.cookies.get('sessionId');
  const { origin, pathname } = req.nextUrl;
  const authPages = ['/', '/test'];
  const is_auth_page = pathname.includes('login') || pathname.includes('register');


  if (!sessionId) {

    if (authPages.includes(pathname)) {

      const res = NextResponse.redirect(new URL('/login', origin));

      res.headers.set("Set-Cookie", [
        `intendedUrl=${origin + pathname}; SameSite=Strict; Path=/`,
      ]);

      return res;
    }

  }

  else if (is_auth_page) {
    return NextResponse.redirect(new URL('/', origin))
  }

  return NextResponse.next();

}