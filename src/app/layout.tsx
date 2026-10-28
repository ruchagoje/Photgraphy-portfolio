import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Mrs_Saint_Delafield } from "next/font/google";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Grain from "@/components/Grain";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import { site } from "@/config/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });
const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = { themeColor: "#171514" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <Providers>
          <a href="#main" className="skip">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <Grain />
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
