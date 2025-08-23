"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "@/app/api/data";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Icon } from "@iconify/react";

const Testimony = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 9000,
		centerMode: false,
	};

	return (
		<section className="py-20" id="testimony">
			<div className="container px-4 w-[96%]  mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-white sm:text-40 text-30 font-medium mb-5">
							What Our Students have to say
						</h2>
						<p className="w-[86%] text-muted/60 text-18 mb-7">
							We are committed to providing our students with the best learning
							experience possible. You could be the next successful trader with
							our expert guidance and support.
						</p>
					</div>

					<div className="">
						<Slider {...settings}>
							{testimonialsData.map((item, index) => (
								<div
									key={index}
									className="w-full max-w-md min-h-[200px] flex flex-col space-y-20 justify-between rounded-md bg-gradient-to-br from-white/80  to-secondary backdrop-blur-xl p-2"
								>
									<div className="flex relative">
										<p className="w-[88%] lg:w-[80%] mx-auto text-left p-3 text-[13px] lg:text-[15px] text-white">
											{item.text}
										</p>
										<div className="absolute top-0 -left-1 lg:left-3">
											<BiSolidQuoteLeft className="text-4xl text-secondary/40" />
										</div>
									</div>
									<div className="flex space-x-2 items-center justify-start">
										<div className="bg-secondary/10 p-1 rounded-full">
											<Image
												src={item.image}
												alt={item.name}
												width={60}
												height={60}
												className="rounded-full w-16 h-16 object-cover"
											/>
										</div>
										<div className="flex flex-col items-center space-x-2">
											<h2 className="text-[16px] font-bold text-white/87">
												{item.name}
											</h2>
											<div className="">
												<p className="text-sm text-primary">{item.role}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimony;
