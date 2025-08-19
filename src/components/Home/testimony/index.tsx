"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Testimony = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1, // only 1 slide at a time
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		centerMode: false,
	};

	return (
		<section className="py-20" id="testimony">
			<div className="container px-4 w-[97%] mx-auto">
				<div className="grid lg:grid-cols-2 gap-10 items-center">
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

					<div className="w-full h-full">
						<Slider {...settings}>
							{testimonialsData.map((item, index) => (
								<div
									key={index}
									className="rounded-md bg-gradient-to-br from-white/80  to-secondary backdrop-blur-xl p-5"
								>
									<div className="flex flex-col gap-y-5">
										<div className="flex items-center gap-4">
											<div className="bg-secondary/10 p-2 rounded-full">
												<Image
													src={item.image}
													alt={item.name}
													width={80}
													height={80}
													className="rounded-full w-20 h-20 object-cover"
												/>
											</div>
											<h2 className="text-lg  text-white/87 font-bold">
												{item.name}
											</h2>
										</div>
										<p className="w-[86%] text-left p-3 text-base text-white">
											{item.text}
										</p>
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
