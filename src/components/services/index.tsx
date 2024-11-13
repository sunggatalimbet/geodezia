import "@fontsource-variable/montserrat";
import "@fontsource-variable/inter";
import "@fontsource/poppins";
import { services, servicesTriangles } from "../../lib/constants";

export const ProvidedServices = () => {
	return (
		<article className="min-h-screen w-full flex flex-col items-center justify-center gap-10">
			<h1
				style={{ fontFamily: "Montserrat, sans-serif" }}
				className="font-medium text-[70px] text-white"
			>
				Услуги
			</h1>

			<section className="flex items-center justify-center w-full">
				<div className="my-20 flex flex-wrap flex-row-reverse h-full relative items-center justify-center w-full text-white">
					<div>
						{servicesTriangles.slice(0, 3).map((service, index) => (
							<div
								key={index}
								className="group transition-all duration-150 ease-in-out relative clip-triangle-top-right ml-[3px] mt-[-52px] sm:mt-[-92px]"
							>
								<img
									src={service.imgSrc}
									style={{ clipPath: service.imgClip }}
									className="saturate-0 w-[100px] sm:w-auto group-hover:saturate-100 group-hover:scale-110 group-hover:z-[100] transition-transform duration-150"
								/>
								<h3
									style={{ fontFamily: "Poppins, sans-serif" }}
									className={`${service.textPos} group-hover:font-bold text-[14px] max-w-[115px] text-center font-medium tracking-[5%] leading-[15px] transition-all`}
								>
									{service.text}
								</h3>
							</div>
						))}
					</div>

					<div>
						{servicesTriangles.slice(3, 6).map((service, index) => (
							<div
								key={index + 3}
								className="group transition-all duration-150 ease-in-out relative clip-triangle-top-right ml-[3px] mt-[-52px] sm:mt-[-92px]"
							>
								<img
									src={service.imgSrc}
									style={{ clipPath: service.imgClip }}
									className="saturate-0 w-[100px] sm:w-auto group-hover:saturate-100 group-hover:scale-110 group-hover:z-[100] transition-transform duration-150"
								/>
								<h3
									style={{ fontFamily: "Poppins, sans-serif" }}
									className={`${service.textPos} group-hover:font-bold text-[14px] max-w-[115px] text-center font-medium tracking-[5%] leading-[15px] transition-all`}
								>
									{service.text}
								</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mb-[140px] px-0 md:px-[20px] lg:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-10">
				{services.map((service) => {
					return (
						<div className="flex flex-col py-[] shadow-2xl">
							<div className="relative">
								<img src={service.imageSrc} className="w-full" />
								<h4
									style={{ fontFamily: "Inter, sans-serif" }}
									className="text-[10px] tracking-[5%] uppercase p-2 text-white absolute right-0 rounded-tl-xl bottom-10 bg-[#16384E] max-w-[235px]"
								>
									{service.title}
								</h4>
							</div>

							<div className="flex flex-col justify-between py-4 gap-4 bg-white flex-1">
								<p
									style={{ fontFamily: "Montserrat, sans-serif" }}
									className="px-8 text-[12px]"
								>
									{service.subtitle}
								</p>
								<button
									style={{ fontFamily: "Inter, sans-serif" }}
									className="rounded-md text-white mx-auto text-[13px] tracking-[5%] font-bold px-[22px] py-3 bg-[#FF8C00] hover:bg-[#ff8c00c9] transition-all"
								>
									Узнать больше
								</button>
							</div>
						</div>
					);
				})}
			</section>
		</article>
	);
};
