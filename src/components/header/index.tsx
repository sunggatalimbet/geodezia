import "@fontsource-variable/montserrat";
import "@fontsource/poppins";

export const Header = ({ currentPath }: { currentPath: string }) => {
	console.log({ currentPath });

	return (
		<header className="text-[#16384E] px-10 md:px-20 w-full flex flex-col items-center justify-center">
			<div className="py-4 md:py-6 w-full flex flex-row items-center justify-between">
				<img
					src="/geodezia/logo.svg"
					className="w-[112px] h-[62px] md:w-[152px] md:h-[72px]"
				/>
				<div className="hidden sm:flex flex-col flex-1">
					<h1
						style={{ fontFamily: "Poppins, sans-serif" }}
						className="text-center font-medium text-normal sm:text-[19px]"
					>
						ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ И ПРОЕКТИРОВАНИЕ
					</h1>
					<div
						className="flex flex-row gap-2 font-bold justify-center items-center sm:text-normal md:text-[22px] tracking-[5%]"
						style={{ fontFamily: "Montserrat, sans-serif" }}
					>
						<span>ГЕОЛОГИЯ</span>
						<span className="flex items-center justify-center rounded-full text-[#FF8C00]">
							●
						</span>
						<span>ГЕОДЕЗИЯ</span>
						<span className="flex items-center justify-center rounded-full text-[#FF8C00]">
							●
						</span>
						<span>ЭКОЛОГИЯ</span>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<button className="bg-[#FF8C00] rounded-2xl text-[#16384E] px-6 py-2 text-[15px] tracking-[5%] font-bold">
						Связаться
					</button>
					<div className="flex flex-row items-center">
						<img src={"/geodezia/phone-icon.svg"} className="hidden md:block" />
						<span
							style={{ fontFamily: "Poppins, sans-serif" }}
							className="text-[14px] md:text-normal pl-1 text-[#16384E] font-semibold"
						>
							+7 702 301 2796
						</span>
					</div>
				</div>
			</div>
			<nav
				style={{ fontFamily: "Poppins, sans-serif" }}
				className="hidden sm:flex flex-row gap-7 text-[18px] tracking-[5%] pb-4"
			>
				<a
					href="/"
					className={
						currentPath === "/"
							? "underline underline-offset-8 font-bold tracking-[5%]"
							: ""
					}
				>
					Главная
				</a>
				<a
					href="/services"
					className={
						currentPath === "/services"
							? "underline underline-offset-8 font-bold tracking-[5%]"
							: ""
					}
				>
					Услуги
				</a>
				<a
					href="/prices"
					className={
						currentPath === "/prices"
							? "underline underline-offset-8 font-bold tracking-[5%]"
							: ""
					}
				>
					Цены
				</a>
				<a
					href="/about-company"
					className={
						currentPath === "/about-company"
							? "underline underline-offset-8 font-bold tracking-[5%]"
							: ""
					}
				>
					О компании
				</a>
				<a
					href="/contacts"
					className={
						currentPath === "/contacts"
							? "underline underline-offset-8 font-bold tracking-[5%]"
							: ""
					}
				>
					Контакты
				</a>
			</nav>
		</header>
	);
};
