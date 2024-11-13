import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<body>
			<Header />
			<main className="bg-[#16384E] px-20">{children}</main>
			<Footer />
		</body>
	);
};
