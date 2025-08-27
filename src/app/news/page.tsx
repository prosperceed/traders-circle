"use client";

import React, { useState, useEffect } from "react";
import { NewsData } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsList() {
	const [news, setNews] = useState<NewsData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/news")
			.then((res) => res.json())
			.then((data) => {
				setNews(data);
				setLoading(false);
				console.log(data);
			})
			.catch(() => setLoading(false));
	}, []);

	return (
		<div className="container py-8">
			<div className="flex flex-col gap-4">
				<div className="mt-10 py-12">
					<h1 className="text-4xl mt-10 uppercase text-white font-bold">
						Financial <br />
						<span className="text-primary/70">News</span>
					</h1>
				</div>

				{loading ? (
					<p>Loading...</p>
				) : (
					news.map((item, index) => (
						<div
							key={item.link || index}
							className="flex flex-col  gap-y-8 items-center md:flex-row md:gap-6"
						>
							<div className="w-full border border-muted/57 md:hidden"></div>
							{item.image ? (
								<Image
									src={item.image}
									alt={item.title}
									width={200}
									height={150}
									className="w-full md:w-48 h-32 object-cover rounded"
								/>
							) : (
								<div className="w-full md:w-48 h-32 bg-gray-200 flex items-center justify-center rounded">
									No Image
								</div>
							)}
							<div className="flex flex-col justify-between">
								<h2 className="font-semibold text-lg">{item.title}</h2>

								<Link
									href={`/news/ ${encodeURIComponent(item.link)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex w-fit rounded-md p-3 border border-primary text-primary bg-transparent hover:bg-primary/50 hover:text-white/80 text-sm mt-2"
								>
									Read more →
								</Link>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}
