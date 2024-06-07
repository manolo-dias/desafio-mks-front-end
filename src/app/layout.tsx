import Navbar from "@/@components/navbar";
import 'react-modern-drawer/dist/index.css'
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./global.css"
import Footer from "@/@components/footer";
import ApplicationProviders from "./application.providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Desafio",
  description: "MKS LTDA Desafio front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApplicationProviders>
        <body
          className={montserrat.className}
          style={{
            minHeight: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ApplicationProviders>
    </html>
  );
}
