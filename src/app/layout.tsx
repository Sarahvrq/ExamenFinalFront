import type { Metadata } from "next";
import "./globals.css";
import NavigatorPages from "./components/NavigatorPages";

export const metadata: Metadata = {
  title: "Final Front",
  description: "Usando API Rick&Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigatorPages />
        {children}
      </body>
    </html>
  );
}
