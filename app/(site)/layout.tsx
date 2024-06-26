import { Metadata } from 'next';
import '../../styles/globals.css';
import { Open_Sans } from 'next/font/google';

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Review App",
  description: "Service for course reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta property="og:locale" content="ru_RU" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
