import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const customFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CollabOS — Developer Matchmaking",
  description: "Code collaboration made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        <main className="flex min-h-screen w-full flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
