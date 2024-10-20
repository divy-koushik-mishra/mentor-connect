import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';  // Or any other method to access cookies/session

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/internal-portal-cm4sj');
  const isLoginPage = request.nextUrl.pathname === '/internal-portal-cm4sj/auth';

  // Check if user is authenticated based on cookies or session
  const loggedIn = checkLoggedIn(request);

  if (isAdminRoute) {
    if (!loggedIn && !isLoginPage) {
      // If not logged in and trying to access an admin page (except login), redirect to login
      return NextResponse.redirect(new URL('/internal-portal-cm4sj/auth', request.url));
    } else if (loggedIn && isLoginPage) {
      // If logged in and trying to access login page, redirect to admin dashboard
      return NextResponse.redirect(new URL('/internal-portal-cm4sj/', request.url));
    }
  }

  // For all other cases, allow the request to proceed
  return NextResponse.next();
}

// Example of a simple check to determine if the user is logged in
function checkLoggedIn(request: NextRequest) {
  const token = request.cookies.get('appwrite-session');  // Check if there's a valid session cookie
  return Boolean(token);  // Return true if token exists, otherwise false
}

export const config = {
  matcher: ['/internal-portal-cm4sj/:path*'],
};
