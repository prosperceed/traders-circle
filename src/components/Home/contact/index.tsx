import { contactData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	return (
		<section className="pb-28 relative">
			<div className="container px-4  z-2">
				<div className="text-center">
					<div className="flex flex-col gap-4">
						{/* <p className="text-muted text-base relative">
							Always By <span className="text-primary">your side</span>
						</p> */}
						<h2 className="text-white sm:text-40 text-30 font-medium">
							Stay connected with us
						</h2>
					</div>
					<div className="relative w-[80%] lg:w-[40rem] flex flex-col space-y-8 items-center h-fit mx-auto mt-16 border border-border/20  py-6 gap-8 px-10 rounded-3xl bg-white/2 shadow-md drop-shadow-2xl backdrop-blur-xl">
						<div className="px-2 flex justify-start w-[80%] lg:w-[26rem]">
							<p className="text- text-sm md:text-[19px] text-left ">
								Reach us on our social media platforms to stay updated on our
								progress and get help on your questions
							</p>
						</div>
						<div className="grid grid-cols-4 space-x-3">
							{contactData.map((item, index) => (
								<div
									key={index}
									className="text-center flex items-center justify-end flex-col"
								>
									<div className="bg-white/90 cursor-pointer backdrop-blur-xs p-2 rounded-full w-fit">
										{/* <Image
										src={item.icon}
										alt={item.title}
										width={44}
										height={44}
									/> */}

										<Link href={item.link}>{item.icon}</Link>
									</div>
									{/* <h4 className={`text-white text-[15px] mb-2 ${item.space}`}>
										{item.title}
									</h4>
									<div className="text-muted/60">
										<p className="text-sm">{item.text}</p>
									</div> */}
								</div>
							))}
						</div>
						<div className="absolute -top-10 -right-6 -z-20">
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
			<div className="bg-linear-to-br from-tealGreen to-cyan-400 sm:w-50 w-96 z-0 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60"></div>
		</section>
	);
};

export default Contact;
