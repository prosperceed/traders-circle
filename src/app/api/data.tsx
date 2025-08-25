import { title } from "process";
import React, { ReactNode } from "react";
import {
	BiLineChartDown,
	BiAnalyse,
	BiSolidDollarCircle,
} from "react-icons/bi";

import {
	BsCreditCard2Back,
	BsFillLightningFill,
	BsJournals,
	BsSliders,
} from "react-icons/bs";

import {
	BiLogoWhatsapp,
	BiLogoInstagram,
	BiLogoTiktok,
	BiLogoFacebook,
} from "react-icons/bi";

export const footerlabels: { label: string; herf: string }[] = [
	{ label: "Terms", herf: "#" },
	{ label: "Disclosures", herf: "#" },
	{ label: "Latest News", herf: "#" },
];

export const pricedeta: {
	title: string;
	short: string;
	icon: string;
	background: string;
	price: string;
	mark: string;
	width: number;
	height: number;
	padding: string;
}[] = [
	{
		title: "Bitcoin",
		short: "BTC/USD",
		icon: "/images/icons/icon-bitcoin.svg",
		background: "bg-warning/20",
		price: "$93,291.24",
		mark: "$94,040.99 (-0.9%)",
		width: 18,
		height: 23,
		padding: "px-4 py-3",
	},
	{
		title: "Ethereum",
		short: "ETH/USD",
		icon: "/images/icons/icon-ethereum.svg",
		background: "bg-light_grey",
		price: "$3,128.84",
		mark: "$4,878.26 (-35.9%)",
		width: 18,
		height: 23,
		padding: "px-4 py-2",
	},
	{
		title: "Polkadot",
		short: "BTC/USD",
		icon: "/images/icons/icon-bitcoin-circle.svg",
		background: "bg-warning/20",
		price: "$443.27",
		mark: "$3,785.82 (-88.3%)",
		width: 46,
		height: 46,
		padding: "px-0 py-0",
	},
	{
		title: "Litecoin",
		short: "LTC/USD",
		icon: "/images/icons/icon-litecoin.svg",
		background: "bg-light_grey",
		price: "$86.11",
		mark: "$410.26 (-79.1%)",
		width: 18,
		height: 23,
		padding: "px-4 py-3",
	},
	{
		title: "Solana",
		short: "SOL/USD",
		icon: "/images/icons/icon-solana.svg",
		background: "bg-light_grey",
		price: "$238.70",
		mark: "$259.96 (-8.2%)",
		width: 24,
		height: 24,
		padding: "px-4 py-3",
	},
	{
		title: "Dogecoin",
		short: "DOGE/USD",
		icon: "/images/icons/icon-dogecoin.svg",
		background: "bg-light_grey",
		price: "$0.394",
		mark: "$0.7316 (-46.2%)",
		width: 46,
		height: 46,
		padding: "px-0 py-0",
	},
];

export const serviceData: { image: ReactNode; title: string }[] = [
	{
		image: <BiAnalyse className="w-10 h-10 text-cyan-400" />,
		title: "Join our interactive community",
	},
	{
		image: <BiLineChartDown className="w-10 h-10 text-cyan-400" />,
		title: "Learn Critical analysis",
	},
	{
		image: <BiSolidDollarCircle className="w-10 h-10 text-cyan-400" />,
		title: "Make profitable executions",
	},
];

export const upgradeData: { title: string }[] = [
	{ title: "100% Secure" },
	{ title: "Free figma file" },
	{ title: "A fraction of the cost" },
	{ title: "Powerful in performance" },
	{ title: "More durable" },
	{ title: "Designed for crypto" },
	{ title: "Easier to use" },
	{ title: " 100% free framer template" },
];

export const contactData: {
	icon: ReactNode;
	link: string;
	space: string;
}[] = [
	{
		icon: <BiLogoWhatsapp className="w-6 h-6 text-green-400" />,
		link: "https://whatsapp.com/channel/0029Vb3odBVLI8YPRIFWCG0o",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoFacebook className="w-6 h-6 text-blue-400" />,
		link: "https://www.facebook.com/share/19Px8B2TzE/",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoInstagram className="w-6 h-6 text-red-400" />,
		link: "https://www.instagram.com/",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoTiktok className="w-6 h-6 text-cyan-400" />,
		link: "https://vm.tiktok.com/ZSAdTX4Nk/",
		space: "lg:mt-1",
	},
];

export const uniquenessData: {
	icon: ReactNode;
	title: string;
	text: string;
	position: string;
}[] = [
	{
		icon: <BsJournals className="w-6 h-6 text-white" />,
		title: "Journaling",
		text: "A good trade starts from how well you plan it",
		position: "md:top-0 md:left-0",
	},
	{
		icon: <BsSliders className="w-6 h-6 text-white" />,
		title: "Strategy",
		text: "Strategy places you ahead of the game, and We teach just the best of it",
		position: "md:top-0 md:right-0",
	},
	{
		icon: <BsCreditCard2Back className="w-6 h-6 text-white" />,
		title: "Risk management",
		text: "Learn how to manage your risk and protect your capital",
		position: "md:bottom-0 md:left-0",
	},
	{
		icon: <BsFillLightningFill className="w-6 h-6 text-white" />,
		title: "Sharp emotions",
		text: "Boost your confidence and learn how to control your emotions",
		position: "md:bottom-0 md:right-0",
	},
];

export const testimonialsData: {
	name: string;
	image: string;
	text: string;
	role: string;
}[] = [
	{
		name: "Imeh Eddet",
		image: "/imeh.jpeg",
		text: "Trader's circle is an institute that was meant to guide me through my forex journey but has become a big family to me connecting me with many like minded people. All thanks to sir Chidex 💎",
		role: "Student",
	},

	{
		name: "Godswill",
		image: "/godswill.jpeg",
		text: "My whole ideology about forex has changed since I joined Trader's Circle. The community is very supportive and the concepts are top-notch. Don't think twice, join now!",
		role: "Student",
	},

	{
		name: "Prosper Successs",
		image: "/student.PNG",
		text: " The trading journey has not been easy with several uncertainties, until I found Trader's circle Institute that gave me a rich experience with the charts. Indeed, it's the rarest platform you would find.",
		role: "Student",
	},

	{
		name: "CRAN",
		image: "/man.svg",
		text: " Traders Circle institute has been a game-changer for my trading journey! The community is super supportive, and the teaching is top-notch. I've learned so much from the lessons, insights, and real-life examples shared. The admin and our great mentor CHIDEX are responsive, helpful, and always willing to lend a hand. What I love most is the collaborative environment - it's not just about trading; it's about growing together. If you're looking for a community that truly cares about your growth and success, look no further than Traders Circle!",
		role: "Student",
	},

	{
		name: "Chinedu",
		image: "/man.svg",
		text: "Honestly Trader's Circle is an eye opener. The teachings are very insightful. What even baffles me is how Boss Chidera after all the mentorship still holds class with us and ask about our progress so far. Ensuring we are still doing well and making it. And by the way, I really enjoyed Monday's lesson to be honest.",
		role: "Student",
	},

	{
		name: "Osariemen",
		image: "/man.svg",
		text: `My trading journey with Trader's Circle Institute has been a journey and a very beautiful one for real.... for someone who started afresh to mastering the charts in less than 6 months?? Credit to the tutors, they are always available for your questions, there's a group for general analysis, there's a group for free signals....all to aid your trading journey.... grateful to be a part of this community.`,
		role: "Student",
	},

	{
		name: "James Sunday",
		image: "/man.svg",
		text: "In the whole of my journey in this industry so far, one of the best decisions I have made is joining the traders circle. It rebranded everything even what I had known before to make things easier and most of all profitable.The platform or environment created is always good for learning cuz the tutors make sure that the train takes everybody along.They are able to respond to your questions and hear your contribution at the best possible time in the day, better than some customer care,And once you are in the circle you will get all the support you need to become a profitable trader.",
		role: "Student",
	},

	{
		name: "Isaac Evidence ",
		image: "/man.svg",
		text: "Before joining the July Advanced Class, I struggled a lot with understanding market structure and liquidity. I kept jumping from one strategy to another without real consistency. After taking the class and practicing what I learned, I can now confidently analyze the market on my own and take quality trades. My trading journey has completely changed for the better. I know there’s still more to learn, but I’m truly grateful I clicked on Trader’s Circle’s ad on a WhatsApp TV — because where I am today in trading is largely thanks to Trader’s Circle. 🙌",
		role: "Student",
	},
];

export const CryptoData: { name: string; price: number }[] = [
	{ name: "Bitcoin BTC/USD", price: 67646.84 },
	{ name: "Ethereum ETH/USD", price: 2515.93 },
	{ name: "Bitcoin Cash BTC/USD", price: 366.96 },
	{ name: "Litecoin LTC/USD", price: 61504.54 },
];
