import "./globals.css";

import "harmony-theme/dist/output.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-2">
          {children}
        </main>
      </body>
    </html>
  );
}
