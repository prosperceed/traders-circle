import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";

async function getNews() {
	const res = await fetch(
		`https://financialmodelingprep.com/stable/fmp-articles?apikey=${process.env.FMP_API_KEY}`,
		{ cache: "no-store" }
	);

	if (!res.ok) {
		return null;
	}

	return res.json();
}

export default async function NewsDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const decodedLink = decodeURIComponent(slug);

	const articles = await getNews();
	if (!articles) return notFound();

	const article = articles.find((a: any) => a.link === decodedLink);

	if (!article) return notFound();

	return (
		<div className="container mx-auto py-10 mt-30 prose prose-lg">
			<h1 className="font-bold text-xl lg:text-3xl">{article.title}</h1>
			<p className="text-primary/80 text-sm mb-2">
				{moment(article.date).format("MMMM Do YYYY, h:mm a")}
			</p>
			<Image
				width={800}
				height={400}
				src={article.image}
				alt={article.title}
				className="w-full rounded-lg"
			/>
			<div
				className="flex flex-col gap-4 py-10"
				dangerouslySetInnerHTML={{ __html: article.content }}
			/>
		</div>
	);
}
