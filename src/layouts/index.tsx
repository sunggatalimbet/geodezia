import type React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type LayoutProps = {
	children: React.ReactNode;
	currentPath: string;
};

export const Layout = ({ children, currentPath }: LayoutProps) => {
	return (
		<body>
			<Header currentPath={currentPath} />
			<main className="bg-[#16384E] px-20">{children}</main>
			<Footer />
		</body>
	);
};
