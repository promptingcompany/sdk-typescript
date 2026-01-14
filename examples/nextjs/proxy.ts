import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the URL ends with .md extension
	if (pathname.endsWith(".md")) {
		// Remove the .md extension from the path
		const pathWithoutMd = pathname.slice(0, -3);

		// Create the new URL with md prefix
		const newUrl = new URL(`/md${pathWithoutMd}`, request.url);

		// Rewrite the request to the new path
		return NextResponse.rewrite(newUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
