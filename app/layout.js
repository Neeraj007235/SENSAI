import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "AI Career Coach helps professionals advance their careers with personalized AI-driven career advice, interview preparation, smart resume creation, and real-time industry insights."
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="relative bg-muted/50 py-12 mt-12 overflow-hidden">
              <div className="absolute inset-0 animate-border bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-lg blur-xl opacity-20"></div>
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="text-lg sm:text-xl font-semibold mb-4">
                  Made with 🤍 by ÑÊÊRÅJ
                </p>
                <p className="text-sm sm:text-base opacity-80 hover:opacity-100 transition-opacity duration-300">
                  © {new Date().getFullYear()} AI Career Coach. All rights reserved.
                </p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
