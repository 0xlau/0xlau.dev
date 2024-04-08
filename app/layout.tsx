import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "码农小易 - Timothy Lau",
    template: "%s | 码农小易 - Timothy Lau",
  },
  description: "技术解刨 & 日常分享 & 开源贡献",
  openGraph: {
    title: "0xlau.dev",
    description:
      "技术解刨 & 日常分享 & 开源贡献",
    url: "https://0xlau.dev",
    siteName: "0xlau.dev",
    locale: "zh-CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "thetimothylau",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
