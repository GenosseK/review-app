import { Metadata } from 'next'
import styles from './page.module.css'
import '../../styles/globals.css'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
import { Header } from '../../shared/layout/Header/Header'
import { Sidebar } from '../../shared/layout/Sidebar/Sidebar'
import { Footer } from '../../shared/layout/Footer/Footer'

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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
