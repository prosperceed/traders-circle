"use client";
import Image from "next/image";
import { serviceData } from "@/app/api/data";
import { motion } from "framer-motion";

const Services = () => {
	return (
		<section className="pt-16" id="services">
			<div className="container px-4 sm:px-6">
				<div className="grid lg:grid-cols-2 items-center gap-20">
					<motion.div
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: "-100%", opacity: 0 }}
						transition={{ duration: 0.6 }}
						className="lg:-ml-32"
					>
						<Image
							src="/student.PNG"
							alt="Forex Student"
							loading="lazy"
							width={550}
							height={400}
						/>
					</motion.div>

					<motion.div
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: "100%", opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="flex flex-col gap-4">
							<p className="text-white text-[18px] font-medium">
								Trader&apos;s Circle{" "}
								<span className="text-cyan-400/60">Institute</span>
							</p>
							<h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
								You can become a forex student today
							</h2>
						</div>
						{/* <p className="text-muted/60 text-18">
							Coinbase has a variety of features that make it the best place to
							start trading.
						</p> */}

						<table className="w-full sm:w-[80%] mt-10">
							<tbody>
								{serviceData.map((item, index) => (
									<tr key={index} className="border-b border-dark_border/10">
										<td className="py-5">
											<div className="bg-cyan-300/10 p-3 rounded-full w-fit">
												{/* <Image
													src={item.image}
													alt={item.title}
													width={24}
													height={24}
												/> */}
												<div>{item.image}</div>
											</div>
										</td>
										<td className="py-5">
											<h4 className="text-muted text-xl ml-5">{item.title}</h4>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
