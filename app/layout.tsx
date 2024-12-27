import { berkshire_swash } from '@/lib/fonts';
import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Members | Iskcon Project",
  description:
    "Iskcon Project is an initiate of Iskcon Asansol. It is a non-profit organization. It is a project to spread the teachings of Lord Krishna and Srila Prabhupada.",
  metadataBase: new URL("https://iskconproject.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iskconproject.com",
    images: [
      {
        url: "./images/logo/icon.svg",
        width: 1200,
        height: 630,
        alt: "Iskcon Project Asansol",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={berkshire_swash.className}>{children}</body>
    </html>
  );
}
