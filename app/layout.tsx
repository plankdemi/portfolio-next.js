import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Components//Header/header";
import Footer from "./Components/footer";
import ModalContext from "./Components/Contexts/modal-context";

import Body from "./Components/Body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLADISLASVAS.DEV",
  description: "Portfolio of Vladislavas Baradulinas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ModalContext>
        <Body className="min-h-screen flex flex-col justify-between">
          <Header className="flex justify-between items-center px-4 my-4 shadow-md text-3xl bg-slate-800 text-slate-100 py-2 z-50 "></Header>
          {children}
          <Footer className="flex justify-between items-center px-4 my-4 shadow-md text-3xl bg-slate-800 text-slate-100 py-2 sticky bottom-0"></Footer>
        </Body>
      </ModalContext>
    </html>
  );
}
