// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    // Get the current user from cookies
    const user = request.cookies.get('user');

    // Redirect to login if not authenticated or not admin
    if (!user || user !== 'admin') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to proceed if authenticated
    return NextResponse.next();
}

// Apply middleware to admin routes
export const config = {
    matcher: '/admin',
};
