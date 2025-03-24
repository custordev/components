import type { Metadata } from "next";

import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

// import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "E-commerce",
    "Components",
    "UI Library",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Shopping Cart",
    "Product Cards",
  ],
  authors: [
    {
      name: "Custor Components",
      url: "https://github.com/custordev/custor-components",
    },
  ],
  creator: "Custor Components",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@custordev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
