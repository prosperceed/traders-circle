import { contactData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	return (
		<section className="pb-28 relative">
			<div className="container px-4 relative z-10">
				<div className="text-center">
					<div className="flex flex-col gap-4">
						<h2 className="text-white sm:text-40 text-30 font-medium">
							Stay connected with us
						</h2>
					</div>

					<div
						className="relative w-[80%] lg:w-[40rem] flex flex-col space-y-8 items-center h-fit mx-auto mt-16 
                 border border-border/20 py-6 gap-8 px-10 rounded-3xl 
                 bg-white/2 shadow-md drop-shadow-2xl backdrop-blur-xl z-20"
					>
						<div className="px-2 flex justify-start w-[96%] lg:w-[26rem]">
							<p className="text-muted text-sm md:text-[19px] text-left">
								Reach us on our social media platforms to stay updated on our
								progress, and get help on your questions from our admins.
							</p>
						</div>

						<div className="grid grid-cols-4 gap-4">
							{contactData.map((item, index) => (
								<div
									key={index}
									className="text-center flex flex-col items-center justify-center"
								>
									<Link
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="cursor-pointer bg-white/90 p-3 rounded-full w-fit z-30 relative"
									>
										{item.icon}
									</Link>
								</div>
							))}
						</div>

						<div className="absolute -top-10 -right-6 -z-10">
							<Image
								src="/contact-msg.svg"
								alt="Chat Img"
								width={100}
								height={100}
								className="w-22 h-22 lg:w-38 lg:h-38 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-linear-to-br from-tealGreen to-cyan-400 sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60 z-0"></div>
		</section>
	);
};

export default Contact;
