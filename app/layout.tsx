import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Todos App',
	description: 'My Todos App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`bg-slate-200 h-screen flex antialiased`}>
				{children}
			</body>
		</html>
	);
}
