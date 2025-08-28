import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";
import { NewsProps } from "@/types/news";

async function getNews(link: string) {
	const res = await fetch(
		`https://financialmodelingprep.com/stable/fmp-articles?link=${link}&apikey=${process.env.FMP_API_KEY}`
	);

	if (!res.ok) {
		return null;
	}

	const news = await res.json();
	return news[0];
}

export default async function NewsDetail({ params }: NewsProps) {
	const { slug } = params;
	const decodedLink = decodeURIComponent(slug);
	const news = await getNews(decodedLink);

	if (!news) return notFound();

	return (
		<div className="container mx-auto py-10 mt-30 prose prose-lg">
			<h1 className="font-bold text-xl lg:text-3xl">{news.title}</h1>
			<p className="text-primary/80 text-sm mb-2">
				{moment(news.date).format("MMMM Do YYYY, h:mm a")}
			</p>
			<Image
				width={400}
				height={600}
				src={news.image}
				alt={news.title}
				className="w-full rounded-lg"
			/>
			<div
				className="flex flex-col gap-4 py-10"
				dangerouslySetInnerHTML={{ __html: news.content }}
			/>
		</div>
	);
}
