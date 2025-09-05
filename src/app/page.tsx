import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/about";

import Platform from "@/components/Home/platform";
import Services from "@/components/Home/services";
import Contact from "@/components/Home/contact";
import Testimony from "@/components/Home/testimony";
import Achievement from "@/components/Home/Achievement";
import Uniqueness from "@/components/Home/uniqueness";
import { Metadata } from "next";
import TradingViewWidget from "@/components/Home/currencies";
import Faq from "@/components/Home/Faq";
export const metadata: Metadata = {
	title: "Trader's Circle Institute",
};

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<About />
			<Achievement />
			<Uniqueness />
			{/* <Platform /> */}
			<Services />
			<Testimony />
			<Contact />
			<Faq />
			<TradingViewWidget />
		</main>
	);
}
