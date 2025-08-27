export type NewsData = {
	tickers: string[];
	title: string;
	content: string;
	id: string;
	link: string;
	image: string;
	date: string;
	author: string;
};

export type NewsProps = {
	params: { slug: string };
};
