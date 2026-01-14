import { type NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/tpc";

export async function GET(
	_req: NextRequest,
	ctx: { params: Promise<{ path?: string[] }> },
) {
	const { path } = await ctx.params;

	const pathArray = path || [];

	const document = await client.document.getByPath(pathArray.join("/"));

	if (!document.ok || !document.data) {
		return new NextResponse("Document not found", { status: 404 });
	}

	return new NextResponse(document.data.content, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
}
