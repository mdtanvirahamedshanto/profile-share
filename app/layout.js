import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "share your profile",
  description: "this is profile details share website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen bg-white text-black">
        {children}

        </div>
        </body>
    </html>
  );
}
