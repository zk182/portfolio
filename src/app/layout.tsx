import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
	title: 'Nicolas Battaglia',
	description: 'Just a cv'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" style={{ colorScheme: 'light dark' }}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
