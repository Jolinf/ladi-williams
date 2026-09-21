import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata = {
  title: "Ladi Williams",
  description:
    "Ladi Williams — TV presenter, business journalist, panel moderator and media trainer.",
  metadataBase: new URL("https://ladiwilliams.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
