import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Christian Zintel",
	description: "Personal website of Christian Zintel",
};

export default function RootLayout({ children }) {
	return (
		<html lang="de">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
