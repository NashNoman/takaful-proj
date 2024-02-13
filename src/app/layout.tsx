import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Takaful";
const APP_DEFAULT_TITLE = "Takaful Microinsurance";
const APP_TITLE_TEMPLATE = "%s - Microinsurance";
const APP_DESCRIPTION = "Microinsurance for all!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <div className="py-2 px-4 border-b">
          <Link href="/">
            <p className="font-extrabold text-lg">Takaful</p>
          </Link>
        </div>
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
