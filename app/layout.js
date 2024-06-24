import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Your Profile Details",
  description: " Share your profile details and service is others",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full sm:h-screen bg-[#004643] text-white ">
          <Navbar />
        {children}

        </div>
        </body>
    </html>
  );
}
