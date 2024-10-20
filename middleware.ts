import { NextRequest, NextResponse } from 'next/server';
import { isLoggedIn } from '@/lib/appwrite';

export async function middleware(request: NextRequest) {
  // Check if the route starts with /admin
  if (request.nextUrl.pathname.startsWith('/internal-portal-cm4sj')) {
    try {
      const loggedIn = await isLoggedIn();
      
      if (!loggedIn) {
        // If not logged in, redirect to the login page
        return NextResponse.redirect(new URL('/internal-portal-cm4sj/auth', request.url));
      }
    } catch (error) {
      console.error('Error checking authentication in middleware:', error);
      // If there's an error, redirect to login page as a fallback
      return NextResponse.redirect(new URL('internal-portal-cm4sj/auth', request.url));
    }
  }

  // If logged in or not an admin route, continue to the requested page
  return NextResponse.next();
}

export const config = {
  matcher: ['/internal-portal-cm4sj/:path*'],
};