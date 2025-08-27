import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const page = searchParams.get("page") ?? "0";
	const limit = searchParams.get("limit") ?? "20";

	try {
		const response = await fetch(
			`https://financialmodelingprep.com/stable/fmp-articles?page=${page}&limit=${limit}&apikey=${process.env.FMP_API_KEY}`
		);

		if (!response.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch News" },
				{ status: 500 }
			);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: "Failed to load News" }, { status: 500 });
	}
}
