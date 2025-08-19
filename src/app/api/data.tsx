import { title } from "process";
import {
	BiLineChartDown,
	BiAnalyse,
	BiSolidDollarCircle,
} from "react-icons/bi";

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

export const serviceData: { image: string; title: string }[] = [
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
	icon: string;
	title: string;
	link: string;
	space: string;
}[] = [
	{
		icon: <BiLogoWhatsapp className="w-6 h-6 text-green-400" />,
		title: "WhatsApp",
		link: "https://whatsapp.com/channel/0029Vb3odBVLI8YPRIFWCG0o",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoFacebook className="w-6 h-6 text-blue-400" />,
		title: "Facebook",
		link: "https://www.facebook.com/share/19Px8B2TzE/",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoInstagram className="w-6 h-6 text-red-400" />,
		title: "Instagram",
		link: "Enjoy the moments of short videos, and more.",
		space: "lg:mt-1",
	},
	{
		icon: <BiLogoTiktok className="w-6 h-6 text-cyan-400" />,
		title: "TikTok",
		link: "https://vm.tiktok.com/ZSAdTX4Nk/",
		space: "lg:mt-1",
	},
];

export const uniquenessData: {
	icon: string;
	title: string;
	text: string;
	position: string;
}[] = [
	{
		icon: "/images/timeline/icon-planning.svg",
		title: "Journaling",
		text: "A good trade starts from how well you plan it",
		position: "md:top-0 md:left-0",
	},
	{
		icon: "/images/timeline/icon-refinement.svg",
		title: "Strategy",
		text: "Strategy places you ahead of the game, and We teach just the best of it",
		position: "md:top-0 md:right-0",
	},
	{
		icon: "/images/timeline/icon-prototype.svg",
		title: "Risk management",
		text: "Learn how to manage your risk and protect your capital",
		position: "md:bottom-0 md:left-0",
	},
	{
		icon: "/images/timeline/icon-support.svg",
		title: "Sharp emotions",
		text: "Boost your confidence and learn how to control your emotions",
		position: "md:bottom-0 md:right-0",
	},
];

export const testimonialsData: {
	name: string;
	image: string;
	text: string;
}[] = [
	{
		name: "John Doe",
		image: "/student.PNG",
		text: "This platform has transformed my trading skills. The community is supportive and the resources",
	},

	{
		name: "John Doe",
		image: "/student.PNG",
		text: "This platform has transformed my trading skills. The community is supportive and the resources",
	},

	{
		name: "John Doe",
		image: "/student.PNG",
		text: "This platform has transformed my trading skills. The community is supportive and the resources",
	},
];

export const CryptoData: { name: string; price: number }[] = [
	{ name: "Bitcoin BTC/USD", price: 67646.84 },
	{ name: "Ethereum ETH/USD", price: 2515.93 },
	{ name: "Bitcoin Cash BTC/USD", price: 366.96 },
	{ name: "Litecoin LTC/USD", price: 61504.54 },
];
