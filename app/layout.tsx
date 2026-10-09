import type { Metadata } from "next";
import { Playfair_Display_SC, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@/providers/queryProvider";
import { Toaster } from "sonner";

const geistSans = Playfair_Display_SC({
  variable: "--font-playfair-mono",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Cinzel_Decorative({
  variable: "--font-geist-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School MVP",
  description: "Created by Sally Resch",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col flex-1">
        <Toaster />
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
