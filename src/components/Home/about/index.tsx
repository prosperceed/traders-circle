"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
	const ref = useRef(null);
	const inView = useInView(ref);

	const TopAnimation = {
		initial: { y: "-100%", opacity: 0 },
		animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
		transition: { duration: 0.6, delay: 0.4 },
	};

	const bottomAnimation = {
		initial: { y: "100%", opacity: 0 },
		animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
		transition: { duration: 0.6, delay: 0.4 },
	};

	const services = [
		{
			icon: "/images/chooseus/chooseus-icon-1.svg",
			text: "Deep connection with the chart",
		},
		{
			icon: "/images/chooseus/chooseus-icon-2.svg",
			text: "Insightful technical analysis breakdown",
		},
		{
			icon: "/images/chooseus/chooseus-icon-3.svg",
			text: "Improved portfolio management",
		},
	];

	return (
		<section className="" id="about">
			<div className="container px-4 mx-auto lg:max-w-(--breakpoint-xl)">
				<div ref={ref} className="grid grid-cols-12 items-center">
					<motion.div
						{...bottomAnimation}
						className="lg:col-span-7 col-span-12"
					>
						<div className="flex flex-col gap-3">
							<p className="text-white font-medium">
								About <span className="text-primary">Us</span>
							</p>
							<h2 className="text-[15px] md:text-[20px] text-white lg:w-full md:w-70% font-medium">
								Trader's Circle is a shared mind of indiviaduals given to
								unmatched fervor towards building excellence in strategy,
								execution and management of trading life. We build a unique
								influence in the trading industry, breaking the far gap between
								mentors and mentees.{" "}
								<span className="text-cyan-400">
									{" "}
									#JustOneTrade and it's practical!
								</span>
							</h2>
							<div className="py-2 flex flex-col space-y-1.2">
								<p className="text-white/60 font-bold">Chidera Michael</p>
								<small className="text-[11px]">
									CEO, Trader's Cirlce Institute
								</small>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-7 mt-11">
							{services.map((service, index) => (
								<div key={index} className="flex items-center gap-5">
									<div className="p-3 bg-light_grey/30 rounded-full">
										<Image
											src={service.icon}
											alt={`${service.text} icon`}
											width={25}
											height={25}
										/>
									</div>
									<p className="text-white font-medium">{service.text}</p>
								</div>
							))}
						</div>
					</motion.div>
					<motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
						<div className="2xl:-mr-40 mt-9 flex justify-center">
							<Image
								src="/onchart.jpg"
								alt="image"
								width={600}
								height={425}
								className="lg:w-full"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
